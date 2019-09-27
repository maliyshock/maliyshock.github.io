(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(69),o=a.n(l),c=a(11),i=a(25),s="SIGNED_IN",u="SET_GOALS",m="SET_COMPLETED",p={email:null},h=Object(i.b)({goals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.goals;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var a=t.email;return p={email:a};default:return e}},completeGoals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.completeGoals;default:return e}}}),d=a(142),b=a(139),f=a(143),v=a(15),g=a.n(v),E=a(26),O=Object(E.a)(),y=(a(126),a(5)),j=a(6),k=a(8),w=a(7),C=a(9),N=a(37),G=(N.initializeApp({apiKey:"AIzaSyBnp-zpoMNnAE5zbOILVt4ZGh9qoig1oHU",authDomain:"goalcoach-b255d.firebaseapp.com",databaseURL:"https://goalcoach-b255d.firebaseio.com",projectId:"goalcoach-b255d",storageBucket:"goalcoach-b255d.appspot.com",messagingSenderId:"739488554632"}),N.database().ref("goals")),S=N.database().ref("completeGoals"),I=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).state={title:""},a}return Object(C.a)(t,e),Object(j.a)(t,[{key:"addGoal",value:function(){var e=this.state.title,t=this.props.user.email;G.push({email:t,title:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Add Goal",className:"form-control",onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement("button",{className:"btn btn-success",type:"button",onClick:function(){return e.addGoal()}},"Submit")))}}]),t}(n.Component);var A=Object(c.b)(function(e){return{user:e.user}},null)(I);var L=function(e){function t(){return Object(y.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(j.a)(t,[{key:"completeGoal",value:function(){var e=this.props.user.email,t=this.props.goal,a=t.title,n=t.goalKey;G.child(n).remove(),S.push({email:e,title:a})}},{key:"render",value:function(){var e=this,t=this.props.goal,a=t.title,n=t.email;return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("span",null," was submitted by ",r.a.createElement("em",null,n)),r.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return e.completeGoal()}},"Complete"))}}]),t}(n.Component);var U=Object(c.b)(function(e){return{user:e.user}},null)(L),D=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).state={goals:[]},a}return Object(C.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;G.on("value",function(t){var a=[];t.forEach(function(e){var t=e.val(),n=t.email,r=t.title,l=e.key;a.push({email:n,title:r,goalKey:l})}),e.props.setGoals(a)})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.goals.map(function(e,t){return r.a.createElement(U,{key:t,goal:e})}))}}]),t}(n.Component);var _=Object(c.b)(function(e){return console.log(e),{goals:e.goals}},{setGoals:function(e){return{type:u,goals:e}}})(D),z=function(e){function t(){return Object(y.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.on("value",function(t){var a=[];t.forEach(function(e){var t=e.val(),n=t.email,r=t.title;a.push({email:n,title:r})}),e.props.setCompletedGoals(a)})}},{key:"clearGoals",value:function(){S.set([])}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app__row"},this.props.completeGoals.map(function(e,t){return r.a.createElement("p",{key:t},r.a.createElement("del",null,e.title),r.a.createElement("span",null," Completed by ",r.a.createElement("em",null,e.email)))}),r.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){return e.clearGoals()}},"Clear completed goals list"))}}]),t}(n.Component);var B=Object(c.b)(function(e){return{completeGoals:e.completeGoals}},{setCompletedGoals:function(e){return{type:m,completeGoals:e}}})(z),M=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).state={},a}return Object(C.a)(t,e),Object(j.a)(t,[{key:"signOut",value:function(){g.a.auth().signOut().then(function(){},function(e){})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("small",null,"you logined as ",this.props.user.email)),r.a.createElement("h1",null,"Goals"),r.a.createElement(A,null),r.a.createElement("hr",null),r.a.createElement("h2",null,"List of goals:"),r.a.createElement(_,null),r.a.createElement("hr",null),r.a.createElement(B,null),r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.signOut()}},"Sign Out"))}}]),t}(n.Component);var W=Object(c.b)(function(e){return{user:e.user}},null)(M),K=a(141),P=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).state={email:"",password:"",error:{message:""}},a}return Object(C.a)(t,e),Object(j.a)(t,[{key:"signUp",value:function(){var e=this,t=this.state,a=t.email,n=t.password;g.a.auth().createUserWithEmailAndPassword(a,n).catch(function(t){e.setState({error:t})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-inline"},r.a.createElement("h2",null,"Log In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"email",placeholder:"email",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{className:"form-control",type:"password",placeholder:"password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return e.signUp()}},"Sign Up")),r.a.createElement("div",null,this.state.error.message),r.a.createElement("div",{className:"instead"},r.a.createElement(K.a,{to:"/signin"},"Create account")))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).state={error:{message:""}},a}return Object(C.a)(t,e),Object(j.a)(t,[{key:"signIn",value:function(){var e=this,t=this.state,a=t.email,n=t.password;g.a.auth().signInWithEmailAndPassword(a,n).catch(function(t){e.setState({error:t})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-inline"},r.a.createElement("h2",null,"Create Account"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"email",placeholder:"email",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{className:"form-control",type:"password",placeholder:"password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return e.signIn()}},"Sign In")),r.a.createElement("div",null,this.state.error.message),r.a.createElement("div",{className:"instead"},r.a.createElement(K.a,{to:"/signup"},"Log in")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=Object(i.c)(h);g.a.auth().onAuthStateChanged(function(e){var t;e?(O.push("/app"),x.dispatch((t=e.email,{type:s,email:t}))):O.push("/signup")}),o.a.render(r.a.createElement(c.a,{store:x},r.a.createElement(d.a,{path:""},r.a.createElement(b.a,{history:O},r.a.createElement("div",null,r.a.createElement(f.a,{path:"/app",component:W}),r.a.createElement(f.a,{path:"/signin",component:T}),r.a.createElement(f.a,{path:"/signup",component:P}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(138)}},[[72,2,1]]]);
//# sourceMappingURL=main.e9a4d6ff.chunk.js.map