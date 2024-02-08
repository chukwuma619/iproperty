type SidebarLinkType = {
  name: string;
  href: string;
};

export const SidebarTenantData: SidebarLinkType[] = [
  {
    name: "My Apartment",
    href: "/dashboard/tenant/apartment",
  },
  {
    name: "Rent an Apartment",
    href: "/dashboard/tenant/rent",
  },
  {
    name: "Settings",
    href: "/dashboard/tenant/settings",
  },
];

export const SidebarLessorData: SidebarLinkType[] = [
  {
    name: "My Apartment",
    href: "/dashboard/lessor/apartment",
  },
  {
    name: "Tenants",
    href: "/dashboard/lessor/tenants",
  },
  {
    name: "Settings",
    href: "/dashboard/lessor/settings",
  },
];
