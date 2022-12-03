export const Sidermenu = [
  {
    id: 1,
    menuId: 1,
    menulist: 'Dashboard',
    menuicon: 'MailIcon',
    menupath: '/dashboard',
    submenu: false,
  },
  {
    id: 2,
    menuId: 2,
    menulist: 'Campaigns',
    menuicon: 'MailIcon',
    menupath: '/campaigns',
    submenu: false,
    submenulist: [
      { menuId: 3, name: 'Applications 1', icon: 'InboxIcon', submenupath: '', },
      { menuId: 4, name: 'Applications 2', icon: 'InboxIcon', submenupath: '', },
      { menuId: 5, name: 'Applications 3', icon: 'InboxIcon', submenupath: '', },
      { menuId: 6, name: 'Applications 4', icon: 'InboxIcon', submenupath: '', },
    ]
  },
  {
    id: 3,
    menuId: 7,
    menulist: 'Brands',
    menuicon: 'MailIcon',
    menupath: '/brand',
    submenu: false,
  },
  {
    id: 4,
    menuId: 8,
    menulist: 'Creators',
    menuicon: 'MailIcon',
    menupath: '/creator',
    submenu: false,
  },
  {
    id: 4,
    menuId: 8,
    menulist: 'KYC',
    menuicon: 'MailIcon',
    menupath: '/kyc',
    submenu: false,
  },
  // {
  //   id: 6,
  //   menuId: 10,
  //   menulist: 'Payments',
  //   menuicon: 'MailIcon',
  //   menupath: '',
  //   submenu: true,
  //   submenulist: [
  //     { menuId: 3, name: 'sub Dashboard 1', icon: 'InboxIcon', submenupath: '', },
  //     { menuId: 4, name: 'sub Dashboard 2', icon: 'InboxIcon', submenupath: '', },
  //     { menuId: 5, name: 'sub Dashboard 3', icon: 'InboxIcon', submenupath: '', },
  //     { menuId: 6, name: 'sub Dashboard 4', icon: 'InboxIcon', submenupath: '', },
  //   ]
  // },
]