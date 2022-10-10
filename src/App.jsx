import routes from "./Config/routes";
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Header2 from "./Components/Header/Header2";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Header2/>      
      <Routes>            
                {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
          </Routes>      
      <Footer/>
    </Router>  
    </div>
  );
}

export default App;
