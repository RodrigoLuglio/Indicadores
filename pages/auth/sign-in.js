import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from "../../styles/SignIn.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import logoLogin from '../../public/imgs/logo-login.svg';


import { TextInput,  Button, PasswordInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

export default function SignIn() {
    
    const router = useRouter();

    const loginform = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
            password: (value) => (value.length < 2 ? 'Senha precisa ter pelo menos 2 dígitos' : null),
        },
    });

    const loginSubmit =  loginform.onSubmit(
        async (values) =>  {
            console.log('value', values);
            const result = await signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
            });
            if (result.ok) {
                router.replace("/");
                return;
            }
            alert("Credential is not valid");
        },
        (errors) => console.log(errors)
    );


    return (
      <>
        <Head>
          <title>Presence</title>
        </Head>
        <section className="loginpage">

            {/* <Alert icon={<IconAlertCircle size={16} />} title="Email ou senha incorreta!!" color="red" variant="filled">
                Dados nã conferem com os nossos registros. Caso tenha esquecido seus dados clique abaixo no "esqueci minha senha"
            </Alert> */}

            <div className="loginpage__bgcol">
                <Image src={logoLogin} className="" alt="logo Presence - Comunicação e Sustentabilidade"/>
            </div>

            {/* login box */}
            <div className="loginbox">
                <div className="loginbox__bar"></div>
                <div className="loginbox__content">
                    <div className="loginbox__wrapper">

                        <h1>Faça seu login</h1>

                        <form onSubmit={loginSubmit}>

                            <TextInput
                                withAsterisk
                                label="Email"
                                {...loginform.getInputProps("email")}
                            />

                            <PasswordInput
                                withAsterisk
                                label="Senha"
                                {...loginform.getInputProps("password")}
                                bg="rgba(255,255,255,0)"
                            />
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center space-y-4 sm:space-y-0 my-4 ">
                                <Button type="submit">Entrar</Button>
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
