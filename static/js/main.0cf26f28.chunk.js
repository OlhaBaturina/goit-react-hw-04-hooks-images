(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2IfEd",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1B6tK"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3mm2g",Modal:"Modal_Modal__1QGg0"}},25:function(e,t,a){},26:function(e,t,a){e.exports={ImageGallery:"ImageGalery_ImageGallery__K0Xqx"}},28:function(e,t,a){e.exports={Loader:"Loader_Loader__3MNsh"}},29:function(e,t,a){e.exports={Button:"Button_Button__3EAvi"}},34:function(e,t,a){},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__ZFt-X",SearchForm:"Searchbar_SearchForm__16Edu",SearchForm_button:"Searchbar_SearchForm_button__2V8mL",SearchForm_button_label:"Searchbar_SearchForm_button_label__1-t5P",SearchForm_input:"Searchbar_SearchForm_input__2uE8y"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=(a(34),a(10)),l=a.n(s),i=a(14),u=a(24),m=a(4),b=a(15),j=(a(36),a(25)),h=a.n(j),d=a(6),g=a.n(d),p=a(1);var _=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(m.a)(a,2),r=c[0],o=c[1];return Object(p.jsx)("header",{className:g.a.Searchbar,children:Object(p.jsxs)("form",{className:g.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(p.jsx)("button",{type:"submit",className:g.a.SearchForm_button,children:Object(p.jsx)("span",{className:g.a.SearchForm_button_label,children:"Search"})}),Object(p.jsx)("input",{className:g.a.SearchForm_input,value:r,onChange:function(e){o(e.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},f=a(26),O=a.n(f),x=a(11),S=a.n(x),v=function(e){var t=e.image,a=e.tags,n=e.onModal,c=e.largeImageURL;return Object(p.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(p.jsx)("img",{className:S.a.ImageGalleryItem_image,src:t,alt:a,onClick:function(){return n(c)}})})};v.defaultProps={images:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png",tags:""};var y=v,I=function(e){var t=e.images,a=e.onImgClick;return Object(p.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.largeImageURL,c=e.webformatURL,r=e.tags;return Object(p.jsx)(y,{image:c,tags:r,largeImageURL:n,onModal:a},t)}))})},w=a(27),k=a.n(w),L=a(28),F=a.n(L),N=function(){return Object(p.jsx)("div",{className:F.a.Loader,children:Object(p.jsx)(k.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80,timeout:3e3})})},G=a(29),E=a.n(G),M=function(e){var t=e.text,a=e.onLoadClick;return Object(p.jsx)("button",{className:E.a.Button,type:"button",onClick:a,children:t})},C=a(12),B=a.n(C),R=document.querySelector("#modal-root");var U=function(e){var t=e.closeModal,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){return"Escape"===e.code&&t()};return Object(r.createPortal)(Object(p.jsx)("div",{className:B.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(p.jsx)("div",{className:B.a.Modal,children:a})}),R)},T=a(13),q=a.n(T);q.a.defaults.baseURL="https://pixabay.com/api/";var P=function(e,t){return q.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&per_page=").concat(12,"&key=").concat("21973303-2099b25a108053c1f3c237a34","&page=").concat(t)).then((function(e){return e.data.hits}))};function A(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),o=Object(m.a)(r,2),s=o[0],j=o[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),f=g[0],O=g[1],x=Object(n.useState)(!1),S=Object(m.a)(x,2),v=S[0],y=S[1],w=Object(n.useState)(!1),k=Object(m.a)(w,2),L=k[0],F=k[1],G=Object(n.useState)(null),E=Object(m.a)(G,2),C=E[0],B=E[1],R=Object(n.useState)(1),T=Object(m.a)(R,2),q=T[0],A=T[1],D=Object(n.useState)([]),J=Object(m.a)(D,2),K=J[0],X=J[1];Object(n.useEffect)((function(){f&&z()}),[f]);var z=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.prev=1,e.next=4,P(f,s);case 4:t=e.sent,console.log(t),c((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))})),X(t),j(s+1),F(!1),B(null),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),B(e.t0.response),F(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:h.a.App,children:[Object(p.jsx)(b.a,{}),Object(p.jsx)(_,{onSubmit:function(e){O(e.trim()),j(1),c([]),B(null)}}),C?b.b.error("Something went wrong error: ".concat(C)):Object(p.jsx)(I,{images:a,onImgClick:function(e){y(!0),A(e)}}),L&&Object(p.jsx)(N,{}),K.length>=12&&Object(p.jsx)(M,{text:"Load more...",onLoadClick:z}),v&&Object(p.jsx)(U,{closeModal:function(){y(!1),A("")},children:Object(p.jsx)("img",{src:q,alt:"img"})})]})}o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.0cf26f28.chunk.js.map