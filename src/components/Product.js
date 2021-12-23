import { Link } from 'react-router-dom';

const Product = (props) => {

    const { product } = props;

    return (
        <Link to={`/products/${product._id}`}>
            <div>
                <img className="border-2 mb-2" src={ product.image } alt="" />
                <div className="text-center">
                    <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">{ product.size }</span>
                    <h2 className="text-lg font-bold py-2">{ product.name }</h2>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-500">BDT. { product.price }</span>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-4 rounded-full font-bold">Add</button>
                </div>
            </div>
        </Link>
    )
}

export default Product;
