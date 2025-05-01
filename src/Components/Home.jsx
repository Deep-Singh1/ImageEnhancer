import React, { useState } from 'react'
import ImageUpload from "./ImageUpload"
import ImagePreview from "./ImagePreview"

const Home = () => {
  const [uploadImage, setuploadImage] = useState(null)
  const [enhancedImage, setenhancedImage] = useState(null)
  const [loading, setloading] = useState(false)
  
      const UploadImageHandler = async (file) =>{
        setuploadImage(URL.createObjectURL(file))
          setloading(true)
          try{
            const enhancedURL = await enhancedImageAPI(file)
            setenhancedImage(enhancedURL.image)
            setloading(false)
          } catch(error){
            console.log(error)
            alert("Error while enhancing. Please try again later")
          }
      }
          

  return (
    <>
        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview 
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
        />
    </>
  )
}

export default Home