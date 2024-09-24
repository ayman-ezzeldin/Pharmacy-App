import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"
import { Button } from "../ui/button"

const UserCartWrapper = () => {
  return (
    <SheetContent className=" bg-white sm:max-w-md" >
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span className=" font-bold">Total</span>
            <span className=" font-bold">$ 1000</span>
          </div>
        </div>
      </div>
      <Button className="w-full mt-6 bg-black text-white text-lg rounded-xl"> Checkout </Button>
    </SheetContent>
  )
}

export default UserCartWrapper