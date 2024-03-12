const style = document.createElement("style");
style.textContent = `
  ::-webkit-scrollbar {
    width: 4px;
    background: var(--theme);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--text);
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
    background: var(--theme);
  }
`;
document.head.appendChild(style);

window.addEventListener('DOMContentLoaded', function() {
  var navbar = document.createElement('div');
  navbar.id = 'navbar';
  navbar.innerHTML = `
    <style>
      #navbar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
      }

      #navbar #top-bar {
        padding: 10px;
      }

      #navbar #top-bar nav ul {
        display: flex;
        list-style-type: none;
        padding: 10;
        margin: 0;
      }

      #navbar #top-bar nav ul li {
        margin: 0 10px;
      }

      #navbar #top-bar nav ul li a {
        text-decoration: none;
        color: var(--text);
        font-weight: bold;
        font-size: x-large;
        transition: background-color 0.3s ease;
      }

      .settings {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 1.5em;
      }

      path {
        transition: fill 0.3s ease;
      }

      .settings:hover path {
        stroke: var(--text-secondary);
      }

      .svg {
        width: 1.1em;
        vertical-align: top;
      }

      .hvuncen:hover path {
        stroke: var(--text-secondary);
      }

      #navbar #top-bar nav ul li a:hover {
        color: var(--text-secondary);
      }

      .navlogo {
        height: 45px;
        border-radius: 15px;
        position: absolute;
        left: 15px;
        top: 2px;
        transition: transform .7s ease-in-out;
      }

      .navlogo:hover {
        cursor: pointer;
        transform: rotate(360deg);
      }

      .hvuncen {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        cursor: pointer;
        z-index: 9999;

      }
      
      .hvuncen:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        bottom: 0;
        background: var(--text);
        height: 4px;
        transition-property: left, right;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
      }
      
      .hvuncen:active:before, .hvuncen:focus:before, .hvuncen:hover:before {
        left: 0;
        right: 0;
      }
      
    </style>

    <div id="top-bar">
      <nav>
        <ul>
          <li><img onclick="location.href='https://www.youtube.com/@IRV77stuff'" src="https://irv77.netlify.app/img/newlogo.png" class="navlogo" draggable="false"></li>
          <li class="hvuncen"><a href="https://irv77.netlify.app/index.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"    stroke="var(--text)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg><span> Home</span></a></li>
          <li class="hvuncen"><a href="https://irv77.netlify.app/html/about.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"    stroke="var(--text)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg><span> About</span></a></li>
          <li class="hvuncen"><a href="https://irv77.netlify.app/html/games.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"    stroke="var(--text)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" /><path d="M6 12h4m-2 -2v4" /><path d="M15 11l0 .01" /><path d="M18 13l0 .01" />
          </svg><span> Games</span></a></li>
          <li class="hvuncen"><a href="https://irv77.netlify.app/html/chat.html"><svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"    stroke="var(--text)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
          </svg><span> Discord</span></a></li>
          <li class="hvuncen"><a href="https://irv77.netlify.app/html/extra.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"    stroke="var(--text)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M20 4v8" /><path d="M16 4.5v7" /><path d="M12 5v16" /><path d="M8 5.5v5" /><path d="M4 6v4" /><path d="M20 8h-16" />
          </svg><span> Extras</span></a></a></li>
          <li><a href="https://irv77.netlify.app/html/settings.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="settings"  viewBox="0 0 24 24"    stroke="var(--text)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
          <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M6 4v4" /><path d="M6 12v8" /><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 4v10" /><path d="M12 18v2" /><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M18 4v1" /><path d="M18 9v11" />
          </svg>
        </a></li>
        </ul>
      </nav>
    </div>
  `;

  document.body.insertBefore(navbar, document.body.firstChild);

  var navigationLinks = navbar.getElementsByTagName('a');

  for (var i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function(event) {
      var target = event.target.getAttribute('href');
      console.log('Navigating to:', target);
      // Add your navigation logic here
    });
  }
  
  document.body.style.marginTop = "60px";
});

// Function to enable panic mode
function panOn() {
  localStorage.setItem("panic", "on");
  location.reload();
}

// Function to disable panic mode
function panOff() {
  localStorage.setItem("panic", "off");
  location.reload();
}

// Check if panic mode is enabled
if (localStorage.getItem("panic") === "on") {
  document.addEventListener('keydown', event => {
    if (event.keyCode === 192) {
      let url = localStorage.getItem('panicAddress');
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
      }
      window.open(url, '_self');
    }
  });
}

// Create a new <p> element
var copyrightParagraph = document.createElement("p");
        
// Set the text content of the <p> element
copyrightParagraph.textContent = "© Voxonoly Studios 2024. By using this site/service, you agree to the use of cookies";

// Get a reference to the <div> element where you want to insert the <p> element
var copyrightContainer = document.querySelector(".copy"); // Replace with the actual class or ID of your <div>
copyrightContainer.style.color = "var(--text-secondary);";
copyrightContainer.style.width = "100%";
copyrightContainer.style.textAlign = "center";
// Append the <p> element to the <div>
copyrightContainer.appendChild(copyrightParagraph);