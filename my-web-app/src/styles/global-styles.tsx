import { css, Global } from "@emotion/react";

const globalStyles = css`
  /* CSS Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    background-color: #fff;
    color: #222;
    min-width: 320px;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  /* Layout container */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 16px;
  }

  /* Responsive grid helper */
  .grid {
    display: grid;
    gap: 20px;
  }

  /* Responsive breakpoints */

  /* Tablet */
  @media (min-width: 768px) {
    html {
      font-size: 17px;
    }

    .container {
      padding: 0 24px;
    }

    .grid {
      gap: 24px;
    }
  }

  /* Laptop */
  @media (min-width: 1024px) {
    html {
      font-size: 18px;
    }

    .container {
      padding: 0 32px;
    }

    .grid {
      gap: 32px;
    }
  }

  /* Desktop */
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }

  /* Utility classes */

  .flex {
    display: flex;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-center {
    text-align: center;
  }

  .hidden {
    display: none;
  }

  /* Responsive utilities */

  .mobile-only {
    display: block;
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 768px) {
    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: block;
    }
  }
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}