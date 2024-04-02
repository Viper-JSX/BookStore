import { Routes, Route } from "react-router-dom";

import WelcomePage from "./WelcomePage/WelcomePage.jsx";
import HomePage from "./HomePage/HomePage.jsx";

const Layout = ({
    handleSignIn,
    handleSignUp
}) => {
    return (
        <Routes>
            <Route path="" element={ <HomePage /> } />
            <Route path="/welcome" element={ <WelcomePage /> } > 
                <Route path="summer-welcome" element={ <h2>This is a summer welcome</h2> } />
            </Route>
        </Routes>
    );
}

export default Layout;