import { Col, Row } from 'antd'
import beidou from '../../images/beidou.svg'
import { Link } from 'react-router-dom'

export default function Course() {
    return (
        <div className="bg-dome bg-fixed bg-cover">
            <div className="h-[1200px] text-white text-center">
                <Row className="pt-40">
                    <Col span={1}></Col>
                    <Col span={21}>
                        <div className="relative w-[1200px] m-auto">
                            <img className="inline-block pl-10" src={beidou} alt="beidou" />
                            <Link className="absolute text-white hover:text-white text-[40px] top-3 right-[7.5rem]" to="../dubhe">天枢</Link>
                            <Link className="absolute text-white hover:text-white text-[18px] top-20 right-[7.5rem]" to="../dubhe">
                                北斗计划2020课程
                            </Link>
                            <Link className="absolute text-white hover:text-white text-[40px] top-[12.65rem] right-[8.75rem]" to="../merak">天璇</Link>
                            <Link className="absolute text-white hover:text-white text-[18px] top-[16.75rem] right-[8.75rem]" to="../merak">
                                北斗计划2021课程
                            </Link>
                            <Link className="absolute text-white hover:text-white text-[40px] bottom-32 right-[20.75rem]" to="../phecda">天玑</Link>
                            <Link className="absolute text-white hover:text-white text-[18px] bottom-24 right-[20.75rem]" to="../phecda">
                                北斗计划2022课程
                            </Link>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                {/* <img className="pt-40 inline-block ml-14" src={beidou} alt="beidou" /> */}
                {/* <Link className="absolute text-white hover:text-white text-[40px] top-44 right-[9.5rem]" to="../dubhe">天枢</Link>
                <Link className="absolute text-white hover:text-white text-[18px] top-60 right-[9.5rem]" to="../dubhe">
                    北斗计划2020课程
                </Link>
                <Link className="absolute text-white hover:text-white text-[40px] top-[22.9rem] right-[10.75rem]" to="../merak">天璇</Link>
                <Link className="absolute text-white hover:text-white text-[18px] top-[26.75rem] right-[10.75rem]" to="../merak">
                    北斗计划2021课程
                </Link>
                <Link className="absolute text-white hover:text-white text-[40px] top-[30.4rem] right-[22.7rem]" to="../phecda">天玑</Link>
                <Link className="absolute text-white hover:text-white text-[18px] top-[34rem] right-[22.7rem]" to="../phecda">
                    北斗计划2022课程
                </Link> */}
            </div>
        </div>
    )
}
