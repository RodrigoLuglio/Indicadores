import Head from "next/head";

import Layout from "../../layouts/Admin";

import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { Select, TextInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

import { getPadroes } from "../../services/normas";

export default function Indicadores({ padroesData, padroesSelectData }) {
    const [padroes, setPadroes] = useState(padroesData);
    const [selectedPadrao, setSelectedPadrao] = useState(null);
    const padroesForm = useForm({
        initialValues: {
            numero: "",
            nome: "",
        },

        validate: {},
    });

    useEffect(() => {
        if (selectedPadrao != undefined) {
            const dadosPadrao = padroesData.filter((padrao) => {
                return padrao.attributes.numero == selectedPadrao;
            });

            const padrao = {
                id: dadosPadrao[0].id,
                numero: dadosPadrao[0].attributes.numero,
                nome: dadosPadrao[0].attributes.nome,
            };

            console.log(padrao);
            // padroesForm.setFieldValue(
            //     "numero",
            //     dadosPadrao[0].attributes.numero
            // );
            // padroesForm.setFieldValue("nome", dadosPadrao[0].attributes.nome);
            padroesForm.setValues(padrao);
        }
    }, [selectedPadrao]);

    return (
        <>
            <Head>
                <title>Presence - Indicadores</title>
            </Head>
            <section>
                <h1>Normas e indicadores</h1>
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
                        <form
                            onSubmit={padroesForm.onSubmit((values) =>
                                console.log(values)
                            )}
                        >
                            <TextInput
                                hidden
                                {...padroesForm.getInputProps("id")}
                            />
                            <TextInput
                                withAsterisk
                                label="Número"
                                placeholder="Número"
                                {...padroesForm.getInputProps("numero")}
                            />
                            <TextInput
                                withAsterisk
                                label="Nome"
                                placeholder="Nome"
                                {...padroesForm.getInputProps("nome")}
                            />

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
            padroesData: padroes.data,
            padroesSelectData: padroesSelectData,
        },
    };
}
