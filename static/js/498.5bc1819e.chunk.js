"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[498],{6498:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,a,i,c,s,d,p,u,l,x=t(1413),h=t(5861),f=t(885),b=t(7757),g=t.n(b),m=t(7689),Z=t(9062),w=t(168),v=t(6444),k=v.ZP.div(r||(r=(0,w.Z)(["\nbackground-color: #1e2129;\n  z-index: 300;\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 50px;\n  \n"]))),y=v.ZP.div(o||(o=(0,w.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmargin: auto;\npadding: 15px;\nheight: 50%;\n  width: 50%;\n  background-color: #bbd;\n  border: 3px solid red;\n  border-radius: 10px;\n"]))),j=(v.ZP.div(a||(a=(0,w.Z)(["\nmargin: 5px;\n height: 100%;\n  width: 100%;\n"]))),v.ZP.button(i||(i=(0,w.Z)(["\ndisplay: inline-flex;\n  align-items: center;\n  /* justify-content: center; */\n  /* margin-bottom: 20px; */\n  /* margin-right: auto; */\n  padding: 8px 8px 8px 8px;\n  border-radius: 4px;\n  border: none;\n  height: 30px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1, 875;\n  text-transform: uppercase;\n  background-color: #2196f3;\n  color: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    border: 2px solid;\n    background-color: #21d4f3;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    transform: scale(1.01);\n  }\n"])))),z=v.ZP.p(c||(c=(0,w.Z)(["\nfont-weight: 700;\n  font-size: 24px;\n  line-height: 1, 875;\n"]))),P=t(2791),C=v.ZP.form(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  padding: 20px;\n  border: 2px solid #dbb858;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background-color: #e5e7c5;\n"]))),S=v.ZP.label(d||(d=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1, 875;\n"]))),A=v.ZP.input(p||(p=(0,w.Z)(["\n  font: inherit;\n  padding: 8px;\n  margin: 8px 0 8px 0;\n  max-width: 80%;\n  border-radius: 8px;\n  border-color: blue;\n"]))),_=v.ZP.button(u||(u=(0,w.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  margin-right: auto;\n  padding: 8px 8px 8px 8px;\n  border-radius: 4px;\n  border: none;\n  height: 30px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1, 875;\n  text-transform: uppercase;\n  background-color: #2196f3;\n  color: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    border: 2px solid;\n    background-color: #21d4f3;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    transform: scale(1.01);\n  }\n"]))),N=v.ZP.input(l||(l=(0,w.Z)(["\nbackground-color: azure;\n"]))),q=t(184);function I(n,e,t){var r=e.handleUpdateContact,o=(0,P.useState)(n.name),a=(0,f.Z)(o,2),i=a[0],c=a[1],s=(0,P.useState)(n.phone),d=(0,f.Z)(s,2),p=d[0],u=d[1],l=(0,P.useState)(n.personal),x=(0,f.Z)(l,2),h=x[0],b=x[1],g=function(n){switch(n.target.name){case"name":c(n.target.value);break;case"phone":u(n.target.value);break;default:return}};return(0,q.jsxs)(C,{onSubmit:function(n){n.preventDefault(),r()},children:["Personal contact",(0,q.jsx)(N,{type:"checkbox",checked:h,onChange:function(){return b(!h)}}),(0,q.jsxs)(S,{children:["Name",(0,q.jsx)(A,{type:"text",name:"name",value:i,onChange:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,q.jsxs)(S,{children:["Number",(0,q.jsx)(A,{type:"tel",name:"phone",value:p,onChange:g,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,q.jsx)(_,{type:"submit",children:"Save change"})]})}function U(){var n=(0,m.UO)().contactId;console.log("contactId in EditContact:",n);var e=(0,Z.W1)(n),t=e.data,r=e.isLoading,o=(0,Z.wv)(),a=(0,f.Z)(o,1)[0],i=(0,m.s0)(),c=function(){return i("/")},s=function(){var e=(0,h.Z)(g().mark((function e(t){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a((0,x.Z)({id:n},t));case 3:c(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,q.jsx)(k,{children:(0,q.jsxs)(y,{children:[(0,q.jsx)(z,{children:"You can make changes to this contact"}),t&&(0,q.jsx)(I,{initialValues:{name:t.name,phone:t.phone,personal:t.personal},onSubmit:s,loading:r}),(0,q.jsx)(j,{type:"button",onClick:c,children:"Close"})]})})}},5861:function(n,e,t){function r(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(d){return void t(d)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,a){var i=n.apply(e,t);function c(n){r(i,o,a,c,s,"next",n)}function s(n){r(i,o,a,c,s,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=498.5bc1819e.chunk.js.map