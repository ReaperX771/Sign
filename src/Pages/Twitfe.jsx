import React, { useEffect, useRef } from "react";

function TwitFe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadTwitterWidget = () => {
      if (window.twttr) {
        window.twttr.widgets.load(containerRef.current);
      }
    };

    // Initial load
    loadTwitterWidget();

    // Refresh every 2 minutes
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.innerHTML = 
          <a class="twitter-timeline" data-theme="dark" href="https://x.com/ReaperX771">
            Tweets by ReaperX771
          </a>
        ;
        loadTwitterWidget();
      }
    }, 120000); // 120000ms = 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center p-60">
      <a
        className="twitter-timeline"
        data-theme="dark"
        href="https://x.com/ReaperX771"
        noopener noreferrer
        target="_blank"
      >
        Tweets by ReaperX771
      </a>
    </div>
  );
}

export default TwitFe;