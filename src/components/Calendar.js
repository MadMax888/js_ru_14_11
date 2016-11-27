import React, {Component, PropTypes} from "react"
import moment from 'moment'
import DayPicker, { DateUtils } from "react-day-picker"
import "react-day-picker/lib/style.css"


class Calendar extends Component {

  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

	static propTypes = {
     range : PropTypes.object.isRequired
    ,from : PropTypes.string.isRequired
    ,to : PropTypes.string.isRequired
  }

  static defaultProps = {
     range : {}
    ,from : ""
    ,to : ""
  }

  state = {
    from: null,
    to: null,
  };

	componentDidMount() {
			//draw d3 chart into this.refs.container
	}

	componentWillReceiveProps(nexProps) {
			//updateChart
	}

	componentWillUnmount() {
			//kill chart
	}

  handleDayClick(e, day) {
    const range = DateUtils.addDayToRange(day, this.state);
    console.log(range)
    this.setState(range);
  }
  handleResetClick(e) {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }
  setRangeDate(from, to) {
    return (
      <div>
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p>
            You chose from { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
          </p>
        }
      </div>
    )
  }

  render() {
    const { from, to } = this.state;
    return (
      <div className="RangeExample" ref="Calendar">
        {this.setRangeDate(from, to)}
        <DayPicker
          ref="daypicker"
          numberOfMonths={ 1 }
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
          onDayClick={ this.handleDayClick }
        />
      </div>
    );
  }


}

export default Calendar
