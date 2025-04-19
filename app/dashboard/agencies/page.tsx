import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AgencyList } from "@/components/agency-list"

export default function AgenciesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Insurance Agencies</h1>
        <Link href="/dashboard/agencies/apply">
          <Button>Apply to New Agency</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Agency Partnerships</CardTitle>
          <CardDescription>Manage your current agency partnerships and applications</CardDescription>
        </CardHeader>
        <CardContent>
          <AgencyList />
        </CardContent>
      </Card>
    </div>
  )
}
