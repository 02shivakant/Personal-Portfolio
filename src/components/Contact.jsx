import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.sendForm(
      'portfolio_service',   // ← Your Service ID
      'template_abc123',     // ← Your Template ID
      formRef.current,
      'user_xxxxxxx'         // ← Your Public Key
    )
    .then(() => {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    })
    .catch((err) => {
      console.error(err);
      setError('Something went wrong. Please try again.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--orange)' }}>
          CONTACT<span style={{ color: 'var(--green)' }}>.</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-form-card">
              <p style={{ color: '#aaa', marginBottom: '28px', fontSize: '0.95rem' }}>
                Got an opportunity, project idea, or just want to say hi? Drop a message!
              </p>

              {sent && (
                <div style={{
                  background: 'var(--green)', color: 'var(--black)',
                  border: 'var(--border)', borderRadius: '12px',
                  padding: '14px 20px', fontWeight: 700,
                  marginBottom: '20px', boxShadow: 'var(--shadow)'
                }}>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div style={{
                  background: '#ff4444', color: '#fff',
                  borderRadius: '12px', padding: '14px 20px',
                  fontWeight: 700, marginBottom: '20px'
                }}>
                  ✗ {error}
                </div>
              )}

              {/* ✅ Add ref={formRef} here */}
              <form ref={formRef} onSubmit={submit}>
                <div className="mb-4">
                  <label className="form-label-custom">Your Name</label>
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handle} required
                    placeholder="Rahul Sharma"
                    className="form-control-custom"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label-custom">Email Address</label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handle} required
                    placeholder="rahul@gmail.com"
                    className="form-control-custom"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label-custom">Message</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handle} required rows={5}
                    placeholder="Hey! I'd like to connect..."
                    className="form-control-custom"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-brutalist btn-yellow w-100"
                  style={{ fontSize: '1rem', padding: '14px' }}
                  disabled={loading}
                >
                  {loading ? 'SENDING...' : 'SEND MESSAGE ✉'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info - unchanged */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="about-card h-100">
              <p style={{ color: 'var(--yellow)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '20px' }}>
                OTHER WAYS TO REACH ME
              </p>
              {[
                { label: 'Email', value: 'shivakant4582@gmail.com', color: 'var(--cyan)' },
                { label: 'LinkedIn', value: 'https://www.linkedin.com/in/shivakant-pandey-5a2b56270/', color: 'var(--purple)' },
                { label: 'GitHub', value: 'https://github.com/02shivakant', color: 'var(--white)' },
                { label: 'Location', value: 'Noida, India', color: 'var(--pink)' },
              ].map(({ label, value, color }) => (
                <div key={label} style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#555', letterSpacing: '1px', marginBottom: '2px' }}>{label}</div>
                  <div style={{ color, fontWeight: 700, fontSize: '0.9rem', wordBreak: 'break-all' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;