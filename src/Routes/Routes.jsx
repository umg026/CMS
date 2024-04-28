import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard"
import Login from '../Pages/Login';
import Layout from '../Pages/shared/Layout';
import Product from '../Pages/Product';
function Routess() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="product" element={<Product />} />
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                </Routes>   
            </BrowserRouter>
        </div>
    )
}

export default Routess