import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { checkUserRole } from "../services/auth";

import Layout from "../layouts/Client";
import HelloBar from "../components/helloBar";
import StatusCard from "../components/statusCard";
import {
    IconCardClientes,
    IconCardIndAbertos,
    IconCardIndFinalizados,
    IconCardAguardVerificacao,
} from "../components/icons";
import { BlockTitle } from "../components/titles";
import { IndicSectionHead, IndicSectionItem } from "../components/indicadores";
import ProgressBar from "../components/progressBar";

import { getRelatorios, addUpItem } from "../services/relatorios";

import { Button, Table } from "@mantine/core";

export default function ClientDashboard({ jwt, user, relatoriosData }) {
    const [relatorios, setRelatorios] = useState(relatoriosData);
    const [relatoriosTable, setRelatoriosTable] = useState([]);
    // const user = {
    //     name: 'Iury Nadin',
    //     role: 'CAdmin',
    //     avatar: 'https://source.unsplash.com/gySMaocSdqs/50x50'
    // }

    useEffect(() => {
        console.log("Relatorios => ", relatorios);
        console.log("User -> ", user);
    }, []);

    const salvaResposta = async (resposta) => {
        const collection = "respostas";
        resposta.user = user.id;
        const res = await addUpItem(jwt, collection, resposta);
    };

    const atualizaRelatorio = async () => {
        const res = await getRelatorios(jwt);
        setRelatorios(res.data);
    };

    useEffect(() => {
        let tabelaRelatorios = [];
        for (var i = 0; i < relatorios.length; i++) {
            tabelaRelatorios.push({
                id: relatorios[i].id,
                ano: relatorios[i].attributes.ano,
            });
        }
        setRelatoriosTable(tabelaRelatorios);
    }, [relatorios]);

    const rows = relatoriosTable.map((relatorio) => (
        <tr key={relatorio.id}>
            <td>{relatorio.id}</td>
            <td>{relatorio.ano}</td>
        </tr>
    ));

    const indicadoresGerais = relatorios[0].attributes.indicadores.data.map(
        (indicador) => (
            <IndicSectionItem
                key={indicador.id}
                indicador={indicador}
                status="Finalizado"
                salvar={salvaResposta}
                atualizar={atualizaRelatorio}
            />
        )
    );

    const breads = [
        { title: "Dashboard", href: null },
        // { title: 'GRI', href: '/incluir/gri' },
    ];

    const company = {
        name: "Noctua.Art LTDA",
        avatar: "https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg",
    };

    return (
        <>
            <HelloBar user={user} breadcrumbs={breads} />

            <section className="cardsGrid">
                <StatusCard
                    title="Total"
                    subTitle="clientes"
                    val="24"
                    bgIcon="bg-orange"
                    icon={<IconCardClientes />}
                />
                <StatusCard
                    title="Indicadores"
                    subTitle="em aberto"
                    val="145"
                    bgIcon="bg-orange_dark"
                    icon={<IconCardIndAbertos />}
                />
                <StatusCard
                    title="Indicadores"
                    subTitle="finalizados"
                    val="57"
                    bgIcon="bg-green_mid"
                    icon={<IconCardIndFinalizados />}
                />
                <StatusCard
                    title="Indicadores aguardando"
                    subTitle="verificação"
                    val="12"
                    bgIcon="bg-green_light"
                    icon={<IconCardAguardVerificacao />}
                />
            </section>

            <section className="w-full mt-16">
                <BlockTitle>Relatórios</BlockTitle>
                <Button className="botao">Novo relatório</Button>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </section>

            <section className="w-full mt-16">
                <BlockTitle>Progresso Preenchimento</BlockTitle>
                <ProgressBar value="25" company={company} />
            </section>

            <section className="mt-16"></section>

            <section className="mt-16">
                <IndicSectionHead title="GRI 2: Conteúdos Gerais 2021" />

                {indicadoresGerais}

                <br />
                <br />
                <IndicSectionHead title="GRI 3: Temas Materiais" />
                <IndicSectionItem
                    number="3.1"
                    title="Processo para determinar os temas materiais"
                    status="aprovado"
                />
                <IndicSectionItem
                    number="3.2"
                    title="Lista dos tópicos materiais"
                    status="sem informação"
                />
            </section>
        </>
    );
}

ClientDashboard.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    // const returnedObj = checkUserRole (session, "CAdmin");
    // if(returnedObj != null) return returnedObj;

    const relatorios = await getRelatorios(session.jwt);

    return {
        props: {
            jwt: session.jwt,
            user: session.user,
            relatoriosData: relatorios.data,
        },
    };
};
