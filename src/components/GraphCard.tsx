import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ChartInput = {
  title: string
  value: string
  data: { name: string; value: number }[]
}

export const GraphCard = ({ title, value, data }: ChartInput) => {
  return (
    <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
      
        {/* Title and filter */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-lg font-semibold">{title}</p>
            <h2 className="text-xl font-semibold">{value}</h2>
          </div>
          <Button className="text-[#6B7280] bg-[#D1D5DB]"> 5 Years </Button>
        </div>

        {/* Graph area */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" 
                stroke="rgba(209, 213, 219, 0.5)" 
                horizontal={true}
                vertical={false}
                />

              <XAxis dataKey="name" 
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
                axisLine={{ 
                  stroke: "rgba(209, 213, 219, 0.5)",
                  strokeDasharray: "3 3" 
                }}
                tickMargin={10}
                 />

              <YAxis
                domain={[0, 15000]}
                ticks={[0, 3000, 6000, 9000, 12000, 15000]}
                tickFormatter={(value) => value.toLocaleString()}
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
                axisLine={false}
                width={60}
              />
              <Tooltip formatter={(value: number) => value.toLocaleString()} />
              
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={2}
                fill="url(#colorValue)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
    </Card>
  )
}
