(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[9],{102:function(e,t,n){"use strict";n(0);var a=n(7),r=n.p+"static/media/Empty.7e4b6dae.svg",s=n.p+"static/media/no-image.0b19f0b7.png",i=n(33),c=n(1);function l(e){var t=e.message,n=e.pathRedirect,r=e.image,l=Object(a.g)();return t?Object(c.jsx)("div",{className:"empty-placeholder",children:Object(c.jsxs)("div",{className:"empty-placeholder__content",children:[Object(c.jsx)("img",{className:"empty-placeholder__image",src:r,alt:"placeholder-img"}),Object(c.jsx)("p",{className:"empty-placeholder__message",children:t}),n&&Object(c.jsx)(i.a,{color:"secondary",variant:"outlined-secondary",size:"lg",onClick:function(){l.push(n)},children:"Go to available challenges \u27a1"})]})}):Object(c.jsx)("img",{className:"empty-placeholder__not-available",src:s,alt:"placeholder"})}l.defaultProps={message:"",pathRedirect:"",image:r};t.a=l},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={overviewPage:"Sorry... You have no challenge in progress or completed \ud83d\ude14",challengesPage:"Sorry... You have no challenge available \ud83d\ude14",shopPage:"Sorry... You have no challenge available \ud83d\ude14",shopPageAdmin:"Oups...you have to add some products, for that press add new button",validationPage:"Oups... you have no challenge to validate.",welcome:"Welcome to Gamify",notFound:"Page not found \ud83d\ude13"}},104:function(e,t,n){"use strict";n(0);var a=n(28),r=n.n(a),s=n(15),i=n(33),c=n(1);function l(e){var t=e.status,n=e.onValidate,a=e.onUpdateItem;return"inPending"===t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a,{color:"fourth",variant:"outlined-fourth",size:"sm",onClick:function(){return n(s.g.denied)},children:"Deny"}),Object(c.jsx)(i.a,{color:"tertiary",variant:"contained-tertiary",size:"md",onClick:function(){return n(s.g.validated)},children:"Validate"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a,{color:"secondary",variant:"outlined-secondary",size:"sm",onClick:function(){return a("DELETE")},children:"Delete"}),Object(c.jsx)(i.a,{color:"secondary",variant:"contained-secondary",size:"md",onClick:function(){return a("EDIT")},children:"Edit"})]})}l.defaultProps={onValidate:r.a.func,onUpdateItem:r.a.func,status:""},t.a=l},107:function(e,t,n){"use strict";n(0);var a=n(1);function r(e){var t=e.title,n=e.isScrollable,r=e.hasData,s=e.children;return Boolean(r)&&Object(a.jsxs)("section",{className:"challenges-section",children:[Object(a.jsx)("h2",{className:"challenges-section__title",children:t}),Object(a.jsx)("div",{className:"challenges-section__items challenges-section__items--".concat(n&&"scrollable"),children:s})]})}r.defaultProps={isScrollable:!1},t.a=r},108:function(e,t,n){"use strict";n(0);var a=n(15),r=n(16),s=n(104),i=n(33),c=n(1);var l=function(e){var t=e.status,n=e.onClick;switch(t){case a.g.inProgress:return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a,{color:"secondary",variant:"outlined-secondary",size:"sm",onClick:function(){return n(a.g.available)},children:"Quit"}),Object(c.jsx)(i.a,{color:"secondary",variant:"contained-secondary",size:"md",onClick:function(){return n(a.g.inPending)},children:"Complete"})]});case a.g.inPending:return Object(c.jsx)(i.a,{size:"lg",disabled:!0,children:"Pending ..."});case a.g.validated:return Object(c.jsx)(i.a,{color:"tertiary",size:"lg",disabled:!0,children:"Validated"});case a.g.denied:return Object(c.jsx)(i.a,{color:"fourth",size:"lg",disabled:!0,children:"Denied"});default:return Object(c.jsx)(i.a,{color:"secondary",variant:"contained-secondary",size:"lg",onClick:function(){return n(a.g.inProgress)},children:"Enroll"})}},o=n(45),u=n(46);function d(e){var t=e.isAdmin,n=e.challenge,i=e.onChangeStatus,d=e.onUpdateChallenge,h=n.status;return Object(c.jsx)("div",{className:"challenge-card challenge-card--".concat(Object(a.b)(h)," challenge-card--").concat(t&&h===r.a.inPending&&"validation"),children:Object(c.jsxs)("div",{className:"challenge-card__content challenge-card__content--".concat(t&&h===r.a.inPending&&"extend"),children:[t&&h===r.a.inPending&&Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{userName:n.userName,jobTitle:n.jobTitle,image:n.profilePicture})}),Object(c.jsxs)("div",{className:"challenge-card__top",children:[Object(c.jsx)("div",{className:"challenge-card__title",children:n.title}),Object(c.jsx)(o.a,{xp:n.xp,credits:n.credits})]}),Object(c.jsx)("div",{className:"challenge-card__middle",children:Object(c.jsx)("p",{className:"challenge-card__description",children:n.description})}),Object(c.jsx)("div",{className:"challenge-card__bottom",children:t?Object(c.jsx)(s.a,{status:h,onValidate:i,onUpdateItem:d}):Object(c.jsx)(l,{status:h,onClick:i})})]})})}d.defaultProps={onChangeStatus:function(){},onUpdateChallenge:function(){},isAdmin:!1};t.a=d},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(3),r=n(0),s=n.n(r),i=n(5),c=n(2),l=n(6),o=n(42),u=function(e){function t(t,n){var a;return(a=e.call(this)||this).client=t,a.setOptions(n),a.bindMethods(),a.updateResult(),a}Object(l.a)(t,e);var n=t.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},n.onUnsubscribe=function(){var e;this.listeners.length||(null==(e=this.currentMutation)||e.removeObserver(this))},n.onMutationUpdate=function(e){this.updateResult();var t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(a.a)({},this.options,{variables:"undefined"!==typeof e?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:Object(o.b)();this.currentResult=Object(a.a)({},e,{isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset})},n.notify=function(e){var t=this;i.a.batch((function(){t.mutateOptions&&(e.onSuccess?(null==t.mutateOptions.onSuccess||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):e.onError&&(null==t.mutateOptions.onError||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)}))}))},t}(n(14).a),d=n(20);function h(e,t,n){var r=s.a.useRef(!1),l=s.a.useState(0)[1],o=Object(c.k)(e,t,n),h=Object(d.b)(),p=s.a.useRef();p.current?p.current.setOptions(o):p.current=new u(h,o);var b=p.current.getCurrentResult();s.a.useEffect((function(){r.current=!0;var e=p.current.subscribe(i.a.batchCalls((function(){r.current&&l((function(e){return e+1}))})));return function(){r.current=!1,e()}}),[]);var g=s.a.useCallback((function(e,t){p.current.mutate(e,t).catch(c.i)}),[]);if(b.error&&p.current.options.useErrorBoundary)throw b.error;return Object(a.a)({},b,{mutate:g,mutateAsync:b.mutate})}},112:function(e,t,n){"use strict";var a=n(13),r=n.n(a),s=n(18),i=n(20),c=n(111),l=n(41),o=n(40),u=n(27),d=n(30),h=n(43);t.a=function(e){var t=Object(i.b)();function n(){return(n=Object(s.a)(r.a.mark((function t(n){var a,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.challengeId,s=n.userId,i=n.newStatus,t.prev=1,t.next=4,u.a.put("/api/user-challenges/".concat(a,"/").concat(s,"?newStatus=").concat(i),null,Object(o.a)(e));case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}return Object(c.a)((function(e){return n.apply(this,arguments)}),{onSuccess:function(e,n){var a=e.message;!function(e,t){switch(e){case h.a.inProgress:t.invalidateQueries(d.a.availableChallenges),t.invalidateQueries(d.a.progressOrCompletedChallenges,{refetchInactive:!0});break;case h.a.available:t.invalidateQueries(d.a.progressOrCompletedChallenges),t.invalidateQueries(d.a.availableChallenges,{refetchInactive:!0});break;case h.a.inPending:t.invalidateQueries(d.a.progressOrCompletedChallenges),t.invalidateQueries(d.a.validationChallenges,{refetchInactive:!0});break;case h.a.validated:case h.a.denied:t.invalidateQueries(d.a.validationChallenges),t.invalidateQueries(d.a.progressOrCompletedChallenges,{refetchInactive:!0})}}(n.newStatus,t),l.b.success(a)},onError:function(e){l.b.error(e.response.data.message)}})}},128:function(e,t,n){"use strict";n.r(t);var a=n(107),r=n(102),s=n(13),i=n.n(s),c=n(18),l=n(97),o=n(40),u=n(27),d=n(30);var h=n(112),p=n(108),b=n(103),g=n(1);t.default=function(e){var t=e.user,n=function(e){function t(){return(t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/api/user-challenges/validation",Object(o.a)(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.a)(d.a.validationChallenges,(function(){return t.apply(this,arguments)}))}(t),s=n.data,v=n.isLoading,f=Object(h.a)(t).mutate,j=function(e){return function(t){f({challengeId:e.id,userId:e.userId,newStatus:t})}};return v?null:s.length?Object(g.jsx)(a.a,{title:"Challenges to be validated",hasData:s.length,children:s.map((function(e){return Object(g.jsx)(p.a,{challenge:e,isAdmin:!0,onChangeStatus:j(e)},e.id)}))}):Object(g.jsx)(r.a,{message:b.a.validationPage})}}}]);
//# sourceMappingURL=9.7920932a.chunk.js.map