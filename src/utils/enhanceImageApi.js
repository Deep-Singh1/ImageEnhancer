const API_KEY = wxfi5lap8fwz6jnd5
const BASE_URL = "https://techhk.aoscdn.com/api/tasks/visual/scale/"
const MAX_RETRIES = 20

export const enhancedImageApi = async (file) => {
   
    try{
    const taskId = await uploadImage(file)
    console.log("Image uploaded succesfully, task ID:",taskId)

      const enhancedImageData = await fetchEnhancedImage(taskId)
        console.log("Enhanced Image data: ",enhancedImageData )

      return enhancedImageData
    
    }catch(error){
        console.log("Error", error.message)
    }
}

const uploadImage = async (file) =>{
    const formData = new FormData()
    formData.append("image_file", file)
    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    })

    if(!data?.data?.task_id){
        throw new Error("Failer to  upload Image! Task ID not found.")
    }

return data.data.task_id;
}

const fetchEnhancedImage = async (taskId) =>{
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskID}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-API-KEY": API_KEY,
        },
    })
    if(!data?.data){
        throw new Error("failed to fetch enhanced Image! Image not found")
    }

return data.data;
}
// /api/tasks/visual/scale/{task_id}

const PollForEnhancedImage = async(taskID, retries = 0) =>{
    const result = await fetchEnhancedImage(taskID)

    if(result.state === 4){
        console.log("procesing...")

        if(retries >= 20){
            throw new Error("MAximum reteis reached. please try again later.")
        }

        await new Promise((resolve) => setTimeout(resolve, 2000))

        return PollForEnhancedImage(taskID, retries + 1)
    }
    console.log("enhanced Image Url: ", result)
    return result
}
