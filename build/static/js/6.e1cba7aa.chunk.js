(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[6],{111:function(e,t,n){e.exports={form:"ContactForm_form__2Kinz",label:"ContactForm_label__2Fdr7",input:"ContactForm_input__1Ahv4",button:"ContactForm_button__sioAz",warn:"ContactForm_warn__1YVhA"}},133:function(e,t,n){e.exports={item:"ContactList_item__2R1V7",button:"ContactList_button__20C9Q",enter:"ContactList_enter__vJt0x",enterActive:"ContactList_enterActive__3Hn21",exit:"ContactList_exit__1S6zz",exitActive:"ContactList_exitActive__2wNcC"}},134:function(e,t,n){},136:function(e,t,n){e.exports={enter:"Filter_enter__22M92",enterActive:"Filter_enterActive__3-LQS",exit:"Filter_exit__1dVP_",exitActive:"Filter_exitActive__LEmnx"}},156:function(e,t,n){e.exports={appear:"App_appear__1v9PW",appearActive:"App_appearActive__1jGBG"}},163:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(28),i=n(164),o=n(95),s=n(111),u=n.n(s),b=n(158),l=n(35),j=function(e){return e.contacts.items},p=function(e){return e.contacts.filter},m=function(e){return e.contacts.loading},h=Object(l.a)(j,p,(function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))})),d=n(92),O=n.n(d),f=n(93),x=n(7),_=n(97),v=n.n(_),g=n(12),w=n(86),C=n(131),y=n.n(C),k=n(162),A=Object(k.a)((function(e){return{button:{margin:e.spacing(1)}}}));function F(){var e=Object(b.a)(),t=e.register,n=e.handleSubmit,i=e.errors,s=Object(c.useState)(""),l=Object(o.a)(s,2),p=l[0],m=l[1],h=Object(c.useState)(""),d=Object(o.a)(h,2),O=d[0],f=d[1],_=Object(r.c)(),C=Object(r.d)(j),k=A(),F=function(){m(""),f("")},L=function(e){e.preventDefault();var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":m(a);break;case"number":f(a)}};return Object(a.jsxs)("form",{onSubmit:n((function(){var e,t;if(C.map((function(e){return e.name.toLocaleLowerCase()})).includes(p.toLocaleLowerCase()))return F(),alert("".concat(p," is already in contacts!"));_((e=p,t=O,function(n,a){var c=a().auth.idToken,r={name:e,number:t};n(Object(g.b)()),v.a.post("".concat("https://hw7-phonebook-default-rtdb.firebaseio.com/","/contacts.json?auth=").concat(c),r).then((function(e){var t=e.data;return n(Object(g.c)(Object(x.a)(Object(x.a)({},r),{},{id:t.name})))})).catch((function(e){return n(Object(g.a)(e))}))})),F()})),className:u.a.form,children:[Object(a.jsxs)("label",{className:u.a.label,children:["Name:",Object(a.jsx)("input",{type:"text",name:"name",value:p,placeholder:"enter name",onChange:L,className:u.a.input,ref:t({required:!0})})]}),i.name&&"required"===i.name.type&&Object(a.jsx)("p",{className:u.a.warn,children:"This is required "}),Object(a.jsxs)("label",{className:u.a.label,children:["Number:",Object(a.jsx)("input",{type:"tel",name:"number",value:O,placeholder:"enter number",ref:t({required:!0,pattern:/^[0-9]+$/gm}),onChange:L,className:u.a.input})]}),i.number&&"required"===i.number.type&&Object(a.jsx)("p",{className:u.a.warn,children:"This is required "}),i.number&&"pattern"===i.number.type&&Object(a.jsx)("p",{className:u.a.warn,children:"There must be numbers"}),Object(a.jsx)(w.a,{variant:"contained",color:"primary",size:"large",className:k.button,startIcon:Object(a.jsx)(y.a,{}),type:"submit",children:"Save"})]})}var L=n(87),N=n(133),S=n.n(N),T=(n(134),n(135)),q=n.n(T),z=Object(k.a)((function(e){return{button:{margin:e.spacing(1)}}})),E=function(){var e=z(),t=Object(r.c)(),n=Object(r.d)(h);Object(c.useEffect)((function(){t(function(){var e=Object(f.a)(O.a.mark((function e(t,n){var a,c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(g.i)()),e.prev=1,e.next=4,v.a.get("".concat("https://hw7-phonebook-default-rtdb.firebaseio.com/","/contacts.json"));case 4:a=e.sent,c=a.data,r=Object.keys(c).map((function(e){return Object(x.a)(Object(x.a)({},c[e]),{},{id:e})})),t(Object(g.j)(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(Object(g.h)(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}())}),[]);var o=function(e){return t(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n,a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(g.f)()),t.prev=1,t.next=4,v.a.delete("".concat("https://hw7-phonebook-default-rtdb.firebaseio.com/","/contacts/").concat(e,".json"));case 4:n(Object(g.g)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(Object(g.e)(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()}(e))};return Object(a.jsx)(L.a,{component:"ul",style:{marginLeft:"0px"},children:n.map((function(t){var n=t.id,c=t.name,r=t.number;return Object(a.jsx)(i.a,{timeout:400,classNames:S.a,children:Object(a.jsxs)("li",{style:{margin:"10px auto",width:"400px"},className:S.a.item,children:[Object(a.jsxs)("p",{children:[c,": ",r]}),Object(a.jsx)(w.a,{variant:"contained",color:"secondary",className:e.button,startIcon:Object(a.jsx)(q.a,{}),type:"button",onClick:function(){return o(n)},children:"Delete"})]},n)},n)}))})},J=n(136),P=n.n(J),V=Object(r.b)((function(e){return{value:p(e)}}),(function(e){return{OnFilterContacts:function(t){return e(g.d(t.currentTarget.value))}}}))((function(e){var t=e.value,n=e.OnFilterContacts;return Object(a.jsx)("div",{style:{margin:"10px auto",width:"400px"},classNames:P.a,children:Object(a.jsxs)("label",{children:["Find contacts by name:",Object(a.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"Search contact"})]})})})),B=n(90),D=n(91),G=n(96),I=n(94),Q=n(137),H=n.n(Q),K=function(e){Object(G.a)(n,e);var t=Object(I.a)(n);function n(){return Object(B.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(a.jsx)(H.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{margin:"auto"}})}}]),n}(c.Component),M=n(156),R=n.n(M);t.default=function(){var e=Object(r.d)(p),t=Object(r.d)(j),n=Object(r.d)(m);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{in:!0,classNames:R.a,appear:!0,timeout:1e3,unmountOnExit:!0,children:Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Phonebook"})}),Object(a.jsx)(F,{}),Object(a.jsx)("h2",{style:{textAlign:"center"},children:"Contacts"}),(e.length>0||t.length>1)&&Object(a.jsx)(V,{}),n&&Object(a.jsx)("div",{class:"loader-wrapper",children:Object(a.jsx)(K,{class:"loader-wrapper"})}),Object(a.jsx)(E,{})]})}}}]);
//# sourceMappingURL=6.e1cba7aa.chunk.js.map