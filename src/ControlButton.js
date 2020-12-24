import React from 'react'

const ControlButtons = (props) => {
    const {
        activated, 
        onStart, 
        onPause, 
        onReset, 
        onSplit
    } = props

    if (activated) {
        return (
            <div>
                <button onClick={onSplit}>计次</button>
                <button onClick={onStop}>停止</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={onReset}>复位</button>
                <button onClick={onStart}>启动</button>
            </div>
        )
    }

}

export default ControlButtons