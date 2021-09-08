(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[11],{102:function(e,t,a){"use strict";a(0);var r=a(7),n=a.p+"static/media/Empty.7e4b6dae.svg",i=a.p+"static/media/no-image.0b19f0b7.png",s=a(33),c=a(1);function l(e){var t=e.message,a=e.pathRedirect,n=e.image,l=Object(r.g)();return t?Object(c.jsx)("div",{className:"empty-placeholder",children:Object(c.jsxs)("div",{className:"empty-placeholder__content",children:[Object(c.jsx)("img",{className:"empty-placeholder__image",src:n,alt:"placeholder-img"}),Object(c.jsx)("p",{className:"empty-placeholder__message",children:t}),a&&Object(c.jsx)(s.a,{color:"secondary",variant:"outlined-secondary",size:"lg",onClick:function(){l.push(a)},children:"Go to available challenges \u27a1"})]})}):Object(c.jsx)("img",{className:"empty-placeholder__not-available",src:i,alt:"placeholder"})}l.defaultProps={message:"",pathRedirect:"",image:n};t.a=l},103:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r={overviewPage:"Sorry... You have no challenge in progress or completed \ud83d\ude14",challengesPage:"Sorry... You have no challenge available \ud83d\ude14",shopPage:"Sorry... You have no challenge available \ud83d\ude14",shopPageAdmin:"Oups...you have to add some products, for that press add new button",validationPage:"Oups... you have no challenge to validate.",welcome:"Welcome to Gamify",notFound:"Page not found \ud83d\ude13"}},105:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(44),n=a(8),i=a(23),s=a(0),c=function(e,t,a,c){var l=Object(s.useState)(),o=Object(i.a)(l,2),u=o[0],d=o[1],p=Object(s.useState)({}),b=Object(i.a)(p,2),j=b[0],m=b[1],h=Object(s.useState)(!1),f=Object(i.a)(h,2),g=f[0],O=f[1],v=Object(s.useCallback)((function(){d(e)}),[e]);Object(s.useEffect)((function(){!Object.keys(j).length&&g&&(a(u),v(),O(!1))}),[j,u,g,a,v]),Object(s.useEffect)((function(){d(t)}),[t]);var x=Object(s.useCallback)((function(e,t,a){var i=e.target.value,s=e.target,c=s.id;"number"===s.type&&(i=Number(i)),d((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},c,i),t&&Object(r.a)({},t,a))}))}),[]),y=Object(s.useCallback)((function(e){e.preventDefault(),O(!0),m(c(u))}),[u,c]);return{fields:u,handleChange:x,resetForm:v,handleSubmit:y,errors:j}}},106:function(e,t,a){"use strict";var r=a(8),n=(a(0),a(113)),i=a.n(n),s=a(1);function c(e){var t=e.inputId,a=e.inputType,n=e.inputValue,c=e.inputOnChange,l=e.inputLabel,o=e.error,u=e.isRequired,d=e.className;return Object(s.jsxs)("div",{className:"form-group__container",children:[Object(s.jsx)("div",{className:"form-group",children:"file"===a?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64,a=e.file;return c("profilePicture",Object(r.a)(Object(r.a)({},n),{},{url:t,file:a.name}))}}),Object(s.jsx)("label",{className:"label-input-file",htmlFor:t,children:Object(s.jsx)("span",{children:l})}),Object(s.jsx)("span",{className:"label-input-file__file",children:n.file})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{className:"form-group__input ".concat(d),id:t,type:a,value:n,onChange:c,required:u,placeholder:"placeholder"}),Object(s.jsx)("label",{className:"form-group__label",htmlFor:t,children:Object(s.jsx)("span",{className:"content",children:l})})]})}),o&&Object(s.jsx)("span",{className:"form-group__error",children:o})]})}c.defaultProps={error:"",inputValue:"",className:"",isRequired:!0},t.a=c},114:function(e,t,a){"use strict";t.a=a.p+"static/media/logo.0e79731d.png"},115:function(e,t,a){"use strict";function r(e){return{}}a.d(t,"a",(function(){return r}))},126:function(e,t,a){"use strict";a.r(t);a(0);var r=a(106),n=a(33),i=a(1),s={target:{id:"profilePicture"}};function c(e){var t=e.handleChange,a=e.handleSubmit,c=e.fields,l=e.errors;return Object(i.jsx)("form",{className:"register-form",onSubmit:a,children:Object(i.jsx)("fieldset",{className:"fieldset","aria-busy":"false",children:Object(i.jsxs)("div",{className:"form__container",children:[Object(i.jsx)("h1",{style:{textAlign:"center",marginBottom:"2rem"},children:"Register"}),Object(i.jsx)(r.a,{inputLabel:"Username",inputOnChange:t,inputValue:null===c||void 0===c?void 0:c.username,inputType:"text",inputId:"username",error:l.username}),Object(i.jsx)(r.a,{inputLabel:"Email",inputOnChange:t,inputValue:null===c||void 0===c?void 0:c.email,inputType:"email",inputId:"email",error:l.email}),Object(i.jsx)(r.a,{inputLabel:"Password",inputOnChange:t,inputValue:null===c||void 0===c?void 0:c.password,inputType:"password",inputId:"password",error:l.password}),Object(i.jsx)(r.a,{inputLabel:"Job",inputOnChange:t,inputValue:null===c||void 0===c?void 0:c.job,inputType:"text",inputId:"job",error:l.job}),Object(i.jsx)(r.a,{inputLabel:"Import profile picture",inputOnChange:function(e,a){t(s,e,a)},inputValue:null===c||void 0===c?void 0:c.profilePicture,inputType:"file",inputId:"profilePicture",error:l.job}),Object(i.jsx)("div",{children:Object(i.jsx)(n.a,{variant:"contained-secondary",color:"secondary",size:"lg",type:"submit",children:"Register"})})]})})})}c.defaultProps={errors:{},fields:{}};var l=c,o=a(105),u=a(102),d=a(114),p=a(115),b=a(111),j=a(41),m=a(49),h=function(){var e=Object(m.a)().signUp;return Object(b.a)((function(t){return e(t)}),{onSuccess:function(){j.b.success("Successful registration \u2705\u2705")},onError:function(e){j.b.error(e.response.data.message)}})},f=a(103),g={username:"",email:"",password:"",profilePicture:{},job:""};t.default=function(){var e=h().mutate,t=Object(o.a)(g,g,e,p.a),a=t.fields,r=t.handleChange,n=t.handleSubmit,s=t.errors;return Object(i.jsxs)("div",{className:"register-page",children:[Object(i.jsx)("div",{className:"register-page__left",children:Object(i.jsx)(l,{fields:a,errors:s,handleChange:r,handleSubmit:n})}),Object(i.jsx)("div",{className:"register-page__right",children:Object(i.jsx)(u.a,{message:f.a.welcome,image:d.a})})]})}}}]);
//# sourceMappingURL=11.8cf44dbb.chunk.js.map