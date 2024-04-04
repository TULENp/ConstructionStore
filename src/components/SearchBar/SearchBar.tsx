import { useState } from 'react';
import styles from './SearchBar.module.css';
import { TProduct } from '../../types';

interface SearchBarProps {
    onSearch: ({ id, name, type }: TProduct) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const [id, setId] = useState<number>(-1);
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');

    function handleSearch() {
        onSearch({ id, name, type });
    }

    return (
        <div className={styles.searchBar}>
            <input
                type='number'
                placeholder={id === -1 ? 'Идентификатор' : ''}
                value={id === -1 ? '' : id}
                onChange={(e) => setId(parseInt(e.target.value))}
            />
            <input
                type='text'
                placeholder='Наименование'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value=''>Выберите вид товара</option>
                <option value='железо'>Железо</option>
                <option value='пластик'>Пластик</option>
                <option value='дерево'>Дерево</option>
            </select>
            <button className={styles.searchButton} onClick={handleSearch}>
                Найти
            </button>
        </div>
    );
}
