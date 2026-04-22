//Router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import apiRequest from "./request";
import { redirect } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL

//Pages
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/create/Create";
import ErrorPage from "./pages/error/ErrorPage";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";

//Layouts
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/root/RootLayout";
import NotFound from "./pages/NotFound";
import LoginRootLayout from "./layouts/login/LoginRootLayout";


//Loaders
import checkAuthLoader from "./layouts/login/loader";
import rootLoader from "./layouts/root/loader";

const requireAuth = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    throw redirect("/login");
  }
  return null;
}

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

//Action
import createAction from "./pages/create/action";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements([

      <Route path="/login" loader={checkAuthLoader} element={<LoginRootLayout />} />,

      <Route path="/" element={<RootLayout />} loader={requireAuth} errorElement={<NotFound />}>

        <Route index loader={rootLoader} />

        <Route
          path="blogs"
          element={<Home />}
          loader={blogsLoader}
          errorElement={<ErrorPage />}
        />

        <Route path="create" element={<Create />} action={createAction} />

        <Route
          path="blogs/:id"
          element={<BlogDetails />}
          loader={blogsDetailsLoader}
          errorElement={<ErrorPage />}
        />

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Route>
    ])
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
