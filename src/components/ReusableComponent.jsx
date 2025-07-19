import React from 'react'
const ReusableComponent = ({title, btnText, img, handleClick}) => {
    console.log("title = ", title)
    return (
        <>
            <div style={{display:"flex"}}>
                <div className="left">
                    <h2>{title}</h2>
                    <button onClick={handleClick}>{btnText}</button>
                </div>
                <div style={{width:"50%"}}>
                    <img src={img} alt="" style={{width:"100%"}} />
                </div>
            </div>
        </>
    )
}

export default ReusableComponent;
