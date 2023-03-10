import { getServerSession } from 'next-auth';
import './globals.css'
import LogIn from '@/components/LogIn';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await  getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        {session ? (
          <>{children}</>
        ) : (
          <>
            <LogIn />
          </>
        )}
      </body>
    </html>
  );
}
