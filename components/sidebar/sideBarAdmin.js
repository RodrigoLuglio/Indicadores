import Image from "next/image";
import HamburgerMenu from './hamburgerMenu';
import { Gear, Research, Status, Profile } from '../icons';
import LinkItem from './linkItem';
import LinkItemSubmenu from './linkItemSubmenu';
import BoxHelp from './boxHelp';
import Logo from './logo';
import LogOut from './logOut';


const SideBarAdmin = () => {

    const subitens = [
        {
            norma : 'GRI',
            link : '/admin/gri'
        },
        {
            norma : 'SASB',
            link : ''
        },
        {
            norma : 'CDI',
            link : ''
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
                            <LinkItem link="/admin" label="Dashboard" icon={<Gear className="group-hover:fill-orange" />} />
                            <LinkItemSubmenu label="Incluir" subLabel="Normas:" icon={<Profile className="group-hover:fill-orange" />} subItens={subitens} />
                            <LinkItem link="/admin/clientes" label="Clientes" icon={<Profile className="group-hover:fill-orange" />} />
                            <LinkItem link="/admin/indicadores" label="Indicadores" icon={<Status className="group-hover:fill-orange" />} />
                            <LinkItem link="/mantine" label="Consultar" icon={<Research className="group-hover:fill-orange" />} />
                            <LinkItem link="/admin/status" label="Status" icon={<Status className="group-hover:fill-orange" />} />
                        </ul>

                        <div className='flex flex-col justify-start'>
                            <BoxHelp />
                            <LogOut />
                        </div>

                    </nav>
                </div>
            </div> 

        </aside>
    );
}

export default SideBarAdmin;