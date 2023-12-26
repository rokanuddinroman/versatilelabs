import {
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Topbar = {
  text: "Get this template",
  URL: "",
};
const Navbar = {
  LogoText: "Versatile Labs",
  LogoImage: "/Versatile.png",
};
const HeroSection = {
  Heading: "We build premium websites and mobile apps at varsatile Labs",
  Paragraph:
    "Experience digital excellence with Versatile Labs—your source for premium websites, apps, and software solutions.",
  ButtonText: "Subscribe for 0$",
  InputText: "your email",
};
const TestimonialSection = [
  {
    image: "/assets/pfp.jpg",
    username: "rokanuddin",
    comment:
      "Linkup is a better Linktree alternative that helped my coversion 2x",
    isFeatured: true,
  },
  {
    image: "/assets/pfp.jpg",
    username: "rokanuddin",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isFeatured: false,
  },
  {
    image: "/assets/pfp.jpg",
    username: "rokanuddin",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isFeatured: false,
  },
  {
    image: "/assets/pfp.jpg",
    username: "rokanuddin",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isFeatured: false,
  },
];
const SocialSection = {
  images: [
    "/assets/1.png",
    "/assets/1.png",
    "/assets/1.png",
    "/assets/1.png",
    "/assets/1.png",
  ],
  heading: "Master development and design with this essential guide.",
  paragraph:
    "Master the art of creating cool ui with quick tips and tricks to boost your efficiency.",
  buttonLogo: <InstagramLogo size={18} className="mr-1" weight="bold" />,
  buttonText: "Instagram",
  buttonURL: "",
};
const FooterSection = {
  Links: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Templates",
      url: "/templates",
    },
    {
      title: "Blogs",
      url: "/blogs",
    },
    {
      title: "Work",
      url: "/work",
    },
  ],
  socials: [
    {
      logo: <TwitterLogo size={24} color="#131317" weight="fill" />,
      url: "",
    },
    {
      logo: <YoutubeLogo size={24} color="#131317" weight="fill" />,
      url: "",
    },
    {
      logo: <LinkedinLogo size={24} color="#131317" weight="fill" />,
      url: "",
    },
    {
      logo: <InstagramLogo size={24} color="#131317" weight="fill" />,
      url: "",
    },
  ],
};

const useData = () => {
  const TopbarData = Topbar;
  const NavbarData = Navbar;
  const HeroSectionData = HeroSection;
  const TestimonialSectionData = TestimonialSection;
  const SocialSectionData = SocialSection;
  const FooterSectionData = FooterSection;
  return {
    TopbarData,
    NavbarData,
    HeroSectionData,
    TestimonialSectionData,
    SocialSectionData,
    FooterSectionData,
  };
};

export default useData;
