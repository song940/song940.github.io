import 'https://inbox.lsong.org/js/inbox.js';

export class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <header class="header scrollbar-hide">
      <a class="heading" href="/" >
        <img src="icon.svg" alt="" class="logo">
        <h1><b>Liu Song’s</b> Home</h1>
      </a>
      <nav id="navbar" class="nav nav-bar">
        <a href="//lsong.org">home</a>
        <a href="//lsong.org/posts">blog</a>
        <a href="//lsong.org/books">books</a>
        <a href="//lsong.org/music">music</a>
        <a href="//lsong.org/apps.html">apps</a>
        <span class="separator" ></span>
        <x-inbox></x-inbox>
      </nav>
      <hr />
    </header>`;
  }
}

customElements.define('x-header', Header);

class Sidebar extends HTMLElement {
  constructor() {
    super();
    
    const shadow = this.attachShadow({mode: 'open'});
    
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
      </div>`;
    
    const style = document.createElement('style');
    style.textContent = `
      .sidebar {
        width: 260px;
        height: 100vh;
        color: white;
        background-color: #333;
        position: relative;
        transition: width 0.5s ease;
      }

      .sidebar-hidden {
        width: 0px;
      }

      .sidebar-inner {
        overflow: hidden;
        padding: 10px;
        height: 100vh;
        width: 220px;
      }

      .sidebar::after {
        content: '';
        bottom: 0px;
        right: 0;
        width: 20px;
        height: 50px;
        display: block;
        position: absolute;
        cursor: pointer;
        transform: translate(100%, -100%);
        background-color: #333;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      .sidebar a {
        color: white;
      }

      .sidebar ul {
        padding: 0;
        list-style: none;
      }

      .sidebar li {
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }
      .sidebar li:hover {
        background-color: #444;
      }

      .sidebar a {
        text-decoration: none;
      }
    `;

    sidebar.addEventListener('click', e => {
      console.log(e);
      sidebar.classList.toggle("sidebar-hidden");
    });

    

    const resize = () => {
      document.body.clientWidth < 768 && sidebar.classList.add("sidebar-hidden");
      document.body.clientWidth > 768 && sidebar.classList.remove("sidebar-hidden");
    };

    window.addEventListener('resize', resize);
    resize();

    // 将元素附加到 shadow dom
    shadow.appendChild(style);
    shadow.appendChild(sidebar);
  }
}

// 定义新元素
customElements.define('x-sidebar', Sidebar);
