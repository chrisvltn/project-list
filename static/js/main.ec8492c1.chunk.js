(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports={TextArea:"Input_TextArea__3yPmy"}},39:function(e,t,n){e.exports=n(63)},44:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,l,u,s,p,f,b,m=n(0),d=n.n(m),h=n(34),v=n.n(h),j=(n(44),n(7)),O=n(9),g=n(13),E=n(11),y=n(12),w=n(68),N=n(62),T=n(66),C=n(65),k=n(17),D=n(25),S=function(e){var t=e.children;return d.a.createElement("div",{className:"pa3 br2 shadow-4"},t)},R=n(21),x=n(35),A=n.n(x),I=function(e){var t,n=e.className,a=void 0===n?"":n,r=e.label,c=e.type,i=Object(R.a)(e,["className","label","type"]),o="db w-100 br2 pa3 ba b--silver "+a;switch(c){case"textarea":t=d.a.createElement("textarea",Object.assign({className:o+" "+A.a.TextArea},i));break;default:t=d.a.createElement("input",Object.assign({className:o,type:c},i))}return d.a.createElement("label",{className:"db mb4"},d.a.createElement("p",{className:"b mb3"},r),t)},P=n(14),J=n(5),_=n(15),M=(n(47),n(30),n(6)),W=function(){function e(){Object(j.a)(this,e)}return Object(O.a)(e,null,[{key:"parse",value:function(e){return Object(M.plainToClass)(this,e||{})}}]),e}(),z=n(36),L=n.n(z),V=function(){function e(){Object(j.a)(this,e)}return Object(O.a)(e,null,[{key:"object",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"object"==typeof e?e:t}},{key:"any",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.object(t,n)}},{key:"string",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=(e||t).toString();return n&&(a=a.replace(/[\xe0\xe1\xe2\xe3\xe4]/g,"a").replace(/[\xe9\xe8\xea\xeb]/g,"e").replace(/[\xed\xec\xee\xef]/g,"i").replace(/[\xf5\xf3\xf2\xf5\xf6]/g,"o").replace(/[\xfa\xf9\xfc]/g,"u").replace(/[\xe7]/g,"c").replace(/[\xf1]/g,"n")),a}},{key:"Date",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date(0);"string"==typeof e&&(e=e.length<=11?e.trim()+" 12:00:00":e);var n=L()(e).toDate();return isNaN(n.getFullYear())?t:n})},{key:"number",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseFloat(e)||t}},{key:"boolean",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("boolean"==typeof e)return e;try{var n=JSON.parse(e);return"number"==typeof n?n>0:"boolean"!=typeof n?t:n}catch(a){return t}}},{key:"array",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.isArray(e)?e:t}},{key:"encode",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){var n="string"==typeof t?t.split("").reduce(function(e,t){return e+t.charCodeAt(0)},0):t;return parseInt(e.toString()+n.toString())},"")}}]),e}();function U(e){return e?M.Type.apply(null,[e]):function(e,t){var n=Reflect.getMetadata("design:type",e,t);switch(n){case Number:return Object(M.Transform)(function(e){return V.number(e)})(e,t);case String:return Object(M.Transform)(function(e){return V.string(e)})(e,t);case Date:return Object(M.Transform)(function(e){return V.Date(e)})(e,t);case Boolean:return Object(M.Transform)(function(e){return V.boolean(e)})(e,t);case Array:return Object(M.Transform)(function(e){return V.array(e)})(e,t);default:return Object(M.Transform)(function(e){return Object(M.plainToClass)(n,e)})(e,t)}}}var B,F=(a=U(),r=U(),c=U(),i=U(),o=U(),l=function(e){function t(){var e,n;Object(j.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r))),Object(P.a)(n,"id",u,Object(J.a)(Object(J.a)(n))),Object(P.a)(n,"title",s,Object(J.a)(Object(J.a)(n))),Object(P.a)(n,"description",p,Object(J.a)(Object(J.a)(n))),Object(P.a)(n,"modified",f,Object(J.a)(Object(J.a)(n))),Object(P.a)(n,"created",b,Object(J.a)(Object(J.a)(n))),n}return Object(y.a)(t,e),t}(W),u=Object(_.a)(l.prototype,"id",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Date.now()}}),s=Object(_.a)(l.prototype,"title",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=Object(_.a)(l.prototype,"description",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=Object(_.a)(l.prototype,"modified",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Date}}),b=Object(_.a)(l.prototype,"created",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Date}}),l),Y=n(8);function $(e){return{type:B.PROJECT_ADD,project:e}}!function(e){e.PROJECT_ADD="PROJECT_ADD",e.PROJECT_EDIT="PROJECT_EDIT",e.PROJECT_REMOVE="PROJECT_REMOVE"}(B||(B={}));var q=n(60),G="project_list";function H(){var e=JSON.parse(localStorage.getItem(G)||"[]");return F.parse(e)}var K=function(e){var t=e.btnType,n=e.small,a=e.clear,r=e.children,c=e.className,i=Object(R.a)(e,["btnType","small","clear","children","className"]),o=["db w-100 ttu bn b tc pointer dim"];switch(c&&o.push(c),o.push(n?"ph1 pv2 f6":"ph2 pv3 f5"),t){case"success":o.push(a?"bg-transparent green":"bg-green white");break;case"danger":o.push(a?"bg-transparent red":"bg-red white")}return d.a.createElement("button",Object.assign({className:o.join(" ")},i),r)},Q=function(e){function t(){var e,n;Object(j.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={project:F.parse()},n.handleInputChange=function(e){n.setState({project:F.parse(Object(D.a)({},n.state.project,Object(k.a)({},e.target.name,e.target.value.trim())))})},n.handleSubmit=function(e){e.preventDefault(),n.props.save(F.parse(Object(D.a)({},n.state.project,{modified:new Date}))),n.props.history.push("/projects"),n.setState({project:F.parse()})},n}return Object(y.a)(t,e),Object(O.a)(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.location.search){var t=new URLSearchParams(this.props.location.search),n=parseInt(t.get("id")||""),a=H().find(function(e){return e.id===n});a&&this.setState({project:a});var r=this.props.history.listen(function(){e.setState({project:F.parse()}),r()})}}},{key:"render",value:function(){return d.a.createElement(S,null,d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement(I,{name:"title",label:"Project Name",type:"text",onChange:this.handleInputChange,value:this.state.project.title}),d.a.createElement(I,{name:"description",label:"Project Description",type:"textarea",onChange:this.handleInputChange,value:this.state.project.description}),d.a.createElement(K,{type:"submit",btnType:"success"},"CREATE")))}}]),t}(m.Component),X=Object(q.a)(Object(Y.b)(null,function(e){return{save:function(t){var n=function(e){var t=H(),n=t.findIndex(function(t){return t.id==e.id});n>-1?t[n]=e:t.push(e);var a=JSON.stringify(t);return localStorage.setItem(G,a),{saved:!0,isNew:-1==n}}(t).isNew;e(n?$(t):function(e){return{type:B.PROJECT_EDIT,project:e}}(t))}}})(Q)),Z=Object(C.a)(Object(Y.b)(null,function(e,t){return{remove:function(){var n;!function(e){var t=H(),n=t.findIndex(function(t){return t.id===e});t.splice(n,1);var a=JSON.stringify(t);localStorage.setItem(G,a)}(t.id),e((n=t.id,{type:B.PROJECT_REMOVE,projectId:n}))}}})(function(e){var t=e.id,n=e.title,a=e.description,r=e.onClick,c=e.remove,i=e.history;return d.a.createElement("div",{className:"mb3",onClick:r},d.a.createElement(S,null,d.a.createElement("p",{className:"mb2 f5 b"},n),d.a.createElement("p",{className:"f6"},a),d.a.createElement("div",{className:"flex"},d.a.createElement("div",{className:"w-25 mr2"},d.a.createElement(K,{clear:!0,small:!0,btnType:"success",onClick:function(){return i.push("/project/edit?id="+t)}},"EDIT")),d.a.createElement("div",{className:"w-25 mr2"},d.a.createElement(K,{clear:!0,small:!0,btnType:"danger",onClick:c},"REMOVE")))))})),ee=Object(Y.b)(function(e){return{projects:e.projects}})(function(e){var t=e.projects;return d.a.createElement("div",null,t.map(function(e){return d.a.createElement(Z,Object.assign({key:e.id},e))}))}),te=n(69),ne="dib f5 ph2 mh2 no-underline blue",ae=Object(C.a)(function(){return d.a.createElement("nav",{className:"tc mb3"},d.a.createElement(te.a,{className:ne,activeClassName:"b",exact:!0,to:"/project"},"List"),d.a.createElement(te.a,{className:ne,activeClassName:"b",exact:!0,to:"/project/create"},"Create"))}),re=function(e){var t=e.children;return d.a.createElement("header",null,d.a.createElement("h1",{className:"f1 lh-title tc"},"Project List"),t)},ce=function(){return d.a.createElement("footer",{className:"w-100 ph2 pv3 tc bg-near-black near-white"},"Made by Christian")},ie=function(e){function t(e){var n;Object(j.a)(this,t),n=Object(g.a)(this,Object(E.a)(t).call(this,e));var a=H();return e.add(a),n}return Object(y.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"flex flex-column justify-between min-vh-100"},d.a.createElement(re,null,d.a.createElement(ae,null)),d.a.createElement("main",{className:"flex-auto self-center pt1 pb4 ph3 mw6 w-100"},d.a.createElement(w.a,null,d.a.createElement(N.a,{path:"/project/create",exact:!0,component:X}),d.a.createElement(N.a,{path:"/project/edit",component:X}),d.a.createElement(N.a,{path:"/project/",component:ee}),d.a.createElement(T.a,{path:"/",to:"/project"}))),d.a.createElement(ce,null))}}]),t}(m.Component),oe=Object(C.a)(Object(Y.b)(null,function(e){return{add:function(t){return t.forEach(function(t){return e($(t))})}}})(ie)),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var se=n(67),pe=n(16),fe=n(28);var be=Object(pe.c)(Object(pe.b)({projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.PROJECT_ADD:return[].concat(Object(fe.a)(e),[t.project]);case B.PROJECT_EDIT:var n=e.map(function(e){return e.id}).indexOf(t.project.id);if(-1==n)return e;var a=Object(fe.a)(e);return a[n]=t.project,a;case B.PROJECT_REMOVE:return e.filter(function(e){return e.id!==t.projectId})}return e}})),me=d.a.createElement(Y.a,{store:be},d.a.createElement(se.a,{basename:"/project-list"},d.a.createElement(oe,null)));v.a.render(me,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/project-list",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/project-list","/service-worker.js");le?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ue(t,e)})}}()}},[[39,2,1]]]);
//# sourceMappingURL=main.ec8492c1.chunk.js.map