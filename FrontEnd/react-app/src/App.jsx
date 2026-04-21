//Router
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import request from "./request";
const apiUrl = import.meta.env.VITE_API_URL

//Pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";



function App() {

  const controller = new AbortController();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={async() => await request(`${apiUrl}/blogs`, { signal: controller.signal })} />
        <Route path="create" element={<Create />} />
        <Route path="blogs/:id" element={<BlogDetails />} loader={async() => await request(`${apiUrl}/blogs/:id`, { signal: controller.signal })} />
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
