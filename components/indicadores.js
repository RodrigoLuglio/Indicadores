import { useEffect, useRef, useState } from "react";
import { Tbhr, FullCard, StatusBall } from "./misc";
import ViewBtn from "./buttons/viewBtn";

import FormRegioes from "./formQuadro";

import {
    Button,
    Collapse,
    TextInput,
    FileInput,
    Label,
    Tooltip,
    Group,
    Checkbox,
    Text,
    Center,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { getStatusColor } from "../services/utils";

import { ReactTabulator } from "react-tabulator";

export const IndicSectionHead = ({ title }) => {
    return (
        <>
            <div className="tableGrid">
                <div className="col-span-8 2xl:col-span-9 tableH2 pl-2">
                    <h2>{title}</h2>
                </div>
                <div className="col-span-3 2xl:col-span-2 tableHead">
                    Status
                </div>
                <div className="col-span-1 tableHead mx-auto">Ações</div>
            </div>
            <Tbhr />
        </>
    );
};

export const IndicSectionItem = ({ status, indicador, salvar, atualizar }) => {
    const [opened, setOpened] = useState(false);

    const [filevalues, setFilevalues] = useState([]);

    var tableRef = useRef(null);

    const form = useForm({
        initialValues: {
            respostas: [],
        },
    });

    useEffect(() => {
        if (indicador != undefined) {
            form.reset();
            indicador.attributes.conteudo.data.attributes.campos.data.forEach(
                (campo) => {
                    const res = indicador.attributes.respostas.data.filter(
                        (resposta) => {
                            return (
                                resposta.attributes.campo.data.id == campo.id
                            );
                        }
                    );

                    if (res.length > 0) {
                        campo.attributes.resposta = res[0];
                        form.insertListItem("respostas", {
                            id: campo.attributes.resposta.id,
                            campo: campo.id,
                            tipo: campo.attributes.tipo,
                            label:
                                campo.attributes.numero +
                                ". " +
                                campo.attributes.texto,
                            resposta:
                                campo.attributes.resposta.attributes.resposta,
                            tabela: campo.attributes.resposta.attributes.tabela,
                            config: campo.attributes.config,
                            key: randomId(),
                        });
                    } else {
                        form.insertListItem("respostas", {
                            id: "",
                            campo: campo.id,
                            tipo: campo.attributes.tipo,
                            label:
                                campo.attributes.numero +
                                ". " +
                                campo.attributes.texto,
                            resposta: "",
                            tabela: [],
                            config: campo.attributes.config,
                            key: randomId(),
                        });
                    }
                }
            );
        }
    }, [indicador]);

    const rightSection = (
        <Tooltip
            label="Teste de label tooltip"
            position="top-end"
            withArrow
            transition="pop-bottom-right"
        >
            <Text color="dimmed" sx={{ cursor: "help" }}>
                <Center>
                    <IconInfoCircle size={18} stroke={2} />
                </Center>
            </Text>
        </Tooltip>
    );

    const tableAddRow = () => {
        console.log("Table REF -> ", tableRef);
        var table = tableRef.current;
        table.addRow({});
        table.redraw();
    };

    const tableQuadroAddRow = () => {
        console.log("Table Quadro Ref -> ", tableRef);
        var table = tableRef.current;
        table.addRow({
            id: "",
            regiao: "",
            tipo: "permanentes",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "temporarios",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "sgarantia",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "integral",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "parcial",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.redraw();
    };

    const fields = form.values.respostas.map((item, index) => {
        if (item.campo == 29) {
            return (
                <div key={item.key} className="w-full">
                    <div className="w-full font-gotham_medium text-sm pl-[6px] leading-[1.35] text-[#596983] mt-5 mb-0">
                        {item.label}
                    </div>
                    <ReactTabulator
                        className="w-full"
                        onRef={(ref) => (tableRef.current = ref.current)}
                        data={item.tabela}
                        columns={item.config}
                        layout={"fitDataStretch"}
                    />
                    <Button
                        className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300"
                        onClick={tableQuadroAddRow}
                    >
                        +
                    </Button>
                </div>
            );
        } else if (item.tipo == "nenhum") {
            return (
                <div
                    className="w-full font-gotham_medium text-sm pl-[6px] leading-[1.35] text-[#596983] mt-5 mb-0"
                    key={item.key}
                    dangerouslySetInnerHTML={{__html: item.label}}
                />
            );
        } else if (item.tipo == "tabela") {
            return (
                <div key={item.key} className="w-full">
                    <div className="w-full font-gotham_medium text-sm pl-[6px] leading-[1.35] text-[#596983] mt-5 mb-0" dangerouslySetInnerHTML={{__html: item.label}} />
                    <ReactTabulator
                        className="w-full"
                        onRef={(ref) => (tableRef.current = ref.current)}
                        data={item.tabela}
                        columns={item.config}
                        layout={"fitDataStretch"}
                    />
                    <Button
                        className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300"
                        onClick={tableAddRow}
                    >
                        +
                    </Button>
                </div>
            );
        } else if (item.tipo == "boolean") {
            return (
                <div key={item.key}>
                    <Checkbox.Group
                        label={item.label}
                        description="Excolher uma opção"
                        withAsterisk
                    >
                        <Checkbox value="sim" label="Sim" />
                        <Checkbox value="não" label="Não" />
                    </Checkbox.Group>
                </div>
            )
        } else if (item.tipo == "file") {
            return (
                <div key={item.key}>
                    <FileInput 
                        value={filevalues} 
                        onChange={setFilevalues}
                        label="Enviar arquivos"  
                        placeholder="Selecione os arquivos" 
                        multiple 
                    />
                </div>
            )
        } else if (item.tipo == "checkbox") {
            return (
                <div key={item.key}>
                    checkbox
                </div>
            )
        } else {
            return (
                <div key={item.key}>
                    <TextInput
                        hidden
                        withAsterisk
                        {...form.getInputProps(`respostas.${index}.id`)}
                    />
                    <TextInput
                        className="w-full"
                        label={item.label}
                        withAsterisk
                        {...form.getInputProps(`respostas.${index}.resposta`)}
                    />
                </div>
            );
        }
    });

    const handleSubmit = async (values) => {
        values.respostas.forEach(async (resposta) => {
            resposta.indicador = indicador.id;
            if (resposta.tipo == "tabela") {
                const table = tableRef.current;
                const dadosTabela = table.getData();
                resposta.tabela = dadosTabela;
                console.log("Resposta TABELA -> ", resposta);
            }
            await salvar(resposta);
        });
        await atualizar();
    };

    const handleError = (errors) => {
        console.log("Form ERRORS -> ", errors);
    };

    return (
        <>
            <div
                className="rowGridLower cursor-pointer"
                onClick={() => setOpened((o) => !o)}
            >
                <div className="tableGrid">
                    <div className="col-span-9 lg:col-span-8 2xl:col-span-9 flex justify-start items-center pr-4">
                        <span className="font-gotham_bold text-green_light text-lg mr-4">
                            {
                                indicador?.attributes.conteudo.data.attributes
                                    .numero
                            }
                        </span>
                        <span className="font-gotham_medium text-[15px] text-paragraph leading-tight">
                            {
                                indicador?.attributes.conteudo.data.attributes
                                    .nome
                            }
                        </span>
                    </div>
                    <div className="col-span-1 lg:col-span-3 2xl:col-span-2 flex justify-start items-center">
                        <StatusBall status={status} withLabel />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center">
                        <ViewBtn link="/" />
                    </div>
                </div>
            </div>

            <Collapse transitionDuration={400} in={opened}>
                <div className="p-4">
                    <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
                        {fields}
                        <Group position="left" mt="md">
                            <Button variant="default" type="submit">
                                Enviar
                            </Button>
                        </Group>
                    </form>
                </div>
            </Collapse>

            <Tbhr lower />
        </>
    );
};

// ------------------------------
// Página de Status
// ------------------------------

export const StatusIndicSectionHead = ({ status, active }) => {
    const [opened, setOpened] = useState(active == true);

    return (
        <div className="mb-2">
            <div
                className="group rowGridHoriz cursor-pointer"
                onClick={() => setOpened((o) => !o)}
            >
                <div className="flex justify-start items-center">
                    <StatusBall status={status} />
                    <div className="tableH2 pl-3">
                        <h2>
                            <span className="text-paragraph">{status}</span>
                        </h2>
                    </div>
                </div>
                <ViewBtn link="/" />
            </div>
            <Tbhr />
            <Collapse transitionDuration={400} in={opened}>
                <div className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas unde, porro non consectetur ea enim harum, eligendi
                    excepturi iusto natus et perferendis maxime est aperiam amet
                    error optio eius adipisci sapiente dolorum eos cumque illum
                    vero dicta! Ipsa itaque cumque quisquam illo, blanditiis
                    vero! Doloremque, totam reiciendis ut quod voluptates saepe
                    illum deserunt! Officia placeat provident quasi quia sint
                    error nam, doloribus, esse quod delectus alias nesciunt odio
                    adipisci eum consectetur corporis sequi laboriosam quaerat
                    vitae ex vel iusto fuga reiciendis at! Odio quisquam tenetur
                    aliquam, minus repudiandae saepe non. Aliquam placeat
                    molestias odit natus rem quia perferendis commodi excepturi
                    tempora nesciunt sint similique, iusto maiores culpa
                    mollitia recusandae beatae cupiditate! Delectus quibusdam,
                    quisquam soluta facere velit dolores illo, quidem similique
                    amet expedita cumque dolore! Numquam soluta cupiditate
                    blanditiis quasi beatae vel, quod veritatis voluptatibus
                    neque eaque? Cupiditate laudantium cum tenetur fugiat quod,
                    accusantium culpa enim facilis dicta, possimus ex
                    perspiciatis odit doloribus quasi eius. Nemo dignissimos
                    quis iusto. Consectetur enim laborum voluptatum ut
                    consequatur! Voluptas perferendis cumque culpa voluptate!
                    Illum dolores officia, itaque, officiis optio cumque
                    possimus distinctio iste provident aspernatur totam nihil
                    placeat repellendus enim incidunt, dicta cum. Est, et! Ad
                    facere dolore autem quis repellat explicabo unde? Quo
                    asperiores aperiam a, autem, commodi odit laboriosam
                    dignissimos, quibusdam id eveniet minima. Praesentium sint
                    odio, delectus est molestiae consequatur accusantium
                    voluptate repellat dolore magnam aliquid, at aut tempora
                    veniam suscipit! Culpa, maxime nisi sapiente doloremque ex
                    similique cupiditate eius ullam atque reprehenderit quos,
                    ducimus nobis quisquam quas distinctio numquam et tempore
                    ipsam officiis iste.
                </div>
            </Collapse>
        </div>
    );
};
