import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "Public" | "Restricted" | "Private";
  createdAt?: Timestamp;
  imageURL?: "string";
}
