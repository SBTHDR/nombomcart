import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CartContext } from '../CartContext';

const SingleProduct = () => {

    const [ isAddToCart, setIsAddToCart ] = useState(false);

    const { cart, setCart } = useContext(CartContext);

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

    const [product, setProduct] = useState({});
    const params = useParams();
    const history = useHistory();
    
    useEffect(() => {
        fetch(`/api/products/${params._id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        });
    }, [params._id])

    return (
        <div className="container mx-auto mt-12">
            
            <div className="sm:flex sm:items-center">
                <div className="w-full sm:w-1/2">
                    <img src={ product.image } alt="" className="w-full sm:w-4/5"/>
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/2 ml-0 mt-3 sm:mt-0 sm:ml-16">
                    <h1 className="text-3xl font-bold mb-3">{ product.name }</h1>
                    <p className="text-xl mb-5">{ product.description }</p>
                    <span className="text-md bg-gray-200 py-1 px-4 rounded-full mb-5">Size: { product.size }</span>
                    <div className="font-bold mt-2 text-xl text-green-500">BDT. { product.price }</div>
                    <button className="mr-3 bg-gray-300 py-1 px-8 rounded-full" onClick={ () => { history.goBack() } }>Back</button>
                    <button 
                    disabled={ isAddToCart } 
                    onClick={(e) => { addToCart(e, product) }} 
                    className={`${ isAddToCart ? 'bg-green-500' : 'bg-orange-400 hover:bg-orange-500' } text-white py-1 px-8 mt-4 rounded-full font-bold`}>
                        Add{ isAddToCart ? 'ed' : '' }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
