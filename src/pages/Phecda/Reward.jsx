import { Col, Row } from 'antd'
import reward from '../../images/pyramid.svg'

export default function Reward2022() {
    return (
        <div className="bg-space bg-fixed bg-cover">
            <div className="h-[1000px] text-white">
                <img className="mt-24 h-7/10 inline-block" src={reward} alt="" />
            </div>
        </div>
    )
}
