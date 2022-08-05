import React from 'react'
import { Container, Main, ProfileInfo, RepositoryInfo } from './styles'

export default function Profile () {
  return (
    <Container>
      <Main>
        <ProfileInfo></ProfileInfo>
        <RepositoryInfo></RepositoryInfo>
      </Main>
    </Container>
  )
}