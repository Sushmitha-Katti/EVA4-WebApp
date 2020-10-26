_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"2mvg":function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),r=t("TSYQ"),s=t.n(r),c=t("q1tI"),i=t.n(c),u=t("17x9"),o=t.n(u),d=t("vUet"),m=(o.a.string,o.a.bool,o.a.bool,o.a.bool,o.a.bool,i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.fluid,u=e.rounded,o=e.roundedCircle,m=e.thumbnail,f=Object(l.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(d.a)(t,"img");var g=s()(c&&t+"-fluid",u&&"rounded",o&&"rounded-circle",m&&t+"-thumbnail");return i.a.createElement("img",Object(n.a)({ref:a},f,{className:s()(r,g)}))})));m.displayName="Image",m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},a.a=m},VRjx:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("tXcZ"),s=t("MbLX"),c=t("o0o1"),i=t.n(c),u=t("HaE+"),o=t("vDqi"),d=t.n(o),m=t("cb0F"),f=t("7vrA"),g=t("3Z9Z"),b=t("cWnB"),p=t("T/rR"),h=t("JI6e"),w=t("QojX"),v=t("2mvg"),j=l.a.createElement,x=function(){d.a.defaults.headers.post["Content-Type"]="multipart/form-data",d.a.defaults.headers.post.Accept="application/json";var e=Object(n.useState)(""),a=e[0],t=e[1],r=Object(n.useState)("Please select an image"),s=r[0],c=r[1],o=Object(n.useState)(!1),x=o[0],N=o[1],y=Object(n.useState)(0),_=(y[0],y[1]),k=Object(n.useState)({}),E=k[0],O=k[1],I=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),(t=new FormData).append("file",a),e.next=6,d.a.post("".concat(m.j),t,{crossDomain:!0});case 6:n=e.sent,O(n.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),O({}),alert(JSON.stringify(e.t0)),console.log(e.t0);case 15:N(!1),setTimeout((function(){_(0)}),5e3);case 17:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return j(l.a.Fragment,null,j(f.a,null,j("h1",{style:{textAlign:"center"}},"Variational Auto Encoders"),j("br",null),j("div",{style:{textAlign:"center"}},j("p",null,j("strong",null,"This is a small VAE which can reconstruct left facing Indian car images with a white background."))),j("br",null),j(g.a,{className:"justify-content-md-center"},j(b.a,{variant:"dark",className:"mt-5",hidden:!x,disabled:!0,block:!0},j(p.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," ","Loading...")),j(g.a,{className:"justify-content-md-center"},j(h.a,{xs:6},j(w.a,null,j(w.a.Group,{as:g.a},j(w.a.Label,null,j("h5",null,j("strong",null,"Select Image"))),j(w.a.File,{custom:!0},j(w.a.File.Input,{onChange:function(e){e.target.files.length>=1?(t(e.target.files[0]),c(e.target.files[0].name)):c("Please select an Image")},accept:".jpg,.png,.jpeg"}),j(w.a.File.Label,{"data-browse":"Browse"},s))),j(g.a,null,j(h.a,{md:6,className:"mx-auto",style:{textAlign:"center"}},a.name&&j(v.a,{src:URL.createObjectURL(a),style:{width:"100%"},className:"mx-auto mt-5",rounded:!0,fluid:!0})),j(h.a,{md:6,className:"mx-auto",style:{textAlign:"center"}},E.data&&j("img",{src:"data:image/jpeg;base64,".concat(E.data),style:{width:"100%"},className:"mx-auto mt-5",rounded:!0,fluid:!0}))),j("br",null),j(g.a,null,j(b.a,{variant:"dark",className:"mx-auto shadow-lg",size:"lg",onClick:function(){return I()},disabled:void 0===a.name},"Reconstruct Image!")))))))},N=l.a.createElement;a.default=function(){return N("div",null,N(r.a,{title:"Vae"}),N(s.a,{active:"vae"}),N(x,null))}},kVhP:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vae",function(){return t("VRjx")}])}},[["kVhP",0,2,1,3,4]]]);