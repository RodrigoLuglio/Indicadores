const EditBtn = ({size}) => {
    
    const btnSize = (size) ? size : 'w-[38px] h-[38px]';

    return (
        <div className={`group hover:cursor-pointer rounded-full flex justify-center items-center bg-[#318E96]/30 transition-all duration-300 hover:bg-[#318E96] ${btnSize}`}>
            <svg width="50%" height="53%" viewBox="0 0 20 21" className="fill-[#318E96] transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 16.0058H7.24C7.37161 16.0066 7.50207 15.9813 7.62391 15.9316C7.74574 15.8818 7.85656 15.8085 7.95 15.7158L14.87 8.7858L17.71 6.0058C17.8037 5.91284 17.8781 5.80223 17.9289 5.68038C17.9797 5.55852 18.0058 5.42781 18.0058 5.2958C18.0058 5.16379 17.9797 5.03308 17.9289 4.91122C17.8781 4.78936 17.8037 4.67876 17.71 4.5858L13.47 0.295798C13.377 0.20207 13.2664 0.127676 13.1446 0.0769069C13.0227 0.0261382 12.892 0 12.76 0C12.628 0 12.4973 0.0261382 12.3754 0.0769069C12.2536 0.127676 12.143 0.20207 12.05 0.295798L9.23 3.1258L2.29 10.0558C2.19732 10.1492 2.12399 10.2601 2.07423 10.3819C2.02446 10.5037 1.99924 10.6342 2 10.7658V15.0058C2 15.271 2.10536 15.5254 2.29289 15.7129C2.48043 15.9004 2.73478 16.0058 3 16.0058ZM12.76 2.4158L15.59 5.2458L14.17 6.6658L11.34 3.8358L12.76 2.4158ZM4 11.1758L9.93 5.2458L12.76 8.0758L6.83 14.0058H4V11.1758ZM19 18.0058H1C0.734784 18.0058 0.48043 18.1112 0.292893 18.2987C0.105357 18.4862 0 18.7406 0 19.0058C0 19.271 0.105357 19.5254 0.292893 19.7129C0.48043 19.9004 0.734784 20.0058 1 20.0058H19C19.2652 20.0058 19.5196 19.9004 19.7071 19.7129C19.8946 19.5254 20 19.271 20 19.0058C20 18.7406 19.8946 18.4862 19.7071 18.2987C19.5196 18.1112 19.2652 18.0058 19 18.0058Z"/>
                </svg>
        </div>         
    )
}

export default EditBtn