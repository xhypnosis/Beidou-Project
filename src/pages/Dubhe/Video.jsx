import { Col, Row } from 'antd'
import play from '../../images/posters2020/play.svg'
import intro from '../../images/posters2020/intro.svg'
import lec2a from '../../images/posters2020/lec2-1.svg'
import lec2b from '../../images/posters2020/lec2-2.svg'
import lec3a from '../../images/posters2020/lec3-1.svg'
import lec3b from '../../images/posters2020/lec3-2.svg'
import lec4a from '../../images/posters2020/lec4-1.svg'
import lec4b from '../../images/posters2020/lec4-2.svg'
import lec5a from '../../images/posters2020/lec5-1.svg'
import lec5b from '../../images/posters2020/lec5-2.svg'
import lec6a from '../../images/posters2020/lec6-1.svg'
import lec6b from '../../images/posters2020/lec6-2.svg'
import lec7a from '../../images/posters2020/lec7-1.svg'
import lec7b from '../../images/posters2020/lec7-2.svg'
import lec7c from '../../images/posters2020/lec7-3.svg'
import lec8 from '../../images/posters2020/lec8.svg'
import group6 from '../../images/posters2020/group6.svg'
import group14 from '../../images/posters2020/group14.svg'
import group27 from '../../images/posters2020/group27.svg'
import group28 from '../../images/posters2020/group28.svg'
import group29 from '../../images/posters2020/group29.svg'
import group30 from '../../images/posters2020/group30.svg'
import group33 from '../../images/posters2020/group33.svg'

export default function Video2020() {

    function playVideo(vid, bid) {
        let video = document.querySelector(vid)
        let button = document.querySelector(bid)
        video.addEventListener('play', (e) => {
            video.classList.add('playing')
            button.style.display = "none"
        })
        video.play()
    }

    function screenPlay(vid, bid) {
        let button = document.querySelector(bid)
        let video = document.querySelector(vid)
        video.addEventListener('play', (e) => {
            button.style.display = "none"
            video.classList.add('playing')
        })
    }

    return (
        <div className="bg-white">
            <div className="h-[3000px]">
                <Row className="h-[4rem] font-lato leading-[5rem] text-[25px] text-left border-b border-black mx-1">
                    <Col span={24}>
                        <h2 className="ml-4 mb-0 font-black">课程视频</h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#intro", "#introBtn")}>
                            <button id="introBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#intro", "#introBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="intro" controls width="406" poster={intro} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block mt-6 font-lato font-black text-xl">
                            Lecture 1 - Introduction Of Blockchain
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec2a", "#lec2aBtn")}>
                            <button id="lec2aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec2a", "#lec2aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec2a" controls width="406" poster={lec2a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec2.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 2 - Cryptoeconomics - Token Economy 01
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec2b", "#lec2bBtn")}>
                            <button id="lec2bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec2b", "#lec2bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec2b" controls width="406" poster={lec2b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec2.2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 2 - Cryptoeconomics - Conflux Network 02
                        </h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec3a", "#lec3aBtn")}>
                            <button id="lec3aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec3a", "#lec3aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec3a" controls width="406" poster={lec3a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec3.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 3 - Fundamental Concepts & Tools 01
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec3b", "#lec3bBtn")}>
                            <button id="lec3bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec3b", "#lec3bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec3b" controls width="406" poster={lec3b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec3.2%20modified.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 3 - Fundamental Concepts & Tools 02
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec4a", "#lec4aBtn")}>
                            <button id="lec4aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec4a", "#lec4aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec4a" controls width="406" poster={lec4a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec4.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 4 - Introduction to Smart Contracts I 01
                        </h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec4b", "#lec4bBtn")}>
                            <button id="lec4bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec4b", "#lec4bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec4b" controls width="406" poster={lec4b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec4.2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 4 - Introduction to Smart Contracts I 02
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec5a", "#lec5aBtn")}>
                            <button id="lec5aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec5a", "#lec5aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec5a" controls width="406" poster={lec5a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec5.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 5 - Introduction to Smart Contracts II 01
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec5b", "#lec5bBtn")}>
                            <button id="lec5bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec5b", "#lec5bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec5b" controls width="406" poster={lec5b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec5.2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 5 - Introduction to Smart Contracts II 02
                        </h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec6a", "#lec6aBtn")}>
                            <button id="lec6aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec6a", "#lec6aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec6a" controls width="406" poster={lec6a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec6.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 6 - Gas and Gas Sponsorship in Conflux 01
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec6b", "#lec6bBtn")}>
                            <button id="lec6bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec6b", "#lec6bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec6b" controls width="406" poster={lec6b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec6.2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 6 - Gas and Gas Sponsorship in Conflux 02
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec7a", "#lec7aBtn")}>
                            <button id="lec7aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec7a", "#lec7aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7a" controls width="406" poster={lec7a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec7.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 7 - DeFi, Reconstruction and Innovation of Finance 01
                        </h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec7b", "#lec7bBtn")}>
                            <button id="lec7bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec7b", "#lec7bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7b" controls width="406" poster={lec7b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec7.2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 7 - DeFi, Reconstruction and Innovation of Finance 02
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec7c", "#lec7cBtn")}>
                            <button id="lec7cBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec7c", "#lec7cBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7c" controls width="406" poster={lec7c} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec7.3.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 7 - DeFi, Reconstruction and Innovation of Finance 03
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#lec8", "#lec8Btn")}>
                            <button id="lec8Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec8", "#lec8Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec8" controls width="406" poster={lec8} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/lec8.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Lecture 8 - Blockchain Story
                        </h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#group6", "#group6Btn")}>
                            <button id="group6Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#group6", "#group6Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="group6" controls width="406" poster={group6} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/preg6.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Final Presentation - Group 6
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#group14", "#group14Btn")}>
                            <button id="group14Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#group14", "#group14Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="group14" controls width="406" poster={group14} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/preg14.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Final Presentation - Group 14
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#group27", "#group27Btn")}>
                            <button id="group27Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#group27", "#group27Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="group27" controls width="406" poster={group27} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/preg27.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Final Presentation - Group 27
                        </h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#group28", "#group28Btn")}>
                            <button id="group28Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#group28", "#group28Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="group28" controls width="406" poster={group28} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/preg28.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Final Presentation - Group 28
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#group29", "#group29Btn")}>
                            <button id="group29Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#group29", "#group29Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="group29" controls width="406" poster={group29} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/preg29.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Final Presentation - Group 29
                        </h2>
                    </Col>
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#group30", "#group30Btn")}>
                            <button id="group30Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#group30", "#group30Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="group30" controls width="406" poster={group30} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/preg30.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Final Presentation - Group 30
                        </h2>
                    </Col>
                </Row>
                <Row className="mt-4 mb-10">
                    <Col span={8} className="text-center">
                        <div className="relative inline-block" onClick={() => screenPlay("#group33", "#group33Btn")}>
                            <button id="group33Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#group33", "#group33Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="group33" controls width="406" poster={group33} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%A7%86%E9%A2%91/preg33.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block w-[330px] mt-6 font-lato font-black text-xl">
                            Final Presentation - Group 33
                        </h2>
                    </Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        </div>
    )
}
