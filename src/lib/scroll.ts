/**
 * Smooth scroll to a section on the same page
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Optional pixel offset from the top (useful for sticky headers)
 */
export const smoothScrollToSection = (sectionId: string, offset = 100) => {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Section with ID "${sectionId}" not found`);
    return;
  }

  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};
