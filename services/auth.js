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
        `${strapiUrl}/api/users/me?populate=*`,
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

export async function getUserAvatar(jwt, userId) {
    const { data } = await axios.get(
        `${strapiUrl}/api/users/${userId}/?fields[0]=id&fields[1]=name&populate[avatar][fields][0]=formats`,
        {
            headers: {
                Authorization: "Bearer " + jwt,
            },
        }
    );
    return data;
}