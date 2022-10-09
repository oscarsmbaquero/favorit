import routes from "./Config/routes";
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <div className="main">
      <Routes>            
                {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
          </Routes>

      </div>
    </Router>  
    </div>
  );
}

export default App;
