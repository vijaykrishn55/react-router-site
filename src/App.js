import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Modifier from "./Modifier";
import About from "./Components/Home/About";
import ContactUs from "./Components/Home/ContactUs";
import User from "./Components/Home/User";

// const router=createBrowserRouter([
//     {
//         path:"/",
//         element:<Modifier/>,
//         children:[
//             {
//                 path:"",
//                 element:<Home/>
//             },
//             {
//                 path:"about",
//                 element:<About/>
//             },
//             {
//                 path:"contactus",
//                 element:<ContactUs/>
//             }
//         ]
//     }
// ])

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Modifier/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="user/:userid" element={<User/>}/>
    </Route>
    )
)
export default function App(){
    return (
        <>
        <RouterProvider router={router}/>
        </>
        )
}