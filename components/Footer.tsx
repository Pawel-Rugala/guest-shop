import logo_wh from '../public/logo_wh.png'
import Image from 'next/image'

const data = [
 {
  title: 'Company',
  list: ['About Us', 'Hvaraway', 'Our Services'],
 },
 {
  title: 'Product',
  list: ['Explore', 'Lorem ipsum', 'FAQ'],
 },
 {
  title: 'Support',
  list: ['Contact Us', 'T&Cs', 'Login'],
 },
]

export default function Footer() {
 return (
  <footer className='col-start-1 col-end-4 grid grid-cols-layxs sm:grid-cols-laysm md:grid-cols-laymd lg:grid-cols-laylg xl:grid-cols-layxl bg-dark text-white'>
   <div className='col-start-2 col-end-3 py-5 grid grid-cols-1 lg:grid-cols-2'>
    <div className='w-1/4 place-self-center lg:place-self-start'>
     <Image src={logo_wh} alt='logo' />
    </div>
    <div className='grid grid-cols-1 gap-7 text-center py-5 md:grid-cols-3 md:gap-14 md:text-left'>
     {data.map((ele, ind) => {
      return (
       <div key={ind}>
        <h3 className='font-bold text-lg mb-1'>{ele.title}</h3>
        <ul>
         {ele.list.map((ele, ind) => {
          return <li key={ind}>{ele}</li>
         })}
        </ul>
       </div>
      )
     })}
    </div>
   </div>
  </footer>
 )
}
