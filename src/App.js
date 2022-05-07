import { Route, Routes } from "react-router-dom";
import AddItem from "./Components/AddItem/AddItem";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import ManageInventories from "./Components/ManageInventories/ManageInventories";
import NotFound from "./Components/NotFound/NotFound";
import MyItemas from "./MyIteams/MyItemas";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import Login from "./shared/Login/Login";
import Registration from "./shared/Registration/Registration";
import RequireAuth from "./shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reg" element={<Registration></Registration>}></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myIteams"
          element={
            <RequireAuth>
              <MyItemas />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
