import "./css/main.scss"; //importing main file where all css is stored

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout.jsx";

import { useDispatch, useSelector } from "react-redux";
import axiosClient from "./axios/client.js";
 
function App(){
    const dispatch = useDispatch();

    //console.log(user);

    useEffect(() => { 
        axiosClient.get("books/660eacffeb816f506d775cd2")
        .then((response) => console.log("Book received", response.data))
        .catch((err) => console.log("Error occured"));
    }, [])


    return(
        <div className='App'>
            <Layout />
        </div>
    );
}

export default App;