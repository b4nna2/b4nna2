// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import placeedit from '@src/views/apps/placeedit/store/reducer'
import todo from '@src/views/apps/users/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import managecountry from '@src/views/apps/managecountry/store/reducer'
import comments from '@src/views/apps/comments/store/reducer'
import Users from '@src/views/apps/users/store/reducer'
import dashboard from '@src/views/apps/dashboard/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  auth,
  todo,
  placeedit,
  managecountry,
  users,
  navbar,
  layout,
  Users,
  comments,
  dashboard,
  dataTables
})

export default rootReducer
