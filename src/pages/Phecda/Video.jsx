import { Col, Row } from 'antd'
import play from '../../images/posters2021/play.svg'
import poster from '../../images/posters2022/default.svg'

export default function Video2022() {
    function playVideo(vid, bid) {
        let video = document.querySelector(vid)
        let button = document.querySelector(bid)
        video.addEventListener('play', (e) => {
            button.style.display = "none"
            video.classList.add('playing')
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
            <div className="my-8">
                <Row className="h-[4.7rem] leading-[5rem] text-[2.35rem] text-left border-b border-black">
                    <Col span={8} className="border-r border-black">
                        <h2 className="ml-1">Seminar</h2>
                    </Col>
                    <Col span={16}>
                        <h2 className="pl-2 m-0">Lecture</h2>
                    </Col>
                </Row>
                <Row className="h-[5200px]">
                    <Col span={8} className="text-center border-r border-black">
                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem1", "#sem1Btn")}>
                            <button id="sem1Btn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#sem1", "#sem1Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem1" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day1-%E5%BC%80%E8%90%A5/phegda-camp.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar 1 - 开营仪式
                        </h2>
                    </Col>
                    <Col span={8}>
                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec1", "#lec1Btn")}>
                            <button id="lec1Btn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec1", "#lec1Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec1" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day2-web3%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5-seedao/baiyu.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 1 - Web3的核心概念
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec2b", "#lec2bBtn")}>
                            <button id="lec2bBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec2b", "#lec2bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec2b" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day3-web3%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD-anyweb/%E8%A7%86%E9%A2%91/anyweb2-prac.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 2 - Web3 基础设施 - 2
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec2d", "#lec2dBtn")}>
                            <button id="lec2dBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec2d", "#lec2dBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec2d" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day3-jugugu/videos/%E5%A6%82%E4%BD%95%E6%89%93%E9%80%A0%E4%B8%80%E4%B8%AA%E5%90%88%E8%A7%84%E3%80%81%E5%AE%89%E5%85%A8%E3%80%81%E9%80%9A%E7%94%A8%E7%9A%84WEB3%E8%B4%A6%E6%88%B7%E4%BD%93%E7%B3%BB%E2%80%94%E2%80%94%E7%A7%A6%E5%B7%9D.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 2 - Web3 基础设施 - 4
                        </h2>
                    </Col>
                    <Col span={8}>
                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec2a", "#lec2aBtn")}>
                            <button id="lec2aBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec2a", "#lec2aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec2a" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day3-web3%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD-anyweb/%E8%A7%86%E9%A2%91/anyweb1-spec.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 2 - Web3 基础设施 - 1
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec2c", "#lec2cBtn")}>
                            <button id="lec2cBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec2c", "#lec2cBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec2c" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day3-web3%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD-anyweb/%E8%A7%86%E9%A2%91/anyweb-proj.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 2 - Web3 基础设施 - 3
                        </h2>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
