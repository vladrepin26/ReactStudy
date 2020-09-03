import React from "react";

// function car() {
//     return (
//         <div>This is car component</div>
//     )
// }
// const car = () => {
//     return (
//         <div>This is car component</div>
//     )
// }
// const car = () => (
//     <div>
//         This is car component
//         <strong>test</strong>
//     </div>
// )


export default (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>YEAR: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        {/*<button onClick={props.onChangeTitle}>Click</button>*/}
    </div>
)