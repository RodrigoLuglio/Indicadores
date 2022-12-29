/* eslint-disable @next/next/no-img-element */

import SolidGreen from "./buttons/solidGreen";
import { IconProfileBall } from "./icons";
import ProfileBox from "./profileBox";
import { Breadcrumbs, Anchor, Button } from '@mantine/core';

const HelloBar = ({ user, breadcrumbs }) => {

    const { name, role, avatar } = user;

    
    const items = (breadcrumbs) ? 
            breadcrumbs.map((item, index, {length}) => (
                    <div key={index}>
                        { (length - 1 !== index) ? '' : <span className="absolute bottom-2 text-green_light">{`>`}</span> }
                        <Anchor 
                            href={item.href} 
                            key={index} 
                            className={`
                                ${(length - 1 === index) ? 'text-green_light text-lg lg:text-[26px] pl-3' : 'text-green_mid text-base'} 
                                font-gotham_medium leading-none`}
                            >
                            {item.title} 
                        </Anchor> 
                    </div>
                )) : null;
    

    return (
        // <div className={`flex ${(role != 'Admin') && `flex-row-reverse` } justify-between items-center`}>
        <div className={`flex justify-between items-center`}>
            
            <Breadcrumbs separator=">">
                <div className="flex flex-col relative">
                    {items}
                </div>
            </Breadcrumbs>

            <div className="hidden md:block">
                { (role == 'Admin')
                    ? 
                        <></>
                    : ( items &&
                        <>
                            
                        </>
                    )
                }

            </div>

            <ProfileBox user={user} />

        </div>
    )
}

export default HelloBar