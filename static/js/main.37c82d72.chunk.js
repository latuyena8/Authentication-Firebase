(this["webpackJsonpauthen-demo"]=this["webpackJsonpauthen-demo"]||[]).push([[0],{50:function(e,t,n){},56:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=n(41),i=n.n(c),s=(n(50),n(18)),o=n.n(s),u=n(21),h=n(17),p=n(24),d=n(10),b=(n(56),n(8));var j=function(){return Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("p",{children:"Home page"}),Object(b.jsx)(p.b,{to:"/sign-in",children:"Sign In"})]})};var f=function(){return Object(b.jsx)("div",{children:"Oopss ... Not found"})},l=n(43),O=n.n(l),x=n(45),g=n.n(x).a.create({baseURL:"https://demo.7hit.vn",responseType:"json",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},async:!0,crossDomain:!0});g.interceptors.request.use(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=h.a.auth().currentUser)){e.next=6;break}return e.next=4,n.getIdToken();case 4:r=e.sent,t.headers.Authorization=r;case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var m=g,v={signInFlow:"redirect",signInSuccessUrl:"/sign-in",signInOptions:[h.a.auth.GoogleAuthProvider.PROVIDER_ID,h.a.auth.FacebookAuthProvider.PROVIDER_ID,h.a.auth.GithubAuthProvider.PROVIDER_ID]};function A(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/rest/V1/7hit/customers/social/token",{token:"EAAEynVn3ga4BALziZB03QHZAnh7rZB3X8qGbg7M5sB7C1OfeeKb9aWgh6OclLtmxobNygdfX3PYDTBBS4TBdby9CW4yFUwtBcswVbqqZCbdo7jw24usQXDirKf4ea1RlBKtc1mTc01ZAZBjjDwYwTbLn3D4VhoC7cAjt7OgJJIdXBkYTJKGmnX",type:"facebook",user_info:{firstname:"Tin",lastname:"Tran"}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){return Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(O.a,{uiConfig:v,firebaseAuth:h.a.auth()}),Object(b.jsx)("button",{style:{width:300,height:100},onClick:A,children:"Set the Authorization Header with Axios"})]})};h.a.initializeApp({apiKey:"AIzaSyAKIMy69mThtiKp0mMLBziwEourkTc5tsY",authDomain:"authen-demo-df33e.firebaseapp.com"});var I=function(){return Object(r.useEffect)((function(){var e=h.a.auth().onAuthStateChanged(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]),Object(b.jsx)("div",{className:"photo-app",children:Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading ..."}),children:Object(b.jsx)(p.a,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",component:j}),Object(b.jsx)(d.a,{path:"/sign-in",component:w}),Object(b.jsx)(d.a,{component:f})]})})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),k()}},[[87,1,2]]]);
//# sourceMappingURL=main.37c82d72.chunk.js.map