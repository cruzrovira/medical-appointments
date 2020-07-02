(this["webpackJsonpmedical-appointments"]=this["webpackJsonpmedical-appointments"]||[]).push([[0],{15:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),l=n(13),u=n(14),m=n(1),c=n(2),p=(n(20),n(25));function s(){var e=Object(m.a)(['\n  background: #fff;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);\n  h2 {\n    text-align: center;\n    margin-bottom: 10px;\n  }\n  input[type="text"],\n  input[type="date"],\n  input[type="time"],\n  textarea {\n    width: 100%;\n    max-width: 100%;\n    border: 1px solid purple;\n    border-radius: 4px;\n    line-height: 3em;\n    outline: none;\n    margin-bottom: 10px;\n    padding-left: 10px;\n  }\n  input[type="submit"] {\n    background: purple;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    line-height: 3em;\n    width: 5em;\n    outline: none;\n    cursor: pointer;\n  }\n  input[type="submit"]:active {\n    transform: scale(0.9);\n  }\n']);return s=function(){return e},e}var d=c.a.form(s()),f=function(e){var t=e.addAppointment,n=Object(a.useRef)(),i=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)(),u=Object(a.useRef)();return r.a.createElement(d,{onSubmit:function(e){!function(e){e.preventDefault();var a=n.current.value,r=i.current.value,m=o.current.value,c=l.current.value,s=u.current.value;if(0===a.trim().length)return n.current.setCustomValidity("required item"),null;if(n.current.setCustomValidity(""),0===r.trim().length)return i.current.setCustomValidity("required item"),null;if(i.current.setCustomValidity(""),0===m.trim().length)return o.current.setCustomValidity("required item"),null;if(o.current.setCustomValidity(""),0===c.trim().length)return l.current.setCustomValidity("required item"),null;l.current.setCustomValidity("");var d={id:Object(p.a)(),name:a,lastName:r,date:m,hour:c,symptoms:s};t(d),n.current.value="",i.current.value="",o.current.value="",l.current.value="",u.current.value="",n.current.focus()}(e)}},r.a.createElement("h2",null,"add Appointments"),r.a.createElement("label",{htmlFor:"name"},"Name*"),r.a.createElement("input",{type:"text",id:"name",ref:n}),r.a.createElement("label",{htmlFor:"lastName"},"last name*"),r.a.createElement("input",{type:"text",id:"lastName",ref:i}),r.a.createElement("label",{htmlFor:"date"},"Date*"),r.a.createElement("input",{type:"date",id:"date",ref:o}),r.a.createElement("label",{htmlFor:"hour"},"Hour*"),r.a.createElement("input",{type:"time",id:"hour",ref:l}),r.a.createElement("label",{htmlFor:"symptoms"},"symptoms"),r.a.createElement("textarea",{id:"symptoms",ref:u}),r.a.createElement("input",{type:"submit",value:"Add"}))};function b(){var e=Object(m.a)(["\n  background: #fff;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);\n  margin-bottom: 12px;\n  p {\n    margin: 0;\n  }\n\n  button {\n    background: purple;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    line-height: 3em;\n    width: 5em;\n    outline: none;\n    cursor: pointer;\n    margin-top: 10px;\n  }\n  button:active {\n    transform: scale(0.9);\n  }\n"]);return b=function(){return e},e}var h=c.a.div(b()),g=function(e){var t=e.id,n=e.name,a=e.lastName,i=e.date,o=e.hour,l=e.symptoms,u=e.daleteAppointment;return r.a.createElement(h,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),n),r.a.createElement("p",null,r.a.createElement("strong",null,"Last name: "),a),r.a.createElement("p",null,r.a.createElement("strong",null,"Date: "),i),r.a.createElement("p",null,r.a.createElement("strong",null,"Hour: "),o),r.a.createElement("p",null,r.a.createElement("strong",null,"Symptoms: "),l),r.a.createElement("button",{onClick:function(){u(t)}},"Delete"))};function x(){var e=Object(m.a)(["\n  .card {\n    background: #fff;\n    padding: 10px;\n    border-radius: 4px;\n    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);\n  }\n\n  h2 {\n    text-align: center;\n    margin-bottom: 10px;\n  }\n"]);return x=function(){return e},e}var v=c.a.div(x()),E=function(e){var t=e.appointmentList,n=e.daleteAppointment;return r.a.createElement(v,null,0===t.length?r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,"There are no Appointments")):t.map((function(e){var t=e.id,a=e.name,i=e.lastName,o=e.date,l=e.hour,u=e.symptoms;return r.a.createElement(g,{id:t,name:a,lastName:i,date:o,hour:l,symptoms:u,daleteAppointment:n,key:t})})))};function y(){var e=Object(m.a)(["\n  h1 {\n    text-align: center;\n    color: #fff;\n    text-transform: uppercase;\n    word-spacing: 15px;\n  }\n  .container {\n    max-width: 1024px;\n    width: 80%;\n    margin: auto;\n  }\n  .item {\n    margin-bottom: 10px;\n  }\n  @media screen and (min-width: 700px) {\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .item {\n      width: 49%;\n      margin-bottom: none;\n    }\n  }\n"]);return y=function(){return e},e}var w=c.a.div(y());var O=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("appointmentList");e&&i(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("appointmentList",JSON.stringify(n))}),[n]),r.a.createElement(w,null,r.a.createElement("h1",null,"Medical Appointments"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item"},r.a.createElement(f,{addAppointment:function(e){i([].concat(Object(l.a)(n),[e]))}})),r.a.createElement("div",{className:"item"},r.a.createElement(E,{appointmentList:n,daleteAppointment:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.78950fac.chunk.js.map