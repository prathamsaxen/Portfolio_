import React from 'react';
import styles from './Github.module.css';
import GitHubCalendar from 'react-github-calendar';
import Tooltip from '@mui/material/Tooltip';

function Github() {
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h2>Github Contributions</h2>
                <div className={styles.chart}>
                    <GitHubCalendar
                        username='prathamsaxen'
                        theme={{
                            light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
                            dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479']
                        }}
                        style={{
                            color: '#FFFFFF'
                        }}
                        renderBlock={(block, activity) => <Tooltip title={`${activity.count} activities on ${activity.date}`}>{block}</Tooltip>}
                    />
                </div>
            </div>
        </div>
    );
}

export default Github;
