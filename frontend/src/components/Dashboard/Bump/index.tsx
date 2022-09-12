import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump'

import { Container, Title, Hr } from './styles'

export const Bump = () => {
  const data = [
    {
      id: 'JavaScript',
      data: [
        {
          x: 2000,
          y: 30,
        },
        {
          x: 2001,
          y: 30,
        },
        {
          x: 2002,
          y: 26,
        },
        {
          x: 2003,
          y: 16,
        },
        {
          x: 2004,
          y: 11,
        },
        {
          x: 2005,
          y: 27,
        },
      ],
    },
    {
      id: 'ReasonML',
      data: [
        {
          x: 2000,
          y: 10,
        },
        {
          x: 2001,
          y: 21,
        },
        {
          x: 2002,
          y: 23,
        },
        {
          x: 2003,
          y: 18,
        },
        {
          x: 2004,
          y: 18,
        },
        {
          x: 2005,
          y: 29,
        },
      ],
    },
    {
      id: 'TypeScript',
      data: [
        {
          x: 2000,
          y: 13,
        },
        {
          x: 2001,
          y: 15,
        },
        {
          x: 2002,
          y: 17,
        },
        {
          x: 2003,
          y: 21,
        },
        {
          x: 2004,
          y: 20,
        },
        {
          x: 2005,
          y: 26,
        },
      ],
    },
    {
      id: 'Elm',
      data: [
        {
          x: 2000,
          y: 17,
        },
        {
          x: 2001,
          y: 17,
        },
        {
          x: 2002,
          y: 19,
        },
        {
          x: 2003,
          y: 24,
        },
        {
          x: 2004,
          y: 11,
        },
        {
          x: 2005,
          y: 14,
        },
      ],
    },
    {
      id: 'CoffeeScript',
      data: [
        {
          x: 2000,
          y: 15,
        },
        {
          x: 2001,
          y: 11,
        },
        {
          x: 2002,
          y: 13,
        },
        {
          x: 2003,
          y: 18,
        },
        {
          x: 2004,
          y: 17,
        },
        {
          x: 2005,
          y: 22,
        },
      ],
    },
  ]

  return (
    <>
      <Container>
        <Title>Chart Title</Title>
        <Hr />

        <ResponsiveAreaBump
          data={data}
          margin={{ top: 50, right: 90, bottom: 110, left: 70 }}
          spacing={8}
          colors={{ scheme: 'nivo' }}
          blendMode="multiply"
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'CoffeeScript',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'TypeScript',
              },
              id: 'lines',
            },
          ]}
          // startLabel="id"
          // endLabel="id"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
        />
      </Container>
    </>
  )
}
