import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Calendar(){
    const handleDateClick = (e) => { 
        console.log(e.dateStr)
      }
    const handleEventClick = (e)=>{
        console.log(e.event.startStr)
      }
    return(
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin,timeGridPlugin ]}
          dateClick= {handleDateClick}
          eventClick = {handleEventClick}
          initialView="timeGridWeek"
          slotDuration="00:15:00"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek"
          }}
          weekends={false}
          businessHours={{
              startTime: '7:00',
              endTime:   '19:00',
              daysOfWeek: [ 1, 2, 3, 4, 5]
            }}
          timeZone="UTC"
          events={[
            { title: 'event 1', start: '2022-06-07',backgroundColor : "#3EC70B", borderColor: "#3EC70B" },
            { title: 'event 2', start: '2022-06-08',my_custom_prop :"blablba" },
            { title: 'event 3', start: '2022-06-08' },
            { title: 'event 4', start: '2022-06-10' },
            {"title":"Conference","start":"2022-06-26","end":"2022-06-28"},
            {"title":"Meeting","start":"2022-06-27T10:30:00+00:00","end":"2022-06-27T12:30:00+00:00"},
            {"title":"Lunch","start":"2022-06-27T13:00:00+00:00","end":"2022-06-27T14:30:00+00:00"},
            {"title":"Birthday Party","start":"2022-06-28T07:00:00+00:00"},
            {"url":"https://www.google.com.mx/","title":"Click for Google","start":"2022-06-28"},
            {"title":"Lunch","start":"2022-06-28T13:00:00+00:00","end":"2022-06-28T13:15:00+00:00","backgroundColor" : "#3EC70B", "borderColor": "#3EC70B"}
          ]}
          eventContent= {renderEventContent}
       
      />
    )
}

function renderEventContent(eventInfo) {
    
    return (
      <div>
        <span>Cita </span>
        <b>{eventInfo.event.startStr} </b>
        <i>  {eventInfo.event.title}</i>
        <i>  {eventInfo.event.extendedProps.my_custom_prop}</i>
      </div>
    )
  }