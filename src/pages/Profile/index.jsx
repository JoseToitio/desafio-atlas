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
import { useParams } from "react-router-dom";

export default function Profile() {
  const { username } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
      if(username) {
        Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos`)
        ]).then(async response => {
          const [userResponse, repoResponse] = response;
          if (userResponse.status === 404) {
            setData({error: 'User not found'});
            return;
          }
  
          const user = await userResponse.json();
          const repos = await repoResponse.json();
          setData({
            user: user,
            repos: repos,
          })
        } )
      }
  }, [username]);

  if(data.error) {
    return <h1>Usuario não encontrado</h1>
  }

  if(!username) {
    return <h1>Faça a Busca do usuário</h1>
  }
  if(data.length < 1) {
    return <h1>Loading....</h1>
  }
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Reositories</span>
      <span className="number">{data.user.public_repos}</span>
    </div>
  );
  return (
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
  );
}
