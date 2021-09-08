(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[4],{102:function(e,t,n){"use strict";n(0);var a=n(7),s=n.p+"static/media/Empty.7e4b6dae.svg",r=n.p+"static/media/no-image.0b19f0b7.png",c=n(33),i=n(1);function o(e){var t=e.message,n=e.pathRedirect,s=e.image,o=Object(a.g)();return t?Object(i.jsx)("div",{className:"empty-placeholder",children:Object(i.jsxs)("div",{className:"empty-placeholder__content",children:[Object(i.jsx)("img",{className:"empty-placeholder__image",src:s,alt:"placeholder-img"}),Object(i.jsx)("p",{className:"empty-placeholder__message",children:t}),n&&Object(i.jsx)(c.a,{color:"secondary",variant:"outlined-secondary",size:"lg",onClick:function(){o.push(n)},children:"Go to available challenges \u27a1"})]})}):Object(i.jsx)("img",{className:"empty-placeholder__not-available",src:r,alt:"placeholder"})}o.defaultProps={message:"",pathRedirect:"",image:s};t.a=o},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={overviewPage:"Sorry... You have no challenge in progress or completed \ud83d\ude14",challengesPage:"Sorry... You have no challenge available \ud83d\ude14",shopPage:"Sorry... You have no challenge available \ud83d\ude14",shopPageAdmin:"Oups...you have to add some products, for that press add new button",validationPage:"Oups... you have no challenge to validate.",welcome:"Welcome to Gamify",notFound:"Page not found \ud83d\ude13"}},104:function(e,t,n){"use strict";n(0);var a=n(28),s=n.n(a),r=n(15),c=n(33),i=n(1);function o(e){var t=e.status,n=e.onValidate,a=e.onUpdateItem;return"inPending"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{color:"fourth",variant:"outlined-fourth",size:"sm",onClick:function(){return n(r.g.denied)},children:"Deny"}),Object(i.jsx)(c.a,{color:"tertiary",variant:"contained-tertiary",size:"md",onClick:function(){return n(r.g.validated)},children:"Validate"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{color:"secondary",variant:"outlined-secondary",size:"sm",onClick:function(){return a("DELETE")},children:"Delete"}),Object(i.jsx)(c.a,{color:"secondary",variant:"contained-secondary",size:"md",onClick:function(){return a("EDIT")},children:"Edit"})]})}o.defaultProps={onValidate:s.a.func,onUpdateItem:s.a.func,status:""},t.a=o},107:function(e,t,n){"use strict";n(0);var a=n(1);function s(e){var t=e.title,n=e.isScrollable,s=e.hasData,r=e.children;return Boolean(s)&&Object(a.jsxs)("section",{className:"challenges-section",children:[Object(a.jsx)("h2",{className:"challenges-section__title",children:t}),Object(a.jsx)("div",{className:"challenges-section__items challenges-section__items--".concat(n&&"scrollable"),children:r})]})}s.defaultProps={isScrollable:!1},t.a=s},108:function(e,t,n){"use strict";n(0);var a=n(15),s=n(16),r=n(104),c=n(33),i=n(1);var o=function(e){var t=e.status,n=e.onClick;switch(t){case a.g.inProgress:return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{color:"secondary",variant:"outlined-secondary",size:"sm",onClick:function(){return n(a.g.available)},children:"Quit"}),Object(i.jsx)(c.a,{color:"secondary",variant:"contained-secondary",size:"md",onClick:function(){return n(a.g.inPending)},children:"Complete"})]});case a.g.inPending:return Object(i.jsx)(c.a,{size:"lg",disabled:!0,children:"Pending ..."});case a.g.validated:return Object(i.jsx)(c.a,{color:"tertiary",size:"lg",disabled:!0,children:"Validated"});case a.g.denied:return Object(i.jsx)(c.a,{color:"fourth",size:"lg",disabled:!0,children:"Denied"});default:return Object(i.jsx)(c.a,{color:"secondary",variant:"contained-secondary",size:"lg",onClick:function(){return n(a.g.inProgress)},children:"Enroll"})}},l=n(45),u=n(46);function d(e){var t=e.isAdmin,n=e.challenge,c=e.onChangeStatus,d=e.onUpdateChallenge,A=n.status;return Object(i.jsx)("div",{className:"challenge-card challenge-card--".concat(Object(a.b)(A)," challenge-card--").concat(t&&A===s.a.inPending&&"validation"),children:Object(i.jsxs)("div",{className:"challenge-card__content challenge-card__content--".concat(t&&A===s.a.inPending&&"extend"),children:[t&&A===s.a.inPending&&Object(i.jsx)("div",{children:Object(i.jsx)(u.a,{userName:n.userName,jobTitle:n.jobTitle,image:n.profilePicture})}),Object(i.jsxs)("div",{className:"challenge-card__top",children:[Object(i.jsx)("div",{className:"challenge-card__title",children:n.title}),Object(i.jsx)(l.a,{xp:n.xp,credits:n.credits})]}),Object(i.jsx)("div",{className:"challenge-card__middle",children:Object(i.jsx)("p",{className:"challenge-card__description",children:n.description})}),Object(i.jsx)("div",{className:"challenge-card__bottom",children:t?Object(i.jsx)(r.a,{status:A,onValidate:c,onUpdateItem:d}):Object(i.jsx)(o,{status:A,onClick:c})})]})})}d.defaultProps={onChangeStatus:function(){},onUpdateChallenge:function(){},isAdmin:!1};t.a=d},109:function(e,t,n){"use strict";n(0);var a=n(1),s=function(e){var t=e.title,n=e.isScrollable,s=e.children,r=e.hasData;return Boolean(r)&&Object(a.jsxs)("section",{className:"shop-section",children:[Object(a.jsx)("h2",{className:"shop-section__title",children:t}),Object(a.jsx)("div",{className:"shop-section__items shop-section__items--".concat(n&&"scrollable"),children:s})]})};s.defaultProps={isScrollable:!1},t.a=s},110:function(e,t,n){"use strict";var a=n(23),s=(n(0),n(7)),r=n(1),c=function(e){var t=e.quantity;return Object(r.jsx)("span",{className:"badge-overlay strip",children:"".concat(t," item").concat(t>1?"s":"")})},i=n(33),o=function(e){var t=e.onClick,n=e.credits;return e.quantity?Object(r.jsx)(i.a,{color:"secondary",size:"lg",variant:"outlined-fourth",onClick:t,children:"Remove"}):Object(r.jsx)(i.a,{color:"secondary",size:"lg",variant:"contained-secondary",onClick:t,children:"Buy - ".concat(n," Credits")})};o.defaultProps={quantity:0};var l=o,u=n(104),d=function(e){var t=e.shopItem,n=e.isAdmin,i=e.onAddToShoppingCart,o=e.onRemoveFromShoppingCart,d=e.onUpdateShopItem,A=Object(s.g)(),h=t||{},g=h.title,q=h.description,C=h.credits,p=h.quantity,b=h.id,v=Object(a.a)(h.images,1)[0],j=(v=void 0===v?{}:v).imageUrl;return Object(r.jsx)("div",{className:"shop-card",children:Object(r.jsxs)("div",{className:"shop-card__content ",children:[Object(r.jsx)("div",{className:"shop-card__top",children:Object(r.jsx)("div",{className:"shop-card__img",children:Object(r.jsx)("img",{src:j||"data:image/png;base64,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",alt:g,onClick:function(){A.push("/shop/".concat(b))},"aria-hidden":"true"})})}),Object(r.jsxs)("div",{className:"shop-card__middle",children:[Object(r.jsx)("p",{className:"shop-card__title",children:g}),Object(r.jsx)("p",{className:"shop-card__description",children:q})]}),p&&Object(r.jsx)(c,{quantity:p}),Object(r.jsx)("div",{className:"shop-card__bottom",children:n?Object(r.jsx)(u.a,{onClick:d,onUpdateItem:d}):Object(r.jsx)(l,{onClick:p?o:i,credits:C,quantity:p})})]})})};d.defaultProps={isAdmin:!1,onAddToShoppingCart:function(){},onUpdateShopItem:function(){},onRemoveFromShoppingCart:function(){}};t.a=d},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var a=n(3),s=n(0),r=n.n(s),c=n(5),i=n(2),o=n(6),l=n(42),u=function(e){function t(t,n){var a;return(a=e.call(this)||this).client=t,a.setOptions(n),a.bindMethods(),a.updateResult(),a}Object(o.a)(t,e);var n=t.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},n.onUnsubscribe=function(){var e;this.listeners.length||(null==(e=this.currentMutation)||e.removeObserver(this))},n.onMutationUpdate=function(e){this.updateResult();var t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(a.a)({},this.options,{variables:"undefined"!==typeof e?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:Object(l.b)();this.currentResult=Object(a.a)({},e,{isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset})},n.notify=function(e){var t=this;c.a.batch((function(){t.mutateOptions&&(e.onSuccess?(null==t.mutateOptions.onSuccess||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):e.onError&&(null==t.mutateOptions.onError||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)}))}))},t}(n(14).a),d=n(20);function A(e,t,n){var s=r.a.useRef(!1),o=r.a.useState(0)[1],l=Object(i.k)(e,t,n),A=Object(d.b)(),h=r.a.useRef();h.current?h.current.setOptions(l):h.current=new u(A,l);var g=h.current.getCurrentResult();r.a.useEffect((function(){s.current=!0;var e=h.current.subscribe(c.a.batchCalls((function(){s.current&&o((function(e){return e+1}))})));return function(){s.current=!1,e()}}),[]);var q=r.a.useCallback((function(e,t){h.current.mutate(e,t).catch(i.i)}),[]);if(g.error&&h.current.options.useErrorBoundary)throw g.error;return Object(a.a)({},g,{mutate:q,mutateAsync:g.mutate})}},112:function(e,t,n){"use strict";var a=n(13),s=n.n(a),r=n(18),c=n(20),i=n(111),o=n(41),l=n(40),u=n(27),d=n(30),A=n(43);t.a=function(e){var t=Object(c.b)();function n(){return(n=Object(r.a)(s.a.mark((function t(n){var a,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.challengeId,r=n.userId,c=n.newStatus,t.prev=1,t.next=4,u.a.put("/api/user-challenges/".concat(a,"/").concat(r,"?newStatus=").concat(c),null,Object(l.a)(e));case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}return Object(i.a)((function(e){return n.apply(this,arguments)}),{onSuccess:function(e,n){var a=e.message;!function(e,t){switch(e){case A.a.inProgress:t.invalidateQueries(d.a.availableChallenges),t.invalidateQueries(d.a.progressOrCompletedChallenges,{refetchInactive:!0});break;case A.a.available:t.invalidateQueries(d.a.progressOrCompletedChallenges),t.invalidateQueries(d.a.availableChallenges,{refetchInactive:!0});break;case A.a.inPending:t.invalidateQueries(d.a.progressOrCompletedChallenges),t.invalidateQueries(d.a.validationChallenges,{refetchInactive:!0});break;case A.a.validated:case A.a.denied:t.invalidateQueries(d.a.validationChallenges),t.invalidateQueries(d.a.progressOrCompletedChallenges,{refetchInactive:!0})}}(n.newStatus,t),o.b.success(a)},onError:function(e){o.b.error(e.response.data.message)}})}},124:function(e,t,n){"use strict";n.r(t);n(0);var a=n(107),s=n(102),r=n(112),c=n(4),i=n(13),o=n.n(i),l=n(18),u=n(97),d=n(40),A=n(27),h=n(30);var g=n(108);var q=n(110),C=n(109),p=n(8),b=n(20),v=n(111),j=n(41),O=n(32),m=n(31),I=function(e){var t=Object(b.b)(),n=Object(m.a)().updateUser,a=Object(O.b)().token;function s(){return(s=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.a.delete("/api/cart/".concat(n),Object(d.a)(e));case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}return Object(v.a)((function(e){return s.apply(this,arguments)}),{onSuccess:function(e){j.b.success(e.message),t.invalidateQueries(h.a.cart),n(Object(p.a)(Object(p.a)({},e.newUserUpdated),{},{token:a}))},onError:function(e){j.b.error(e.response.data.message)}})},E=n(103),f=n(1);t.default=function(e){var t=e.user,n=Object(r.a)(t).mutate,i=function(e){return function(t){n({challengeId:e.id,userId:e.userId,newStatus:t})}},p=I(t).mutate,b=function(e){function t(){return(t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("/api/user-challenges/progress-completed",Object(d.a)(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.a)(h.a.progressOrCompletedChallenges,(function(){return t.apply(this,arguments)}))}(t),v=b.data,j=b.isLoading,O=b.isError,m=b.error,B=function(e){function t(){return(t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("/api/cart",Object(d.a)(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.a)(h.a.cart,(function(){return t.apply(this,arguments)}))}(t),w=B.data,x=B.isLoading;return j||x?null:O?Object(f.jsx)(s.a,{message:m.response.data.message}):v.inProgressOrPendingChallenges.length||v.completedChallenges.length?Object(f.jsxs)("div",{className:"home-page",children:[Object(f.jsx)(a.a,{title:"In progress Challenges",hasData:v.inProgressOrPendingChallenges.length,isScrollable:!0,children:v.inProgressOrPendingChallenges.map((function(e){return Object(f.jsx)(g.a,{challenge:e,onChangeStatus:i(e)},e.id)}))}),Object(f.jsx)(a.a,{title:"Completed Challenges",hasData:v.completedChallenges.length,isScrollable:!0,children:v.completedChallenges.map((function(e){return Object(f.jsx)(g.a,{challenge:e,onChangeStatus:i(e)},e.id)}))}),Object(f.jsx)(C.a,{title:"Purchased Products",hasData:w.shoppingCart.length,children:w.shoppingCart.map((function(e){return Object(f.jsx)(q.a,{shopItem:e,isAdmin:"Admin"===t.role,onRemoveFromShoppingCart:function(){return p(e.id)}},e.title)}))})]}):Object(f.jsx)(s.a,{message:E.a.overviewPage,pathRedirect:c.k})}}}]);
//# sourceMappingURL=4.fad60dd8.chunk.js.map