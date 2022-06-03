import { GraphQLClient, gql } from 'graphql-request'
import { Product } from '../../types'

const client = new GraphQLClient(process.env.GRAPHCMS as string)

interface Slug {
 slug: string
}

export const getStaticPaths = async () => {
 const query = gql`
  query Paths {
   products {
    slug
   }
  }
 `
 const { products } = await client.request(query)

 return {
  paths: products.map((product: Slug) => ({ params: { slug: product.slug } })),
  fallback: 'blocking',
 }
}

export const getStaticProps = async ({
 params,
}: {
 params: { slug: string }
}) => {
 const slug = params.slug
 const query = gql`
  query Product($slug: String!) {
   product(where: { slug: $slug }) {
    productName
    productImages {
     url
    }
    per
    price
    priceId
    productDescription
   }
  }
 `
 const { product } = await client.request(query, { slug: params.slug })

 return { props: { product } }
}

export default function ProductPage({ product }: { product: Product }) {
 return (
  <div>
   <h1>Hello from graphCMS product page</h1>
   <div>
    <h2>{product.productName}</h2>
    <p>{product.per}</p>
    <p>{product.price}</p>
   </div>
  </div>
 )
}
