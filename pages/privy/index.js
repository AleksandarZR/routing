import Link from 'next/link'
import {usePrivySmartAccount} from '@zerodev/privy';

async function Privy() {
    // Mislim da ovaj kod treba da ide na backend
    // const {zeroDevReady, sendTransaction} = usePrivySmartAccount();
    // const destinationAddress = '0xYourDestinationAddress';

    /*if (zeroDevReady) {
        const transactionHash = await sendTransaction({
            to: destinationAddress,
            value: 100000
        });
    } else {
        throw new Error('Smart wallet has not yet initialized. Try again once zeroDevReady is true.');
    }*/

    return (
        <>
            <h3><Link href='/'>Home</Link></h3>

            

            
        </>
    )
}

export default Privy