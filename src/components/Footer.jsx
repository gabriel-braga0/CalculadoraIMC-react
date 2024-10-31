import React from "react";

export default function Footer({ nome }) {
  return (
    <footer
      data-theme="cyberpunk"
      className="footer footer-center bg-base-200 text-base-content p-4"
    >
      <aside>
        <p>
          © {new Date().getFullYear()} - Desenvolvido por {nome}
        </p>
      </aside>
    </footer>
  );
}
