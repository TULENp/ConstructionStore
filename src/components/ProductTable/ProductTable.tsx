import styles from './ProductTable.module.css'; // Подключаем модульные стили
import { TProduct } from '../../types';

//* Display product data as a table
export function ProductTable({ products }: { products: TProduct[] }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Идентификатор</th>
                    <th>Наименование</th>
                    <th>Вид товара</th>
                </tr>
            </thead>
            <tbody>
                {products.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
