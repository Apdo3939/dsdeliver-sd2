import { useEffect, useState } from 'react';
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import { Product } from './types'
import './styles.css'
import { fetchProducts } from './api';
import OrderLocation from './OrderLocation';
import {OrderLocationdata} from './types'

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const[orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location=>setOrderLocation(location)} />
        </div>
    );
}

export default Orders;