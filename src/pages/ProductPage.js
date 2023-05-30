import React, {useState} from 'react'
import ProductItem from '../components/ProductItem'
import './ProductPage.scss'
import {Items} from '../components/AllData'
import {Link, useParams} from 'react-router-dom'
import Trending from '../components/Trending'

export default function ProductPage() {
 
  return (
    <>
   <ProductItem/>
   <Trending/>
    </>
  )
}
