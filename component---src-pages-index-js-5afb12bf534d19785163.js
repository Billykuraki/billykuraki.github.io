(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return g});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(157),c=n.n(s),l=n(156),u=n.n(l),p=n(149),d=n(219),h=n.n(d),m=n(220),f=n.n(m),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.site.siteMetadata.description");return o.a.createElement(p.a,null,o.a.createElement(u.a,null,o.a.createElement("title",null,e),o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("link",{rel:"icon",type:"image/png",href:f.a,sizes:"16x16"})),o.a.createElement("p",null,"Hello. I'm Billy Hsieh."),o.a.createElement("p",null,"I'm an expericed Software Developer who specialezes in Android and web development. In Asus, I built the android app used on the company's Android device. I also developed and maintained the in-house project management system that help developer team to manage and track issues."),o.a.createElement("p",null,"I am really passionate about software develpopent. I will immigrant to the U.S. this year and am currently looking for the new opportunitis in software developer position."),o.a.createElement("img",{src:h.a,alt:e,hight:"600",width:"400"}),o.a.createElement("p",null,"Mickey and I in Fenway Park, Boston, Oct. 2018"))},t}(o.a.Component);t.default=y;var g="3998338720"},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(144),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(145),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var p=n(34);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){"use strict";t.a={twitter:"https://twitter.com/_skris",github:"https://github.com/s-kris",linkedin:"https://www.linkedin.com/in/saikrishnam/",email:null}},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(150),c=n.n(s),l=n(151),u=n.n(l),p=new c.a(u.a);var d=p.rhythm,h=(p.scale,function(){return o.a.createElement("div",{style:{textAlign:"center"}})}),m=n(146),f=(n(147),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},o.a.createElement("div",{style:{width:d(24),maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(m.Link,{to:"/"},"Home"),o.a.createElement(m.Link,{to:"resume"},"Resume")))},t}(i.Component)),y={rootContainer:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:15}},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:y.rootContainer},"Built with ",o.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank"},"GatsbyJS"))},t}(i.Component),A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:d(32),padding:d(1.5)+" "+d(.75)},a=Object.assign({},n,t);return o.a.createElement("div",{style:a},o.a.createElement(h,null),o.a.createElement(f,null),o.a.createElement("br",null),e,o.a.createElement(g,null))},t}(o.a.Component);t.a=A},219:function(e,t,n){e.exports=n.p+"static/boston_mickey-8ead7714d735f484a89ec44105ba9d97.jpg"},220:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeElEQVQ4T63TzyvDYRzA8fezyY/UHP2oxUkclBASc+DgP5Ab0qQcLMmB0yTjQg5kSdndiZbLLoqaKGXEoqT8GO0kzdT26Pt9vtY2Nj+/9T18nuf5vHo+z/N5BOnftKzFjB1JB1BhTF8h8BHDzYQ4Sk4RicAhCyhhAckAYPoAq4E4glXuGWFeRLQBBWjJxWwDtgyJ6cM7hOjSEAXMyhUk9m8mq2UCN+NiUKBqPsyy7UxunBj1ApdcAoZ6qmGsCc7CUJQH/ltw7oGzFfbvYOtSOY4GCEfAc6KHy4IZeY6gUgOsFpjzq4XH/VCzBlNtCksBXsATACRBDYgiyNUA7fddQ7kFHp7B5VdAaSGchhXcboWNYAJ4TQGay2A9oErQyunzwnAdPEVh90YB3VVwEEoFPi1hsRM2L8Bm/aqEpEMcbYTAI+TngJTQ64XJliyAfojGNZrAZDb6LyYhLtWWTUJhRqjHektKjGv8cyP9Syu/I79+TMnN+sPn/AZSPqxvpex3XQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-5afb12bf534d19785163.js.map