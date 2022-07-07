import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Sample() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = () => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file="/picturesMariaZob/e0300f66-363c-4c2a-9199-a14e858d50c8.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page
        {' '}
        {pageNumber}
        {' '}
        of
        {' '}
        {numPages}
      </p>
    </div>
  );
}
export default Sample;
