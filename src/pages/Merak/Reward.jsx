import { Col, Row } from 'antd'
import reward from '../../images/reward 2021.svg'

export default function Reward2021() {
    return (
        <div className="bg-space bg-fixed bg-cover">
            <div className="h-[800px] text-white">
                <img className="inline-block" src={reward} alt="" />
            </div>
        </div>
    )
}
