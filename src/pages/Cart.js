import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {

    let total = 0;
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);

    const [ fetchedCartItems, toggleFetchedCartItems ] = useState(false);

    useEffect(() => {
        if (!cart.items) {
            return;
        }
        if (fetchedCartItems) {
            return;
        }
        fetch('/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then(res => res.json())
        .then(products => {
            setProducts(products);
            toggleFetchedCartItems(true);
        })
    }, [cart]);

    const getQty = (productId) => {
        return cart.items[ productId ];
    }

    // Cart Increment
    const increment = (productId) => {
        const existingQty =  cart.items[ productId ];
        const _cart =  {...cart};
        _cart.items[productId] = existingQty + 1;
        _cart.totalItems += 1;
        setCart(_cart);
    }

    // Cart Decrement
    const decrement = (productId) => {
        const existingQty =  cart.items[ productId ];
        if (existingQty === 1) {
            return;
        }
        const _cart =  {...cart};
        _cart.items[productId] = existingQty - 1;
        _cart.totalItems -= 1;
        setCart(_cart);
    }

    // Get Updated Price
    const getSum = (productId, price) => {
        const sum = price * getQty(productId);
        total += sum;
        return sum;
    }

    return (
        !products.length 
        ?
        <img className="mx-auto w-2/5 mt-12" src="/images/empty-cart.png" alt="" />
        :
        <div className="container mx-auto w-full lg:w-1/2 pb-24">
            <h1 className="text-3xl text-center">Shopping Cart</h1>
            <ul>

                {
                    products.map(product => { 
                        return (
                            <li key={product._id}>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center">
                                        <img className="w-20 bg-orange-400 p-1 mr-2" src={ product.image } alt="" />
                                        <span className="text-md">{ product.name }</span>
                                    </div>
                                    <div className="flex items-center">
                                        <button onClick={ () => { decrement(product._id) } } className="bg-orange-400 px-4 py-2 rounded-full leading-none">-</button>
                                        <b className="px-2">{ getQty(product._id) }</b>
                                        <button onClick={ () => { increment(product._id) } } className="bg-orange-400 px-4 py-2 rounded-full leading-none">+</button>
                                    </div>
                                    <span className="text-lg font-bold">BDT. { getSum(product._id, product.price) }</span>
                                    <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
            <hr className="mt-7 text-gray-200" />
            <div className="text-lg mt-2 text-right">
                Total Price: <b>{ total }</b>
            </div>
            <div className="text-right">
                <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-full leading-none text-white mt-5">Order Now</button>
            </div>
        </div>
    )
}

export default Cart;
