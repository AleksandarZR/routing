import '../styles/globals.css'
import dynamic from 'next/dynamic';

const MoonPayProvider = dynamic(
    () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
    { ssr: false },
);

function MyApp({ Component, pageProps }) {
    return (<MoonPayProvider
        apiKey="pk_test_xxxxxxxxxxxxxxxxxx"
        environment="sandbox"
        debug
    >
        <Component {...pageProps} />
    </MoonPayProvider>);
}

export default MyApp
