import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Root = () => {
    return (
        <>
            <Nav />
            <div className='main'>
                <Outlet />
            </div>
        </>
    )
}

export default Root;