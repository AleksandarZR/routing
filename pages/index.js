import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter();

    const handleClick = () => {
        console.log('Placing your order');
        router.push('/product');
    }

    return (
        <div>
            <h1>Home Page</h1>

            <h2><Link href='/blog'>Blog</Link></h2>
            <h2><Link href='/product'>Products</Link></h2>
            <h2><Link href='/item'>Items</Link></h2>
            <h2><Link href='/moonpay'>Moonpay</Link></h2>

            <button onClick = {handleClick}> 
                Place Order
            </button>
        </div>
    )
}

export default Home