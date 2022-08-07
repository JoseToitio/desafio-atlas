import React, { useEffect, useState } from "react";
import {
  Container,
  Main,
  ProfileInfo,
  RepositoryInfo,
  Repos,
  RepoIcon,
  Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData/index";
import RepositoriesCard from "../../components/RepositoriesCard";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Profile() {
  const { username } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`),
      ]).then(async (response) => {
        const [userResponse, repoResponse] = response;
        if (userResponse.status === 404) {
          setData({ error: "User not found" });
          return;
        } else if (userResponse.status === 403) {
          setData({ error: 403 });
          return;
        }

        const user = await userResponse.json();
        const repos = await repoResponse.json();
        setData({
          user: user,
          repos: repos,
        });
      });
    }
  }, [username]);
  if (data.error === 403) {
    localStorage.setItem('error', 'API rate limit exceeded');
    navigate('/')
  }

  if (data.error) {
    localStorage.setItem('error', 'Usuário não encontrado no github. Verifique se você digitou o nome corretamente');
    navigate('/')
  }

  if (!username) {
    localStorage.setItem('error', 'Informe um nome de usuário válido do github');
    navigate('/')
  }
  if (data.length < 1) {
    return <h1>Loading....</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Reositories</span>
      <span className="number">{data.user.public_repos}</span>
    </div>
  );
  return (
    <div>
      <Header />
      <Container>
        <Tab className="desktop">
          <div className="wrapper">
            <span className="offset"></span>
            <TabContent />
          </div>
          <span className="line" />
        </Tab>
        <Main>
          <ProfileInfo>
            <ProfileData
              userName={data.user.login}
              name={data.user.name}
              avatarUrl={data.user.avatar_url}
              followers={data.user.followers}
              following={data.user.following}
              location={data.user.location}
              email={data.user.email}
            />
          </ProfileInfo>
          <RepositoryInfo>
            <Tab className="mobile">
              <TabContent />
              <span className="line" />
            </Tab>
            <Repos>
              <div>
                {data.repos.map((item) => (
                  <RepositoriesCard
                    key={item.name}
                    linkRepository={item.clone_url}
                    reponame={item.name}
                    description={item.description}
                    language={item.language}
                    lastupdated={item.updated_at}
                    forks={item.stargazers_count}
                    stars={item.forks}
                  />
                ))}
              </div>
            </Repos>
          </RepositoryInfo>
        </Main>
      </Container>
      <Footer />
    </div>
  );
}
