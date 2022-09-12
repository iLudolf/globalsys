import React, { useEffect, useState } from 'react'
import { ResponsivePie } from '@nivo/pie'

import { Container, Title, Hr, Group } from './styles'
import { api } from '../../../services/api'
import { ModalLoading } from '../../Modal/ModalLoading'
import Void from '../../Images/Void'

interface IDashboard {
  id: string
  label: string
  value: number
  color: string
}

export const Pie = () => {
  const [infoDashboard, setInfoDashboard] = useState<IDashboard[]>([])
  const [useStateloadData, setUseStateLoadData] = useState<boolean>(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setUseStateLoadData(true)
      const response = await api.get('kaizens/dashboard')
      const { message, error } = response.data

      if (!error) {
        setInfoDashboard(message)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setUseStateLoadData(false)
    }
  }

  return (
    <>
      {useStateloadData && <ModalLoading />}
      <Container>
        <Title>Total de Kaizens</Title>
        <Hr />
        {infoDashboard.length <= 0 && (
          <Group>
            <Void
              title="Nenhum Kaizen Registrado"
              descrpition="No momento não existem métricas a serem exibidas"
            />
          </Group>
        )}
        <ResponsivePie
          data={infoDashboard}
          margin={{ top: 50, right: 100, bottom: 110, left: 100 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="white"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          tooltip={({ datum: { id, value, color } }) => (
            <div
              style={{
                padding: 12,
                color: '#0b182b',
                background: '#F0F2F5',
                borderRadius: '5px',
                boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.28)',
              }}
            >
              <span>
                Kaizen {id}: <strong>{value} </strong>
              </span>
            </div>
          )}
        />
      </Container>
    </>
  )
}
