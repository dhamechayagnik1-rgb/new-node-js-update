import React from 'react'
import './econd.css'

export default class Secondpage extends React.Component {
    constructor() {
        super()
        this.state = {
            date: [
                {
                    day: "Tue",
                    Date: 15,
                    click:false
                },
                {
                    day: "Wed",
                    Date: 16,
                    click:false
                }
                ,
                {
                    day: "Thu",
                    Date: 17,
                    click:false
                }
                ,
                {
                    day: "Fri",
                    Date: 18,
                    click:false
                }
                ,
                {
                    day: "Sat",
                    Date: 19,
                    click:false
                }
                ,
                {
                    day: "Sun",
                    Date: 20,
                    click:false
                }
            ],
            Time:[
                {time: "9:00AM",
                 click1: false
                },
                {time: "10:00AM",
                 click1: false
                },
                {time: "11:00AM",
                 click1: false
                },
                {time: "9:00AM",
                 click1: false
                },
                {time: "9:00AM",
                 click1: false
                },
                {time: "9:00AM",
                 click1: false
                },
                {time: "9:00AM",
                 click1: false
                },
                {time: "9:00AM",
                 click1: false
                },
                
            ]
        }
    }


handleToggleFav = (selectedDate) => {

    const date = this.state.date.map(item => ({
        ...item,
        click: item === selectedDate
    }));

    this.setState({
        date: date
    });
}
handleToggleTime = (selectedTime) => {

    const time = this.state.Time.map(item => ({
        ...item,
        click1: item === selectedTime
    }));

    this.setState({
        Time: time
    });
}


    



    render() {
        
        
        const { date,Time, } = this.state
       
        
        return (
            <>
                <section class="booking-section">

                    <div class="booking-group">
                        <h2>Pick a date</h2>

                        <div class="date-grid">
                            {date.map((date, index) => (
                                <button class={date.click?"date-card active":"date-card"} onClick={() => this.handleToggleFav(date)}>
                                    <span>{date.day}</span>
                                    <strong>{date.Date}</strong>
                                </button>
                            ))}
                        </div>
                    </div>


                    <div class="booking-group time-group">
                        <h2>Pick a time</h2>

                        <div class="time-grid">

                            {Time.map((time,index) => (<button class={time.click1?"time-card active":"time-card"} onClick={() => this.handleToggleTime(time)} >{time.time}</button>))}
                            
                           
                        </div>
                    </div>


                    <div class="booking-actions">

                        <button class="back-btn">
                            Back
                        </button>

                        <button class="continue-btn">
                            Continue to Details
                        </button>

                    </div>

                </section>
            </>
        )
    }
}