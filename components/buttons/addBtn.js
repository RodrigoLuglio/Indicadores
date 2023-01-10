const AddBtn = ({size}) => {
    
    const btnSize = (size) ? size : 'w-[38px] h-[38px]';

    return (
        <div className={`group hover:cursor-pointer rounded-full flex justify-center items-center bg-[#0D94A7]/80 transition-all duration-300 hover:bg-[#005c69] ${btnSize}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33325 12H15.6666M11.9999 8.33334V15.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>         
    )
}

export default AddBtn