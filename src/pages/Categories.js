import {React, useState, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import './Categories.scss'
import NavBar from '../components/NavBar'
import CategoriesAll from '../components/categories/CategoriesAll'
import Footer from '../components/Footer'
import {Items} from '../components/AllData'
import CategoriesHeader from '../components/CategoriesHeader'

export default function Categories() {
  return (
  
    <>
    <CategoriesHeader/>
    <Outlet/>
    </>
    

  )
}