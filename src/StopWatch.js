import React, { Fragment } from 'react'
import MajorClock from './MajorClock'
import ControlButton from './ControlButton'
import SplitTimes from './SplitTimes'

class StopWatch extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            isStarted: false,
            startTime: null,
            currentTime: null,
            splits: []
        }
    }

    onSplit = () => {
        this.setState({
            splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
        })
    }
    render () {
        return (
            <Fragment>
                <MajorClock/>
                <ControlButton/>
                <SplitTimes/>
            </Fragment>
        )
    }
}