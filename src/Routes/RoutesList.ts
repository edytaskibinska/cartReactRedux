export interface INavLink {
  navLinkName: string;
  navLinkRoute: string;
}

export const navList: INavLink[] = [
  {
    navLinkName: "Products List",
    navLinkRoute: "/",
  },
  {
    navLinkName: "Cart",
    navLinkRoute: "/cart",
  },
];
