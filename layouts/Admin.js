import Head from 'next/head';
import Image from "next/image";
import SideBarAdmin from '../components/sidebar/sideBarAdmin';

const AdminLayout = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Presence</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className="flex flex-row justify-between max-h-screen w-full items-start lg:overflow-hidden">

                <SideBarAdmin />

                <section className="ctmain">
                    <div className="ctmain__container scrollbar-thin scrollbar-thumb-green_mid2 scrollbar-track-gray-100 hover:scrollbar-thumb-orange"> {/* s */}
                        {children}
                    </div>
                </section>
            </div>

        </div>
    );
}

export default AdminLayout