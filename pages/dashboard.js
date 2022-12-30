import { getSession } from "next-auth/react";
import { checkUserRole } from "../services/auth";

import Layout from '../layouts/Client'
import HelloBar from "../components/helloBar";
import StatusCard from "../components/statusCard";
import {IconCardClientes, IconCardIndAbertos, IconCardIndFinalizados, IconCardAguardVerificacao } from "../components/icons";
import { BlockTitle } from "../components/titles";
import { IndicSectionHead, IndicSectionItem } from "../components/indicadores";
import ProgressBar from "../components/progressBar";

export default function ClientDashboard({user}) {

    // const user = {
    //     name: 'Iury Nadin',
    //     role: 'CAdmin',
    //     avatar: 'https://source.unsplash.com/gySMaocSdqs/50x50'
    // }

    const breads = [
        { title: 'Dashboard', href: null },
        // { title: 'GRI', href: '/incluir/gri' },
    ];

    const company = {
        name: 'Noctua.Art LTDA',
        avatar: 'https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg'
    }

    return (
        <>
            <HelloBar user={user} breadcrumbs={breads} />

            <section className="cardsGrid">
                <StatusCard title="Total" subTitle="clientes" val="24" bgIcon="bg-orange" icon={<IconCardClientes /> } />
                <StatusCard title="Indicadores" subTitle="em aberto" val="145" bgIcon="bg-orange_dark" icon={<IconCardIndAbertos /> } />
                <StatusCard title="Indicadores" subTitle="finalizados" val="57" bgIcon="bg-green_mid" icon={<IconCardIndFinalizados /> } />
                <StatusCard title="Indicadores aguardando" subTitle="verificação" val="12" bgIcon="bg-green_light" icon={<IconCardAguardVerificacao /> } />
            </section>

            <section className="w-full mt-16">
                <BlockTitle>Progresso Preenchimento</BlockTitle>
                <ProgressBar value="25" company={company} />
            </section>

            
            <section className="mt-16">
                <IndicSectionHead title="GRI 2: Conteúdos Gerais 2021" />
                <IndicSectionItem number="2.1" title="Detalhe da Organização" status="Finalizado" />
                <IndicSectionItem number="2.2" title="Entidades incluídas no relatório de sustentabilidade da organização" status="Incompleto" />
                
                <IndicSectionItem number="2.3" title="Período do relatório, frequência e ponto de contato" status="Sem informação" />
                <IndicSectionItem number="2.4" title="Entidades incluídas no relatório de sustentabilidade da organização" status="Sem informação" />

                <br /><br />
                <IndicSectionHead title="GRI 3: Temas Materiais" />
                <IndicSectionItem number="3.1" title="Processo para determinar os temas materiais" status="aprovado" />
                <IndicSectionItem number="3.2" title="Lista dos tópicos materiais" status="sem informação" />

            </section>
        </>
    )
}


ClientDashboard.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    // const returnedObj = checkUserRole (session, "CAdmin");
    // if(returnedObj != null) return returnedObj;

    return {
        props: {
            user: session.user,
        },
    };
}