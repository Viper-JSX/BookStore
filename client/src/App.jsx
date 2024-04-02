import "./css/main.scss"; //importing main file where all css is stored

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout.jsx";

import { useDispatch, useSelector } from "react-redux";
import { authorize, signIn, signUp } from "./redux/thunks/userThunks";
import axiosClient from "./axios/client.js";
 
function App(){
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    //console.log(user);

    useEffect(() => { 
        try {
            (async () => {
                const response = await axiosClient.get("/posts/6536b15d533f4da32d4d7573"); //receiiving post by id
                const statusCode = response.status;
                const post = response.data.post;
                console.log(post, statusCode);
            })();
        } catch (err) {
            console.log("Error occured: ", err.status);
        }
        //const token = localStorage.getItem("token");

        //if (token) {
        //    dispatch(authorize({ token }));
        //}

    }, [])

    const handleSignIn = (values) => {
        //dispatch(signIn(values));
        //console.log("Sign-in", values);
    }

    const handleSignUp = (values) => {
        //dispatch(signUp(values));
        //console.log("Sign-up");
    }

    return(
        <div className='App'>
            <Layout 
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
            />
        </div>
    );
}

export default App;