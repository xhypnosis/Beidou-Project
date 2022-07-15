import { Col, Row } from 'antd'
import pdf from '../../images/pdf.webp'

export default function Courseware2020() {
    return (
        <div className="bg-dome bg-cover">
            <div className="h-[700px]">
                <div className="h-24 text-left font-lato font-bold text-white text-[15px]">
                    <h1 className="text-white leading-[5rem] text-[25px] font-bold ml-16 my-0 pt-2">课件资料</h1>
                    <Row className="ml-28 mr-40 mt-10 mb-36 leading-tight">
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/pre1stdraft.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-8">Presetation First Draft</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/prefinaldraft.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-8">Presetation Final Draft Outline</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec1.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-5">​Lecture 1 - Introduction Of Blockchain</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec2.1.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-5">​Lecture 2 - Cryptoeconomics - Token Economy 01</span>
                        </Col>
                        <Col span={4} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec2.2.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-5">Lecture 2 - Cryptoeconomics - Conflux Network 02</span>
                        </Col>
                    </Row>
                    <Row className="ml-28 mr-40 mt-36 leading-tight">
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec3.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-5">Lecture 3 - Fundamental Concepts & Tools </span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec4.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-8">Lecture 4 - Introduction to Smart Contracts  01</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec5.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-8">Lecture 5 - Introduction to smart contracts 02</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec6.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-8">​Lecture 6 - Gas and Gas Sponsorship in Conflux</span>
                        </Col>
                        <Col span={4} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E6%9E%A22020/%E8%AF%BE%E4%BB%B6/lec7.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-5">Lecture 7 - DeFi, Reconstruction and Innovation of Finance</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
