(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=n(3),o=(n(12),n(13),n(1)),i=n.n(o),l=n(2),m=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-api.herokuapp.com").concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts");case 2:return n=e.sent,e.abrupt("return",t?n.filter((function(e){return e.userId===t})):n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(15),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),b=(n(16),function(e){var t=e.selectedUserId,n=e.choosePost,c=e.selectedPostId,s=Object(a.useState)([]),o=Object(u.a)(s,2),m=o[0],f=o[1],b=Object(a.useState)(!0),v=Object(u.a)(b,2),h=v[0],E=v[1];Object(a.useEffect)((function(){O()}),[t]);var O=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,f(n),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),h?r.a.createElement(d,null):r.a.createElement("ul",null,m.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]:")),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)}},c===e.id?"Close":"Open"))}))))}),v=n(6),h=n.n(v),E=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/comments");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.postId===t&&e.body})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(c={postId:t,name:n,email:a,body:r},m("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)})));case 1:case"end":return e.stop()}var c}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),j=function(e){return t="/comments/".concat(e),m(t,{method:"DELETE"});var t},_=(n(17),function(e){var t=e.postId,n=e.updateComments,c=Object(a.useState)(""),s=Object(u.a)(c,2),o=s[0],m=s[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),d=f[0],b=f[1],v=Object(a.useState)(""),h=Object(u.a)(v,2),E=h[0],j=h[1],_=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&d.includes("@")&&E){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,O(t,o,d,E);case 5:n(),j("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"NewCommentForm",onSubmit:_},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:E,onChange:function(e){return j(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),w=(n(18),function(e){var t=e.comments,n=e.updateComments,a=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("ul",{className:"PostDetails__list"},t.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return a(e.id)}},"X"),r.a.createElement("p",null,e.body))})))}),y=function(e){var t=e.postId,n=Object(a.useState)({}),c=Object(u.a)(n,2),s=c[0],o=c[1],m=Object(a.useState)([]),p=Object(u.a)(m,2),d=p[0],b=p[1],v=Object(a.useState)(!1),O=Object(u.a)(v,2),j=O[0],y=O[1];Object(a.useEffect)((function(){N(),x()}),[t]);var N=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:n=e.sent,b(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},d.length?r.a.createElement("button",{type:"button",className:h()({button:!0,"PostDetails__remove-button":j}),onClick:function(){return y(!j)}},"".concat(j?"Hide":"Show"," ").concat(d.length," comments")):r.a.createElement("p",null,"No comments here yet"),j&&r.a.createElement(w,{comments:d,updateComments:x})),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(_,{postId:t,updateComments:x}))))},N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/users");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.selectedUserId,n=e.handleUserSelect,c=Object(a.useState)([]),s=Object(u.a)(c,2),o=s[0],m=s[1];Object(a.useEffect)((function(){p()}),[]);var p=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,m(t.slice(0,10));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:t,onChange:n},r.a.createElement("option",{value:"0"},"All users"),o.map((function(e,t){return r.a.createElement("option",{value:t+1,key:e.id},e.name)}))))},k=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(u.a)(s,2),i=o[0],l=o[1],m=Object(a.useCallback)((function(e){c(+e.target.value)}),[]),p=Object(a.useCallback)((function(e){l(e!==i?e:0)}),[]);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement(x,{handleUserSelect:m,selectedUserId:n})),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{selectedUserId:n,choosePost:p,selectedPostId:i})),r.a.createElement("div",{className:"App__content"},0===i?r.a.createElement("h4",null,"Choose post first, to see details"):r.a.createElement(y,{postId:i}))))};s.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.8aa00f80.chunk.js.map