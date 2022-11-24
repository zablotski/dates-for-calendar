# dates-for-calendar
Set of Date tools for calendar implementations

## Available methods: 

`getDatesRange: (startDate: string | number | Date, endDate: string | number | Date) => Date[]` 

returns array of dates between startDate and endDate

`getFirstDayOfWeek: (date: Date, firstDayOfWeek?: number) => Date`

returns first day of week, Monday is the first day of week by default

`getLastDayOfWeek: (date: Date, firstDayOfWeek?: number) => Date`

returns last day of week, Monday is the first day of week by default

`getCalendarDates: (year: number, month: number) => Date[] // 0 is January` 

returns array of days for month calendar view (matrix)