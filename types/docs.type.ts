interface Docs {
  id: number;
  title: string;
  enroll?: number;
  contents: string;
  docsType: string;
  view: number;
  lastModifiedAt: string;
  thumbsUpsCounts: number;
  youLikeThis: boolean;
}

export default Docs;
