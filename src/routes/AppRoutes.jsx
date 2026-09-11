import { HashRouter, Route , Routes} from "react-router-dom"
import Home from '../pages/Home'
import Hakkımızda from '../pages/Hakkımızda'
import Ürünler from "../pages/Ürünler"
import İletişim from "../pages/İletişim"
import Basket from "../components/Basket"

function AppRoutes() {
  return (
    <div>
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkımızda/>} />
        <Route path="/ürünler" element ={<Ürünler />}/>
        <Route path="/iletişim" element = {<İletişim />} />
        <Route path="/sepet" element = {<Basket />} />
      </Routes>
      </HashRouter>
    </div>
  )
}

export default AppRoutes
