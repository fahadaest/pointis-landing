"use client";
import { useEffect } from "react";
import { MdShare, MdFacebook, MdContentCopy, MdCheck } from "react-icons/md";
import ClipboardJS from "clipboard";
import { FaLinkedin } from "react-icons/fa6";

interface Props {
  pageTitle: string;
  title?: string;
}

const SocialShare: React.FC<Props> = ({ pageTitle, title = "Share" }) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // Define the social platforms and share URLs
  const socialPlatforms = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/share.php?u=${currentUrl}&title=${pageTitle}`,
      icon: <MdFacebook />,
    },
    {
      name: "X",
      url: `https://twitter.com/home/?status=${pageTitle} ${currentUrl}`,
      icon: <MdShare />,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${pageTitle}`,
      icon: <FaLinkedin />,
    },
  ];

  // Clipboard functionality for copying the link
  useEffect(() => {
    const clipboards = document.querySelectorAll<HTMLElement>(".js-clipboard");
    clipboards.forEach((el) => {
      const clipboard = new ClipboardJS(el, {
        text: () => window.location.href,
      });

      clipboard.on("success", () => {
        const defaultElement = el.querySelector<HTMLElement>(
          ".js-clipboard-default"
        );
        const successElement = el.querySelector<HTMLElement>(
          ".js-clipboard-success"
        );
        const successTextElement = el.querySelector<HTMLElement>(
          ".js-clipboard-success-text"
        );
        const successText = el.dataset.clipboardSuccessText || "Copied";
        let oldSuccessText: string | undefined;

        if (successTextElement) {
          oldSuccessText = successTextElement.textContent || "";
          successTextElement.textContent = successText;
        }

        if (defaultElement && successElement) {
          defaultElement.style.display = "none";
          successElement.style.display = "block";
        }

        setTimeout(() => {
          if (successTextElement && oldSuccessText !== undefined) {
            successTextElement.textContent = oldSuccessText;
          }

          if (defaultElement && successElement) {
            successElement.style.display = "";
            defaultElement.style.display = "";
          }
        }, 800);
      });
    });
  }, []);

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
      >
        <MdShare className="h-5 w-5" />
        {title}
      </button>

      {/* Dropdown menu */}
      <div className="absolute top-12 left-0 z-10 hidden w-72 divide-y divide-neutral-200 rounded-lg bg-neutral-50 p-2 shadow-md dark:divide-neutral-700 dark:bg-neutral-800">
        <div className="py-2">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700"
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.icon}
              Share on {platform.name}
            </a>
          ))}
        </div>
        <div className="py-2">
          <button
            type="button"
            className="js-clipboard hover:text-dark group inline-flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700"
            data-clipboard-success-text="Copied"
          >
            <MdContentCopy className="js-clipboard-default h-5 w-5 transition group-hover:rotate-6" />
            <MdCheck className="js-clipboard-success hidden h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            <span className="js-clipboard-success-text">Copy link</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
