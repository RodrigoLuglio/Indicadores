import Head from "next/head";

import Layout from '../../layouts/Admin'

export default function AdminDashboard() {
    return (
        <>
            <Head>
                <title>Presence - Admin Dashboard</title>
            </Head>
            
        </>
    )
}

AdminDashboard.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}