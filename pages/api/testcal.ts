// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { calendar_v3, google } from 'googleapis'

const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_PROJECT_NUMBER = process.env.GOOGLE_PROJECT_NO
const SCOPES = [
 'https://www.googleapis.com/auth/calendar',
 'https://www.googleapis.com/auth/calendar.events',
]

const getEvents = (calendar: calendar_v3.Calendar, calendarId: string) => {
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

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
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

 try {
  const events = await getEvents(
   calendar,
   'ki79ohmm1na357hpah673g4qpo@group.calendar.google.com'
  )
  res.status(200).json(events)
 } catch (error) {
  //@ts-ignore
  res.status(500).json({ error: error.message })
 }
}
