import { AuthButtonServer } from '../components/auth-button-server'

export default async function Login () {
  return (
    <section className='grid place-content-center min-h-screen'>
        <h1 className='text-xl font-bold mb-4'>Inicia sesion en DevTer</h1>
        <AuthButtonServer />
    </section>
  )
}
