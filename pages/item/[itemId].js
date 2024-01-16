import { useRouter } from 'next/router';

function ItemDetail() {
    const router = useRouter();
    const itemId = router.query.itemId;

    return <h1>Details about item {itemId}</h1>
}

export default ItemDetail