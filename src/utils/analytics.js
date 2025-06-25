export const gtagEvent = (action, params = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, params);
    }
  };
  