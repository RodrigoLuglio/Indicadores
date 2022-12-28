import axios from "axios";
import { useRouter } from 'next/router'

const strapiUrl = process.env.STRAPI_URL;

export async function signIn({ email, password }) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

export async function me(token) {
    const { data } = await axios.get(
        `${strapiUrl}/api/users/me?populate=role`,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    );
    return data;
}

export function checkUserRole (session, role) {
    if (session == null || session.user.role != role) {
        return {
            redirect: {
                destination: (session == null) 
                    ? "/auth/not-authenticated" 
                    : (role == "CAdmin") ? "/admin" : "/dashboard",
                permanent: true,
            },
        };
    }
    return null;

    // return {
    //     props: {
    //         user: session.user
    //     }
    // }
}