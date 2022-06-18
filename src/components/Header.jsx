import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../images/homelogo.webp'

export default function Header() {

    return (
        <div className="bg-black w-[1280px]">
            <Row className="w-[1280px] h-25 text-[18px] text-white m-auto">
                <Col className="leading-[6rem]" span={4}>
                    <img className="inline-block h-[38px]" src={logo} alt="logo" />
                </Col>
                <Col className="leading-[6.25rem] ml-2 font-jockey font-semibold" span={16}>
                    <nav>
                        <ul>
                            <li className="inline-block">
                                <Link className="text-white hover:text-zinc-500 focus:text-[#199EE0]" to="/phecda2022">北斗计划·天玑(2022)介绍</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:text-zinc-500 focus:text-[#199EE0]" to="/phecda2022/catalogue">课程目录</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:text-zinc-500 focus:text-[#199EE0]" to="/phecda2022/video">课程录屏</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:text-zinc-500 focus:text-[#199EE0]" to="/phecda2022/courseware">课件下载</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:text-zinc-500 focus:text-[#199EE0]" to="/phecda2022/reward">课程奖励</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:text-zinc-500 focus:text-[#199EE0]" to="/phecda2022/tutor">导师介绍</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:text-zinc-500 focus:text-[#199EE0]" to="/phecda2022/entry-list">参赛团队名单</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col span={4} className="-ml-14">
                   <span className="text-[14px] leading-[11rem] font-sans font-semibold underline">北斗计划·天玑(2022)</span>
                   </Col>
            </Row>
        </div>
    )
}