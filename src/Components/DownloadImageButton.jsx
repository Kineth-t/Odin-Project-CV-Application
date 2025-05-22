// Components/DownloadImageButton.jsx
import React from 'react';
import html2canvas from 'html2canvas';

export default function DownloadImageButton() {
  const handleDownload = () => {
    const element = document.getElementById('resume');
    html2canvas(element, {
      ignoreElements: (el) => el.classList.contains('ignore-for-image')
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'resume.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <button className="ignore-for-image" onClick={handleDownload}>
      Download Resume as Image
    </button>
  );
}
