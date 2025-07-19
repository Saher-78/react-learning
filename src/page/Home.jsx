import React from 'react'
import HeroSection from '../components/HeroSection'
import ReusableComponent from '../components/ReusableComponent'
import km7 from "../assets/KM7.webp"
const Home = () => {

    const handlebtn1 = ()=>{
        console.log("First Btn Click!")
    }
    return (
        <>
            <ReusableComponent title="SPARK 40 Series  
            Slim Ever, Strong Forever" btnText="Read Me" img={km7}  handleClick = {handlebtn1}/>
            <div style={{ width: "100%", height: "2px", backgroundColor: "green", margin: "5px 0" }}></div>

            <ReusableComponent title="POVA 7 Series Power Beyond Limits" btnText="Read More" img={km7}  />

            <div style={{ width: "100%", height: "2px", backgroundColor: "black", margin: "5px 0" }}></div>
            <ReusableComponent />

            <div style={{ width: "100%", height: "2px", backgroundColor: "red", margin: "5px 0" }}></div>
            <ReusableComponent />

            <div style={{ width: "100%", height: "2px", backgroundColor: "yellow", margin: "5px 0" }}></div>
        </>
    )
}

export default Home
