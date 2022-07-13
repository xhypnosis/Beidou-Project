import chenxing from '../../images/tutors/chenxing.webp'
import pana from '../../images/tutors/pana.webp'
import dayong from '../../images/tutors/dayong.webp'
import qige from '../../images/tutors/qige.webp'
import foke from '../../images/tutors/foke.webp'
import peter from '../../images/tutors/Peter.webp'
import yichen from '../../images/tutors/yichen.webp'
import george from '../../images/tutors/george.webp'
import elson from '../../images/tutors/elson.webp'
import lv from '../../images/tutors/lv.webp'
import ivan from '../../images/tutors/ivan.webp'
import { Col, Row } from 'antd'

export default function Tutor2021() {
    let style = {
        textShadow: '0px 5px 0px rgba(0, 0, 0, 0.298)',
    }

    return (
        <div>
            <div className="bg-[#2F2E2E] text-white tracking-normal pb-36">
                <Row className="h-60 pt-24">
                    <Col span={8}></Col>
                    <Col span={8}>
                        <h1 className="text-white m-0 text-[40px] font-bold">
                            <span style={style}>讲 师 团 队</span>
                        </h1>
                        <br />
                        <span className="text-white text-[18px]" style={style}>(排名不分先后)</span>
                    </Col>
                    <Col span={8}></Col>
                </Row>
    
                <Row className="mt-20">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={chenxing} alt="chenxing" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">李辰星</p>
                            <p className="text-base m-0">Conflux算法工程师</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">清华大学交叉信息研究院博士研究生</li>
                                <li className="mt-1">师从姚期智院士</li>
                                <li className="mt-1">中国数学奥林匹克竞赛金牌(2013)</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={peter} alt="peter" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">Péter Garamvölgyi</p>
                            <p className="text-base m-0">Conflux 资深研发工程师</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">清华大学计算机硕士</li>
                                <li className="mt-1">本科毕业于布达佩斯技术与经济大学(BME)
                                </li>
                                <li className="mt-1">前清华大学国际区块链协会(TIBA)主席
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={pana} alt="pana" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">​王攀</p>
                            <p className="text-base m-0">Conflux资深工程师</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">前IOST资深工程师</li>
                                <li className="mt-1">从业区块链开发十年</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={yichen} alt="yichen" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">黄亦宸</p>
                            <p className="text-base m-0">黑曜石区块链社区宣讲师</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">牛津大学计算机科学系本科</li>
                                <li className="mt-1">2019亚太信息学奥林匹克竞赛中国区金牌
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={dayong} alt="dayong" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">王大勇</p>
                            <p className="text-base m-0">Conflux 高级研发工程师</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">从业软件开发行业15年</li>
                                <li className="mt-1">现负责sdk开发、基础设施服务、以及工具开发
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={qige} alt="qige" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">七哥</p>
                            <p className="text-base m-0">借贷协议 Flux 技术负责人</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">《以太坊设计与实现》作者</li>
                                <li className="mt-1">登链社区合伙人
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={foke} alt="foke" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">CyberForker</p>
                            <p className="text-base m-0">区块链极客</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">元宇宙探险家</li>
                                <li className="mt-1">提出动态NFT的概念</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={16}></Col>
                </Row>
            </div>
            <div className="bg-[#757575] text-white tracking-normal pb-36">
                <Row className="h-60 pt-24">
                    <Col span={8}></Col>
                    <Col span={8}>
                        <h1 className="text-white m-0 text-[40px] font-bold">
                            <span style={style}>导 师 团 队</span>
                        </h1>
                        
                        <span className="text-white text-[18px]" style={style}>(排名不分先后)</span>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={george} alt="george" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">George</p>
                            <p className="text-base m-0">Conflux 资深产品经理</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">NYU 交互通信硕士</li>
                                <li className="mt-1">拥有多年区块链产品设计研发经验</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={elson} alt="elson" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">Elson</p>
                            <p className="text-base m-0">Conflux 资深产品经理</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">负责 ShuttleFlow、钱包产品</li>
                                <li className="mt-1">前 IOST 资深产品经理</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={lv} alt="lv" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">Ares</p>
                            <p className="text-base m-0">Conflux 市场经理</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">北斗计划负责人</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={ivan} alt="ivan" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">Ivan</p>
                            <p className="text-base m-0">Conflux 市场部成员</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">清华大学数学科学系</li>
                                <li className="mt-1">国际数学奥林匹克(IMO)台湾代表队队员</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={16}></Col>
                </Row>
            </div>
        </div >
    )
}
