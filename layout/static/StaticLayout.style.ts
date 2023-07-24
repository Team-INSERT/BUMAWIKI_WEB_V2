import Link from "next/link";
import styled from "styled-components";

export const StaticWrap = styled.div`
  display: flex;
`;

export const StaticTitleWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const StaticTitleText = styled.span`
  color: #274168;
  font-weight: 800;
  font-size: 34px;
  margin-left: 30px;
`;

export const StaticClassify = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 30px;
`;

export const StaticLine = styled.div`
  width: 68vw;
  height: 1.5px;
  background-color: #ccc;

  @media (max-width: 500px) {
    width: 90vw;
  }
`;

export const StaticListWrap = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const StaticList = styled.ul`
  margin: 30px 0 0 50px;
  font-weight: 600;
`;

export const StaticLink = styled(Link)`
  color: #0038ff;
  text-decoration: none;
  cursor: pointer;
`;

export const StaticListItem = styled.li`
  margin-bottom: 18px;
  color: #0038ff;
`;

export const StaticWarnText = styled.span`
  font-weight: 700;
  margin: 20px 0 10px 30px;
  margin-right: auto;
  font-size: 13px;
  color: red;
`;

export const StaticDetailList = styled.ul`
  margin: 30px 0 0 50px;
  font-weight: 600;
`;

export const StaticGradeBox = styled.div`
  padding: 18px 0;
`;
