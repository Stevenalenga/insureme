import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileCheck, Download, Share2, Eye } from "lucide-react"

export function CertificateList() {
  // This would come from your API in a real application
  const certificates = [
    {
      id: "cert-1",
      policyId: "POL-12345",
      customer: "Jane Smith",
      type: "Motor Insurance",
      issueDate: "2023-06-15",
      expiryDate: "2023-12-15",
      agency: "Jubilee Insurance",
    },
    {
      id: "cert-2",
      policyId: "POL-23456",
      customer: "John Doe",
      type: "Health Insurance",
      issueDate: "2023-05-30",
      expiryDate: "2023-11-30",
      agency: "Britam Insurance",
    },
    {
      id: "cert-3",
      policyId: "POL-45678",
      customer: "Robert Kimani",
      type: "Property Insurance",
      issueDate: "2023-04-05",
      expiryDate: "2023-10-05",
      agency: "APA Insurance",
    },
  ]

  return (
    <div className="grid gap-4">
      {certificates.map((certificate) => (
        <Card key={certificate.id}>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <FileCheck className="h-8 w-8 text-green-500" />
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base">{certificate.type} Certificate</CardTitle>
              </div>
              <CardDescription>
                Policy: {certificate.policyId} | Customer: {certificate.customer}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Issued By</div>
                <div>{certificate.agency}</div>
              </div>
              <div>
                <div className="font-medium">Issue Date</div>
                <div>{new Date(certificate.issueDate).toLocaleDateString()}</div>
              </div>
              <div>
                <div className="font-medium">Expiry Date</div>
                <div>{new Date(certificate.expiryDate).toLocaleDateString()}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
