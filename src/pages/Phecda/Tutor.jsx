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
            <div className="text-white tracking-normal pb-36">
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
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">龙凡</p>
                            <p className="text-base m-0">树图区块链研究院院长</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">现任多伦多大学助理教授</li>
                                <li className="mt-1">麻省理工学院（MIT）计算机科学博士</li>
                                <li className="mt-1">本科毕业于清华大学姚班</li>
                                <li className="mt-1">国际信息学奥林匹克（IOI）两届金牌得主
                                </li>
                                <li className="mt-1">ACM-ICPC 程序设计竞赛区域赛冠军
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={wuming} alt="wuming" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">伍鸣</p>
                            <p className="text-base m-0">Conflux首席技术官</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">中国科学院计算机科学博士</li>
                                <li className="mt-1">本科毕业于中国科学技术大学</li>
                                <li className="mt-1">曾任微软亚洲研究院资深研究员</li>
                                <li className="mt-1">曾在多个顶级会议（SOSP、OSDI、NSDI 等）中发表多篇论文</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={yuanjie} alt="yuanjie" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">张元杰</p>
                            <p className="text-base m-0">Conflux联合创始人</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">布兰迪斯大学（Brandeis University）硕士</li>
                                <li className="mt-1">本科毕业于复旦大学</li>
                                <li className="mt-1">曾任职于北卡教堂山校友基金会和华泰招商母基金</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={veneris} alt="veneris" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">Andreas Veneris</p>
                            <p className="w-[300px] text-base m-0">多伦多大学电子与计算机工程系教授、计算机科学系教授</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">伊利诺伊大学香槟分校博士</li>
                                <li className="mt-1">获得“十年影响力论文奖”</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8} className="ml-[-2rem]">
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={peter} alt="peter" />
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
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={yichen} alt="yichen" />
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
                </Row>
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={baiyu} alt="baiyu" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">白鱼</p>
                            <p className="text-base m-0">SeeDAO 发起人</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">北京大学硕士</li>
                                <li className="mt-1">CryptoC 联合创始人</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] inline-block" src={tanghan} alt="tanghan" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">唐晗</p>
                            <p className="text-base m-0">SeeDAO 发起人</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">北大研究生辍学</li>
                                <li className="mt-1">CryptoC 联合创始人</li>
                                <li className="mt-1">中国早期加密艺术及NFT布道者</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        {/* div to make rectangle image circular*/}
                        <div className="w-[220px] h-[220px] overflow-hidden rounded-[50%] inline-block">
                            <img className="w-full" src={wuxiao} alt="wuxiao" />
                        </div>
                        <div className="w-[220px] mt-[4.25rem] text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">吴啸</p>
                            <p className="text-base m-0">ChainIDE 创始人</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">南京纯白矩阵科技有限公司首席执行官</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
