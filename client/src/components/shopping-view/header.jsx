import { Link } from "react-router-dom"
import { HousePlug, Menu } from 'lucide-react'
import { Sheet, SheetTrigger } from "../ui/sheet"
import {Button} from '../ui/button'
const ShoppingHeader = () => {
  return (
    <header className=" sticky top-0 z-40 border-b bg-background" >
      <div className=" flex h-16 items-center justify-between px-4 md:px-6" >
        <Link to='/shop/home' className=" flex gap-2 items-center" >
          <HousePlug className="h-6 w-6" />
          <span className="font-bold" >E-commerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button varient="outline" size='icon' className="lg:hidden">
            <Menu />
            <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
        </Sheet>
      </div>
    </header>
  )
}

export default ShoppingHeader