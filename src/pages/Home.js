import Products from '../components/Products';

const Home = () => {
    return (
        <>
            <div className="hero py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h5 className="text-lg">Feeling <span className="text-orange-400">Hungry?</span></h5>
                        <h1 className="text-3xl md:text-6xl font-bold mt-2">Easy Food <span className="text-orange-400">Delivery!</span></h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold bg-orange-400 hover:bg-orange-500 mt-5">Order Now</button>
                    </div>
                    <div className="w-1/2">
                        <img className="w-5/6" src="/images/pizza.jpeg" alt="" />   
                    </div>
                </div>
            </div>
            <div className="pb-24">
                <Products />
            </div>
        </>
    ) 
}

export default Home;