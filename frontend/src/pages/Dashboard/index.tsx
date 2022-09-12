import {
  Container,
  Navbar,
  Options,
  Title,
  TitleSelected,
  OptionsSelected,
  GroupButton,
  GroupSignUp,
  Group,
  Section,
  CardInfo,
  TitleCardInfo,
  DescriptionCardInfo,
  GroupDescription,
  GroupCards,
  ReturnToLastClass,
  Card,
  GroupCard,
  CardProfile,
  CardHeader,
  CardProfileImage,
  NameProfile,
  InforProfile,
  BtnOpenMenu,
  LastClassName,
  NameClass,
  DescriptionClass,
  ReturnVideo,
  TitleReturnVideo,
  GroupInfoProfile,
  SeparateLine,
  KaizenInfo,
} from './styles'
import { convertUppercaseToLowercase } from '../../shared/utils/convertLowercaseToUppercase'
import { Play } from 'phosphor-react'
import { Notifications } from '../../components/Notifications'
import { Pie } from '../../components/Dashboard/Pie'
import { Footer } from '../../components/Footer'
import { Profile } from '../../components/Profile'
import { PortalKaizenLogoType } from '../../components/PortalKaizenLogoType'

export const Dashboard = () => {
  const isAdmin =
    localStorage.getItem('LUVEP_KAIZEN_STOREGE_ISADMIN') === 'true'

  return (
    <Container>
      <Navbar>
        <PortalKaizenLogoType
          color={'#2058a4'}
          description={' Página Inicial'}
          url={'/dashboard'}
        />

        <div>
          <OptionsSelected>
            <TitleSelected href="/dashboard">Página Inicial</TitleSelected>
          </OptionsSelected>
          <Options>
            <Title href="/kaizen-monthly">Premiação Mensal</Title>
          </Options>
          <Options>
            <Title href="/kaizen-quarterly">Premiação Trimestral</Title>
          </Options>

          <Options>
            <Title href="/kaizen-yearly       ">Premiação Anual</Title>
          </Options>
        </div>

        <Group>
          <GroupButton>
            <Notifications />
          </GroupButton>

          <GroupSignUp to="#">
            <Profile
              name={String(localStorage.getItem('LUVEP_KAIZEN_STOREGE_USER'))}
              profile={String(
                localStorage.getItem('LUVEP_KAIZEN_STOREGE_PROFILE'),
              )}
              profileID={String(
                localStorage.getItem('LUVEP_KAIZEN_STOREGE_PROFILE_ID'),
              )}
              email={String(localStorage.getItem('LUVEP_KAIZEN_STOREGE_EMAIL'))}
            />
          </GroupSignUp>
        </Group>
      </Navbar>

      <Section>
        <Card>
          <CardInfo>
            <GroupCard>
              <TitleCardInfo>
                Olá,{' '}
                {convertUppercaseToLowercase(
                  String(localStorage.getItem('LUVEP_KAIZEN_STOREGE_USER')),
                )}
              </TitleCardInfo>
              <GroupDescription>
                <DescriptionCardInfo>
                  É bom ter você de volta!
                </DescriptionCardInfo>

                <DescriptionCardInfo>
                  Inspirar criatividade é respirar inovação.
                </DescriptionCardInfo>
              </GroupDescription>
            </GroupCard>

            <ReturnToLastClass href="/kaizen-presentation">
              <LastClassName>
                <NameClass>Hall da Fama</NameClass>
                <DescriptionClass>
                  Histórico de premiação dos colaboradores{' '}
                </DescriptionClass>
              </LastClassName>

              <ReturnVideo>
                <TitleReturnVideo>Acessar</TitleReturnVideo>
                <Play size={35} color="#004370" weight="fill" />
              </ReturnVideo>
            </ReturnToLastClass>
          </CardInfo>
        </Card>

        <GroupCards>
          <CardProfile>
            <CardHeader>
              <CardProfileImage
                src={String(
                  localStorage.getItem('LUVEP_KAIZEN_STOREGE_PROFILE'),
                )}
              />
              <GroupInfoProfile>
                <div>
                  <NameProfile>Meu perfil</NameProfile>
                  <InforProfile>Atualizar informações</InforProfile>
                </div>

                <div>
                  <BtnOpenMenu
                    href={`/profile/${String(
                      localStorage.getItem('LUVEP_KAIZEN_STOREGE_PROFILE_ID'),
                    )}`}
                  >
                    Visualizar perfil
                  </BtnOpenMenu>
                </div>
              </GroupInfoProfile>
            </CardHeader>
            <SeparateLine />
            {isAdmin && (
              <KaizenInfo>
                <div>
                  <BtnOpenMenu href={`/administration`}>
                    Administração do portal Kaizen
                  </BtnOpenMenu>
                </div>
              </KaizenInfo>
            )}
          </CardProfile>

          <CardProfile>
            <Pie />
          </CardProfile>
        </GroupCards>
      </Section>
      <Footer />
    </Container>
  )
}
