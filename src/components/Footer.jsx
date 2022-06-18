import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import twitter from '../images/twitter.webp'
import tele from '../images/tele.png'
import discord from '../images/discord.png'
import medium from '../images/medium.png'
import lin from '../images/in.png'

export default function Footer() {

    return (
        <div className="bg-white font-lato text-black shadow-[0_0_5px_rgba(0,0,0,0.9)]">
            <Row className="w-[1280px] h-25 text-sm m-auto">
                <Col span={9} className="relative">
                    <div className="absolute bottom-1 right-2 underline">
                        <span>
                            <a className="text-black hover:text-slate-900" href="https://confluxnetwork.org/" target="_blank" rel="noreferrer">©2020|Conflux&nbsp;Network</a>
                        </span>
                        <span className="ml-2 align-bottom">
                            <a className="text-black hover:text-slate-900" href="https://developer.conflux-chain.org/docs/introduction/en/conflux_overview" target="_blank" rel="noreferrer">Developer Docs</a>
                        </span>
                        <span className="ml-2">
                            <a className="text-black hover:text-slate-900" href="https://forum.conflux.fun/t/topic/1586" target="_blank" rel="noreferrer">FAQs</a>
                        </span>
                    </div>
                </Col>
                <Col span={7} className="relative">
                    <div className="absolute bottom-1 right-7 underline">
                        <span>
                            <a className="text-black hover:text-slate-900" href="https://bf0c23df-bcd2-4974-ab23-9252966af805.usrfiles.com/ugd/bf0c23_50a47a704adc4e6896dd6c5d12a17953.pdf" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>
                        </span>
                        <span className="ml-2">
                            <a className="text-black hover:text-slate-900" href="https://confluxnetwork.org/policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
                        </span>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="absolute bottom-0 left-32">
                        <ul className="m-0">
                            <li className="inline-block w-5 h-5">
                                <a href="https://twitter.com/Conflux_Network" target="_blank">
                                    <img src={twitter} alt="" />
                                </a>
                            </li>
                            <li className="inline-block w-5 h-5 ml-2.5">
                                <a href="https://t.me/Conflux_English" target="_blank">
                                    <img src={tele} alt="" />
                                </a>
                            </li>
                            <li className="inline-block w-5 h-5 ml-2.5">
                                <a href="https://discord.com/invite/aCZkf2C" target="_blank">
                                    <img src={discord} alt="" />
                                </a>
                            </li>
                            <li className="inline-block w-5 h-5 ml-2.5">
                                <a href="https://medium.com/conflux-network" target="_blank">
                                    <img src={medium} alt="" />
                                </a>
                            </li>
                            <li className="inline-block w-5 h-5 ml-2.5">
                                <a href="https://www.linkedin.com/company/confluxnetwork" target="_blank">
                                    <img src={lin} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}