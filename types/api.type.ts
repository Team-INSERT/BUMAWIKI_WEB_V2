export interface UpdateDocsTitleProps {
  title: string;
  docsName?: string;
}

export interface UpdateDocsProps extends UpdateDocsTitleProps {
  data: FormData;
}

export interface UpdateDocsTypeProps extends UpdateDocsTitleProps {
  docsType: string;
}
