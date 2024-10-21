import {useState, useEffect} from "react";
import axios from "axios";
import nophoto from '../assets/nophoto.svg'

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data)
            } catch (error) {
                console.error('Ошибка приполучении товаров на клиенте:', error);
            }
        };

        getProducts();
    }, []);

    return(
        <div className="catalog">
            <h2 className="title">Каталог товаров</h2>
            <div className="products-list">
                {products.length === 0 ? (
                    <p>Товаров пока нет</p>
                ) : (
                    products.map(product => (
                        <div 
                            className="products-list__item"
                            key={product.id}>
                            <img
                                className="products-list__item__img"
                                src={product.image || nophoto}
                                alt={product.name}
                            />
                            <div>
                                <h3 className="products-list__item__name">
                                    {product.name}
                                </h3>
                                <p className="products-list__item__description">
                                    {product.description}
                                </p>
                                <p className="products-list__item__price">
                                    Стоимость: {product.price}
                                </p>
                                <p className="products-list__item__stock">
                                    На складе: {product.stock}
                                </p>
                                <p className="products-list__item__category">
                                    Категория: {product.category}
                                </p>
                            </div>
                        </div>
                    ))
                )
            }
            </div>
        </div>
    );
};

export default ProductsList;