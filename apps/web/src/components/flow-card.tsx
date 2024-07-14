"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", sem: 222, franco: 150, sofi: 180 },
  { date: "2024-04-02", sem: 97, franco: 180, sofi: 200 },
  { date: "2024-04-04", sem: 242, franco: 260, sofi: 240 },
  { date: "2024-04-05", sem: 373, franco: 290, sofi: 310 },
  { date: "2024-04-07", sem: 245, franco: 180, sofi: 220 },
  { date: "2024-04-08", sem: 409, franco: 320, sofi: 340 },
  { date: "2024-04-10", sem: 261, franco: 190, sofi: 210 },
  { date: "2024-04-11", sem: 327, franco: 350, sofi: 370 },
  { date: "2024-04-13", sem: 342, franco: 380, sofi: 400 },
  { date: "2024-04-14", sem: 137, franco: 220, sofi: 240 },
  { date: "2024-04-16", sem: 138, franco: 190, sofi: 210 },
  { date: "2024-04-17", sem: 446, franco: 360, sofi: 380 },
  { date: "2024-04-19", sem: 243, franco: 180, sofi: 200 },
  { date: "2024-04-20", sem: 89, franco: 150, sofi: 170 },
  { date: "2024-04-22", sem: 224, franco: 170, sofi: 190 },
  { date: "2024-04-23", sem: 138, franco: 230, sofi: 250 },
  { date: "2024-04-25", sem: 215, franco: 250, sofi: 270 },
  { date: "2024-04-26", sem: 75, franco: 130, sofi: 150 },
  { date: "2024-04-28", sem: 122, franco: 180, sofi: 200 },
  { date: "2024-04-29", sem: 315, franco: 240, sofi: 260 },
  { date: "2024-05-01", sem: 165, franco: 220, sofi: 240 },
  { date: "2024-05-02", sem: 293, franco: 310, sofi: 330 },
  { date: "2024-05-04", sem: 385, franco: 420, sofi: 440 },
  { date: "2024-05-05", sem: 481, franco: 390, sofi: 410 },
  { date: "2024-05-07", sem: 388, franco: 300, sofi: 320 },
  { date: "2024-05-08", sem: 149, franco: 210, sofi: 230 },
  { date: "2024-05-10", sem: 293, franco: 330, sofi: 350 },
  { date: "2024-05-11", sem: 335, franco: 270, sofi: 290 },
  { date: "2024-05-13", sem: 197, franco: 240, sofi: 260 },
  { date: "2024-05-14", sem: 448, franco: 490, sofi: 510 },
  { date: "2024-05-16", sem: 338, franco: 400, sofi: 420 },
  { date: "2024-05-17", sem: 499, franco: 420, sofi: 440 },
  { date: "2024-05-19", sem: 235, franco: 180, sofi: 200 },
  { date: "2024-05-20", sem: 177, franco: 230, sofi: 250 },
  { date: "2024-05-22", sem: 81, franco: 120, sofi: 140 },
  { date: "2024-05-23", sem: 252, franco: 290, sofi: 310 },
  { date: "2024-05-25", sem: 201, franco: 250, sofi: 270 },
  { date: "2024-05-26", sem: 213, franco: 170, sofi: 190 },
  { date: "2024-05-28", sem: 233, franco: 190, sofi: 210 },
  { date: "2024-05-29", sem: 78, franco: 130, sofi: 150 },
  { date: "2024-05-31", sem: 178, franco: 230, sofi: 250 },
  { date: "2024-06-01", sem: 178, franco: 200, sofi: 220 },
  { date: "2024-06-03", sem: 103, franco: 160, sofi: 180 },
  { date: "2024-06-04", sem: 439, franco: 380, sofi: 400 },
  { date: "2024-06-06", sem: 294, franco: 250, sofi: 270 },
  { date: "2024-06-07", sem: 323, franco: 370, sofi: 390 },
  { date: "2024-06-09", sem: 438, franco: 480, sofi: 500 },
  { date: "2024-06-10", sem: 155, franco: 200, sofi: 220 },
  { date: "2024-06-12", sem: 492, franco: 420, sofi: 440 },
  { date: "2024-06-13", sem: 81, franco: 130, sofi: 150 },
  { date: "2024-06-15", sem: 307, franco: 350, sofi: 370 },
  { date: "2024-06-16", sem: 371, franco: 310, sofi: 330 },
  { date: "2024-06-18", sem: 107, franco: 170, sofi: 190 },
  { date: "2024-06-19", sem: 341, franco: 290, sofi: 310 },
  { date: "2024-06-21", sem: 169, franco: 210, sofi: 230 },
  { date: "2024-06-22", sem: 317, franco: 270, sofi: 290 },
  { date: "2024-06-24", sem: 132, franco: 180, sofi: 200 },
  { date: "2024-06-25", sem: 141, franco: 190, sofi: 210 },
  { date: "2024-06-27", sem: 448, franco: 490, sofi: 510 },
  { date: "2024-06-28", sem: 149, franco: 200, sofi: 220 },
  { date: "2024-06-30", sem: 446, franco: 400, sofi: 420 },
  { date: "2024-07-10", sem: 446, franco: 400, sofi: 420 },
  { date: "2024-07-14", sem: 149, franco: 200, sofi: 220 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  sem: {
    label: "sem-the-bee.eth",
    color: "hsl(var(--chart-1))",
  },
  franco: {
    label: "franculio.eth",
    color: "hsl(var(--chart-2))",
  },
  sofi: {
    label: "sofi-verse.eth",
    color: "hsl(var(--chart-3))",
  }
} satisfies ChartConfig

export function FlowCard({className}: {className?: string}) {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card className={className}>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Blast</CardTitle>
          <CardDescription>
            Check on the blast power transmission for all grantees.
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData} stackOffset="expand">
            <defs>
              <linearGradient id="fillsem" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sem)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sem)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillfranco" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-franco)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-franco)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillsofi" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sofi)"
                  stopOpacity={0.8}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="franco"
              type="step"
              fill="url(#fillfranco)"
              stroke="var(--color-franco)"
              stackId="a"
            />
            <Area
              dataKey="sem"
              type="step"
              fill="url(#fillsem)"
              stroke="var(--color-sem)"
              stackId="a"
            />
            <Area
              dataKey="sofi"
              type="step"
              fill="url(#fillsofi)"
              stroke="var(--color-sofi)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
