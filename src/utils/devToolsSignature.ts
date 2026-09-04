export const initDevToolsSignature = () => {
  let hasPrintedOnOpen = false;

  const printHackerSignature = () => {
    const boxStyle = [
      "font-size: 40px;",
      "font-weight: 900;",
      "font-family: 'Consolas', 'Courier New', monospace;",
      "color: #00ff41;",
      "background-color: #040d06;",
      "padding: 16px 28px;",
      "border: 2px solid #00ff41;",
      "border-radius: 8px;",
      "text-shadow: 0 0 18px rgba(0, 255, 65, 0.8);",
      "line-height: 1.2;"
    ].join(" ");

    const subTextTagline = [
      "font-size: 14px;",
      "font-weight: 700;",
      "font-family: 'Consolas', 'Courier New', monospace;",
      "color: #39ff14;",
      "text-shadow: 0 0 8px rgba(57, 255, 20, 0.5);",
      "margin-top: 8px;"
    ].join(" ");

    const subTextInfo = [
      "font-size: 13px;",
      "font-weight: 600;",
      "font-family: 'Consolas', 'Courier New', monospace;",
      "color: #38bdf8;",
      "margin-top: 4px;"
    ].join(" ");

    const subTextInsta = [
      "font-size: 13px;",
      "font-weight: 600;",
      "font-family: 'Consolas', 'Courier New', monospace;",
      "color: #f43f5e;",
      "margin-top: 4px;"
    ].join(" ");

    const asciiBox = 
`███████████████████████████████████████████
█                                         █
█       Engineered by Faiz.I              █
█                                         █
███████████████████████████████████████████`;

    console.log(`%c${asciiBox}`, boxStyle);
    console.log("%c> System compromised... just kidding.", subTextTagline);
    console.log("%c> Nomadoo Varkala • Crafted with precision", subTextInfo);
    console.log("%c> Instagram → https://www.instagram.com/faiz_imam__/", subTextInsta);
  };

  // 1. Initial print on load
  printHackerSignature();

  // 2. DevTools active detector via window dimension differential
  const checkDimensions = () => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if ((widthDiff > 160 || heightDiff > 160) && !hasPrintedOnOpen) {
      hasPrintedOnOpen = true;
      printHackerSignature();
    } else if (widthDiff <= 160 && heightDiff <= 160) {
      hasPrintedOnOpen = false;
    }
  };

  window.addEventListener('resize', checkDimensions);

  // 3. Regexp getter trick (fires automatically when DevTools Console evaluates output)
  const detector = /./;
  detector.toString = function () {
    if (!hasPrintedOnOpen) {
      hasPrintedOnOpen = true;
      printHackerSignature();
    }
    return 'faiz-hacker-signature';
  };

  const intervalId = setInterval(() => {
    console.log('%c', detector);
  }, 3000);

  return () => {
    window.removeEventListener('resize', checkDimensions);
    clearInterval(intervalId);
  };
};
