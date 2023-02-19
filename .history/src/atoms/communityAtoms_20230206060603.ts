import { Timestamp } from "firebase/firestore";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "Public" | "Restricted" | "Private";
  createdAt?: Timestamp;
  imageURL?: "string";
}

interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}

interface CommunityState {
  mySnippets: [];
}
