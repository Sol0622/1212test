import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (<div>
        <Navbar />
        <Outlet></Outlet>
    </div>  );
}
 
export default Layout;