// Launch Vehicle System
export const LVCNavBarOrder = [
  "tvc",
  "guidance_navigation_and_control",
  "avioncs",
  "flow_control_system",
];

//calculate planets animation function

export const disableOverflow = (boolean) => {
  if (boolean) {
    document.querySelector("html").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("body").style.overflowY = "auto";
  }
};

export const createDelay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Function to debounce scroll events
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const calculateSlopeIntercept = (point1, point2, point3) => {
  // Destructure the points
  const { X: X1, Y: Y1 } = point1;
  const { X: X2, Y: Y2 } = point2;
  const { X: X3, Y: Y3 } = point3;

  // Calculate averages for X and Y
  const X_avg = (X1 + X2 + X3) / 3;
  const Y_avg = (Y1 + Y2 + Y3) / 3;

  // Calculate the slope (m)
  const m =
    ((X1 - X_avg) * (Y1 - Y_avg) +
      (X2 - X_avg) * (Y2 - Y_avg) +
      (X3 - X_avg) * (Y3 - Y_avg)) /
    ((X1 - X_avg) ** 2 + (X2 - X_avg) ** 2 + (X3 - X_avg) ** 2);

  // Calculate the intercept (b)
  const b = Y_avg - m * X_avg;

  return { m, b };
};

export const getScrollMoonScrollAmount = () => {
  const scrollHeight = document.documentElement.scrollHeight; // Get the current scrollHeight
  const m = 0.3745; // Slope from the formula
  const b = -2020; // Intercept from the formula

  // Calculate the scroll amount based on the scrollHeight
  const scrollAmount = m * scrollHeight + b;

  // Return the scroll amount
  return scrollAmount;
};

export const getScrollMarsScrollAmount = () => {
  const scrollHeight = document.documentElement.scrollHeight; // Get the current scrollHeight
  const m = 0.5826; // Slope from the new formula
  const b = -3038; // Intercept from the new formula

  // Calculate the scroll amount based on the scrollHeight
  const scrollAmount = m * scrollHeight + b;

  // Return the scroll amount
  return scrollAmount;
};

export const getScrollPoint = (progress, targetProgress) => {
  // Calculate the target scroll position based on the desired progress
  const targetScrollPosition =
    targetProgress * document.querySelector(".pin-spacer").scrollHeight;

  // Return the target scroll point where the progress equals the target
  return targetScrollPosition;
};
