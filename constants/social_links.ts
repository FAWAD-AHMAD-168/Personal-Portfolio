interface SocialLink {
  id: number;
  name: string;
  href: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100066072281042&ref=NONE_ig_profile_ac",
    icon: "mdi:facebook",
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com/fawadahmad168/",
    icon: "mdi:instagram",
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fawad-ahmad-b9a286319",
    icon: "mdi:linkedin-box",
  },
  {
    id: 4,
    name: "GitHub",
    href: "https://github.com/FAWAD-AHMAD-168",
    icon: "mdi:github",
  },
];

export default socialLinks;