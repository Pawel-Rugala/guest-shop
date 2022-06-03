import { Menu, Transition } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import { Fragment } from 'react'
import { CgMenu } from 'react-icons/cg'

const Items = ['Home', 'About', 'Contact', 'Homeowner sites']

export default function MenuDrop() {
 return (
  <Menu>
   {({ open }: { open: boolean }) => (
    <>
     <Menu.Button className='relative outline-none'>
      {open ? (
       <IoClose className='text-3xl' />
      ) : (
       <CgMenu className='text-3xl' />
      )}
     </Menu.Button>
     <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'>
      <Menu.Items className='flex flex-col absolute top-14 right-3  md:right-10 lg:right-10 xl:right-10 2xl:right-64 mt-2 mr-5 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none outline-none"'>
       {Items.map((item, index) => (
        <Menu.Item key={index}>
         {({ active }: { active: boolean }) => (
          <a
           className={` ${
            active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
           }  p-5 text-lg`}
           href='/account-settings'>
           {item}
          </a>
         )}
        </Menu.Item>
       ))}
      </Menu.Items>
     </Transition>
    </>
   )}
  </Menu>
 )
}
