import React from 'react';
import { Button } from './ui/button';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const SocialLink = ({ isShowBorder = false, position= "center"}) => {
  return (
    <div className={`flex justify-${position} gap-2 ${isShowBorder && "md:pl-2 md:border-l-2 md:border-white"}`}>
      <Button variant={"outline"} asChild={true}>
        <Link href={"https://github.com/ShazzedChowdhury"} target='_blank'>
          <FaGithub />
        </Link>
      </Button>
      <Button variant={"outline"} asChild={true}>
        <Link href={"https://github.com/ShazzedChowdhury"}>
          <FaLinkedinIn />
        </Link>
      </Button>
    </div>
  );
};

export default SocialLink;