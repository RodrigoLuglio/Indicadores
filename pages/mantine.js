import Head from "next/head";
import {
    Grid,
    TextInput,
    Tooltip,
    Text,
    Center,
    Checkbox,
    Button,
    Group,
    Box,
    Notification,
    TransferList,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { ActionIcon } from "@mantine/core";
import { IconInfoCircle, IconCheck } from "@tabler/icons";
import { useForm } from "@mantine/form";

import { useState } from "react";
import dynamic from "next/dynamic";

export default function Mantine() {
    // HotTable failed during the ssr
    const DynamicComponentWithNoSSR = dynamic(
        () => import("@handsontable/react").then((mod) => mod.HotTable),
        { ssr: false }
    );

    const DATA = [
        ["", "Tesla", "Mercedes", "Toyota", "Volvo"],
        ["2019", 10, 11, 12, 13],
        ["2020", 20, 11, 14, 13],
        ["2021", 30, 15, 12, 13],
    ];

    const initialValues = [
        [
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "next", label: "Next.js" },
            { value: "blitz", label: "Blitz.js" },
            { value: "gatsby", label: "Gatsby.js" },
            { value: "vue", label: "Vue" },
            { value: "jq", label: "jQuery" },
        ],
        [
            { value: "sv", label: "Svelte" },
            { value: "rw", label: "Redwood" },
            { value: "np", label: "NumPy" },
            { value: "dj", label: "Django" },
            { value: "fl", label: "Flask" },
        ],
    ];

    const [data1, setData1] = useState(initialValues);

    const [data, setData] = useState(DATA);
    const onBeforeHotChange = (changes, source) => {
        const newData = data.slice(0);
        changes.forEach((change) => {
            newData[change[0]][change[1]] = change[3];
        });
        setData(newData);
    };

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

    const form = useForm({
        initialValues: {
            email: "",
            termsOfService: false,
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Email inválido",
            termsOfService: (value) =>
                value === true ? null : "Necessário aceitar",
        },
    });

    const handleSubmit = (values) => console.log(values);

    const handleError = (errors) => {
        console.log(errors);
        console.log(errors.termsOfService);
        if (errors.termsOfService) {
            console.log("precisava aceitar");
            setTimeout(() => {
                showNotification({
                    message: "Necessário aceitar os termos",
                    icon: <IconCheck size={18} />,
                    color: "teal",
                    // style: { backgroundColor: 'red' },
                });
            }, 200);
        }
    };

    return (
        <>
            <Head>Mantine</Head>

            <Box sx={{ maxWidth: 300 }} mx="auto">
                <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
                    <TextInput
                        // variant="headless" //remover estilos do mantine
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        rightSection={rightSection}
                        size="md"
                        error="error text"
                        {...form.getInputProps("email")}
                    />

                    <Checkbox
                        mt="md"
                        label="Aceito os termos"
                        {...form.getInputProps("termsOfService", {
                            type: "checkbox",
                        })}
                    />

                    <TransferList
                        value={data1}
                        onChange={setData1}
                        searchPlaceholder="Search..."
                        nothingFound="Nothing here"
                    />

                    <Group position="right" mt="md">
                        <Button color="orange" variant="default" type="submit">
                            Submit
                        </Button>
                    </Group>
                </form>
            </Box>

            <div className="container mx-auto">
                <div className="w-10/12 mx-auto">
                    {/* <Grid>
                        <Grid.Col md={6} lg={3}>1</Grid.Col>
                        <Grid.Col md={6} lg={3}>2</Grid.Col>
                        <Grid.Col md={6} lg={3}>3</Grid.Col>
                        <Grid.Col md={6} lg={3}>4</Grid.Col>
                        <Grid.Col md={6} lg={3}>5</Grid.Col>
                        <Grid.Col md={6} lg={3}>6</Grid.Col>
                        <Grid.Col md={6} lg={3}>7</Grid.Col>
                        <Grid.Col md={6} lg={3}>8</Grid.Col>
                    </Grid> */}
                    {/* <TextInput 
                        rightSection={rightSection}
                        label="Name"
                        description="This is the best description"  
                        placeholder="Teste de placeholder"  
                    /> */}
                </div>
            </div>

            <section className="relative w-full mt-10 border border-green-700 overflow-x-auto px-10">
                <div className="tb_wrapper border border-red-600 min-w-[758px]">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quo deserunt consectetur porro iste pariatur qui
                        numquam sit perspiciatis, repellendus ea modi dolorem
                        delectus voluptas dolores neque temporibus maiores
                        aperiam iusto consequuntur reprehenderit adipisci
                        quibusdam placeat praesentium? Accusamus doloremque est
                        harum unde tenetur possimus, sequi laborum incidunt quia
                        iste sunt ducimus.
                    </p>
                    {/* <div className="tableFlex">
                        <div className="basis-3/12 tableHead pl-3">Empresa/Usuário</div>
                        <div className="basis-2/12 tableHead">Setor</div>
                        <div className="basis-4/12 tableHead">Norma/Indicador</div>
                        <div className="basis-2/12 tableHead">Finalizado em</div>
                        <div className="basis-1/12 tableHead">Ações</div>
                    </div>
                    <Tbhr />

                    <div className="rowGrid">
                        <div className="tableFlex">
                            <div className="basis-3/12 pl-1">
                                <AvatarCompany company="Abc Co." subinfo="por: Fulana X" logo="https://i.pinimg.com/736x/12/f4/80/12f4805f90d5abc0997b606844967594.jpg"  />
                            </div>
                            <div className="basis-2/12 tb_p">Financeiro</div>
                            <div className="basis-4/12 flex justify-start items-center">
                                <GetNormasIcon norma="gri" />
                                <div className="ml-2 flex-col">
                                    <div class="tb_p-xs">GRI 301: Materiais</div>
                                    <div class="tb_p-xs">GRI 306: Resíduos</div>
                                </div>
                            </div>
                            <div className="basis-2/12 tb_p">22/10/22 14:35</div>
                            <div className="basis-1/12 flex space-x-2 justify-end items-center">
                                <DeleteBtn />
                                <ViewBtn />
                            </div>
                        </div>
                    </div>
                    <Tbhr />

                    <div className="rowGrid">
                        <div className="tableFlex">
                            <div className="basis-3/12 pl-1">
                                <AvatarCompany company="Empresa XYZ" subinfo="por: Fulana X" logo="https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg"  />
                            </div>
                            <div className="basis-2/12 tb_p">Marketing</div>
                            <div className="basis-4/12 flex justify-start items-center">
                                <GetNormasIcon norma="gri" />
                                <div className="ml-2 flex-col">
                                    <div class="tb_p-xs">GRI 413: Comunidades Locais</div>
                                </div>
                            </div>
                            <div className="basis-2/12 tb_p">22/10/22 14:35</div>
                            <div className="basis-1/12 flex space-x-2 justify-end items-center">
                                <DeleteBtn />
                                <ViewBtn />
                            </div>
                        </div>
                    </div>
                    <Tbhr /> */}
                </div>
            </section>
        </>
    );
}