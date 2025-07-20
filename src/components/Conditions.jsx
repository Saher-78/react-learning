import React, { useState } from 'react';

const Conditions = () => {
    const [show, setShow] = useState(false)
    console.log(show)
    return (
        <>
            <div className="dropdown-container">
                <h2 className="dropdown-header" onMouseEnter={() => setShow(true) } onMouseLeave={()=> setShow(false)}>{show ? "Close DropDown" : "Open Dropdown"}</h2>
                {
                    show && (<ul className="dropdown-list">
                        <li className="dropdown-item">Home</li>
                        <li className="dropdown-item">About</li>
                        <li className="dropdown-item">Contact</li>
                        <li className="dropdown-item">Info</li>
                        <li className="dropdown-item">Link</li>
                    </ul>) 
                }
            </div>

            <style jsx>{`
                .dropdown-container {
                    position: relative;
                    display: inline-block;
                    font-family: Arial, sans-serif;
                }

                .dropdown-header {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #2c3e50;
                    padding: 10px 15px;
                    background-color: #ecf0f1;
                    border: 2px solid #3498db;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .dropdown-header:hover {
                    background-color: #3498db;
                    color: #ffffff;
                }

                .dropdown-list {
                    list-style: none;
                    padding: 0;
                    margin: 10px 0 0 0;
                    width: 200px;
                    background-color: #ffffff;
                    border: 1px solid #dcdcdc;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }

                .dropdown-item {
                    padding: 12px 20px;
                    font-size: 1rem;
                    color: #34495e;
                    border-bottom: 1px solid #f0f0f0;
                    transition: all 0.2s ease;
                }

                .dropdown-item:last-child {
                    border-bottom: none;
                }

                .dropdown-item:hover {
                    background-color: #e8f4f8;
                    color: #2980b9;
                    padding-left: 25px;
                }
            `}</style>
        </>
    );
};

export default Conditions;
