(this["webpackJsonplanding-news"]=this["webpackJsonplanding-news"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(5),n=a.n(s),i=a(2),r=(a(12),a(0));function l(){return Object(r.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("span",{style:{color:"white"},children:"Google News"})})})}a(14);function o(e){var t=Object(c.useState)({}),a=Object(i.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),d=o[0],j=o[1];return Object(c.useEffect)((function(){j(!0),fetch("https://free-news.p.rapidapi.com/v1/search?q=Technology&lang=en",{method:"GET",headers:{"x-rapidapi-key":"ca4e8559bfmshb36feb647ab99e4p1b37e4jsn3108e78e485c","x-rapidapi-host":"free-news.p.rapidapi.com"},redirect:"follow"}).then((function(e){return e.json()})).then((function(e){n(e.articles[6]),j(!1)}))}),[]),d?Object(r.jsx)("div",{className:"heroContainer",children:Object(r.jsx)("div",{className:"heroContainer__overlay",children:Object(r.jsxs)("div",{className:"heroContainer__overlay--info",children:[Object(r.jsx)("span",{className:"badge bg-primary",children:"Dommy data "}),Object(r.jsx)("h2",{children:"News data"}),Object(r.jsx)("h4",{children:"By Televisa"})]})})}):Object(r.jsxs)("div",{className:"heroContainer",children:[Object(r.jsx)("div",{className:"heroContainer__overlay",children:Object(r.jsxs)("div",{className:"heroContainer__overlay--info",children:[Object(r.jsx)("span",{className:"badge bg-primary",children:"technology "}),Object(r.jsx)("h2",{children:s.title})]})}),Object(r.jsx)("img",{src:s.media||"https://images.unsplash.com/photo-1426900985728-92d56f56fdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwNTI1NDA1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",className:"img-fluid",alt:"image_article"})]})}a(15);var d=a(6),j=a.n(d),b=(a(16),a(7)),u=a.n(b);function h(e){var t=e.article;return Object(c.useEffect)((function(){j.a.init({duration:2e3})}),[]),Object(r.jsxs)("div",{"data-aos":"fade-right",className:"Card",children:[Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("img",{src:t.media,className:"img-fluid",alt:"news image"}),Object(r.jsx)("span",{className:"badge bg-danger",children:t.topic}),Object(r.jsxs)("div",{className:"card-info",children:[Object(r.jsx)("h2",{className:"card-title",children:t.title}),t.summary?Object(r.jsx)("p",{className:"card-text",children:t.summary.slice(0,100)}):Object(r.jsx)("p",{className:"card-text",children:t.country}),Object(r.jsx)("p",{className:"card-text",children:Object(r.jsx)(u.a,{fromNow:!0,children:t.published_date})})]})]}),Object(r.jsx)("div",{className:"card-footer bg-dark text-muted",children:t.author||"NewYork"})]},t._id)}a(19);function p(e){var t=e.periodist;return Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[Object(r.jsxs)("div",{className:"ms-2 me-auto",id:"info",children:[Object(r.jsx)("div",{className:"fw-bold",children:t.company.name}),Object(r.jsxs)("p",{children:[" ",t.website]})]}),Object(r.jsx)("span",{className:"badge bg-dark rounded-pill",children:"Digital"}),Object(r.jsx)("span",{className:"badge bg-success rounded-pill",children:Math.floor(100*Math.random())})]},t.id)}function m(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(r.jsx)("ol",{className:"list-group list-group-numbered",children:a.map((function(e){return Object(r.jsx)(p,{periodist:e},e.id)}))})}a(20);var f=a(3),O="store_data",x="change_page",g="load_page",N=function(e,t){switch(t.type){case O:return Object(f.a)(Object(f.a)({},e),{},{articles:t.payload});case x:return Object(f.a)(Object(f.a)({},e),{},{page:t.payload});case g:return Object(f.a)(Object(f.a)({},e),{},{load:t.payload});default:return e}};var v=function(){var e=function(e){var t=e.initialpage,a=e.initalarticles,s=e.initialloadData,n=Object(c.useReducer)(N,{articles:a,page:t,load:s}),r=Object(i.a)(n,2),l=r[0],o=r[1];return{articles:l.articles,page:l.page,load:l.load,storeData:function(e){return o({type:O,payload:e})},loadData:function(e){return o({type:g,payload:e})},changePage:function(e){return o({type:x,payload:e})}}}({initalarticles:[],initialpage:1,initialloadData:!1}),t=e.page,a=e.load,s=e.articles,n=e.changePage,d=e.loadData,j=e.storeData,b=Object(c.useState)(""),u=Object(i.a)(b,2),p=u[0],f=u[1],v=Object(c.useRef)(null);Object(c.useEffect)((function(){d(!0),fetch("https://free-news.p.rapidapi.com/v1/search?q=Digital%20Economy&lang=en&page=".concat(t),{method:"GET",headers:{"x-rapidapi-key":"ca4e8559bfmshb36feb647ab99e4p1b37e4jsn3108e78e485c","x-rapidapi-host":"free-news.p.rapidapi.com"},redirect:"follow"}).then((function(e){return e.json()})).then((function(e){j(e.articles),d(!1)}))}),[t]);var y=Object(c.useMemo)((function(){return s.filter((function(e){return e.title.toLowerCase().includes(p.toLowerCase())}))}),[s,p]);return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(o,{article:s[5]}),Object(r.jsxs)("div",{className:"App__bodyNews",children:[a?Object(r.jsx)("div",{className:"spinner-border  text-success "}):Object(r.jsxs)("div",{className:"bodyNews__listnews",children:[Object(r.jsx)("div",{className:"bodyNews__listnews--header",children:Object(r.jsx)("h1",{children:"Read More"})}),Object(r.jsxs)("div",{className:" input-group mb-3",children:[Object(r.jsx)("button",{type:"button",onClick:function(){return n(t-1)},className:"btn btn-outline-success",children:"Prev Page"}),Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Til",value:p,ref:v,onChange:function(){f(v.current.value)}}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return n(t+1)},children:"Next Page"})]}),y.map((function(e){return Object(r.jsx)(h,{article:e},e._id)}))]}),Object(r.jsx)("div",{className:"bodyNews__morenews",children:Object(r.jsxs)("div",{className:"bodyNews__morenews--header",children:[Object(r.jsx)("h1",{children:"Writers"}),Object(r.jsx)(m,{})]})})]}),Object(r.jsx)("div",{className:"App__footer bg-dark ",children:Object(r.jsx)("div",{className:"App__footer--title",children:Object(r.jsx)("h1",{children:"Google News"})})})]})};a(21);n.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.78d3a644.chunk.js.map