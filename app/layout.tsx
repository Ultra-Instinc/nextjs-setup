import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignInWithMetamaskButton
} from '@clerk/nextjs'
import './globals.css'
import { ConvexClientProvider } from '@/providers/convex-client-provider'
import { Toaster } from 'sonner'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          {/* <UserButton/> */}
          <Toaster/>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  )
}