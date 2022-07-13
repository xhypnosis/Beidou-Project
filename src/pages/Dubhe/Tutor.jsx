import longfan from '../../images/tutors/longfan.webp'
import wuming from '../../images/tutors/wuming.webp'
import yuanjie from '../../images/tutors/yuanjie.webp'
import veneris from '../../images/tutors/veneris.webp'
import peter from '../../images/tutors/Peter.webp'
import zhoudong from '../../images/tutors/zhoudong.webp'
import liuyanpei from '../../images/tutors/liuyanpei.webp'
import zhangjunjing from '../../images/tutors/zhangjunjing.webp'
import eden from '../../images/tutors/Eden Dhaliwal.webp'
import { Col, Row } from 'antd'

export default function Tutor2020() {
    let style = {
        textShadow: '0px 5px 0px rgba(0, 0, 0, 0.298)',
    }

    return (
        <div className="bg-[#2F2E2E]">
            <div className="text-white tracking-normal pb-36">
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
                
                <Row className="mt-20">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={longfan} alt="longfan" />
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
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={wuming} alt="wuming" />
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
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={zhoudong} alt="zhoudong" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">周冬</p>
                            <p className="w-[280px] text-base m-0">清华大学交叉信息研究院助理教授</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">卡耐基梅隆大学（CMU）计算机科学博士</li>
                                <li className="mt-1">本科毕业于清华大学姚班</li>
                                <li className="mt-1">国际信息学奥林匹克（IOI）金牌得主</li>
                                <li className="mt-1">ACM-ICPC 程序设计竞赛区域赛冠军</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={yuanjie} alt="yuanjie" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">张元杰</p>
                            <p className="text-base m-0">Conflux联合创始人</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">布兰迪斯大学（andeis University）硕士</li>
                                <li className="mt-1">本科毕业于复旦大学</li>
                                <li className="mt-1">曾任职于北卡教堂山校友基金会和华泰招商母基金</li>
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
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={liuyanpei} alt="yichen" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">刘严培</p>
                            <p className="w-[250px] text-base m-0">Conflux 核心系统开发工程师</p>
                            <ul className="w-[280px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">本科毕业于上海交通大学 ACM 班</li>
                                <li className="mt-1">2ACM-ICPC 程序设计竞赛世界总决赛亚军
                                </li>
                                <li className="mt-1">多次入围 Google Code Jam、Facebook Hackercup 等编程大赛世界总决赛</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-32">
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={veneris} alt="veneris" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">Andreas Veneris</p>
                            <p className="w-[300px] text-base m-0">多伦多大学电子与计算机工程系教授、计算机科学系教授</p>
                            <ul className="w-[300px] ml-7 mt-9 mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">伊利诺伊大学香槟分校博士</li>
                                <li className="mt-1">获得“十年影响力论文奖”</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={zhangjunjing} alt="zhangjunjing" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">章俊晶</p>
                            <p className="text-base m-0">鲸略区块链CEO</p>
                            <ul className="w-[280px] ml-7 mt-[3.75rem] mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">复旦大学软件工程毕业</li>
                                <li className="mt-1">全球顶尖IT企业10年技术研发管理经验</li>
                                <li className="mt-1">金融行业和区块链持续创业者</li>
                                <li className="mt-1">拥有多项技术专利</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        <img className="rounded-[50%] w-[220px] h-[220px] m-auto" src={eden} alt="eden" />
                        <div className="w-[220px] mt-20 text-left inline-block">
                            <p className="text-[22px] font-bold mb-1">Eden Dhaliwal</p>
                            <p className="text-base m-0">Conflux 海外运营总监</p>
                            <ul className="w-[280px] ml-7 mt-[3.75rem] mb-0 list-disc text-left text-[15px]">
                                <li className="mt-1">多伦多大学罗特曼管理学院工商管理硕士</li>
                                <li className="mt-1">前 Outlier Ventures 合伙人、密码经济学主管</li>
                                <li className="mt-1">Lia 协会创始成员</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
