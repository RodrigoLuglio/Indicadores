import Layout from '../layouts/Client'
import HelloBar from "../components/helloBar";
import StatusCard from "../components/statusCard";
import ViewBtn from "../components/buttons/viewBtn";
import {IconCardClientes, IconCardIndAbertos, IconCardIndFinalizados, IconCardAguardVerificacao, IconGri, GetNormasIcon} from "../components/icons";
import { BlockTitle } from "../components/titles";
import { Tbhr, FullCard, StatusBall } from "../components/misc";
import { Slider, createStyles } from '@mantine/core';
import { marks, progressStyles } from "../services/progress";

const useStyles = createStyles((theme) => progressStyles(theme) );


export default function ClientDashboard() {

    const user = {
        name: 'Iury Nadin',
        role: 'CAdmin',
        avatar: 'https://source.unsplash.com/gySMaocSdqs/50x50'
    }

    const items = [
        { title: 'Incluir', href: null },
        { title: 'GRI', href: '/incluir/gri' },
    ];

    const { classes } = useStyles();

    return (
        <>
            <HelloBar user={user} breadcrumbs={items} />

            <section className="cardsGrid">
                <StatusCard title="Total" subTitle="clientes" val="24" bgIcon="bg-orange" icon={<IconCardClientes /> } />
                <StatusCard title="Indicadores" subTitle="em aberto" val="145" bgIcon="bg-orange_dark" icon={<IconCardIndAbertos /> } />
                <StatusCard title="Indicadores" subTitle="finalizados" val="57" bgIcon="bg-green_mid" icon={<IconCardIndFinalizados /> } />
                <StatusCard title="Indicadores aguardando" subTitle="verificação" val="12" bgIcon="bg-green_light" icon={<IconCardAguardVerificacao /> } />
            </section>

            <section className="w-full mt-16">
                <BlockTitle>Progresso Preenchimento</BlockTitle>
                <FullCard>
                    <div className="relative w-full flex items-center justify-end py-6">
                        <div className="absolute top-5 left-0 w-[30px] h-[30px] rounded-lg bg-red-300 -translate-y-4 overflow-hidden">
                            <img src="https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg" className="object-cover object-center w-full"  alt="" />
                        </div>
                        <div className="absolute top-1 left-10 font-gotham_medium text-paragraph text-sm">Lorem Ipsum LTDA</div>
                        <div className="w-progressbar">
                            <Slider
                                color="gray"
                                marks={marks}
                                classNames={{
                                    track: classes.track,
                                    bar: classes.bar,
                                    mark: classes.mark,
                                    markFilled: classes.markFilled,
                                    markLabel: classes.markLabel,
                                    thumb: classes.thumb
                                }}
                                value={20}
                            />
                        </div>
                    </div>
                </FullCard>
            </section>

            
            <section className="mt-16">

                <div className="tableGrid">
                    <div className="col-span-8 tableH2 pl-2"><h2>GRI 2:  Conteúdos Gerais 2021</h2></div>
                    <div className="col-span-3 tableHead">Status</div>
                    <div className="col-span-1 tableHead mx-auto">Ações</div>
                </div>
                <Tbhr />
                <div className="rowGrid">
                    <div className="tableGrid">
                        <div className="col-span-8 2xl:col-span-9 flex flex-col justify-center">
                            
                        </div>
                        <div className="col-span-3 2xl:col-span-2 flex justify-start items-center"><StatusBall status="finalizado" withLabel /></div>
                        <div className="col-span-1 flex justify-center items-center"><ViewBtn link="/" /></div>
                    </div>
                </div>
                <Tbhr />
            </section>
        </>
    )
}


ClientDashboard.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}