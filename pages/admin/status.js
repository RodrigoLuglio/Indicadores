import { getToken } from "next-auth/jwt";
import Layout from '../../layouts/Admin'
import HelloBar from "../../components/helloBar";
import { BlockTitle } from "../../components/titles";
import { StatusIndicSectionHead, IndicSectionItem } from "../../components/indicadores";
import ProgressBar from "../../components/progressBar";

export default function AdminStatus({ user }) {


    const items = [
        { title: 'Admin', href: '/admin' },
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


AdminStatus.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export async function getServerSideProps(context) {
    const session = await getToken(context);

    if (session == null || session.role != "Admin") {
        return {
            redirect: {
                destination: "/auth/not-authenticated",
                permanent: true,
            },
        };
    }

    return {
        props: {
            user: session
        },
    };
}