import { useRef } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

const ProductImageUpload = ({imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl}) => {

  function handelImageFileChange(event) {    
    const file = event.target.files[0]
    setImageFile(file)
    setUploadedImageUrl(URL.createObjectURL(file))
  }

  function handelDragOver(event) {
    event.preventDefault()
  }

  function handelDrop(event) {
    event.preventDefault()
    const droppedFile = event.dataTransfer?.files[0]
    if(droppedFile) setImageFile(droppedFile)
    
  }

  function handelRemoveImage() {
    setImageFile(null)
    if(inputRef.current) inputRef.current.value = ''
  }

  const inputRef = useRef(null)
  return (
    <div className="w-full max-w-md mx-auto mt-4" >
      <Label className="text-lg font-semibold mb-2 block" >Upload Image</Label>
      <div 
        onDragOver={handelDragOver}
        onDrop={handelDrop}
        className=" border-2 border-dashed border-gray-300 rounded-lg p-4" >
        <Input type="file" id="image-upload" className="hidden" ref={inputRef} onChange={handelImageFileChange} />
      {
        !imageFile ? (
          <Label
          htmlFor="image-upload"
          className=" flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-6 h-6" />
            <span className="text-sm text-gray-500">Drag & drop or click to upload image</span>
          </Label>
        ) : (
          <div className=" flex items-center justify-around " >
            <div className=" flex items-center" >
              <FileIcon className="w-6 h-6 mr-2" />
            </div>
            <p className=" text-sm text-gray-500" >{imageFile?.name}</p>
            <Button variant='ghost' size='icon' className="text-muted-foreground hover::text-foreground"
              onClick={handelRemoveImage}
            >
              <XIcon className="w-5 h-5" />
              <span className="sr-only"> Remove File </span>
            </Button>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default ProductImageUpload