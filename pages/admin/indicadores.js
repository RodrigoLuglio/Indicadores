import Head from "next/head";

import Layout from "../../layouts/Admin";
import HelloBar from "../../components/helloBar";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { Select, TextInput, NumberInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

import { getPadroes } from "../../services/normas";
import { Tbhr } from "../../components/misc";

export default function Indicadores({ user, padroesData, padroesSelectData }) {


    const [padroes, setPadroes] = useState(padroesData);
    const [selectedPadrao, setSelectedPadrao] = useState(null);
    const padroesForm = useForm({
        initialValues: {
            numero: "",
            nome: "",
        },

        validate: {},
    });

    const padroesSubmit = padroesForm.onSubmit(
        (values) => console.log(values),
        (errors) => console.log(errors)
    );

    useEffect(() => {
        if (selectedPadrao != undefined) {
            const dadosPadrao = padroesData.filter((padrao) => {
                return padrao.attributes.numero == selectedPadrao;
            });

            const padrao = {
                id: dadosPadrao[0].id,
                numero: parseInt(dadosPadrao[0].attributes.numero),
                nome: dadosPadrao[0].attributes.nome,
            };
            padroesForm.setValues(padrao);
        }
    }, [selectedPadrao]);

    const breads = [
        { title: 'Admin', href: '/admin' },
        { title: 'Normas e indicadores', href: '/admin/indicadores' },
    ];

    return (
        <>
            <Head>
                <title>Presence - Indicadores</title>
            </Head>
            <section>
                <HelloBar user={user} breadcrumbs={breads} />

                <br /><br />
                <div className="">
                    <h2>Padrões</h2>
                    <Select
                        searchable
                        clearable
                        placeholder="Selecione um padrão"
                        data={padroesSelectData}
                        value={selectedPadrao}
                        onChange={setSelectedPadrao}
                    />
                    <div className="">
                        <h3>Adicionar ou editar Padrões</h3>
                        <Tbhr />
                        <form onSubmit={padroesSubmit}>
                            <TextInput
                                hidden
                                {...padroesForm.getInputProps("id")}
                            />
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-3 sm:col-span-2 2xl:col-span-1">
                                    <NumberInput
                                        withAsterisk
                                        label="Número"
                                        placeholder="Número"
                                        {...padroesForm.getInputProps("numero")}
                                    />
                                </div>
                                <div className="col-span-9 sm:col-span-10 2xl:col-span-11">
                                    <TextInput
                                        withAsterisk
                                        label="Nome"
                                        placeholder="Nome"
                                        {...padroesForm.getInputProps("nome")}
                                    />
                                </div>
                            </div>

                            <Group position="right" mt="md">
                                <Button type="submit">Submit</Button>
                            </Group>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

Indicadores.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
    const session = await getToken(context);
    // const session = await getSession(context);

    if (session == null || session.role != "Admin") {
        return {
            redirect: {
                destination: "/auth/not-authenticated",
                permanent: true,
            },
        };
    }

    const padroes = await getPadroes(session.jwt);

    const padroesSelectData = [];

    padroes.data.forEach((padrao) => {
        padroesSelectData.push({
            value: padrao.attributes.numero,
            text: padrao.attributes.nome,
            label: `${padrao.attributes.numero}. ${padrao.attributes.nome}`,
        });
    });

    return {
        props: {
            user: session,
            padroesData: padroes.data,
            padroesSelectData: padroesSelectData,
        },
    };
}
