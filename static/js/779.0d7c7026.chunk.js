"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{497:function(n,t,r){var e=r(184);t.Z=function(n){var t=n.message;return(0,e.jsx)("h2",{children:t})}},779:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e,c=r(439),a=r(874),u=r(791),i=r(168),o=r(444).ZP.blockquote(e||(e=(0,i.Z)(["\n  font-style: italic;\n  text-align: center;\n  p {\n    margin-top: 12px;\n  }\n  cite {\n    font-style: normal;\n    font-weight: 700;\n  }\n"]))),s=r(689),f=r(497),p=r(184),h=function(){var n=(0,s.UO)().movieId,t=(0,u.useState)([]),r=(0,c.Z)(t,2),e=r[0],i=r[1],h=(0,u.useState)(!1),v=(0,c.Z)(h,2),d=v[0],l=v[1];return(0,u.useEffect)((function(){try{(0,a.tx)(n).then((function(n){return i(n)}))}catch(t){l(!0)}}),[n]),(0,p.jsx)(p.Fragment,{children:d?(0,p.jsx)(f.Z,{message:"Something went wrong..."}):(0,p.jsx)(p.Fragment,{children:e.length>0?(0,p.jsx)("ul",{children:e.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,p.jsx)("li",{children:(0,p.jsxs)(o,{children:[(0,p.jsxs)("cite",{children:["Author: ",r]}),(0,p.jsx)("p",{children:e})]})},t)}))}):(0,p.jsx)("p",{children:"Review not found"})})})}},874:function(n,t,r){r.d(t,{Df:function(){return s},Pg:function(){return f},V0:function(){return v},tx:function(){return h},zL:function(){return p}});var e=r(861),c=r(757),a=r.n(c),u=r(912),i="https://api.themoviedb.org",o="520d2e464644c0f1097ff46b301f91b7",s=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/3/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/3/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/3/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.0d7c7026.chunk.js.map