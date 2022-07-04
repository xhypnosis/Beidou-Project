import { Col, Row } from 'antd'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/homelogo.webp'

export default function Header() {
    let location = useLocation()
    // let reg = /\/([^\/]*)\//
    let reg1 = /\/(\S*)\//
    let reg2 = /\/(\S*)/
    let star
    if(location.pathname.match(reg1)) {
        star = location.pathname.match(reg1)[0]
    }else {
        star = location.pathname.match(reg2)[0] + "/"
    }
    
    let beidou = {
        dubhe: "天枢(2020)",
        merak: "天璇(2021)",
        phecda: "天玑(2022)"
    }

    const [year, setYear] = useState(beidou.dubhe)

    useEffect(() => {
        let star
        if(location.pathname.match(reg1)) {
            star = location.pathname.match(reg1)[1]
        }else {
            star = location.pathname.match(reg2)[0]
            star = star.slice(1)
        }

        if(star=="dubhe") {
            let list = document.querySelector("#list")
            let li = document.getElementsByTagName("li")
            list.style.display = "none"
            li[0].style.width = "200px"
            for(let i=1; i<6; i++) {
                li[i].style.width = "95px"
            }
        }else if(star=="merak") {
            let catalogue = document.querySelector("#catalogue")
            let link = document.querySelector("#catalogueLink")
            link.style.display = "inline"
            catalogue.style.display = "none"
        }
        setYear(beidou[star])
    })

    return (
        <div className="bg-black w-full">
            <Row className="h-25 text-[18px] text-white m-auto">
                <Col className="leading-[6rem]" span={4}>
                    <img className="inline-block h-[38px]" src={logo} alt="logo" />
                </Col>
                <Col className="leading-[6.25rem] ml-2 font-jockey font-semibold" span={16}>
                    <nav className="w-[860px] m-auto">
                        <ul className="m-0">
                            <li className="inline-block">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to={star}>北斗计划·{year}介绍</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link id="catalogue" className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to={star+"catalogue"}>课程目录</Link>
                                <a id="catalogueLink" className="hidden text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" href="https://shimo.im/docs/loqeW9wjyMS5elAn" target="_blank" rel="noreferrer">课程目录</a>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to={star+"video"}>课程录屏</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to={star+"courseware"}>课件下载</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to={star+"reward"}>课程奖励</Link>
                            </li>
                            <li className="inline-block ml-6">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to={star+"tutor"}>导师介绍</Link>
                            </li>
                            <li id="list" className="inline-block ml-6">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to={star+"entry-list"}>参赛团队名单</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col span={4} className="-ml-14">
                   <span className="text-[14px] leading-[11rem] font-sans font-semibold underline">北斗计划·{year}</span>
                   </Col>
            </Row>
        </div>
    )
}