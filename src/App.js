import { Route, Routes } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
