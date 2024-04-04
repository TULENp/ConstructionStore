import { ChangeEvent, useState } from 'react';
import styles from './SearchBar.module.css';
import { TProduct } from '../../types';

interface SearchBarProps {
    onSearch: ({ id, name, type }: TProduct) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');

    function handleSearch() {
        onSearch({ id, name, type });
    }

    function handleIdChange(event: ChangeEvent<HTMLInputElement>) {
        const value: string = event.target.value;
        // check if only positive numbers
        if (/^\d*$/.test(value)) {
            setId(value);
        }
    }

    return (
        <div className={styles.searchBar}>
            <input
                type='text'
                placeholder='Идентификатор'
                value={id}
                onChange={handleIdChange}
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
