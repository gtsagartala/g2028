/**
 * ScanMeSection - Horizontal "SCAN ME" layout with QR code for article reading
 * 
 * Creates a horizontal layout with bold "SCAN ME" text on the left
 * and a QR code on the right that links to the current article/page.
 */

import QRCode from 'react-qr-code';

interface ScanMeSectionProps {
  /** URL or text to encode in QR code */
  qrValue?: string;
  /** Additional CSS classes */
  className?: string;
}

const ScanMeSection = ({ 
  qrValue = window.location.href, 
  className = "" 
}: ScanMeSectionProps) => {
  return (
    <div className={`flex items-center justify-between gap-8 p-6 max-w-md ml-0 md:mx-auto ${className}`}>
      {/* SCAN ME Text */}
      <div className="flex flex-col flex-shrink-0">
        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight">
          SCAN
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight">
          ME
        </h2>
        <p className="text-sm text-muted-foreground mt-2 font-medium">
          to read article
        </p>
      </div>
      
      {/* QR Code */}
      <div className="bg-background p-3 rounded-xl border-2 border-foreground shadow-lg flex-shrink-0">
        <QRCode
          size={120}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox="0 0 256 256"
          fgColor="hsl(var(--foreground))"
          bgColor="hsl(var(--background))"
          level="M"
        />
      </div>
    </div>
  );
};

export default ScanMeSection;