(this.webpackJsonpkevinweb=this.webpackJsonpkevinweb||[]).push([[0],{149:function(e,a,t){e.exports=t(319)},157:function(e,a,t){},158:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},159:function(e,a,t){},178:function(e,a,t){},319:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),i=(t(154),t(155),t(7)),s=t.n(i),m=(t(156),t(157),t(158),t(159),t(8)),o=t(9),u=t(10),d=t(11),h=t(90),g=t.n(h),p=t(130),E=t(17),v=t(325),f=t(326),b=t(327),N=t(328),y=t(329),k=t(330),j=t(324),w=t(331),O=t(346),C=t(332),P=t(333),S=t(334),x=t(335),M=t(336),L=t(337),I=(t(161),t(131)),A=t.n(I),R=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).sources=["/blue.mp3","/beats.mp3"],n.state={currentSrcIndex:0,playing:!1},n.handleSwap=n.handleSwap.bind(Object(E.a)(n)),n.handleMusic=n.handleMusic.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"handleSwap",value:function(){var e=0===this.state.currentSrcIndex?1:0;this.setState({currentSrcIndex:e})}},{key:"handleMusic",value:function(){s()("span").hasClass("fa-play")?(this.setState({playing:!0}),s()("#span").removeClass("fa-play"),s()("#span").addClass("fa-pause")):(this.setState({playing:!1}),s()("#span").removeClass("fa-pause"),s()("#span").addClass("fa-play"))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A.a,{playing:this.state.playing,src:this.sources[this.state.currentSrcIndex]}),l.a.createElement(j.a,{onClick:this.handleMusic,style:{marginRight:3,backgroundColor:"#ee8572"}},l.a.createElement("span",{id:"span",className:"fa fa-play fa-xs"})),l.a.createElement(j.a,{className:"full",onClick:this.handleSwap,style:{backgroundColor:"#ee8572"}},l.a.createElement("span",{id:"span",className:"fa fa-fast-forward "})),l.a.createElement("p",null,"Now playing ",this.sources[this.state.currentSrcIndex].split(".mp3")[0]))}}]),t}(n.Component),T=t(37),B=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={is_visible:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(a){e.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,a=this.state.is_visible;return l.a.createElement("div",{className:"scroll-to-top"},a&&l.a.createElement("div",{onClick:function(){return e.scrollToTop()}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"38.735",width:"33.749"},l.a.createElement("g",{transform:"translate(-18.121 -3.364)"},l.a.createElement("rect",{ry:"4.928",y:"3.364",x:"18.121",height:"38.735",width:"33.749",fill:"#abf0e9"}),l.a.createElement("g",{transform:"translate(-.48 2.134)"},l.a.createElement("rect",{ry:"4.928",y:"1.229",x:"18.601",height:"38.735",width:"33.749",fill:"#63b7af"}),l.a.createElement("g",{fill:"#ececec"},l.a.createElement("path",{d:"M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z"}),l.a.createElement("path",{d:"M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z"})))))))}}]),t}(n.Component),_=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1,checked:!1},n.toggleNav=n.toggleNav.bind(Object(E.a)(n)),n.toggleModal=n.toggleModal.bind(Object(E.a)(n)),n.handleLogin=n.handleLogin.bind(Object(E.a)(n)),n.handleChecked=n.handleChecked.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("The username is: "+this.username.value+" The password is: "+this.password.value+" Saved?:"+this.remember.checked),e.preventDefault()}},{key:"handleChecked",value:function(){var e=Object(p.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({checked:!this.state.checked});case 2:1==this.state.checked?(s()(".navbar-light").removeClass("navbar-light").addClass("navbar-dark"),s()(".jumbotron").removeClass("jumbotron").addClass("jumbotron-dark"),s()(".body-bright").removeClass("body-bright").addClass("body-dark")):(s()(".navbar-dark").removeClass("navbar-dark").addClass("navbar-light"),s()(".jumbotron-dark").removeClass("jumbotron-dark").addClass("jumbotron"),s()(".body-dark").removeClass("body-dark").addClass("body-bright"));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"header"},l.a.createElement(v.a,{light:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{onClick:this.toggleNav}),l.a.createElement(b.a,{className:"mr-auto",href:"/"},l.a.createElement("span",{role:"img"},"\ud83c\udfb7")),l.a.createElement(N.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(y.a,{navbar:!0,className:"ml-auto",onClick:this.toggleNav},l.a.createElement(k.a,null,l.a.createElement(T.NavHashLink,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"}),"Home")),l.a.createElement(k.a,null,l.a.createElement(T.NavHashLink,{smooth:!0,className:"nav-link",to:"/about#about-me"},l.a.createElement("span",{className:"fa fa-info fa-lg"}),"About")),l.a.createElement(k.a,null,l.a.createElement(T.NavHashLink,{className:"nav-link",to:"/projects"},l.a.createElement("span",{className:"fa fa-list fa-lg"}),"Projects")),l.a.createElement(k.a,null,l.a.createElement(T.NavHashLink,{className:"nav-link",to:"/photos"},l.a.createElement("span",{className:"fa fa-camera fa-lg"}),"Photographs")),l.a.createElement(k.a,null,l.a.createElement(T.NavHashLink,{className:"nav-link",to:"/interest"},l.a.createElement("span",{className:"fa fa-gamepad fa-lg"}),"Interest")),l.a.createElement(k.a,null,l.a.createElement(T.NavHashLink,{className:"nav-link",to:"/contact"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"}),"Contact")),l.a.createElement(k.a,{style:{textAlign:"left"}},l.a.createElement(j.a,{color:"primary",onClick:this.toggleModal,style:{marginTop:5}},l.a.createElement("span",{className:"fa fa-sign-in"}),"Sign In")))))),l.a.createElement(w.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-7 col-lg-7"},l.a.createElement("h2",null,"Welcome!"),l.a.createElement("p",null,"Hi, welcome to Kevin's website")),l.a.createElement("div",{className:"col-2"},l.a.createElement(R,null)),l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{class:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"custom switch",checked:this.state.checked,onClick:function(){return e.handleChecked()}}),l.a.createElement("label",{className:"custom-control-label",for:"custom switch"},"Night Mode: ",this.state.checked?"On":"Off")))))),l.a.createElement(B,null),l.a.createElement(O.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(C.a,{toggle:this.toggleModal},l.a.createElement("h3",null,"Login")),l.a.createElement(P.a,null,l.a.createElement(S.a,{onSubmit:this.handleLogin},l.a.createElement(x.a,null,l.a.createElement(M.a,{htmlFor:"username"},"Username"),l.a.createElement(L.a,{type:"text",id:"username",name:"username",placeholder:"Enter your username here",innerRef:function(a){return e.username=a}})),l.a.createElement(x.a,null,l.a.createElement(M.a,{htmlFor:"password"},"Password"),l.a.createElement(L.a,{type:"text",id:"password",name:"password",placeholder:"Enter your password here",innerRef:function(a){return e.password=a}})),l.a.createElement(x.a,{check:!0},l.a.createElement(M.a,{check:!0},l.a.createElement(L.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember this account?")),l.a.createElement(j.a,{type:"submit",value:"submit",color:"primary"},"Log In")))))}}]),t}(n.Component),H=t(12);var D=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(H.Link,{to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(H.Link,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(H.Link,{to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(H.Link,{to:"/photos"},"Photographs")),l.a.createElement("li",null,l.a.createElement(H.Link,{to:"/interest"},"Interest")),l.a.createElement("li",null,l.a.createElement(H.Link,{to:"/contact"},"Contact")))),l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"Location"),l.a.createElement("address",null,"Arizona",l.a.createElement("span",{className:"fa fa-sun-o",style:{color:"yellow"}}),l.a.createElement("br",null),"United States",l.a.createElement("br",null),l.a.createElement("a",{role:"button",className:"btn btn-info",href:"##"},l.a.createElement("i",{className:"fa fa-weixin"})," WeChat"),l.a.createElement("br",null),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:brotherhui521@gmail.com"},l.a.createElement("i",{className:"fa fa-envelope-o "})," Email"))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright Kevin")))))},q=function(e){return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"carousel slide",id:"mycarousel","data-ride":"carousel"},l.a.createElement("div",{class:"carousel-inner",role:"list-box"},l.a.createElement("div",{class:"carousel-item active "},l.a.createElement("img",{className:"img-fluid d-block w-100",src:"/images/sax.png",alt:"uthappizza"}),l.a.createElement("div",{class:"carousel-caption d-none d-md-block align-items-center"},l.a.createElement("h2",{class:"mt-0"},"Father's Day Special Song ",l.a.createElement("span",{class:"badge badge-danger"},"NEW"),l.a.createElement("span",{class:"badge badge-pill badge-secondarys"},"Available on YouTube")),l.a.createElement("p",{class:"d-none d-sm-block"},"Check out this new video in the Interest Page."))),l.a.createElement("div",{class:"carousel-item "},l.a.createElement("img",{className:"img-fluid d-block w-100",src:"/images/Picture9.jpg",alt:"buffet"}),l.a.createElement("div",{class:"carousel-caption d-none d-md-block align-items-center"},l.a.createElement("h2",{class:"mt-2"},"love travelling",l.a.createElement("span",{class:"badge badge-danger"})),l.a.createElement("p",{class:"d-none d-sm-block"}))),l.a.createElement("div",{class:"carousel-item "},l.a.createElement("img",{className:"img-fluid d-block w-100",src:"/images/Picture4.jpg",alt:"buffet"}),l.a.createElement("div",{class:"carousel-caption d-none d-md-block align-items-center"},l.a.createElement("h2",{class:"mt-2"},'"A Duck in Water"',l.a.createElement("span",{class:"badge badge-danger"},"NEW")),l.a.createElement("p",{class:"d-none d-sm-block"},"Check out new pictures in Photographs Page."))),l.a.createElement("ol",{class:"carousel-indicators"},l.a.createElement("li",{"data-target":"#mycarousel","data-slide-to":"0",class:"active"}),l.a.createElement("li",{"data-target":"#mycarousel","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#mycarousel","data-slide-to":"2"}))),l.a.createElement("a",{role:"button",class:"carousel-control-prev","data-slide":"prev",href:"#mycarousel"},l.a.createElement("span",{class:"carousel-control-prev-icon "})),l.a.createElement("a",{role:"button",class:"carousel-control-next","data-slide":"next",href:"#mycarousel"},l.a.createElement("span",{class:"carousel-control-next-icon "}))),l.a.createElement("button",{class:"btn-sm btn btn-danger ",id:"carousel-btn",onClick:e.handleButton,style:{margin:"auto"}},l.a.createElement("span",{class:"fa fa-pause"}))))},J=t(142),F=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={numberOfPictures:5,currentPicture:0,pictures:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.renderPictures()}},{key:"renderPictures",value:function(){if(this.state.currentPicture>=this.props.data.length)console.log("no more"),s()("#loadmorePic").addClass("disabled");else{for(var e=[],a=this.state.currentPicture;a<this.state.numberOfPictures;a++)e.push(l.a.createElement(W,{data:this.props.data[a],key:this.props.data[a].id}));this.setState({pictures:Object(J.a)(this.state.pictures).concat(e),currentPicture:this.state.currentPicture+5,numberOfPictures:this.state.numberOfPictures+5})}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"tiles row"},this.state.pictures),l.a.createElement("div",{className:"row"},l.a.createElement("button",{id:"loadmorePic",className:"btn btn-primary",onClick:function(){return e.renderPictures()}},"View More")))}}]),t}(n.Component),W=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={open:!1,mouseOver:!1},n._clickHandler=n._clickHandler.bind(Object(E.a)(n)),n._mouseEnter=n._mouseEnter.bind(Object(E.a)(n)),n._mouseLeave=n._mouseLeave.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"_mouseEnter",value:function(e){e.preventDefault(),!1===this.state.mouseOver&&(console.log(this.props.data.name),this.setState({mouseOver:!0}))}},{key:"_mouseLeave",value:function(e){e.preventDefault(),!0===this.state.mouseOver&&this.setState({mouseOver:!1})}},{key:"_clickHandler",value:function(e){e.preventDefault(),!1===this.state.open?this.setState({open:!0}):this.setState({open:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"tile col col-6 col-md-4 col-lg-3"},l.a.createElement(H.Link,{to:"/photos/".concat(this.props.data.id)},l.a.createElement("img",{onMouseEnter:this._mouseEnter,onMouseLeave:this._mouseLeave,src:this.props.data.image,alt:this.props.data.name,style:{width:"200px",height:"200px"}})))}}]),t}(n.Component),V=F,z=[{id:1,name:"Drawing",image:"/images/Picture1.jpg",lat:"31.41",lng:"120.07"},{id:2,name:"flower",image:"/images/Picture2.jpg"},{id:3,name:"kevin",image:"/images/Picture3.jpg"},{id:4,name:"duck",image:"/images/Picture4.jpg"},{id:5,name:"night",image:"/images/Picture5.jpg"},{id:6,name:"baby bird",image:"/images/Picture6.jpg"},{id:7,name:"Cactus",image:"/images/Picture7.jpg"},{id:8,name:"vegas v",image:"/images/Picture8.jpg"},{id:9,name:"vegas h",image:"/images/Picture9.jpg"},{id:10,name:"bird",image:"/images/Picture10.jpg"},{id:11,name:"surfing man",image:"/images/Picture11.jpg"},{id:12,name:"christmas tree",image:"/images/Picture12.jpg"},{id:13,name:"birds standing",image:"/images/Picture13.jpg"},{id:14,name:"Intel",image:"/images/Picture14.jpg"},{id:15,name:"flour",image:"/images/Picture15.jpg"},{id:16,name:"noodle",image:"/images/Picture16.jpg"},{id:17,name:"burger",image:"/images/Picture17.jpg"},{id:18,name:"road",image:"/images/Picture18.jpg"},{id:19,name:"flower valley",image:"/images/Picture19.jpg"},{id:20,name:"bed",image:"/images/Picture20.jpg"}],U=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).url="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",n.onClickRefresh=function(){s.a.getJSON(n.url,n.getQuote,"jsonp")},n.state={},n}return Object(o.a)(t,[{key:"getQuote",value:function(e){s()("#quote").text(e.quoteText),""===e.quoteAuthor&&(e.quoteAuthor="Unknown"),s()("#author").text("- "+e.quoteAuthor)}},{key:"componentDidMount",value:function(){s.a.getJSON(this.url,this.getQuote,"jsonp")}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement("h2",null,"Quote for the day"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"quote_box center-block"},l.a.createElement("div",{className:"quote"},l.a.createElement("h2",null,l.a.createElement("span",null,l.a.createElement("sup",null,l.a.createElement("span",{className:"fa fa-quote-left","aria-hidden":"true"}))),l.a.createElement("p",{id:"quote"})," ")),l.a.createElement("div",{className:"author"},l.a.createElement("span",null,l.a.createElement("h3",null,l.a.createElement("p",{id:"author"})))),l.a.createElement("ul",{className:"social-bar"},l.a.createElement("li",null,l.a.createElement("button",{id:"tweetThis",className:"btn btn-default btn-sm",title:"Tweet this quote"},l.a.createElement("a",{className:"twitter-share-link"},l.a.createElement("span",{id:"twitter-share",className:"fa fa-twitter fa-lg"})))),l.a.createElement("li",null,l.a.createElement("button",{className:"btn btn-default btn-sm",title:"Post this quote (not implemented)"},l.a.createElement("a",{href:"#"},l.a.createElement("span",{className:"fa fa-facebook fa-lg"})))),l.a.createElement("li",null,l.a.createElement(j.a,{id:"getQuote",outline:!0,color:"success",size:"sm",title:"New Quote",onClick:this.onClickRefresh},l.a.createElement("span",{className:"fa fa-refresh"}))))))))}}]),t}(n.Component),Q=(t(178),t(29)),G=t.n(Q);var Y=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"My Timeline"),l.a.createElement("div",{className:"timeline"},l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{left:!0},l.a.createElement("div",{className:"timeline-img"}),l.a.createElement("div",{className:"timeline-content timeline-card"},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/css.png",alt:"intel",height:"220"}),l.a.createElement("h3",null,"Journey Begins")),l.a.createElement("div",{className:"date"},"1 AUG 2018"),l.a.createElement("p",null,"First time learning web development in school. (HTML, CSS, and Javascript) Hooray!"),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{right:!0},l.a.createElement("div",{className:"timeline-img"}),l.a.createElement("div",{className:"timeline-content timeline-card"},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/intel.png",alt:"intel",height:"200"}),l.a.createElement("h3",null,"Intel Internship")),l.a.createElement("div",{className:"date"},"25 MAR 2019"),l.a.createElement("p",null,"Started my internship at Intel Internet Of Things Group under Vision, Markets, & Channels team. Working in a team which deals with both cutting-edge technology and global customers is really cool."),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{left:!0},l.a.createElement("div",{className:"timeline-img"}),l.a.createElement("div",{className:"timeline-content timeline-card"},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/IntelNCS2.jpg",alt:"intel",height:"230"}),l.a.createElement("h3",null,"Intel IOTG Hackathon")),l.a.createElement("div",{className:"date"},"15 JUL 2019"),l.a.createElement("p",null,"Researching on Intel\xae Distribution of OpenVINO\u2122 toolkit and neural networks. Successfully built an AI home security system using OpenVINO\u2122 and deployed with Intel Neural Compute Stick II."),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{right:!0},l.a.createElement("div",{className:"timeline-img"}),l.a.createElement("div",{className:"timeline-content timeline-card"},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/angular.png",alt:"intel",height:"220"}),l.a.createElement("h3",null)),l.a.createElement("div",{className:"date"},"1 JAN 2020"),l.a.createElement("p",null,"In my ASU Capstone Project, we used Angular as front end framework, and Node.js for backend development. We created an app for the client company to create advertisement sessions, surveys, and online chats for their employees to improve work efficiency from different areas."),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{right:!0},l.a.createElement("div",{className:"timeline-img"}),l.a.createElement("div",{className:"timeline-content timeline-card "},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/react.png",alt:"intel",height:"270"}),l.a.createElement("h3",null,"Learning ")),l.a.createElement("div",{className:"date"},"1 FEB 2020"),l.a.createElement("p",null,"After experimenting with Angular, I decided to learn React systematically since React was more popular. Through online courses, I undestand the structure and components of React, and successfully set up Redux and configured store for the web application."),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{left:!0},l.a.createElement("div",{className:"timeline-img"}),l.a.createElement("div",{className:"timeline-content timeline-card "},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/native.png",alt:"intel",height:"260"}),l.a.createElement("h3",null,"React Native with Redux")),l.a.createElement("div",{className:"date"},"01 APR 2020"),l.a.createElement("p",null,"Learning React Native with Redux to manage states"),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{left:!0},l.a.createElement("div",{className:"timeline-img timeline-card"}),l.a.createElement("div",{className:"timeline-content timeline-card "},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/mern.jpg",alt:"intel",height:"280"}),l.a.createElement("h3",null,"Full Stack Project")),l.a.createElement("div",{className:"date"},"01 MAY 2016"),l.a.createElement("p",null,"Full Stack Project with mongodb"),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{left:!0},l.a.createElement("div",{className:"timeline-img timeline-card"}),l.a.createElement("div",{className:"timeline-content timeline-card "},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/asu.jpg",alt:"asu",height:"420"}),l.a.createElement("h3",null,"Graduate from ASU")),l.a.createElement("div",{className:"date"},"07 MAY 2016"),l.a.createElement("p",null,"Finally earned my degrees in Computer Information System, Business Analytics, and Supply Chain Management. Hooray!"),l.a.createElement(H.Link,{to:"/projects"},"more")))),l.a.createElement("div",{className:"timeline-item"},l.a.createElement(G.a,{right:!0},l.a.createElement("div",{className:"timeline-img timeline-card"}),l.a.createElement("div",{className:"timeline-content timeline-card "},l.a.createElement("div",{className:"timeline-img-header"},l.a.createElement("img",{src:"/images/keep.jpg",alt:"intel",height:"300"}),l.a.createElement("h3",null)),l.a.createElement("div",{className:"date"},"30 MAY 2016"),l.a.createElement("p",null,"Keep exploring and learning Java. Currently looking for a full-time opportunity in front end development."),l.a.createElement(H.Link,{to:"/projects"},"more")))))))},K=t(338);var $=function(){return l.a.createElement("div",{className:"container about"},l.a.createElement(K.a,null,l.a.createElement(K.a,{left:!0,href:"#"},l.a.createElement(K.a,{object:!0,src:"/images/Picture3.jpg",alt:"me",style:{height:90,marginRight:20}})),l.a.createElement(K.a,{body:!0},l.a.createElement(K.a,{heading:!0},"About me"),"My name is Kevin. Graduated from Arizona State University with degrees in Computer Informations System, Business Analytics and Supply Chain Management, I am currently learning front end development with React and NodeJs for the backend. I love building websites, and creating elegant interfaces for users. Playing the saxophone and listening to music always help me relax, and I enjoy learning more things in the future.")))},X=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={},n.handleButton=n.handleButton.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.handleCarousel()}},{key:"handleCarousel",value:function(){s()("#mycarousel").carousel({interval:4500})}},{key:"handleButton",value:function(){s()("#carousel-btn").children("span").hasClass("fa-pause")?(s()("#mycarousel").carousel("pause"),s()("#carousel-btn").children("span").removeClass("fa-pause"),s()("#carousel-btn").children("span").addClass("fa-play")):s()("#carousel-btn").children("span").hasClass("fa-play")&&(s()("#mycarousel").carousel("cycle"),s()("#carousel-btn").children("span").removeClass("fa-play"),s()("#carousel-btn").children("span").addClass("fa-pause"))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement(q,{handleButton:this.handleButton}),l.a.createElement(U,null),l.a.createElement("h2",null,"My Gallery"),l.a.createElement(V,{data:z}),l.a.createElement("div",{id:"my-timeline"},l.a.createElement(Y,null)),l.a.createElement("div",{id:"about-me"},l.a.createElement($,null))))}}]),t}(n.Component),Z=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{marginTop:40,paddingTop:40,paddingBottom:30}},l.a.createElement("h1",null,"Currently working on converting projects into React components..."),l.a.createElement("h2",null,"To be updated... "),l.a.createElement("img",{src:"images/t.png",alt:"Thank you!",style:{top:10}}),l.a.createElement("h2",null,"Check out my github page for some of my projects ",l.a.createElement("a",{href:"https://github.com/brotherhui521",target:"_blank"},"here "))))}}]),t}(n.Component),ee=t(141),ae=t(132),te=t(339);var ne=function(){var e=Object(n.useState)(0),a=Object(ee.a)(e,2),t=(a[0],a[1]);return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(te.a,{style:{marginLeft:14}},l.a.createElement(H.Link,{to:"/home"},"Home")),l.a.createElement(te.a,{active:!0},"Photos")),l.a.createElement(ae.a,{photos:[{src:"/images/Picture1.jpg",width:3,height:4},{src:"/images/Picture2.jpg",width:3,height:4},{src:"/images/Picture3.jpg",width:1,height:1},{src:"/images/Picture4.jpg",width:4,height:3},{src:"/images/Picture5.jpg",width:4,height:3},{src:"/images/Picture6.jpg",width:3,height:4},{src:"/images/Picture7.jpg",width:3,height:4},{src:"/images/Picture8.jpg",width:3,height:4},{src:"/images/Picture9.jpg",width:4,height:3},{src:"/images/Picture10.jpg",width:4,height:3},{src:"/images/Picture11.jpg",width:3,height:4},{src:"/images/Picture12.jpg",width:4,height:3},{src:"/images/Picture13.jpg",width:3,height:4},{src:"/images/Picture14.jpg",width:3,height:4},{src:"/images/Picture15.jpg",width:3,height:4},{src:"/images/Picture16.jpg",width:4,height:3},{src:"/images/Picture17.jpg",width:3,height:4},{src:"/images/Picture18.jpg",width:4,height:3},{src:"/images/Picture20.jpg",width:3,height:4},{src:"/images/Picture19.jpg",width:3,height:4}],onClick:function(e,a){var n=a.photo,l=a.index;t(l),console.log(n.src.split("Picture")[1].split(".")[0]),window.location="/photos/".concat(n.src.split("Picture")[1].split(".")[0])}})))},le=t(134),re=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={},n}return Object(o.a)(t,[{key:"_onReady",value:function(e){e.target.pauseVideo()}},{key:"render",value:function(){return l.a.createElement(le.a,{videoId:this.props.vId,opts:{maxheight:"500",maxwidth:"700",width:"370",height:"200",playerVars:{autoplay:0}},onReady:this._onReady})}}]),t}(n.Component),ce=t(55),ie=t.n(ce),se=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row",style:{paddingTop:20,marginBottom:10}},l.a.createElement("div",{className:"col col-12 col-lg-6",style:{overflow:"hidden",textAlign:"center"}},l.a.createElement("img",{src:"/images/music.png",alt:"music",style:{width:300}})),l.a.createElement("div",{className:"col col-12 col-lg-6",style:{textAlign:"center",padding:0,display:"flex",flexDirection:"column",justifyContent:"center"}},l.a.createElement(ie.a,null,l.a.createElement("div",null,l.a.createElement(re,{vId:"TAn5pLdSbss"}))))),l.a.createElement("div",{className:"row",style:{marginBottom:50}},l.a.createElement(ie.a,null,l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement(re,{vId:"10v1_BFj9fQ"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-12 col-lg-6",style:{overflow:"hidden",textAlign:"center"}},l.a.createElement("img",{src:"/images/intel.png",alt:"intel",style:{width:150,marginRight:10,marginBottom:10}}),l.a.createElement("img",{src:"/images/ncs2.png",alt:"intel",style:{width:170}})),l.a.createElement(ie.a,null,l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement(re,{vId:"qlpWF4dPGcM"}))))))}}]),t}(n.Component),me=(t(198),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current input is"+JSON.stringify(e)),alert("Current state is : "+JSON.stringify(e))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12",style:{margin:"30px 0px 30px 0px"}},l.a.createElement("h3",null,"Feel free to reach out to me")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"My Address"),l.a.createElement("address",null,"Currently live in",l.a.createElement("br",null),"the beautiful desert",l.a.createElement("br",null),"Arizona, US",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"}),":"," ",l.a.createElement("a",{href:"mail to:brotherhui521@gmail.com"},"Send me an email"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("img",{src:"images/t.png",alt:"Thank you!",style:{top:10}})),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",className:"btn btn-info",href:"##"},l.a.createElement("i",{className:"fa fa-weixin"})," WeChat"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:brotherhui521@gmail.com"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))))}}]),t}(n.Component)),oe=t(340),ue=t(341),de=t(342),he=t(343),ge=t(344),pe=t(345),Ee=t(71),ve=(t(140),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){}}]),t}(n.Component));ve.defaultProps={center:{lat:38,lng:250},zoom:1};var fe=ve;function be(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(te.a,{style:{marginLeft:14}},l.a.createElement(H.Link,{to:"/photos"},"Photos")),l.a.createElement(te.a,{active:!0},"Photo Detail")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-12 col-md-6 col-lg-5"},l.a.createElement(oe.a,{style:{marginTop:"10px",marginBottom:"10px"}},l.a.createElement(ue.a,{style:{cursor:"pointer"},top:!0,width:"100%",src:e.photo.image,alt:"Photo here",onClick:e.toggleModal}),l.a.createElement(de.a,null,l.a.createElement(he.a,null,e.photo.name),l.a.createElement(ge.a,null,"Location needed"),l.a.createElement(pe.a,null,"add photo. description"),l.a.createElement(j.a,null,"Button")))),l.a.createElement("div",{className:"col col-12 col-md-6 "},l.a.createElement(fe,{lat:e.photo.lat,lng:e.photo.lng}))),l.a.createElement(Ee.b,null,e.isModalOpen?l.a.createElement(Ee.a,{onClose:e.toggleModal},l.a.createElement(Ee.c,{views:e.image})):null))}var Ne=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1,image:[{src:e.photo.image}]},n.toggleModal=n.toggleModal.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(be,{photo:this.props.photo,toggleModal:this.toggleModal,isModalOpen:this.state.isModalOpen,image:this.state.image}))}}]),t}(n.Component),ye=t(14),ke=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement("div",{className:"body-bright"},l.a.createElement(ye.g,{location:this.props.location},l.a.createElement(ye.d,{path:"/home",component:X}),l.a.createElement(ye.d,{path:"/about",component:X}),l.a.createElement(ye.d,{path:"/projects",component:Z}),l.a.createElement(ye.d,{exact:!0,path:"/photos",component:ne}),l.a.createElement(ye.d,{path:"/photos/:photoId",component:function(e){var a=e.match;return l.a.createElement(Ne,{photo:z.filter((function(e){return e.id==parseInt(a.params.photoId,10)}))[0]})}}),l.a.createElement(ye.d,{path:"/interest",component:se}),l.a.createElement(ye.d,{path:"/contact",component:me}),l.a.createElement(ye.c,{to:"/home"}))),l.a.createElement(D,null))}}]),t}(n.Component),je=Object(ye.o)(ke);var we=function(){return l.a.createElement(H.BrowserRouter,null,l.a.createElement("div",null,l.a.createElement(je,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,2]]]);
//# sourceMappingURL=main.2c83e0ea.chunk.js.map