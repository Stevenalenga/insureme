import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Upload, Eye } from "lucide-react"

interface DocumentListProps {
  type: "kyc" | "contract" | "certificate"
}

export function DocumentList({ type }: DocumentListProps) {
  // This would come from your API in a real application
  const documents = [
    {
      id: "doc-1",
      name: "National ID",
      uploadDate: "2023-05-15",
      status: "verified",
      type: "kyc",
    },
    {
      id: "doc-2",
      name: "Insurance License",
      uploadDate: "2023-04-20",
      status: "verified",
      type: "kyc",
    },
    {
      id: "doc-3",
      name: "Tax Compliance Certificate",
      uploadDate: "2023-06-10",
      status: "pending",
      type: "kyc",
    },
    {
      id: "doc-4",
      name: "Jubilee Agency Contract",
      uploadDate: "2023-01-25",
      status: "active",
      type: "contract",
    },
    {
      id: "doc-5",
      name: "Britam Agency Contract",
      uploadDate: "2023-03-30",
      status: "active",
      type: "contract",
    },
  ]

  const filteredDocuments = documents.filter((doc) => doc.type === type)

  return (
    <div className="grid gap-4">
      {filteredDocuments.length > 0 ? (
        filteredDocuments.map((document) => (
          <Card key={document.id}>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <FileText className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-base">{document.name}</CardTitle>
                  <Badge
                    variant={
                      document.status === "verified" || document.status === "active"
                        ? "default"
                        : document.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                  </Badge>
                </div>
                <CardDescription>Uploaded on: {new Date(document.uploadDate).toLocaleDateString()}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                View
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Update
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">No documents found</p>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>
      )}
    </div>
  )
}
