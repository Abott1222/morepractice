'use strict';

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let cta = document.getElementById('cta-img');
cta.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
// let cta = document.querySelector('')
// let cta = document.querySelector('')

let navLinks = document.querySelectorAll("nav a");
navLinks.forEach( (a,ix) => {
  a.style.color = 'green';
  a.textContent = siteContent['nav'][`nav-item-${ix+1}`];
});

let ctaTextItems = document.querySelector(".cta-text").children;
// ctaTextItems.forEach( item  => {
//   let nodeName = item.nodeName.toLowerCase();
//   item.textContent = siteContent['cta'][nodeName];
// })
for(let i=0; i<ctaTextItems.length; i++) {
  let item = ctaTextItems[i];
  let nodeName = item.nodeName.toLowerCase();
  item.textContent = siteContent['cta'][nodeName];
}

let topContent = document.querySelector(".bottom-content .text-content").children;
for(let i=0; i<topContent.length; i++) {
  let item = topContent[i];
  let nodeName = item.nodeName.toLowerCase();
  let content = nodeName === 'h4' ? siteContent['cta'][`features-${nodeName}`] : siteContent['cta']['features-content'];
  console.log(content);
}

let bottomContent = document.querySelector(".bottom-content .text-content").children;
for(let i=0; i<bottomContent.length; i++) {
  let item = bottomContent[i];
  let nodeName = item.nodeName.toLowerCase();
  let content = nodeName === 'h4' ? siteContent['cta'][`features-${nodeName}`] : siteContent['cta']['features-content'];
}

let nav = document.querySelector('.nav');

for(let i=0;i<2;i++) {
  let tmp = document.createElement('a');
  tmp.href = "#";
  tmp.textContent = i === 0 ? "Purchase" : "Upgrade"
  tmp.style.color = "green";
  nav.appendChild(tmp);

}
