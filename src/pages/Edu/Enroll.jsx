import { Row, Col } from 'antd'
import host from '../../images/host.webp'
import logo from '../../images/homeLogo.webp'
import wechat from '../../images/wechat.png'

export default function Enroll() {
    return (
        <div className="h-[920px] bg-enroll bg-cover bg-center text-white tracking-wide">
            <Row className="pt-16 text-3xl">
                <Col span={24}>谁能参与?</Col>
            </Row>
            <Row className="pt-6 text-justify text-base">
                <Col span={6}></Col>
                <Col span={12}>
                    我们欢迎所有在校大学生/研究生报名参与，计算机相关专业或拥有区块链开发/创业/从业/参与经验者优先。如为非计算机专业的同学，我们建议您与计算机相关专业的学生组队参加。
                </Col>
                <Col span={6}></Col>
            </Row>
            <Row className="pt-16 text-3xl">
                <Col span={24}>参与形式</Col>
            </Row>
            <Row className="pt-6 text-justify text-base">
                <Col span={6}></Col>
                <Col span={12}>
                    北斗计划仅接受以团队（2~5人）的形式参与活动。如您是个人报名，则需接受主办方的协助组队，最终将仍以团队的形式参与活动。
                </Col>
                <Col span={6}></Col>
            </Row>
            <Row className="pt-20">
                <Col span={24}>
                    <button className="w-52 h-[4.5rem] bg-[#199EE0] text-[40px] tracking-[0.25rem] rounded-2xl hover:bg-sky-200 ">
                        <a className="text-white hover:text-white" href="https://shimo.im/forms/c9q8Wl9614ECaEQw/fill" target="_blank" rel="noreferrer">点击报名</a>
                    </button>
                </Col>
            </Row>
            <Row className="pt-16">
                <Col span={24} className="text-[15px]">
                    往期活动: 天枢、天璇
                </Col>
            </Row>
            <Row className="pt-4">
                <Col span={8} className="ml-8 text-lg text-right leading-[2.75rem]">
                    主办方:
                </Col>
                <Col span={1}></Col>
                <Col span={4} className="text-left">
                    <img className="inline-block w-[214px] h-[35px]" src={host} alt="host" />
                </Col>
                <Col span={8} className="ml-7 text-left">
                    <img className="inline-block w-[123px] h-[30px]" src={logo} alt="logo" />
                </Col>
            </Row>
            <Row className="pt-4 text-xl">
                <Col span={24}>联系我们:</Col>
            </Row>
            <Row className="pt-4 text-base">
                <Col span={8}></Col>
                <Col span={8} className="text-center">
                    <ul className="inline-block list-disc text-left m-0">
                        <li className="mt-1 text-center">关注conflux中文社区，获取北斗计划最新消息
                        
                            <img className="inline-block w-12 h-12" src={wechat} alt="wechat" />
                        </li>
                        <li className="mt-1">高校合作：edu@confluxnetwork.com</li>
                    </ul>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row className="pt-10 text-sm">
                <Col span={24}>*本活动最终解释权归Conflux Network所有</Col>
            </Row>
        </div>
    )
}