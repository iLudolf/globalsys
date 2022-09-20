import React, { useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'
import {
  Container,
  Body,
  GroupChart,
  Chart,
  Title,
  Description,
  Navbar,
  Options,
  Group,
  GroupButton,
  GroupSignUp,
  TitleNavBar,
} from './styles'

import { Profile } from '../../components/Profile'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'
import moment from 'moment'
import { PortalLogoType } from '../../components/PortalLogoType'
import { Notifications } from '../../components/Notifications'
import { Footer } from '../../components/Footer'
interface IMemoryRef {
  x: number
  y: number
}

export const System = () => {
  const [storage, setStorage] = useState({
    size: 0,
    date: '',
  })

  const [memoryColor, setMemoryColor] = useState('hsl(153, 100%, 50%)')
  const [memory, setMemory] = useState(0)
  const memoryRef = useRef<IMemoryRef[]>([])

  useEffect(() => {
    // Conexão
    const socket = io(`${process.env.REACT_APP_SOCKET_URL}`, {
      reconnectionDelayMax: 10000,
    })

    socket.on('totalmem', (data: any) => {
      if (data.memoryUse !== undefined) {
        setMemory(parseInt(data.memoryUse))

        memoryRef.current = [
          ...memoryRef.current,
          {
            x: memoryRef.current.length + 1,
            y: parseInt(data.memoryUse),
          },
        ]
      }

      if (parseInt(data.memoryUse) <= 40.0) {
        setMemoryColor('hsl(153, 100%, 50%)')
      } else if (parseInt(data.memoryUse) <= 60.0) {
        setMemoryColor('hsl(64, 100%, 50%)')
      } else if (parseInt(data.memoryUse) <= 79.0) {
        setMemoryColor('hsl(24, 70%, 50%)')
      } else if (parseInt(data.memoryUse) >= 80.0) {
        setMemoryColor('hsl(3, 100%, 50%)')
      }

      // debugger
    })

    socket.on('storage', (data: any) => {
      moment.locale('pt-br')

      setStorage({
        size: data.size,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      })
    })

    socket.on('cpu', (data: any) => {
      // setCpu(data);
    })
  }, [])

  const dataPie = [
    {
      id: 'Em uso',
      label: 'Em uso',
      value: (Number(storage.size) / Math.pow(1024, 4)).toFixed(2),
      color: '#519db0',
    },

    {
      id: 'Espaço Livre',
      label: 'Espaço Livre',
      value: 500,
      color: '#8dc4d4',
    },
  ]

  const data = [
    {
      id: 'MemoryChart',
      color: memoryColor,
      data: memoryRef.current,
    },
  ]

  return (
    <>
      <Container>
        <Navbar>
          <PortalLogoType
            color={'#2058a4'}
            description={'Informações do Sistema'}
            url={'/dashboard'}
          />

          <div>
            <Options>
              <TitleNavBar href="/">Página Inicial</TitleNavBar>
            </Options>
          </div>

          <Group>
            <GroupButton>
              <Notifications />
            </GroupButton>

            <GroupSignUp to="#">
              <Profile
                name={String(localStorage.getItem('GLOBAL_SYS_STOREGE_USER'))}
                profile={String(
                  localStorage.getItem('GLOBAL_SYS_STOREGE_PROFILE'),
                )}
                profileID={String(
                  localStorage.getItem('GLOBAL_SYS_STOREGE_PROFILE_ID'),
                )}
                email={String(localStorage.getItem('GLOBAL_SYS_STOREGE_EMAIL'))}
              />
            </GroupSignUp>
          </Group>
        </Navbar>

        <Body>
          <GroupChart>
            <Title>
              Memória em uso <strong>{memory}%</strong>
            </Title>
            <Chart>
              <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 28, bottom: 10, left: 28 }}
                xScale={{ type: 'linear' }}
                yScale={{ type: 'linear', stacked: true, min: 0, max: 100 }}
                yFormat=" >-.2f"
                curve="monotoneX"
                enableArea={true}
                enablePoints={false}
                axisTop={null}
                axisRight={{
                  tickValues: [0, 20, 40, 60, 80, 100],
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: '.2s',
                  legend: '',
                  legendOffset: 0,
                }}
                axisBottom={{
                  tickValues: [0, 20, 40, 60, 80, 100],
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: '.2f',
                  // legend: 'price',
                  legendOffset: 36,
                  legendPosition: 'middle',
                }}
                axisLeft={{
                  tickValues: [0, 20, 40, 60, 80, 100],
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
                gridXValues={[0, 20, 40, 60, 80, 100]}
                gridYValues={[0, 20, 40, 60, 80, 100]}
              />
            </Chart>
          </GroupChart>

          <GroupChart>
            <Title>
              Armazenamento total em uso{' '}
              <strong>
                {(Number(storage.size) / Math.pow(1024, 4)).toFixed(2)} GB
              </strong>
            </Title>
            <Chart>
              <ResponsivePie
                data={dataPie}
                margin={{
                  top: 50,
                  right: 100,
                  bottom: 35,
                  left: 100,
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#ffff"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [['darker', 2]],
                }}
                colors={{ datum: 'data.color' }}
                tooltip={({ datum: { id, value, color } }) => (
                  <div
                    style={{
                      padding: 12,
                      color: '#fff',
                      background: '#0b182b',
                      borderRadius: '5px',
                      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.28)',
                    }}
                  >
                    <span>Clique aqui para visualizar</span>
                    <br />
                    <strong>
                      {id}: {value} GB
                    </strong>
                  </div>
                )}
                legends={[
                  {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: 0,
                    itemsSpacing: 15,
                    itemWidth: 100,
                    itemHeight: 28,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#343a40',
                        },
                      },
                    ],
                  },
                ]}
              />
            </Chart>
            <Description>
              <strong>Update:</strong> <>{storage.date}</>
            </Description>
          </GroupChart>
        </Body>
        <Footer />
      </Container>
    </>
  )
}
