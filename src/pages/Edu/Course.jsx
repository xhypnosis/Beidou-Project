import beidou from '../../images/beidou.svg'
import { Link } from 'react-router-dom'

export default function Course() {
    return (
        <div className="w-[1280px] h-auto bg-dome bg-fixed bg-cover">
            <div className="w-[1280px] h-[1200px] text-white text-center relative">
                <img className="pt-40 inline-block ml-14" src={beidou} alt="beidou" />
                <Link className="absolute text-white hover:text-white text-[40px] top-44 right-[9.5rem]" to="../dubhe">天枢</Link>
                <Link className="absolute text-white hover:text-white text-[18px] top-60 right-[9.5rem]" to="../dubhe">
                北斗计划2020课程
                </Link>
                <Link className="absolute text-white hover:text-white text-[40px] top-[22.9rem] right-[10.75rem]" to="../merak">天璇</Link>
                <Link className="absolute text-white hover:text-white text-[18px] top-[26.75rem] right-[10.75rem]" to="../merak">
                北斗计划2021课程
                </Link>
                <Link className="absolute text-white hover:text-white text-[40px] top-[30.4rem] right-[22.7rem]" to="../phecda">天玑</Link>
                <Link className="absolute text-white hover:text-white text-[18px] top-[34rem] right-[22.7rem]" to="../phecda">
                北斗计划2022课程
                </Link>
            </div>
        </div>
    )
}
