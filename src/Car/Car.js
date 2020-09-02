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


export default () => (
    <div>
        <p>This is car component</p>
        <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
    </div>
)