import Image from "next/image";
import React from "react";

interface BlogEntry {
  data: {
    authorImage: string;
    authorImageAlt: string;
  };
}

type Props = {
  blogEntry: BlogEntry;
};

const AvatarBlog: React.FC<Props> = ({ blogEntry }) => {
  return (
    <div className="flex-shrink-0">
      <Image
        className="w-[46px] h-[46px] rounded-full border-2 border-neutral-50"
        src="/images/blog/avatar.png"
        alt={blogEntry.data.authorImageAlt}
        draggable="false"
        width={46}
        height={46}
      />
    </div>
  );
};

export default AvatarBlog;
