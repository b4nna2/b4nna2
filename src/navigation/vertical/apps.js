import {Home, Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, Users, User, Map, Compass, Settings, Flag } from 'react-feather'
import { CgAttribution } from 'react-icons/cg'

export default [
  // {
  //   header: 'Apps & Pages'
  // },
  // {
  //   id: 'dashboards',
  //   title: 'Dashboards',
  //   icon: <Home size={20} />,
  //   navLink:'/apps/dashboard'
  // },
  {
    id: 'todo',
    title: 'Users',
    icon: <Users size={20} />,
    navLink: '/apps/users'
  },
  {
    id: 'users',
    title:'Manage Places',
    icon: <Map size={12} />,
    navLink: '/apps/user/manageplaces'
    
    
  },
  {
    id: 'formValidation',
    title: 'Manage States',
    icon: <Compass size={20} />,
    navLink: '/forms/managestates'
      
    
  },
  // {
  //   id: 'view',
  //   title: 'Manage States',
  //   icon:<Compass size={20} />,
  //   navLink: '/apps/user/view'
  // },
  // {
  //   id: 'users',
  //   title: 'Manage States',
  //   icon: <Compass size={20} />,
  //    navLink: '/apps/user/list'
     
    
  // },
  // {
  //   id: 'new-one',
  //   title: 'Comments',
  //   icon: <Compass size={20} />,
  //    navLink: '/apps/user/new-one'
     
    
  // },
  
  {
    id: 'managecountry',
    title: 'Manage Country',
    icon: <Flag size={20} />,
    navLink: '/apps/managecountry'
  },
  {
    id: 'formRepeater',
    title: 'Trip',
    icon: <CgAttribution size={20} />,
    navLink: '/forms/trip'
  }
 
  // {
  //   id: 'chat',
  //   title: 'Trips',
  //   icon: <CgAttribution size={20} />,
  //   navLink: '/apps/chat'
  // }
  // {
  //       id: 'invoiceAdd',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/add'
  //     }
  // {
  // id: 'invoiceList',
  //     title: 'List',
  //     icon: <Circle size={12} />,
  //     navLink: '/apps/invoice/list'
  //   }
  // {
  //       id: 'invoicePreview',
  //       title: 'Preview',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/preview'
  //     }
  // {
  //   id: 'calendar',
  //   title: 'Calendar',
  //   icon: <Calendar size={20} />,
  //   navLink: '/apps/calendar'
  // }
  
  // {
  //   id: 'invoiceApp',
  //   title: 'Invoice',
  //   icon: <FileText size={20} />
    // children: [
    //   {
    //     id: 'invoiceList',
    //     title: 'List',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/list'
    //   },
    //   {
    //     id: 'invoicePreview',
    //     title: 'Preview',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/preview'
    //   },
    //   {
    //     id: 'invoiceEdit',
    //     title: 'Edit',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/edit'
    //   },
    //   {
    //     id: 'invoiceAdd',
    //     title: 'Add',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/add'
    //   }
    // ]
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />
    // children: [
    //   {
    //     id: 'shop',
    //     title: 'Shop',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/shop'
    //   },
    //   {
    //     id: 'detail',
    //     title: 'Details',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/product-detail'
    //   },
    //   {
    //     id: 'wishList',
    //     title: 'Wish List',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/wishlist'
    //   },
    //   {
    //     id: 'checkout',
    //     title: 'Checkout',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/checkout'
    //   }
    // ]
  // },
 ]
