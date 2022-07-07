
import Header from "../components/Header/Header";

function HeaderOnly({children}) {
    return ( 
        <>
            <Header/>
            <div className="container">{children}</div>
        </>
    );
}

export default HeaderOnly;