import "./styles.css"
import { Link } from 'react-router-dom'
// import {Button} from '@mui/material';

const ItemListContainer = ({router, handleConsole}) =>{

    return(
        <div className='container'>
            <ul>
                <li><Link to={"/category/:categoryId"}>camionero</Link></li>
                <li><Link to={"/category/:categoryId"}>Mate Torpedo</Link></li>
                <li><Link to={"/category/:categoryId"}>Mate Imperial</Link></li>
            </ul>
            {/* <Button variant="outlined" onClick={()=> handleConsole()}>Consologiame</Button> */}
        </div>
    )
}
export default ItemListContainer