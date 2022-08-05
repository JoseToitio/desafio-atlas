import React from "react";
import { Container, Main, ProfileInfo, RepositoryInfo, Repos } from "./styles";
import ProfileData from "../../components/ProfileData/index";
import RepositoriesCard from "../../components/RepositoriesCard";

export default function Profile() {
  return (
    <Container>
      <Main>
        <ProfileInfo>
          <ProfileData
            userName={"joseToitio"}
            name={"Toitio"}
            avatarUrl={"https://avatars.githubusercontent.com/u/79183001?v=4"}
            followers={3}
            following={7}
            location={"Brasil"}
            email={"josetoitio@gmail.com"}
          />
        </ProfileInfo>
        <RepositoryInfo>
          <Repos>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepositoriesCard
                  key={n}
                  linkRepository={"https://github.com/JoseToitio/App-com-react"}
                  username={"josetoitio"}
                  reponame={"app-receitas"}
                  description={"alguma coisa"}
                  language={"JavaScript"}
                  lastupdated={"2022-05-23T00:23:33Z"}
                  forks={'3'}
                  stars={'4'}
                />
              ))}
            </div>
          </Repos>
        </RepositoryInfo>
      </Main>
    </Container>
  );
}
