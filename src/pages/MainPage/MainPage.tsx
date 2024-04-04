import React, { useState } from 'react';
import styles from './MainPage.module.css';
import { SearchBar } from '../../components/SearchBar';
import data from '../../mockup/MockupData.json';
import { TProduct } from '../../types';
import { ProductTable } from '../../components/ProductTable';

export function MainPage() {
    const [products, setProducts] = useState<TProduct[]>(data);

    function searchProduct({ id, name, type }: TProduct) {
        const filteredProducts = data.filter((item) => {
            if (id && item.id !== id) return false;
            if (name && !item.name.toLowerCase().includes(name.toLowerCase()))
                return false;
            if (type && item.type.toLowerCase() !== type.toLowerCase())
                return false;
            return true;
        });

        setProducts(filteredProducts);
    }

    return (
        <main>
            <SearchBar onSearch={searchProduct} />
            <ProductTable products={products} />
        </main>
    );
}
