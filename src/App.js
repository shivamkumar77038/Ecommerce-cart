
import './App.css';
import { Outlet } from 'react-router';

import Footer from './components/footer/Footer' ;
import Header from './components/header/Header';







function App() {
 
  return (
    <>
    <Header></Header>
      <Outlet></Outlet>
    <Footer></Footer>
    
    
    </>


    );
}

export default App;
