// import { useEffect, useState } from 'react';
import { GetNormasIcon } from './icons';
import { AvatarCompany, Tbhr, Loading, StatusBall } from './misc';

const ClientRowAdmin = ({client, status, norma, i}) => {
    
    return (
        <>
            { (i && i == '0') &&  
                <>
                    <div className="tableGrid">
                        <div className="col-span-8 2xl:col-span-10 tableHead pl-2">Empresa</div>
                        <div className="col-span-2 2xl:col-span-1 tableHead text-center">Indicador</div>
                        <div className="col-span-2 2xl:col-span-1 tableHead text-center">Status</div>
                    </div>
                    <Tbhr />
                </>
            }
            <div className="rowGrid">
                <div className="tableGrid">
                    <div className="col-span-8 2xl:col-span-10 flex flex-col justify-center">
                        <AvatarCompany company="Abc Co." subinfo="por: Fulana X" logo="https://i.pinimg.com/736x/12/f4/80/12f4805f90d5abc0997b606844967594.jpg"  />
                    </div>
                    <div className="col-span-2 2xl:col-span-1 mx-auto">{<GetNormasIcon norma={norma} />}</div>
                    <div className="col-span-2 2xl:col-span-1 flex justify-center items-center">
                        { status && <StatusBall status={status} />}
                        </div>
                </div>
            </div>
            <Tbhr />        
        </>
    )
}

export default ClientRowAdmin;