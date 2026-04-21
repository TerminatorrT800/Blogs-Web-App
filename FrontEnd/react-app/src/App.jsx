//Router
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import apiRequest from "./request";
const API_URL = import.meta.env.VITE_API_URL

//Pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import ErrorPage from "./pages/error/ErrorPage";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";


const blogsLoader = async ({ request }) => {
  return await apiRequest(`${API_URL}/blogs`, {
    signal: request.signal
  })
}

const blogsDetailsLoader = async ({ params, request }) => {
  return await apiRequest(`${API_URL}/blogs/${params.id}`, {
    signal: request.signal
  })
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={blogsLoader} errorElement={<ErrorPage />} />
        <Route path="create" element={<Create />} />
        <Route path="blogs/:id" element={<BlogDetails />} loader={blogsDetailsLoader} errorElement={<ErrorPage />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>

    )
  )




  return (
    <RouterProvider router={router} />
  )
}

export default App
