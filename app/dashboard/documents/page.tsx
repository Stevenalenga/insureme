"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentList } from "@/components/document-list"
import { CertificateList } from "@/components/certificate-list"
import { FileUpload } from "@/components/file-upload"

export default function DocumentsPage() {
  const [showUploadModal, setShowUploadModal] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Documents</h1>
        <Button onClick={() => setShowUploadModal(true)}>Upload Document</Button>
      </div>

      <Tabs defaultValue="kyc" className="space-y-4">
        <TabsList>
          <TabsTrigger value="kyc">KYC Documents</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
        </TabsList>

        <TabsContent value="kyc">
          <Card>
            <CardHeader>
              <CardTitle>KYC Documents</CardTitle>
              <CardDescription>Manage your identification and verification documents</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentList type="kyc" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates">
          <Card>
            <CardHeader>
              <CardTitle>Insurance Certificates</CardTitle>
              <CardDescription>View and download your insurance certificates</CardDescription>
            </CardHeader>
            <CardContent>
              <CertificateList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts">
          <Card>
            <CardHeader>
              <CardTitle>Agency Contracts</CardTitle>
              <CardDescription>View and manage your agency partnership contracts</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentList type="contract" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {showUploadModal && <FileUpload onClose={() => setShowUploadModal(false)} />}
    </div>
  )
}
