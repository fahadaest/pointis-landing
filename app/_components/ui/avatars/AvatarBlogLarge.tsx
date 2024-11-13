import Image from "next/image";
import React from "react";

type Props = {
  blogEntry: any;
};

const AvatarBlogLarge: React.FC<Props> = ({ blogEntry }) => {
  return (
    <div className="flex shrink-0">
      <Image
        className="size-10 rounded-full sm:h-14 sm:w-14"
        src="/images/blog/avatar.png"
        alt={blogEntry.frontmatter.authorImageAlt}
        draggable={false}
        width={56}
        height={56}
        quality={75}
      />
    </div>
  );
};

export default AvatarBlogLarge;
