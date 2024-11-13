"use client";

import { MDXRemote } from "next-mdx-remote";

interface Props {
  compiledSource: any;
  frontmatter: any;
  scope: any;
}

export default function MDXContentClient({
  compiledSource,
  frontmatter,
  scope,
}: Props) {
  return (
    <div className="markdown-content">
      <MDXRemote
        compiledSource={compiledSource}
        frontmatter={frontmatter}
        scope={scope}
        lazy={true}
        components={{
          h1: (props) => (
            <h1
              className="font-poppins max-w-full break-words whitespace-pre-wrap"
              {...props}
            />
          ),
          p: (props) => (
            <p
              className="font-poppins max-w-full break-words whitespace-pre-wrap mb-2 text-pretty"
              {...props}
            />
          ),
          pre: (props) => <pre className="whitespace-pre" {...props} />,
          li: (props) => <li className="list-disc ml-10" {...props} />,
          img: (props) => (
            <img className="max-w-full my-3 md:my-6 xl:my-8" {...props} />
          ),
        }}
      />
    </div>
  );
}
