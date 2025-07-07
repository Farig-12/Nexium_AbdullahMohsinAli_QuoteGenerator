import {Quote} from 'lucide-react'

const NavBar = () => {
  return (
    <div className='bg-gradient-to-r from-purple-800  to-amber-800  h-[4rem] flex space-x-1 p-3'>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-[40px] h-[40px] p-2'>
            <Quote className='text-white w-6 h-6'/>
        </div>
        <span className='text-3xl text-white font-sans font-bold'>InspireIt</span>
    </div>
  )
}

export default NavBar