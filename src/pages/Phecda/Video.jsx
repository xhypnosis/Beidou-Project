import { Col, Row } from 'antd'

export default function Video2022() {
    return (
        <div className="w-[1280px] h-auto bg-white">
            <br />
            <div className="w-[1280px] h-[900px]">
                <Row className="h-[4.7rem] leading-[5rem] text-[2.35rem] text-left border-b border-black mx-1">
                    <Col span={8} className="border-r border-black">
                        <h2 className="m-0">Seminar</h2>
                    </Col>
                    <Col span={16}>
                        <h2 className="pl-2 m-0">Lecture</h2>
                    </Col>
                </Row>
                <Row className="h-full text-right mx-1">
                    <Col span={8} className="border-r border-black">
                    </Col>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                    </Col>
                </Row>
            </div>
            <br />
        </div>
    )
}
