"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ApplyToAgencyPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    agencyId: "",
    coverTypes: [],
    experience: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit this data to your API
    console.log("Application data:", formData)

    // Redirect to agencies page after submission
    router.push("/dashboard/agencies")
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Apply to Insurance Agency</h1>

      <Card>
        <CardHeader>
          <CardTitle>Agency Application</CardTitle>
          <CardDescription>Submit your application to partner with an insurance agency</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="agency">Select Agency</Label>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, agencyId: value }))} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select an insurance agency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jubilee">Jubilee Insurance</SelectItem>
                  <SelectItem value="britam">Britam Insurance</SelectItem>
                  <SelectItem value="cic">CIC Insurance</SelectItem>
                  <SelectItem value="aar">AAR Insurance</SelectItem>
                  <SelectItem value="apa">APA Insurance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Insurance Types You Want to Sell</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="life" />
                  <Label htmlFor="life" className="font-normal">
                    Life Insurance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="health" />
                  <Label htmlFor="health" className="font-normal">
                    Health Insurance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="motor" />
                  <Label htmlFor="motor" className="font-normal">
                    Motor Insurance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="property" />
                  <Label htmlFor="property" className="font-normal">
                    Property Insurance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="business" />
                  <Label htmlFor="business" className="font-normal">
                    Business Insurance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="travel" />
                  <Label htmlFor="travel" className="font-normal">
                    Travel Insurance
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experience with this type of insurance</Label>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))} required>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No experience</SelectItem>
                  <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-plus">More than 5 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Application Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us why you want to partner with this agency and what makes you a good fit"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Required Documents</Label>
              <div className="text-sm text-muted-foreground mb-2">
                Please ensure you have uploaded the following documents in your profile before applying:
              </div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>National ID or Passport</li>
                <li>Insurance License</li>
                <li>Tax Compliance Certificate</li>
                <li>Professional Certifications (if any)</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Submit Application</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
