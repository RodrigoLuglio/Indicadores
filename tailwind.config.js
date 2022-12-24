/** @type {import('tailwindcss').Config} */
module.exports = {
    // plugins: [
    //     require('tailwind-scrollbar')
    // ],
    content: [
        "./layouts/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green_lightest: "#EFF4F4",
                green_light: "#0994A7",
                green_mid: "#195457",
                green_mid2: "#388286",
                green_aqua: "#01D7DF",
                green_dark: "#0B3C3F",
                green_input: "#CCE3E9",
                green_input_focus: "#F4F8F8",

                orange: "#EE7416",
                orange_dark: "#C24B32",

                paragraph: "#404059",
                gray2: "#A5B4CB",
                gray3: "#7D8DA6",

                blue1: "#007EC6",
                red1: "#B31717",
            },
            backgroundImage: () => ({
                login: "url('/imgs/login-bg.jpg')",
                boxlogin: "url('/imgs/boxlogin-bg.jpg')",
            }),
            fontFamily: {
                gotham: "Gotham",
                gotham_medium: "Gotham Medium",
                gotham_bold: "Gotham Bold",
            },
            flexBasis: {
                sidebar_mobile: "60px",
                content_mobile: "calc(100% - 60px)",
            },
            width: {
                sidebar_mobile: "60px",
                sidebar_opened: "260px",
                progressbar: "calc(100% - 40px)",
            },
            maxHeight: {
                content_2xl: "calc(100vh - 96px)",
                content_xl: "calc(100vh - 80px)",
            },
            boxShadow: {
                help_videos: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                status_card: '3px 12px 40px -2px rgba(121, 120, 130, 0.22)',
                status_card_xs: '3px 14px 14px -2px rgba(121, 120, 130, 0.15)',
                tbrow: '8px 8px 30px 0 rgba(128,140,157,0.24)'
            }
        },
    },
    
};
