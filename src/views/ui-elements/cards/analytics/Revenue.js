import { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'
import { Settings } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const Revenue = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/revenue').then(res => setData(res.data))
  }, [])

  const options = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        offsetX: -10
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 12],
        width: [4, 3]
      },
      legend: {
        show: false
      },
      colors: ['#d0ccff', '#ebe9f1'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: [props.primary, '#ebe9f1'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '1rem'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
        axisBorder: {
          show: false
        },
        tickPlacement: 'on'
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '1rem'
          },
          formatter(val) {
            return val > 999 ? `${(val / 1000).toFixed(0)}k` : val
          }
        }
      },
      grid: {
        borderColor: '#e7eef7',
        padding: {
          top: -20,
          bottom: -10,
          left: 20
        }
      },
      tooltip: {
        x: { show: false }
      }
    },
    series = [
      {
        name: 'This Month',
        data: [45, 47, 44, 41, 46, 50, 51, 52]
      },
      {
        name: 'Last Month',
        data: [43, 47, 48, 41, 42, 50, 55, 52]
      }
    ]
  return data !== null ? (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Countries visited</CardTitle>
        <Settings size={18} className='text-muted cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div className='d-flex justify-content-start mb-3'>
          <div className='mr-2'>
            <CardText className='mb-50'>This Month</CardText>
            <h3 className='font-weight-bolder'>
              <sup className='font-medium-1 font-weight-bold mr-25'></sup>
              <span className='text-primary'>50</span>
            </h3>
          </div>
          <div>
            <CardText className='mb-50'>Last Month</CardText>
            <h3 className='font-weight-bolder'>
              <sup className='font-medium-1 font-weight-bold mr-25'></sup>
              <span>40</span>
            </h3>
          </div>
        </div>
        <Chart options={options} series={series} type='line' height={240} />
      </CardBody>
    </Card>
  ) : null
}
export default Revenue