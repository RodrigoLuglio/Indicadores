/* eslint-disable @next/next/no-img-element */

import SolidGreen from "./buttons/solidGreen";
import { IconProfileBall } from "./icons";
import ProfileBox from "./profileBox";
import { Breadcrumbs, Anchor, Button } from '@mantine/core';

const HelloBar = ({ user, breadcrumbs }) => {

    const { name, role, avatar } = user;

    
    const items = (breadcrumbs) ? 
            breadcrumbs.map((item, index, {length}) => (
                    <Anchor 
                        href={item.href} 
                        key={index} 
                        className={`${(length - 1 === index) ? 'text-green_light' : 'text-green_mid'} font-gotham_medium text-[28px]`}
                        >
                        {item.title}
                    </Anchor>
                )) : null;
    

    return (
        <div className={`flex ${(role != 'Admin') && `flex-row-reverse` } justify-between items-center`}>
            
            <ProfileBox user={user} />

            <div className="hidden md:block">
                { (role == 'Admin')
                    ? 
                        <SolidGreen link="/novo-cliente" label="Novo Cliente" icon={<IconProfileBall className="fill-green_light" />} />
                    : ( items &&
                        <>
                            <Breadcrumbs separator=">">{items}</Breadcrumbs>
                        </>
                    )
                }


            </div>
        </div>
    )
}

export default HelloBar