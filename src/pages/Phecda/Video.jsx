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
        <div className="bg-white w-full">
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

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem2", "#sem2Btn")}>
                            <button id="sem2Btn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#sem2", "#sem2Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem2" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%202/sem-2/sem-2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar 2 - 开题汇报 (一)
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

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec3b", "#lec3bBtn")}>
                            <button id="lec3bBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec3b", "#lec3bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec3b" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B3/Lec3.2Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 3 - 如何在Conflux上发送一笔交易 - 2
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec4b", "#lec4bBtn")}>
                            <button id="lec4bBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec4b", "#lec4bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec4b" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B7/lec7.1final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 4 - 智能合约 -2
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec6a", "#lec6aBtn")}>
                            <button id="lec6aBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec6a", "#lec6aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec6a" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%203/day1-dao%E5%A6%82%E4%BD%95%E8%BF%90%E8%A1%8C/lec6-1-seedao.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 6 - DAO - 1
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec7a", "#lec7aBtn")}>
                            <button id="lec7aBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec7a", "#lec7aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7a" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%203/day2/comupage.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 7-1 comupage 在灵魂通证领域的探索
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec7c", "#lec7cBtn")}>
                            <button id="lec7cBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec7c", "#lec7cBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7c" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%203/day2/%E6%95%B0%E5%AD%97%E8%97%8F%E5%93%81%E4%B8%9A%E5%8A%A1%E8%AE%B2%E8%A7%A3-%E6%B7%98%E6%B4%BE.mov" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 7-3 数字藏品业务讲解
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec8a", "#lec8aBtn")}>
                            <button id="lec8aBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec8a", "#lec8aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec8a" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%203/day3-%E5%85%83%E5%AE%87%E5%AE%99-%E8%8E%AB%E8%B5%9B/%E6%90%AD%E5%BB%BA%E5%85%83%E5%AE%87%E5%AE%99%E7%9A%84%E9%87%8D%E8%A6%81%E7%8E%AF%E8%8A%82.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 8 搭建元宇宙的重要环节
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

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec3a", "#lec3aBtn")}>
                            <button id="lec3aBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec3a", "#lec3aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec3a" preoload="none" controls width="406" poster={poster} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B3/Lec3.1Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 3 - S-SDK和开发工具的介绍与使用 - 1
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec4a", "#lec4aBtn")}>
                            <button id="lec4aBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec4a", "#lec4aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec4a" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B5/lec5Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 4 - 智能合约 - 1
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec5a", "#lec5aBtn")}>
                            <button id="lec5aBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec5a", "#lec5aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec5a" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%202/day2-%E6%95%B0%E8%97%8F%E5%90%88%E7%BA%A6-chainide/chainide.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 5 - 数字藏品合约开发与部署
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec6b", "#lec6bBtn")}>
                            <button id="lec6bBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec6b", "#lec6bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec6b" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%203/day1-dao%E5%A6%82%E4%BD%95%E8%BF%90%E8%A1%8C/lec6-blackide.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 6- Dao - 2 
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec7b", "#lec7bBtn")}>
                            <button id="lec7bBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec7b", "#lec7bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7b" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%203/day2/%E6%95%B0%E5%AD%97%E8%97%8F%E5%93%81%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%8A%9F%E8%83%BD%E4%B8%8E%E5%AE%9E%E7%8E%B0-%E7%BE%8E%E5%8C%A3.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 7-2 数字藏品平台的功能和实现
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec7d", "#lec7dBtn")}>
                            <button id="lec7dBtn" className="w-[45px] h-[45px] absolute bottom-[90px] left-[180px] bg-black z-10" onClick={() => playVideo("#lec7d", "#lec7dBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7d" preoload="none" controls width="406" poster={poster} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%203/day2/%E6%95%B0%E5%AD%97%E8%97%8F%E5%93%81%E7%9A%84%E6%96%B0%E7%94%9F%E6%A0%87%E5%87%86%E5%92%8C%E5%9C%BA%E6%99%AF-cocafe.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 7-4 数字藏品的新生标准和场景
                        </h2>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
