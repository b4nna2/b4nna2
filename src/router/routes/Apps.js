import { lazy } from 'react'
import { Redirect } from 'react-router-dom'


const AppRoutes = [
  {
    path: '/apps/managecountry',
    exact: true,
    appLayout: true,
    className: 'managecountry-application',
    component: lazy(() => import('../../views/apps/managecountry'))
  },
  {
    path: '/apps/managecountry/:folder',
    exact: true,
    appLayout: true,
    className: 'managecountry-application',
    component: lazy(() => import('../../views/apps/managecountry')),
    meta: {
      navLink: '/apps/managecountry'
    }
  },
  {
    path: '/apps/managecountry/label/:label',
    exact: true,
    appLayout: true,
    className: 'managecountry-application',
    component: lazy(() => import('../../views/apps/managecountry')),
    meta: {
      navLink: '/apps/managecountry'
    }
  },
  {
    path: '/apps/managecountry/:filter',
    component: lazy(() => import('../../views/apps/managecountry')),
    meta: {
      navLink: '/apps/managecountry'
    }
  },
  {
    path: '/apps/placeedit',
    appLayout: true,
    className: 'placeedit-application',
    component: lazy(() => import('../../views/apps/placeedit'))
  },
  {
    path: '/apps/change/email',
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../views/apps/change/email'))
  },
  {
    path: '/apps/change/forget',
    // appLayout: true,
    // className: 'forget-application',
    component: lazy(() => import('../../views/apps/change/forget'))
  },
  // {
  //   path: '/apps/useredit',
  //   exact: true,

  //   // appLayout: true,
  //   // className: 'forget-application',
  //   component: lazy(() => import('../../views/apps/useredit'))
  // },{
  //   path: '/apps/useredit/:id',
  //   component: lazy(() => import('../../views/apps/useredit')),
  //   meta: {
  //     navLink: '/apps/useredit'
  //   }
  // },
  {
    path: '/apps/change/password',
    
    component: lazy(() => import('../../views/apps/change/password'))
  },
  {
    path: '/apps/comments/managecountry',
    
    component: lazy(() => import('../../views/apps/comments/managecountry'))
  },
  {
    path: '/apps/users',
    exact: true,
    appLayout: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/users'))
  },
  {
    path: '/apps/users1',
    exact: true,
    appLayout: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/users1'))
  },
  {
    path: '/apps/users2',
    exact: true,
    appLayout: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/users2'))
  },
  {
    path: '/apps/users/:filter',
    appLayout: true,
    exact: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/users')),
    meta: {
      navLink: '/apps/users'
    }
  },
  {
    path: '/apps/user/manageplaces/tag/:tag',
    appLayout: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/user/manageplaces')),
    meta: {
      navLink: '/apps/user/manageplaces'
    }
  },
  {
    path: '/apps/user/manageplaces',
    exact: true,
    appLayout: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/user/manageplaces'))
  },
  {
    path: '/apps/user/manageplaces/:filter',
    appLayout: true,
    exact: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/user/manageplaces')),
    meta: {
      navLink: '/apps/user/manageplaces'
    }
  },
  {
    path: '/apps/user/manageplaces/tag/:tag',
    appLayout: true,
    className: 'users-application',
    component: lazy(() => import('../../views/apps/user/manageplaces')),
    meta: {
      navLink: '/apps/user/manageplaces'
    }
  },
  // {
  //   path: '/apps/users',
  //   component: lazy(() => import('../../views/apps/users'))
  // },
  {
    path: '/apps/user/manageplaces',
    component: lazy(() => import('../../views/apps/user/manageplaces'))
  },
  {
    path: '/apps/comments/preview/:id',
    component: lazy(() => import('../../views/apps/comments/preview')),
    meta: {
      navLink: '/apps/comments/preview'
    }
  },
  {
    path: '/apps/comments/preview',
    exact: true,
    component: () => <Redirect to='/apps/comments/preview/4987' />
  },
  {
    path: '/apps/comments/blogs/:id',
    component: lazy(() => import('../../views/ui-elements/blogs')),
    meta: {
      navLink: '/apps/comments/blogs'
    }
  },
  {
    path: '/apps/comments/blogs',
    exact: true,
    component: () => <Redirect to='/apps/comments/blogs/4987' />
  },
 
  {
    path: '/apps/comments/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/comments/print'))
  },
  {
    path: '/apps/dashboard/shop',
    className: 'dashboard-application',
    component: lazy(() => import('../../views/apps/dashboard/shop'))
  },
  {
    path: '/apps/dashboard/wishlist',
    className: 'dashboard-application',
    component: lazy(() => import('../../views/apps/dashboard/wishlist'))
  },
  {
    path: '/apps/dashboard/product-detail',
    exact: true,
    className: 'dashboard-application',
    component: () => <Redirect to='/apps/dashboard/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/dashboard/product-detail/:product',
    exact: true,
    className: 'dashboard-application',
    component: lazy(() => import('../../views/apps/dashboard/detail')),
    meta: {
      navLink: '/apps/dashboard/product-detail'
    }
  },
  {
    path: '/apps/dashboard/checkout',
    className: 'dashboard-application',
    component: lazy(() => import('../../views/apps/dashboard/checkout'))
  },
  // {
  //   path: '/apps/user/list',
  //   component: lazy(() => import('../../views/apps/user/list'))
  // },
  {
    path: '/apps/user/setting',
    exact: true,
    component: () => <Redirect to='/apps/user/setting/1' />
  },
  {
    path: '/apps/user/setting/:id',
    component: lazy(() => import('../../views/apps/user/setting')),
    meta: {
      navLink: '/apps/user/setting'
    }
  },
  
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  // {
  //   path: '/apps/users/userupdate',
  //   exact: true,
  //   component: () => <Redirect to='/apps/users/userupdate' />
  // },
  {
    path: '/apps/user/manageplaces/userupdate',
    exact: true,
    component: () => <Redirect to='/apps/user/manageplaces/userupdate' />
  },
  {
    path: '/apps/useredit',
    exact: true,
    component: () => <Redirect to='/apps/useredit/1' />
  },
  {
    path: '/apps/useredit/:id',
    component: lazy(() => import('../../views/apps/useredit')),
    meta: {
      navLink: '/apps/useredit'
    }
  },
  {
    path: '/apps/useredit1',
    exact: true,
    component: () => <Redirect to='/apps/useredit1/1' />
  },
  {
    path: '/apps/useredit1/:id',
    component: lazy(() => import('../../views/apps/useredit1')),
    meta: {
      navLink: '/apps/useredit1'
    }
  },
  {
    path: '/apps/useredit2',
    exact: true,
    component: () => <Redirect to='/apps/useredit2/1' />
  },
  {
    path: '/apps/useredit2/:id',
    component: lazy(() => import('../../views/apps/useredit2')),
    meta: {
      navLink: '/apps/useredit2'
    }
  },
  {
    path: '/apps/edit',
    exact: true,
    component: () => <Redirect to='/apps/edit/1' />
  },
  {
    path: '/apps/edit/:id',
    component: lazy(() => import('../../views/apps/edit')),
    meta: {
      navLink: '/apps/edit'
    }
  },
  {
    path: '/apps/editstate',
    exact: true,
    component: () => <Redirect to='/apps/editstate/1' />
  },
  {
    path: '/apps/editstate/:id',
    component: lazy(() => import('../../views/apps/editstate')),
    meta: {
      navLink: '/apps/editstate'
    }
  },
  
 
  
]

export default AppRoutes
