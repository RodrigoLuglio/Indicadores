const ProfileBox = ({user}) => {

    const { name, role, avatar } = user;
    
    return (

        <div className={`flex justify-start items-center min-w-[180px] border border-orange`}>
            <div className="rounded-full w-[43px] h-[43px] bg-green_light mr-4 object-cover object-center overflow-hidden ">
                <img src={avatar} className="w-full" alt="" />
            </div>
            <div className="relative flex flex-col min-w-[130px]">
                <div className="text-paragraph font-gotham leading-tight text-sm md:text-[19px]">Olá,</div>

                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center">
                    <div className="text-[15px] font-gotham_bold text-lg md:text-2xl block leading-none -translate-y-[2px] mr-2">{name}</div>
                    {(role == 'Admin') && 
                        <div className="bg-orange text-white text-[11px] md:text-[12px] font-gotham_bold px-2 py-px rounded-full">{role}</div>
                    }
                </div>
                {(role != 'Admin') &&
                    <div className="absolute top-[2px] right-2 bg-orange text-white text-[11px] md:text-[12px] font-gotham_bold px-2 py-px rounded-full">{(role == "CAdmin") ? 'Cliente' : role }</div>
                } 
            </div>
        </div>
    )
}

export default ProfileBox