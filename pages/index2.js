import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import ProductSimpleCard from "../components/product/product-simple-card";

import React, {useEffect,useState} from 'react'
import axios from "axios";

export default function Home() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  let data = []

  const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
  })

  api.get('/products').then(res =>{
    console.log(res.data)
    data = res.data
    console.log(res.data[0].id)

  })
  return (

  );
}
