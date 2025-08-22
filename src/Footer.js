
import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Reality Realty. All rights reserved.</div>
        <div style={{ marginTop: 6, fontSize: 13 }}>Powered by Reality Realty — Rental Application Portal</div>
      </div>
    </footer>
  );
}
