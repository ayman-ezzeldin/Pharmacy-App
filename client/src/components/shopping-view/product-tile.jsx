import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from '../ui/badge'
import { brandOptionsMap, categoryOptionsMap } from "../../config";
import { Button } from "../ui/button";

const ShoppingProductTile = ({ product, handleGetProductDetails }) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div onClick={() => handleGetProductDetails(product?._id)} >
        <div className="relative overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          {
            product?.salePrice > 0 ? (
              <Badge className="absolute top-5 -rotate-45 -left-10 tracking-wider text-lg font-semibold flex justify-center w-36 text-white bg-green-500 hover:bg-green-600 " >Sale</Badge>
            ) : null
          }
        </div>
        <CardContent className="p-4" >
          <h2 className=" text-xl font-bold mb-2" >{product?.title}</h2>
          <div className="flex justify-between items-center mb-2 ">
            <span className="text-sm text-muted-foreground"> {categoryOptionsMap[product?.category]}</span>
            <span className="text-sm text-muted-foreground"> {brandOptionsMap[product?.brand]}</span>
          </div>
          <div className="flex justify-between items-center mb-2 ">
            <span className={` ${ product?.salePrice > 0 ? "line-through" : "" } text-lg text-primary font-semibold`}> $ {product?.price}</span>
            {product?.salePrice > 0 ? (
              <span className="text-lg text-primary font-semibold">$ {product?.salePrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter> 
          <Button variant="outline" className="w-full bg-black hover:bg-black/90 text-white hover:text-white/80 text-xl rounded-xl " >Add to cart</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ShoppingProductTile;
