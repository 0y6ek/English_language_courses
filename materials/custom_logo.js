class Logo extends HTMLElement {
  constructor() {
    super();

    // Создаём shadow DOM (чтобы стили не конфликтовали)
    const shadow = this.attachShadow({ mode: "open" });

    // Добавляем HTML
    shadow.innerHTML = `
      <style>
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: white;
          background: #0073e6;
          padding: 10px 20px;
          border-radius: 8px;
          display: inline-block;
          font-family: Arial, sans-serif;
        }
      </style>
      <div class="logo">My Logo</div>
    `;
  }
}

// Регистрируем тег <logo>
customElements.define("logo", Logo);
