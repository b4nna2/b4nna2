import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'
import Breadcrumbs from '@components/breadcrumbs'
import StatsCard from './StatsCard'
import OrdersBarChart from './OrdersBarChart'
import ProfitLineChart from './ProfitLineChart'
import SubscribersGained from './SubscribersGained'
import RevenueGenerated from './RevenueGenerated'
import QuaterlySales from './QuaterlySales'
import OrdersReceived from './OrdersReceived'
import SiteTraffic from './SiteTraffic'
import ActiveUsers from './ActiveUsers'
import Newsletter from './Newsletter'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import mock from '../../../../@fake-db/mock'
import Cards from '../../../../@fake-db/cards/card-statistics'
// import Stats from '../'

import {
  Eye,
  MessageSquare,
  ShoppingBag,
  Heart,
  Award,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon
} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'

const StatisticsCards = () => {
  
  
  const context = useContext(ThemeColors)
  

  return (
    
    
    <Fragment>

<Row>

        {/* Stats Line Charts */}
        <Col lg='4' sm='6'>
          <SiteTraffic />
        </Col>
        <Col lg='4' sm='6'>
          <ActiveUsers success={context.colors.success.main} />
        </Col>
        <Col lg='4' sm='6'>
          <Newsletter warning={context.colors.warning.main} />
        </Col>
        {/* Stats Line Charts */}
      </Row>
      <Row>
        {/* Stats Line Charts */}
        <Col lg='4' sm='6'>
          <SiteTraffic />
        </Col>
        <Col lg='4' sm='6'>
          <ActiveUsers success={context.colors.success.main} />
        </Col>
        <Col lg='4' sm='6'>
          <Newsletter warning={context.colors.warning.main} />
        </Col>
        {/* Stats Line Charts */}
      </Row>
      
      <Row>
        {/* Stats With Icons */}
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<Eye size={21} />} color='info' stats='36.9k' statTitle='Views' />
        </Col>
       
        {/* <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<MessageSquare size={21} />} color='warning' stats='12k' statTitle='Comments' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<ShoppingBag size={21} />} color='danger' stats='97.8k' statTitle='Orders' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Heart size={21} />} color='primary' stats='26.8' statTitle='Bookmarks' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Award size={21} />} color='success' stats='689' statTitle='Reviews' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Truck size={21} />} color='danger' stats='2.1k' statTitle='Returns' />
        </Col> */}
        {/* Stats With Icons */}
        {/* <Cards /> */}

      </Row>
</Fragment>
     )
}

// mock.onGet('/card/card-statistics/orders-bar-chart').reply(() => [200, data.orders_bar_chart])


export default StatisticsCards
