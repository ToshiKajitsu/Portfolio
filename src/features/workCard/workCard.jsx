import React from 'react';
import './workCard.css';

export const WorkCard = ({data}) => {

    return <div>
                <div className='wrapper'>
                    <div className='workName'>
                        <h4>{data.siteName}</h4>
                        <div className="dateAndLvl">
                            <p>{data.grade}</p>
                            <p>{data.data}</p>
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