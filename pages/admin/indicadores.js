import Head from "next/head";

import Layout from "../../layouts/Admin";

import { useState, useEffect } from "react";
import { getToken } from "next-auth/jwt";
import { Select, TextInput, Button, Group, Collapse } from "@mantine/core";
import { useForm } from "@mantine/form";

import { getNormas, addUpItem, deleteItem } from "../../services/normas";

export default function Indicadores({ normaData, padroesSelectData, jwt }) {
    const [norma, setNorma] = useState(normaData);
    const [padroesSelect, setPadroesSelect] = useState(padroesSelectData);
    const [secoesSelect, setSecoesSelect] = useState([]);
    const [conteudosSelect, setConteudosSelect] = useState([]);
    const [camposSelect, setCamposSelect] = useState([]);
    const [selectedPadrao, setSelectedPadrao] = useState(null);
    const [selectedSecao, setSelectedSecao] = useState(null);
    const [selectedConteudo, setSelectedConteudo] = useState(null);
    const [selectedCampo, setSelectedCampo] = useState(null);
    const [padraoOpen, setPadraoOpen] = useState(false);
    const [secaoOpen, setSecaoOpen] = useState(false);
    const [conteudoOpen, setConteudoOpen] = useState(false);
    const [campoOpen, setCampoOpen] = useState(false);
    const padroesForm = useForm({
        initialValues: {
            id: "",
            numero: "",
            nome: "",
            norma: "",
        },

        validate: {},
    });
    const secoesForm = useForm({
        initialValues: {
            id: "",
            numero: "",
            nome: "",
            padrao: "",
        },

        validate: {},
    });
    const conteudosForm = useForm({
        initialValues: {
            id: "",
            numero: "",
            nome: "",
            descricao: "",
            secao: "",
        },

        validate: {},
    });
    const camposForm = useForm({
        initialValues: {
            id: "",
            numero: "",
            texto: "",
            tipo: "",
            conteudo: "",
        },

        validate: {},
    });

    const updatePadroesData = async () => {
        const padroesSelectDados = [];
        const normaDados = await getNormas(jwt);
        setNorma(normaDados.data[0]);

        normaDados.data[0].attributes.padroes.data.forEach((padrao) => {
            padroesSelectDados.push({
                id: padrao.id,
                valor: padrao.attributes.numero,
                value: padrao.id,
                text: padrao.attributes.nome,
                label: `${padrao.attributes.numero}. ${padrao.attributes.nome}`,
            });
        });
        setPadroesSelect(padroesSelectDados);
    };

    const updateSecoesData = async () => {
        const secoesSelectDados = [];
        const normaDados = await getNormas(jwt);
        setNorma(normaDados.data[0]);

        const dadosPadrao = normaDados.data[0].attributes.padroes.data.filter(
            (padrao) => {
                return padrao.id == selectedPadrao;
            }
        );

        dadosPadrao[0].attributes.secoes.data.forEach((secao) => {
            secoesSelectDados.push({
                id: secao.id,
                valor: secao.attributes.numero,
                value: secao.id,
                text: secao.attributes.nome,
                label: `${secao.attributes.numero}. ${secao.attributes.nome}`,
            });
        });
        setSecoesSelect(secoesSelectDados);
    };
    const updateConteudosData = async () => {
        const conteudosSelectDados = [];
        const normaDados = await getNormas(jwt);
        setNorma(normaDados.data[0]);

        const dadosPadrao = normaDados.data[0].attributes.padroes.data.filter(
            (padrao) => {
                return padrao.id == selectedPadrao;
            }
        );

        const dadosSecao = dadosPadrao[0].attributes.secoes.data.filter(
            (secao) => {
                return secao.id == selectedSecao;
            }
        );

        dadosSecao[0].attributes.conteudos.data.forEach((conteudo) => {
            conteudosSelectDados.push({
                id: conteudo.id,
                valor: conteudo.attributes.numero,
                value: conteudo.id,
                text: conteudo.attributes.nome,
                descricao: conteudo.attributes.descricao,
                label: `${conteudo.attributes.numero}. ${conteudo.attributes.nome}`,
            });
        });
        setConteudosSelect(conteudosSelectDados);
    };
    const updateCamposData = async () => {
        const camposSelectDados = [];
        const normaDados = await getNormas(jwt);
        setNorma(normaDados.data[0]);

        const dadosPadrao = normaDados.data[0].attributes.padroes.data.filter(
            (padrao) => {
                return padrao.id == selectedPadrao;
            }
        );

        const dadosSecao = dadosPadrao[0].attributes.secoes.data.filter(
            (secao) => {
                return secao.id == selectedSecao;
            }
        );

        const dadosConteudo = dadosSecao[0].attributes.conteudos.data.filter(
            (conteudo) => {
                return conteudo.id == selectedConteudo;
            }
        );

        dadosConteudo[0].attributes.campos.data.forEach((campo) => {
            camposSelectDados.push({
                id: campo.id,
                valor: campo.attributes.numero,
                value: campo.id,
                texto: campo.attributes.texto,
                tipo: campo.attributes.tipo,
                config: campo.attributes.config,
                label: `${campo.attributes.numero}. ${campo.attributes.texto}`,
            });
        });
        setCamposSelect(camposSelectDados);
    };

    const padroesSubmit = padroesForm.onSubmit(
        async (values) => {
            // Norma GRI "hardcoded" na criação e edição de padrões
            if (values.id == "") {
                values.norma = 1;
            }
            const collection = "padroes";
            const res = await addUpItem(jwt, collection, values);
            await updatePadroesData();
            setPadraoOpen(false);
        },
        (errors) => console.log(errors)
    );

    const secoesSubmit = secoesForm.onSubmit(
        async (values) => {
            if (values.id == "") {
                values.padrao = selectedPadrao;
            }
            const collection = "secoes";
            const res = await addUpItem(jwt, collection, values);
            await updateSecoesData();
            setSecaoOpen(false);
        },
        (errors) => console.log(errors)
    );
    const conteudosSubmit = conteudosForm.onSubmit(
        async (values) => {
            if (values.id == "") {
                values.secao = selectedSecao;
            }
            const collection = "conteudos";
            const res = await addUpItem(jwt, collection, values);
            await updateConteudosData();
            setConteudoOpen(false);
        },
        (errors) => console.log(errors)
    );
    const camposSubmit = camposForm.onSubmit(
        async (values) => {
            if (values.id == "") {
                values.conteudo = selectedConteudo;
            }
            const collection = "campos";
            const res = await addUpItem(jwt, collection, values);
            await updateCamposData();
            setCampoOpen(false);
        },
        (errors) => console.log(errors)
    );
    const novoPadrao = () => {
        padroesForm.reset();
        setSelectedPadrao(null);
        setPadraoOpen(true);
    };
    const novaSecao = () => {
        secoesForm.reset();
        setSelectedSecao(null);
        setSecaoOpen(true);
    };
    const novoConteudo = () => {
        conteudosForm.reset();
        setSelectedConteudo(null);
        setConteudoOpen(true);
    };
    const novoCampo = () => {
        camposForm.reset();
        setSelectedCampo(null);
        setCampoOpen(true);
    };

    const editPadrao = () => {
        if (selectedPadrao != undefined) {
            const dadosPadrao = norma.attributes.padroes.data.filter(
                (padrao) => {
                    return padrao.id == selectedPadrao;
                }
            );

            const padraoSelecionado = {
                id: dadosPadrao[0].id,
                numero: dadosPadrao[0].attributes.numero,
                nome: dadosPadrao[0].attributes.nome,
                norma: dadosPadrao[0].attributes.norma,
            };
            padroesForm.setValues(padraoSelecionado);
        } else {
            padroesForm.reset();
        }
        setPadraoOpen(true);
    };
    const editSecao = () => {
        if (selectedSecao != undefined) {
            const dadosPadrao = norma.attributes.padroes.data.filter(
                (padrao) => {
                    return padrao.id == selectedPadrao;
                }
            );

            const dadosSecao = dadosPadrao[0].attributes.secoes.data.filter(
                (secao) => {
                    return secao.id == selectedSecao;
                }
            );

            const secaoSelecionada = {
                id: dadosSecao[0].id,
                numero: dadosSecao[0].attributes.numero,
                nome: dadosSecao[0].attributes.nome,
                padrao: dadosSecao[0].attributes.padrao.data.id,
            };
            secoesForm.setValues(secaoSelecionada);
        } else {
            secoesForm.reset();
        }
        setSecaoOpen(true);
    };
    const editConteudo = () => {
        if (selectedConteudo != undefined) {
            const dadosPadrao = norma.attributes.padroes.data.filter(
                (padrao) => {
                    return padrao.id == selectedPadrao;
                }
            );

            const dadosSecao = dadosPadrao[0].attributes.secoes.data.filter(
                (secao) => {
                    return secao.id == selectedSecao;
                }
            );

            const dadosConteudo =
                dadosSecao[0].attributes.conteudos.data.filter((conteudo) => {
                    return conteudo.id == selectedConteudo;
                });
            const conteudoSelecionado = {
                id: dadosConteudo[0].id,
                numero: dadosConteudo[0].attributes.numero,
                nome: dadosConteudo[0].attributes.nome,
                descricao: dadosConteudo[0].attributes.descricao,
                secao: dadosConteudo[0].attributes.secao.data.id,
            };
            conteudosForm.setValues(conteudoSelecionado);
        } else {
            conteudosForm.reset();
        }
        setConteudoOpen(true);
    };
    const editCampo = () => {
        if (selectedCampo != undefined) {
            const dadosPadrao = norma.attributes.padroes.data.filter(
                (padrao) => {
                    return padrao.id == selectedPadrao;
                }
            );

            const dadosSecao = dadosPadrao[0].attributes.secoes.data.filter(
                (secao) => {
                    return secao.id == selectedSecao;
                }
            );

            const dadosConteudo =
                dadosSecao[0].attributes.conteudos.data.filter((conteudo) => {
                    return conteudo.id == selectedConteudo;
                });

            const dadosCampo = dadosConteudo[0].attributes.campos.data.filter(
                (campo) => {
                    return campo.id == selectedCampo;
                }
            );

            const campoSelecionado = {
                id: dadosCampo[0].id,
                numero: dadosCampo[0].attributes.numero,
                texto: dadosCampo[0].attributes.texto,
                tipo: dadosCampo[0].attributes.tipo,
                conteudo: dadosCampo[0].attributes.conteudo.data.id,
            };
            camposForm.setValues(campoSelecionado);
        } else {
            camposForm.reset();
        }
        setCampoOpen(true);
    };

    useEffect(() => {
        if (selectedPadrao == undefined) {
            padroesForm.reset();
        } else {
            const dadosPadrao = norma.attributes.padroes.data.filter(
                (padrao) => {
                    return padrao.id == selectedPadrao;
                }
            );

            const secaoSelectDados = [];
            dadosPadrao[0].attributes.secoes.data.forEach((secao) => {
                secaoSelectDados.push({
                    id: secao.id,
                    valor: secao.attributes.numero,
                    value: secao.id,
                    text: secao.attributes.nome,
                    label: `${secao.attributes.numero}. ${secao.attributes.nome}`,
                });
            });
            setSecoesSelect(secaoSelectDados);
        }
    }, [selectedPadrao]);
    useEffect(() => {
        if (selectedSecao == undefined) {
            secoesForm.reset();
        } else {
            const dadosPadrao = norma.attributes.padroes.data.filter(
                (padrao) => {
                    return padrao.id == selectedPadrao;
                }
            );
            const dadosSecao = dadosPadrao[0].attributes.secoes.data.filter(
                (secao) => {
                    return secao.id == selectedSecao;
                }
            );

            const conteudoSelectDados = [];
            dadosSecao[0].attributes.conteudos.data.forEach((conteudo) => {
                conteudoSelectDados.push({
                    id: conteudo.id,
                    valor: conteudo.attributes.numero,
                    value: conteudo.id,
                    text: conteudo.attributes.nome,
                    descricao: conteudo.attributes.descricao,
                    label: `${conteudo.attributes.numero}. ${conteudo.attributes.nome}`,
                });
            });
            setConteudosSelect(conteudoSelectDados);
        }
    }, [selectedSecao]);
    useEffect(() => {
        if (selectedConteudo == undefined) {
            conteudosForm.reset();
        } else {
            const dadosPadrao = norma.attributes.padroes.data.filter(
                (padrao) => {
                    return padrao.id == selectedPadrao;
                }
            );
            const dadosSecao = dadosPadrao[0].attributes.secoes.data.filter(
                (secao) => {
                    return secao.id == selectedSecao;
                }
            );

            const dadosConteudo =
                dadosSecao[0].attributes.conteudos.data.filter((conteudo) => {
                    return conteudo.id == selectedConteudo;
                });

            const dadosCampo = dadosConteudo[0].attributes.campos.data.filter(
                (campo) => {
                    return campo.id == selectedCampo;
                }
            );

            const campoSelectDados = [];
            dadosConteudo[0].attributes.campos.data.forEach((campo) => {
                campoSelectDados.push({
                    id: campo.id,
                    numero: campo.attributes.numero,
                    value: campo.id,
                    texto: campo.attributes.texto,
                    tipo: campo.attributes.campo,
                    label: `${campo.attributes.numero}. ${campo.attributes.texto}`,
                });
            });
            setCamposSelect(campoSelectDados);
        }
    }, [selectedConteudo]);
    useEffect(() => {
        if (selectedCampo == undefined) {
            camposForm.reset();
        }
    }, [selectedCampo]);

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
                        />
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={novoPadrao}
                        >
                            +
                        </Button>
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={editPadrao}
                        >
                            E
                        </Button>
                    </div>

                    <Collapse in={padraoOpen}>
                        <div className="">
                            <h3>Adicionar ou editar Padrões</h3>
                            <form onSubmit={padroesSubmit}>
                                <TextInput
                                    hidden
                                    {...padroesForm.getInputProps("id")}
                                />
                                <TextInput
                                    hidden
                                    {...padroesForm.getInputProps("norma")}
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
                    </Collapse>
                </div>
                <div className="">
                    <h2>Seções</h2>
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione uma seção"
                            data={secoesSelect}
                            value={selectedSecao}
                            onChange={setSelectedSecao}
                        />
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={novaSecao}
                        >
                            +
                        </Button>
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={editSecao}
                        >
                            E
                        </Button>
                    </div>

                    <Collapse in={secaoOpen}>
                        <div className="">
                            <h3>Adicionar ou editar Seção</h3>
                            <form onSubmit={secoesSubmit}>
                                <TextInput
                                    hidden
                                    {...secoesForm.getInputProps("id")}
                                />
                                <TextInput
                                    hidden
                                    {...secoesForm.getInputProps("padrao")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Número"
                                    placeholder="Número"
                                    {...secoesForm.getInputProps("numero")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Nome"
                                    placeholder="Nome"
                                    {...secoesForm.getInputProps("nome")}
                                />

                                <Group position="right" mt="md">
                                    <Button type="submit">Salvar</Button>
                                </Group>
                            </form>
                        </div>
                    </Collapse>
                </div>
                <div className="">
                    <h2>Conteúdos</h2>
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione uma seção"
                            data={conteudosSelect}
                            value={selectedConteudo}
                            onChange={setSelectedConteudo}
                        />
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={novoConteudo}
                        >
                            +
                        </Button>
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={editConteudo}
                        >
                            E
                        </Button>
                    </div>
                    <Collapse in={conteudoOpen}>
                        <div className="">
                            <h3>Adicionar ou editar Conteúdo</h3>
                            <form onSubmit={conteudosSubmit}>
                                <TextInput
                                    hidden
                                    {...conteudosForm.getInputProps("id")}
                                />
                                <TextInput
                                    hidden
                                    {...conteudosForm.getInputProps("secao")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Número"
                                    placeholder="Número"
                                    {...conteudosForm.getInputProps("numero")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Nome"
                                    placeholder="Nome"
                                    {...conteudosForm.getInputProps("nome")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Descrição"
                                    placeholder="Descrição"
                                    {...conteudosForm.getInputProps(
                                        "descricao"
                                    )}
                                />
                                <Group position="right" mt="md">
                                    <Button type="submit">Salvar</Button>
                                </Group>
                            </form>
                        </div>
                    </Collapse>
                </div>

                <div className="">
                    <h2>Campos</h2>
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione uma campo"
                            data={camposSelect}
                            value={selectedCampo}
                            onChange={setSelectedCampo}
                        />
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={novoCampo}
                        >
                            +
                        </Button>
                        <Button
                            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
                            onClick={editCampo}
                        >
                            E
                        </Button>
                    </div>
                    <Collapse in={campoOpen}>
                        <div className="">
                            <h3>Adicionar ou editar Campo</h3>
                            <form onSubmit={camposSubmit}>
                                <TextInput
                                    hidden
                                    {...camposForm.getInputProps("id")}
                                />
                                <TextInput
                                    hidden
                                    {...camposForm.getInputProps("conteudo")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Número"
                                    placeholder="Número"
                                    {...camposForm.getInputProps("numero")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Texto"
                                    placeholder="Texto"
                                    {...camposForm.getInputProps("texto")}
                                />
                                <Select
                                    withAsterisk
                                    label="Tipo"
                                    placeholder="Selecione o tipo"
                                    data={[
                                        { value: "nenhum", label: "Nenhum" },
                                        { value: "numero", label: "Numérico" },
                                        { value: "texto", label: "Texto" },
                                        { value: "tabela", label: "Tabela" },
                                    ]}
                                    {...camposForm.getInputProps("tipo")}
                                />

                                <Group position="right" mt="md">
                                    <Button type="submit">Salvar</Button>
                                </Group>
                            </form>
                        </div>
                    </Collapse>
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

    const normas = await getNormas(session.jwt);

    const padroesSelectData = [];

    normas.data[0].attributes.padroes.data.forEach((padrao) => {
        padroesSelectData.push({
            id: padrao.id,
            valor: padrao.attributes.numero,
            value: padrao.id,
            text: padrao.attributes.nome,
            label: `${padrao.attributes.numero}. ${padrao.attributes.nome}`,
        });
    });

    return {
        props: {
            jwt: session.jwt,
            normaData: normas.data[0],
            padroesSelectData: padroesSelectData,
        },
    };
}
