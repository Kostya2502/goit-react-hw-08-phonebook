(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[1],{117:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n(4),s=n(52),i=n(0),o=n(3),u=n(16),b=n(50),p=n.n(b),j=n(51),O=n(53),l=n.n(O),h=n(30),v={email:"",password:""};t.default=function(){var e=Object(o.g)(),t=Object(u.c)(),n=Object(i.useState)(Object(r.a)({},v)),b=Object(s.a)(n,2),O=b[0],f=b[1],m=function(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(c.a)({},n,a))}))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:function(n){var a;n.preventDefault(),"/signup"===e.pathname?t((a=O,function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(h.b)()),e.prev=1,e.next=4,l.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUS8smFAbCvvW8Hom35fkANWOmJaigTa4",Object(r.a)(Object(r.a)({},a),{},{returnSecureToken:!0}));case 4:n=e.sent,t(Object(h.e)(n.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(Object(h.a)(e.t0));case 11:return e.prev=11,t(Object(h.b)()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())):t(function(e){return function(){var t=Object(j.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(h.b)()),t.prev=1,t.next=4,l.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUS8smFAbCvvW8Hom35fkANWOmJaigTa4",Object(r.a)(Object(r.a)({},e),{},{returnSecureToken:!0}));case 4:a=t.sent,n(Object(h.c)(a.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(Object(h.a)(t.t0));case 11:return t.prev=11,n(Object(h.b)()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()}(O))},children:[Object(a.jsxs)("label",{children:[" Email",Object(a.jsx)("input",{type:"text",value:O.email,name:"email",onChange:m})]}),Object(a.jsxs)("label",{children:[" Password",Object(a.jsx)("input",{type:"text",value:O.password,name:"password",onChange:m})]}),Object(a.jsx)("button",{type:"submit",children:"/signup"===e.pathname?"SignUp":"SignIn"})]})})}}}]);
//# sourceMappingURL=1.202fb085.chunk.js.map