import { Row, Col } from 'antd'
import rect from '../../images/rectangle.svg'
import institution from '../../images/institution.webp'
import logo from '../../images/homeLogo.webp'

export default function Edu() {
    return (
        <div className="w-[1280px] h-auto bg-back bg-fixed bg-cover">
            <div className="w-[1280px] h-[1750px] text-white">
                <div className="pt-20 tracking-normal font-sans">
                    <h1 className="text-[90px] font-sans text-white font-normal">Conflux 北斗计划</h1>
                    <p className="text-[24px] font-medium">
                        大学生区块链创业营
                    </p>
                </div>
                <div className="m-auto pt-20 w-[806px] tracking-normal">
                    <h1 className="text-[60px] text-white">什么是北斗计划</h1>
                    <p className="text-[18px] font-medium text-justify leading-8">
                        北斗计划是上海树图区块链研究院和Conflux基金会主办的系列大学生创业营活动，于每年暑期开放。自2020年启动以来，已成功举办了北斗计划天枢和天璇两期活动。
                    </p>
                    <h6 className="text-white text-xl metro-bold text-left leading-8">[我们的宗旨]</h6>
                    <p className="text-[18px] font-medium text-justify leading-8">
                        北斗计划旨在通过集训+创业营的形式为更多优秀的在校大学生提供提供一个设计创意思路、开发产品原型、创建解决方案和赢取大赛奖品的平台，致力于为区块链行业培养优质人才，发掘和孵化优质的大学生项目。
                    </p>
                    <h6 className="text-white text-xl metro-bold text-left leading-8">[我们提供什么]</h6>
                    <p className="text-[18px] font-medium text-justify leading-8">
                        北斗计划结合区块链行业的热点，为参与者提供涵盖基础知识、热点用例、合约开发、开发工具等系列课程，同时设有在线研讨会和1对1指导的时间，为参与者提供与海内外顶尖高校师资及行业优秀从业者直接交流的机会。与此同时，北斗计划设置丰厚奖金，用于奖励在活动中取得优异成绩的参与者。
                    </p>
                </div>
                <div className="mt-20">
                    <h2 className="text-4xl text-white">主办方介绍</h2>
                    <Row className="mt-20">
                        <Col span={12} className="text-center relative">
                            <img className="inline-block" src={rect} alt="rectangle" />
                            <img className="absolute inline-block w-52 h-20 left-64 top-16" src={institution} alt="institution" />
                            <p className="absolute inline-block left-[17.5rem] top-[10.75rem] text-[15px]">上海科委下属研究机构</p>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <p className="ml-[-0.75rem] mt-5 text-[15px] text-justify w-[433px] leading-normal tracking-normal">树图区块链研究院在上海市政府的关心支持下，立足 Conflux 区块链底层系统公链的研发而创立，由多伦多大学教授龙凡博士创始发起，华人唯一图灵奖得主，著名计算机科学家姚期智院士担任首席科学家。核心研发团队平均年龄仅 30 岁，他们主要来自清华大学“姚班”或海外美国麻省理工学院（MIT）、卡耐基梅隆大学（CMU）、伊利诺伊大学香槟分校（UIUC）、上海交大、中国科技大学等名校计算机专业博士，研发团队几乎包括了计算机系统和密码学领域的顶尖华人科学家。</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} className="text-center relative">
                            <img className="inline-block" src={rect} alt="rectangle" />
                            <img className="absolute inline-block w-52 h-12 left-64 top-16" src={logo} alt="logo" />
                            <p className="absolute w-[234px] inline-block left-60 top-32 text-[15px]">世界级明星公链，清华姚班团队，获红杉、百度风投Fundamental Labs等多家资本投资。</p>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <p className="ml-[-0.75rem] mt-5 text-[15px] text-justify w-[433px] leading-normal tracking-normal">Conflux 致力于打造下一代高性能的公链平台。截至目前 Conflux 是第一个， 亦是唯一一个在不牺牲任何去中心化程度及安全性的情况下实现高 TPS 的公有链。Conflux 巧妙地使用自主研发的基于树图 TG(Tree-Graph)结构的可扩容共识算法，解决了高并发网络中因分叉造成的计算资源浪费和随之降低的安全性问题，使共识不再是区块链性能的瓶颈。Conflux 第一阶段会采用 PoW(工作 量证明机制，Proof of Work)达成共识。 值得一提的是，Conflux 使用自主研发的基于树图 TG 结构的可扩容的共识算法，在不牺牲任何去中心化程度的情况下，在内部测试网中实现了 3000~ 6000 TPS 的高吞吐量，行业内遥遥领先。</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
