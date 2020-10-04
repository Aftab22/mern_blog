(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/react-blog.d561b5a7.png"},22:function(e,t,a){e.exports=a.p+"static/media/redux-blog.ee72c190.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/mern-blog.84c20e08.png"},26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),l=a.n(r),s=(a(31),a(18)),c=a(19),i=a(25),m=a(24),u=a(6),h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Hello , ",o.a.createElement("span",{className:"blue-scheme"},"Welcome")," to my blog!"),o.a.createElement("h3",{className:"green-scheme"},"MERN PROJECT "),o.a.createElement("p",null,"This is a single-page web application. Even though this is a project I made to learn NodeJS and MongoDB , I did add a few articles/blogs that people could find interesting and really useful."),o.a.createElement("p",null,"The articles are mainly about React and Node , but I do plan on adding more."),o.a.createElement("p",null,"The site is styled minimally because my main aim while building this was to get it to work and concentrate on learning more about the functionality ."),o.a.createElement("p",null,"This Blog site is built using :",o.a.createElement("ul",null,o.a.createElement("li",{className:"green-scheme"},"MongoDB"),o.a.createElement("li",{className:"yellow-scheme"},"Express"),o.a.createElement("li",{className:"blue-scheme"},"ReactJS"),o.a.createElement("li",{className:"red-scheme"},"NodeJS"))),o.a.createElement("p",null,"It is being hosted on an Amazon AWS EC2 Instance."),o.a.createElement("p",null,"You could read more about it in the",o.a.createElement(u.b,{to:"/about"}," About")," section."),o.a.createElement("p",null,"To do:",o.a.createElement("ul",null,o.a.createElement("li",null,"Learn and add an SMTP functionality to receive emails from my readers."),o.a.createElement("li",null,"Work om making the styling better."),o.a.createElement("li",null,"Experiment a little more with AWS."))))},d=a(1),p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About Me"),o.a.createElement("p",null,"Hey , my name is Aftab and I am a Front-end web-applications developer."),o.a.createElement("p",null,"I have 2 years of experience working as a React JS developer. I have worked on several ReactJS projects and am highly skilled in front end web technologies and frameworks. I'm extremely passionate about web development and design."),o.a.createElement("p",null,"This is my MERN stack project website. It is currently being hosted on an amazon ec2 instance. It uses the on premise version of MongoDB. This project uses React Router for having different pages. I have created api's using Express to provide apis to upvote an article and to add comments to an article."),o.a.createElement("p",null,"Please do visit my ",o.a.createElement("a",{href:"http://bit.ly/aftab_portfolio"},"Portfolio")," ","to know more and to find my resume/contact details and the code for this project on my github.",o.a.createElement("br",null)),o.a.createElement("p",null,"Thanks for visiting the site."))},f=a(7),g=a.n(f),b=a(9),E=a(11);function y(e){var t=e.articles;return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){return o.a.createElement(u.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},o.a.createElement("h3",{className:e.colorscheme},e.title),o.a.createElement("p",null,e.content.length&&e.content[0].substring(0,150),"..."))})))}var w=a(21),v=a.n(w),k=a(22),x=a.n(k),N=a(23),R=a.n(N),A=[{name:"learn-react",title:"The Best Way to Learn React",content:["According to me , the key to being good at React (or any other JavaScript based framework) is being good with Javascript.","By 'good', I don't mean you have to know each and every javascript concept , although it would help if you did.","Therefore , before taking a deep dive into the world of React , take a week (yes , an entire week) to master all the core Javascript concepts","Scopes , Arrays , Objects , Looping , Callbacks ...","Look up 'ES6 features' and learn all of them and them","And you should obviously be equally comfortable with HTML and CSS","If you know the basics of HTML/CSS/Javascript , it wont work, you'll get stuck with small errors which is going to annoy the hell out of you","Take a week or two , be amazing at HTML/CSS/JS, it will make Learning React a breeze","If you've learnt all the basics well and if you are now comfortable with ES6 . React is going to be super easy.","Being comfortable with Javascript makes learning React enjoyable.","And one more thing. A big part of React is going to involve calling apis to get/send data . It would be highly recommended to learn how to make service calls and it would be really helpful to know about HTTP request/responses , status codes etc","After this when you start learning React start with Class components. React 'Hooks' are great. And right now everyone is moving to use Hooks instead of React Classes.","But if you spend some time learning React Class based components first , You will have a better understanding of how React renders components and how the 'Component Life Cycle works'.","After you've learnt Class and Functional components , then proceed with more advanced topics like Hooks , Redux , Styled-Components , API calls etc.","Thank you for reading.   -Aftab"],img:v.a,colorscheme:"blue-scheme"},{name:"learn-mern",title:"Getting Started With MERN",content:["MERN Stack -one of the most popular tech stack out there.","MERN (as you know ) stands for MONGODB - the database for storing records , EXPRESS - the framework used by NODE to accept requests from the front end and send back response , NODE - the backed , Its allows you to run Javascript on a server . Node along with frameworks like express can help in making apis , server side rendered web apps etc, REACT - The front end , the view-layer that a user interacts with. Send requests to Node+Express-server. Node+Express server listens to requests made by React-front-end , Node+Express-server connects to MONGODB to get the requested data , then sends it back to REACT, REACT displays the received data for the user to view.","If you are comfortable with Javascript Node+Express is going to be fairly easy.","And if you know what JSON is and how to iterate and play around with JSON objects , then MongoDB is fairly simple as as well","This is my first MERN stack application , and it wasn't that difficult to make","NODE+EXPRESS is quiet fun. The only difficulty I faced was when I was deploying this site on an aws ec2 instance. MongoDB installation on ec2 instance was a bit troublesome but I was able to figure it out eventually.","I will soon create a detailed article specific to this site's development and deployment.","Thank you for reading.   -Aftab"],img:R.a,colorscheme:"green-scheme"},{name:"learn-redux",title:"Redux Flow",content:["Redux is a state management library for react. What does 'State Management' mean? ","All web application have a tonne of data they store on the front end, like on an ecommerce website the website stores stuff like : whats in the users cart, whats the name of the user , users previous order history , users shopping preferences , user's reviews etc.","You might say that some of this data is stored in the database , and you are right. But once React fetches the all this data from data base, it stores it in the front end as well ,for it to be displayed on the UI. All the data that the user can see and interact with on the UI forms the state of the application.","As applications grow bigger and have a lot of functionalities , managing a huge tonne of data becomes really complex","Since React mostly takes care of the UI , we need help from a 3rd party library to manage the state","Redux state management flow is as follows: Instead of storing the state inside each component , you make the state global and call it store. Create a 'Reducer' for each kind of component , let the reducer return the initial state of that component and let the reducer modify the future state. Once all the Reducers are ready , combine them to create a 'store'.","Root Reducer = combining individual Reducers (This forms your global state/store)","Define Action Types and Actions , which when triggered tell the reducer to update the store.","Connect your component to the redux store , and use the state values to populate the UI, each time the global state changes , it causes the UI to update as well , use Actions to trigger state change from the UI.","This article briefly explains the high level flow for redux.","Thank you for reading.   -Aftab"],img:x.a,colorscheme:"purple-scheme"}];function S(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"404 page not found"))}var I=function(e){var t=e.comments;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Comments"),t.map((function(e,t){return o.a.createElement("div",{key:t,className:"comment"},o.a.createElement("h4",null,e.username),o.a.createElement("p",null,e.text))})))},T=function(e){var t=e.articleName,a=e.upvotes,n=e.setArticleInfo,r=e.colorscheme,l=function(){var e=Object(b.a)(g.a.mark((function e(){var a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return a=e.sent,e.next=5,a.json();case 5:o=e.sent,n(o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{id:"upvotes-section"},o.a.createElement("p",null,"This post has been upvoted ",a," times"),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return l()},className:"button-".concat(r)},"Add Upvote \ud83d\udc4d"))},C=function(e){var t=e.articleName,a=e.setArticleInfo,r=e.colorscheme,l=Object(n.useState)(""),s=Object(E.a)(l,2),c=s[0],i=s[1],m=Object(n.useState)(""),u=Object(E.a)(m,2),h=u[0],d=u[1],p=function(){var e=Object(b.a)(g.a.mark((function e(){var n,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:c,text:h}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,a(o),i(""),d("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{id:"add-comment-form",style:{borderColor:r.replace("-scheme","")}},o.a.createElement("h3",null,"Add a Comment"),o.a.createElement("label",null,"Name:",o.a.createElement("input",{type:"text",className:r,value:c,onChange:function(e){return i(e.target.value)}})),o.a.createElement("label",null,"Comment:",o.a.createElement("textarea",{rows:"4",cols:"50",value:h,className:r,onChange:function(e){return d(e.target.value)}})),o.a.createElement("button",{className:"button-".concat(r),onClick:function(){return p()}},"Add Comment \ud83d\ude4c"))},j=function(e){var t=e.match,a=Object(n.useState)({upvotes:0,comments:[]}),r=Object(E.a)(a,2),l=r[0],s=r[1],c=t.params.name,i=A.find((function(e){return e.name===c})),m=A.filter((function(e){return e.name!==c}));return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),i?o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:i.colorscheme},i.title),o.a.createElement("img",{src:i.img,alt:"blog-banner",style:{padding:"10px"}}),i.content.map((function(e,t){return o.a.createElement("p",{key:t},e)})),o.a.createElement(T,{articleName:c,upvotes:l.upvotes,setArticleInfo:s,colorscheme:i.colorscheme}),o.a.createElement(I,{comments:l.comments}),o.a.createElement(C,{articleName:c,colorscheme:i.colorscheme,setArticleInfo:s}),o.a.createElement("div",{id:"other-articles"},o.a.createElement("h3",null,"Other Articles:"),o.a.createElement(y,{articles:m}))):o.a.createElement(S,null)},O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Articles List"),o.a.createElement(y,{articles:A}))};function M(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",null,o.a.createElement("ul",{class:"menu"},o.a.createElement("li",null,o.a.createElement(u.b,{to:"/"},"Home"),o.a.createElement(u.b,{to:"/articles-list"},"Articles"),o.a.createElement(u.b,{to:"/about"},"About")))))}a(38);var J=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(M,null),o.a.createElement("div",{id:"page-body"},o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:h}),o.a.createElement(d.a,{exact:!0,path:"/about",component:p}),o.a.createElement(d.a,{exact:!0,path:"/article/:name",component:j}),o.a.createElement(d.a,{exact:!0,path:"/articles-list",component:O}),o.a.createElement(d.a,{component:S})))))}}]),a}(n.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.73b0b2a3.chunk.js.map