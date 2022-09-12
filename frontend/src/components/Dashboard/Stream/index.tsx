import React from 'react'
import { ResponsiveStream } from '@nivo/stream'

import { Container, Title, Hr } from './styles'

export const Stream = () => {
  const data = [
    {
      Raoul: 77,
      Josiane: 186,
      Marcel: 177,
      René: 22,
      Paul: 35,
      Jacques: 76,
    },
    {
      Raoul: 146,
      Josiane: 70,
      Marcel: 12,
      René: 129,
      Paul: 101,
      Jacques: 187,
    },
    {
      Raoul: 172,
      Josiane: 67,
      Marcel: 78,
      René: 110,
      Paul: 191,
      Jacques: 17,
    },
    {
      Raoul: 146,
      Josiane: 68,
      Marcel: 65,
      René: 102,
      Paul: 137,
      Jacques: 135,
    },
    {
      Raoul: 123,
      Josiane: 124,
      Marcel: 132,
      René: 178,
      Paul: 199,
      Jacques: 190,
    },
    {
      Raoul: 23,
      Josiane: 48,
      Marcel: 74,
      René: 40,
      Paul: 130,
      Jacques: 23,
    },
    {
      Raoul: 48,
      Josiane: 23,
      Marcel: 126,
      René: 59,
      Paul: 65,
      Jacques: 134,
    },
    {
      Raoul: 67,
      Josiane: 130,
      Marcel: 185,
      René: 145,
      Paul: 157,
      Jacques: 191,
    },
    {
      Raoul: 118,
      Josiane: 152,
      Marcel: 45,
      René: 140,
      Paul: 25,
      Jacques: 127,
    },
  ]

  return (
    <>
      <Container>
        <Title>Chart Title - stream</Title>
        <Hr />

        <ResponsiveStream
          data={data}
          keys={['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']}
          margin={{ top: 50, right: 100, bottom: 110, left: 75 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
          }}
          enableGridX={true}
          enableGridY={false}
          offsetType="silhouette"
          colors={{ scheme: 'nivo' }}
          fillOpacity={0.85}
          borderColor={{ theme: 'background' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#2c998f',
              size: 4,
              padding: 2,
              stagger: true,
            },
            {
              id: 'squares',
              type: 'patternSquares',
              background: 'inherit',
              color: '#e4c912',
              size: 6,
              padding: 2,
              stagger: true,
            },
          ]}
          fill={[
            {
              match: {
                id: 'Paul',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'Marcel',
              },
              id: 'squares',
            },
          ]}
          dotSize={8}
          dotColor={{ from: 'color' }}
          dotBorderWidth={2}
          dotBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.7]],
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000000',
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
