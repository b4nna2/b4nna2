import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  // {
  //   path: '/dashboard/analytics',
  //   component: lazy(() => import('../../views/dashboard/analytics'))
  // },
  {
    path: '/dashboard/dashboard',
    component: lazy(() => import('../../views/dashboard/dashboard')),
    exact: true
  }
]

export default DashboardRoutes
