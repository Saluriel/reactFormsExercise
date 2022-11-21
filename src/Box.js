import React from 'react';

const Box = ({ height, width, backgroundColor, id, removeBox }) => {
    const remove = () => removeBox(id)
    return (
        <div>
            <div style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
            }} >
                <button onClick={remove}>X</button>
            </ div >

        </div >
    )
}


export default Box;