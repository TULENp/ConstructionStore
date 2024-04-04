import React, { useState } from 'react';
import styles from './SearchBar.module.css'; 

export function SearchBar() {
    const [id, setId] = useState<number | ''>('');
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');

    const handleSearch = () => {
        console.log('Identifier:', id);
        console.log('Name:', name);
        console.log('Type:', type);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type='number'
                placeholder='Идентификатор'
                value={id}
                onChange={(e) => setId(parseInt(e.target.value) || '')}
            />
            <input
                type='text'
                placeholder='Наименование'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value=''>Выберите вид товара</option>
                <option value='0'>Железо</option>
                <option value='1'>Пластик</option>
                <option value='2'>Дерево</option>
            </select>
            <button className={styles.searchButton} onClick={handleSearch}>
                Найти
            </button>
        </div>
    );
}
