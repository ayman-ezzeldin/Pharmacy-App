import bannerOne from '../../assets/banner-1.webp'
import bannerTwo from '../../assets/banner-2.webp'
import bannerThree from '../../assets/banner-3.webp'

const ShoppingHome = () => {

  const slides = [bannerOne, bannerTwo, bannerThree]
  return (
    <div className=' flex flex-col min-h-screen'>
      <div className="relative w-full h-[600px] overflow-hidden">
        {
          slides.map((slide,index)=> (
            <img src={slide} alt={slide}
              key={index}
              className=" absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
            />
          ))
        }
      </div>
    </div>
  )
}

export default ShoppingHome