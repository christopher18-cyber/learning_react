import { useState } from "react"
import ProductItem from "./components/product-items.jsx"
import "./style.css"

const initialState = true

function ProductList({ DummyProducts, name, city }) {

    const [flag, setFlag] = useState(initialState)

    function handleToggleClick() {
        setFlag(!flag)
    }

    return (
        <div>
            <h3 className="title">Ecommerce projects</h3>
            <button onClick={handleToggleClick}>Toggle Text</button>
            {/* <h4>Name is {name}, he/she belongs to this city {city}</h4> */}
            {/* <ProductItem /> */}
            {/* {
                flag ? (<h4>Name is {name}, and belongs to this city {city}</h4>

                ) : (
                    <h4>Hello world</h4>
                )
            } */}
            {
                flag ? <h4>{name} aand {city}</h4> : <h4>Hello</h4>
            }
            <ul>
                {
                    DummyProducts.map((item, index) => (
                        <ProductItem singleItem={item} key={index} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList