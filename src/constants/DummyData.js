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
    submenu: false,
    // submenulist: [
    //   { menuId: 3, name: 'Applications 1', icon: <ApplicationMenu />, submenupath: '', }
    // ]
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
    id: 7,
    menuId: 10,
    menulist: 'Payments',
    menuicon: <PaymentsMenu />,
    menupath: '/payments',
    submenu: true,
    submenulist: [
      {id: 1, menuId: 3, name: 'Master Transaction', icon: <MasterMenu />, submenupath: '', },
      {id: 2, menuId: 4, name: 'Bucket Transaction', icon: <BucketMenu />, submenupath: '/backet-list', },
    ]
  },
  {
    id: 6,
    menuId: 10,
    menulist: 'Hyper Local',
    menuicon: <CampaignMenu />,
    menupath: '/hyperlocal',
    submenu: false,
    // submenulist: [
    //   { menuId: 3, name: 'Applications 1', icon: <ApplicationMenu />, submenupath: '', }
    // ]
  },
]