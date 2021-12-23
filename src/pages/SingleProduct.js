import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const SingleProduct = () => {

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
            <button className="mb-12 font-bold" onClick={ () => { history.goBack() } }>Back</button>
            <div className="sm:flex sm:items-center">
                <div className="w-full sm:w-1/2">
                    <img src={ product.image } alt="" className="w-full sm:w-4/5"/>
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/2 ml-0 mt-3 sm:mt-0 sm:ml-16">
                    <h1 className="text-3xl font-bold mb-3">{ product.name }</h1>
                    <p className="text-xl mb-5">{ product.description }</p>
                    <span className="text-md bg-gray-200 py-1 px-4 rounded-full mb-5">Size: { product.size }</span>
                    <div className="font-bold mt-2 text-xl text-green-500">BDT. { product.price }</div>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
