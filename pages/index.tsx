//#region IMPORTS
import { GraphQLClient, gql } from 'graphql-request'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Tiles from '../components/Tiles'
import ProductContext from '../hooks/ProductContext'
import type { Product } from '../types'
const client = new GraphQLClient(process.env.GRAPHCMS as string)
//#endregion

export const getStaticProps = async () => {
 const query = gql`
  query Produtcs {
   products {
    id
    productName
    slug
    categoryName
    price
    priceId
    per
    featuredPicks
    productImages {
     url
    }
    connectedAccount
    applicationFee
   }
  }
 `
 const { products } = await client.request(query)
 return { props: { data: products } }
}

function groupByKey(array: any[], key: string) {
 return array.reduce((rv: any, x: any) => {
  ;(rv[x[key]] = rv[x[key]] || []).push(x)
  return rv
 }, {})
}

const Home = ({ data }: { data: Product[] }) => {
 const { products, setProducts } = useContext(ProductContext)
 const cat = groupByKey(data, 'categoryName')
 //@ts-ignore
 const featered = groupByKey(data, 'featuredPicks')[true]
 useEffect(() => {
  setProducts(data)
 }, [data, setProducts])

 return (
  <>
   <Header />
   <div className='col-start-2 col-end-3 pb-10'>
    {/* <>
     <Tiles title='Featured' items={featered} />
    </> */}
    <>
     {Object.keys(cat).map((key) => {
      return <Tiles key={key} title={key} items={cat[key]} />
     })}
    </>
   </div>
  </>
 )
}

export default Home
