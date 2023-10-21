import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import { productos } from "../../products";
import React, { useContext, useEffect, useState } from "react";
import { CartCtx } from "../../context/CartContext";
import { Ring } from "@uiball/loaders";

const Child = React.memo(({ mensaje }) => {
    console.log('Renderización de Child');
    return <div>{mensaje}</div>;
});
  
const ChildNoMemo = ({ mensaje }) => {
    console.log('Renderización de Child NO MEMO');
    return <div>{mensaje}</div>;
}

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { listProducts, setListProducts } = useContext(CartCtx);
    const [es, setEs] = useState(true)
    const [message, setMessage] = useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            setListProducts(productos);
            setIsLoading(false)
        },1000);
    },[]);

    
    const config = isLoading ? {
        className: 'desactivate'
    } : {}

    return(
        <Layout>
        
            <ItemList>
                {isLoading && <Ring />}
                {!isLoading && listProducts.map((productos) => (
                <Item
                    key={productos.id}
                    id={productos.id}
                    nombre={productos.nombre}
                    descripcion={productos.descripcion}
                />
                ))}
                
            </ItemList>
        </Layout>
    );
};

export default Home;






