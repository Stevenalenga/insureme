import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PolicyList() {
  // This would come from your API in a real application
  const policies = [
    {
      id: "POL-12345",
      customer: "Jane Smith",
      type: "Motor Insurance",
      status: "active",
      expiryDate: "2023-12-15",
      premium: "KES 15,000",
      agency: "Jubilee Insurance",
    },
    {
      id: "POL-23456",
      customer: "John Doe",
      type: "Health Insurance",
      status: "active",
      expiryDate: "2023-11-30",
      premium: "KES 45,000",
      agency: "Britam Insurance",
    },
    {
      id: "POL-34567",
      customer: "Mary Johnson",
      type: "Life Insurance",
      status: "pending",
      expiryDate: "2024-05-20",
      premium: "KES 25,000",
      agency: "CIC Insurance",
    },
    {
      id: "POL-45678",
      customer: "Robert Kimani",
      type: "Property Insurance",
      status: "active",
      expiryDate: "2023-10-05",
      premium: "KES 35,000",
      agency: "APA Insurance",
    },
  ]

  return (
    <div className="grid gap-4">
      {policies.map((policy) => (
        <Card key={policy.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{policy.type}</CardTitle>
              <Badge
                variant={
                  policy.status === "active" ? "default" : policy.status === "pending" ? "secondary" : "destructive"
                }
              >
                {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
              </Badge>
            </div>
            <CardDescription>{policy.customer}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Policy Number</div>
                <div>{policy.id}</div>
              </div>
              <div>
                <div className="font-medium">Agency</div>
                <div>{policy.agency}</div>
              </div>
              <div>
                <div className="font-medium">Premium</div>
                <div>{policy.premium}</div>
              </div>
              <div>
                <div className="font-medium">Expiry Date</div>
                <div>{new Date(policy.expiryDate).toLocaleDateString()}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/dashboard/policies/${policy.id}`} className="w-full">
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
