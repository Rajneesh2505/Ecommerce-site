import { useState } from "react"
import "./category.css"
let Category=()=>{
    let [value,setValue]=useState(0)
let handleValue=(e)=>{
setValue(e.target.value)
}
    return (
        <>
        <div>
        <div className="category-container">
            <h5 style={{textAlign:"center",margin:".7em 0"}}>Filter</h5>
            <form>
                <div>
                    <label for="price">Price:<span>{value}</span></label>
                </div>
                <div>
                <input type="range" id="price" name="price" min="0" max="100" onChange={e=>handleValue(e)} />
                </div>
                <h5>Category</h5>
                <div>
                    <div>
                    <input type="checkbox" id="men's clothing"/>
                    <label for="men's clothing">Men's Clothing</label>
                    </div>
                    <div>
                    <input type="checkbox" id="women's clothing"/>
                    <label for="women's clothing">Women's Clothing</label>
                    </div>
                    <div>
                    <input type="checkbox" id="jewelery"/>
                    <label for="jewelery">Jewelery</label>
                    </div>
                    <div>
                    <input type="checkbox" id="electronics"/>
                    <label for="electronics">Electronics</label>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}

export default Category