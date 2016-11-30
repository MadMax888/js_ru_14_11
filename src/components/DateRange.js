import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { dateToggle } from '../AC/dayRange'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    // state = {
    //     from: null,
    //     to: null
    // }

    handleDayClick = (e, day) => {
        const { dateToggle, from, to } = this.props
        // this.setState(DateUtils.addDayToRange(day, this.state))
        dateToggle(DateUtils.addDayToRange(day, this.props))
    }

    render() {
        // const { from, to } = this.state;
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.props) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
   from : state.date.from
  ,to : state.date.to
}),
{
  dateToggle
})(DateRange)
