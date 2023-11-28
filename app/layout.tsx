import { GeistSans } from 'geist/font'
import './globals.css'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import AuthButton from '@/components/AuthButton'
import Dashboard from '@/components/Dashboard'
import Login from './login/page'
import Intro from '@/components/Intro'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">

        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
              <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                <h1><Link href="/">Anywhere POS</Link> </h1>
                <nav>
                  <ul className='flex gap-1'>
                    <li><Link
                      href="/inventory"
                      className="py-2 px-3"
                    >Inventory</Link></li>
                    <li><Link
                      href="/pos"
                      className="py-2 px-3"
                    >Point of Sales</Link></li>
                  </ul>
                </nav>
                {isSupabaseConnected && user && <AuthButton />}
              </div>
            </nav>

            {isSupabaseConnected && user ? children : <Intro />}
          </div>
        </main>
      </body>
    </html>
  )
}
