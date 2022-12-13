import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from "../../styles/SignIn.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import logoLogin from '../../public/imgs/logo-login.svg';

// import { TextInput,  Button} from '@mantine/core';
// import { useForm } from '@mantine/form';

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (result.ok) {
      router.replace("/");
      return;
    }
    alert("Credential is not valid");
  };

  return (
    <>
      <Head>
        <title>Presence</title>
      </Head>
      <section className="loginpage">

        <div className="loginpage__bgcol">
          <Image src={logoLogin} className="" alt="logo Presence - Comunicação e Sustentabilidade"/>
        </div>

        {/* login box */}
        <div className="loginbox">

            <div className="loginbox__bar"></div>

            <div className="loginbox__content">

              <div className="loginbox__wrapper">
                
                <h1>Faça seu login</h1>

                <form onSubmit={onSubmit} autoComplete="off">

                  <label htmlFor="email">Email</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="text" 
                    autoComplete="nope" />

                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                  />
                  
                  <div>
                    <button>Entrar</button>
                    <Link href="/redefinir-senha">Esqueci minha senha</Link>
                  </div>

                </form>
              </div>
            </div>
        </div>

      </section>
    </>


  );
}
