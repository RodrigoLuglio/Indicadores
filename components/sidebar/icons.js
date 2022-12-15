export const Gear = ({className}) => {
    return (
        <svg width="22" height="22" className={`fill-green_light transition-all duration-300 ${className}`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M18.7968 3.24957C18.7891 3.24077 18.7858 3.22868 18.7781 3.22098C18.7704 3.21328 18.7583 3.20999 18.7495 3.20119C16.6919 1.15115 13.9052 0 11 0C8.09479 0 5.30806 1.15115 3.2505 3.20119C3.2417 3.20999 3.2307 3.21219 3.2219 3.22098C3.2131 3.22978 3.2109 3.24077 3.2032 3.24957C1.6701 4.78929 0.627691 6.74844 0.207526 8.87976C-0.21264 11.0111 0.00827267 13.219 0.842383 15.225C1.67649 17.2309 3.08642 18.9449 4.89421 20.1507C6.70201 21.3565 8.82665 22 11 22C13.1733 22 15.298 21.3565 17.1058 20.1507C18.9136 18.9449 20.3235 17.2309 21.1576 15.225C21.9917 13.219 22.2126 11.0111 21.7925 8.87976C21.3723 6.74844 20.3299 4.78929 18.7968 3.24957ZM11 19.7911C9.6825 19.7906 8.38197 19.4939 7.19475 18.9229C6.00752 18.352 4.96401 17.5214 4.1415 16.4927H8.558C8.86394 16.8383 9.23984 17.1151 9.66082 17.3047C10.0818 17.4942 10.5383 17.5922 11 17.5922C11.4617 17.5922 11.9182 17.4942 12.3392 17.3047C12.7602 17.1151 13.1361 16.8383 13.442 16.4927H17.8585C17.036 17.5214 15.9925 18.352 14.8053 18.9229C13.618 19.4939 12.3175 19.7906 11 19.7911ZM9.9 14.2937C9.9 14.0763 9.96451 13.8637 10.0854 13.6829C10.2063 13.5021 10.378 13.3612 10.579 13.2779C10.78 13.1947 11.0012 13.173 11.2146 13.2154C11.428 13.2578 11.624 13.3625 11.7778 13.5163C11.9317 13.67 12.0364 13.866 12.0789 14.0792C12.1213 14.2925 12.0995 14.5136 12.0163 14.7145C11.933 14.9154 11.792 15.0871 11.6111 15.2079C11.4302 15.3287 11.2176 15.3932 11 15.3932C10.7084 15.3929 10.4287 15.277 10.2225 15.0708C10.0163 14.8647 9.90029 14.5852 9.9 14.2937ZM19.151 14.2959L19.14 14.2937H14.3C14.298 13.6138 14.0854 12.9511 13.6915 12.3968C13.2976 11.8424 12.7416 11.4235 12.1 11.1976V7.69692C12.1 7.40532 11.9841 7.12567 11.7778 6.91948C11.5715 6.71328 11.2917 6.59745 11 6.59745C10.7083 6.59745 10.4285 6.71328 10.2222 6.91948C10.0159 7.12567 9.9 7.40532 9.9 7.69692V11.1976C9.25836 11.4235 8.70241 11.8424 8.3085 12.3968C7.91458 12.9511 7.70202 13.6138 7.7 14.2937H2.86L2.849 14.2959C2.56301 13.5903 2.37071 12.8503 2.277 12.0948H3.3C3.59174 12.0948 3.87153 11.979 4.07782 11.7728C4.28411 11.5666 4.4 11.2869 4.4 10.9953C4.4 10.7037 4.28411 10.4241 4.07782 10.2179C3.87153 10.0117 3.59174 9.89585 3.3 9.89585H2.277C2.4735 8.333 3.08881 6.85224 4.0579 5.61013L4.7773 6.33028C4.87877 6.43529 5.00015 6.51905 5.13436 6.57667C5.26856 6.63429 5.4129 6.66462 5.55896 6.66589C5.70502 6.66716 5.84987 6.63934 5.98505 6.58406C6.12024 6.52878 6.24305 6.44714 6.34634 6.3439C6.44962 6.24067 6.5313 6.11792 6.58661 5.98279C6.64191 5.84767 6.66975 5.7029 6.66848 5.55691C6.66721 5.41092 6.63686 5.26665 6.57921 5.13251C6.52156 4.99837 6.43776 4.87705 6.3327 4.77563L5.6133 4.05548C6.85586 3.08748 8.3369 2.47286 9.9 2.27654V3.29904C9.9 3.59064 10.0159 3.87029 10.2222 4.07648C10.4285 4.28267 10.7083 4.39851 11 4.39851C11.2917 4.39851 11.5715 4.28267 11.7778 4.07648C11.9841 3.87029 12.1 3.59064 12.1 3.29904V2.27654C13.6631 2.47286 15.1441 3.08748 16.3867 4.05548L15.6673 4.77563C15.5622 4.87705 15.4784 4.99837 15.4208 5.13251C15.3631 5.26665 15.3328 5.41092 15.3315 5.55691C15.3303 5.7029 15.3581 5.84767 15.4134 5.98279C15.4687 6.11792 15.5504 6.24067 15.6537 6.3439C15.7569 6.44714 15.8798 6.52878 16.0149 6.58406C16.1501 6.63934 16.295 6.66716 16.441 6.66589C16.5871 6.66462 16.7314 6.63429 16.8656 6.57667C16.9998 6.51905 17.1212 6.43529 17.2227 6.33028L17.9421 5.61013C18.9116 6.85213 19.5273 8.33289 19.7241 9.89585H18.7C18.4083 9.89585 18.1285 10.0117 17.9222 10.2179C17.7159 10.4241 17.6 10.7037 17.6 10.9953C17.6 11.2869 17.7159 11.5666 17.9222 11.7728C18.1285 11.979 18.4083 12.0948 18.7 12.0948H19.723C19.6293 12.8503 19.437 13.5903 19.151 14.2959Z"
            />
        </svg>
    );
}

export const Profile = ({className}) => { 
    return (
        <svg width="22" height="22" className={`fill-green_light transition-all duration-300 ${className}`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0C8.86247 0.00405773 6.77224 0.629092 4.98392 1.79897C3.19561 2.96885 1.78639 4.63308 0.927904 6.58896C0.0694236 8.54483 -0.201262 10.7079 0.148818 12.8148C0.498898 14.9216 1.45463 16.8813 2.89961 18.4551C3.93164 19.5728 5.18419 20.4648 6.57833 21.0749C7.97248 21.685 9.47799 22 11 22C12.522 22 14.0275 21.685 15.4217 21.0749C16.8158 20.4648 18.0684 19.5728 19.1004 18.4551C20.5454 16.8813 21.5011 14.9216 21.8512 12.8148C22.2013 10.7079 21.9306 8.54483 21.0721 6.58896C20.2136 4.63308 18.8044 2.96885 17.0161 1.79897C15.2278 0.629092 13.1375 0.00405773 11 0ZM11 19.8205C8.71698 19.817 6.52431 18.9289 4.88338 17.3429C5.38158 16.1312 6.22907 15.0947 7.31819 14.3653C8.4073 13.6359 9.68885 13.2465 11 13.2465C12.3112 13.2465 13.5927 13.6359 14.6818 14.3653C15.7709 15.0947 16.6184 16.1312 17.1166 17.3429C15.4757 18.9289 13.283 19.817 11 19.8205ZM8.79581 8.8091C8.79581 8.37354 8.92509 7.94775 9.16729 7.58559C9.40948 7.22342 9.75373 6.94115 10.1565 6.77447C10.5593 6.60778 11.0024 6.56417 11.43 6.64914C11.8576 6.73412 12.2503 6.94387 12.5586 7.25186C12.8669 7.55985 13.0768 7.95226 13.1618 8.37946C13.2469 8.80666 13.2032 9.24947 13.0364 9.65188C12.8696 10.0543 12.5871 10.3982 12.2246 10.6402C11.8621 10.8822 11.4359 11.0114 11 11.0114C10.4154 11.0114 9.85477 10.7794 9.44141 10.3663C9.02804 9.95334 8.79581 9.39318 8.79581 8.8091ZM18.6155 15.4159C17.6308 13.7331 16.1153 12.4242 14.3063 11.6941C14.8674 11.0584 15.2331 10.2743 15.3593 9.43613C15.4855 8.59793 15.367 7.74113 15.018 6.96855C14.6689 6.19597 14.1041 5.54044 13.3914 5.08061C12.6787 4.62079 11.8484 4.3762 11 4.3762C10.1516 4.3762 9.32126 4.62079 8.60856 5.08061C7.89586 5.54044 7.3311 6.19597 6.98204 6.96855C6.63299 7.74113 6.51447 8.59793 6.6407 9.43613C6.76694 10.2743 7.13257 11.0584 7.69372 11.6941C5.88474 12.4242 4.36922 13.7331 3.38454 15.4159C2.59978 14.0804 2.18515 12.5601 2.18325 11.0114C2.18325 8.67506 3.11216 6.43443 4.76562 4.7824C6.41908 3.13038 8.66165 2.20228 11 2.20228C13.3383 2.20228 15.5809 3.13038 17.2344 4.7824C18.8878 6.43443 19.8167 8.67506 19.8167 11.0114C19.8149 12.5601 19.4002 14.0804 18.6155 15.4159Z"/>
        </svg>
    );
}

export const Research = ({className}) => { 
    return (
        <svg width="21" height="21" className={`fill-green_light transition-all duration-300 ${className}`} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8V5C8 5.79565 8.31607 6.55871 8.87868 7.12132C9.44129 7.68393 10.2044 8 11 8H14V9C14 9.26522 14.1054 9.51957 14.2929 9.70711C14.4804 9.89464 14.7348 10 15 10C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9V6.94C15.9896 6.84813 15.9695 6.75763 15.94 6.67V6.58C15.8919 6.47718 15.8278 6.38267 15.75 6.3L9.75 0.3C9.66734 0.222216 9.57282 0.158081 9.47 0.11C9.44015 0.10576 9.40985 0.10576 9.38 0.11C9.27841 0.0517412 9.16622 0.0143442 9.05 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19C11 18.7348 10.8946 18.4804 10.7071 18.2929C10.5196 18.1054 10.2652 18 10 18ZM10 3.41L12.59 6H11C10.7348 6 10.4804 5.89464 10.2929 5.70711C10.1054 5.51957 10 5.26522 10 5V3.41ZM5 6C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H6C6.26522 8 6.51957 7.89464 6.70711 7.70711C6.89464 7.51957 7 7.26522 7 7C7 6.73478 6.89464 6.48043 6.70711 6.29289C6.51957 6.10536 6.26522 6 6 6H5ZM19.71 18.29L18.54 17.13C18.914 16.4773 19.0636 15.7199 18.9661 14.974C18.8686 14.2281 18.5292 13.5347 18 13C17.513 12.4957 16.8854 12.1497 16.199 12.0071C15.5126 11.8646 14.7992 11.9321 14.1517 12.2008C13.5041 12.4695 12.9526 12.927 12.5688 13.5137C12.185 14.1004 11.9868 14.7891 12 15.49C11.9966 16.0932 12.1509 16.6868 12.4476 17.2119C12.7444 17.7371 13.1733 18.1755 13.6917 18.4838C14.2102 18.7921 14.8003 18.9594 15.4034 18.9693C16.0065 18.9791 16.6017 18.8311 17.13 18.54L18.29 19.71C18.383 19.8037 18.4936 19.8781 18.6154 19.9289C18.7373 19.9797 18.868 20.0058 19 20.0058C19.132 20.0058 19.2627 19.9797 19.3846 19.9289C19.5064 19.8781 19.617 19.8037 19.71 19.71C19.8037 19.617 19.8781 19.5064 19.9289 19.3846C19.9797 19.2627 20.0058 19.132 20.0058 19C20.0058 18.868 19.9797 18.7373 19.9289 18.6154C19.8781 18.4936 19.8037 18.383 19.71 18.29ZM16.54 16.54C16.2544 16.8086 15.8771 16.9581 15.485 16.9581C15.0929 16.9581 14.7156 16.8086 14.43 16.54C14.1547 16.2598 14.0003 15.8828 14 15.49C13.9979 15.2928 14.0359 15.0971 14.1115 14.915C14.1871 14.7328 14.2989 14.5678 14.44 14.43C14.7066 14.1648 15.0641 14.0111 15.44 14C15.6422 13.9876 15.8447 14.0171 16.035 14.0866C16.2252 14.1562 16.399 14.2643 16.5455 14.4042C16.692 14.5441 16.808 14.7128 16.8862 14.8996C16.9644 15.0865 17.0031 15.2875 17 15.49C16.9917 15.8871 16.8263 16.2647 16.54 16.54ZM11 10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10ZM9 16C9.26522 16 9.51957 15.8946 9.70711 15.7071C9.89464 15.5196 10 15.2652 10 15C10 14.7348 9.89464 14.4804 9.70711 14.2929C9.51957 14.1054 9.26522 14 9 14H5C4.73478 14 4.48043 14.1054 4.29289 14.2929C4.10536 14.4804 4 14.7348 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16H9Z"/>
        </svg>
    );
}

export const Status = ({className}) => { 
    return (
        <svg width="20" height="21" className={`fill-green_light transition-all duration-300 ${className}`} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 14.9999H5.00001C4.73479 14.9999 4.48044 15.1053 4.2929 15.2928C4.10537 15.4804 4.00001 15.7347 4.00001 15.9999C4.00001 16.2652 4.10537 16.5195 4.2929 16.7071C4.48044 16.8946 4.73479 16.9999 5.00001 16.9999H11C11.2652 16.9999 11.5196 16.8946 11.7071 16.7071C11.8947 16.5195 12 16.2652 12 15.9999C12 15.7347 11.8947 15.4804 11.7071 15.2928C11.5196 15.1053 11.2652 14.9999 11 14.9999ZM7.00001 8.99995H9.00001C9.26522 8.99995 9.51958 8.89459 9.70711 8.70705C9.89465 8.51952 10 8.26516 10 7.99995C10 7.73473 9.89465 7.48038 9.70711 7.29284C9.51958 7.1053 9.26522 6.99995 9.00001 6.99995H7.00001C6.73479 6.99995 6.48044 7.1053 6.2929 7.29284C6.10537 7.48038 6.00001 7.73473 6.00001 7.99995C6.00001 8.26516 6.10537 8.51952 6.2929 8.70705C6.48044 8.89459 6.73479 8.99995 7.00001 8.99995ZM19 10.9999H16V1.99995C16.0007 1.82374 15.9548 1.65047 15.867 1.49769C15.7792 1.34491 15.6526 1.21805 15.5 1.12995C15.348 1.04218 15.1755 0.995972 15 0.995972C14.8245 0.995972 14.652 1.04218 14.5 1.12995L11.5 2.84995L8.50001 1.12995C8.34799 1.04218 8.17554 0.995972 8.00001 0.995972C7.82447 0.995972 7.65203 1.04218 7.50001 1.12995L4.50001 2.84995L1.50001 1.12995C1.34799 1.04218 1.17554 0.995972 1.00001 0.995972C0.824471 0.995972 0.652027 1.04218 0.500008 1.12995C0.347404 1.21805 0.220789 1.34491 0.132986 1.49769C0.0451828 1.65047 -0.000691685 1.82374 7.88288e-06 1.99995V17.9999C7.88288e-06 18.7956 0.316078 19.5587 0.878688 20.1213C1.4413 20.6839 2.20436 20.9999 3.00001 20.9999H17C17.7957 20.9999 18.5587 20.6839 19.1213 20.1213C19.6839 19.5587 20 18.7956 20 17.9999V11.9999C20 11.7347 19.8947 11.4804 19.7071 11.2928C19.5196 11.1053 19.2652 10.9999 19 10.9999ZM3.00001 18.9999C2.73479 18.9999 2.48044 18.8946 2.2929 18.7071C2.10536 18.5195 2.00001 18.2652 2.00001 17.9999V3.72995L4.00001 4.86995C4.15435 4.95056 4.32589 4.99266 4.50001 4.99266C4.67413 4.99266 4.84567 4.95056 5.00001 4.86995L8.00001 3.14995L11 4.86995C11.1543 4.95056 11.3259 4.99266 11.5 4.99266C11.6741 4.99266 11.8457 4.95056 12 4.86995L14 3.72995V17.9999C14.0027 18.3411 14.0636 18.6793 14.18 18.9999H3.00001ZM18 17.9999C18 18.2652 17.8947 18.5195 17.7071 18.7071C17.5196 18.8946 17.2652 18.9999 17 18.9999C16.7348 18.9999 16.4804 18.8946 16.2929 18.7071C16.1054 18.5195 16 18.2652 16 17.9999V12.9999H18V17.9999ZM11 10.9999H5.00001C4.73479 10.9999 4.48044 11.1053 4.2929 11.2928C4.10537 11.4804 4.00001 11.7347 4.00001 11.9999C4.00001 12.2652 4.10537 12.5195 4.2929 12.7071C4.48044 12.8946 4.73479 12.9999 5.00001 12.9999H11C11.2652 12.9999 11.5196 12.8946 11.7071 12.7071C11.8947 12.5195 12 12.2652 12 11.9999C12 11.7347 11.8947 11.4804 11.7071 11.2928C11.5196 11.1053 11.2652 10.9999 11 10.9999Z"/>
        </svg>
    );
}