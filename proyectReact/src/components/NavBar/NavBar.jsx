import CartWidget from '../CartWidgets/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import "./styles.css"

const NavBar = () =>{

    const navegacion = ['Inicio', 'Productos', 'Contacto', 'Ayuda']

    return(
        <div className='navbar'>
            <div>ThomasMate</div>
            <ItemListContainer router={navegacion}/>
            <CartWidget/>
        </div>
    )
}

export default NavBar
