import Image from "next/image";
import styled from "styled-components";

export const CreateButtonWrap = styled.button`
  background-color: #274168;
  color: #fff;
  display: flex;
  justify-content: center;
  z-index: 10;
  align-items: center;
  cursor: pointer;
  border-radius: 9999px;
  position: fixed;
  right: 4%;
  gap: 8px;
  bottom: 5%;
  border: 2px solid #ccc;
  padding: 8px 18px;
`;

export const PenWrap = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const PenText = styled.span`
  font-size: 18px;
  color: white;
  font-weight: 600;
`;
