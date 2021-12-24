import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useState } from 'react';

const Product = (props) => {
    const [ isAddToCart, setIsAddToCart ] = useState(false);

    const { cart, setCart } = useContext(CartContext);

    const { product } = props;

    const addToCart = (event, product) => {
        event.preventDefault();
        
        let _cart = { ...cart };
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);

        setIsAddToCart(true);
        setTimeout(() => {
            setIsAddToCart(false);
        }, 1000);
    }

    return (
        <Link to={`/products/${product._id}`}>
            <div>
                <img className="mb-2 bg-orange-400 p-2" src={ product.image } alt="" />
                <div className="text-center">
                    <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">{ product.size }</span>
                    <h2 className="text-lg font-bold py-2">{ product.name }</h2>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-500">BDT. { product.price }</span>
                    <button 
                    disabled={ isAddToCart } 
                    onClick={(e) => { addToCart(e, product) }} 
                    className={`${ isAddToCart ? 'bg-green-500' : 'bg-orange-400 hover:bg-orange-500' } text-white py-1 px-4 rounded-full font-bold`}>
                        Add{ isAddToCart ? 'ed' : '' }
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Product;
