import { ApplicationMenu, BrandMenu, BucketMenu, CampaignMenu, CreatorMenu, DashboardMenu, KycMenu, MasterMenu, PaymentsMenu } from "../svg";

export const Sidermenu = [
  {
    id: 1,
    menuId: 1,
    menulist: 'Dashboard',
    menuicon: <DashboardMenu />,
    menupath: '/dashboard',
    submenu: false,
  },
  {
    id: 2,
    menuId: 2,
    menulist: 'Campaigns',
    menuicon: <CampaignMenu />,
    menupath: '/campaigns',
    submenu: true,
    submenulist: [
      { menuId: 3, name: 'Applications 1', icon: <ApplicationMenu />, submenupath: '', }
    ]
  },
  {
    id: 3,
    menuId: 7,
    menulist: 'Brands',
    menuicon: <BrandMenu />,
    menupath: '/brand',
    submenu: false,
  },
  {
    id: 4,
    menuId: 8,
    menulist: 'Creators',
    menuicon: <CreatorMenu />,
    menupath: '/creator',
    submenu: false,
  },
  {
    id: 5,
    menuId: 9,
    menulist: 'KYCs',
    menuicon: <KycMenu svgFill="#ffffff" />,
    menupath: '/kyc',
    submenu: false,    
  },
  {
    id: 6,
    menuId: 10,
    menulist: 'Payments',
    menuicon: <PaymentsMenu />,
    menupath: '/payments',
    submenu: true,
    submenulist: [
      { menuId: 3, name: 'Master', icon: <MasterMenu />, submenupath: '', },
      { menuId: 4, name: 'Bucket', icon: <BucketMenu />, submenupath: '', },
    ]
  },
]