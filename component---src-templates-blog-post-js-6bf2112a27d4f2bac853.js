(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(26);var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(56),l=a(163),d=a(160),c=a(161),u=a(159),A=a(171),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),o.a.createElement("main",null,o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-.8)})},e.frontmatter.date," • "+Object(A.a)(e.timeToRead))),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("nav",null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(s.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(s.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))},t}(o.a.Component);t.default=f;var p="861328857"},159:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(168),i=a.n(r),n=a(169),o=a.n(n);a(153);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"p code":{fontSize:"1.1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1.1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8",fontSize:"1.1rem"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},160:function(e,t,a){"use strict";a(26);var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(56),l=a(159),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textitle)"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:0,height:42,lineHeight:"2.625rem"}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"rgb(255, 167, 196)"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},o.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e),o.a.createElement("main",null,i))},t}(o.a.Component);t.a=d},161:function(e,t,a){"use strict";var r=a(162),i=a(0),n=a.n(i),o=a(1),s=a.n(o),l=a(170),d=a.n(l);function c(e){var t=e.image,a=e.slug,i=e.description,o=e.lang,s=void 0===o?"zh-Hans":o,l=e.meta,c=e.keywords,u=e.title,A=r.data.site.siteMetadata,f=i||A.description,p=t?A.siteUrl+"/"+t:null,h=""+A.siteUrl+a;return n.a.createElement(d.a,{htmlAttributes:{lang:s},title:u,titleTemplate:"%s | "+A.title,meta:[{name:"description",content:f},{property:"og:url",content:h},{property:"og:title",content:u||A.title},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.author.twitter},{name:"twitter:title",content:u||A.title},{name:"twitter:description",content:f}].concat(p?[{property:"og:image",content:p},{name:"twitter:image",content:p}]:[]).concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(l)})}c.defaultProps={meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Cube Blog",author:"memory",description:"A Personal blog by mingrui.",siteUrl:"https://memory9.github.io/",social:{twitter:"memory9"}}}}}},163:function(e,t,a){"use strict";a(164);var r=a(166),i=a(0),n=a.n(i),o=a(56),s=a(167),l=a.n(s),d=a(159);var c="2612972255";t.a=function(){return n.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"这个博客用于记录我个人所读所思，前端开发相关。"))},data:r})}},164:function(e,t,a){"use strict";a(165)("fixed",function(e){return function(){return e(this,"tt","","")}})},165:function(e,t,a){var r=a(12),i=a(19),n=a(20),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},166:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAfWmcs9EXNhAH//EABoQAAICAwAAAAAAAAAAAAAAAAERABASICH/2gAIAQEAAQUCaDdEOY90/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABUQAQEAAAAAAAAAAAAAAAAAACAR/9oACAEBAAY/AhT/AP/EABsQAAEEAwAAAAAAAAAAAAAAABEAASFBECBx/9oACAEBAAE/IRkTN6vAATDJev8A/9oADAMBAAIAAwAAABBI1/8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/EBRMf//EABcRAQEBAQAAAAAAAAAAAAAAAAERABD/2gAIAQIBAT8QWJr3/8QAGhABAQADAQEAAAAAAAAAAAAAAREAEDEhYf/aAAgBAQABPxASVMMQQPF5j3DuZ7biP6sT6SO5r//Z",width:50,height:50,src:"/static/d6aeed6b5cb0b6aa6a94d75cdb4f182e/c15d6/profile-pic.jpg",srcSet:"/static/d6aeed6b5cb0b6aa6a94d75cdb4f182e/c15d6/profile-pic.jpg 1x,\n/static/d6aeed6b5cb0b6aa6a94d75cdb4f182e/43c20/profile-pic.jpg 1.5x,\n/static/d6aeed6b5cb0b6aa6a94d75cdb4f182e/da97e/profile-pic.jpg 2x,\n/static/d6aeed6b5cb0b6aa6a94d75cdb4f182e/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"memory"}}}}},167:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(36)),s=r(a(77)),l=r(a(78)),d=r(a(0)),c=r(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+o+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,E=e.Tag,v=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,w=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:S?1:0,transition:w?"opacity "+y+"ms":"none"},s),B="boolean"==typeof b?"lightgray":b,R={transitionDelay:y+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},w&&R,s,A),x={title:t,alt:this.state.isVisible?"":a,style:L,className:f};if(p){var I=p;return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),B&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&R)}),I.base64&&d.default.createElement(g,(0,l.default)({src:I.base64},x)),I.tracedSVG&&d.default.createElement(g,(0,l.default)({src:I.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(g,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},I))}}))}if(h){var O=h,Q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete Q.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},B&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:B,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},w&&R)}),O.base64&&d.default.createElement(g,(0,l.default)({src:O.base64},x)),O.tracedSVG&&d.default.createElement(g,(0,l.default)({src:O.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(g,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},O))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=b;t.default=v},171:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(172);function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}},172:function(e,t,a){var r=a(12);r(r.P,"Array",{fill:a(173)}),a(37)("fill")},173:function(e,t,a){"use strict";var r=a(27),i=a(76),n=a(15);e.exports=function(e){for(var t=r(this),a=n(t.length),o=arguments.length,s=i(o>1?arguments[1]:void 0,a),l=o>2?arguments[2]:void 0,d=void 0===l?a:i(l,a);d>s;)t[s++]=e;return t}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6bf2112a27d4f2bac853.js.map