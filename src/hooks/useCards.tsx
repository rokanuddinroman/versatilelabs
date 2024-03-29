const ALLCARDS = [
  {
    category: "Templates",
    title: "Linkup v1.0 - Linktree Alternative",
    slug: "linkup-linktree-alternative",
    image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
    isFree: false,
    price: "49",
  },
  {
    category: "Templates",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/ZSvRm9W/image.png",
    slug: "linkup-linktree-alternative-2",
    isFree: true,
    price: "49",
  },
  {
    category: "Templates",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
    slug: "linkup-linktree-alternative-3",
    isFree: false,
    price: "49",
  },
  {
    category: "Products",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
    slug: "linkup-linktree-alternative-4",
    isFree: true,
    price: "49",
  },
  {
    category: "Resources",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
    slug: "linkup-linktree-alternative-5",
    isFree: false,
    price: "49",
  },
];
const useCards = () => {
  const myCards = ALLCARDS;
  return { myCards };
};

export default useCards;
