import Navbar from "./Navbar.jsx"

function AppLayout({ children }){
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main>{children}</main>
        </>
    );
}

export default AppLayout;