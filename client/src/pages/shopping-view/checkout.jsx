import { useSelector } from 'react-redux'
import img from '../../assets/account.jpg'
import Address from '../../components/shopping-view/address'
import UserCartItemContent from '../../components/shopping-view/cart-items-content'
import { Button } from '../../components/ui/button'
import { useState } from 'react'
const ShoppingCheckOut = () => {

  const { cartItems } = useSelector(state => state.shopCart)
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null)

  console.log(currentSelectedAddress);
  
  const totalCartAmount =
        cartItems && cartItems.items && cartItems.items.length > 0
        ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem.salePrice > 0
              ? currentItem.salePrice
              : currentItem.price) *
              currentItem.quantity,
          0
        )
      : 0;


  return (
    <div className=" flex flex-col" >
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} alt="chekout"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 p-5">
        <Address setCurrentSelectedAddress={setCurrentSelectedAddress} />
        <div className="flex flex-col gap-4">
          {
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items.map(item => <UserCartItemContent key={item._id} cartItem={item} />)
              : <p>Cart is empty</p>
          }
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className=" font-bold">Total</span>
              <span className=" font-bold">$ {totalCartAmount}</span>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Button className="w-full bg-black text-white hover:bg-black hover:text-white rounded-xl text-lg">Checkout with Paypal </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCheckOut