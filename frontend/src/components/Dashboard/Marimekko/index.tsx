import React from 'react'
import { ResponsiveMarimekko } from '@nivo/marimekko'

import { Container, Title, Hr } from './styles'

export const Marimekko = () => {
  const data = [
    {
      statement: "it's good",
      participation: 13,
      stronglyAgree: 7,
      agree: 25,
      disagree: 9,
      stronglyDisagree: 5,
    },
    {
      statement: "it's sweet",
      participation: 30,
      stronglyAgree: 5,
      agree: 7,
      disagree: 24,
      stronglyDisagree: 22,
    },
    {
      statement: "it's spicy",
      participation: 10,
      stronglyAgree: 18,
      agree: 5,
      disagree: 26,
      stronglyDisagree: 14,
    },
    {
      statement: 'worth eating',
      participation: 32,
      stronglyAgree: 6,
      agree: 20,
      disagree: 12,
      stronglyDisagree: 3,
    },
    {
      statement: 'worth buying',
      participation: 30,
      stronglyAgree: 22,
      agree: 23,
      disagree: 29,
      stronglyDisagree: 3,
    },
    {
      statement: 'worth buying',
      participation: 30,
      stronglyAgree: 22,
      agree: 23,
      disagree: 29,
      stronglyDisagree: 3,
    },
    {
      statement: "it's spicy",
      participation: 10,
      stronglyAgree: 18,
      agree: 5,
      disagree: 26,
      stronglyDisagree: 14,
    },
  ]

  return (
    <>
      <Container>
        <Title>Chart Title</Title>
        <Hr />

        <ResponsiveMarimekko
          data={data}
          id="statement"
          value="participation"
          dimensions={[
            {
              id: 'disagree strongly',
              value: 'stronglyDisagree',
            },
            {
              id: 'disagree',
              value: 'disagree',
            },
            {
              id: 'agree',
              value: 'agree',
            },
            {
              id: 'agree strongly',
              value: 'stronglyAgree',
            },
          ]}
          innerPadding={9}
          axisTop={null}
          axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'participation',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'opinions',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          margin={{ top: 50, right: 75, bottom: 180, left: 75 }}
          colors={{ scheme: 'spectral' }}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]],
          }}
          defs={[
            {
              id: 'lines',
              type: 'patternLines',
              background: 'rgba(0, 0, 0, 0)',
              color: 'inherit',
              rotation: -45,
              lineWidth: 4,
              spacing: 8,
            },
          ]}
          fill={[
            {
              match: {
                id: 'agree strongly',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'disagree strongly',
              },
              id: 'lines',
            },
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 80,
              itemsSpacing: 0,
              itemWidth: 130,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'right-to-left',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'square',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
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
