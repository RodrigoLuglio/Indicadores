const HamburgerMenu = () => {

    const toggleMenu = () => {
        const aside = document.getElementById('aside');
        const hambmenu = document.getElementById('hambmenu');
        aside.classList.toggle('opened');
        hambmenu.classList.toggle('is-active');
    }

    return (
        <div onClick={toggleMenu} href="#" id="hambmenu" className="navbar-burger absolute top-4 left-5 w-[22px] h-[28px] block lg:hidden">
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};


export default HamburgerMenu;