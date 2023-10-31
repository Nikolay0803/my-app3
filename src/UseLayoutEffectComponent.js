import React, { useRef, useState, useLayoutEffect } from "react";

function UseLayoutEffectComponent() {
  const [showParagraph, setShowParagrap] = useState(false);
  const parafraphRef = useRef(null);

  useLayoutEffect(() => {
    if (showParagraph) {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "This is new paragraph"
      parafraphRef.current.appendChild(newParagraph)
    }
  }, [showParagraph]);
  const addParagraph = () => {
    setShowParagrap(true);
  };
  return (
    <div>
      <button onClick={addParagraph}>Add Paragraph</button>
      <div ref={parafraphRef}></div>
    </div>
  );
}

export default UseLayoutEffectComponent;
