import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';

const App = () => {

    const [ cart, setCart ] = useState({  });
    
    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" component={ProductsPage} exact></Route>
                        <Route path="/products/:_id" component={SingleProduct}></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;