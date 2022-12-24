import Image from "next/image";
import logoSidebar from '../../public/imgs/logo-sidenav.svg';

const Logo = () => {
    return (
        <div className="sidebar__logo">
            <Image src={logoSidebar} width='100%' className="w-[20]" alt="Logo Presence - Comunicação e Sustentabilidade" priority/>
        </div>
    )
}

export default Logo;