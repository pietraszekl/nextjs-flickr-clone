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
