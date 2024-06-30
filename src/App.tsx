import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";
import "./app/assets/fontello/css/fontello.css";


const App = () => {
  return (<>

  <RouterProvider router={router} />
  </>)
}

export default App;