import Product from './Product';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';

const Products = () => {

    // const { name } = useContext(CartContext);

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            setProducts(products);
        });
    }, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8 mx-3 sm:mx-2">Products List</h1>
            <div className="grid md:grid-cols-5 mx-3 sm:mx-2 my-8 gap-24">

                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
                
            </div>            
        </div>
    )
}

export default Products;
