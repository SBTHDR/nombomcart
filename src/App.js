import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/products" component={Products} exact></Route>
                    <Route path="/products/:_id" component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;