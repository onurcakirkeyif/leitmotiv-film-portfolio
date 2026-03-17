import React, { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

const RED = "#B85040";

const inputStyle = {
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.15)",
  color: "#111",
  padding: "12px 0",
  width: "100%",
  outline: "none",
  fontSize: "14px",
};

const labelStyle = {
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "rgba(0,0,0,0.35)",
  display: "block",
  marginBottom: "4px",
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
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
      <div className="flex flex-col items-start gap-4 py-12">
        <CheckCircle className="w-10 h-10" style={{ color: RED }} />
        <h3 className="text-2xl font-bold uppercase" style={{ color: "#111" }}>Message Sent</h3>
        <p className="text-sm" style={{ color: "rgba(0,0,0,0.4)" }}>Thank you. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input required style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="placeholder-black/20" />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="placeholder-black/20" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label style={labelStyle}>Company</label>
          <input style={inputStyle} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company name" className="placeholder-black/20" />
        </div>
        <div>
          <label style={labelStyle}>Project Type</label>
          <input style={inputStyle} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} placeholder="Commercial, Documentary, Fixer…" className="placeholder-black/20" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          required
          rows={5}
          style={{ ...inputStyle, resize: "none" }}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project..."
          className="placeholder-black/20"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 transition-all"
        style={{ backgroundColor: RED, color: "white" }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
      >
        {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending</> : <><Send className="w-4 h-4" /> Send Message</>}
      </button>
    </form>
  );
}