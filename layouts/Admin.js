import Head from 'next/head';

const AdminLayout = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Presence</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
            <div className="flex flex-row justify-between min-h-screen min-w-full items-start">

                <div className="relative min-h-screen lg:basis-[30%] xl:basis-[30%] 2xl:basis-3/12 bg-green_mid2 grid p-10 pr-0 2xl:p-12 2xl:pr-0">
                    {/* sidebar */}
                    <nav className="w-full h-full bg-green_mid flex shadow-2xl">
                        teste
                    </nav>  
                </div>


                <div className="min-h-screen lg:basis-[70%] xl:basis-[70%] 2xl:basis-9/12 bg-green_lightest grid p-10 pl-0 2xl:p-12 2xl:pl-0">
                    {/* content */}
                    <nav className="w-full h-full bg-white flex shadow-2xl">
                        conteudo
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout