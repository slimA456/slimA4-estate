import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import SignOut from './Pages/SignOut'
import SignIn from './Pages/SignIn'
import Profile from './Pages/Profile'
import About from './Pages/About'

function App() {

  return (
    <BrowserRouter>
    <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/sign-in' element={<SignIn />}/>
  <Route path='/sign-out' element={<SignOut />}/>
  <Route path='/profile' element={<Profile />}/>

    </Routes> 
    </BrowserRouter>
  )
}

export default App
