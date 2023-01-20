import Brand from './Brand'
import { Menu } from './Menu'
import CartWidget from '../CartWidget'
export const Navbar = () => {
  return (
    <div className='w-full bg-yellow-100'>
      <div className="container mx-auto flex items-center justify-around">
        <Brand />
        <Menu />
        <CartWidget />
      </div>
    </div>
  )
}
