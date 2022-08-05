import styled from "styled-components";

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;
  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
`;

export const Main = styled.div`
  display:flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProfileInfo = styled.div`
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RepositoryInfo = styled.div`
  @media (min-width: 768px) {
    width: 75%;
  }
`;
