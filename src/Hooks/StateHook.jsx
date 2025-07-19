import React, { useState } from 'react'

const StateHook = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('ali')
    const handleIncrement = () => {
        if (count >= 5) {
            setCount(count + 5)
        } else {
            setCount(count + 1)
        }
    }
    const handleDecrement = () => {
        if (count <= 0) {
            alert("You reach the minimum value")
            return
        } else {
            setCount(count - 1)
        }
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Use State Hook</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

            <h1>{name}</h1>
            <li onClick={() => setName('Ali')}>Ali</li>
            <li onClick={() => setName('Adnan')}>Adnan</li>
            <li onClick={() => setName('Amir')}>Amir</li>
            <li onClick={() => setName('Aqib')}>Aqib</li>
            <li onClick={() => setName('Imran')}>Imran</li>
        </div>
    )
}

export default StateHook
