(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[1],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return u.a})),n.d(t,"b",(function(){return l}));n(16);function r(e){var t=e,n=1;return function e(){t>=15*n&&(t-=15*n,n++,e())}(),{level:n,currentXp:t,currentLevelMaxXp:15*n}}function c(e){return null!==e.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)}var a=n(4),i=[{name:a.o,link:a.n,exact:!0},{name:a.m,link:a.k,exact:!0},{name:a.r,link:a.p,exact:!1},{name:a.t,link:a.s}],s=[{name:a.d,link:a.c,exact:!0},{name:a.b,link:a.a,exact:!1},{name:a.f,link:a.e,exact:!0},{name:a.h,link:a.g,exact:!0}];function o(e){return null===e||void 0===e?void 0:e.split(" ").map((function(e){return e.charAt(0)})).join("").toUpperCase()}var u=n(43),l=function(e){return null===e||void 0===e?void 0:e.replace(/((?<=[\da-z])[A-Z]|(?<=[\dA-Z])[A-Z](?=[a-z]))/g,"-$1").toLowerCase()}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var r={available:"Available",inProgress:"inProgress",inPending:"inPending",validated:"Validated",denied:"Denied",all:"All"},c=[{id:123,name:"Baziluc Marian",job:"Programmer",profilePic:"",credits:0,xp:0,role:"user"},{id:9232,name:"Catalin Gheorghiu",job:"System Admin",profilePic:"",credits:0,xp:0,role:"admin"}],a=[{userId:123,challenges:[]},{userId:9232,challenges:[]}]},27:function(e,t,n){"use strict";var r=n(13),c=n.n(r),a=n(8),i=n(18),s=n(62),o=n.n(s),u=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,i,s,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:null,e.next=5,o()(Object(a.a)(Object(a.a)({url:t,method:n},r&&{data:r}),{},{headers:i}));case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a={get:function(e,t){return u(e,"GET",null,t)},post:function(e,t,n){return u(e,"POST",t,n)},put:function(e,t,n){return u(e,"PUT",t,n)},delete:function(e,t){return u(e,"DELETE",null,t)}}},29:function(e,t,n){"use strict";var r=n(0),c=n(24),a=n(1);function i(e){var t=e.children;return Object(a.jsx)("div",{className:"modal-header",children:t})}i.defaultProps={children:""};var s=i;function o(e){var t=e.children;return Object(a.jsx)("div",{className:"modal-body",children:t})}o.defaultProps={children:""};var u=o;function l(e){var t=e.children;return Object(a.jsx)("div",{className:"modal-footer",children:t})}l.defaultProps={children:""};var d=l;function j(e){var t=e.isOpen,n=e.hide,i=e.children,s=Object(r.useRef)(),o=Object(r.useCallback)((function(e){"Escape"===e.key&&t&&n()}),[t,n]);return Object(r.useEffect)((function(){return document.addEventListener("keydown",o),function(){return document.removeEventListener("keydown",o)}}),[o]),Object(c.createPortal)(Object(a.jsx)("div",{children:t&&Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"overlay",ref:s,onClick:function(e){s.current===e.target&&n()},"aria-hidden":"true"}),Object(a.jsx)("div",{className:"modal",children:i})]})}),document.getElementById("modal"))}j.Header=s,j.Body=u,j.Footer=d;t.a=j},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={user:"user",allChallenges:"all-challenges",allProducts:"all-products",availableChallenges:"available-challenges",progressOrCompletedChallenges:"progress-completed-challenges",validationChallenges:"validation-challenges",cart:"cart"}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(13),c=n.n(r),a=n(23),i=n(18),s=n(0),o=n(20),u=n(97),l=n(32),d=n(27),j=n(30),b=n(40);function f(){return(f=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,d.a.get("/auth/".concat(t.userId),Object(b.a)(t));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=Object(s.useState)(Object(l.b)()),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(o.b)();return Object(u.a)(j.a.user,(function(){return function(e){return f.apply(this,arguments)}(n)}),{enabled:!n,onSuccess:function(e){r(e)}}),{user:n,updateUser:function(e){r(e),Object(l.c)(e),c.setQueriesData(j.a.user,e)},clearUser:function(){r(null),Object(l.a)(),c.setQueryData(j.a.user,null)}}}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r="gamify_user";function c(){var e=localStorage.getItem(r);return e?JSON.parse(e):null}function a(e){localStorage.setItem(r,JSON.stringify(e))}function i(){localStorage.removeItem(r)}},33:function(e,t,n){"use strict";var r=n(8),c=n(25),a=(n(0),n(1)),i=["children","variant","color","size"];function s(e){var t=e.children,n=e.variant,s=e.color,o=e.size,u=Object(c.a)(e,i);return Object(a.jsx)("button",Object(r.a)(Object(r.a)({type:"button",className:"btn btn--".concat(o," ").concat(s," ").concat(n)},u),{},{children:t}))}s.defaultProps={variant:"none",color:"standard",size:"md"},t.a=s},4:function(e,t,n){"use strict";n.d(t,"n",(function(){return r})),n.d(t,"l",(function(){return c})),n.d(t,"k",(function(){return a})),n.d(t,"p",(function(){return i})),n.d(t,"q",(function(){return s})),n.d(t,"s",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"o",(function(){return b})),n.d(t,"m",(function(){return f})),n.d(t,"r",(function(){return h})),n.d(t,"t",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return m})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return P}));var r="/overview",c="/challenges",a="/challenges?page=1",i="/shop",s="/shop/:productId",o="/admin/challenges",u="/admin/challenges?page=1",l="/admin/validation",d="/admin/shop",j="/",b="Overview",f="Challenges",h="Shop",p="Switch to Admin",O="Challenges",v="Validation",m="Shop",x="Switch to User",g="/login",P="/register"},40:function(e,t,n){"use strict";function r(e){return{Authorization:"Bearer ".concat(e.token)}}n.d(t,"a",(function(){return r}))},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={available:"available",inProgress:"inProgress",inPending:"inPending",validated:"validated",denied:"denied"}},45:function(e,t,n){"use strict";n(0);var r=n(1);function c(e){var t=e.xp,n=e.credits;return Object(r.jsxs)("div",{className:"rewardInfo",children:[Boolean(t)&&Object(r.jsxs)("div",{className:"rewardInfo__xp",children:[t," XP"]}),Object(r.jsxs)("div",{className:"rewardInfo__credits",children:[n," CREDITS"]})]})}c.defaultProps={credits:0,xp:0},t.a=c},46:function(e,t,n){"use strict";n(0);var r=n(15),c=n(1);function a(e){var t=e.imageSrc,n=e.userName;return t?Object(c.jsx)("img",{className:"avatar-img",src:t,alt:"Profile"}):Object(c.jsx)("div",{className:"avatar-initials",children:Object(r.d)(n)})}a.defaultProps={imageSrc:"",userName:""};var i=a;function s(e){var t=e.avatar,n=e.userName,r=e.jobTitle;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card__avatar",children:Object(c.jsx)(i,{imageSrc:t,userName:n})}),Object(c.jsxs)("div",{className:"card__title",children:[Object(c.jsx)("div",{className:"card__name",children:n}),r&&Object(c.jsx)("div",{className:"card__job",children:r})]})]})}s.defaultProps={avatar:"",userName:"Unknown",jobTitle:"Unknown"};t.a=s},48:function(e,t,n){"use strict";var r=n(23),c=n(0);t.a=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return{isOpen:n,toggle:function(){a(!n)},hideModal:function(){return a(!1)},showModal:function(){return a(!0)}}}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(13),c=n.n(r),a=n(18),i=n(31),s=n(27);function o(e){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/auth/register",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){var e=Object(i.a)().clearUser;return{signUp:o,signIn:l,signOut:function(){e()}}}},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(24),a=n.n(c),i=n(20),s=n(19),o=n(41),u=new(n(101).a)({defaultOptions:{queries:{staleTime:6e5,cacheTime:9e5,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1}}}),l=n(23),d=n(61),j=n(15),b=n(31),f=n(48),h=n(49),p=n(29),O=n(33),v=n(1);var m=function(e){var t=e.routes,n=Object(h.a)().signOut,r=Object(f.a)(),c=r.isOpen,a=r.hideModal,i=r.showModal;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("nav",{className:"navigation",children:t.map((function(e){var t=e.name,n=e.exact,r=e.link;return Object(v.jsx)("li",{className:"navigation__link",children:t.includes("Switch to")?Object(v.jsx)("a",{role:"link",tabIndex:"0",onClick:i,onKeyPress:i,children:t}):Object(v.jsx)(s.c,{exact:n,activeClassName:t.includes("Switch to")?"":"active",to:r,children:t})},"route-".concat(r))}))}),Object(v.jsxs)(p.a,{isOpen:c,hide:a,children:[Object(v.jsx)(p.a.Header,{children:Object(v.jsx)("div",{className:"modal__title",children:Object(v.jsx)("h1",{children:"Confirm"})})}),Object(v.jsx)(p.a.Body,{children:Object(v.jsx)("div",{className:"modal__confirm",children:Object(v.jsx)("h1",{children:"Are you sure you want to log out ? "})})}),Object(v.jsxs)(p.a.Footer,{children:[Object(v.jsx)(O.a,{color:"secondary",variant:"contained-secondary",size:"sm-1",onClick:a,children:"Close"}),Object(v.jsx)(O.a,{color:"fourth",variant:"contained-fourth",size:"md",onClick:n,children:"Log out"})]})]})]})},x=n(46),g=n(45);function P(e){var t=e.userXp,n=Object(j.a)(t),r=n.level,c=n.currentXp,a=n.currentLevelMaxXp;return Object(v.jsxs)("div",{className:"progressCard",children:[Object(v.jsxs)("div",{className:"progressCard__xpContainer",children:[Object(v.jsxs)("div",{className:"level",children:["LEVEL ",r]}),Object(v.jsxs)("div",{className:"xp",children:[c," / ",a," XP"]})]}),Object(v.jsx)("div",{className:"progressCard__progress",children:Object(v.jsx)("div",{className:"done",style:{width:"".concat(c/a*100,"%")}})})]})}P.defaultProps={userXp:0};var N=P;var k=function(e){var t=e.routes,n=e.loggedInUser,r=n.profilePicture,c=n.username,a=n.job,i=n.xp,s=n.credits,o="Admin"===n.role;return Object(v.jsx)("div",{className:"sidebar",children:Object(v.jsxs)("div",{className:"sidebar__content",children:[Object(v.jsxs)("div",{className:o?"sidebar__user-details--admin":"sidebar__user-details",children:[Object(v.jsx)(x.a,{avatar:r,userName:c,jobTitle:a}),!o&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g.a,{xp:i,credits:s}),Object(v.jsx)(N,{userXp:i})]})]}),Object(v.jsx)("div",{className:"sidebar__navigation",children:Object(v.jsx)(m,{routes:t})})]})})},y=n(99),w=n(100),_=function(){return Object(v.jsxs)("svg",{width:"30rem",height:"20rem",viewBox:"0 0 187.3 93.7",preserveAspectRatio:"xMidYMid meet",style:{left:"50%",top:"50%",position:"absolute",transform:"translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)",zIndex:"100"},children:[Object(v.jsx)("path",{stroke:"#FF0000",id:"outline",fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 \t\t\t\tc-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}),Object(v.jsx)("path",{id:"outline-bg",opacity:"0.05",fill:"none",stroke:"#184fc4",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 \t\t\t\tc-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"})]})};var S=function(){var e=Object(y.a)(),t=Object(w.a)();return!(!e&&!t)&&Object(v.jsx)(_,{})},C=n(7),I=n(8),z=n(25),A=["component","user","redirectPath"];function E(e){var t=e.component,n=e.user,r=e.redirectPath,c=Object(z.a)(e,A);return Object(v.jsx)(C.b,Object(I.a)(Object(I.a)({},c),{},{render:function(e){return n?Object(v.jsx)(C.a,{to:r}):n?null:Object(v.jsx)(t,Object(I.a)({},e))}}))}E.defaultProps={user:{}};var M=E,U=["component","redirectPath","roles","user"];function L(e){var t,n,r=e.component,c=(e.redirectPath,e.roles),a=e.user,i=Object(z.a)(e,U);return a?(t=c,n=a.role,t.map((function(e){return e.toLowerCase()})).includes(n.toLowerCase())?Object(v.jsx)(C.b,Object(I.a)(Object(I.a)({},i),{},{render:function(e){return Object(v.jsx)(r,Object(I.a)({user:a},e))}})):Object(v.jsx)(C.b,Object(I.a)(Object(I.a)({},i),{},{render:function(e){return Object(v.jsx)("p",{children:"You need to logged in as ".concat("User"===a.role?"admin":"user"," !")})}}))):Object(v.jsx)(C.a,{to:"/login"})}L.defaultProps={user:{}};var T=L,D=n(4),B=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,125))})),F=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,126))})),R=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,120))})),X=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,122))})),J=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,124))})),q=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,127))})),G=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,128))})),H=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,123))})),Q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,121))})),V=Object(r.lazy)((function(){return n.e(13).then(n.bind(null,129))}));var W=function(e){var t=e.isAdmin,n=e.loggedInUser;return Object(v.jsx)(r.Suspense,{fallback:null,children:Object(v.jsxs)(C.d,{children:[Object(v.jsx)(C.b,{exact:!0,path:"/",component:function(){return Object(v.jsx)(C.a,{to:t?D.c:D.n})}}),Object(v.jsx)(M,{path:D.i,redirectPath:t?D.c:D.n,user:n,component:B}),Object(v.jsx)(M,{path:D.j,redirectPath:t?D.c:D.n,user:n,component:F}),Object(v.jsx)(T,{path:D.n,redirectPath:D.i,component:J,roles:["USER"],user:n}),Object(v.jsx)(T,{path:D.l,redirectPath:D.i,component:q,roles:["USER"],user:n}),Object(v.jsx)(T,{path:D.p,redirectPath:D.i,component:R,roles:["USER"],user:n,exact:!0}),Object(v.jsx)(T,{path:D.q,redirectPath:D.i,component:X,roles:["USER","ADMIN"],user:n,exact:!0}),Object(v.jsx)(T,{path:D.s,redirectPath:D.i,component:H,roles:["ADMIN"],user:n}),Object(v.jsx)(T,{path:D.a,redirectPath:D.i,component:G,roles:["ADMIN"],user:n}),Object(v.jsx)(T,{path:D.e,redirectPath:D.i,component:Q,roles:["ADMIN"],user:n}),Object(v.jsx)(C.b,{path:"*",component:V})]})})};var Z=function(){var e=Object(r.useState)(j.f),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(b.a)().user,i="Admin"===(null===a||void 0===a?void 0:a.role);return Object(r.useEffect)((function(){c(i?j.e:j.f)}),[i]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:a&&"app-wrapper",children:[a&&Object(v.jsx)(k,{routes:n,loggedInUser:a}),Object(v.jsx)("div",{className:a&&"app-wrapper__screens",children:Object(v.jsx)(W,{isAdmin:i,loggedInUser:a})})]}),Object(v.jsx)(S,{}),Object(v.jsx)(d.ReactQueryDevtools,{})]})};n(94),n(95);a.a.render(Object(v.jsx)(i.a,{client:u,children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(Z,{}),Object(v.jsx)(o.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}),document.getElementById("root"))}},[[96,2,3]]]);
//# sourceMappingURL=main.f36622f7.chunk.js.map