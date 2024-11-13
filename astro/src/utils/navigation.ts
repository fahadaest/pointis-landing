// An array of links for navigation bar
import {CHROME_STORE_LINK} from "@utils/shared.ts";

const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Get", url: CHROME_STORE_LINK },
  // { name: "Products", url: "/products" },
  // { name: "Services", url: "/services" },
  // { name: "Blog", url: "/blog" },
  // { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Links",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "Privacy", url: "/pp" },
    ],
  },
  // {
  //   section: "Ecosystem",
  //   links: [
  //     { name: "Documentation", url: "/welcome-to-docs/" },
  //     { name: "Products", url: "/products" },
  //     { name: "Services", url: "/services" },
  //   ],
  // },
  // {
  //   section: "Company",
  //   links: [
  //     { name: "About us", url: "#" },
  //     { name: "Blog", url: "/blog" },
  //     { name: "Careers", url: "#" },
  //     { name: "Customers", url: "#" },
  //   ],
  // },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};