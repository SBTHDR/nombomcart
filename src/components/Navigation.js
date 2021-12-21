import { Link } from 'react-router-dom';

const Navigation = () => {
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/">
                    <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-center">
                    <li className="mr-2"><Link to="/">Home</Link></li>
                    <li className="mr-2"><Link to="/products">Products</Link></li>
                    <li>
                        <Link to="/cart">
                            <div style={cartStyle}>
                                <span>10</span>
                                <img className="ml-2" src="./images/cart.png" alt="cart-icon" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
