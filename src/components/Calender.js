import * as React from 'react';
import { Day, Week, WorkWeek, TimelineViews, ScheduleComponent, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
         this.data = [{
                Id: 1,
                Subject: 'mohamed',
                StartTime: new Date(2020, 1, 15, 9, 30),
                EndTime: new Date(2018, 1, 15, 11, 0)
            }, {
                Id: 2,
                Subject: 'ali',
                StartTime: new Date(2018, 1, 12, 12, 0),
                EndTime: new Date(2018, 1, 12, 14, 0)
            }, {
                Id: 3,
                Subject: 'ines',
                StartTime: new Date(2018, 1, 13, 9, 30),
                EndTime: new Date(2018, 1, 13, 11, 0)
            }, {
                Id: 4,
                Subject: 'salem',
                StartTime: new Date(2018, 1, 14, 13, 0),
                EndTime: new Date(2018, 1, 14, 14, 30)
            }];
    }
    render() {
        return <ScheduleComponent width='700' height='500px' ref={schedule => this.scheduleObj = schedule} selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.data }} timeScale={{ enable: true, interval: 60, slotCount: 6 }}>
            <ViewsDirective>
                <ViewDirective option='Day'/>
                <ViewDirective option='Week'/>
                <ViewDirective option='WorkWeek'/>
                <ViewDirective option='TimelineDay'/>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, TimelineViews]}/>
            </ScheduleComponent>;
    }
}
