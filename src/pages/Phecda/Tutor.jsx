import longfan from '../../images/tutors/longfan.webp'
import wuming from '../../images/tutors/wuming.webp'
import yuanjie from '../../images/tutors/yuanjie.webp'
import veneris from '../../images/tutors/veneris.webp'
import peter from '../../images/tutors/peter.webp'
import yichen from '../../images/tutors/yichen.webp'
import baiyu from '../../images/tutors/baiyu.jpg'
import tanghan from '../../images/tutors/tanghan.jpg'
import wuxiao from '../../images/tutors/wuxiao.jpg'
import { Col, Row } from 'antd'

export default function Tutor2022() {
    let style = {
        textShadow: '0px 5px 0px rgba(0, 0, 0, 0.298)',
    }

    return (
        <div className="w-[1280px] bg-[#2F2E2E]">
            <div className="text-white">
                <Row className="h-60 pt-24">
                    <Col span={8}></Col>
                    <Col span={8}>
                        <h1 className="text-white m-0 text-[40px] font-bold">
                            <span style={style}>导 师 团 队</span>
                        </h1>
                        <br />
                        <span className="text-white text-[18px]" style={style}>(排名不分先后)</span>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <br /><br />
                <Row>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={longfan} alt="longfan" />
                        <br />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <span className="text-[22px] font-bold ">龙凡</span>
                            <span className="inline-block text-lg mt-1">树图区块链研究院院长</span>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">现任多伦多大学助理教授</li>
                                <li className="mt-1">麻省理工学院（MIT）计算机科学博士</li>
                                <li className="mt-1">本科毕业于清华大学姚班</li>
                                <li className="mt-1">国际信息学奥林匹克（IOI）两届金牌得主</li>
                                <li className="mt-1">ACM-ICPC 程序设计竞赛区域赛冠军</li>
                            </ul>
                        </div>
                        {/* <span className="inline-block mt-20">龙凡</span>
                        <br />
                        <span>树图区块链研究院院长</span>
                        <ul className="w-72 m-auto p-auto list-disc text-left">
                            <li>现任多伦多大学助理教授</li>
                            <li>麻省理工学院（MIT）计算机科学博士</li>
                            <li>本科毕业于清华大学姚班</li>
                            <li>国际信息学奥林匹克（IOI）两届金牌得主</li>
                            <li>ACM-ICPC 程序设计竞赛区域赛冠军</li>
                        </ul> */}
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={wuming} alt="wuming" />
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={yuanjie} alt="yuanjie" />
                    </Col>
                </Row>
                {/* <Row className="mt-20">
                    <Col span={8} className="text-center">
                        <div className="text-center w-[220px]">
                            <span>龙凡</span>
                            <br />
                            <span>树图区块链研究院院长</span>
                            <ul className="w-72 m-auto p-auto list-disc text-left">
                                <li>现任多伦多大学助理教授</li>
                                <li>麻省理工学院（MIT）计算机科学博士</li>
                                <li>本科毕业于清华大学姚班</li>
                                <li>国际信息学奥林匹克（IOI）两届金牌得主</li>
                                <li>ACM-ICPC 程序设计竞赛区域赛冠军</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row> */}
                <Row className="mt-52">
                    <Col span={8} className="text-center">
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={veneris} alt="veneris" />
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={peter} alt="peter" />
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={yichen} alt="yichen" />
                    </Col>
                </Row>
                <Row className="mt-52">
                    <Col span={8} className="text-center">
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={baiyu} alt="baiyu" />
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={tanghan} alt="tanghan" />
                    </Col>
                    <Col span={8}>
                        <div className="w-[220px] h-[220px] overflow-hidden rounded-[50%] inline-block">
                            <img className="w-full" src={wuxiao} alt="wuxiao" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
