import { Badge, Loader } from '@mantine/core';

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
            <div className="h-[34px] w-[34px] flex rounded-[10px] overflow-hidden bg-slate-300 mr-2">
                { logo && 
                    <img src={logo} className="object-center object-cover w-full" alt="" />
                }
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

export const DevBadge = ({children, color = 'cyan'}) => {
    if (process.env.NODE_ENV == 'development') {
        return (
            <Badge variant="filled" size='sm' color={color}>
                {children}
            </Badge>
        )
    }
}

export const TitleBadge = ({children, textcolor = 'text-[#638d98]', bgcolor = 'bg-green_input'}) => {
    return (
        <Badge variant="filled" size='sm' className={`${textcolor} ${bgcolor} mb-1`}>
            {children}
        </Badge>
    )
}

export const Label = ({children}) => {
    return (
        <span className="text-gray_label text-sm font-gotham_medium" >{children}</span>
    )
}

export const Loading = ({color, text, className = ''}) => {
    return (
        <div className={`flex items-center justify-start ${className}`}>
            <Loader color={color} variant="bars" size="sm" />
            { text && 
                <span className="loader__text text-[11px] uppercase font-gotham_bold text-green_light ml-2">{text}</span>            
            }
        </div>   
    )
}