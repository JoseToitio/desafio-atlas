import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GithubLogo, SearchForm } from './styles';
export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/' + search.toLowerCase().trim());
  }
  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input 
        placeholder='Search user'
        value={search}
        onChange={({target}) => setSearch(target.value)}
        />
      </SearchForm>
    </Container>
  )
}