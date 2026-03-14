import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "info@leitmotivfilm.net",
      subject: `New Inquiry from ${form.name} – ${form.company || "N/A"}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\nMessage:\n${form.message}`,
    });
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="p-12 rounded-2xl border border-green-500/20 bg-green-500/5 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-white/50 text-sm">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
            Full Name *
          </label>
          <Input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20"
            style={{ "--focus-border": "#B8504080" }}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
            Email *
          </label>
          <Input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
            Company
          </label>
          <Input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20"
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
            Service Interested In
          </label>
          <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="commercial">Commercial Films</SelectItem>
              <SelectItem value="documentary">Documentary</SelectItem>
              <SelectItem value="tv">TV / Reality</SelectItem>
              <SelectItem value="music_video">Music Video</SelectItem>
              <SelectItem value="corporate">Corporate Film</SelectItem>
              <SelectItem value="fixer">Fixer / Production Support</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
          Message *
        </label>
        <Textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/20 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="text-white font-semibold px-8 py-3 rounded-full w-full sm:w-auto border-0"
        style={{ backgroundColor: "#B85040" }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#B85040"}
      >
        {sending ? (
          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4 mr-2" /> Send Message</>
        )}
      </Button>
    </form>
  );
}