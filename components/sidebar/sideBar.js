import Image from "next/image";
import HamburgerMenu from './hamburgerMenu';
import { Gear, Research, Status, Profile, Logout } from '../icons';
import LinkItem from './linkItem';
import LinkItemSubmenu from './linkItemSubmenu';
import BoxHelp from './boxHelp';
import Logo from './logo';


const SideBar = () => {

    const subitens = [
        {
            norma : 'GRI',
            link : '/gri'
        },
        {
            norma : 'SASB',
            link : '/gri'
        },
        {
            norma : 'CDI',
            link : '/cdi'
        },
    ]

    return (
        <aside id="aside">
            <div className='sidebar'>
                <div className="sidebar__container">
                    
                    <Logo />

                    <nav>
                        
                        <HamburgerMenu />

                        <ul className="ul-main mt-20 lg:mt-0 w-full">
                            <LinkItem link="/mantine" label="Dashboard" icon={<Gear className="group-hover:fill-orange" />} />
                            <LinkItemSubmenu label="Incluir" subLabel="Normas:" icon={<Profile className="group-hover:fill-orange" />} subItens={subitens} />
                            <LinkItem link="/mantine" label="Consultar" icon={<Research className="group-hover:fill-orange" />} />
                            <LinkItem link="/mantine" label="Status" icon={<Status className="group-hover:fill-orange" />} />
                        </ul>

                        <div className='flex flex-col justify-start'>
                            <BoxHelp />
                            <ul className="ul-main w-full pb-4">
                                <LinkItem link="/mantine" label="Sair" icon={<Logout className="group-hover:stroke-orange -translate-x-[5px]" />} />
                            </ul>
                        </div>

                    </nav>
                </div>
            </div> 

        </aside>
    );
}

export default SideBar;