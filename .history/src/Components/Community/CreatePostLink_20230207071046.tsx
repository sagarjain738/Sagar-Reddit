import { Flex, Icon, Input } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";

type CreatePostLinkProps = {};

const CreatePostLink: React.FC = () => {
  const router = useRouter();
  const { toggleMenuOpen } = useDirectory();
  const onClick = () => {
    // Could check for user to open auth modal before redirecting to submit
    const { community } = router.query;
    if (community) {
      router.push(`/r/${router.query.community}/submit`);
      return;
    }
    // Open directory menu to select community to post to
    toggleMenuOpen();
  };

  return <div>Have a good coding</div>;
};
export default CreatePostLink;
