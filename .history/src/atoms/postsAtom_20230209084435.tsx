import { Timestamp } from "firebase/firestore";
import atom from "recoil";

export type Post = {
  id: string;
  communityId: string;
  creatorId: string;
  creatorDisplayName: string;
  title: string;
  body: string;
  numberOfComments: number;
  voteStatus: number;
  imageURL?: string;
  communityImageURL:string
  createdAt: Timestamp;
};

const defaultValue: Post = {
    id: "",
    communityId: "",
    creatorId: "",
    creatorDisplayName: "",
    title: "",
    body: "",
    numberOfComments: 0,
    voteStatus: 0,
    imageURL?: "",
    createdAt: 
  };

export const postState = atom<Post>({
  key: "",
  defaultValue: "",
});
