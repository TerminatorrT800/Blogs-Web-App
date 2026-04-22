//Router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import apiRequest from "./request";
const API_URL = import.meta.env.VITE_API_URL

//Pages
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";
import ErrorPage from "./pages/error/ErrorPage";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";

//Layouts
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";


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
      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route path="blogs" element={<Home />} loader={blogsLoader} errorElement={<ErrorPage />} />
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
