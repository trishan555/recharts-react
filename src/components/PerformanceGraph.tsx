import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    Label,
    Legend,
} from 'recharts'

const data = [
    {
        time: '00:00:04',
        CPU: 0,
        Disk: 0,
        Memory: 32,
    },
    {
        time: '00:00:05',
        CPU: 3,
        Disk: 0,
        Memory: 32.3,
    },
    {
        time: '00:00:06',
        CPU: 12,
        Disk: 0,
        Memory: 33,
    },
    {
        time: '00:00:07',
        CPU: 11,
        Disk: 0,
        Memory: 32.7,
    },
    {
        time: '00:00:08',
        CPU: 4,
        Disk: 0,
        Memory: 32.7,
    },
    {
        time: '00:00:09',
        CPU: 3.5,
        Disk: 0,
        Memory: 32.5,
    },
    {
        time: '00:00:10',
        CPU: 7,
        Disk: 0,
        Memory: 32.6,
    },
    {
        time: '00:00:11',
        CPU: 4,
        Disk: 0,
        Memory: 32.5,
    },
    {
        time: '00:00:12',
        CPU: 4,
        Disk: 0,
        Memory: 32.5,
    },
    {
        time: '00:00:13',
        CPU: 3.8,
        Disk: 0,
        Memory: 32.5,
    },
    {
        time: '00:00:14',
        CPU: 3.9,
        Disk: 0,
        Memory: 32.5,
    },
    {
        time: '00:00:15',
        CPU: 11,
        Disk: 0,
        Memory: 32.3,
    },
    {
        time: '00:00:16',
        CPU: 61,
        Disk: 0,
        Memory: 33,
    },
    {
        time: '00:00:17',
        CPU: 8,
        Disk: 9,
        Memory: 33.2,
    },
    {
        time: '00:00:18',
        CPU: 2,
        Disk: 0,
        Memory: 33.2,
    },
    {
        time: '00:00:19',
        CPU: 6.5,
        Disk: 0,
        Memory: 31.7,
    },
    {
        time: '00:00:20',
        CPU: 26.7,
        Disk: 0,
        Memory: 31.4,
    },
    {
        time: '00:00:21',
        CPU: 5.7,
        Disk: 0,
        Memory: 32.5,
    },
    {
        time: '00:00:22',
        CPU: 10.5,
        Disk: 0,
        Memory: 32.3,
    },
    {
        time: '00:00:23',
        CPU: 5,
        Disk: 0,
        Memory: 31.3,
    },
    {
        time: '00:00:24',
        CPU: 8.5,
        Disk: 0,
        Memory: 31.6,
    },
    {
        time: '00:00:25',
        CPU: 6,
        Disk: 0,
        Memory: 31.2,
    },
    {
        time: '00:00:27',
        CPU: 28,
        Disk: 0,
        Memory: 31.8,
    },
    {
        time: '00:00:28',
        CPU: 7,
        Disk: 0,
        Memory: 32,
        metrics: 0,
    },
    {
        time: '00:00:29',
        CPU: 5,
        Disk: 0,
        Memory: 31.9,
        metrics: 0,
    },
    {
        time: '00:00:30',
        CPU: 7,
        Disk: 0,
        Memory: 32,
        metrics: 0,
    },
    {
        time: '00:00:31',
        CPU: 7.3,
        Disk: 0,
        Memory: 31.7,
        metrics: 0,
    },
    {
        time: '00:00:33',
        CPU: 6.8,
        Disk: 0,
        Memory: 32.5,
        metrics: 0,
    },
    {
        time: '00:00:34',
        CPU: 8.5,
        Disk: 0,
        Memory: 32.3,
        metrics: 0,
    },
    {
        time: '00:00:35',
        CPU: 15,
        Disk: 0,
        Memory: 31.7,
        metrics: 0,
    },
    {
        time: '00:00:36',
        CPU: 10.5,
        Disk: 0,
        Memory: 31.4,
        metrics: 0,
    },
    {
        time: '00:00:37',
        CPU: 5,
        Disk: 0,
        Memory: 32,
        metrics: 0,
    },
    {
        time: '00:00:38',
        CPU: 27.8,
        Disk: 0,
        Memory: 33.1,
        metrics: 0,
    },
    {
        time: '00:00:39',
        CPU: 7,
        Disk: 0,
        Memory: 33.3,
        metrics: 0,
    },
    {
        time: '00:00:40',
        CPU: 12,
        Disk: 0,
        Memory: 33.5,
        metrics: 0,
    },
    {
        time: '00:00:41',
        CPU: 5,
        Disk: 0,
        Memory: 33.6,
        metrics: 0,
    },
    {
        time: '00:00:42',
        CPU: 7,
        Disk: 0,
        Memory: 33.65,
        metrics: 0,
    },
    {
        time: '00:00:43',
        CPU: 33.7,
        Disk: 0,
        Memory: 33.8,
        metrics: 0,
    },
    {
        time: '00:00:44',
        CPU: 8,
        Disk: 0,
        Memory: 33.8,
        metrics: 0,
    },
    {
        time: '00:00:45',
        CPU: 12,
        Disk: 0,
        Memory: 33.9,
        metrics: 0,
    },
    {
        time: '00:00:46',
        CPU: 21,
        Disk: 0,
        Memory: 34,
        metrics: 0,
    },
    {
        time: '00:00:47',
        CPU: 7,
        Disk: 0,
        Memory: 34,
        metrics: 0,
    },
    {
        time: '00:00:48',
        CPU: 11.5,
        Disk: 0,
        Memory: 34.3,
        metrics: 0,
    },
    {
        time: '00:00:49',
        CPU: 11,
        Disk: 0,
        Memory: 33.1,
        metrics: 0,
    },
    {
        time: '00:00:50',
        CPU: 12,
        Disk: 0,
        Memory: 32.7,
        metrics: 0,
    },
    {
        time: '00:00:51',
        CPU: 36.5,
        Disk: 0,
        Memory: 33.3,
        metrics: 0,
    },
    {
        time: '00:00:52',
        CPU: 14,
        Disk: 0,
        Memory: 34.6,
        metrics: 0,
    },
    {
        time: '00:00:53',
        CPU: 21,
        Disk: 0,
        Memory: 34,
        metrics: 0,
    },
    {
        time: '00:00:55',
        CPU: 16.7,
        Disk: 0,
        Memory: 33.7,
        metrics: 0,
    },
    {
        time: '00:00:56',
        CPU: 7,
        Disk: 0,
        Memory: 33,
        metrics: 0,
    },
    {
        time: '00:00:57',
        CPU: 16,
        Disk: 0,
        Memory: 33.7,
        metrics: 0,
    },
    {
        time: '00:00:58',
        CPU: 16,
        Disk: 0,
        Memory: 33.7,
        metrics: 0,
    },
    {
        time: '00:00:59',
        CPU: 15.5,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:00',
        CPU: 9.5,
        Disk: 0,
        Memory: 34.5,
        metrics: 0,
    },
    {
        time: '00:01:01',
        CPU: 12,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:02',
        CPU: 12.5,
        Disk: 0,
        Memory: 35.7,
        metrics: 0,
    },
    {
        time: '00:01:03',
        CPU: 5,
        Disk: 0,
        Memory: 36.1,
        metrics: 0,
    },
    {
        time: '00:01:04',
        CPU: 20.7,
        Disk: 0,
        Memory: 36.2,
        metrics: 0,
    },
    {
        time: '00:01:05',
        CPU: 10,
        Disk: 0,
        Memory: 36.3,
        metrics: 0,
    },
    {
        time: '00:01:06',
        CPU: 19,
        Disk: 0,
        Memory: 36.3,
        metrics: 0,
    },
    {
        time: '00:01:08',
        CPU: 5.9,
        Disk: 0,
        Memory: 36.3,
        metrics: 0,
    },
    {
        time: '00:01:09',
        CPU: 16,
        Disk: 0,
        Memory: 36.3,
        metrics: 0,
    },
    {
        time: '00:01:10',
        CPU: 5.6,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:11',
        CPU: 16.4,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:12',
        CPU: 12.7,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:13',
        CPU: 10.5,
        Disk: 0,
        Memory: 35.2,
        metrics: 0,
    },
    {
        time: '00:01:14',
        CPU: 7,
        Disk: 0,
        Memory: 35.2,
        metrics: 0,
    },
    {
        time: '00:01:15',
        CPU: 15.2,
        Disk: 0,
        Memory: 35.2,
        metrics: 0,
    },
    {
        time: '00:01:16',
        CPU: 10.5,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:17',
        CPU: 16.5,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:18',
        CPU: 12,
        Disk: 0,
        Memory: 35.4,
        metrics: 0,
    },
    {
        time: '00:01:19',
        CPU: 2,
        Disk: 0,
        Memory: 35.3,
        metrics: 0,
    },
    {
        time: '00:01:20',
        CPU: 6,
        Disk: 0,
        Memory: 35.3,
        metrics: 0,
    },
    {
        time: '00:01:21',
        CPU: 6,
        Disk: 0,
        Memory: 34.7,
        metrics: 0,
    },
    {
        time: '00:01:22',
        CPU: 55,
        Disk: 9.4,
        Memory: 32.6,
        metrics: 0,
    },
    {
        time: '00:01:23',
        CPU: 7,
        Disk: 0,
        Memory: 32,
        metrics: 0,
    },
    {
        time: '00:01:24',
        CPU: 5.7,
        Disk: 0,
        Memory: 32,
        metrics: 0,
    },
    {
        time: '00:01:25',
        CPU: 29,
        Disk: 0,
        Memory: 32,
        metrics: 0,
    },
    {
        time: '00:01:26',
        CPU: 21,
        Disk: 0,
        Memory: 32.2,
        metrics: 0,
    },
    {
        time: '00:01:27',
        CPU: 7.2,
        Disk: 0,
        Memory: 32.5,
        metrics: 0,
    },
    {
        time: '00:01:28',
        CPU: 20.5,
        Disk: 0,
        Memory: 32.6,
        metrics: 0,
    },
    {
        time: '00:01:29',
        CPU: 8,
        Disk: 0,
        Memory: 33,
        metrics: 0,
    },
    {
        time: '00:01:30',
        CPU: 8.6,
        Disk: 0,
        Memory: 33,
        metrics: 0,
    },
    {
        time: '00:01:31',
        CPU: 17,
        Disk: 0,
        Memory: 34,
        metrics: 0,
    },
    {
        time: '00:01:32',
        CPU: 6,
        Disk: 0,
        Memory: 34,
        metrics: 0,
    },
    {
        time: '00:01:33',
        CPU: 5,
        Disk: 0,
        Memory: 34,
        metrics: 0,
    },
    {
        time: '00:01:35',
        CPU: 14,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:36',
        CPU: 8.7,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:37',
        CPU: 5.7,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:38',
        CPU: 7,
        Disk: 0,
        Memory: 35,
        metrics: 0,
    },
    {
        time: '00:01:39',
        CPU: 8,
        Disk: 0,
        Memory: 35.6,
        metrics: 0,
    },
    {
        time: '00:01:40',
        CPU: 7,
        Disk: 0,
        Memory: 35.7,
        metrics: 0,
    },
    {
        time: '00:01:41',
        CPU: 23.7,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:42',
        CPU: 9,
        Disk: 0,
        Memory: 36.5,
        metrics: 0,
    },
    {
        time: '00:01:43',
        CPU: 22,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:44',
        CPU: 8,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:45',
        CPU: 17,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:46',
        CPU: 6,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:47',
        CPU: 7,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:48',
        CPU: 11,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:49',
        CPU: 5,
        Disk: 0,
        Memory: 35.5,
        metrics: 0,
    },
    {
        time: '00:01:50',
        CPU: 7,
        Disk: 0,
        Memory: 35.5,
        metrics: 0,
    },
    {
        time: '00:01:51',
        CPU: 11,
        Disk: 0,
        Memory: 35.5,
        metrics: 0,
    },
    {
        time: '00:01:52',
        CPU: 8,
        Disk: 0,
        Memory: 35.5,
        metrics: 0,
    },
    {
        time: '00:01:53',
        CPU: 7,
        Disk: 0,
        Memory: 35.5,
        metrics: 0,
    },
    {
        time: '00:01:54',
        CPU: 8,
        Disk: 0,
        Memory: 35.5,
        metrics: 0,
    },
    {
        time: '00:01:55',
        CPU: 15.5,
        Disk: 0,
        Memory: 35.5,
        metrics: 0,
    },
    {
        time: '00:01:56',
        CPU: 7,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:57',
        CPU: 20,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:58',
        CPU: 10.5,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:01:59',
        CPU: 7,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
    {
        time: '00:02:00',
        CPU: 6.2,
        Disk: 0,
        Memory: 36,
        metrics: 0,
    },
]

const PerformanceGraph: React.FC = () => {
    return (
        <>
            <h1>CPU, Disk I/O, Memory Performance</h1>
            <ResponsiveContainer width={'100%'} height={600} min-width={300}>
                <LineChart
                    data={data}
                    margin={{ top: 30, right: 80, left: 20, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='time'>
                        <Label
                            value='Elapsed time (granularity: 1 sec)'
                            offset={-20}
                            position='insideBottom'
                        />
                    </XAxis>
                    <YAxis>
                        {' '}
                        <Label
                            value='Performance Metrics'
                            angle={-90}
                            position='left'
                            dy='-10'
                        />
                    </YAxis>
                    <Tooltip />
                    <Legend iconType='square' verticalAlign='top' height={36} />
                    <Line name='localhost CPU' dataKey='CPU' stroke='#554edd' />
                    <Line
                        name='localhost Disks I/O (x10)'
                        dataKey='Disk'
                        stroke='#e40cd9'
                    />
                    <Line
                        name='localhost Memory'
                        type='monotone'
                        dataKey='Memory'
                        stroke='#f41414'
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default PerformanceGraph
