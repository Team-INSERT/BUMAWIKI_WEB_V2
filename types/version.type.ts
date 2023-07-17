interface VersionDocs {
  thisVersionCreatedAt: string;
  userId: number;
  nickName: string;
}

interface VersionDocsInfo {
  title: string;
  docsType: string;
}

interface VersionDocsService extends VersionDocs {
  contents: string;
}

export type { VersionDocs, VersionDocsInfo, VersionDocsService };
