import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PolicyTable } from "@/components/policy-table"

export default function PoliciesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Policies</h1>
        <Link href="/dashboard/policies/new">
          <Button>Create New Policy</Button>
        </Link>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Policies</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Policies</CardTitle>
              <CardDescription>View and manage all your insurance policies</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Policies</CardTitle>
              <CardDescription>View and manage your active insurance policies</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyTable status="active" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Policies</CardTitle>
              <CardDescription>View and manage policies awaiting approval or payment</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyTable status="pending" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expiring">
          <Card>
            <CardHeader>
              <CardTitle>Expiring Policies</CardTitle>
              <CardDescription>Policies expiring within the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <PolicyTable status="expiring" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
