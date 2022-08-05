import React from "react";

import { Container, TopSide, BotSide, StarIcon, ForkIcon } from "./styles";
export default function RepositoriesCard({
  reponame,
  description,
  language,
  linkRepository,
  lastupdated,
  stars,
  forks
}) {

  const date = () => {
    const date = new Date(lastupdated)
    const day = date.getDate().toString().padStart(2, '0')
    const monthNumber = Number((date.getMonth() + 1).toString().padStart(2))
    const month = () => {
      switch (monthNumber) {
        case 1:
          return 'Jan'
        case 2:
          return 'Feb'
        case 3:
          return 'Mar'
        case 4:
          return 'April'
        case 5: 
          return 'May';
        case 6:
          return 'Jun'
        case 7:
          return 'July'
        case 8:
          return 'Aug'
        case 9:
          return 'Sept'
        case 10:
          return 'Oct'
        case 11:
          return 'Nov'
        case 12:
          return 'Dec'
        default:
          break;
      }
    }
    const year = date.getFullYear()
    const formatted = `Updated on ${day} ${month()} ${year}`
    return formatted;
  }
  return (
    <Container>
      <TopSide>
      <header>
        <a href={linkRepository}>{reponame}</a>
      </header>
        <p>{description}</p>
      </TopSide>
      <BotSide>
        <ul>
          <li>
            <div className={`language`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
          <li>
            <span>{date()}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
}
