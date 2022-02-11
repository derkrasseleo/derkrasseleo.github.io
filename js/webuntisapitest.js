const WebUntis = require('webuntis');

const untis = new WebUntis('htbla_kaindorf', 'traley17', 't&BpMsJd6q#p', 'mese.webuntis.com');

//let endTime;
let day = new Date(2022, 0, 12);

function getSchuleAus(day) {

untis
    .login()
    .then(() => {
        return untis.getOwnTimetableForRange(day, day);
    })
    .then((timetable) => {
        timetable.sort((a, b) => a.startTime - b.startTime);
        let endTime = WebUntis.convertUntisTime(timetable[timetable.length - 1].endTime, new Date());
        console.log(endTime);
    });

}
getSchuleAus(day);