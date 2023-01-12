import Head from "next/head";
import { checkUserRole } from "../../services/auth";
import { getSession } from "next-auth/react";

import { showNotification } from "@mantine/notifications";
import { IconCheck } from '@tabler/icons';

import Layout from "../../layouts/Admin";
import HelloBar from "../../components/helloBar";
import EditBtn from "../../components/buttons/editBtn";
import AddBtn from "../../components/buttons/addBtn";
import { BlockTitle, SubBlockTitle } from "../../components/titles";
import { Tbhr, TitleBadge, Loading} from "../../components/misc";
import TipTap from "../../components/tiptap";

import { useState, useEffect } from "react";
import { getToken } from "next-auth/jwt";
import {
    Select,
    TextInput,
    Button,
    Group,
    Collapse,
    Switch,
    ActionIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconTrash } from "@tabler/icons";
import { randomId } from "@mantine/hooks";

import { getNormas, addUpItem, deleteItem } from "../../services/normas";

export default function Indicadores({ user, normaData, padroesSelectData, jwt }) {
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
    const [isLoadingPadrao, setIsLoadingPadrao] = useState(false);
    const [isLoadingSecao, setIsLoadingSecao] = useState(false);
    const [isLoadingConteudo, setIsLoadingConteudo] = useState(false);
    const [isLoadingCampo, setIsLoadingCampo] = useState(false);
    const [description, setDescription] = useState("");

    
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
            tabela: [{ nome: "", soma: false, key: randomId() }],
        },

        validate: {},
    });

    
    const breads = [
        { title: 'Admin', href: '/admin' },
        { title: 'Indicadores', href: '/admin/indicadores' },
    ];

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
            setIsLoadingPadrao(true);
            // Norma GRI "hardcoded" na criação e edição de padrões
            if (values.id == "") {
                values.norma = 1;
            }
            const collection = "padroes";
            const res = await addUpItem(jwt, collection, values);
            await updatePadroesData();
            setPadraoOpen(false);
            setIsLoadingPadrao(false);
            showAlert('Padrão registrado!');
        },
        (errors) => console.log(errors)
    );

    const secoesSubmit = secoesForm.onSubmit(
        async (values) => {
            setIsLoadingSecao(true);
            if (values.id == "") {
                values.padrao = selectedPadrao;
            }
            const collection = "secoes";
            const res = await addUpItem(jwt, collection, values);
            await updateSecoesData();
            setIsLoadingSecao(false);
            setSecaoOpen(false);
            showAlert('Seção registrada!');
        },
        (errors) => console.log(errors)
    );
    const conteudosSubmit = conteudosForm.onSubmit(
        async (values) => {
            setIsLoadingConteudo(true);
            if (values.id == "") {
                values.secao = selectedSecao;
            }
            values.descricao = description;
            console.log(values)
            const collection = "conteudos";
            const res = await addUpItem(jwt, collection, values);
            await updateConteudosData();
            setIsLoadingConteudo(false);
            setConteudoOpen(false);
            setDescription("");
            showAlert('Conteúdo registrado!');
        },
        (errors) => console.log(errors)
    );
    const camposSubmit = camposForm.onSubmit(
        async (values) => {
            setIsLoadingCampo(true);
            if (values.id == "") {
                values.conteudo = selectedConteudo;
            }
            const collection = "campos";
            const res = await addUpItem(jwt, collection, values);
            await updateCamposData();
            setIsLoadingCampo(false);
            setCampoOpen(false);
            showAlert('Campo registrado!');
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
            console.log('conteudoSelecionado.descricao : ', conteudoSelecionado.descricao)
            if(conteudoSelecionado.descricao) {
                console.log('chama o setDescription');
                setDescription(conteudoSelecionado.descricao);
            }
            
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
                config: dadosCampo[0].attributes.config,
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
                    tipo: campo.attributes.tipo,
                    config: campo.attributes.config,
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


    const showAlert = (msg) => {
        showNotification({
            title: "Sucesso",
            message: msg,
            icon: <IconCheck size={18} />,
            color: 'teal',
            autoClose: 4000,
        });
    }

    return (
        <>
            <Head>
                <title>Presence - Indicadores</title>
            </Head>
            <section>

                <HelloBar user={user} breadcrumbs={breads} />

                <br /><br />
                <BlockTitle>Gerenciamento de Normas e Indicadores</BlockTitle>
                <Tbhr />

                <div className="mt-10">
                    <SubBlockTitle>Padrões</SubBlockTitle>
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione um padrão ou clique no + para adicionar um novo"
                            data={padroesSelect}
                            value={selectedPadrao}
                            onChange={setSelectedPadrao}
                        />
                        <div onClick={novoPadrao}><AddBtn  /></div>
                        <div onClick={editPadrao}><EditBtn  /></div>
                    </div>

                    <Collapse in={padraoOpen}>
                        <div className="light-wrapper -translate-y-4">
                            <form onSubmit={padroesSubmit}>
                                <div className="p-6 pb-4">
                                    <TitleBadge>Adicionar ou editar Padrões</TitleBadge>
                                    <div className="absolute">
                                        <TextInput
                                            hidden
                                            {...padroesForm.getInputProps("id")}
                                        />
                                        <TextInput
                                            hidden
                                            {...padroesForm.getInputProps("norma")}
                                        />
                                    </div>

                                    <div className="grid grid-cols-12 gap-x-4">
                                        <div className="col-span-12 md:col-span-2 2xl:col-span-1">
                                            <TextInput
                                                withAsterisk
                                                label="Nº"
                                                {...padroesForm.getInputProps("numero")}
                                            />
                                        </div>
                                        <div className="col-span-12 md:col-span-10 2xl:col-span-11">
                                            <TextInput
                                                withAsterisk
                                                label="Nome"
                                                {...padroesForm.getInputProps("nome")}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex relative justify-end w-full bg-green_input">
                                    {  !isLoadingPadrao 
                                        ? <Button type="submit" className='formClientBtn'>Salvar</Button>
                                        : <Loading color="cyan" text="registrando padrão...aguarde" className="p-4" /> 
                                    }
                                </div>
                            </form>
                        </div>
                    </Collapse>
                </div>
                <div className="">
                    <SubBlockTitle>Seções</SubBlockTitle>
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione uma seção ou clique no + para adicionar uma nova"
                            data={secoesSelect}
                            value={selectedSecao}
                            onChange={setSelectedSecao}
                        />
                        <div onClick={novaSecao}><AddBtn  /></div>
                        <div onClick={editSecao}><EditBtn  /></div>
                    </div>

                    <Collapse in={secaoOpen}>
                        <div className="light-wrapper -translate-y-4">
                            <form onSubmit={secoesSubmit}>
                                <div className="p-6 pb-4">
                                    <TitleBadge>Adicionar ou editar Seção</TitleBadge>
                                    <div className="absolute">
                                        <TextInput
                                            hidden
                                            {...secoesForm.getInputProps("id")}
                                        />
                                        <TextInput
                                            hidden
                                            {...secoesForm.getInputProps("padrao")}
                                        />
                                    </div>
                                    <div className="grid grid-cols-12 gap-x-4">
                                        <div className="col-span-12 md:col-span-2 2xl:col-span-1">
                                            <TextInput
                                                withAsterisk
                                                label="Nº"
                                                {...secoesForm.getInputProps("numero")}
                                            />
                                        </div>
                                        <div className="col-span-12 md:col-span-10 2xl:col-span-11">
                                            <TextInput
                                                withAsterisk
                                                label="Nome"
                                                {...secoesForm.getInputProps("nome")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex relative justify-end w-full bg-green_input">
                                    {  !isLoadingSecao 
                                        ? <Button type="submit" className='formClientBtn'>Salvar</Button>
                                        : <Loading color="cyan" text="registrando seção...aguarde" className="p-4" /> 
                                    }
                                </div>
                            </form>
                        </div>
                    </Collapse>
                </div>
                <div className="">
                    <SubBlockTitle>Conteúdos</SubBlockTitle>
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione um conteúdo ou clique no + para adicionar um novo"
                            data={conteudosSelect}
                            value={selectedConteudo}
                            onChange={setSelectedConteudo}
                        />
                        <div onClick={novoConteudo}><AddBtn  /></div>
                        <div onClick={editConteudo}><EditBtn  /></div>
                    </div>
                    <Collapse in={conteudoOpen}>
                        <div className="light-wrapper -translate-y-4">
                            <form onSubmit={conteudosSubmit}>
                                <div className="p-6 pb-4">
                                    <TitleBadge>Adicionar ou editar Conteúdo</TitleBadge>
                                    <div className="absolute">
                                        <TextInput
                                            hidden
                                            {...conteudosForm.getInputProps("id")}
                                        />
                                        <TextInput
                                            hidden
                                            {...conteudosForm.getInputProps("secao")}
                                        />
                                    </div>

                                    <div className="grid grid-cols-12 gap-x-4">
                                        <div className="col-span-12 md:col-span-2 2xl:col-span-1">
                                            <TextInput
                                                withAsterisk
                                                label="Nº"
                                                {...conteudosForm.getInputProps("numero")}
                                            />
                                        </div>
                                        <div className="col-span-12 md:col-span-10 2xl:col-span-11">
                                            <TextInput
                                                withAsterisk
                                                label="Nome"
                                                {...conteudosForm.getInputProps("nome")}
                                            />
                                        </div>
                                    </div>  

                                    <TipTap setDescription={setDescription} description={description} />

                                    {/* <TextInput
                                        withAsterisk
                                        label="Descrição"
                                        placeholder="Descrição"
                                        {...conteudosForm.getInputProps(
                                            "descricao"
                                        )}
                                    /> */}
                                </div>
                                <div className="flex relative justify-end w-full bg-green_input">
                                    {  !isLoadingConteudo
                                        ? <Button type="submit" className='formClientBtn'>Salvar</Button>
                                        : <Loading color="cyan" text="registrando conteúdo...aguarde" className="p-4" /> 
                                    }
                                </div>
                            </form>
                        </div>
                    </Collapse>
                </div>

                <div className="">
                    <SubBlockTitle>Campos</SubBlockTitle>
                    <div className="flex flex-row space-x-4">
                        <Select
                            className="flex-grow"
                            searchable
                            clearable
                            placeholder="Selecione um campo ou clique no + para adicionar um novo"
                            data={camposSelect}
                            value={selectedCampo}
                            onChange={setSelectedCampo}
                        />
                        <div onClick={novoCampo}><AddBtn  /></div>
                        <div onClick={editCampo}><EditBtn  /></div>
                    </div>
                    <Collapse in={campoOpen}>
                        <div className="light-wrapper overflow-visible -translate-y-4">
                            <form onSubmit={camposSubmit}>
                                <div className="p-6 pb-4">
                                    <TitleBadge>Adicionar ou editar Campo</TitleBadge>
                                    <div className="absolute">
                                        <TextInput
                                            hidden
                                            {...camposForm.getInputProps("id")}
                                        />
                                        <TextInput
                                            hidden
                                            {...camposForm.getInputProps("conteudo")}
                                        />
                                    </div>

                                    <div className="grid grid-cols-12 gap-x-4">
                                        <div className="col-span-12 md:col-span-2 2xl:col-span-1">
                                            <TextInput
                                                withAsterisk
                                                label="Nº"
                                                {...camposForm.getInputProps("numero")}
                                            />
                                        </div>
                                        <div className="col-span-12 md:col-span-10 2xl:col-span-11">
                                            <TextInput
                                                withAsterisk
                                                label="Texto"
                                                placeholder="Texto"
                                                {...camposForm.getInputProps("texto")}
                                            />
                                        </div>
                                    </div>
                                    
                                    <Select
                                        withAsterisk
                                        label="Tipo"
                                        placeholder="Selecione o tipo"
                                        data={[
                                            { value: "file", label: "Arquivo" },
                                            { value: "checkbox", label: "Checkbox" },
                                            { value: "nenhum", label: "Nenhum" },
                                            { value: "numero", label: "Numérico" },
                                            { value: "tabela", label: "Tabela" },
                                            { value: "texto", label: "Texto" },
                                            { value: "boolean", label: "Sim/Não" },
                                        ]}
                                        {...camposForm.getInputProps("tipo")}
                                    />
                                </div>

                                <div className="flex relative justify-end w-full bg-green_input">
                                    {  !isLoadingCampo
                                        ? <Button type="submit" className='formClientBtn'>Salvar</Button>
                                        : <Loading color="cyan" text="registrando campo...aguarde" className="p-4" /> 
                                    }
                                </div>
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
    const session = await getSession(context);

    const returnedObj = checkUserRole (session, "Admin");
    if(returnedObj != null) return returnedObj;

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

    console.log('session', session);

    return {
        props: {
            user: session.user,
            jwt: session.jwt,
            normaData: normas.data[0],
            padroesSelectData: padroesSelectData,
        },
    };
}
