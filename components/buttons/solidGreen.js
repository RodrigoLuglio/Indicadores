import Link from 'next/link'

const SolidGreen = ({link, label, icon}) => {
    return (
        <Link href={link} legacyBehavior>
            <a className='group flex justify-start items-center'>
                { icon && 
                    <span className='mr-2'>
                        {icon}
                    </span>
                }
                <span className='px-4 py-3 rounded-lg text-white text-sm font-gotham_medium leading-none bg-green_light group-hover:bg-orange transition-all duration-300'>{label}</span>
            </a>            
        </Link>
    )
}

export default SolidGreen