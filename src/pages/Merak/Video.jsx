import { Col, Row } from 'antd'
import play from '../../images/posters2021/play.svg'
import sem1 from '../../images/posters2021/sem1.svg'
import sem2a from '../../images/posters2021/sem2-1.svg'
import sem2b from '../../images/posters2021/sem2-2.svg'
import sem3 from '../../images/posters2021/sem3.svg'
import sem4a from '../../images/posters2021/sem4-1.svg'
import sem4b from '../../images/posters2021/sem4-2.svg'
import sem4c from '../../images/posters2021/sem4-3.svg'
import sem5 from '../../images/posters2021/sem5.svg'
import sem6 from '../../images/posters2021/sem6.svg'
import sem7 from '../../images/posters2021/sem7.svg'
import sem8 from '../../images/posters2021/sem8.svg'
import sem9 from '../../images/posters2021/sem9.svg'
import sem10 from '../../images/posters2021/sem10.svg'
import sem11 from '../../images/posters2021/sem11.svg'
import lec1 from '../../images/posters2021/lec1.svg'
import lec2 from '../../images/posters2021/lec2.svg'
import lec3a from '../../images/posters2021/lec3-1.svg'
import lec3b from '../../images/posters2021/lec3-2.svg'
import lec4a from '../../images/posters2021/lec4-1.svg'
import lec4b from '../../images/posters2021/lec4-2.svg'
import lec5 from '../../images/posters2021/lec5.svg'
import lec6 from '../../images/posters2021/lec6.svg'
import lec7a from '../../images/posters2021/lec7-1.svg'
import lec7b from '../../images/posters2021/lec7-2.svg'
import lec8a from '../../images/posters2021/lec8-1.svg'
import lec8b from '../../images/posters2021/lec8-2.svg'
import lec8c from '../../images/posters2021/lec8-3.svg'
import lec9a from '../../images/posters2021/lec9-1.svg'
import lec9b from '../../images/posters2021/lec9-2.svg'
import lec9c from '../../images/posters2021/lec9-3.svg'
import lec10a from '../../images/posters2021/lec10-1.svg'
import lec10b from '../../images/posters2021/lec10-2.svg'
import lec10c from '../../images/posters2021/lec10-3.svg'
import lec10d from '../../images/posters2021/lec10-4.svg'
import lec11a from '../../images/posters2021/lec11-1.svg'
import lec11b from '../../images/posters2021/lec11-2.svg'
import lec12a from '../../images/posters2021/lec12-1.svg'
import lec12b from '../../images/posters2021/lec12-2.svg'

export default function Video2021() {

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
                    <Col span={15}>
                        <h2 className="pl-2 m-0">Lecture</h2>
                    </Col>
                </Row>
                <Row className="h-[5200px]">
                    <Col span={8} className="text-center border-r border-black">
                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem1", "#sem1Btn")}>
                            <button id="sem1Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem1", "#sem1Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem1" preoload="none" controls width="406" poster={sem1} className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar1-开营仪式
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem2a", "#sem2aBtn")}>
                            <button id="sem2aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem2a", "#sem2aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem2a" preoload="none" controls width="406" poster={sem2a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem2.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar2.1-项目方向分享（一）_0717
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem2b", "#sem2bBtn")}>
                            <button id="sem2bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem2b", "#sem2bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem2b" preoload="none" controls width="406" poster={sem2b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem2.2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block mt-6 font-lato font-black text-[21px] mb-[43.5px]">
                            Seminar2.2-项目方向分享（一）_0718
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem3", "#sem3Btn")}>
                            <button id="sem3Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem3", "#sem3Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem3" preoload="none" controls width="406" poster={sem3} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem3.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar3-项目方向分享（二）_0724
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem4a", "#sem4aBtn")}>
                            <button id="sem4aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem4a", "#sem4aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem4a" preoload="none" controls width="406" poster={sem4a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem4.1.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar4-项目方向分享（三）_0731
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem4b", "#sem4bBtn")}>
                            <button id="sem4bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem4b", "#sem4bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem4b" preoload="none" controls width="406" poster={sem4b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem4.2.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar4-项目方向分享（四）_0731
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem4c", "#sem4cBtn")}>
                            <button id="sem4cBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem4c", "#sem4cBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem4c" preoload="none" controls width="406" poster={sem4c} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem4.3.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block mt-6 font-lato font-black text-[21px] mb-[43.5px]">
                            Seminar4-项目方向分享（五）_0731
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem5", "#sem5Btn")}>
                            <button id="sem5Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem5", "#sem5Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem5" preoload="none" controls width="406" poster={sem5} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem5.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] mb-[43.5px]">
                            嘉宾讲座-去中心化存储
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem6", "#sem6Btn")}>
                            <button id="sem6Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem6", "#sem6Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem6" preoload="none" controls width="406" poster={sem6} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem6.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            CryptoTechNight-零知识证明
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem7", "#sem7Btn")}>
                            <button id="sem7Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem7", "#sem7Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem7" preoload="none" controls width="406" poster={sem7} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem7.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            CryptoTechNight-跨链技术
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem8", "#sem8Btn")}>
                            <button id="sem8Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem8", "#sem8Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem8" preoload="none" controls width="406" poster={sem8} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem8.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            CryptoTechNight-NFT
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem9", "#sem9Btn")}>
                            <button id="sem9Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem9", "#sem9Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem9" preoload="none" controls width="406" poster={sem9} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem9.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            CryptoTechNight-智能合约：现在与未来
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem10", "#sem10Btn")}>
                            <button id="sem10Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem10", "#sem10Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem10" preoload="none" controls width="406" poster={sem10} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem10.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            CryptoTechNight-DeFi背后的技术
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#sem11", "#sem11Btn")}>
                            <button id="sem11Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#sem11", "#sem11Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="sem11" preoload="none" controls width="406" poster={sem11} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/Seminar/sem11.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            CryptoTechNight-分布式存储
                        </h2>
                    </Col>
                    <Col span={8}>
                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec1", "#lec1Btn")}>
                            <button id="lec1Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec1", "#lec1Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec1" preoload="none" controls width="406" poster={lec1} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B1/lec1final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 1 - 区块链简明发展史
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec3a", "#lec3aBtn")}>
                            <button id="lec3aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec3a", "#lec3aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec3a" preoload="none" controls width="406" poster={lec3a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B3/Lec3.1Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 3.1 - 如何使用js-sdk发送交易
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec4a", "#lec4aBtn")}>
                            <button id="lec4aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec4a", "#lec4aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec4a" preoload="none" controls width="406" poster={lec4a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B4/Lec4.1Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 4.1 - Solidity语言以及Conflux智能合约入门
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec5", "#lec5Btn")}>
                            <button id="lec5Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec5", "#lec5Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec5" preoload="none" controls width="406" poster={lec5} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B5/lec5Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture5 - Conflux智能合约执行原理
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec7a", "#lec7aBtn")}>
                            <button id="lec7aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec7a", "#lec7aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7a" preoload="none" controls width="406" poster={lec7a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B7/lec7.1final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture7.1 - cfxtruffle及标准合约介绍
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec8a", "#lec8aBtn")}>
                            <button id="lec8aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec8a", "#lec8aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec8a" preoload="none" controls width="406" poster={lec8a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B8/lec8.1final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture8.1 - 如何节省Gas
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec8c", "#lec8cBtn")}>
                            <button id="lec8cBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec8c", "#lec8cBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec8c" preoload="none" controls width="406" poster={lec8c} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B8/lec8.3final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block mt-6 font-lato font-black text-[21px] mb-[43.5px]">
                            Lecture8.3 - 编写安全的智能合约
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec9b", "#lec9bBtn")}>
                            <button id="lec9bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec9b", "#lec9bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec9b" preoload="none" controls width="406" poster={lec9b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B9/lec9.2final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture9.2 - NFT 智能合约的数据结构和接口设计
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec10a", "#lec10aBtn")}>
                            <button id="lec10aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec10a", "#lec10aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec10a" preoload="none" controls width="406" poster={lec10a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B10/lec10.1Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture10.1 - NFT合约部署
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec10c", "#lec10cBtn")}>
                            <button id="lec10cBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec10c", "#lec10cBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec10c" preoload="none" controls width="406" poster={lec10c} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B10/lec10.3final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture10.3 - NFT Dapp页面开发
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec11a", "#lec11aBtn")}>
                            <button id="lec11aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec11a", "#lec11aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec11a" preoload="none" controls width="406" poster={lec11a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B11/lec11.1final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture11.1 - Reach介绍与入门
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec12a", "#lec12aBtn")}>
                            <button id="lec12aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec12a", "#lec12aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec12a" preoload="none" controls width="406" poster={lec12a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B12/lec12.1Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture12.1 - Reach Token与NFT
                        </h2>
                    </Col>
                    <Col span={8}>
                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec2", "#lec2Btn")}>
                            <button id="lec2Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec2", "#lec2Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec2" preoload="none" controls width="406" poster={lec2} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B2/lec2final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 2 - Conflux核心概念
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec3b", "#lec3bBtn")}>
                            <button id="lec3bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec3b", "#lec3bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec3b" preoload="none" controls width="406" poster={lec3b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B3/Lec3.2Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture 3.2 - js-sdk发送交易演示
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec4b", "#lec4bBtn")}>
                            <button id="lec4bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec4b", "#lec4bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec4b" preoload="none" controls width="406" poster={lec4b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B4/lec4.2Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block mt-6 font-lato font-black text-[21px] mb-[43.5px]">
                            Lecture 4.2 - Conflux IDE介绍
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec6", "#lec6Btn")}>
                            <button id="lec6Btn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec6", "#lec6Btn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec6" preoload="none" controls width="406" poster={lec6} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B6/lec6Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture6 - Conflux内置合约介绍
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec7b", "#lec7bBtn")}>
                            <button id="lec7bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec7b", "#lec7bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec7b" preoload="none" controls width="406" poster={lec7b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B7/lec7.2final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture7.2 - ERC代币标准介绍
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec8b", "#lec8bBtn")}>
                            <button id="lec8bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec8b", "#lec8bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec8b" preoload="none" controls width="406" poster={lec8b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B8/lec8.2final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture8.2 - 编写可升级合约
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec9a", "#lec9aBtn")}>
                            <button id="lec9aBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec9a", "#lec9aBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec9a" preoload="none" controls width="406" poster={lec9a} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B9/lec9.1Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture9.1 - NFT智能合约DApp 项目要解决什么问题？
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec9c", "#lec9cBtn")}>
                            <button id="lec9cBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec9c", "#lec9cBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec9c" preoload="none" controls width="406" poster={lec9c} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B9/lec9.3Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="inline-block mt-6 font-lato font-black text-[21px] mb-[43.5px]">
                            Lecture9.3 - NFT合约开发
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec10b", "#lec10bBtn")}>
                            <button id="lec10bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec10d", "#lec10bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec10b" preoload="none" controls width="406" poster={lec10b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B10/lec10.2Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture10.2 - NFT产品设计
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec10d", "#lec10dBtn")}>
                            <button id="lec10dBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec10d", "#lec10dBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec10d" preoload="none" controls width="406" poster={lec10d} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B10/lec10.4final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture10.4 - NFT 上线
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec11b", "#lec11bBtn")}>
                            <button id="lec11bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec11b", "#lec11bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec11b" preoload="none" controls width="406" poster={lec11b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B11/lec11.2final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture11.2 - Reach基础介绍-剪刀石头布
                        </h2>

                        <div className="relative inline-block mt-8" onClick={() => screenPlay("#lec12b", "#lec12bBtn")}>
                            <button id="lec12bBtn" className="w-[45px] h-[45px] absolute bottom-[55px] left-[183px] bg-black z-10" onClick={() => playVideo("#lec12b", "#lec12bBtn")}>
                                <img src={play} alt="" />
                            </button>
                            <video id="lec12b" preoload="none" controls width="406" poster={lec12b} className=" h-[228px] relative">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%A7%86%E9%A2%91/%E8%AF%BE%E7%A8%8B12/lec12.2Final.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Lecture12.2 - Reach共识转移与开发建议
                        </h2>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
