import Head from "next/head";
import { checkUserRole } from "../../services/auth";
import { getUsersByRole, addUpCliente } from "../../services/clientes";
import { getSession } from "next-auth/react";

import Layout from "../../layouts/Admin";
import HelloBar from "../../components/helloBar";

import { useState, useEffect } from "react";
import { Select, TextInput, NumberInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

import { BlockTitle } from "../../components/titles";
import { Tbhr } from "../../components/misc";

export default function Clientes({ user, clientes, jwt }) {

    const clienteForm = useForm({
        initialValues: {
            email: "",
            nome: "",
        },

        validate: {},
    });

    const clienteSubmit =  clienteForm.onSubmit(
        async (values) =>  {
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

    return (
        <>
            <Head>
                <title>Presence - CLientes</title>
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
                    <div className="grid grid-cols-12 gap-4">
                        <div className="sm:col-span-6">
                            <TextInput
                                withAsterisk
                                label="Nome"
                                placeholder="Nome"
                                {...clienteForm.getInputProps("nome")}
                            />
                        </div>
                        <div className="sm:col-span-6">
                            <TextInput
                                withAsterisk
                                label="Email"
                                placeholder="email"
                                {...clienteForm.getInputProps("email")}
                            />
                        </div>
                    </div>

                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>

                <BlockTitle>Clientes</BlockTitle>
                <Tbhr />

                { clientes && 
                    clientes.map((client, id) => <div key={id}>{client.name}</div> )
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

    return {
        props: {
            user: session.user,
            clientes,
            jwt: session.jwt
        },
    };
}
