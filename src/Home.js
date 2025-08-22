
import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="kicker">Reality Realty</div>
        <h1 className="headline">Find Your Next Home with Ease</h1>
        <p className="subhead">
          A fast, secure rental application built for U.S. renters. It takes just a few minutes —
          your application goes directly to our team for review.
        </p>
        <div style={{ marginTop: 22 }}>
          <Link to="/apply" className="btn">Apply Now</Link>
        </div>
      </section>
      <section className="container" style={{ paddingBottom: 40 }}>
        <div className="grid">
          <div className="card">
            <h3>Simple Process</h3>
            <p className="subhead">Complete a single form to get started. We'll follow up with next steps if approved.</p>
          </div>
          <div className="card">
            <h3>Secure & Private</h3>
            <p className="subhead">Your information is sent directly to Reality Realty and kept confidential.</p>
          </div>
          <div className="card">
            <h3>Fast Review</h3>
            <p className="subhead">We review applications as they arrive and contact you promptly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
