import React from 'react';
import './Card.css';
import img1 from "../assets/KM7.webp"
const Card = () => {
    const data = [
        {
            image: img1,
            title: "Card Title 1",
            description: "This is a simple card component created using custom CSS in React. 1",
            button: "Learn More 1"
        },
        {
            image: img1,
            title: "Card Title 2",
            description: "This is a simple card component created using custom CSS in React. 2",
            button: "Learn More 2"
        },
        {
            image: img1,
            title: "Card Title 3",
            description: "This is a simple card component created using custom CSS in React. 3",
            button: "Learn More 3"
        },
        {
            image: img1,
            title: "Card Title 1",
            description: "This is a simple card component created using custom CSS in React. 1",
            button: "Learn More 1"
        },
        {
            image: img1,
            title: "Card Title 2",
            description: "This is a simple card component created using custom CSS in React. 2",
            button: "Learn More 2"
        },
        {
            image: img1,
            title: "Card Title 3",
            description: "This is a simple card component created using custom CSS in React. 3",
            button: "Learn More 3"
        },

    ]
    return (
        <div style={{ display: "grid", gridTemplateColumns:"auto auto auto" }}>

            {data.map((item, index) => (
                <div className="custom-card" key={index}>
                    <img src={item.image} alt="Card Image" className="card-img" />
                    <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-text">
                          {item.description}
                        </p>
                        <button className="card-btn">{item.button}</button>
                    </div>
                </div>
            ))}



        </div>
    );
};

export default Card;
