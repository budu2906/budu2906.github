import React, {useState} from 'react'
import './App.css';
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route} from 'react-router-dom'
import CategoriesAll from './components/categories/CategoriesAll'
import CategoriesChairs from './components/categories/CategoriesChairs'
import CategoriesElectronics from './components/categories/CategoriesElectronics'
import CategoriesFurniture from './components/categories/CategoriesFurniture'
import CategoriesKitchen from './components/categories/CategoriesKitchen'
import CategoriesLamps from './components/categories/CategoriesLamps'
import CategoriesSkinCare from './components/categories/CategoriesSkinCare'
function App() {
    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show);
    }





return (
    <>
    <NavBar handleClick={handleClick} show={show}/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Categories" element={<Categories/>}>
            <Route path="All" element={<CategoriesAll/>}/>
            
            <Route path="Chairs" element={<CategoriesChairs/>} />
            <Route path="Electronics" element={<CategoriesElectronics/>} />
            <Route path="Furniture" element={<CategoriesFurniture/>} />
            <Route path="Kitchen" element={<CategoriesKitchen/>} />
            <Route path="Lamps" element={<CategoriesLamps/>} />
            <Route path="SkinCare" element={<CategoriesSkinCare/>} />
        </Route>
        <Route path="/Categories/product/:id" element={<ProductPage/>} />
    </Routes>
    <Footer/>
    </>
) 
}

export default App;
