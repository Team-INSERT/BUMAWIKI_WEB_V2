import Image from "next/image";
import styled from "styled-components";

export const ScrollButtonWrap = styled.div`
  position: fixed;
  right: 3.2%;
  bottom: 5%;
  z-index: 1;
  display: flex;
`;

export const ScrollButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 40px;
  height: 40px;
  font-size: 15px;
  padding: 15px 10px;
  background: #274168;
  color: #fff;
  border: 2px solid #ccc;
  outline: none;
  cursor: pointer;

  &:first-child {
    border-right: none;
  }
`;

export const ScrollArrow = styled(Image)``;
