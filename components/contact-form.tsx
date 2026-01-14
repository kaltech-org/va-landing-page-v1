"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
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
        body: JSON.stringify(formData),
      })
      console.log('res is',response)

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl text-primary mb-4">Thank You!</h3>
        <p className="text-primary/70 font-sans mb-6">
          Your message has been sent to our team. We will get back to you shortly.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 font-sans"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm">
      <h2 className="font-serif text-2xl md:text-3xl text-primary mb-2">Send Us a Message</h2>
      <p className="text-primary/60 mb-8 font-sans text-sm">
        Fill out the form below and we will get back to you shortly.
      </p>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-sans">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary mb-2 font-sans">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full border-border focus:border-accent focus:ring-accent font-sans"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2 font-sans">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full border-border focus:border-accent focus:ring-accent font-sans"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2 font-sans">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+971 XX XXX XXXX"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full border-border focus:border-accent focus:ring-accent font-sans"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2 font-sans">
              Subject <span className="text-red-500">*</span>
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full border-border focus:border-accent focus:ring-accent font-sans"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2 font-sans">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your enquiry..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className="w-full border-border focus:border-accent focus:ring-accent resize-none font-sans"
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-10 py-6 text-base font-sans disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  )
}
