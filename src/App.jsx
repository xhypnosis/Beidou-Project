import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Basic from './pages/Basic'
import Phecda from './pages/Phecda'
import Reward2022 from './pages/Phecda/Reward'
import Tutor2022 from './pages/Phecda/Tutor'
import Courseware2022 from './pages/Phecda/Courseware'
import Catalogue2022 from './pages/Phecda/Catalogue'
import Video2022 from './pages/Phecda/Video'
import List2022 from './pages/Phecda/EntryList'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Basic />}>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="phecda2022" element={<Phecda />} />
                        <Route path="phecda2022/catalogue" element={<Catalogue2022 />} />
                        <Route path="phecda2022/video" element={<Video2022 />} />
                        <Route path="phecda2022/courseware" element={<Courseware2022 />} />
                        <Route path="phecda2022/reward" element={<Reward2022 />} />
                        <Route path="phecda2022/tutor" element={<Tutor2022 />} />
                        <Route path="phecda2022/entry-list" element={<List2022 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
