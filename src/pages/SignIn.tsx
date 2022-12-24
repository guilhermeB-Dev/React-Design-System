import { TextInput } from '../components/TextInput';
import { Checkbox } from '../components/Checkbox';
import { Envelope, Lock } from 'phosphor-react';
import { LogoReact } from '../styles/LogoReact';
import { Heading } from '../components/Heading';
import { Button } from '../components/Button';
import { FormEvent, useState } from 'react';
import { Text } from '../components/Text';
import axios from 'axios';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

	function handleSignIn(event: FormEvent) {
    event.preventDefault();

		axios.post('/login', {
			email: 'guilherme.2203@hotmail.com',
			password: 'Lindão'
		})

    setIsUserSignedIn(true);
  }

	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>

			<header className='flex flex-col items-center'>
				<LogoReact/>

				<Heading size='lg' className='mt-4 '>
					Ignite Lab
				</Heading>

				<Text size='lg' className='text-gray-400 mt-1'>Faça login e começe a usar!</Text>
			</header>

			<form onSubmit={ handleSignIn } className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        { isUserSignedIn && <Text>Login realizado!</Text> }

				<label htmlFor='email' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Endereço de E-mail</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope/>
						</TextInput.Icon>
						<TextInput.Input type='email' id='email' placeholder='Digite seu E-mail'/>
					</TextInput.Root>
				</label>
				<label htmlFor='password' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Sua Senha</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input type='password' id='password' placeholder='***********'/>
					</TextInput.Root>
				</label>

				<div className='flex justify-end'>
					<Text asChild size='sm'>
						<a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
					</Text>
				</div>

				<label htmlFor='remember' className='flex items-center gap-2'>
					<Checkbox id='remember'/>
					<Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
				</label>

				<Button type='submit' className='mt-4'>Entrar na plataforma</Button>

			</form>

			<footer className='flex flex-col items-center mt-4'>
				<Text asChild size='sm'>
					<a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crei uma agora!</a>
				</Text>
			</footer>

		</div>
	)
}