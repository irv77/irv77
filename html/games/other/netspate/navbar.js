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
        font-family: monospace, sherif
      }

      #navbar #top-bar {
        padding: 10px;
        background-color: var(--b3);
        box-shadow: 0 4px 4px 4px var(--b3);
      }

      #navbar #top-bar nav ul {
        display: flex;
        list-style-type: none;
        padding: 10;
        margin: 0;
      }

      #navbar #top-bar nav ul .hvuncen {
        margin: 0 10px;
        background-color: var(--b2);
        padding: 5px;
        border-radius: 10px;
      }

      #navbar #top-bar nav ul li a {
        text-decoration: none;
        color: var(--bc);
        font-weight: bold;
        font-size: x-large;
        transition: background-color 0.3s ease;
      }

      path {
        transition: fill 0.3s ease;
      }

      .svg {
        width: 1.1em;
        vertical-align: top;
      }

      .hvuncen:hover path {
        stroke: var(--bh);
        color: var(--bh);
      }

      #navbar #top-bar nav ul li a:hover {
        color: var(--bh);
        stroke: var(--bh);
      }

      .space {
        width: 172px;
        margin-right: 250px;
        margin-left: 10px;
        background-color: var(--b2);
        padding: 5px;
        border-radius: 10px;
      }

      .navlogo {
        height: 45px;
        border-radius: 15px;
        position: absolute;
        left: 65px;
        top: 8px;
        transition: transform .7s ease-in-out;
      }

      .navlogo:hover {
        cursor: pointer;
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
        background: var(--bc);
        height: 4px;
        transition-property: left, right;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
      }
      
      .hvuncen:active:before, .hvuncen:focus:before, .hvuncen:hover:before {
        left: 0;
        right: 0;
      }
      
      .copy p {
        margin: 0;
      }
    </style>

    <div id="top-bar">
      <nav>
        <ul>
          <li class="space"><img style="cursor: default;" src="logo.png" class="navlogo" draggable="false">
          </li>
          <li class="hvuncen"><a href="https://irv77.github.io/test/index.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"  fill="var(--b3)"  stroke="var(--bc)"  stroke-width="2.25"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg><span> Home</span></a></li>
          <li class="hvuncen"><a href="https://irv77.netlify.app/html/movies.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"  fill="var(--b3)"  stroke="var(--bc)"  stroke-width="1.75"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 4l0 16" /><path d="M16 4l0 16" /><path d="M4 8l4 0" /><path d="M4 16l4 0" /><path d="M4 12l16 0" /><path d="M16 8l4 0" /><path d="M16 16l4 0" />          </svg><span> Movies</span></a></li>
          <li class="hvuncen"><a href="https://irv77.github.io/test/st.html"><svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"  fill="var(--b3)"  stroke="var(--bc)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M16 3l-4 4l-4 -4" /><path d="M15 7v13" /><path d="M18 15v.01" /><path d="M18 12v.01" />          </svg><span> TV Shows</span></a></li>
          <li class="hvuncen"><a href="https://irv77.netlify.app/html/extra.html">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="svg"  viewBox="0 0 24 24"    stroke="var(--bc)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="ionicon s-ion-icon">
            <path d="M20 4v8" /><path d="M16 4.5v7" /><path d="M12 5v16" /><path d="M8 5.5v5" /><path d="M4 6v4" /><path d="M20 8h-16" />
          </svg><span> Extras</span></a></a></li>
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

// Create a new <p> element
var copyrightParagraph = document.createElement("p");
        
// Set the text content of the <p> element
copyrightParagraph.textContent = "© Voxonoly Studios 2024. By using this site/service, you agree to the use of cookies";

// Get a reference to the <div> element where you want to insert the <p> element
var copyrightContainer = document.querySelector(".copy"); // Replace with the actual class or ID of your <div>
// Append the <p> element to the <div>
copyrightContainer.appendChild(copyrightParagraph);