import { Col, Row } from 'antd'
import knowledge from '../../images/rewards/knowledge.svg'
import certificate from '../../images/rewards/certificate.svg'
import connections from '../../images/rewards/connections.svg'
import abroad from '../../images/rewards/abroad.svg'
import possibility from '../../images/rewards/possibility.svg'
import roadshow from '../../images/rewards/roadshow.svg'
import incentive from '../../images/rewards/incentive.svg'

export default function Reward() {
    return (
        <div className="w-[1280px] h-[900px] leading-6 tracking-normal">
            <Row className="mt-14 text-[40px] font-bold">
                <Col span={24}>参与者可以获得什么?</Col>
            </Row>
            <Row className="mt-28">
                <Col span={6}>
                    <img className="m-auto w-[40px] h-[40px]" src={knowledge} alt="knowledge" />
                    <h3 className="text-[22px] font-bold mt-6">知识</h3>
                    <p className="w-[210px] mx-auto mt-9 text-[15px] text-justify">系统性的区块链相关知识，涵盖行业背景、合约开发、通证经济</p>
                </Col>
                <Col span={6}>
                    <img className="m-auto w-[40px] h-[40px]" src={certificate} alt="certificate" />
                    <h3 className="text-[22px] font-bold mt-6">证书</h3>
                    <p className="w-[210px] mx-auto mt-9 text-[15px] text-justify">由Conflux及上海树图区块链研究院颁发的实习证明及结业证书</p>
                </Col>
                <Col span={6}>
                    <img className="m-auto w-[40px] h-[40px]" src={connections} alt="connections" />
                    <h3 className="text-[22px] font-bold mt-6">人脉</h3>
                    <p className="w-[210px] mx-auto mt-9 text-[15px] text-justify">与区块链KOL、顶尖计算机科学家、行业大佬、爱好者一起交流讨论，遇见与你志同道合的创业小伙伴</p>
                </Col>
                <Col span={6}>
                    <img className="m-auto w-[40px] h-[40px]" src={abroad} alt="abroad" />
                    <h3 className="text-[22px] font-bold mt-6">海外交流</h3>
                    <p className="w-[210px] mx-auto mt-9 text-[15px] text-justify">夺冠团队将被邀请赴海外高校交流学习。所有费用由主办方赞助支付</p>
                </Col>
            </Row>
            <Row className="mt-24">
                <Col span={6}>
                    <img className="m-auto w-[40px] h-[40px]" src={possibility} alt="possibility" />
                    <h3 className="text-[22px] font-bold mt-6">无限可能</h3>
                    <p className="w-[210px] mx-auto mt-9 text-[15px] text-justify">优秀项目有机会进入Conflux Ecosystem Grants Program 获得孵化支持，参与者有机会获得Conflux校招直通卡、收到毕业offer，赢取进入区块链行业工作的机会</p>
                </Col>
                <Col span={6}>
                    <img className="m-auto w-[40px] h-[40px]" src={roadshow} alt="roadshow" />
                    <h3 className="text-[22px] font-bold mt-6">线下路演</h3>
                    <p className="w-[210px] mx-auto mt-9 text-[15px] text-justify">排名前三的团队可携创业项目参加Conflux及上海树图区块链研究院组织的线下路演</p>
                </Col>
                <Col span={6}>
                    <img className="m-auto w-[40px] h-[40px]" src={incentive} alt="incentive" />
                    <h3 className="text-[22px] font-bold mt-6">经济奖励</h3>
                    <p className="w-[210px] mx-auto mt-9 text-[15px] text-center">总奖池价值30万RMB</p>
                </Col>
                <Col span={6}></Col>
            </Row>
        </div>
    )
}