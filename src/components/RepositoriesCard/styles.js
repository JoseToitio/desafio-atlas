import styled, { css } from "styled-components";
import { RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

const iconCss = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
`;
export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;
    > a {
      font-size: 14px;
      font-weight: 600;
      color: var(--link);
      text-decoration: none;
      &:focus,
      &hover {
        text-decoration: underline;
      }
    }
  }

  > p {
      margin: 8px 0 16px;
      font-size: 12px;
      color: var(--gray);
      letter-spacing: 0.1px;
    }
`;
export const BotSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--javascript);
  }
`;
export const StarIcon = styled(RiStarLine)`
  ${iconCss}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCss}
`;
