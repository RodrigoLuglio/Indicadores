import Head from "next/head";
import { checkUserRole } from "../../services/auth";
import { getSession } from "next-auth/react";
import { notifyClientRegister } from "../../services/email";
import { getUsersByRole, addUpCliente, getEmployees } from "../../services/clientes";
import { generatePassword } from "../../services/utils";

import Layout from "../../layouts/Admin";
import HelloBar from "../../components/helloBar";

import { useState, useEffect, createContext } from "react";
import { TextInput, Button, Group, Alert } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconAlertCircle, IconCheck } from '@tabler/icons';

import { BlockTitle } from "../../components/titles";
import { Tbhr } from "../../components/misc";
import ClientRowList from "../../components/clientRowList"

// const ClientContext = createContext('light');
export default function Clientes({ user, clientes, employees, jwt }) {

    const [showError, setShowError] = useState(false);
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

    //form do cliente master
    const clienteSubmit =  clienteForm.onSubmit(
        async (values) =>  {
            values.role = 4; //CAdmin
            values.password = generatePassword(12);
            
            // const res = await addUpCliente(jwt, values);
            // console.log('res ::: ', res);
            
            const notify = await notifyClientRegister(values);
            console.log('notify', notify)

            // if(res.status == 400){
            //     setShowError(res.message);
            // }else{
            //     setClientlist( prevState => {
            //         return [ ...prevState, res ]
            //     });
            //     showNotification({
            //         title: "Sucesso",
            //         message: "Cliente cadastrado!",
            //         icon: <IconCheck size={18} />,
            //         color: 'teal',
            //         autoClose: 5000,
            //     });
            //     setShowError(false);
            // }
        },
        (errors) => console.log(errors)
    );

    const breads = [
        { title: 'Admin', href: '/admin' },
        { title: 'Clientes', href: '/admin/clientes' },
    ];

    

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

                    { showError && 
                        <Alert icon={<IconAlertCircle size={16} />} title="Erro" color="red" variant="filled" className="mb-8">
                            { showError }
                        </Alert>
                    }
                </form>
                <BlockTitle>Clientes</BlockTitle>
                <Tbhr />
                { clientlist && 
                    clientlist.map((client, index) => <ClientRowList key={index} client={client} employees={employees} jwt={jwt} /> )
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
    const employees = await getEmployees(session.jwt);
    console.log('CLIENTES > ', clientes);
    console.log('EMPLOYEES > ', employees);

    return {
        props: {
            user: session.user,
            jwt: session.jwt,
            clientes,
            employees
        },
    };
}
