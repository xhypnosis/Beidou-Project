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
                                <source src="https://test0704.oss-cn-hangzhou.aliyuncs.com/home/data/%E5%8C%97%E6%96%97%C2%B7%20%E5%A4%A9%E7%92%87%E8%AF%BE%E7%A8%8B1Final.mp4?versionId=CAEQOxiBgIDQxoefjhgiIDc5NDNiYTY2ZGNjNjQyM2JhOTE4NTkzYzJkNmM3NzYx" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_3c4a8e21bec041d5b6d69233472b1df7/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_a0dcf9e00c6741789005f6614998fdac/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_2f43b6dfefd843cc9983d7df39b8fc29/720p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_52e28a93059b400b93212b2eb63d72b4/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_138e41b895134e0a99cf159a8fbcd9dd/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_e9952b7bf83d47ef88f39693d9a93ecb/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_bb08d7ccc3064db0a537856f6ddf094a/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_efacd78f52d64c0cab166bf7d705cef0/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_344336b91b1d4fc4a2c9b9f2e6123e53/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_cb6cf5f8d277488baad2dbe76206ff23/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_4341aba1b1d64473ac028dbc8fce1010/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_e01f788adffc4c23adb052974f894be4/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_42b6a5f062134363997e8eddb8b095d4/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_53d1802af01140748325180c4ad29dca/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_f85c403e8d67460086baf851b89206ef/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_c2ace55b4e02421788018847ccbf482e/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_0bd035d296df47eda89d71e05be354c0/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_15ea57300fb84857bcfb82d0fd9f8536/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_e1a69ae5be2a49559294508c67255d4f/720p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_fdd149b5497a4baab7ffa5927de92a47/720p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_1688df7c62314eb8860f1c309006315d/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_2f025fb54b8f4330a28cf43564d78469/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_4dde323fa3db4cbcb64fe88a26034ce4/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_af355daedd9245d58bdb80608ec98847/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_687339529d8e4b67b410b2d457347138/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_f4a2c7d3f677455e9461505a5e9825ff/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_21726d1a392047cc8cd6b449109b6ede/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_b5a7b6a125f74422bf4ad6f2fdaa04b1/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_4aef3362ae9549abb63a6b1849b54129/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_db270ef841824ff2b2d2e5126859181b/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_6c4ebffd4cde43a2a686ac3d86700df1/720p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_fe329ec984a8435b8a0b7cc0c1046e04/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_23a7b6a48cbb46c4abde7a1bd2c5b41c/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_a2322cf7bb904f468f37e3aaf85fd133/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_382d26bc2ca2447d8b3b426a60858408/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_b3b15640c6c6400d9b13171aef255692/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
                                <source src="https://video.wixstatic.com/video/6e6df2_37094176c06c4f6483e556b140471965/1080p/mp4/file.mp4" type="video/mp4" />
                                Sorry, your owser doesn't support embedded videos.
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
