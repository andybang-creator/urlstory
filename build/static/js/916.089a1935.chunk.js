"use strict";(self.webpackChunkurl_storage=self.webpackChunkurl_storage||[]).push([[916],{3916:function(s,e,r){r.r(e);var a=r(5861),n=r(4942),t=r(1413),c=r(885),i=r(7757),o=r.n(i),l=r(7313),u=r(8952),d=r(7890),p=r(9127),h=r(5803),m=r(9466),x=r(4972),v=r(6417),f={password:"",cf_password:"",err:"",success:""};e.default=function(){var s=(0,l.useState)(f),e=(0,c.Z)(s,2),r=e[0],i=e[1],j=(0,d.UO)().token,g=(0,d.s0)(),w=r.password,N=r.cf_password,Z=r.err,b=r.success,_=function(s){var e,a=s.target,c=a.name,o=a.value;i((0,t.Z)((0,t.Z)({},r),{},(e={},(0,n.Z)(e,c,o),(0,n.Z)(e,"err",""),(0,n.Z)(e,"success",""),e)))},k=function(){var s=(0,a.Z)(o().mark((function s(){var e;return o().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!(0,h.G9)(w)){s.next=2;break}return s.abrupt("return",i((0,t.Z)((0,t.Z)({},r),{},{err:"Password must be at least 6 characters.",success:""})));case 2:if((0,h.BD)(w,N)){s.next=4;break}return s.abrupt("return",i((0,t.Z)((0,t.Z)({},r),{},{err:"Password did not match.",success:""})));case 4:return s.prev=4,s.next=7,u.bl.post("/user/reset",{password:w},{headers:{Authorization:j}});case 7:return e=s.sent,s.abrupt("return",i((0,t.Z)((0,t.Z)({},r),{},{err:"",success:e.data.msg})));case 11:s.prev=11,s.t0=s.catch(4),s.t0.response.data.msg&&i((0,t.Z)((0,t.Z)({},r),{},{err:s.t0.response.data.msg,success:""}));case 14:case"end":return s.stop()}}),s,null,[[4,11]])})));return function(){return s.apply(this,arguments)}}();return(0,v.jsx)("center",{children:(0,v.jsxs)("div",{className:"container",id:"container",children:[(0,v.jsx)("div",{className:"form-container sign-in-container",children:(0,v.jsxs)("form",{children:[Z&&(0,p.X)(Z),b&&(0,p.C)(b),(0,v.jsxs)("div",{className:"icon_field",children:[(0,v.jsx)(x.z85,{className:"icon"}),(0,v.jsx)("input",{type:"password",className:"auth_input",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:w,name:"password",onChange:_})]}),(0,v.jsxs)("div",{className:"icon_field",children:[(0,v.jsx)(x.z85,{className:"icon"}),(0,v.jsx)("input",{type:"password",className:"auth_input",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694",value:N,name:"cf_password",onChange:_})]}),(0,v.jsx)("button",{id:"auth_btn",onClick:k,children:"\uc7ac\uc124\uc815"}),(0,v.jsx)("button",{className:"response_register",onClick:function(){g("/logintest")},children:"\ub85c\uadf8\uc778"})]})}),(0,v.jsx)("div",{className:"overlay-container",children:(0,v.jsx)("div",{className:"overlay",children:(0,v.jsxs)("div",{className:"overlay-panel overlay-right",children:[(0,v.jsx)("h1",{className:"auth_opening",children:"\ube44\ubc00\ubc88\ud638\ub97c \uc7ac\uc124\uc815 \ud558\uc138\uc694!"}),(0,v.jsx)("p",{className:"auth_text",children:"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd \ud6c4 \ub85c\uadf8\uc778 \ud558\uc138\uc694!"}),(0,v.jsx)("button",{className:"ghost",id:"signUp",children:(0,v.jsx)(m.rU,{to:"/logintest",children:"\ub85c\uadf8\uc778"})})]})})})]})})}}}]);