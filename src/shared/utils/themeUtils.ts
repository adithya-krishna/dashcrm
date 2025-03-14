export function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    // If already dark mode, remove the attribute
    htmlElement.removeAttribute("data-theme");
  } else {
    // Otherwise, set dark mode
    htmlElement.setAttribute("data-theme", "dark");
  }
}
