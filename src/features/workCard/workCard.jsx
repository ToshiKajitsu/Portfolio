import React from 'react';
import './workCard.css';
import { useTheme } from '../../processes/contextTheme';

export const WorkCard = ({data}) => {
    const {theme} = useTheme();
    return <div>
                <div className='wrapper'>
                    <div className='workName'>
                        <h4>{data.siteName}</h4>
                        <div className="dateAndLvl">
                            <p className={`position position_${theme}`} >{data.grade}</p>
                            <p className={`dateExpirience dateExpirience_${theme}`}>{data.data}</p>
                        </div>
                        </div>
                        <div className='workInfo'>
                        <h4>{data.work}</h4>
                        <p>{data.workHistory}</p>
                    </div>
                </div>
                <div className="line"></div>
        </div>
}