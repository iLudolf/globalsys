import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import { Container, Title, Hr } from './styles'

const data = [
  {
    id: 'finland',
    color: 'hsl(24, 70%, 50%)',
    data: [
      {
        x: 0,
        y: 1500,
      },
      {
        x: 1,
        y: 1580,
      },
      {
        x: 2,
        y: 1960,
      },
      {
        x: 3,
        y: 1960,
      },
      {
        x: 4,
        y: 2620,
      },
      {
        x: 5,
        y: 1930,
      },
      {
        x: 6,
        y: 2720,
      },
      {
        x: 7,
        y: 800,
      },
      {
        x: 8,
        y: 970,
      },
      {
        x: 9,
        y: 2440,
      },
      {
        x: 10,
        y: 1370,
      },
      {
        x: 11,
        y: 1540,
      },
      {
        x: 12,
        y: 1360,
      },
      {
        x: 13,
        y: 2680,
      },
      {
        x: 14,
        y: 2120,
      },
      {
        x: 15,
        y: 1140,
      },
      {
        x: 16,
        y: 1860,
      },
      {
        x: 17,
        y: 1150,
      },
      {
        x: 18,
        y: 2620,
      },
      {
        x: 19,
        y: 1240,
      },
      {
        x: 20,
        y: 1040,
      },
      {
        x: 21,
        y: 1700,
      },
    ],
  },
]

export const Line = () => {
  return (
    <>
      <Container>
        <Title>Chart Title - Line</Title>
        <Hr />

        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 75, bottom: 110, left: 75 }}
          xScale={{ type: 'linear' }}
          yScale={{ type: 'linear', stacked: true, min: 0, max: 2500 }}
          yFormat=" >-.2f"
          curve="monotoneX"
          enableArea={true}
          enablePoints={false}
          axisTop={null}
          axisRight={{
            tickValues: [0, 500, 1000, 1500, 2000, 2500],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: '',
            legendOffset: 0,
          }}
          axisBottom={{
            tickValues: [0, 20, 40, 60, 80, 100, 120],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2f',
            // legend: 'price',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickValues: [0, 500, 1000, 1500, 2000, 2500],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: 'volume',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          colors={{ scheme: 'spectral' }}
          lineWidth={1}
          pointSize={4}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={1}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          gridXValues={[0, 20, 40, 60, 80, 100, 120]}
          gridYValues={[0, 500, 1000, 1500, 2000, 2500]}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 140,
              translateY: 0,
              itemsSpacing: 2,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 12,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Container>
    </>
  )
}
