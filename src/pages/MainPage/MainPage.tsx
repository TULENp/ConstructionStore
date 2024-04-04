import React from 'react';
import styles from './MainPage.module.css';
import { SearchBar } from '../../components/SearchBar';
import { ProductTable } from '../../components/SearchBar/ProductTable';
import data from '../../mockup/MockupData.json';

export function MainPage() {
    return (
        <main>
            <SearchBar />
            <ProductTable products={data} />
        </main>
    );
}
