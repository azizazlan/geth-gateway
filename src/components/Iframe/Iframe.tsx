/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useEffect } from 'react';

type IframeProps = {
  iframeTitle: string;
  iframeWidth: string;
  iframeHeight: string;
  iframeSrc: string;
  headers: any;
};

function Iframe(props: IframeProps) {
  const { iframeSrc, headers, iframeTitle, iframeWidth, iframeHeight } = props;

  const iframe: any = React.createRef();

  const method = 'GET';
  const userHeaders = new Headers({ headers });
  const options = { method, userHeaders };

  const get = React.useRef(() => {});

  get.current = () => {
    fetch(iframeSrc, options)
      .then((response) => response.text())
      .then((response) => {
        const frame =
          iframe.current.contentWindow ||
          iframe.current.contentDocument.document ||
          iframe.current.contentDocument;

        frame.document.open();
        frame.document.write(response);
        frame.document.close();
      })
      .catch((e) => console.log(`${e}`));
  };

  useEffect(() => {
    get.current();
  }, []);

  return (
    <iframe
      src={iframeSrc}
      ref={iframe}
      title={iframeTitle}
      width={iframeWidth}
      height={iframeHeight}
      style={{ border: '0' }}
    />
  );
}

export default Iframe;
