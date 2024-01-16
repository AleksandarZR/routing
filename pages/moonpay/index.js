import Link from 'next/link'
import dynamic from 'next/dynamic';
import { useState } from 'react'
import Button from "../../components/Button";

const MoonPayProvider = dynamic(
    () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
    { ssr: false },
);

const MoonPayBuyWidget = dynamic(
    () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayBuyWidget),
    { ssr: false },
);

function Moonpay() {
    const [visible, setVisible] = useState(true);
    const handleClick = () => {
        console.log('Button Moonpay clicked');
        setVisible(!visible);
    }

    return (
        <>
            <h3><Link href='/'>Home</Link></h3>

            <Button text='Moonpay' onClick={handleClick}/>

            {/* embedded overlay newTab newWindow */}
            <MoonPayBuyWidget
                variant="embedded"
                baseCurrencyCode="usd"
                baseCurrencyAmount="100"
                defaultCurrencyCode="eth"
                visible={visible}
            />
        </>
    )
}

export default Moonpay