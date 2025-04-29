"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  sum_insured: number;
  basic_premium_rate: number;
  excess_protector: number;
  radio_cassette: string;
  windscreen_cover: string;
  tl: number;
  sd: number;
  class_of_insurance: string;
  policy_number: string;
  name_of_insured: string;
  occupation: string;
  pin_number: string;
  vehicle_covered: string;
  engine_no: string;
  chasis: string;
  sitting_capacity: string;
  color: string;
  period_of_insurance: string;
  terms_of_payment: string;
}

export default function DebitNotePage() {
  const [formData, setFormData] = useState<FormData>({
    sum_insured: 0,
    basic_premium_rate: 3.5,
    excess_protector: 0,
    radio_cassette: "",
    windscreen_cover: "",
    tl: 0,
    sd: 0,
    class_of_insurance: "",
    policy_number: "",
    name_of_insured: "",
    occupation: "",
    pin_number: "",
    vehicle_covered: "",
    engine_no: "",
    chasis: "",
    sitting_capacity: "",
    color: "",
    period_of_insurance: "",
    terms_of_payment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["sum_insured", "basic_premium_rate", "excess_protector", "tl", "sd"].includes(name)
        ? parseFloat(value) || 0
        : value,
    }));
  };

  const handleGeneratePDF = async () => {
    const dateIssued = new Date().toLocaleDateString("en-GB");

    const response = await fetch("http://10.30.222.136:8000/generate-debit-note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        date_issued: dateIssued,
      }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `DebitNote_${formData.vehicle_covered}_${dateIssued.replace(/\//g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Generate Debit Note</h1>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="sum_insured">Sum Insured</Label>
          <Input id="sum_insured" name="sum_insured" type="number" value={formData.sum_insured} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="basic_premium_rate">Basic Premium Rate (%)</Label>
          <Input id="basic_premium_rate" name="basic_premium_rate" type="number" value={formData.basic_premium_rate} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="excess_protector">Excess Protector</Label>
          <Input id="excess_protector" name="excess_protector" type="number" value={formData.excess_protector} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="radio_cassette">Radio Cassette</Label>
          <Input id="radio_cassette" name="radio_cassette" type="text" value={formData.radio_cassette} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="windscreen_cover">Windscreen Cover</Label>
          <Input id="windscreen_cover" name="windscreen_cover" type="text" value={formData.windscreen_cover} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tl">TL</Label>
          <Input id="tl" name="tl" type="number" value={formData.tl} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="sd">SD</Label>
          <Input id="sd" name="sd" type="number" value={formData.sd} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="class_of_insurance">Class of Insurance</Label>
          <Input id="class_of_insurance" name="class_of_insurance" type="text" value={formData.class_of_insurance} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="policy_number">Policy Number</Label>
          <Input id="policy_number" name="policy_number" type="text" value={formData.policy_number} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name_of_insured">Name of Insured</Label>
          <Input id="name_of_insured" name="name_of_insured" type="text" value={formData.name_of_insured} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input id="occupation" name="occupation" type="text" value={formData.occupation} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pin_number">PIN Number</Label>
          <Input id="pin_number" name="pin_number" type="text" value={formData.pin_number} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="vehicle_covered">Vehicle Registration</Label>
          <Input id="vehicle_covered" name="vehicle_covered" type="text" value={formData.vehicle_covered} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="engine_no">Engine Number</Label>
          <Input id="engine_no" name="engine_no" type="text" value={formData.engine_no} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="chasis">Chassis Number</Label>
          <Input id="chasis" name="chasis" type="text" value={formData.chasis} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="sitting_capacity">Sitting Capacity</Label>
          <Input id="sitting_capacity" name="sitting_capacity" type="text" value={formData.sitting_capacity} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="color">Color</Label>
          <Input id="color" name="color" type="text" value={formData.color} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="period_of_insurance">Period of Insurance</Label>
          <Input id="period_of_insurance" name="period_of_insurance" type="text" value={formData.period_of_insurance} onChange={handleChange} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="terms_of_payment">Terms of Payment</Label>
          <Input id="terms_of_payment" name="terms_of_payment" type="text" value={formData.terms_of_payment} onChange={handleChange} required />
        </div>

        <Button onClick={handleGeneratePDF} className="mt-4">
          Generate and Download PDF
        </Button>
      </div>
    </div>
  );
}