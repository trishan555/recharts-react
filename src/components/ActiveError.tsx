import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Line,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
} from 'recharts'

const ActiveError: React.FC = () => {
    const data = [
        { x: '0:00:00', y: 0, z: 0 },
        { x: '0:01:00', y: 0, z: 120 },
        { x: '0:02:00', y: 3.43, z: 240 },
        { x: '0:03:00', y: 35.4, z: 360 },
        { x: '0:04:00', y: 44.2, z: 480 },
        { x: '0:05:00', y: 51.7, z: 600 },
        { x: '0:06:00', y: 61.5, z: 720 },
        { x: '0:07:00', y: 63.0, z: 840 },
        { x: '0:08:00', y: 65.2, z: 960 },
        { x: '0:09:00', y: 69.7, z: 1000 },
        { x: '0:10:00', y: 44.9, z: 1000 },
    ]

    return (
        <>
            <h1>Number of active users vs total errors with time</h1>
            <ResponsiveContainer width={'100%'} height={600} min-width={300}>
                <LineChart
                    margin={{ top: 30, right: 60, left: 60, bottom: 30 }}
                    data={data}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='x' />
                    <YAxis yAxisId='left-axis' />
                    <YAxis yAxisId='right-axis' orientation='right' />
                    <Tooltip />
                    <Legend iconType='square' verticalAlign='top' height={36} />
                    <Line
                        name='Total errors %'
                        yAxisId='left-axis'
                        dataKey='y'
                        stroke='#1e14e7'
                    />
                    <Line
                        name='Active users'
                        yAxisId='right-axis'
                        dataKey='z'
                        stroke='black'
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default ActiveError
