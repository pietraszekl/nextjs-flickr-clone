export interface Header {
  name?: string;
}

export interface Layout {
  children: React.ReactNode;
}

export interface ListView {
  children: string;
  defultTag: string;
}

export interface FlickrItem {
  item: {
    owner: string;
    title: string;
    datetaken: string;
    secret: string;
    id: string;
    server: string;
  };
}

export interface PhotoItem {
  item: {
    title: {
      _content: string;
    };
    id: string;
    secret: string;
    server: string;
    farm: number;
    dateuploaded: string;
    originalformat: string;
    description: {
      _content: string;
    };
    owner: {
      username: string;
    };
    tags: {
      tag: [{ raw: string }];
    };
  };
}
