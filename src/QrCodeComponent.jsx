import React from "react";
import QRCode from "react-qr-code";

const QRCodeComponent = () => {
  const qrValue = "https://wristwonders-ewmk.onrender.com/"; // The data for the QR code

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>QR Code Example</h1>
      <QRCode value={qrValue} size={500} /> {/* Adjust size as needed */}
    </div>
  );
};

export default QRCodeComponent;
