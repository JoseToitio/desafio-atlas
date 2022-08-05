import React from 'react'
import { Container, Main, ProfileInfo, RepositoryInfo } from './styles'
import ProfileData from '../../components/ProfileData/index'

export default function Profile () {
  return (
    <Container>
      <Main>
        <ProfileInfo>
          <ProfileData 
            userName={'joseToitio'}
            name={'Toitio'}
            avatarUrl={'https://avatars.githubusercontent.com/u/79183001?v=4'}
            followers={3}
            following={7}
            location={'Brasil'}
            email={'josetoitio@gmail.com'}
          />
        </ProfileInfo>
        <RepositoryInfo></RepositoryInfo>
      </Main>
    </Container>
  )
}