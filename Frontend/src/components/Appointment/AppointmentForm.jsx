import React, { useState } from "react";
import { Send, Check, AlertTriangle } from "lucide-react";

/* ── Time slots (defined outside component — stable reference) ─ */
const TIME_SLOTS = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM",
];

const INIT = {
    fullName: "", email: "", phone: "", companyName: "",
    designation: "", city: "", country: "",
    companyContact: "", preferredDate: "", preferredTime: "", reason: "",
};

const AppointmentForm = () => {
    const [formData, setFormData] = useState(INIT);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const today = new Date().toISOString().split("T")[0];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/appointment`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to submit appointment request.");
            }
            setSubmitted(true);
            setFormData(INIT);
            setTimeout(() => setSubmitted(false), 6000);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    /* ── Success state ─────────────────────────────────────────── */
    if (submitted) {
        return (
            <>
                <div className="apf-success">
                    <div className="apf-success-icon"><Check size={26} color="#185FA5" /></div>
                    <h3 className="apf-success-heading">Appointment Scheduled!</h3>
                    <p className="apf-success-sub">
                        Thank you for reaching out. Our team will confirm your slot within 2 hours.
                    </p>
                    <button className="apf-btn apf-btn-sm" onClick={() => setSubmitted(false)}>
                        Book another slot
                    </button>
                </div>
                <style>{CSS}</style>
            </>
        );
    }

    return (
        <>
            {/* ── Card wrapper (mirrors Contact card style) ─────── */}
            <div className="apf-card">

                {/* Gradient header */}
                <div className="apf-card-header">
                    <h2 className="apf-card-title">Book Your Consultation</h2>
                    <p className="apf-card-sub">
                        Schedule a personalised session with our cybersecurity experts
                    </p>
                </div>

                {/* Form body */}
                <div className="apf-card-body">

                    {/* Error banner */}
                    {error && (
                        <div className="apf-error">
                            <AlertTriangle size={16} />
                            <span>{error}</span>
                        </div>
                    )}

                    <form className="apf-form" onSubmit={handleSubmit}>
                        <div className="apf-grid">

                            {/* Full Name */}
                            <div className="apf-field">
                                <label className="apf-label">Full Name</label>
                                <input className="apf-input" type="text" name="fullName"
                                    placeholder="John Doe" value={formData.fullName}
                                    onChange={handleChange} required />
                            </div>

                            {/* Mobile */}
                            <div className="apf-field">
                                <label className="apf-label">Mobile Number</label>
                                <input className="apf-input" type="tel" name="phone"
                                    placeholder="+91 98765 43210" value={formData.phone}
                                    onChange={handleChange} required />
                            </div>

                            {/* Email */}
                            <div className="apf-field">
                                <label className="apf-label">Email Address</label>
                                <input className="apf-input" type="email" name="email"
                                    placeholder="you@company.com" value={formData.email}
                                    onChange={handleChange} required />
                            </div>

                            {/* Organisation */}
                            <div className="apf-field">
                                <label className="apf-label">Organisation</label>
                                <input className="apf-input" type="text" name="companyName"
                                    placeholder="Company / Institute" value={formData.companyName}
                                    onChange={handleChange} required />
                            </div>

                            {/* Designation */}
                            <div className="apf-field">
                                <label className="apf-label">Designation</label>
                                <input className="apf-input" type="text" name="designation"
                                    placeholder="e.g. IT Manager" value={formData.designation}
                                    onChange={handleChange} required />
                            </div>

                            {/* Company Contact */}
                            <div className="apf-field">
                                <label className="apf-label">Company Contact</label>
                                <input className="apf-input" type="text" name="companyContact"
                                    placeholder="Website or contact email" value={formData.companyContact}
                                    onChange={handleChange} required />
                            </div>

                            {/* City + Country */}
                            <div className="apf-field apf-field-full">
                                <label className="apf-label">Location</label>
                                <div className="apf-location-row">
                                    <input className="apf-input" type="text" name="city"
                                        placeholder="City" value={formData.city}
                                        onChange={handleChange} required />
                                    <input className="apf-input" type="text" name="country"
                                        placeholder="Country" value={formData.country}
                                        onChange={handleChange} required />
                                </div>
                            </div>

                            {/* Preferred Date */}
                            <div className="apf-field">
                                <label className="apf-label">Preferred Date</label>
                                <input className="apf-input" type="date" name="preferredDate"
                                    value={formData.preferredDate} min={today}
                                    onChange={handleChange} required />
                            </div>

                            {/* Preferred Time */}
                            <div className="apf-field">
                                <label className="apf-label">Preferred Time</label>
                                <select className="apf-input" name="preferredTime"
                                    value={formData.preferredTime} onChange={handleChange} required>
                                    <option value="">— Select a slot —</option>
                                    {TIME_SLOTS.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Reason */}
                            <div className="apf-field apf-field-full">
                                <label className="apf-label">What would you like to discuss?</label>
                                <textarea className="apf-input apf-textarea" name="reason" rows={4}
                                    placeholder="Describe your specific concerns or areas you'd like to address…"
                                    value={formData.reason} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* Submit */}
                        <button type="submit" className="apf-btn apf-btn-full" disabled={isSubmitting}>
                            {isSubmitting
                                ? <><span className="apf-spinner" /> Submitting…</>
                                : <><Send size={15} /> Schedule Consultation</>}
                        </button>
                    </form>
                </div>
            </div>

            <style>{CSS}</style>
        </>
    );
};

/* ══════════════════════════════════════════════════════════════
   CSS  — mirrors ct-* visual language with apf-* prefix
══════════════════════════════════════════════════════════════ */
const CSS = `
  .apf-card {
    --apf-blue-deep:  #185FA5;
    --apf-blue-mid:   #1d4ed8;
    --apf-blue-ind:   #4f46e5;
    --apf-blue-light: #378ADD;
    --apf-blue-bg:    #EAF4FF;
    --apf-gray-200:   #e5e7eb;
    --apf-gray-400:   #9ca3af;
    --apf-text-main:  #111827;
    --apf-text-body:  #374151;
    --apf-text-muted: #6b7280;
    --apf-white:      #ffffff;
    --apf-radius-sm:  8px;
    --apf-radius-md:  12px;
    background: var(--apf-white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(24,95,165,0.10), 0 1px 4px rgba(0,0,0,0.05);
    font-family: 'Inter', system-ui, sans-serif;
    width: 100%;
  }

  /* ── Header ──────────────────────────────────────────────── */
  .apf-card-header {
    background: linear-gradient(135deg, var(--apf-blue-deep) 0%, var(--apf-blue-mid) 55%, var(--apf-blue-ind) 100%);
    padding: 1.75rem 2rem 1.5rem;
    position: relative;
    overflow: hidden;
  }
  .apf-card-header::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 160px; height: 160px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
  }
  .apf-card-title {
    font-size: 1.45rem;
    font-weight: 800;
    color: #fff;
    margin: 0 0 0.3rem;
    position: relative;
    z-index: 1;
  }
  .apf-card-sub {
    font-size: 0.88rem;
    color: rgba(219,234,254,0.82);
    margin: 0;
    position: relative;
    z-index: 1;
    line-height: 1.55;
  }

  /* ── Body ────────────────────────────────────────────────── */
  .apf-card-body { padding: 1.5rem 2rem 2rem; }

  /* ── Error banner ────────────────────────────────────────── */
  .apf-error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #fef2f2;
    border: 1.5px solid #fecaca;
    border-left: 4px solid #ef4444;
    border-radius: var(--apf-radius-sm);
    padding: 0.7rem 1rem;
    color: #b91c1c;
    font-size: 0.84rem;
    font-weight: 500;
    margin-bottom: 1.1rem;
  }

  /* ── Form grid ───────────────────────────────────────────── */
  .apf-form  { }
  .apf-grid  {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }
  .apf-field       { display: flex; flex-direction: column; gap: 5px; }
  .apf-field-full  { grid-column: 1 / -1; }

  /* ── Label ───────────────────────────────────────────────── */
  .apf-label {
    font-size: 11.5px;
    font-weight: 600;
    color: var(--apf-text-muted);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* ── Input / select / textarea ───────────────────────────── */
  .apf-input {
    padding: 10px 14px;
    border: 1.5px solid var(--apf-gray-200);
    border-radius: var(--apf-radius-sm);
    font-size: 13.5px;
    color: var(--apf-text-main);
    background: var(--apf-white);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    font-family: inherit;
    width: 100%;
    box-sizing: border-box;
    resize: none;
  }
  .apf-input::placeholder { color: var(--apf-gray-400); }
  .apf-input:focus {
    border-color: var(--apf-blue-light);
    box-shadow: 0 0 0 3px rgba(55,138,221,0.12);
  }
  .apf-textarea { min-height: 100px; }

  /* Location two-column row */
  .apf-location-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  /* ── Button ──────────────────────────────────────────────── */
  .apf-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, var(--apf-blue-deep), var(--apf-blue-mid));
    color: #fff;
    padding: 13px 26px;
    border-radius: var(--apf-radius-md);
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(24,95,165,0.3);
    text-decoration: none;
  }
  .apf-btn:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(24,95,165,0.4);
  }
  .apf-btn:disabled { opacity: 0.65; cursor: not-allowed; }
  .apf-btn-full {
    width: 100%;
    justify-content: center;
    padding: 13px 24px;
  }
  .apf-btn-sm { padding: 10px 20px; font-size: 13px; }

  /* ── Spinner ─────────────────────────────────────────────── */
  .apf-spinner {
    display: inline-block;
    width: 14px; height: 14px;
    border: 2px solid rgba(255,255,255,0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: apf-spin 0.7s linear infinite;
  }
  @keyframes apf-spin { to { transform: rotate(360deg); } }

  /* ── Success ─────────────────────────────────────────────── */
  .apf-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem 1.5rem;
    gap: 12px;
  }
  .apf-success-icon {
    width: 56px; height: 56px;
    border-radius: 50%;
    background: var(--apf-blue-bg);
    display: flex; align-items: center; justify-content: center;
  }
  .apf-success-heading {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--apf-text-main);
    margin: 0;
  }
  .apf-success-sub {
    font-size: 0.9rem;
    color: var(--apf-text-body);
    line-height: 1.65;
    max-width: 360px;
    margin: 0;
  }

  /* ── Responsive ──────────────────────────────────────────── */
  @media (max-width: 560px) {
    .apf-grid, .apf-location-row { grid-template-columns: 1fr; }
    .apf-card-body { padding: 1.25rem; }
    .apf-card-header { padding: 1.25rem; }
  }
`;

export default AppointmentForm;
