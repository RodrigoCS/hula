(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,n,t){e.exports=t(59)},44:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=(t(44),t(36)),l=t(4),s=t(9),u=t(5),m=r.a.createContext({}),f=t(2),d=t(3);function p(){var e=Object(f.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]);return p=function(){return e},e}function g(){var e=Object(f.a)(["\n  background-color: white;\n  border-radius: 40px;\n  margin: 0 60px;\n  padding: 32px;\n  font-family: 'Quicksand', sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  color: ",";\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  height: 50vh;\n  justify-content: space-between;\n"]);return g=function(){return e},e}function b(){var e=Object(f.a)(["\n  color: ",";\n  font-weight: bold;\n  margin: 40px;\n  border-radius: 100px;\n"]);return b=function(){return e},e}function v(){var e=Object(f.a)(["\n  color: ",";\n  font-family: 'Quicksand', sans-serif;\n"]);return v=function(){return e},e}function h(){var e=Object(f.a)([""]);return h=function(){return e},e}function x(){var e=Object(f.a)(["\n  width: 100px;\n  height: 100px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 45%;\n  border-radius: 50%;\n  background-color: ",";\n  transition: 100ms;\n"]);return x=function(){return e},e}function y(){var e=Object(f.a)(["\n  margin: 0;\n"]);return y=function(){return e},e}function O(){var e=Object(f.a)(["\n  margin: 0;\n"]);return O=function(){return e},e}function E(){var e=Object(f.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-direction: column;\n  padding: 40px;\n  margin: 0 30px;\n  margin-bottom: 60px;\n"]);return E=function(){return e},e}function j(){var e=Object(f.a)(["\n  display: flex;\n  padding: 40;\n  justify-content: space-between;\n  align-items: center;\n"]);return j=function(){return e},e}function k(){var e=Object(f.a)(["\n  background-image: url(",");\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center;\n"]);return k=function(){return e},e}function w(){var e=Object(f.a)(["\n  width: 280px;\n"]);return w=function(){return e},e}function S(){var e=Object(f.a)(["\n  outline: none;\n  background-color: ",";\n  border-radius: 50px;\n  border: none;\n  padding: 12px 24px;\n  color: white;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  opacity: ",";\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return S=function(){return e},e}function z(){var e=Object(f.a)(["\n  min-height: 100vh;\n  background-size: 100%;\n  background-image: url('/images/background.png');\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return z=function(){return e},e}var P=d.a.div(z()),J=d.a.button(S(),"#753cbe",function(e){return e.disabled?.6:1}),N=d.a.img(w());N.defaultProps={src:"/images/logo.svg"};var C=d.a.div(k(),function(e){return e.src});C.defaultProps={src:"/images/icon.svg"};var B=d.a.div(j()),I=d.a.div(E(),function(e){return e.src});I.defaultProps={src:"/images/panel-bg.png"};var M=d.a.h1(O()),L=d.a.h2(y()),T=d.a.div(x(),function(e){return e.src},function(e){return e.selected?"#753cbe":"#c7b4ea"}),G=(d.a.div(h()),d.a.h1(v(),"#753cbe")),F=d.a.div(b(),"#753cbe"),D=d.a.div(g(),"#753cbe"),q=d.a.div(p()),U=Object(s.e)(function(e){var n=e.history,t=Object(a.useContext)(m),o=t.loading,i=t.isLoggedIn;return Object(a.useEffect)(function(){o||(i?n.push("selection"):n.push("login"))}),r.a.createElement(P,null,"Loading")}),W=t(26),_=t(27),A=Object(s.e)(function(e){var n=e.history,t=Object(a.useContext)(m),o=t.setIsLoggedIn,i=t.setUser;t.isLoggedIn,t.user;return r.a.createElement(P,null,r.a.createElement(N,null),r.a.createElement(J,{onClick:function(){window.FB.login(function(e){var t=e.status,a=e.authResponse;o("connected"===t),a&&(i(a),n.push("/selection"))},{scope:"public_profile,email"})}},r.a.createElement(W.a,{icon:_.a})," Ingresar con Facebook"))}),Q=t(28),R=t.n(Q);t(55);function X(e){var n=e.games,t=Object(a.useContext)(m),o=t.selectedGame,i=t.setSelectedGame;return r.a.createElement("div",{style:{marginBottom:24}},r.a.createElement(R.a,{infinite:!0,slidesPerPage:3},n.map(function(e,n){var t=o===n;return r.a.createElement("div",{key:"key_".concat(n),onClick:function(){return function(e,n){console.log("handleSelect",e,n),i(n)}(e,n)},style:{padding:8}},r.a.createElement(T,{selected:t,src:e.url}))})))}var Y=Object(s.e)(function(e){var n=e.history,t=Object(a.useContext)(m),o=t.selectedGame,i=t.games;return r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement(C,null)),r.a.createElement(I,null,r.a.createElement(M,null,"\xa1Gana jugando!"),r.a.createElement(L,null,"Elige tu premio")),r.a.createElement(X,{games:i}),r.a.createElement(J,{onClick:function(){var e=i[o];console.log("Play",e),n.push("/game/".concat(o))},disabled:!Number.isInteger(o)},"Jugar"))}),V=t(29),$=t.n(V),H=t(30),K=t(11),Z=t(31),ee=t(32),ne=t(35),te=t(33),ae=t(38),re=t(18),oe=t.n(re),ie=(t(57),function(e){return new Promise(function(n){return setTimeout(n,e)})}),ce=function(e,n){for(var t=0,a=0;a<n.length;a++)for(var r=0;r<n[a].length;r++)if(n[a][r]!==e[a][r]&&""!==n[a][r])for(var o=0;o<e.length;o++)for(var i=0;i<e[o].length;i++)e[o][i]===n[a][r]&&(t+=Math.abs(o-a)+Math.abs(i-r));return t},le=["up","down","left","right"],se=function(e,n){var t=JSON.parse(JSON.stringify(n)),a=!1;return e.y-1>=0&&""!==n[e.y-1][e.x]&&(t[e.y][e.x]=t[e.y-1][e.x],t[e.y-1][e.x]="",a=!0),[t,a]},ue=function(e,n){var t=JSON.parse(JSON.stringify(n)),a=!1;return e.y+1<n.length&&""!==n[e.y+1][e.x]&&(t[e.y][e.x]=t[e.y+1][e.x],t[e.y+1][e.x]="",a=!0),[t,a]},me=function(e,n){var t=JSON.parse(JSON.stringify(n)),a=!1;return e.x-1>=0&&""!==n[e.y][e.x-1]&&(t[e.y][e.x]=t[e.y][e.x-1],t[e.y][e.x-1]="",a=!0),[t,a]},fe=function(e,n){var t=JSON.parse(JSON.stringify(n)),a=!1;return e.x+1<n[e.y].length&&""!==n[e.y][e.x+1]&&(t[e.y][e.x]=t[e.y][e.x+1],t[e.y][e.x+1]="",a=!0),[t,a]},de=function(e){var n=e.image,t=e.size,a=e.side,o=e.x,i=e.y,c=e.blankElement,l=e.isOver,s=e.position;return r.a.createElement("div",{style:{width:"".concat(a,"px"),height:"".concat(a,"px"),backgroundImage:(8!==s||l)&&"url(".concat(n,")"),backgroundSize:"".concat(t,"px ").concat(t,"px"),backgroundPosition:"-".concat(o,"px -").concat(i,"px"),opacity:"".concat(l||!c?"1":"0.2"),cursor:"".concat(c?"default":"hover"),outline:"none"}})},pe=function(e){var n=e.animationTime,t=e.image,a=e.size,o=e.level,i=e.position,c=e.max,l=e.isOver,s=a/o,u=""===i,m=u?c:i,f=m%o*s,d=Math.floor(m/o)*s;return r.a.createElement("div",{className:"piece"},r.a.createElement(de,{position:m,image:t,size:a,side:s,x:f,y:d,blankElement:u,isOver:l}),r.a.createElement("style",null,"\n          .move-up {\n            transition: ".concat(n,"ms;\n            transform: translateY(-").concat(s,"px);\n          }\n          .move-right {\n            transition: ").concat(n,"ms;\n            transform: translateX(").concat(s,"px);\n          }\n          .move-down {\n            transition: ").concat(n,"ms;\n            transform: translateY(").concat(s,"px);\n          }\n          .move-left {\n            transition: ").concat(n,"ms;\n            transform: translateX(-").concat(s,"px);\n          }\n         \n        ")))},ge=t(34),be=function(e){function n(e){var t;Object(Z.a)(this,n),(t=Object(ne.a)(this,Object(te.a)(n).call(this,e))).generatePuzzle=function(e,n){for(var t=JSON.parse(JSON.stringify(n)),a=JSON.parse(JSON.stringify(e)),r=[se,ue,me,fe],o=Math.floor(300*Math.random())+1,i=0;i<o;i++){var c=Math.floor(4*Math.random())+0,s=r[c](a,t),u=Object(l.a)(s,2),m=u[0];if(u[1])switch(t=m,le[c]){case"up":a.x=a.x,a.y=a.y-1;break;case"down":a.x=a.x,a.y=a.y+1;break;case"left":a.x=a.x-1,a.y=a.y;break;case"right":a.x=a.x+1,a.y=a.y}}return[a,t]},t.solvePuzzle=function(e,n,a,r,o,i){if(0===ce(e,i))return t.setState({isOver:!0,isSolvingPuzzle:!1}),n;if(a===n+1)return t.setState({isSolvingPuzzle:!1}),"Could not solve puzzle in ".concat(a," iterations.");try{var c,s,u,m,f=se(o,i),d=Object(l.a)(f,2),p=d[0],g=d[1],b=ue(o,i),v=Object(l.a)(b,2),h=v[0],x=v[1],y=me(o,i),O=Object(l.a)(y,2),E=O[0],j=O[1],k=fe(o,i),w=Object(l.a)(k,2),S=w[0],z=w[1],P=["up"!==r&&g?ce(e,p):(c=[]).concat.apply(c,Object(K.a)(JSON.parse(JSON.stringify(e)))).length+1e3,"down"!==r&&x?ce(e,h):(s=[]).concat.apply(s,Object(K.a)(JSON.parse(JSON.stringify(e)))).length+1e3,"left"!==r&&j?ce(e,E):(u=[]).concat.apply(u,Object(K.a)(JSON.parse(JSON.stringify(e)))).length+1e3,"right"!==r&&z?ce(e,S):(m=[]).concat.apply(m,Object(K.a)(JSON.parse(JSON.stringify(e)))).length+1e3],J=le[P.indexOf(Math.min.apply(Math,P))],N={},C=[],B="none";switch(J){case"up":N.x=o.x,N.y=o.y-1,C=p,B="down";break;case"down":N.x=o.x,N.y=o.y+1,C=h,B="up";break;case"left":N.x=o.x-1,N.y=o.y,C=E,B="right";break;case"right":N.x=o.x+1,N.y=o.y,C=S,B="left"}ie(500).then(function(){return t.setState({shuffledBoard:C,blankElement:N}),t.solvePuzzle(e,n+1,a,B,N,C)})}catch(I){return t.setState({isSolvingPuzzle:!1}),I}},t.moveCurrentTile=function(e,n,t){var a=JSON.parse(JSON.stringify(t)),r=!1,o="up";if(e.y!==n.y||e.x!==n.x-1&&e.x!==n.x+1){if(e.x===n.x&&(e.y===n.y-1||e.y===n.y+1)){o=e.y>n.y?"up":"down",console.log("MOVED_Y",o),a[n.y][n.x]=a[e.y][e.x],a[e.y][e.x]="",r=!0}}else o=e.x<n.x?"right":"left",console.log("MOVED_X",o),a[n.y][n.x]=a[e.y][e.x],a[e.y][e.x]="",r=!0;return[a,r,o]},t.handleClick=function(e){return function(n){var a=n.target;console.log("handleClick",a);var r=t.moveCurrentTile(e,t.state.blankElement,t.state.shuffledBoard),o=Object(l.a)(r,3),i=o[0],c=o[1],s=o[2],u=JSON.stringify(i)===JSON.stringify(t.state.patternBoard);c&&t.animateMovement([s,a],function(n){t.setState({shuffledBoard:i,blankElement:e,isOver:u},function(){n(),u&&t.props.history.push("/won")})})}},t.animateMovement=function(e,n){var a=Object(l.a)(e,2),r=a[0],o=a[1];o.classList.add("move-"+r),setTimeout(function(){n(function(){o.classList.remove("move-"+r)})},t.animationTime)};var a=t.generatePuzzle({x:2,y:2},[[0,1,2],[3,4,5],[6,7,""]]),r=Object(l.a)(a,2),o=r[0],i=r[1];return t.state={isOver:!1,isSolvingPuzzle:!1,newPuzzle:!1,patternBoard:[[0,1,2],[3,4,5],[6,7,""]],shuffledBoard:i,blankElement:o},t.animationTime=200,t}return Object(ae.a)(n,e),Object(ee.a)(n,[{key:"componentDidUpdate",value:function(e,n){var t=this;if(e.solvePuzzle!==this.props.solvePuzzle&&!1===this.state.isSolvingPuzzle&&this.setState({isSolvingPuzzle:!0},function(){t.solvePuzzle(t.state.patternBoard,0,t.props.maxIterations||50,"none",t.state.blankElement,t.state.shuffledBoard)}),e.newPuzzle!==this.props.newPuzzle){var a=this.generatePuzzle({x:2,y:2},[[0,1,2],[3,4,5],[6,7,""]]),r=Object(l.a)(a,2),o=r[0],i=r[1];this.setState({isOver:!1,shuffledBoard:i,blankElement:o})}}},{key:"renderSquares",value:function(){var e=this,n=this.props,t=n.image,a=n.size,o=(n.level,this.state.shuffledBoard.map(function(n,o){return n.map(function(n,i){return r.a.createElement(ge.Clickable,{style:{outline:"none",transition:"transform 0.2s, background 0.2s"},key:n,onClick:e.handleClick({x:i,y:o})},r.a.createElement(pe,{animationTime:e.animationTime,key:n,size:a,image:t,level:3,position:n,max:oe.a.flatten(e.state.patternBoard).length-1,isOver:e.state.isOver}))})}));return oe.a.flatten(o)}},{key:"render",value:function(){var e=this.props.size;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",padding:0,width:"".concat(e,"px"),height:"".concat(e,"px"),alignItems:"center",justifyContent:"center",margin:"auto",boxShadow:"#00000052 5px 5px 24px 1px",border:"2px solid #00000082",boxSizing:"content-box",borderRadius:2}},this.renderSquares())}}]),n}(a.Component),ve=Object(s.e)(be);function he(){var e=Object(f.a)(["\n  background-color: ",";\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return he=function(){return e},e}var xe=Object(s.e)(function(e){var n=e.history;return r.a.createElement(ye,null,r.a.createElement(B,null,r.a.createElement(C,null)),r.a.createElement(q,null,r.a.createElement(D,null,"\xa1Felicidades!",r.a.createElement("img",{style:{position:"absolute"},src:"/images/price.svg"}),r.a.createElement(J,{onClick:function(){n.push("/redeem")}},"Obtener premio"))))}),ye=d.a.div(he(),"#c7b4ea");function Oe(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}function Ee(){var e=Object(f.a)(["\n  border-radius: 100px;\n  margin-right: 8px;\n"]);return Ee=function(){return e},e}var je=d.a.img(Ee()),ke=Object(s.e)(function(e){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),o=t[0],i=(t[1],Object(a.useState)(!1)),c=Object(l.a)(i,2),f=c[0],d=(c[1],Object(a.useState)(!1)),p=Object(l.a)(d,2),g=(p[0],p[1]),b=Object(a.useState)(),v=Object(l.a)(b,2),h=v[0],x=v[1],y=Object(a.useState)(Oe(1,3)),O=Object(l.a)(y,2),E=O[0],j=O[1],k=Object(a.useContext)(m),w=k.user,S=k.setUser,z=k.selectedGame,P=k.setSelectedGame,N=k.games;Object(a.useEffect)(function(){j(Oe(1,N.length))},[]),Object(a.useEffect)(function(){P(e.match.params.game),x(N[z]),w||e.history.push("/login")});var I=function(){window.FB.logout(function(e){g(!1),S(null)})};return r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement(u.b,{to:"/selection"},r.a.createElement(C,null)),function(){var e=w&&w.profile&&w.profile.picture.data.url;return r.a.createElement("div",null,r.a.createElement(je,{src:e}),";")}()),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(F,null,h&&h.message1),r.a.createElement(H.a,{date:Date.now()+5e3,intervalDelay:0,precision:3,renderer:function(e){var n=e.completed,t=e.total;return n?r.a.createElement(s.a,{to:{pathname:"/lose"}}):r.a.createElement(G,null,$.a.utc(t).format("mm:ss"))}}),r.a.createElement(ve,{solvePuzzle:o,newPuzzle:f,maxIterations:300,image:"/images/puzzle".concat(E,".png"),size:window.innerWidth-100}),r.a.createElement(J,{onClick:I},"Logout"),r.a.createElement(F,{style:{marginTop:20}},h&&h.message2)))))});function we(){var e=Object(f.a)(["\n  background-color: ",";\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return we=function(){return e},e}var Se=Object(s.e)(function(e){var n=e.history;return r.a.createElement(ze,null,r.a.createElement(B,null,r.a.createElement(C,null)),r.a.createElement(q,null,r.a.createElement(D,null,"Postre gratis",r.a.createElement("img",{width:100,src:"/images/cupcake.svg"}),r.a.createElement(J,{onClick:function(){n.push("/selection")}},"231015"),r.a.createElement("img",{width:"100%",src:"/images/barcode.svg"}))))}),ze=d.a.div(we(),"#c7b4ea");function Pe(){var e=Object(f.a)(["\n  background-color: ",";\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return Pe=function(){return e},e}var Je=Object(s.e)(function(e){var n=e.history;return r.a.createElement(Ne,null,r.a.createElement(B,null,r.a.createElement(C,null)),r.a.createElement(q,null,r.a.createElement(D,null,"Perdiste mas suerte la proxima!",r.a.createElement(J,{onClick:function(){n.push("/selection")}},"Salir"))))}),Ne=d.a.div(Pe(),"#c7b4ea"),Ce=(t(58),"327465451297007");var Be=function(){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(!0),f=Object(l.a)(i,2),d=f[0],p=f[1],g=Object(a.useState)(null),b=Object(l.a)(g,2),v=b[0],h=b[1],x=Object(a.useState)(),y=Object(l.a)(x,2),O=y[0],E=y[1];Object(a.useEffect)(function(){window.fbAsyncInit=function(){window.FB.init({appId:Ce,autoLogAppEvents:!0,xfbml:!0,version:"v3.2"}),window.FB.getLoginStatus(k)},t&&v&&!v.profile&&j()});var j=function(){window.FB.api("/".concat(v.userID),{fields:["name","email","picture"]},function(e){console.log(e),e&&e.id&&h(Object(c.a)({},v,{profile:e})),p(!1)})},k=function(e){var n=e.status,t=e.authResponse;o("connected"===n),t?h(t):p(!1)},w=function(e,n){return t?r.a.createElement(n,e):r.a.createElement(s.a,{to:{pathname:"/"}})};return r.a.createElement("div",{className:"App"},r.a.createElement(m.Provider,{value:{setIsLoggedIn:o,setUser:h,setLoading:p,loading:d,user:v,isLoggedIn:t,selectedGame:O,setSelectedGame:E,games:[{url:"/images/p1.svg",message1:"Ordena las partes para completar la imagen antes de que el tiempo se agote",message2:"!Estas jugando por un postre gratis!"},{url:"/images/p2.svg",message1:"Ordena las partes para completar la imagen antes de que el tiempo se agote",message2:"!Estas jugando por un postre gratis!"},{url:"/images/p3.svg",message1:"Ordena las partes para completar la imagen antes de que el tiempo se agote",message2:"!Estas jugando por un postre gratis!"}]}},r.a.createElement(u.a,null,r.a.createElement(s.b,{path:"/",exact:!0,component:U}),r.a.createElement(s.b,{path:"/login/",component:A}),r.a.createElement(s.b,{path:"/selection/",component:function(e){return w(e,Y)}}),r.a.createElement(s.b,{path:"/game/:game",component:function(e){return w(e,ke)}}),r.a.createElement(s.b,{path:"/won",component:function(e){return w(e,xe)}}),r.a.createElement(s.b,{path:"/redeem",component:function(e){return w(e,Se)}}),r.a.createElement(s.b,{path:"/lose",component:function(e){return w(e,Je)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.b14e9aac.chunk.js.map