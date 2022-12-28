import Layout from '../layouts/Client'
import HelloBar from "../components/helloBar";
import StatusCard from "../components/statusCard";
import {IconCardClientes, IconCardIndAbertos, IconCardIndFinalizados, IconCardAguardVerificacao } from "../components/icons";
import { BlockTitle } from "../components/titles";
import { StatusIndicSectionHead, IndicSectionItem } from "../components/indicadores";
import ProgressBar from "../components/progressBar";
// import { FullCard} from "../components/misc";
// import { Slider, createStyles } from '@mantine/core';
// import { marks, progressStyles } from "../services/progress";

// const useStyles = createStyles((theme) => progressStyles(theme) );

export default function ClientStatus() {

    const user = {
        name: 'Iury Nadin',
        role: 'CAdmin',
        avatar: 'https://source.unsplash.com/gySMaocSdqs/50x50'
    }

    const items = [
        { title: 'Status', href: null }
    ];

    const company = {
        name: 'Noctua.Art LTDA',
        avatar: 'https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg'
    }

    return (
        <>
            <HelloBar user={user} breadcrumbs={items} />

            <section className="w-full mt-16">
                <BlockTitle>Progresso Preenchimento</BlockTitle>
                <ProgressBar value="25" company={company} />
            </section>
            
            <section className="mt-16">
                <StatusIndicSectionHead status="Aprovado" active />
                <StatusIndicSectionHead status="Finalizado" />
                <StatusIndicSectionHead status="Incompleto" />
                <StatusIndicSectionHead status="Sem informação" />

            </section>
        </>
    )
}


ClientStatus.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}