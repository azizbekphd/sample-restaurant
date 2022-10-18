import {Order} from '../models';
import {Capuccino, SmokyBurger} from './products';

const orders: Array<Order> = [
  {
    id: '1',
    type: 'store_pickup',
    status: 'received',
    receipt: [
      {
        product: Capuccino,
        note: 'Size: Small',
        psc: 1,
      },
      {
        product: SmokyBurger,
        note: 'Adds on: Double-patty, Emmento',
        psc: 1,
      },
    ],
    from: {
      id: 3,
      name: 'SB Han Thuyen',
      address: '11-13 Han Thuyen, D.1, HCM city',
      open: '07:00 - 22:00',
      images: [
        'https://picsum.photos/seed/3_1/350/350',
        'https://picsum.photos/seed/3_2/350/350',
        'https://picsum.photos/seed/3_3/350/350',
        'https://picsum.photos/seed/3_4/350/350',
        'https://picsum.photos/seed/3_5/350/350',
      ],
      phone: '0909090909',
      like: false,
    },
    to: '285 CMT8, D.10, HCM city',
    payment: {
      method: 'Momo',
      icon: '',
      price: '319.000 ₫',
      shippingFee: '15.000 ₫',
      promotion: '-50.000 ₫',
      total: '284.000 ₫',
    },
    orderedAt: '20/04/2020, 04:20',
    receivedAt: '10:00, Today',
  },
  {
    id: '2',
    type: 'delivery',
    status: 'delivering',
    receipt: [
      {
        product: Capuccino,
        note: 'Size: Small',
        psc: 1,
      },
      {
        product: SmokyBurger,
        note: 'Adds on: Double-patty, Emmento',
        psc: 1,
      },
    ],
    from: {
      id: 3,
      name: 'SB Han Thuyen',
      address: '11-13 Han Thuyen, D.1, HCM city',
      open: '07:00 - 22:00',
      images: [
        'https://picsum.photos/seed/3_1/350/350',
        'https://picsum.photos/seed/3_2/350/350',
        'https://picsum.photos/seed/3_3/350/350',
        'https://picsum.photos/seed/3_4/350/350',
        'https://picsum.photos/seed/3_5/350/350',
      ],
      phone: '0909090909',
      like: false,
    },
    to: '285 CMT8, D.10, HCM city',
    payment: {
      method: 'Momo',
      icon: '',
      price: '319.000 ₫',
      shippingFee: '15.000 ₫',
      promotion: '-50.000 ₫',
      total: '284.000 ₫',
    },
    orderedAt: '20/04/2020, 04:20'
  },
  {
    id: '3',
    type: 'delivery',
    status: "delivered",
    receipt: [
      {
        product: Capuccino,
        note: 'Size: Small',
        psc: 1,
      },
      {
        product: SmokyBurger,
        note: 'Adds on: Double-patty, Emmento',
        psc: 1,
      },
    ],
    from: {
      id: 3,
      name: 'SB Han Thuyen',
      address: '11-13 Han Thuyen, D.1, HCM city',
      open: '07:00 - 22:00',
      images: [
        'https://picsum.photos/seed/3_1/350/350',
        'https://picsum.photos/seed/3_2/350/350',
        'https://picsum.photos/seed/3_3/350/350',
        'https://picsum.photos/seed/3_4/350/350',
        'https://picsum.photos/seed/3_5/350/350',
      ],
      phone: '0909090909',
      like: false,
    },
    to: '285 CMT8, D.10, HCM city',
    payment: {
      method: 'Momo',
      icon: '',
      price: '319.000 ₫',
      shippingFee: '15.000 ₫',
      promotion: '-50.000 ₫',
      total: '284.000 ₫',
    },
    orderedAt: '20/04/2020, 04:20'
  },
  {
    id: '4',
    type: 'delivery',
    status: 'failed',
    receipt: [
      {
        product: Capuccino,
        note: 'Size: Small',
        psc: 1,
      },
      {
        product: SmokyBurger,
        note: 'Adds on: Double-patty, Emmento',
        psc: 1,
      },
    ],
    from: {
      id: 3,
      name: 'SB Han Thuyen',
      address: '11-13 Han Thuyen, D.1, HCM city',
      open: '07:00 - 22:00',
      images: [
        'https://picsum.photos/seed/3_1/350/350',
        'https://picsum.photos/seed/3_2/350/350',
        'https://picsum.photos/seed/3_3/350/350',
        'https://picsum.photos/seed/3_4/350/350',
        'https://picsum.photos/seed/3_5/350/350',
      ],
      phone: '0909090909',
      like: false,
    },
    to: '285 CMT8, D.10, HCM city',
    payment: {
      method: 'Momo',
      icon: '',
      price: '319.000 ₫',
      shippingFee: '15.000 ₫',
      promotion: '-50.000 ₫',
      total: '284.000 ₫',
    },
    orderedAt: '20/04/2020, 04:20'
  },
  {
    id: '5',
    type: 'delivery',
    status: "delivered",
    receipt: [
      {
        product: Capuccino,
        note: 'Size: Small',
        psc: 1,
      },
      {
        product: SmokyBurger,
        note: 'Adds on: Double-patty, Emmento',
        psc: 1,
      },
    ],
    from: {
      id: 3,
      name: 'SB Han Thuyen',
      address: '11-13 Han Thuyen, D.1, HCM city',
      open: '07:00 - 22:00',
      images: [
        'https://picsum.photos/seed/3_1/350/350',
        'https://picsum.photos/seed/3_2/350/350',
        'https://picsum.photos/seed/3_3/350/350',
        'https://picsum.photos/seed/3_4/350/350',
        'https://picsum.photos/seed/3_5/350/350',
      ],
      phone: '0909090909',
      like: false,
    },
    to: '285 CMT8, D.10, HCM city',
    payment: {
      method: 'Momo',
      icon: '',
      price: '319.000 ₫',
      shippingFee: '15.000 ₫',
      promotion: '-50.000 ₫',
      total: '284.000 ₫',
    },
    orderedAt: '20/04/2020, 04:20'
  },
];

export default orders;
