export { default } from "next-auth/middleware"

// import { withAuth } from "next-auth/middleware"

// export default withAuth({
//     callbacks: {
//         authorized: ({req, token}) => {
//             const path = req.nextUrl.pathname;
//             console.log('withAuth.callbacks');
//             console.log('path', path);

//             if (path.startsWith("/admin")) {
//                 return token?.role === "Admin";
//             }

//             return token !== null;
//         }
//     }
// })

export const config = { matcher: [
        "/dashboard", 
        "/admin/:path*"
    ]
}