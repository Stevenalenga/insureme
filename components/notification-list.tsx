import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, FileText, AlertTriangle, CheckCircle } from "lucide-react"

export function NotificationList() {
  // This would come from your API in a real application
  const notifications = [
    {
      id: 1,
      title: "Policy Expiring Soon",
      description: "Policy #POL-12345 for Jane Smith is expiring in 15 days",
      date: "2023-10-01T10:30:00",
      type: "expiry",
      read: false,
    },
    {
      id: 2,
      title: "New Certificate Issued",
      description: "Certificate for Policy #POL-23456 has been issued",
      date: "2023-09-28T14:15:00",
      type: "certificate",
      read: true,
    },
    {
      id: 3,
      title: "Agency Application Approved",
      description: "Your application to Britam Insurance has been approved",
      date: "2023-09-25T09:45:00",
      type: "application",
      read: true,
    },
    {
      id: 4,
      title: "Document Verification Required",
      description: "Additional verification needed for Policy #POL-34567",
      date: "2023-09-20T16:30:00",
      type: "document",
      read: false,
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "expiry":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "certificate":
        return <FileText className="h-5 w-5 text-green-500" />
      case "application":
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      case "document":
        return <Bell className="h-5 w-5 text-red-500" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  return (
    <div className="grid gap-4">
      {notifications.map((notification) => (
        <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            {getIcon(notification.type)}
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base">{notification.title}</CardTitle>
                {!notification.read && (
                  <Badge variant="secondary" className="h-5 px-1.5">
                    New
                  </Badge>
                )}
              </div>
              <CardDescription>{new Date(notification.date).toLocaleString()}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{notification.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
