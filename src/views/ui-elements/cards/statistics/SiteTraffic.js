import { useEffect, useState } from 'react'
import axios from 'axios'
import { Monitor } from 'react-feather'
import StatsWithLineChart from '@components/widgets/stats/StatsWithLineChart'
import { AiOutlineUserAdd } from 'react-icons/ai'

const SiteTraffic = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/site-traffic').then(res => setData(res.data))
  }, [])

  return data !== null ? (
    <StatsWithLineChart
      icon={<AiOutlineUserAdd size={21} />}
      color='primary'
      stats='78.9k'
      statTitle='Total Users'
      series={data.series}
      type='line'
    />
  ) : null
}

export default SiteTraffic
