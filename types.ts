import { ReactNode } from 'react'
import { calendar_v3 } from 'googleapis'

export interface Product {
 id: string
 productName: string
 slug: string
 categoryName: string
 price: number
 priceId: string
 per: string
 productImages: ImgUrl[]
 connectedAccount: string
 applicationFee: number
}

export interface ImgUrl {
 url: string
}

export interface Item {
 id: number
 productName: string
 price: number
 img: string
 category: string
 featured: boolean
 per: string
 description: string
 calendarId?: string
 applicationFee?: number
 connectedAccount?: string
 calendar?: calendar_v3.Schema$CalendarListEntry
}

export interface Group {
 [key: string]: Item[]
}

export type Props = {
 children: ReactNode
}

export interface Tiles {
 title: string
 items: Product[]
}
