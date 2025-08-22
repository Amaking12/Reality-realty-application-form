
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
export default function Apply() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ type: "success", message: "✅ Application received. Thank you! We will review and get back to you." });
      formRef.current.reset();
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong submitting your application. Please try again." });
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="container" style={{ paddingTop: 10, paddingBottom: 40 }}>
      <h1 className="headline" style={{ fontSize: 32 }}>Rental Application</h1>
      <p className="subhead">
        Please complete the form below to apply for a rental property in the United States.
        For payment details, contact the <b>Realtor or House Owner</b> who provided this link.
      </p>
      <form ref={formRef} onSubmit={onSubmit} className="form" autoComplete="on">
        <div className="field"><label>Full Name</label><input name="full_name" placeholder="John Doe" required /></div>
        <div className="inline">
          <div className="field"><label>Email</label><input type="email" name="email" placeholder="john@example.com" required /></div>
          <div className="field"><label>Phone Number</label><input type="tel" name="phone" placeholder="(555) 555-5555" required /></div>
        </div>
        <div className="inline">
          <div className="field"><label>Date of Birth</label><input type="date" name="dob" required /></div>
          <div className="field"><label>Desired Move-in Date</label><input type="date" name="move_in" required /></div>
        </div>
        <div className="field"><label>Current Address</label><input name="current_address" placeholder="123 Main St" required /></div>
        <div className="inline">
          <div className="field"><label>City, State, ZIP</label><input name="city_state_zip" placeholder="Austin, TX 78701" required /></div>
          <div className="field"><label>How many occupants?</label><input type="number" name="occupants" min="1" placeholder="1" required /></div>
        </div>
        <div className="inline">
          <div className="field">
            <label>Employment Status</label>
            <select name="employment_status" defaultValue="">
              <option value="" disabled>Choose one</option>
              <option>Full-time</option><option>Part-time</option><option>Self-employed</option>
              <option>Unemployed</option><option>Student</option><option>Retired</option>
            </select>
          </div>
          <div className="field"><label>Monthly Income (USD)</label><input type="number" name="monthly_income" placeholder="5000" required /></div>
        </div>
        <div className="field"><label>Employer (or Source of Income)</label><input name="employer" placeholder="Company Inc." /></div>
        <div className="inline">
          <div className="field">
            <label>Bedrooms</label>
            <select name="bedrooms" defaultValue="">
              <option value="" disabled>Choose</option><option>Studio</option><option>1</option><option>2</option><option>3</option><option>4+</option>
            </select>
          </div>
          <div className="field">
            <label>Bathrooms</label>
            <select name="bathrooms" defaultValue="">
              <option value="" disabled>Choose</option><option>1</option><option>1.5</option><option>2</option><option>2.5</option><option>3+</option>
            </select>
          </div>
        </div>
        <div className="inline">
          <div className="field"><label>Lease Term</label>
            <select name="lease_term" defaultValue="12 months">
              <option>6 months</option><option>12 months</option><option>24 months</option><option>Month-to-Month</option>
            </select>
          </div>
          <div className="field"><label>Pets</label>
            <select name="pets" defaultValue="No">
              <option>No</option><option>Yes — cat</option><option>Yes — dog</option><option>Yes — other</option>
            </select>
          </div>
        </div>
        <div className="field"><label>Smoking</label>
          <select name="smoking" defaultValue="No"><option>No</option><option>Yes</option></select>
        </div>
        <div className="inline">
          <div className="field"><label>Previous Landlord (optional)</label><input name="previous_landlord" placeholder="Landlord name" /></div>
          <div className="field"><label>Landlord Phone (optional)</label><input name="landlord_phone" placeholder="(555) 555-5555" /></div>
        </div>
        <div className="card" style={{ margin: "18px 0" }}>
          <h3 style={{ marginTop: 0 }}>Payment Method</h3>
          <p className="subhead">Choose your preferred method. <b>Payment details are provided by the Realtor or House Owner</b> who shared this link.</p>
          <div className="inline">
            <div className="field"><label>Preferred Payment Method</label>
              <select name="payment_method" defaultValue="">
                <option value="" disabled>Select</option><option>Zelle</option><option>Cash App</option><option>Apple Pay</option><option>Bank Transfer</option><option>Other</option>
              </select>
            </div>
            <div className="field"><label>Who referred you?</label>
              <select name="referral_role" defaultValue="Realtor"><option>Realtor</option><option>House Owner</option><option>Friend/Other</option></select>
            </div>
          </div>
        </div>
        <div className="field"><label>Additional Notes (optional)</label><textarea name="notes" placeholder="Anything else we should know?" /></div>
        {status.message && (<div className={`alert ${status.type === "success" ? "alert-success" : "alert-error"}`}>{status.message}</div>)}
        <button className="btn" type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit Application"}</button>
      </form>
    </div>
  );
}
