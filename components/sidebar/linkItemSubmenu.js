import Link from 'next/link'

const LinkItemSubmenu = ({label, subLabel, icon, subItens}) => {
    return (
        <li className="flex justify-start items-start w-full py-3">
            <span className="w-sidebar_mobile flex justify-center pl-[6px]">
                {icon}
            </span>
            <div className="ml-5">
                <div className="font-gotham_medium text-white block mb-0">{label}</div>
                
                { subLabel && 
                    <div className="text-xs font-gotham_medium leading-none text-[#08B0B6]">{subLabel}</div> 
                }
                
                <ul className="p-2">
                    { subItens && 
                        subItens.map((subItem, index) => {
                            return (
                                <li key={index} className="mb-2">  
                                    <Link href={subItem.link} legacyBehavior>
                                        <a className="uppercase font-gotham_medium text-[#08B0B6] transition-all duration-300 hover:text-orange">{subItem.norma}</a>
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