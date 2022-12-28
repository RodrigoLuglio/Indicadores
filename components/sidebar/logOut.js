import { Logout } from '../icons';
import { signOut } from "next-auth/react";

const LogOut = () => {
    return (
        <ul className="ul-main w-full pb-4">
            <li>
                <a onClick={() => signOut()} className='group cursor-pointer'>
                    <span>
                        <Logout className="group-hover:stroke-orange -translate-x-[5px]" />
                    </span>
                    <span className='pl-4 text-white group-hover:pl-8 group-hover:text-orange'>Sair</span>
                </a>            
            </li>
        </ul>
    )
}

export default LogOut;
