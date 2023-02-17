//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//PAGES
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import Error from "./Pages/Error"

//Navbar
//import Navbar from "../src/Components/Navbar"

function App() {
 
   


//ROUTES
    return (
        <div>
          <Router>
            {/* <Navbar/>          */}
            <main>
              <Routes>
                <Route path="/" element={<Home />}   />
                <Route path="/announcements" element={ <Index /> }  />
                <Route path="/announcements/new" element={<New />}  />
                <Route path="/announcements/edit"  element={ <Edit />} />
                <Route path="/announcements/:id"element={<Show />}  />
                <Route path="/announcements/:id/edit"  element={ <Edit />} />
                <Route  path="*" element={<Error />} />
              </Routes>
            </main>
          </Router>
        </div>
    );
}

export default App;
