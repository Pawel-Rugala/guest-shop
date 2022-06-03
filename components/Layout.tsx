import type { Product } from '../types'
import ProductContext from '../hooks/ProductContext'
import Footer from './Footer'
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
 const [products, setProducts] = useState([] as Product[])
 return (
  <ProductContext.Provider value={{ products, setProducts }}>
   <div className='grid grid-cols-layxs sm:grid-cols-laysm md:grid-cols-laymd lg:grid-cols-laylg xl:grid-cols-layxl'>
    <>{children}</>
    <Footer />
   </div>
  </ProductContext.Provider>
 )
}
