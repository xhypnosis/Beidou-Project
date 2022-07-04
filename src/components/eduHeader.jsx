import { Col, Row, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../images/homelogo.webp'

export default function eduHeader() {
    const menu = (
        <Menu
            style={{ background: "#999999", width: 132, textAlign: "center", marginTop: "10px" }}
            items={[
                {
                    key: '2020',
                    label: (<Link style={{ color: "#404040" }} className="text-lg font-jockey font-semibold" to="../dubhe">天枢 2020</Link>),
                },
                {
                    key: '2021',
                    label: (<Link style={{ color: "#404040" }} className="text-lg font-jockey font-semibold" to="../merak">天璇 2021</Link>),
                },
                {
                    key: '2022',
                    label: (<Link style={{ color: "#404040" }} className="text-lg font-jockey font-semibold" to="../phecda">天玑 2022</Link>),
                },
            ]}
        />
    )

    return (
        <div className="bg-black w-full">
            <Row className="h-25 text-[18px] text-white m-auto">
                <Col className="leading-[6rem]" span={4}>
                    <img className="inline-block h-[38px]" src={logo} alt="logo" />
                </Col>
                <Col className="leading-[6.25rem] ml-7 font-jockey font-semibold" span={15}>
                    <nav className="w-[800px] m-auto">
                        <ul className="m-0">
                            <li className="inline-block w-[150px]">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to="/">首页</Link>
                            </li>
                            <li className="inline-block w-[150px]">
                                <Dropdown overlay={menu} placement="bottom">
                                    <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to="course">课程</Link>
                                </Dropdown>
                            </li>
                            <li className="inline-block w-[150px]">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to="reward">奖励</Link>
                            </li>
                            <li className="inline-block w-[170px]">
                                <Link className="text-white hover:opacity-40 hover:text-zinc-500 focus:text-[#199EE0]" to="enroll">报名方式</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col span={5}></Col>
            </Row>
        </div>
    )
}