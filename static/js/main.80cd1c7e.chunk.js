(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(4),s=c.n(n),i=c(2),r=c(0);function o(e){var t=e.currentPage;return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsxs)("h1",{className:"mainheader",children:["David Lucio",Object(r.jsx)("span",{children:"Digital Portfolio"})]}),Object(r.jsx)("h2",{className:"subheader",children:""===t?"Welcome":t})]})}function l(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("p",{className:"copyright",children:"\xa9 David Lucio 2021"})})}function d(e){var t=e.currentPage,c=e.handlePageChange;return Object(r.jsxs)("nav",{className:"navigation-menu",children:[Object(r.jsx)("div",{className:"Home"===t?"menu-item selected":"menu-item",children:Object(r.jsx)("a",{href:"#home",onClick:function(){return c("Home")},className:"menu-link",children:"Home"})}),Object(r.jsx)("div",{className:"Projects"===t?"menu-item selected":"menu-item",children:Object(r.jsx)("a",{href:"#projects",onClick:function(){return c("Projects")},className:"menu-link",children:"Projects"})}),Object(r.jsx)("div",{className:"Contact"===t?"menu-item selected":"menu-item",children:Object(r.jsx)("a",{href:"#contact",onClick:function(){return c("Contact")},className:"menu-link",children:"Contact"})}),Object(r.jsx)("div",{className:"menu-item",children:Object(r.jsx)("a",{href:"./assets/downloads/dlucio-cv-2021.pdf",className:"menu-link",target:"_blank",children:"Resume"})})]})}function j(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{className:"profile-picture",src:"./assets/images/profilepic.png",alt:"David"}),Object(r.jsx)("h3",{children:"Welcome to my site"}),Object(r.jsx)("p",{children:'I\'m David Lucio, but you can just call me "Lucio." This is a digital portfolio to help guide you through my various projects, and teach you a little more about myself and my goals.'}),Object(r.jsx)("p",{children:"I've been a web developer and engineer for more than a decade now. I originally started back-end, but shifted to front-end later in my career."}),Object(r.jsx)("p",{children:"Presently, I am working toward expanding my web dev skills, and trying to leverage my knowledge to create games. I am also a writer and game designer, focusing on story and mechanics respectively."}),Object(r.jsx)("hr",{}),Object(r.jsx)("h3",{children:"About Me"}),Object(r.jsx)("img",{className:"puppy-picture",src:"./assets/images/puppypic.png",alt:"Nymeria and Fenris"}),Object(r.jsx)("p",{children:"I'm originally from Texas, but have lived in Seattle for almost a decade. In that time, I have consistently worked as a web developer."}),Object(r.jsx)("p",{children:"However, even after a decade of development, skills can stagnate. So in 2021, I enrolled in a bootcamp at UW to refresh my knowledge, pick up new skills, and reset the course of my career!"}),Object(r.jsx)("p",{children:"Outside of web and game development, you can find me playing games, writing, working out, spending time with my two wolves (Fenris and Nymeria), or catching up on shows and movies."})]})}var h=c(5);function m(e){var t=e.project,c=e.handleFocusChange;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("figure",{className:"card-image",id:"project".concat(t.id),onClick:function(){return c(t)},children:[Object(r.jsx)("img",{src:"./assets/images/stock-".concat(t.id,".png"),alt:t.subheader}),Object(r.jsx)("figcaption",{children:t.name})]})})}function u(e){var t=e.project;return void 0!==t.id?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)("img",{src:"./assets/images/example-".concat(t.id,".png"),alt:t.subheader}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("h4",{children:t.subheader}),Object(r.jsxs)("p",{children:[t.description," ",Object(r.jsx)("a",{href:t.url.deploy,target:"_blank",children:"Try it out..."})]}),Object(r.jsxs)("p",{className:"repository-link",children:["Visit the ",Object(r.jsx)("a",{href:t.url.repo,target:"_blank",children:"Repository"})]})]})]}):Object(r.jsx)("h3",{className:"center",children:"Select a Project"})}function b(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=function(e){return n(e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("article",{className:"project-preview",children:Object(r.jsx)(u,{project:c})}),Object(r.jsx)("aside",{className:"project-choices",children:h.map((function(e){return Object(r.jsx)(m,{project:e,handleFocusChange:s})}))})]})}function p(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"contact-email",children:Object(r.jsx)("a",{href:"mailto:david.a.lucio@gmail.com",children:"Email"})}),Object(r.jsx)("p",{className:"contact-phone",children:Object(r.jsx)("a",{href:"tel:+12067518144",children:"Phone"})}),Object(r.jsx)("p",{className:"contact-linkedin",children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/davidlucio/",children:"Linkedin"})}),Object(r.jsx)("p",{className:"contact-github",children:Object(r.jsx)("a",{href:"https://github.com/davidlucio",children:"GitHub"})}),Object(r.jsx)("i",{class:"fab fa-linkedin"})]})}function g(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{currentPage:c}),Object(r.jsx)(d,{currentPage:c,handlePageChange:function(e){return n(e)}}),Object(r.jsx)("section",{className:"content",id:c,children:"Home"===c?Object(r.jsx)(j,{}):"Projects"===c?Object(r.jsx)(b,{}):"Contact"===c?Object(r.jsx)(p,{}):Object(r.jsx)(j,{})}),Object(r.jsx)(l,{})]})}var O=function(){return Object(r.jsx)(g,{})};s.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":8,"name":"\\"BattleBrands\\"","subheader":"Digital Pet Game","description":"A micro-game, meant to mimic the pocket digital pets popular in the 90\'s. The application was built in Node.js using a MySql database.","url":{"repo":"https://github.com/Atlas238/battle-brands","deploy":"https://battle-brands.herokuapp.com/"}},{"id":6,"name":"\\"Hop\'r\\"","subheader":"Local Brewery Finder App","description":"An application that uses geolocation and the OpenBreweryDB.org API to randomly shuffle through local brewery options.","url":{"repo":"https://github.com/davidlucio/breweryfinder","deploy":"https://davidlucio.github.io/breweryfinder/"}},{"id":7,"name":"Weather Dashboard","subheader":"Weekly Forecast App","description":"This micro-application was developed for the UW Coding Bootcamp, leveraging thew OpenWeatherMap.org API to display a forecast for selected locations.","url":{"repo":"https://github.com/davidlucio/weatherdashboard_HW6","deploy":"https://davidlucio.github.io/weatherdashboard_HW6/"}}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.80cd1c7e.chunk.js.map