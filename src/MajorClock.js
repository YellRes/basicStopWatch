import React from 'react'

const MajorClock = ({milliseconds=0}) => {
    return <h1>{ms2Time(milliseconds)}</h1>
}

export default MajorClock