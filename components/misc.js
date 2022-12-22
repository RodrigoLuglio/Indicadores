export const Tbhr = () => {
    return (
        <div className="bg-[#E3EAF4]/80 h-px w-full my-2 block"></div>
    )
}

export const StatusBall = ({status, withLabel}) => {
    let bg, color = '';
    switch (status) {
        case "finalizado":
            bg = '[#318E96]'
            color = 'text-[#318E96]'
            break;
        case "verificacao":
            bg = '[#0177FB]'
            color = 'text-[#0177FB]'
            break;
        case "incompleto":
            bg = '[#E2723A]'
            color = 'text-[#E2723A]'
            break;
        case "nao iniciado":
            bg = '[#B31717]'
            color = 'text-[#B31717]'
            break;
        default:
            break;
    }

    return (
        <div className={`${ withLabel && 'flex justify-start items-center '}`}>
            <div className={`rounded-full w-[18px] h-[18px] block bg-${bg}`}></div>
            { withLabel && <div className={`ml-2 font-gotham_medium text-sm leading-none ${color}`}>{status}</div> }
        </div>
    )
}

export const AvatarCompany = ({ company, subinfo, logo  }) => {
    return (
        <div className="flex w-full justify-start items-center">
            <div className="h-[34px] w-[34px] flex rounded-[10px] overflow-hidden bg-red-300 mr-2">
                <img src={logo} className="object-center object-cover w-full" alt="" />
            </div>
            <div>
                <div className="text-paragraph font-gotham_medium leading-none">{company}</div>
                <div className="text-[#737880] font-gotham text-xs">{subinfo}</div>
            </div>
        </div>
    )
}

export const FullCard = ({children}) => {
    return (
        <div className="relative w-full mb-10 bg-white rounded-lg py-3 px-5 shadow-status_card_xs md:shadow-status_card">
            {children}
        </div>
    )
}