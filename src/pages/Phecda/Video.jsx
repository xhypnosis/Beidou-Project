import { Col, Row } from 'antd'

export default function Video2022() {
    return (
        <div className="bg-white">
            <div className="my-8">
                <Row className="h-[4.7rem] leading-[5rem] text-[2.35rem] text-left border-b border-black">
                    <Col span={8} className="border-r border-black">
                        <h2 className="ml-1">Seminar</h2>
                    </Col>
                    <Col span={16}>
                        <h2 className="pl-2 m-0">Lecture</h2>
                    </Col>
                </Row>
                <Row className="h-[1000px] text-right">
                    <Col span={8} className="border-r border-black">
                    </Col>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}
