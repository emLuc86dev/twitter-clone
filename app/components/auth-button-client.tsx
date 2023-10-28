'use client'
import { useRouter } from 'next/navigation'
import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GithubIcon } from './github-icon'
import BtnOpenCloseSession from './btn-open-close-session'

interface SessionProp {
  session: Session | null
}

export function AuthButtonClient ({ session }: SessionProp) {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
        <header>
            {session === null
              ? <BtnOpenCloseSession title='Inicia sesion con Github' onClick={handleSignIn}>
              <GithubIcon />
            </BtnOpenCloseSession>
              : <BtnOpenCloseSession title='Cerrar session' onClick={handleSignOut} />}
        </header>
  )
}
