import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import Login from "./shared/Login/Login";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
