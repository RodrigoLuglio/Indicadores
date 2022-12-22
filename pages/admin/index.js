import Head from "next/head";

import Layout from '../../layouts/Admin'
import HelloBar from "../../components/helloBar";
import StatusCard from "../../components/statusCard";
import DeleteBtn from "../../components/buttons/deleteBtn";
import ViewBtn from "../../components/buttons/viewBtn";
import {IconCardClientes, IconCardIndAbertos, IconCardIndFinalizados, IconCardAguardVerificacao, IconGri, GetNormasIcon} from "../../components/icons";
import { BlockTitle } from "../../components/titles";
import { Tbhr, StatusBall, AvatarCompany } from "../../components/misc";



export default function AdminDashboard() {

    const user = {
        name: 'Fernanda',
        role: 'Admin',
        avatar: 'https://source.unsplash.com/gySMaocSdqs/50x50'
    }

    return (
        <>
            <HelloBar user={user} />

            <section className="cardsGrid">
                <StatusCard title="Total" subTitle="clientes" val="24" bgIcon="bg-orange" icon={<IconCardClientes /> } />
                <StatusCard title="Indicadores" subTitle="em aberto" val="145" bgIcon="bg-orange_dark" icon={<IconCardIndAbertos /> } />
                <StatusCard title="Indicadores" subTitle="finalizados" val="57" bgIcon="bg-green_mid" icon={<IconCardIndFinalizados /> } />
                <StatusCard title="Indicadores aguardando" subTitle="verificação" val="12" bgIcon="bg-green_light" icon={<IconCardAguardVerificacao /> } />
            </section>

            <section className="grid xl:grid-cols-2 gap-8">
                <div>
                    <BlockTitle>Clientes</BlockTitle>
                    <div className="w-full border border-gray-100 h-64 fotn-gotham_medium text-gray3 flex justify-center items-center">espaco para gráfico</div>
                </div>

                <div>
                    <BlockTitle>Últimos Preenchimentos</BlockTitle>
                    <div className="my-4">
                        <div className="tableGrid">
                            <div className="col-span-8 tableHead pl-2">Empresa</div>
                            <div className="col-span-2 tableHead">Indicador</div>
                            <div className="col-span-2 tableHead">Status</div>
                        </div>
                        <Tbhr />
                        <div className="rowGrid">
                            <div className="tableGrid">
                                <div className="col-span-8 flex flex-col justify-center">
                                    <AvatarCompany company="Empresa XYZ" subinfo="por: Fulana X" logo="https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg"  />
                                </div>
                                <div className="col-span-2 mx-auto">{<GetNormasIcon norma="gri" />}</div>
                                <div className="col-span-2 flex justify-center items-center"><StatusBall status="finalizado" /></div>
                            </div>
                        </div>
                        <Tbhr />

                        <div className="rowGrid">
                            <div className="tableGrid">
                                <div className="col-span-8 flex flex-col justify-center">
                                    <AvatarCompany company="Abc Co." subinfo="por: Fulana X" logo="https://i.pinimg.com/736x/12/f4/80/12f4805f90d5abc0997b606844967594.jpg"  />
                                </div>
                                <div className="col-span-2 mx-auto">{<GetNormasIcon norma="gri" />}</div>
                                <div className="col-span-2 flex justify-center items-center"><StatusBall status="verificacao" /></div>
                            </div>
                        </div>
                        <Tbhr />

                        <div className="rowGrid">
                            <div className="tableGrid">
                                <div className="col-span-8 flex flex-col justify-center">
                                    <AvatarCompany company="Empresa XYZ" subinfo="por: Fulana X" logo="https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg"  />
                                </div>
                                <div className="col-span-2 mx-auto">{<GetNormasIcon norma="gri" />}</div>
                                <div className="col-span-2 flex justify-center items-center"><StatusBall status="incompleto" /></div>
                            </div>
                        </div>
                        <Tbhr />
                    


                    </div>
                </div>
            </section>


            <section className="tb_waiting mt-10 ">
                <BlockTitle>Aguardando Verificação</BlockTitle>

                <div className="relative overflow-x-scroll">
                    
                    <div className="tableFlex ">
                        <div className="basis-3/12 tableHead pl-3">Empresa/Usuário</div>
                        <div className="basis-2/12 tableHead">Setor</div>
                        <div className="basis-4/12 tableHead">Norma/Indicador</div>
                        <div className="basis-2/12 tableHead">Finalizado em</div>
                        <div className="basis-1/12 tableHead">Ações</div>
                    </div>
                    <Tbhr />

                    <div className="rowGrid">
                        <div className="tableFlexResp">
                            <div className="basis-3/12 pl-1">
                                <AvatarCompany company="Abc Co." subinfo="por: Fulana X" logo="https://i.pinimg.com/736x/12/f4/80/12f4805f90d5abc0997b606844967594.jpg"  />
                            </div>
                            <div className="basis-2/12 tb_p">Financeiro</div>
                            <div className="basis-4/12 flex justify-start items-center">
                                <GetNormasIcon norma="gri" />
                                <div className="ml-2 flex-col">
                                    <div className="tb_p-xs">GRI 301: Materiais</div>
                                    <div className="tb_p-xs">GRI 306: Resíduos</div>
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
                        <div className="tableFlexResp">
                            <div className="basis-3/12 pl-1">
                                <AvatarCompany company="Empresa XYZ" subinfo="por: Fulana X" logo="https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg"  />
                            </div>
                            <div className="basis-2/12 tb_p">Marketing</div>
                            <div className="basis-4/12 flex justify-start items-center">
                                <GetNormasIcon norma="gri" />
                                <div className="ml-2 flex-col">
                                    <div className="tb_p-xs">GRI 413: Comunidades Locais</div>
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
                </div>

            </section>
            
        </>
    )
}

AdminDashboard.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}