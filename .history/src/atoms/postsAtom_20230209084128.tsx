import { Timestamp } from "firebase/firestore";
import atom from "recoil";

export type Post = {
  id: string;
  communityId: string;
  creatorId: string;
  creatorDisplayName: string;
  title: string;
  body: string;
  numberOfComments: string;
  voteStatus: number;
  imageURL?: string;
  createdAt: Timestamp;
};

export const postState = atom<>({
  key: "",
  defaultValue: "",
});
