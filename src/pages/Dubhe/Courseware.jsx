import { Col, Row } from 'antd'
import pdf from '../../images/pdf.webp'

export default function Courseware2020() {
    return (
        <div className="w-[1280px] h-auto bg-dome bg-contain">
            <div className="w-[1280px] h-[700px]">
                <div className="h-24 text-left font-lato font-bold text-white text-[15px]">
                    <h1 className="text-white leading-[5rem] text-[25px] font-bold ml-16 my-0 pt-2">课件资料</h1>
                    <Row className="ml-28 mr-40 mt-10 mb-36 leading-tight">
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_2f69e8ced3674a69bc8ca3a75b5a1cc6.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-8">Presetation First Draft</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_55d26a082074480c868f5767683ae74e.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-8">Presetation Final Draft Outline</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_7e4f1d7ff98b461e949b41ca89dca7a0.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-5">​Lecture 1 - Introduction Of Blockchain</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_ace78a3cc4fb4cf4a2b0d35bab62ba49.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-5">​Lecture 2 - Cryptoeconomics - Token Economy 01</span>
                        </Col>
                        <Col span={4} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_1cd8d042c8464ca8936df998f76ab7e2.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[140px] mt-5">Lecture 2 - Cryptoeconomics - Conflux Network 02</span>
                        </Col>
                    </Row>
                    <Row className="ml-28 mr-40 mt-36 leading-tight">
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_7dae5231ade149bdbbaaad207739cccb.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-5">Lecture 3 - Fundamental Concepts & Tools </span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_9fea14b3db7a4a2ead4683323be4252f.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-8">Lecture 4 - Introduction to Smart Contracts  01</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_a83a71fe93bf47989a515d128da7638c.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-8">Lecture 5 - Introduction to smart contracts 02</span>
                        </Col>
                        <Col span={5} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_40b206c0953340b2a58af42dd0da6e84.pdf" target="_blank" rel="noreferrer">
                                <img className="w-[50px]" src={pdf} alt="" />
                            </a>
                            <br />
                            <span className="inline-block w-[160px] mt-8">​Lecture 6 - Gas and Gas Sponsorship in Conflux</span>
                        </Col>
                        <Col span={4} className="text-center">
                            <a className="inline-block" href="https://dad27e24-a452-49f5-a0a4-4e02f070a8ab.filesusr.com/ugd/6e6df2_4f1b73ea872d4e0a95873d75cde1afdc.pdf" target="_blank" rel="noreferrer">
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
