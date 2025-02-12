import React , {useState} from 'react'
function StudentState() {
    // const [state, setState] = useState(initialState)
    const [count, setCount] = useState(20);

    function doIncrement()
    {
        setCount(count+20);
    }
    function doDecrement()
    {
        setCount(count-10);
    }

    return (
        <div>
            StudentState
            <h2>Counter: {count}</h2>
            <div>
                <button id='btn' onClick={doIncrement}>Increment</button>
                <button id='btn' onClick={doDecrement}>Decrement</button>
            </div>
        </div>
    )
}
export default StudentState