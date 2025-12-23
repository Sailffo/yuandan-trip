import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export interface PriceChartProps {
  mainPrice: number
  altPrice: number
}

export function PriceComparisonChart({ mainPrice, altPrice }: PriceChartProps) {
  const data = [
    { name: '1 月 3 日返程', price: mainPrice },
    { name: '1 月 2 日返程', price: altPrice },
  ]

  return (
    <div className='h-44 w-full'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#e5e7eb' />
          <XAxis
            dataKey='name'
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            width={40}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: '1px solid #e5e7eb',
              fontSize: 12,
            }}
            formatter={(value: number) => [`约 ${value} 元/人`, '机票']}
          />
          <Bar
            dataKey='price'
            radius={8}
            fill='url(#priceGradient)'
            maxBarSize={40}
          />
          <defs>
            <linearGradient id='priceGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#fb7185' />
              <stop offset='100%' stopColor='#f97316' />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
