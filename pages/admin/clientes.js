import Head from "next/head";
import { checkUserRole } from "../../services/auth";
import { getUsersByRole, addUpCliente } from "../../services/clientes";
import { getSession } from "next-auth/react";

import Layout from "../../layouts/Admin";
import HelloBar from "../../components/helloBar";

import { useState, useEffect } from "react";
import { Select, TextInput, Button, Group, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";

import { BlockTitle } from "../../components/titles";
import { Tbhr } from "../../components/misc";

export default function Clientes({ user, clientes, jwt }) {

    const [clientlist, setClientlist] = useState(clientes);

    const clienteForm = useForm({
        initialValues: {
            email: "",
            nome: "",
            organizacao: ""
        },
        validate: {
            nome: (value) => (value.length < 2 ? 'Nome precisa ter pelo menos 2 dígitos' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
            organizacao: (value) => (value.length < 2 ? 'Nome precisa ter pelo menos 2 dígitos' : null),
        },
    });

    //for do cliente master
    const clienteSubmit =  clienteForm.onSubmit(
        async (values) =>  {
            values.role = 4; //CAdmin
            console.log('value', values);
            const res = await addUpCliente(jwt, values);
            console.log('res', res);
        },
        (errors) => console.log(errors)
    );

    const breads = [
        { title: 'Admin', href: '/admin' },
        { title: 'Clientes', href: '/admin/clientes' },
    ];

    useEffect(() => {
        console.log('clientlist', clientlist);
        
    }, [])
    

    return (
        <>
            <Head>
                <title>Presence - Clientes</title>
            </Head>
            <section>
                <HelloBar user={user} breadcrumbs={breads} />

                <br /><br />
                <BlockTitle>Adicionar novo cliente</BlockTitle>
                <Tbhr />
                <form onSubmit={clienteSubmit}>
                    <TextInput
                        hidden
                        {...clienteForm.getInputProps("id")}
                    />
                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-12 md:col-span-4">
                            <TextInput
                                withAsterisk
                                label="Nome (usuário master)"
                                {...clienteForm.getInputProps("nome")}
                            />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <TextInput
                                withAsterisk
                                label="Email"
                                {...clienteForm.getInputProps("email")}
                            />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <TextInput
                                withAsterisk
                                label="Organização"
                                {...clienteForm.getInputProps("organizacao")}
                            />
                        </div>

                    </div>

                    <Group position="right" mt="md">
                        <Button type="submit">Registrar Usuário</Button>
                    </Group>
                </form>

                <BlockTitle>Clientes</BlockTitle>
                <Tbhr />

                { clientlist && 
                    clientlist.map((client, index) => <div key={index}>{client.name}, {client.email}, {client.organizacao.nome}</div> )
                }

            </section>
        </>
    );
}

Clientes.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const returnedObj = checkUserRole (session, "Admin");
    if(returnedObj != null) return returnedObj;

    const clientes = await getUsersByRole(session.jwt, "CAdmin");
    console.log('CLIENTES > ', clientes);

    return {
        props: {
            user: session.user,
            clientes,
            jwt: session.jwt
        },
    };
}
