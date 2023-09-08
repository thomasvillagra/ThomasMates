import "./styles.css"

const ItemListContainer = (props) =>{
    const {router} = props;
    return(
        <div className='container'>
            {router.map((ruta) =>(
                <p key={ruta}>{ruta}</p>
            ))}
        </div>
    )
}
export default ItemListContainer