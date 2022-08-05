import React from 'react';
import { Container, GithubLogo, SearchForm } from './styles';
export default function Header() {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder='Search user'/>
      </SearchForm>
    </Container>
  )
}