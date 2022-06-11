import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Basic from './pages/Basic'
import Phecda from './pages/Phecda'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Basic />}>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="phecda2022" element={<Phecda />} />
                        <Route path="phecda2022/catalogue" element={<Phecda />} />
                        <Route path="phecda2022/video" element={<Phecda />} />
                        <Route path="phecda2022/courseware" element={<Phecda />} />
                        <Route path="phecda2022/reward" element={<Phecda />} />
                        <Route path="phecda2022/tutor" element={<Phecda />} />
                        <Route path="phecda2022/entry-list" element={<Phecda />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
