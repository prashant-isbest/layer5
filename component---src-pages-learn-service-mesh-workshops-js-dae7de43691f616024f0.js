(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5954],{67228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},23646:function(t,e,n){var r=n(67228);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.default=t.exports,t.exports.__esModule=!0},69100:function(t,e,n){var r=n(99489),a=n(4043);function o(e,n,i){return a()?(t.exports=o=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=o=function(t,e,n){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return n&&r(o,n.prototype),o},t.exports.default=t.exports,t.exports.__esModule=!0),o.apply(null,arguments)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},59713:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},4043:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},46860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},98206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,n){var r=n(23646),a=n(46860),o=n(60379),i=n(98206);t.exports=function(t){return r(t)||a(t)||o(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},60379:function(t,e,n){var r=n(67228);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},46725:function(t,e,n){var r=n(93395);t.exports={MDXRenderer:r}},93395:function(t,e,n){var r=n(69100),a=n(319),o=n(59713),i=n(37316);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=n(67294),m=n(64983).mdx,p=n(89480).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,o=i(t,["scope","children"]),l=p(e),d=c.useMemo((function(){if(!n)return null;var t=s({React:c,mdx:m},l),e=Object.keys(t),o=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,e]);return c.createElement(d,s({},o))}},96371:function(t,e,n){"use strict";var r=n(19756),a=n(67294),o=(n(25444),n(62347));e.Z=function(t){var e=t.childImageSharp,n=t.extension,i=t.publicURL,l=t.alt,s=(0,r.Z)(t,["childImageSharp","extension","publicURL","alt"]);return e||"svg"!==n?a.createElement(o.G,Object.assign({image:e.gatsbyImageData},s,{alt:l})):a.createElement("div",{className:"old-gatsby-image-wrapper"},a.createElement("img",{src:i,alt:l}))}},78306:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var r=n(67294),a=n(70456),o=n(20092),i=n(36179),l=n(97264),s=n(25444),c=n(46725),m=n(57067),p=n(96371),d=a.ZP.div.withConfig({displayName:"WorkshopsCardWrapperstyle__WorkshopCardWrapper",componentId:"sc-1xlqz3-0"})(["\n  display: block;\n  width: 100%;\n  height: auto;\n  margin-top: 1.25rem;\n  position: relative;\n  align-items: center;\n  border-top: 0.3125rem solid darkcyan;\n  border-radius: 0.3125rem;\n\n  .main {\n    display: block;\n    width: 100%;\n    height: 25rem;\n    transition: all 0.25s ease-in;\n  }\n\n  .main-open {\n    display: block;\n    width: 100%;\n    height: auto;\n    transition: all 0.25s ease-in;\n  }\n\n  .title {\n    text-align: center;\n    font-size: 1.5rem;\n    padding-bottom: 0.625rem;\n  }\n\n  .image-container {\n    display: block;\n    width: 100%;\n    height: 50%;\n    overflow: hidden;\n  }\n\n  .image-container-open {\n    display: block;\n    width: 100%;\n    height: auto;\n    margin-bottom: 1.25rem;\n  }\n\n  .image {\n    display: block;\n    width: 100%;\n    height: 100%;\n    transition: all 0.25s ease-in;\n    box-shadow: 0 0 black;\n\n    .gatsby-image-wrapper,.old-gatsby-image-wrapper {\n      height: 90%;\n    }\n  }\n\n  .card-content {\n    display: block;\n    width: 100%;\n    padding-top: 0.625rem;\n    transition: all 0.25s ease-in;\n  }\n\n  .card-content-open {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin-top: 0.625rem;\n    transition: all 0.25s ease-in;\n  }\n\n  .para {\n    padding-left: 0.625rem;\n  }\n\n  @media only screen and (max-width: 62rem) {\n    .workshop-grid-card {\n      padding-bottom: 1.25rem;\n    }\n  }\n"]),u=function(t){var e=t.frontmatter,n=t.content,a=t.ID,o=t.id;return r.createElement(d,null,r.createElement("div",{className:n&&a===o?"main-open":"main"},r.createElement("div",{className:n&&a===o?"image-container-open":"image-container"},r.createElement("div",{className:"image"},r.createElement(p.Z,Object.assign({},e.thumbnail,{imgStyle:{objectFit:"cover"},alt:e.title})))),r.createElement("div",{className:"upcomingContainer"},"delivered"===e.status?"":r.createElement("button",{className:"upcoming"},"Upcoming...")),r.createElement("div",{className:n&&a===o?"card-content-open":"card-content"},r.createElement("div",null,r.createElement("h3",{className:"title"},e.title),r.createElement("p",{className:"para"},e.abstract)))))},g=n(35318),f=a.ZP.div.withConfig({displayName:"WorkshopsGridstyle__WorkshopPageWrapper",componentId:"i5sks1-0"})(["\n\t.btn-and-status {\n\t\tdisplay: flex;\n\t\twidth: 97%;\n\t\tposition: absolute;\n\t\ttop: 92%;\n\n\t\tp {\n\t\t\tcolor: ",";\n\t\t\tfont-size: 1.25rem;\n\t\t\tmargin-left: 1.25rem;\n\t\t\tfloat: left;\n\t\t\tpadding-left: 1.5625rem;\n\t\t}\n\t}\n    h2.sub-heading {\n        font-weight: 400;\n\t\tmargin: -0.5rem auto 5rem;\n    }\n\t.btn-and-status-open {\n\t\tdisplay: flex;\n\t\tmargin: auto;\n\t\tpadding-bottom: 1rem;\n\t\talign-items: center;\n\t\twidth: 95%;\n\n\t\tp {\n\t\t\tcolor: darkgrey;\n\t\t\tfont-size: 1.25rem;\n\t\t\tmargin-left: 1.25rem;\n\t\t\tfloat: left;\n\t\t}\n\t}\n\n\tbutton.upcoming {\n\t\tdisplay: block;\n\t\twidth: auto;\n\t\tmargin-left: auto;\n\t\tmargin-right: 1.25rem;\n\t\tpadding: 0.375rem 0.625rem;\n\t\tfont-size: 0.75rem;\n\t\tfont-weight: 600;\n\t\tcolor: #eee;\n\t\tbackground-color: ",";\n\t\tborder: none;\n\t\tfont-family: 'Open Sans';\n\t\tborder-radius: 0.9375rem;\n\t\toutline: none;\n\t}\n\n\t.linkAndReadBtns {\n\t\tdisplay: flex;\n\t\twidth: 95%;\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n\t\tposition: absolute;\n\t\tbottom: 0rem;\n\t}\n\n\t.linkAndReadBtns-open {\n\t\tdisplay: flex;\n\t\tflex: auto;\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n\t}\n\n\tbutton.readmeBtn {\n\t\tdisplay: flex;\n\t\tbackground: transparent;\n\t\tborder: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tfont-size: 1.125rem;\n\t\tcursor: pointer;\n\t\ttransition: 0.2s ease-in all;\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n\t.readmreBtn:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: -22rem;\n\t\tright: -0.125rem;\n\t\tleft: 0;\n\t\tbottom: -1rem;\n\t}\n\n\ta.siteLink {\n\t\tpadding: 0.5rem 0.25rem 0rem;\n\t\tfilter: grayscale(100%) brightness(0.5);\n\t\ttransition: 0.2s ease-in-out all;\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t\tfilter: none;\n\t\t}\n\t}\n\n\t.externalLink {\n\t\tposition: relative;\n\t\tleft: 1rem;\n\t\tmargin-top: 0.25rem;\n\t}\n\n\t.text-contents {\n\t\tdisplay: none;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tfont-family: 'Open Sans';\n\t}\n\n\t.active {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tpadding: 1.5rem;\n\t}\n\n\t.social-icons {\n\t\tdisplay: flex;\n\t}\n\n\t.links {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 0.25rem 0.75rem;\n\t\tbackground-color: whitesmoke;\n\t\tmargin-right: 0.5rem;\n\t\tborder-radius: 0.3rem;\n\t\tbox-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);\n\t\ttransition: 0.25s ease-in-out all;\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t\timg {\n\t\t\t\tfilter: none;\n\t\t\t}\n\t\t}\n\n\t\timg {\n\t\t\theight: 1.25rem;\n\t\t\twidth: auto;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.625rem;\n\t\t\tfilter: grayscale(1);\n\t\t}\n\t}\n\n\t.workshop-list-wrapper {\n\t\tpadding: 3.125rem 0rem;\n\t}\n\t.workshop-grid-wrapper {\n\t\tpadding-bottom: 3.75rem;\n\t}\n\n\t.workshop-grid-col{\n\t\ttransition: all 0.25s ease-in;\n\t}\n\n\t.workshop-grid-card {\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\theight: auto;\n\t\tborder-radius: 0.3125rem;\n\t\tmargin-bottom: 1.25rem;\n\t\tbox-shadow: 0rem 0.0625rem 0.3125rem rgba(0, 0, 0, 0.2);\n\n\t\t&:hover {\n\t\t\t.main {\n\t\t\t\tbox-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.15);\n\t\t\t}\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 57rem) {\n\t\t.workshop-page-wrapper {\n\t\t\tpadding-bottom: 5rem;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 37.5rem) {\n\t\t.links {\n\t\t\tpadding: 0rem 0.625rem;\n\t\t\tmargin-right: 0.3125rem;\n\t\t\tfont-size: 0.9375rem;\n\n\t\t\timg {\n\t\t\t\theight: 0.9375rem;\n\t\t\t}\n\t\t}\n\n\t\t.readme-btn {\n\t\t\tmargin: 0rem 0.625rem 0.625rem 0rem;\n\t\t\tpadding: 0.3125rem 0.3125rem;\n\t\t}\n\t}\n\t.see-more-button {\n\t\tmargin: 0rem auto;\n\t}\n\n\t.para {\n\t\ttext-align: center;\n\t\tfont-weight: 500;\n\t}\n\n\t.rqst-workshop {\n\t\t.bottom-image {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t}\n\t\t\n\t\ta {\n\t\t\tmargin: auto;\n\t\t}\n"],(function(t){return t.theme.primaryLightColor}),(function(t){return t.theme.secondaryColor}),(function(t){return t.theme.primaryLightColorTwo}),(function(t){return t.theme.primaryLightColorTwo}),(function(t){return t.theme.primaryLightColorTwo})),h=n(51852),b=n(53364),y=n(22626),x=n.p+"static/workshops-478827c107929d0f766f1b64333d1656.svg",v=n(23201),w=function(){var t=(0,r.useState)(!1),e=t[0],n=t[1],a=(0,r.useState)(!1),o=a[0],i=a[1],l=(0,r.useState)(""),p=l[0],d=l[1],w=(0,s.useStaticQuery)("3180254910"),E=function(t){o?p===t?(i(!1),n(!1),d("")):(i(!1),n(!1),d(t),n(!0),i(!0)):(d(t),n(!0),i(!0))};return r.createElement(f,null,r.createElement(g.Z,{title:"Service Mesh Workshops"}),r.createElement("h2",{className:"sub-heading"},"Over 5,000 engineers trained."),r.createElement("div",{className:"workshop-page-wrapper"},r.createElement(m.W2,null,r.createElement("div",{className:"workshop-grid-wrapper"},r.createElement(m.X2,null,w.allMdx.nodes.map((function(t){var n=t.id,a=t.frontmatter,o=t.fields,i=t.body;return r.createElement(m.JX,Object.assign({},e&&p===n?{xs:12,sm:12,lg:12}:{xs:12,sm:6,lg:4},{key:n,className:"workshop-grid-col"}),r.createElement("div",{className:"workshop-grid-card"},r.createElement(u,{frontmatter:a,content:e,ID:p,id:n}),r.createElement("div",{className:e&&p===n?"active":"text-contents"},r.createElement("div",{className:"content"},r.createElement(c.MDXRenderer,null,i))),r.createElement("div",{className:e&&p===n?"btn-and-status-open":"btn-and-status"},r.createElement("div",{className:"social-icons"},a.slack&&"delivered"===a.status&&e&&p===n?r.createElement("a",{href:a.slack,target:"_blank",rel:"noreferrer",className:"links"},r.createElement("img",{src:b.Z,alt:"Slack"}),"Slack"):""),r.createElement("div",{className:e&&p===n?"linkAndReadBtns-open":"linkAndReadBtns"},r.createElement("div",{className:"expand"},e&&p===n?r.createElement("button",{onClick:function(){return E(n)},className:"readmeBtn"}," Read Less ",r.createElement(h.HTv,{className:"icon",size:30})):r.createElement("button",{onClick:function(){return E(n)},className:"readmeBtn readmreBtn"}," Read More ",r.createElement(h.CSs,{className:"icon",size:30}))),r.createElement("div",{className:"externalLink"},r.createElement(s.Link,{to:o.slug,className:"siteLink"},r.createElement(v.GNX,{style:{height:"25px",width:"auto"}})))))))}))),r.createElement(m.X2,{className:"rqst-workshop"},r.createElement("img",{src:x,alt:"WorkshopImage",className:"bottom-image"}),r.createElement(y.Z,{primary:!0,url:"mailto:support@layer5.io",external:!0},"Request A Workshop"))))))},E=n(34967),k=n(97956),N=n(38155),O=function(){return r.createElement(a.f6,{theme:N.Z},r.createElement(o.Z,null,r.createElement(k.Z,null),r.createElement(i.Z,{title:"Service Mesh Workshops",description:"Service mesh workshops and tutorials for Istio, Envoy, Linkerd, Consul, App Mesh, Open Service Mesh"}),r.createElement(l.Z,null),r.createElement(w,null),r.createElement(E.Z,null)))}},35318:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(67294),a=n(25444),o=n(88449),i=n.n(o),l=n(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),s=n(96371),c=function(t,e){return r.createElement(r.Fragment,null,e?r.createElement(a.Link,{to:"/community/members/"+i()(t.name)},r.createElement("span",null,t.name)):r.createElement("span",null,t.name))},m=function(t){var e=t.category,n=t.title,o=t.subtitle,m=t.author,p=t.thumbnail,d=!1;m&&(d=(0,a.useStaticQuery)("1485533831").allMdx.nodes.some((function(t){return t.frontmatter.name==m.name})));return r.createElement(l,null,r.createElement("div",{className:"page-header"},p&&r.createElement("div",{className:"feature-image"},r.createElement(s.Z,Object.assign({},p,{imgStyle:{objectFit:"contain"},alt:n}))),r.createElement("h1",{className:"page-title"},n),o&&r.createElement("h3",null,o),e&&r.createElement("div",{className:"breadcrumbs"},r.createElement("span",null,r.createElement("h5",null,"Category:"),r.createElement("p",{key:e},r.createElement(a.Link,{to:"/blog/category/"+i()(e)},r.createElement("span",null,e)))),m&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"By:"),r.createElement("p",null,c(m,d))))),!e&&m&&r.createElement("div",{className:"breadcrumbs post"},r.createElement("h5",null,"By:"),r.createElement("span",null,c(m,d)))))}},88449:function(t){t.exports=function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}]);
//# sourceMappingURL=component---src-pages-learn-service-mesh-workshops-js-dae7de43691f616024f0.js.map