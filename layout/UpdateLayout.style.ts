import styled from "styled-components";

export const DocsWrap = styled.div`
  display: flex;
`;

export const DocsLine = styled.div`
  width: 68vw;
  height: 1.5px;
  background-color: #ccc;

  @media (max-width: 500px) {
    width: 90vw;
  }
`;

export const DocsTitleWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const DocsTitleText = styled.span`
  color: #274168;
  font-weight: 800;
  font-size: 34px;
  margin-left: 30px;

  @media (max-width: 500px) {
    font-size: 26px;
  }
`;

export const DocsMenu = styled.div`
  margin-left: auto;
  margin-right: 2vw;
`;

export const Classify = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 30px;
`;

export const DocsContentsWrap = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const DocsContentsLoadWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LastUpdateDate = styled.span`
  font-weight: 700;
  font-size: 12px;
  margin-left: auto;
`;

export const DocsContents = styled.div`
  margin: 20px 0 20px 0;
  white-space: pre-wrap;

  img {
    margin-top: 10px;
    width: 80%;
  }
`;

export const DocsExampleImage = styled.img`
  width: 90%;
`;

export const FileAddWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;

export const FileAddButton = styled.button`
  border: 2px solid #ccc;
  height: 20px;
  width: 20px;
  font-size: 14px;
  font-weight: 800;
  color: rgb(146, 146, 146);
`;

export const FileAddText = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-left: 6px;
`;

export const DocsNeedFileText = styled.span`
  font-size: 12px;
  margin-top: 5px;
  font-weight: 600;
`;

export const CreateProfileText = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

export const CreateProfileWrap = styled.div`
  margin: 10px 0 10px 0;
`;

export const CreateProfileTable = styled.div`
  display: flex;
  width: fit-content;

  input {
    border: 2px solid #ccc;
    border-left: none;
    border-bottom: none;
    outline: none;
    padding-left: 10px;
    width: 260px;
  }
`;

export const CreateProfileTableLast = styled.div`
  display: flex;
  width: fit-content;

  input {
    border: 2px solid #ccc;
    border-left: none;
    outline: none;
    padding-left: 10px;
    width: 260px;
  }
`;

export const CreateProfileTableTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  background-color: #274168;
  color: white;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border: 2px solid #ccc;
  border-bottom: none;
`;

export const CreateProfileTableTitleLast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  background-color: #274168;
  color: white;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border: 2px solid #ccc;
`;

export const CreateProfileTableFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 40px;
  border-right: 2px solid #ccc;
  border-top: 2px solid #ccc;

  input {
    border: none;
  }
`;

export const CreateProfileInputWarn = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

export const UpdateTextarea = styled.textarea`
  height: 500px;
  border: 2px solid #ccc;
  resize: none;
  outline: none;
  padding: 10px;
  white-space: pre-wrap;
`;

export const UpdatePreview = styled.div`
  height: 500px;
  border: 2px solid #ccc;
  resize: none;
  outline: none;
  padding: 10px;
  white-space: pre-wrap;
  overflow: scroll;
  font-weight: 500;
`;

export const UpdatePreviewText = styled.span`
  margin: 30px 0 10px 0;
  font-size: 26px;
  font-weight: 800;
  color: #274168;
`;

export const AutoCompleteToggleWrap = styled.div`
  margin: 10px 0 4px 0;
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

export const AutoCompleteToggleText = styled.span`
  font-size: 14px;
  margin-right: 4px;
  font-weight: 600;

  &::selection {
    background-color: transparent;
  }
`;

export const AutoCompleteToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  border-radius: 3px;
`;

export const UpdateSubmit = styled.div`
  display: flex;
  width: 65vw;
  height: 50px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const UpdateWarn = styled.span`
  color: red;
  font-weight: 800;
  margin-top: 10px;
  font-size: 12px;
  margin-right: auto;

  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const UpdateButton = styled.button`
  width: 130px;
  height: 40px;
  border: 2px solid #ccc;
  background-color: #274168;
  color: white;
  font-weight: 800;
  cursor: pointer;
  margin: 12px 0 20px auto;
`;
