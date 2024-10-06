import { Button } from '../ui/button'
import { Dialog, DialogContent } from '../ui/dialog'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { StarIcon } from 'lucide-react'
import { Input } from '../ui/input' 
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '../../hooks/use-toast'
import { addToCart, fetchCartItems } from '../../store/shop/cart-slice'
import { setProductDetails } from '../../store/shop/products-slice'
import { Label } from '../ui/label'
import StarRatingComponent from './star-rating'
import { useState } from 'react'
import { addReview } from '../../store/shop/review-slice'
const ProductDetailsDialog = ({ open , setOpen, productDetails}) => {

  const [reviewMsg , setReviewMsg] = useState('')
  const [rating , setRating] = useState(0)
  const dispatch = useDispatch()
  const { toast } = useToast()
  const { user } = useSelector(state => state.auth)
  const { cartItems } = useSelector(state => state.shopCart)

  function handleRatingChange(getRating) {
    setRating(getRating)
  }

  function handleAddToCart(getCurrentProductId,getTotalStock) {

    let getCartItems = cartItems.items || [] ;

    if (getCartItems.length) {
      const indexOfCurrentCartItem = getCartItems.findIndex(item => item.productId === getCurrentProductId);
      if (indexOfCurrentCartItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;
        console.log(getQuantity);
        
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });

          return; 
        }
      }
    }
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then(data => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: 'Cart item added successfully'
        })
      }
    }
    )
  }

  function handleDialogClose() {
    setOpen(false)
    dispatch(setProductDetails())
  }

  function handleAddReview() {
    dispatch(addReview({
      productId: productDetails._id,
      userId: user?.id,
      userName: user?.username,
      reviewMessage: reviewMsg,
      reviewValue: rating,
    })).then(data => {
      console.log(data);
      
    })
  }
  return (
    <Dialog open={open} onOpenChange={handleDialogClose} >
      <DialogContent className=' grid md:grid-cols-2 bg-white gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] ' >
        <div className="relative overflow-hidden ">
          <img 
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className=' w-full object-cover aspect-square rounded-xl '
            />
        </div>
        <div>
          <div>
            <h1 className=' text-3xl font-extrabold'>{productDetails?.title}</h1>
            <p className=' text-muted-foreground text-2xl mb-5 mt-4'>{productDetails?.description}</p>
          </div>
          <div className="flex justify-between items-center mb-2 ">
            <span className={` ${ productDetails?.salePrice > 0 ? "line-through" : "" } text-2xl text-muted-foreground font-bold`}> $ {productDetails?.price}</span>
            {productDetails?.salePrice > 0 ? (
              <span className="text-2xl text-muted-foreground font-bold">$ {productDetails?.salePrice}</span>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            </div>
            <span className=' text-muted-foreground' >(5.0)</span>
          </div>
          <div className=' my-5'>
          {
            productDetails?.totalStock === 0 ? 
              <Button className=" w-full opacity-60 cursor-not-allowed" > Out of Stock </Button>
            :
          <Button onClick={() => handleAddToCart(productDetails?._id, productDetails?.totalStock )} variant="outline" className="w-full bg-black hover:bg-black/90 text-white hover:text-white/80 text-md md:text-lg rounded-xl " >Add to cart</Button>
          }
          </div>
          <Separator />
          <div className=' max-h-[300px] overflow-auto' >
            <h2 className=' text-xl font-bold mb-4' >Reviews</h2>
            <div className=' grid gap-4'>
              <div className="flex gap-4">
                <Avatar className='w-10 h-10 border bg-black text-white'>
                  <AvatarFallback>Ay</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Ayman ezz</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  </div>
                  <p  className=' text-muted-foreground' >This is an awesome product</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="flex flex-col mt-10 gap-2">
              <Label>Write a review</Label>
              <div className="flex">
                <StarRatingComponent rating={rating} handleRatingChange={handleRatingChange} />
              </div>
              <Input className=' w-full rounded-xl' placeholder="Add a review"
                name='reviewMsg' value={reviewMsg} onChange={(e) => setReviewMsg(e.target.value)}
              />
              <Button variant="outline" 
                onClick={handleAddReview}
                disabled={reviewMsg.trim() === ""}
                className=" bg-black hover:bg-black/90 text-white hover:text-white/80 text-lg rounded-xl " >Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetailsDialog