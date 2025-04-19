import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AgencyApplications() {
  // This would come from your API in a real application
  const applications = [
    {
      id: "APP-12345",
      agency: "Jubilee Insurance",
      status: "approved",
      appliedDate: "2023-08-15",
      coverTypes: ["Motor", "Health", "Life"],
      contractSigned: true,
    },
    {
      id: "APP-23456",
      agency: "Britam Insurance",
      status: "pending",
      appliedDate: "2023-09-20",
      coverTypes: ["Property", "Business"],
      contractSigned: false,
    },
    {
      id: "APP-34567",
      agency: "CIC Insurance",
      status: "approved",
      appliedDate: "2023-07-10",
      coverTypes: ["Motor", "Travel"],
      contractSigned: true,
    },
  ]

  return (
    <div className="grid gap-4">
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{application.agency}</CardTitle>
              <Badge
                variant={
                  application.status === "approved"
                    ? "success"
                    : application.status === "pending"
                      ? "secondary"
                      : "destructive"
                }
              >
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </Badge>
            </div>
            <CardDescription>Applied on: {new Date(application.appliedDate).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-sm">
              <div className="font-medium mb-1">Cover Types</div>
              <div className="flex flex-wrap gap-1">
                {application.coverTypes.map((type) => (
                  <Badge key={type} variant="outline">
                    {type}
                  </Badge>
                ))}
              </div>
              <div className="mt-2 font-medium">
                Contract Status: {application.contractSigned ? "Signed" : "Pending"}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/dashboard/agencies/${application.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
