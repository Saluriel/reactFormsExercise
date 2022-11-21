import React, { useState } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {
    const INITIAL_STATE = [
        {
            height: '12', width: '12', backgroundColor: 'red'
        }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (width, height, backgroundColor) => {
        setBoxes(boxes => [...boxes, { width, height, backgroundColor, id: uuid() }])
    }

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div>
            <h3>BOXES</h3>
            <NewBoxForm addBox={addBox} />
            <div>{boxes.map(({ height, width, backgroundColor, id }) => <Box height={height} width={width} backgroundColor={backgroundColor} removeBox={removeBox} id={id} />)}</div>
        </div>
    )
}

export default BoxList;