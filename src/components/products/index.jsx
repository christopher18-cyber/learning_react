import { useEffect, useState } from "react"
import ProductItem from "./components/product-items.jsx"
import "./style.css"

const initialState = true

function ProductList({ DummyProducts, name, city }) {

    const [flag, setFlag] = useState(initialState)

    const [count, setCount] = useState(0)

    const [changeStyle, setChangeStyle] = useState(false)

    function handleToggleClick() {
        setFlag(!flag)
    }

    function handleIncreaseCount() {
        setCount(count + 1)
    }

    // useEffect(() => {
    //     console.log("This will only run once.");
    // }, [])

    useEffect(() => {
        if (count === 10) {
            setChangeStyle(true)
        }
    }, [count])

    console.log(changeStyle);

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

            <div>
                <button style={{ backgroundColor: changeStyle ? "black" : "white", color: changeStyle ? "red" : "bue" }} onClick={handleIncreaseCount}>Increase the count</button>
                <p>count is {count}</p>
            </div>
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