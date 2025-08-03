import { useEffect, useState } from "react";
import './Card.css'
import img from "../assets/KM7.webp"
const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ff774470fda8414081d83ae2965b0e7e'
const UseEffectHook = () => {
    const [data, setData] = useState([])
    const fetchApi = async () => {
        const response = await fetch(url)
        const result = await response.json()
        setData(result?.articles)
        console.log("response = ", response)
        console.log("result = ", result)
    }
    console.log("data = ", data)
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <>
            <h2>Use Effect Hook {data.length}</h2>
            <input type="search" name="" id=""  placeholder="Search..."/>
            <div style={{display:"grid", gridTemplateColumns:"auto auto auto", gap:"15px"}}>
                {
                    data?.map((item, index) => (
                        <div className="custom-card" key={index}>
                            <img src={item.urlToImage ? item.urlToImage : img} alt="Card" className="card-image" />
                            <div className="card-content">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-text">
                                    {item.description ? item.description : "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit porro repellat, laboriosam earum ab delectus cum assumenda incidunt odit ducimus."}
                                  </p>
                                <button className="card-button">Delete</button>
                              
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UseEffectHook;

// => life cycle

// component intilize
// component mount  => screen display
// component update  => screen display
// component unmount  => screen display

