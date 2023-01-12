import Head from "next/head";
import { checkUserRole } from "../../services/auth";
import { getSession } from "next-auth/react";
import { notifyClientRegister } from "../../services/email";
import { getUsersByRole, addUpCliente, getEmployees } from "../../services/clientes";
import { orderByCol } from "../../services/utils";

import Layout from "../../layouts/Admin";
import HelloBar from "../../components/helloBar";

import { useState, useEffect, createContext } from "react";
import { TextInput, Button, Select, Alert } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconAlertCircle, IconCheck } from '@tabler/icons';

import { BlockTitle } from "../../components/titles";
import { Tbhr, Loading} from "../../components/misc";

// const ClientContext = createContext('light');
export default function Gri({ user, clientes, employees, jwt, clientSelect }) {

    const [showError, setShowError] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

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
            setShowLoading(true);
            values.role = 4;
        },
        (errors) => console.log(errors)
    );

    const breads = [
        { title: 'Admin', href: '/admin' },
        { title: 'Incluir : GRI', href: '/admin/gri' },
    ];

    return (
        <>
            <Head>
                <title>Presence - Clientes</title>
            </Head>
            <section>
                <HelloBar user={user} breadcrumbs={breads} />

                <br /><br />
                <BlockTitle>Montagem do Relatório - GRI</BlockTitle>
                <Tbhr />
                <form onSubmit={clienteSubmit}>
                
                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-12 md:col-span-8">
                            <Select
                                label="Cliente"
                                placeholder="Selecione ou busque pelo nome do cliente"
                                data={clientSelect}
                                searchable
                                nothingFound=":( certeza?"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            { !showLoading && 
                                <Button type="submit">Iniciar montagem do relatório</Button>
                            }
                            { showLoading && 
                                <Loading color="cyan" text="registrando usuário...aguarde" />                    
                            }
                        </div>

                    </div>

                    

                    { showError && 
                        <Alert icon={<IconAlertCircle size={16} />} title="Erro" color="red" variant="filled" className="mb-8">
                            { showError }
                        </Alert>
                    }
                </form>
                
            </section>
        </>
    );
}

Gri.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const returnedObj = checkUserRole (session, "Admin");
    if(returnedObj != null) return returnedObj;

    const clientes = await getUsersByRole(session.jwt, "CAdmin");
    const clientSelect = await clientes.map((client, index) => {
        return { 
            value : client.organizacao.id, 
            label : client.organizacao.nome 
        }
    });
    const orderedClient = orderByCol(clientSelect, 'name');

    return {
        props: {
            user: session.user,
            jwt: session.jwt,
            clientes,
            clientSelect: orderedClient
        },
    };
}
