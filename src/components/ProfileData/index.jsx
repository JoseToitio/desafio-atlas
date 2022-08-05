import React from "react";
import { Container, Flex, Avatar, Row, PeopleIcon, Column, LocationIcon, EmailIcon } from './styles'

export default function ProfileData({
  userName,
  name,
  avatarUrl,
  followers,
  following,
  location,
  email,
}) {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={userName}/>
        <div>
          <h1>{name}</h1>
          <h2>{userName}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
      </Column>
    </Container>
  );
}
