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
} from 'recharts'

const data = [
    {
        name: '0sec',
        time: 20.7,
    },
    {
        name: '27sec',
        time: 21,
    },
    {
        name: '30sec',
        time: 23,
    },
    {
        name: '51sec',
        time: 22.6,
    },
    {
        name: '53sec',
        time: 22,
    },
    {
        name: '1min 18sec',
        time: 23,
    },
    {
        name: '1min 21sec',
        time: 23.5,
    },
    {
        name: '1min 30sec',
        time: 19.7,
    },
    {
        name: '1min 45sec',
        time: 19.7,
    },
    {
        name: '1min 48sec',
        time: 20.6,
    },
]

const LineBar: React.FC = () => {
    return (
        <>
            <h1>Average Response Time</h1>
            <ResponsiveContainer width={'100%'} height={300} min-width={300}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 80, left: 20, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name'>
                        <Label
                            value='Time per resourse'
                            offset={-20}
                            position='insideBottom'
                        />
                    </XAxis>
                    <YAxis>
                        {' '}
                        <Label
                            value='Time'
                            angle={-90}
                            position='left'
                            dy='-10'
                        />
                    </YAxis>
                    <Tooltip />

                    <Line dataKey='time' stroke='#8884d8' />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default LineBar
