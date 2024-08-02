export interface Toolbar {
  isActive: boolean;
  name: string;
}
export interface LogItem {
  id: string;
  user_id: number;
  action: string;
  details: string;
  createdTime: string;
  updatedTime: string;
  level: number;
}
export interface ArticleMetadata {
  title: string | null;
  tag: string | null;
  categories: string | null;
  summary: string | null;
  coverPhotoUrl: string | null;
}

export interface MetaData {
  id: number;
  content: string;
  creator: string;
  createTime: string;
}

export interface Article {
  id: number;
  userId: string;
  createdBy: string;
  createdTime: string;
  title: string;
  content: string;
  updatedTime: string;
  likesCount: number;
  readCount: number;
  commentCount: number;
  tag: string;
  categories: string;
  summary: string;
  coverPhotoUrl: string | null;
  status: string;
  isDelete: number;
  isPinned: boolean | null;
  isLikeDisabled: boolean | null;
  isCommentsDisabled: boolean | null;
}
