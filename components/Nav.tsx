import MenuDrop from './Menu'
import { FiShoppingCart } from 'react-icons/fi'
import LogoLong from '../public/logo_long.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
 return (
  <nav className='flex justify-between items-center col-start-2 col-end-3 my-5'>
   <div className='w-60'>
    <Link href='/' className=''>
     <Image src={LogoLong} alt='Hvaraway Logo' className='cursor-pointer' />
    </Link>
   </div>
   <ul className='flex items-center'>
    <li className='flex flex-col items-center text-slate-500'>
     <button>
      <FiShoppingCart className='text-2xl' />
     </button>
    </li>
    <li className='ml-5'>
     <MenuDrop />
    </li>
   </ul>
  </nav>
 )
}
