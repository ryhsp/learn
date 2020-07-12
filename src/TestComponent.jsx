import React, {useState}  from 'react';
import Greeting from './Greeting';

const TestComponent = () => {

    const [name, setName] = useState(null);
    return (
        <div>
            Hello, {name ? name : "Stranger"}
            <br/>
        <input id="input-id"></input>
        <button onClick={() =>{
            const formValue = document.getElementById("input-id").value;
            console.log(formValue)

        setName(formValue)
        }}>submit </button>
        <Greeting name={name} />
        </div>
    )

}

export default TestComponent;