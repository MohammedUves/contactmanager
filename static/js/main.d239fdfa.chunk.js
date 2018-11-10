(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),p=a(8),h=a.n(p),d=a(12),b=a(29),f=a(17),E=a(13),v=a.n(E),y=r.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(f.a)({},e,{contacts:[t.payload].concat(Object(b.a)(e.contacts))});case"UPDATE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return N(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=y.Consumer,j=a(62),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(){var e=Object(d.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.email,c=t.phone,o=t.id,l=this.state.showContactInfo;return r.a.createElement(C,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a,"\xa0",r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})}}),r.a.createElement("i",{className:"fas fa-times",style:{float:"right",cursor:"pointer",color:"red"},onClick:e.onDeleteClick.bind(e,o,s)}),r.a.createElement(j.a,{to:"contact/edit/".concat(o)},r.a.createElement("i",{class:"fas fa-pencil-alt",style:{float:"right",cursor:"pointer",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group lead"},r.a.createElement("li",{className:"list-group-item bold"},r.a.createElement("strong",null,"Email: "),n),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Phone:\xa0"),c)):null)})}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-4"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.contacts.map(function(e){return r.a.createElement(O,{key:e.id,contact:e})}))})}}]),t}(n.Component),w=function(e){var t=e.text;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};w.defaultProps={text:"Contact Manager"};var x=w,A=a(14),S=a(27),T=a.n(S),D=function(e){var t=e.name,a=e.label,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:T()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var P=D,q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:""},a.onChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Name is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,v.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),_=(a(58),a(63)),I=a(65),M=a(64),L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},F=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry,that page does not exist"))},U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:""},a.onChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s,i,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Name is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(_.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement("div",{className:"container"},r.a.createElement(I.a,null,r.a.createElement(M.a,{exact:!0,path:"/",component:k}),r.a.createElement(M.a,{exact:!0,path:"/about",component:L}),r.a.createElement(M.a,{exact:!0,path:"/",component:k}),r.a.createElement(M.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(M.a,{exact:!0,path:"/contact/edit/:id",component:B}),r.a.createElement(M.a,{exact:!0,path:"/test",component:U}),r.a.createElement(M.a,{component:F})," ")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.d239fdfa.chunk.js.map