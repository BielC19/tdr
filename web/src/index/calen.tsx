import React from "react";

import moment from "moment";

import { Calendar, Views, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/addons/dragAndDrop/styles.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

function toHour(date) {
return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

class Dnd extends React.Component {
constructor(props) {
    super(props);
    function randomDates() {
    const d = new Date();
    d.setHours(Math.floor(Math.random() * 100) % 24);
    const e = new Date();
    e.setHours(d.getHours() + Math.round(Math.random()));
    return { start: d, end: e };
    }
    const sameTime = {
    id: 5,
    title: "Conference",
    ...randomDates(),
    desc: "Big conference for important people"
    };
    this.state = {
    events: [
        {
        id: 1,
        title: "All Day Event very long title",
        ...randomDates()
        },
        { ...sameTime },
        { ...sameTime }
    ]
    };
}

render() {
    return (
    <Calendar
        localizer={localizer}
        events={this.state.events}
        view={Views.DAY}
        components={{
        day: {
            event: (x) => {
            const diffMinutes = moment(x.event.end).diff(
                x.event.start,
                "minutes"
            );
            const shouldDisplayLongVersion = diffMinutes >= 45;
            return (
                <div className={shouldDisplayLongVersion ? "long" : "short"}>
                {shouldDisplayLongVersion ? (
                    <>
                    <span className="event-title">{x.event.title}</span>
                    <br />
                    <span className="event-hours">
                        {toHour(x.event.start)}-{toHour(x.event.end)}
                    </span>
                    </>
                ) : (
                    <>
                    <span className="event-title">{x.event.title}</span>,{" "}
                    <span className="event-hours">
                        {toHour(x.event.start)}
                    </span>
                    </>
                )}
                </div>
            );
            }
        }
        }}
        toolbar={false}
        defaultDate={new Date()}
    />
    );
}
}