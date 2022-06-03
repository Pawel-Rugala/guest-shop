import Link from 'next/link'
import type { Props, Item, Tiles, Product } from '../types'
import Image from 'next/image'

const Grid = ({ children }: Props) => {
 return (
  <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
   {children}
  </div>
 )
}

const CatName = ({ children }: Props) => {
 return <h2 className='text-2xl text-prim mb-3 mt-8'>{children}</h2>
}

const Product = ({ item }: { item: Product }) => {
 return (
  <div className='text-center md:text-left'>
   <Link href={`/product/${item.slug}`} className=''>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
     src={item.productImages[0].url}
     className='shadow-sm cursor-pointer'
     alt={`image of ${item.productName}`}
    />
   </Link>
   <Link href={`/product/${item.id}`} className=''>
    <h3 className='text-xl cursor-pointer'>{item.productName}</h3>
   </Link>
   <p className='text-prim'>
    ${item.price} per {item.per}
   </p>
  </div>
 )
}

export default function Tiles({ title, items }: Tiles) {
 return (
  <div>
   <CatName>
    <Link href={`/category/${title}`}>{title}</Link>
   </CatName>

   <Grid>
    {items.map((item) => {
     return <Product key={item.id} item={item} />
    })}
   </Grid>
  </div>
 )
}
