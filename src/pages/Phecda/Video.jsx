import { Col, Row } from 'antd'
import play from '../../images/posters2021/play.svg'

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
                            <video id="sem1" preoload="none" controls width="406" className=" h-[228px]">
                                <source src="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day1-%E5%BC%80%E8%90%A5/phegda-camp.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        <h2 className="mt-6 font-lato font-black text-[21px] h-16">
                            Seminar 1-开营仪式
                        </h2>
                    </Col>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
