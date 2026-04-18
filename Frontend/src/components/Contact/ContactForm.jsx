import React, { useState } from 'react';
import { Send, Check, AlertTriangle } from 'lucide-react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setError(null);
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || 'Failed to send message.');
            }

            setSubmitted(true);
            setForm({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 6000);
        } catch (err) {
            setError(err.message);
        } finally {
            setSending(false);
        }
    };

    if (submitted) {
        return (
            <div className="ct-form-success">
                <div className="ct-success-icon"><Check size={28} color="#185FA5" /></div>
                <h3 className="ct-success-heading">Message sent!</h3>
                <p className="ct-success-sub">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="ct-btn-primary ct-btn-sm" onClick={() => setSubmitted(false)}>Send another message</button>
            </div>
        );
    }

    const fields = [
        { name: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Your full name',   half: true },
        { name: 'email',   label: 'Email Address', type: 'email', placeholder: 'your@email.com',   half: true },
        { name: 'phone',   label: 'Phone Number',  type: 'tel',   placeholder: '+91 00000 00000',  half: true },
        { name: 'subject', label: 'Subject',       type: 'text',  placeholder: 'How can we help?', half: true },
    ];

    return (
        <form className="ct-form" onSubmit={handleSubmit}>
            {error && (
                <div className="ct-error">
                    <AlertTriangle size={16} />
                    <span>{error}</span>
                </div>
            )}
            <div className="ct-form-grid">
                {fields.map((f) => (
                    <div key={f.name} className={`ct-field${f.half ? '' : ' ct-field-full'}`}>
                        <label className="ct-field-label">{f.label}</label>
                        <input
                            type={f.type}
                            name={f.name}
                            value={form[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            required={f.name === 'name' || f.name === 'email'}
                            className="ct-input"
                        />
                    </div>
                ))}
                <div className="ct-field ct-field-full">
                    <label className="ct-field-label">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or enquiry..."
                        rows={4}
                        required
                        className="ct-input ct-textarea"
                    />
                </div>
            </div>
            <button type="submit" className="ct-btn-primary ct-submit-btn" disabled={sending}>
                {sending
                    ? <><span className="ct-spinner" /> Sending…</>
                    : <><Send size={15} /> Send Message</>}
            </button>
        </form>
    );
};

export default ContactForm;