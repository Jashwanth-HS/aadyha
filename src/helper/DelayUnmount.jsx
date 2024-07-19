import React, { useState, useEffect } from "react";

const withDelayedUnmount = (WrappedComponent) => {
  const DelayedUnmountComponent = () => {
    const [shouldUnmount, setShouldUnmount] = useState(false);

    // Function to handle unmounting after delay
    const handleDelayedUnmount = () => {
      setShouldUnmount(true);
      setTimeout(() => {
        setShouldUnmount(false); // Reset shouldUnmount after delay
      }, 100); // Delay in milliseconds (e.g., 3000ms = 3 seconds)
    };

    useEffect(() => {
      if (shouldUnmount) {
        setTimeout(() => {
          setShouldUnmount(false); // Reset shouldUnmount after delay
        }, 100); // Delay in milliseconds (e.g., 3000ms = 3 seconds)
      }
    }, [shouldUnmount]);

    return (
      <div>
        {!shouldUnmount && <WrappedComponent />}
        <button style={{ display: "none" }} onClick={handleDelayedUnmount}>
          Delay Unmount
        </button>
      </div>
    );
  };

  return DelayedUnmountComponent;
};

export default withDelayedUnmount;
