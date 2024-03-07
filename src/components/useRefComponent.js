import React, { useRef } from 'react';
function useRefComponent() {
  const countRef = useRef(0);

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick={() => (countRef.current += 1)}>Increment</button>
    </div>
  );
}

export default useRefComponent;
