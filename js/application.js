
export class Header extends HTMLElement {
  connectedCallback() {
    this.className = `header`;
    this.innerHTML = `
      <a class="heading" href="/" >
        <img src="icon.svg" alt="" class="logo">
        <h1 class="title" >Home</h1>
      </a>
      <nav id="navbar" class="nav nav-bar">
        <a href="//lsong.org">home</a>
        <a href="//lsong.org/posts">blog</a>
        <a href="//lsong.org/books">books</a>
        <a href="//lsong.org/music">music</a>
        <a href="//lsong.org/apps.html">apps</a>
        <x-inbox></x-inbox>
      </nav>
    `;
  }
}

customElements.define('x-header', Header);

class Sidebar extends HTMLElement {
  constructor() {
    super();

    this.style.position = 'relative';
    const shadow = this.attachShadow({ mode: 'open' });
    const sidebar = document.createElement('div');
    sidebar.setAttribute('class', 'sidebar');
    sidebar.innerHTML = `
      <div class="sidebar-inner" >
        <h2>Sidebar Menu</h2>
        <ul>
        <li><a href="/" >Link 1</a></li>
        <li><a href="/" >Link 1</a></li>
        <li><a href="/" >Link 1</a></li>
        <li><a href="/" >Link 1</a></li>
        </ul>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `

      x-sidebar {
        position: relative;
      }

      .sidebar {
        width: 260px;
        height: 100vh;
        color: white;
        overflow: hidden;
        background-color: #333;
        position: relative;
        transition: width 0.5s ease;
      }

      .sidebar-hidden {
        width: 0px;
      }

      .sidebar-inner {
        padding: 10px;
        height: 100vh;
        width: 220px;
      }

      .sidebar ul {
        padding: 0;
        list-style: none;
      }

      .sidebar li {
        border-radius: 5px;
      }
      .sidebar li:hover {
        background-color: #444;
      }

      .sidebar a {
        color: white;
        padding: 10px;
        text-decoration: none;
        display: block;
      }

      #sidebar-handle {
        bottom: 0px;
        right: 0;
        width: 20px;
        height: 50px;
        display: block;
        cursor: pointer;
        position: absolute;
        background-color: #333;
        transform: translate(100%, -100%);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    `;

    const handle = document.createElement('div');
    handle.id = 'sidebar-handle';
    handle.addEventListener('click', e => sidebar.classList.toggle("sidebar-hidden"));

    const resize = () => {
      document.body.clientWidth < 768 && sidebar.classList.add("sidebar-hidden");
      document.body.clientWidth > 768 && sidebar.classList.remove("sidebar-hidden");
    };

    window.addEventListener('resize', resize);
    resize();

    sidebar.addEventListener('click', e => {
      if (e.target.nodeName !== 'A') return;
      e.preventDefault();
      console.log("sidebar click", e);
    });

    shadow.appendChild(style);
    shadow.appendChild(sidebar);
    shadow.appendChild(handle);

  }
}

customElements.define('x-sidebar', Sidebar);
