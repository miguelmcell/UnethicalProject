(this["webpackJsonpcs373-movecity.me"]=this["webpackJsonpcs373-movecity.me"]||[]).push([[0],{107:function(e,t,a){e.exports=a(262)},112:function(e,t,a){},113:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},114:function(e,t,a){},115:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(102),r=a.n(l),o=(a(112),a(6)),i=a(7),s=a(9),m=a(8),u=a(10),h=a(20),b=(a(113),a(114),a(115),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container text-center",style:{top:"450px"}},c.a.createElement("h1",{style:{fontSize:"60px",fontFamily:"Varela",top:"180px"}},"Welcome!"),c.a.createElement("p1",{class:"text-center",style:{fontSize:"20px",fontFamily:"Varela",top:"260px"}},"Test")))}}]),t}(n.Component)),v=(a(28),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={total_issues:0,total_commits:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"text-center"},"About Us")))}}]),t}(n.Component)),d=a(19),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={searchValues:""},a.handleSearchChange=a.handleSearchChange.bind(Object(d.a)(a)),a.handleSearchSubmit=a.handleSearchSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSearchChange",value:function(e){this.setState({searchValues:e.target.value})}},{key:"handleSearchSubmit",value:function(){console.log(this.props),this.props.history.push({pathname:"/search",state:{searchValues:this.state.searchValues}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"Most Secure Site Ever"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/Page1"},"Page1")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/Page2"},"Page2")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/MaintainancePortal"},"Maintainance"))))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={total_issues:0,total_commits:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"text-center"},"Page 1")))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={total_issues:0,total_commits:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"text-center"},"Page 2")))}}]),t}(n.Component),g=a(263),j=a(264),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={value:"",welcome:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),""!=this.state.value?fetch("http://35.188.102.108:8080/getAccount/"+this.state.value).then((function(e){return e.json()})).then((function(e){console.log(e),0==e.length?t.setState({welcome:"Account ID not found"}):t.setState({welcome:"Welcome "+e[0].name+"!"})})):this.setState({welcome:"Enter Account ID"})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container text-center",style:{width:"40%"}},c.a.createElement("h1",{className:"text-center"},"Maintainance Portal"),c.a.createElement(g.a,{onSubmit:this.handleSubmit},c.a.createElement(g.a.Group,{controlId:"exampleForm.ControlInput1"},c.a.createElement(g.a.Label,null,"Enter Account ID"),c.a.createElement(g.a.Control,{type:"text",placeholder:"12 digit account number",onChange:this.handleChange}),c.a.createElement("br",null),c.a.createElement(j.a,{variant:"primary",type:"submit"},"Submit"))),c.a.createElement("h1",{className:"text-center"},this.state.welcome)))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App Site"},c.a.createElement("div",{className:"Site-content"},c.a.createElement("div",{className:"Site-header"},c.a.createElement(p,{history:this.props.history})),c.a.createElement("div",null,c.a.createElement("div",{className:"main"},c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:b}),c.a.createElement(h.a,{path:"/about",component:v}),c.a.createElement(h.a,{path:"/Page1",component:E}),c.a.createElement(h.a,{path:"/Page2",component:f}),c.a.createElement(h.a,{path:"/MaintainancePortal",component:O}))))))}}]),t}(n.Component),N=Object(h.f)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(58);a(257),a(258),a(259);r.a.render(c.a.createElement(S.a,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[107,1,2]]]);
//# sourceMappingURL=main.17bffac1.chunk.js.map