"use client"

import type React from "react"
import { useState } from "react"
import { Loader2, CheckCircle, AlertCircle, ChevronDown } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormData {
  firstName: string
  lastName: string
  email: string
  mobile: string
  serviceType: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    serviceType: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.mobile,
          subject: formData.serviceType || "General Enquiry",
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        serviceType: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  const services = [
    "UAE & KSA Relocation",
    "Tax Advisory & International Structuring",
    "Real Estate Advisory",
    "Family Governance & Succession",
    "Accounting & Compliance",
    "General Enquiry",
  ]

  const inputClass =
    "w-full bg-transparent border-0 border-b border-primary/30 focus:border-accent focus:ring-0 py-3 text-primary placeholder:text-primary/40 font-sans text-base outline-none transition-colors"

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h3 className="font-serif text-3xl text-primary mb-4">Thank You!</h3>
        <p className="text-primary/70 font-sans mb-8 max-w-md mx-auto">
          Your message has been sent to our team. We will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 font-sans transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {status === "error" && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-sans">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-primary font-sans text-base mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-primary font-sans text-base mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-primary font-sans text-base mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-primary font-sans text-base mb-1">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>
      </div>

      <div className="relative">
        <label className="block text-primary font-sans text-base mb-1">Service Type</label>
        <div className="relative">
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            disabled={status === "loading"}
            className={`${inputClass} appearance-none cursor-pointer pr-10`}
          >
            <option value="">-None-</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-primary font-sans text-base mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-3 font-sans transition-colors disabled:opacity-70 flex items-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  )
}
