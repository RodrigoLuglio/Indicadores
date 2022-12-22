import React from 'react'

const StatusCard = ({title, subTitle, val, icon, bgIcon}) => {
    return (
        <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-status_card_xs md:shadow-status_card">
            <div className="flex flex-col justify-between">
                <div>
                    <div className="text-[11px] text-gray2 font-gotham_medium leading-none">{title}</div>
                    <div className="text-lg text-paragraph font-gotham_medium leading-tight">{subTitle}</div>
                </div>
                <span className="text-xl md:text-[28px] text-green_light font-gotham_bold mb-0 leading-none">{val}</span>
            </div>

            { icon &&
                <div className={`rounded-full w-[52px] h-[52px] flex justify-center items-center ${bgIcon}`}>
                    {icon}
                </div>
            }
        </div>
    )
}

export default StatusCard