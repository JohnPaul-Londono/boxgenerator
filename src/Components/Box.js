import React, { useState } from "react";


const Box= (props) => {
    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState('');


    // const boxStyle = {
    //     backgroundColor: colors.color,
    //     height: 100,
    //     width: 100

    // }

    const colorHandler = event => {
        setColor(event.target.value);
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log("submitted")
        const newColor = {
            color: color,
        };

        setBoxes([...boxes, newColor]);
        setColor('');
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="color"> Color: </label>
                    <input type="text" name="color" onChange={colorHandler} />
                    <input type="submit" value="Add" ></input>
                </div>
            </form>
            <div style={{display: "flex"}}>
                {
                    boxes.map(( colors, i) => {
                        return (
                            <div key={i}  style={{backgroundColor: colors.color, height: 100, width:100, border: " 2px solid black", margin: "5px"}} />
                        )
                    })
                }
            </div>
        </div>
    )
}





export default Box;

