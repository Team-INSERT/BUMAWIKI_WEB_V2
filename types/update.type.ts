import FileListArray from "./filelistArray.type";

interface UpdateDocsType {
  title: string;
  contents: string;
  files: FileListArray[];
}

export default UpdateDocsType;
