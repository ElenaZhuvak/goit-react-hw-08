import 'modern-normalize'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home/Home'


const App = () => {

<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
  </Route>
</Routes>
}

export default App