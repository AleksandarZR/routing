import Link from 'next/link'

function ItemList() {
    return (
        <>
            <h3><Link href='/'>Home</Link></h3>

            <h2>Item 1</h2>
            <h2>Item 2</h2>
            <h2>Item 3</h2>
        </>
    )
}

export default ItemList