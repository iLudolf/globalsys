import { Container, TitleSection, Group } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../Form/Input'

const schema = yup.object().shape({
  cep: yup
    .number()
    .typeError('Número do CEP inválido')
    .required('Por favor, informe o CEP.'),

  street: yup.string().required('Por favor, informe a rua.'),
})

export const Address = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    alert('asd')
    console.log(data)
  }

  return (
    <Container>
      <TitleSection>Endereço</TitleSection>
      <Group onSubmit={handleSubmit(onSubmit)}>
        <Input
          sizeWidth={5}
          label="CEP"
          name="cep"
          type="tel"
          control={control}
          placeholder="Ex: 29144660"
          error={String(errors.cep && errors.cep.message)}
        />
        <Input
          sizeWidth={30}
          label="Rua"
          name="street"
          type="text"
          control={control}
          placeholder=""
          error={String(errors.street && errors!.street!.message)}
        />
      </Group>
    </Container>
  )
}
