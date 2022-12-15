import Link from 'next/link'

const LinkItem = ({label, link, icon}) => {
    return (
        <li>
            <Link href={link} legacyBehavior>
                <a className='group'>
                    <span>
                        {icon}
                    </span>
                    <span className='pl-4 text-white group-hover:pl-8 group-hover:text-orange'>{label}</span>
                </a>            
            </Link>
        </li>
    );
}

export default LinkItem;