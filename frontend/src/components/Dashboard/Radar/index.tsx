import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'

import { Container, Title, Hr } from './styles'

export const Radar = () => {
  const data = [
    {
      taste: 'fruity',
      chardonay: 83,
      carmenere: 95,
      syrah: 113,
    },
    {
      taste: 'bitter',
      chardonay: 81,
      carmenere: 102,
      syrah: 23,
    },
    {
      taste: 'heavy',
      chardonay: 117,
      carmenere: 52,
      syrah: 27,
    },
    {
      taste: 'strong',
      chardonay: 29,
      carmenere: 45,
      syrah: 88,
    },
    {
      taste: 'sunny',
      chardonay: 44,
      carmenere: 94,
      syrah: 82,
    },
  ]

  return (
    <>
      <Container>
        <Title>Chart Title - Pie</Title>
        <Hr />
        <ResponsiveRadar
          data={data}
          keys={['chardonay', 'carmenere', 'syrah']}
          indexBy="taste"
          valueFormat=">-.2f"
          margin={{ top: 50, right: 75, bottom: 110, left: 75 }}
          borderColor={{ from: 'color' }}
          gridLabelOffset={36}
          dotSize={10}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          colors={{ scheme: 'nivo' }}
          blendMode="multiply"
          motionConfig="wobbly"
          legends={[
            {
              anchor: 'top-left',
              direction: 'column',
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999',
              symbolSize: 12,
              symbolShape: 'circle',
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
