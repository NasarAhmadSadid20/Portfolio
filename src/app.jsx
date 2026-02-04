import { Outlet } from "react-router-dom";
import Home from "./pages/home";
import {Header, Footer} from "./components"

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
