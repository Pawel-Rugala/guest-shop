import React from 'react'
import type { Product } from '../types'

interface ProductContextProps {
 products: Product[]
 setProducts: (products: Product[]) => void
}

const ProductContext = React.createContext<ProductContextProps>(
 {} as ProductContextProps
)

export default ProductContext
