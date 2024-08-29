import { uniqueId } from 'lodash';

import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconAperture,
  IconShoppingCart,
  IconCertificate,
  IconBasket,
} from '@tabler/icons-react';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Documents',
    icon: IconCertificate,
    href: '/documents/',
    children: [
      {
        id: uniqueId(),
        title: 'All Documents',
        icon: IconPoint,
        href: '/documents/list',
      },
      {
        id: uniqueId(),
        title: 'Chat with Documents',
        icon: IconPoint,
        href: '/documents/detail/1',
      },
    ],
  },
];

export default Menuitems;
