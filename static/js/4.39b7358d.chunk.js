(this.webpackJsonpWolfy=this.webpackJsonpWolfy||[]).push([[4],{50:function(n,e,r){"use strict";var t=r(2),o=r(3);function a(){var n=Object(t.a)(["\n    padding:10px;\n    background: #fff;\n    border-radius:5px;\n    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.2);\n"]);return a=function(){return n},n}e.a=o.a.div(a())},58:function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),a=r(2),u=r(3),c=r(50);function i(){var n=Object(a.a)(["\n    padding: 20px;\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    grid-column:1;\n    grid-row:2/4;\n"]);return i=function(){return n},n}var d=Object(u.a)(c.a)(i());function f(){var n=Object(a.a)(["\n    list-style:none;\n"]);return f=function(){return n},n}var l=u.a.ul(f());function p(){var n=Object(a.a)(["\npadding:5px;\nmargin:10px;\nfont-weight:bold;\ncursor: pointer;\nfont-size:18px;\ncolor:#676767;\n&:hover{\n    color:#6ed9f5;\n    text-decoration-style:solid ;\n}\n"]);return p=function(){return n},n}var x=u.a.li(p());function b(n){var e=n.department,r=n.departmentSelected;return o.a.createElement(x,{onClick:function(){return r(e.id)}},e.name)}var s=r(17);function m(){var n=Object(a.a)(["\n    flex:none;\n    width:70%;\n    height:auto;\n    border: solid 2px #6ed9f5;\n    background-color: #ffffff;\n    border-radius:0px;\n    border-top-left-radius:25px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n"]);return m=function(){return n},n}var g=Object(u.a)(s.a)(m());function v(){var n=Object(a.a)(["\n\n    margin:auto;\n    display:flex;\n\n"]);return v=function(){return n},n}var h=u.a.div(v());function E(){var n=Object(a.a)(["\n\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n    width:30%;\n    border: solid 2px #6ed9f5;\n    background-color: #6ed9f5;\n    border-bottom-right-radius:25px;\n    color:#fff;\n    padding:10px 5px;\n    text-align:left;\n    font-weight:bold;\n    font-size:14px;\n    text-shadow:0 3px 6px rgba(0, 0, 0, 0.4);\n    outline:none;\n    text-align:center;\n    cursor: pointer;\n"]);return E=function(){return n},n}var w=u.a.button(E());function j(n){var e=n.PromoCodeEntered,r=o.a.createRef();return o.a.createElement(h,null,o.a.createElement(g,{ref:r,placeholder:"Enter you Promo Code here"}),o.a.createElement(w,{onClick:function(){return e(r.current.value)}},"Get promo"))}function k(n){var e=n.departments,r=n.PromoCodeEntered,t=n.departmentSelected;return o.a.createElement(d,null,o.a.createElement("h2",null," Products Categories "),o.a.createElement(l,null,e.map((function(n){return o.a.createElement(b,{departmentSelected:t,key:n.id,department:n})}))),o.a.createElement(j,{PromoCodeEntered:r}))}r.d(e,"default",(function(){return k}))}}]);
//# sourceMappingURL=4.39b7358d.chunk.js.map