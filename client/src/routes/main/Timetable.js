import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useHistory, Link } from 'react-router-dom';
import '../../css/main/Timetable.css'

function Timetable() {
    return(
        <>
        <div className="timetable-container">
            <div className="title">코독한 시간표</div>
            <Table />
            <div className="nontable"></div>
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