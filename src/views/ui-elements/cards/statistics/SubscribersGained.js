import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from 'react-feather'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'
import { AiOutlineStar } from 'react-icons/ai'

const SubscribersGained = ({ kFormatter }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<AiOutlineStar size={21} />}
      color='primary'
      stats={kFormatter(data.analyticsData.subscribers)}
      statTitle='Featured Places'
      series={data.series}
      type='area'
    />
  ) : null
}

export default SubscribersGained
