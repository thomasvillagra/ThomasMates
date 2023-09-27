import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import { productos } from "../../products";


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setProducts(productos);
            setIsLoading(false)
        },1000);
    },[]);

    return(
        <Layout>
            <ItemList>
                {
                    isLoading
                    ?<p>La pagina esta cargando ...</p>
                    : products.map(productos => (
                        <Item 
                        id={productos.id}
                        imgUrl={productos.urlImage}
                        nombre={productos.nombre}
                        descripcion={productos.descripcion} 
                        />
                    ))
                }
            </ItemList>
        </Layout>
    );
};

export default Home;






