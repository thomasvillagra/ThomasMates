import Navbar from "../NavBar/NavBar"

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <div style={{padding:"20px 0 px"}}>
            {children}
        </div>
        </>
    );
};

export default Layout;
