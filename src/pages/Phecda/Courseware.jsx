import { Col, Row } from 'antd'
import pdf from '../../images/pdf.webp'

export default function Courseware2022() {
    return (
        <div className="bg-dome bg-cover">
            <div className="h-[700px]">
                <div className="h-24 text-left font-lato font-bold text-white text-[15px]">
                    <h1 className="text-white leading-[5rem] text-[25px] font-bold ml-16 my-0 pt-2">课件资料</h1>
                    <Row className="ml-28 mr-40 mt-10 mb-36 leading-tight">
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day3-web3%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD-anyweb/%E8%AF%BE%E4%BB%B6/anyweb3-proj.pptx" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-8">Lec 2-3 Anyweb 开发实践</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%8E%912022/week%201/day3-jugugu/ppt/%E5%A6%82%E4%BD%95%E6%89%93%E9%80%A0%E4%B8%80%E4%B8%AA%E5%90%88%E8%A7%84.pptx" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-8">Lec 2-4 如何打造一个合规、安全、通用的web3账户体系</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://conflux-edu.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%92%872021/%E8%AF%BE%E4%BB%B6/lec3.1.pptx" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-5">​Lecture 3.1 - JS-SDK和开发工具的介绍与使用</span>
                        </Col>
                        <Col span={5} className="text-center">

                        </Col>
                        <Col span={4} className="text-center">

                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
