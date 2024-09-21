import { Link } from "react-router-dom"
import { HousePlug, Menu, ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import {Button} from '../ui/button'
import { useSelector } from 'react-redux'
import { shoppingViewHeaderMenuItems } from "../../config"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'

const MenuItems = () => {
  return (
    <nav className=" flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row" >
      {
        shoppingViewHeaderMenuItems.map(menuItem =>
          <Link key={menuItem.id} to={menuItem.path} className=" text-sm font-medium" > {menuItem.label} </Link>
        )
      }
    </nav>
  )
}

export const HeaderRightContent = () => {
  const {user} = useSelector(state => state.auth)
  return (
    <div className="flex lg:items-center lg:flex-row flex-row gap-4" >
      <Button varient="outline" size='icon' >
        <ShoppingCart className="h-6 w-6" />
        <span className="sr-only">User Cart</span>
      </Button>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Avatar className=" bg-black cursor-pointer" >
            <AvatarFallback className=" bg-black text-white font-extrabold" >
              {user?.username?.slice(0,2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" className=" w-56 bg-white" >
          <DropdownMenuLabel>Logged in</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const ShoppingHeader = () => {

  const {isAuthenticated, user} = useSelector((state)=> state.auth)
  console.log(isAuthenticated,user);
  
  return (
    <header className=" sticky top-0 z-40 border-b bg-background" >
      <div className=" flex h-16 items-center justify-between px-4 md:px-6" >
        <Link to='/shop/home' className=" flex gap-2 items-center" >
          <HousePlug className="h-6 w-6" />
          <span className="font-bold" >E-commerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild >
            <Button varient="outline" size='icon' className="lg:hidden">
            <Menu />
            <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className="w-full max-w-xs bg-white" >
            <MenuItems />
          </SheetContent>
        </Sheet>
        <div className=" hidden lg:block" >
          <MenuItems />
        </div>
        { isAuthenticated ? <div>
          <HeaderRightContent />
        </div> : null }
      </div>
    </header>
  )
}

export default ShoppingHeader