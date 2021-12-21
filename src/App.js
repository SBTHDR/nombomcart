import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;