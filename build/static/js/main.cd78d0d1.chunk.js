(this["webpackJsonpreact-paginataion"]=this["webpackJsonpreact-paginataion"]||[]).push([[0],{57:function(t,e,a){},64:function(t,e,a){},65:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a(0),i=a.n(c),r=a(9),o=a.n(r),s=(a(57),a(21)),j=a(111),l=a(35),d=a(114),b=a(104),h=a(105),p=a(98),u=a(102),g=a(100),x=a(106),O=a(45),m=a.n(O),f=a(101),v=Object(p.a)((function(t){return{root:{position:"fixed",bottom:t.spacing(2),right:t.spacing(2)}}}));function w(t){var e=t.children,a=t.window,c=v(),i=Object(g.a)({target:a?a():void 0,disableHysteresis:!0,threshold:300});return Object(n.jsx)(f.a,{in:i,children:Object(n.jsx)("div",{onClick:function(t){var e=(t.target.ownerDocument||document).querySelector("#back-to-top-anchor");e&&e.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:c.root,children:e})})}function y(t){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(u.a,{}),Object(n.jsx)(d.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{variant:"h6",children:"Seytech-Pagination"})})}),Object(n.jsx)(b.a,{id:"back-to-top-anchor"}),Object(n.jsx)(w,Object(l.a)(Object(l.a)({},t),{},{children:Object(n.jsx)(x.a,{color:"primary",size:"small","aria-label":"scroll back to top",children:Object(n.jsx)(m.a,{})})}))]})}var k=a(113),C=Object(p.a)((function(t){return{root:{"& > *":{marginTop:t.spacing(5),marginBottom:t.spacing(5)}}}}));function S(t){var e=C(),a=t.handlePageChange,c=t.totalPages;return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(k.a,{count:c,variant:"outlined",shape:"rounded",onChange:function(t,e){return a(t,e)}})})}var N=a(107),P=a(112),T=a(109),_=a(66),F=a(108),B=Object(p.a)((function(t){return{root:{marginTop:"20px"},item:{width:"200px"}}}));function I(t){var e=B();return Object(n.jsx)(N.a,{className:e.root,spacing:2,children:Object(n.jsx)(N.a,{item:!0,xs:12,children:Object(n.jsx)(N.a,{container:!0,justify:"center",spacing:3,noWrap:!0,children:t.card.known_for.map((function(t){return Object(n.jsxs)(N.a,{item:!0,className:e.item,children:[Object(n.jsx)("img",{src:"".concat("http://image.tmdb.org/t/p/w185").concat(t.poster_path),alt:t.original_title,style:{boxShadow:"0 2px 14px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset"}}),Object(n.jsxs)(h.a,{paragraph:!0,variant:"overline",color:"textPrimary",children:[Object(n.jsx)("strong",{children:"Title: "}),t.original_title]}),Object(n.jsxs)(h.a,{color:"primary",variant:"overline",children:[Object(n.jsx)("strong",{children:"Date: "}),t.release_date]})]},t.id)}))})})})}var L=Object(p.a)((function(t){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}}}));function D(t){var e=L(),a=t.card,c=i.a.useState(!1),r=Object(s.a)(c,2),o=r[0],j=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{variant:"outlined",color:"primary",onClick:function(){j(!0)},style:{width:"100%",marginTop:"10px"},children:a.name}),Object(n.jsx)(P.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:o,onClose:function(){j(!1)},closeAfterTransition:!0,BackdropComponent:T.a,BackdropProps:{timeout:500},children:Object(n.jsx)(_.a,{in:o,children:Object(n.jsx)("div",{className:e.paper,children:Object(n.jsx)(I,{card:a})})})})]})}var z=a(110),E=Object(p.a)((function(t){return{root:{flexGrow:1,marginTop:"20px"},img:{width:"100%",height:"100%",boxSizing:"border- box"}}}));function J(t){var e=t.isLoading,a=E();return Object(n.jsx)(N.a,{container:!0,className:a.root,spacing:2,children:Object(n.jsx)(N.a,{item:!0,xs:12,children:Object(n.jsx)(N.a,{container:!0,justify:"center",spacing:3,children:t.data.map((function(t){return Object(n.jsx)(N.a,{item:!0,children:e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(z.a,{variant:"rect",width:210,height:250,animation:"wave"}),Object(n.jsx)(z.a,{animation:"wave",height:50})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"movie-pic box",children:Object(n.jsx)("img",{className:a.img,src:"".concat("http://image.tmdb.org/t/p/w185").concat(t.profile_path),alt:t.title})}),Object(n.jsx)(D,{card:t})]})},t.id)}))})})})}a(64);var q=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),a=e[0],r=e[1],o=Object(c.useState)(1),l=Object(s.a)(o,2),d=l[0],b=l[1],h=Object(c.useState)(0),p=Object(s.a)(h,2),u=p[0],g=p[1],x=i.a.useState(!0),O=Object(s.a)(x,2),m=O[0],f=O[1];Object(c.useEffect)((function(){v(d)}),[]);var v=function(t){f(!0),fetch("https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=".concat(t)).then((function(t){return t.json()})).then((function(t){r(t.results),g(t.total_pages)})),setTimeout((function(){f(!1)}),1e3)};return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(y,{}),Object(n.jsx)(S,{handlePageChange:function(t,e){b(e),v(e)},totalPages:u,page:d}),Object(n.jsx)(J,{data:a,isLoading:m,setIsLoading:f,overflow:"visible"})]})},A=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),i(t),r(t)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),A()}},[[65,1,2]]]);
//# sourceMappingURL=main.cd78d0d1.chunk.js.map