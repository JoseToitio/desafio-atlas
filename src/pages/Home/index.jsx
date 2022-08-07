import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, BotBar, Box } from "./styles";

export default function Home() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    if(search === '') {
      setError('Informe um nome de usuário válido do github')
    }
    navigate('/' + search.toLowerCase());
    localStorage.removeItem('error');
  };

  const getError = () => {
    const resultError = localStorage.getItem('error');
    if (resultError) {
      setError(resultError);
    }
  }

  useEffect(() => {
    getError();
  })

  return (
    <Container>
      <Box>
      <label htmlFor="search">Buscar Repositório no github</label>
      <BotBar>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="Digite o nome do usuário"
          onChange={({target}) => setSearch(target.value)}
        />
        <button type="button" onClick={handleClick}>
          Buscar
        </button>
      </BotBar>
      <p>{error && error}</p>
      </Box>
    </Container>
  );
}
