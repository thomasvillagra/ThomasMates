import CartWidget from '../CartWidgets/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import "./styles.css"
import { Link } from 'react-router-dom'
 

const NavBar = () =>{

    const navegacion = [ 'Mate Camionero', 'Mate Torpedo', 'Mate Imperial']
    const handleConsole = () => console.log ('aca estoy')
    
    return(
        <div className='navbar'>
            <p><Link to={"/"}>ThomasMate</Link></p>
            <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
            <CartWidget/>
        </div>
        
    );
};

export default NavBar;
