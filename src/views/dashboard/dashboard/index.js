import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'
// import Breadcrumbs from '@components/breadcrumbs'
// import StatsCard from './StatsCard'
// import OrdersBarChart from '../../ui-elements/cards/statistics/OrdersBarChart'
// import ProfitLineChart from '../../ui-elements/cards/statistics/ProfitLineChart'
// import SubscribersGained from './SubscribersGained'
// import RevenueGenerated from './RevenueGenerated'
// import QuaterlySales from '../../ui-elements/cards/statistics/QuaterlySales'
import OrdersReceived from '../../ui-elements/cards/statistics/OrdersReceived'
import SiteTraffic from '../../ui-elements/cards/statistics/SiteTraffic'
import ActiveUsers from '../../ui-elements/cards/statistics/ActiveUsers'
import Newsletter from '../../ui-elements/cards/statistics/Newsletter'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import RevenueReport from '../analytics/RevenueReport'
import Earnings from '../analytics/Earnings'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import Revenue from '../../ui-elements/cards/analytics/Revenue'
import Sales from '../../ui-elements/cards/analytics/Sales'
import SubscribersGained from '../../ui-elements/cards/statistics/SubscribersGained'
import RevenueGenerated from '../../ui-elements/cards/statistics/RevenueGenerated'
import QuaterlySales from '../../ui-elements/cards/statistics/QuaterlySales'



// import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
// import mock from '../../../../@fake-db/mock'
// import Cards from '../../../../@fake-db/cards/card-statistics'
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
import { colors } from '@material-ui/core'
import Chart from 'chart.js'
import { GiProfit } from 'react-icons/gi'

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
          <RevenueGenerated kFormatter={kFormatter} success={context.colors.success.main} />
        </Col>
        <Col lg='4' sm='6'>
          <OrdersReceived kFormatter={kFormatter} warning={context.colors.warning.main} />
        </Col>
        <Col lg='4' sm='6'>
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
       
      </Row>
      
      <Row>
      <Col lg='7' sm='12'>
          <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} />
        </Col>
        <Col lg='5' md='6' xs='12'>
              <Earnings success={context.colors.success.main} />
              {/* <StatsVertical icon={<Eye size={21} />} color='info' stats='36.9k' statTitle='Views' /> */}
            
          <StatsHorizontal icon={<GiProfit size={21} />} color='danger' stats='10%' statTitle='More Visits then last Month' />
        
            </Col>
            
           
        {/* Stats With Icons */}
        {/* <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<Eye size={21} />} color='info' stats='36.9k' statTitle='Views' />
        </Col> */}
       
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
      <Row>
      <Col lg='5' sm='12'>
          <Sales primary={context.colors.primary.main} info={context.colors.info.main} />
        </Col>
      <Col lg='7' sm='12'>
          <Revenue primary={context.colors.primary.main} />
        </Col>      </Row>
      
        </Fragment>
     )
}

// mock.onGet('/card/card-statistics/orders-bar-chart').reply(() => [200, data.orders_bar_chart])


export default StatisticsCards
