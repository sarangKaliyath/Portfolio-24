export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleScroll = (divId, btnId, setIsScrolledToDiv) => {
  const specificDiv = document.getElementById(divId); // Change this ID to match your specific div
  const button = document.getElementById(btnId); // Change this ID to match your button

  if (specificDiv && button) {
    const divRect = specificDiv.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Check if the specific div is in the viewport
    if (divRect.top <= buttonRect.bottom) {
      setIsScrolledToDiv(true);
    } else {
      setIsScrolledToDiv(false);
    }
  }
};
