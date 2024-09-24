import { brandOptionsMap, categoryOptionsMap } from '../../config'
import { Button } from '../ui/button'
import { Dialog, DialogContent } from '../ui/dialog'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { StarIcon } from 'lucide-react'
const ProductDetailsDialog = ({ open , setOpen, productDetails}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className=' grid grid-cols-2 bg-white gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] ' >
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className=' w-full object-cover aspect-square rounded-xl '
            />
        </div>
        <div className="">
          <div>
            <h1 className=' text-3xl font-extrabold'>{productDetails?.title}</h1>
            <p className=' text-muted-foreground text-2xl mb-5 mt-4'>{productDetails?.description}</p>
          </div>
          {/* <div className="flex justify-between items-center mb-2 ">
            <span className="text-sm text-muted-foreground"> {categoryOptionsMap[productDetails?.category]}</span>
            <span className="text-sm text-muted-foreground"> {brandOptionsMap[productDetails?.brand]}</span>
          </div> */}
          <div className="flex justify-between items-center mb-2 ">
            <span className={` ${ productDetails?.salePrice > 0 ? "line-through" : "" } text-2xl text-muted-foreground font-bold`}> $ {productDetails?.price}</span>
            {productDetails?.salePrice > 0 ? (
              <span className="text-2xl text-muted-foreground font-bold">$ {productDetails?.salePrice}</span>
            ) : null}
          </div>
          <div className=' my-5'>
          <Button variant="outline" className="w-full bg-black hover:bg-black/90 text-white hover:text-white/80 text-xl rounded-xl " >Add to cart</Button>
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetailsDialog