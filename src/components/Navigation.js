import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/">
                    <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-center">
                    <li className="mr-3 text-lg hover:text-orange-500"><Link to="/">Home</Link></li>
                    <li className="mr-3 text-lg hover:text-orange-500"><Link to="/products">Products</Link></li>
                    <li>
                        <Link to="/cart">
                            <div className="bg-orange-400 flex py-2 px-4 rounded-full">
                                <span>10</span>
                                <img className="ml-2" src="/images/cart.png" alt="" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
