const API_URL = import.meta.env.VITE_API_URL
import { redirect } from "react-router-dom"
import apiRequest from "../../request"

const createAction = async ({ request }) => {

    const data = await request.formData()

    const blog = {
        title: data.get('blogTitle'),
        body: data.get('blogBody'),
        author: data.get('blogAuthor'),
    }

    const response = await apiRequest(`${API_URL}/blogs`, { method: "POST", body: blog, signal:request.signal})
    console.log(blog)
    console.log(request)

    if(!response.id){
        console.log(response)
        return {error:"Greska pri kreiranju"}
        
    }
    return redirect("/blogs")
}
export default createAction