export const initDevToolsSignature = () => {
  let hasPrintedOnOpen = false;

  const printSignature = () => {
    console.log(
      "%c\n Engineered by Faiz.I \n",
      "font-size: 50px; font-weight: 900; font-family: 'Courier New', monospace; color: #00ff9f; background: #080f1a; padding: 14px 24px; border-radius: 12px; border: 2px solid #00ff9f; text-shadow: 0 0 16px rgba(0,255,159,0.6);"
    );
    console.log(
      "%cNomadoo Varkala • Crafted with precision",
      "font-size: 15px; font-weight: 700; font-family: 'Courier New', monospace; color: #38bdf8; margin-top: 4px;"
    );
    console.log(
      "%cInstagram → https://www.instagram.com/faiz_imam__/",
      "font-size: 13px; font-weight: 600; font-family: 'Courier New', monospace; color: #f43f5e; margin-top: 2px;"
    );
  };

  // 1. Initial print on load
  printSignature();

  // 2. DevTools detection via window dimension differential
  const checkDimensions = () => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if ((widthDiff > 160 || heightDiff > 160) && !hasPrintedOnOpen) {
      hasPrintedOnOpen = true;
      printSignature();
    } else if (widthDiff <= 160 && heightDiff <= 160) {
      hasPrintedOnOpen = false;
    }
  };

  window.addEventListener('resize', checkDimensions);

  // 3. Regexp getter trick (fires when DevTools Console tab renders object evaluation)
  const detector = /./;
  detector.toString = function () {
    if (!hasPrintedOnOpen) {
      hasPrintedOnOpen = true;
      printSignature();
    }
    return 'faiz-signature';
  };

  const intervalId = setInterval(() => {
    console.log('%c', detector);
  }, 3000);

  return () => {
    window.removeEventListener('resize', checkDimensions);
    clearInterval(intervalId);
  };
};
