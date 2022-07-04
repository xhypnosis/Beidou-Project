import { Col, Row } from 'antd'
import balloon from '../../images/balloon.webp'
import mortarboard from '../../images/mortarboard.webp'

export default function Reward2020() {
    return (
        <div className="bg-space bg-cover">
            <div className="h-[1180px] text-white">
                <Row className="py-10">
                    <Col span={11} className="text-right pr-2">
                        <img className="inline-block w-[200px] h-[200px]" src={balloon} alt="" />
                    </Col>
                    <Col span={13} className="text-left pl-12 pt-4">
                        <h3 className="text-white text-[27px]">评审</h3>
                        <p className="w-[460px] text-justify text-[17px] tracking-normal mt-14 leading-[1.9rem]">
                            <span>总奖池价值30万人民币的 Token，根据队伍评分排名（队伍相互打分和评审会打分）、所有队伍整体完成情况、各队伍完成情况，这三方因素分配奖励：</span>
                            
                            <span>a. 队伍相互打分：以队伍为单位进行打分，从整体印象，代码编写，现有问题，解决方法，未来发展五方面进行评分。每个分项最高5分，共计25分。仅限完成创业营的队伍*。</span>
                            
                            <span>b. 评审会打分:每位评审从整体印象，代码编写，现有问题，解决方法，未来发展五方面进行评分。每个分项最高25分，共计125分。</span>
                            
                            <span>每个队伍评分为 a、b 两项的平均数相加，总和最高为150分，根据总分对各小组进行排序。</span>
                            
                            <span>c.所有队伍整体完成情况：如最终各队伍完成度及项目质量相似，则奖金分配更趋于平均。如整体完成度差距过大，则更优质的队伍得到更多奖金。</span>
                            
                            <span>d.各队伍完成情况：根据评分标准，如：完成度及可实现性更高、内容更丰富的队伍，获得的奖金更多。</span>
                            
                            <span>*完成创业营指的是全程跟随课程进度学习，并且完成第12周的Presentation+上传code环节。</span>
                        </p>
                    </Col>
                </Row>
                <Row className="mt-8">
                    <Col span={3}></Col>
                    <Col span={8} className="text-left ml-3">
                        <h3 className="text-white text-[27px]">奖励</h3>
                        <p className="w-[460px] text-justify text-[17px] tracking-normal mt-14 leading-[1.9rem]">
                            <span>排名第1的团队可获得赴海外高校交流机会（包机酒、签证自备）；</span>
                            
                            <span>排名前3的团队可获得在各大区块链峰会上进行路演机会；</span>
                            
                            <span>所有参与并完成全部课程的队伍均可获得Conflux Network出具的实习证明及上海树图区块链研究院颁发的结业证书，其中优秀者可获得Conflux Network校招面试直通卡，跳过校招流程直接参加面试、获取毕业offer。</span>
                        </p>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={8} className="text-left">
                        <img className="inline-block w-[176px] h-[138px] mt-16" src={mortarboard} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
