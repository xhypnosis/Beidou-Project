import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Basic from './pages/Basic'
import Dubhe from './pages/Dubhe'
import Reward2020 from './pages/Dubhe/Reward'
import Tutor2020 from './pages/Dubhe/Tutor'
import Courseware2020 from './pages/Dubhe/Courseware'
import Catalogue2020 from './pages/Dubhe/Catalogue'
import Video2020 from './pages/Dubhe/Video'
import Merak from './pages/Merak'
import Reward2021 from './pages/Merak/Reward'
import Tutor2021 from './pages/Merak/Tutor'
import Courseware2021 from './pages/Merak/Courseware'
import Catalogue2021 from './pages/Merak/Catalogue'
import Video2021 from './pages/Merak/Video'
import List2021 from './pages/Merak/EntryList'
import Phecda from './pages/Phecda'
import Reward2022 from './pages/Phecda/Reward'
import Tutor2022 from './pages/Phecda/Tutor'
import Courseware2022 from './pages/Phecda/Courseware'
import Catalogue2022 from './pages/Phecda/Catalogue'
import Video2022 from './pages/Phecda/Video'
import List2022 from './pages/Phecda/EntryList'
import Edu from './pages/Edu'
import Layout from './pages/Edu/Layout'
import Course from './pages/Edu/Course'
import Reward from './pages/Edu/Reward'
import Enroll from './pages/Edu/Enroll'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Edu />} />
                        <Route path="course" element={<Course />} />
                        <Route path="reward" element={<Reward />} />
                        <Route path="enroll" element={<Enroll />} />
                    </Route>
                    <Route path="dubhe" element={<Basic />}>
                        <Route index element={<Dubhe />} />
                        <Route path="catalogue" element={<Catalogue2020 />} />
                        <Route path="video" element={<Video2020 />} />
                        <Route path="courseware" element={<Courseware2020 />} />
                        <Route path="reward" element={<Reward2020 />} />
                        <Route path="tutor" element={<Tutor2020 />} />
                    </Route>
                    <Route path="merak" element={<Basic />}>
                        <Route index element={<Merak />} />
                        <Route path="catalogue" element={<Catalogue2021 />} />
                        <Route path="video" element={<Video2021 />} />
                        <Route path="courseware" element={<Courseware2021 />} />
                        <Route path="reward" element={<Reward2021 />} />
                        <Route path="tutor" element={<Tutor2021 />} />
                    </Route>
                    <Route path="phecda" element={<Basic />}>
                        <Route index element={<Phecda />} />
                        <Route path="catalogue" element={<Catalogue2022 />} />
                        <Route path="video" element={<Video2022 />} />
                        <Route path="courseware" element={<Courseware2022 />} />
                        <Route path="reward" element={<Reward2022 />} />
                        <Route path="tutor" element={<Tutor2022 />} />
                    </Route>
                    <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    } />
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default App
