import styles from "./product-item.module.css"

function ButtonComponent() {
    return <button className={styles.buttonStyle}>Click me</button>
}


function ProductItem({ singleItem }) {
    return (
        <div>
            <p className={styles.productTitle}>{singleItem}</p>
            <ButtonComponent />
        </div>

    )
}

export default ProductItem