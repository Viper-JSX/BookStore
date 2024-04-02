import { Outlet } from "react-router";

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <h2 className="welcome-page__heading">Welcome to our website</h2>
            <Outlet />
        </div>
    );
}

export default WelcomePage;