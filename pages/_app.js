import '../styles/globals.css'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { PrivyProvider } from '@privy-io/react-auth';
import { ZeroDevProvider } from '@zerodev/privy';

const MoonPayProvider = dynamic(
    () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
    { ssr: false },
);

const handleLogin = (user) => {
    console.log(`User ${user.id} logged in!`)
}

function MyApp({ Component, pageProps }) {
    const moonpayApiKey = process.env.NEXT_PUBLIC_MOONPAY_API_KEY;
    const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
    const zeroDevProjectId = process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID;

    return (
        <>
            <Head>
                <title>Next.js Test App</title>
            </Head>

            <ZeroDevProvider projectId={zeroDevProjectId}>
                <PrivyProvider
                    appId={privyAppId}
                    onSuccess={handleLogin}
                    config={{
                        loginMethods: ['email', 'wallet'],
                        appearance: {
                            theme: 'light',
                            accentColor: '#676FFF',
                            logo: '/app-logo-transparent.png',
                        },
                        embeddedWallets: {
                            createOnLogin: 'users-without-wallets',
                            noPromptOnSignature: true
                        }
                    }}
                >
                </PrivyProvider>
            </ZeroDevProvider>

            <MoonPayProvider
                apiKey={moonpayApiKey}
                environment="sandbox"
                debug
            >
                <Component {...pageProps} />
            </MoonPayProvider>
        </>
    )
}

export default MyApp
