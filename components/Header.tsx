import Nav from './Nav'

export default function Header() {
 return (
  <header className='pb-10 md:pb-10 bg-neutral-100 cols-start-1 col-span-3 grid grid-cols-layxs sm:grid-cols-laysm md:grid-cols-laymd lg:grid-cols-laylg xl:grid-cols-layxl'>
   <Nav />
   <div className='gap-5 lg:gap-10 col-start-2 col-end-3 grid grid-cols-1 md:grid-cols-2'>
    <div className='place-self-center'>
     <h1 className='text-prim md:text-left tracking-wide text-4xl md:text-5xl uppercase text-center mt-2 mb-7 md:mt-5 md:mb-10 xl:text-7xl lg:mt-8 lg:mb-12'>
      guest shop
     </h1>
     <p className='text-center md:text-left md:pr-5 lg:pr-10 leading-relaxed'>
      To use any template, click into the post and select Clone Product to copy
      the post to your own portal. Then, edit the text, price and photos of your
      new post to add your custom details and personal flavor.
     </p>
    </div>
    <div>
     {/* eslint-disable-next-line @next/next/no-img-element */}
     <img
      src='https://images.unsplash.com/photo-1556741533-f6acd6474059?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
      alt='unsplash image'
     />
    </div>
   </div>
  </header>
 )
}
