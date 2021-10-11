import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useHistory, Link } from 'react-router-dom';
import '../../css/main/Timetable.css'

function Timetable() {
    const [nonTime, setNonTime] = useState([])
    return(
        <>
        <div className="timetable-container">
            <div className="title">코독한 시간표</div>
            <Table />
            {/* 시간이 배정되어있지 않은 수업 ex)정보적 사고 */}
            {
                nonTime.length
                ? <div className="nontable">있음?</div>
                : null
            }
            <div>타입스크립트</div>
            
        </div>
        </>
    )
}

function Table(){
    const [days, setDays] = useState(['월','화','수','목','금'])
    const [times, setTimes] = useState([1,2,3,4,5,6,7])
    return(
        <>
        <div className="table-container">
            {/* 몇 교시까지 수업이 있는지 */}
            <div className="row">
                <div>.</div>
                {
                    times.map((time)=>{
                        return(
                            <div className="col">{time}</div>
                        )
                    })
                }
            </div>
            
            {/* 요일 별로 돌면서 시간표 채우기 */}
            {
                days.map((day)=>{
                    return(
                        <>
                        <div className="row">
                            <div>{day}</div>
                            <div className="col">
                            {
                                times.map((time)=>{
                                    return(
                                        <div></div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        </>
                    )
                })
            }
            
        </div>
        </>
    )
}

export default Timetable;