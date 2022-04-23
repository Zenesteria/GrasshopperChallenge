import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';


function App() {
  
  return (
    <Router>
        {/* AUX */}
        <Banner text={'New available in Spanish!'}/>
        
        {/* NAVBAR */}
        <Nav/>

        {/* ROUTES */}
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>

        {/* FOOTER */}
        <Footer/>
    </Router>
  );
}

export default App;
