"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Overview() {
  // This would come from your API in a real application
  const policyData = [
    {
      name: "Jan",
      total: 4,
    },
    {
      name: "Feb",
      total: 3,
    },
    {
      name: "Mar",
      total: 5,
    },
    {
      name: "Apr",
      total: 2,
    },
    {
      name: "May",
      total: 6,
    },
    {
      name: "Jun",
      total: 4,
    },
    {
      name: "Jul",
      total: 3,
    },
    {
      name: "Aug",
      total: 7,
    },
    {
      name: "Sep",
      total: 5,
    },
    {
      name: "Oct",
      total: 4,
    },
    {
      name: "Nov",
      total: 0,
    },
    {
      name: "Dec",
      total: 0,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Sales Overview</CardTitle>
        <CardDescription>Number of policies sold per month in the current year</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={policyData}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
