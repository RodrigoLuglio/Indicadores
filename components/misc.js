export const Tbhr = ({lower}) => {
    const marginY = (lower) ? 'my-1' : 'my-2';
    return (
        <div className={`bg-[#E3EAF4]/80 h-px w-full block ${marginY}`}></div>
    )
}

export const StatusBall = ({status, withLabel}) => {
    let bg, color = '';
    switch (status.toLowerCase()) {
        case "aprovado":
            bg = 'bg-blue1'
            color = 'text-blue1'
            break;
        case "finalizado":
            bg = 'bg-green_mid2'
            color = 'text-green_mid2'
            break;
        case "verificacao":
            bg = 'bg-[#0177FB]'
            color = 'text-[#0177FB]'
            break;
        case "incompleto":
            bg = 'bg-[#E2723A]'
            color = 'text-[#E2723A]'
            break;
        case "sem informação":
            bg = 'bg-[#B31717]'
            color = 'text-[#B31717]'
            break;
        default:
            break;
    }

    return (
        <div className={`${ withLabel && 'flex justify-start items-center '}`}>
            <div className={`rounded-full w-[18px] h-[18px] block ${bg}`}></div>
            { withLabel && 
                <div className={`hidden lg:block ml-2 font-gotham_medium text-sm leading-none ${color}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </div> 
            }
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