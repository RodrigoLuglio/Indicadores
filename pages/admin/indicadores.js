import Head from "next/head";

import Layout from "../../layouts/Admin";

import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import { Select, TextInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

import { getPadroes, addUpPadrao, deletePadrao } from "../../services/normas";

export default function Indicadores({ padroesData, padroesSelectData, jwt }) {
    const [padroes, setPadroes] = useState(padroesData);
    const [padroesSelect, setPadroesSelect] = useState(padroesSelectData);
    const [selectedPadrao, setSelectedPadrao] = useState(null);
    const padroesForm = useForm({
        initialValues: {
            id: "",
            numero: "",
            nome: "",
        },

        validate: {},
    });

    const updatePadroesData = async () => {
        const padroesSelectDados = [];
        const padroesDados = await getPadroes(jwt);
        setPadroes(padroesDados.data);

        padroesDados.data.forEach((padrao) => {
            padroesSelectDados.push({
                valor: padrao.attributes.numero,
                value: padrao.id,
                text: padrao.attributes.nome,
                label: `${padrao.attributes.numero}. ${padrao.attributes.nome}`,
            });
        });
        setPadroesSelect(padroesSelectDados);
    };

    const padroesSubmit = padroesForm.onSubmit(
        async (values) => {
            const res = await addUpPadrao(jwt, values);
            await updatePadroesData();
        },
        (errors) => console.log(errors)
    );

    const novoPadrao = () => {
        padroesForm.reset();
        setSelectedPadrao(null);
    };

    useEffect(() => {
        if (selectedPadrao != undefined) {
            const dadosPadrao = padroes.filter((padrao) => {
                return padrao.id == selectedPadrao;
            });

            const padraoSelecionado = {
                id: dadosPadrao[0].id,
                numero: dadosPadrao[0].attributes.numero,
                nome: dadosPadrao[0].attributes.nome,
            };
            padroesForm.setValues(padraoSelecionado);
        } else {
            padroesForm.reset();
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
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione um padrão"
                            data={padroesSelect}
                            value={selectedPadrao}
                            onChange={setSelectedPadrao}
                            on
                        />
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={novoPadrao}
                        >
                            +
                        </Button>
                    </div>

                    <div className="">
                        <h3>Adicionar ou editar Padrões</h3>
                        <form onSubmit={padroesSubmit}>
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
                                <Button type="submit">Salvar</Button>
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
            valor: padrao.attributes.numero,
            value: padrao.id,
            text: padrao.attributes.nome,
            label: `${padrao.attributes.numero}. ${padrao.attributes.nome}`,
        });
    });

    return {
        props: {
            jwt: session.jwt,
            padroesData: padroes.data,
            padroesSelectData: padroesSelectData,
        },
    };
}
