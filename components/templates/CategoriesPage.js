import styles from './CategoriesPage.module.css';
const CategoriesPage = () => {
    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subContainer}>
                <div className={styles.select}>
                    <select>
                        <option>Difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <select>
                        <option>Cooking Time</option>
                        <option>More Than 30 min</option>
                        <option>Les Than 30 min</option>
                    </select>
                    <button>Search</button>
                </div>

            </div>

        </div>
    );
};

export default CategoriesPage;