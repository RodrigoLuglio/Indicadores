import Link from 'next/link'

const LinkItemSubmenu = ({label, subLabel, icon, subItens}) => {
    return (
        <li className="holderSubmenu flex justify-start items-start w-sidebar_mobile lg:w-full py-3 transition-none">
            <span className="w-sidebar_mobile flex-shrink flex justify-center pl-[6px]">
                {icon}
            </span>
            <div className="divSubmenu pl-5 hidden lg:flex flex-col flex-grow transition-none">
                <div className="font-gotham_medium text-sm xl:text-base text-white block mb-0">{label}</div>
                
                { subLabel && 
                    <div className="text-[11px] xl:text-xs font-gotham_medium leading-none text-[#08B0B6]">{subLabel}</div> 
                }
                
                <ul className="p-2 pb-0 pr-8 w-full">
                    { subItens && 
                        subItens.map((subItem, index) => {
                            return (
                                <li key={index} className="mb-[5px] pb-[5px] pl-2 text-[15px] border-b-[1px] last-of-type:mb-0 last-of-type:pb-0 last-of-type:border-none border-green_light/40 w-full">  
                                    <Link href={subItem.link} legacyBehavior>
                                        <a className="uppercase font-gotham_medium text-sm xl:text-base text-[#08B0B6] transition-all duration-300 hover:text-orange">{subItem.norma}</a>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </li>
    );
}

export default LinkItemSubmenu;