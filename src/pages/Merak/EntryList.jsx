import { Col, Row } from 'antd'
import entryList from '../../images/entrylist.webp'

export default function List2021() {
    return (
        <div className="w-[1280px] h-auto bg-[#323232]">
            <div className="text-white text-center">
                <img className="inline-block w-[606px] h-[2570px]" src={entryList} alt="entryList" />
            </div>
        </div>
    )
}
