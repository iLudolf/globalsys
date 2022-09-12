import React, { useState } from 'react'
import { api } from '../../services/api'
import {
  Container,
  Ico,
  Title,
  Group,
  Donwload,
  Viwer,
  BrowserIco,
} from './styles'
import { saveAs } from 'file-saver'
import { DotLoaders } from '../../components/Loaders/DotLoaders'
import moment from 'moment'
import { DownloadSimple, TrashSimple } from 'phosphor-react'
import { toast } from 'react-toastify'

interface Props {
  kaizenID: string
  docID: string
  size?: number
  minetype: string
  src: string
  originalName: string
  fileName: string
  path: string
  createdOn: Date
  isAdmin: boolean
}

export const ElementDocs = ({
  kaizenID,
  docID,
  src,
  minetype,
  originalName,
  path,
  createdOn,
  isAdmin,
}: Props) => {
  const [loaders, setLoaders] = useState<boolean>(false)
  const [spinnerStateDeletekaizen, setSpinnerStateDeletekaizen] =
    useState<boolean>(false)

  const onDownloadFile = async () => {
    try {
      setLoaders(true)
      const response = await api.post(
        '/stream',
        {
          pathFile: path,
          minetype,
        },
        { responseType: 'blob' },
      )

      const blob = new Blob([response.data], {
        type: `${minetype};charset=utf-8`,
      })

      saveAs(blob, originalName)
    } catch (error) {
      console.error(error)
    } finally {
      setLoaders(false)
    }
  }

  const handleDeleteDocsKaizen = async () => {
    try {
      setSpinnerStateDeletekaizen(true)
      const response = await api.delete(`kaizens/docs/${kaizenID}/${docID}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.LUVEP_KAIZEN_STOREGE_KEY,
        },
      })

      const { error, message } = response.data

      if (!error) {
        toast.success(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

        setTimeout(() => window.location.reload(), 5010)
      } else {
        toast.error(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSpinnerStateDeletekaizen(false)
    }
  }

  return (
    <Container>
      <Group
        title={`Adicionado em ${moment(createdOn).format(
          'MMMM Do YYYY, h:mm:ss a',
        )}`}
      >
        <Ico src={src} />
        <Title>{originalName.toUpperCase()}</Title>
      </Group>

      <Group>
        {minetype === 'application/pdf' && (
          <a href="#">
            <Viwer
              title="Visualizar arquivo"
              href={`${process.env.REACT_APP_LINK_API}/storage/${path}`}
              target="_blank"
            >
              <BrowserIco />
            </Viwer>
          </a>
        )}

        <a onClick={onDownloadFile} href="#">
          <Donwload title="Baixar">
            {loaders ? (
              <DotLoaders color="#fff" />
            ) : (
              <DownloadSimple color="#8D8D99" size={20} weight="fill" />
            )}
          </Donwload>
        </a>

        {isAdmin && (
          <a href="#" onClick={handleDeleteDocsKaizen} title="Excluir Arquivo">
            {spinnerStateDeletekaizen ? (
              <DotLoaders color="#fff" />
            ) : (
              <TrashSimple color="#8D8D99" size={20} weight="fill" />
            )}
          </a>
        )}
      </Group>
    </Container>
  )
}
