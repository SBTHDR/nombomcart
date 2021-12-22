const Product = () => {
    return (
        <div>
            <img src="/images/peproni.png" alt="" />
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">Best Selling</h2>
                <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">Medium</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span>BDT. 500</span>
                <button className="bg-yellow-500 hover:bg-yellow-400 py-1 px-4 rounded-full font-bold">Add</button>
            </div>
        </div>
    )
}

export default Product;
