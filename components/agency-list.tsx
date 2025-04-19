import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AgencyList() {
  // This would come from your API in a real application
  const agencies = [
    {
      id: "agency-1",
      name: "Jubilee Insurance",
      status: "active",
      partnerSince: "2023-01-15",
      coverTypes: ["Motor", "Health", "Life"],
      policiesSold: 12,
    },
    {
      id: "agency-2",
      name: "Britam Insurance",
      status: "active",
      partnerSince: "2023-03-20",
      coverTypes: ["Property", "Business"],
      policiesSold: 5,
    },
    {
      id: "agency-3",
      name: "CIC Insurance",
      status: "active",
      partnerSince: "2023-02-10",
      coverTypes: ["Motor", "Travel"],
      policiesSold: 7,
    },
    {
      id: "agency-4",
      name: "AAR Insurance",
      status: "pending",
      partnerSince: "2023-09-05",
      coverTypes: ["Health"],
      policiesSold: 0,
    },
  ]

  return (
    <div className="grid gap-4">
      {agencies.map((agency) => (
        <Card key={agency.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{agency.name}</CardTitle>
              <Badge variant={agency.status === "active" ? "default" : "secondary"}>
                {agency.status.charAt(0).toUpperCase() + agency.status.slice(1)}
              </Badge>
            </div>
            <CardDescription>
              {agency.status === "active"
                ? `Partner since: ${new Date(agency.partnerSince).toLocaleDateString()}`
                : "Application in progress"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium mb-1">Cover Types</div>
                <div className="flex flex-wrap gap-1">
                  {agency.coverTypes.map((type) => (
                    <Badge key={type} variant="outline">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              {agency.status === "active" && (
                <div>
                  <div className="font-medium">Policies Sold</div>
                  <div>{agency.policiesSold}</div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/dashboard/agencies/${agency.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                {agency.status === "active" ? "View Details" : "View Application"}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
