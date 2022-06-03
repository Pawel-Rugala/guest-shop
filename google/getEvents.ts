import { calendar_v3, google } from 'googleapis'

const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const SCOPES = [
 'https://www.googleapis.com/auth/calendar',
 'https://www.googleapis.com/auth/calendar.events',
]

const getEvents = (calendarId: string) => {
 return new Promise((resolve, rejects) => {
  calendar.events.list(
   {
    calendarId: calendarId,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
   },
   (err, res) => {
    if (err) {
     return rejects(err)
    }
    if (res?.data.items !== undefined && res.data.items.length) {
     resolve(res.data.items)
    } else {
     resolve('No upcoming events found.')
    }
   }
  )
 })
}

const jwtClient = new google.auth.JWT(
 GOOGLE_CLIENT_EMAIL,
 undefined,
 GOOGLE_PRIVATE_KEY,
 SCOPES
)

const calendar = google.calendar({
 version: 'v3',
 auth: jwtClient,
})

export default getEvents
