import{u as e,a as t,c as a,b as r,d as n,C as c,R as l,L as s,e as o,B as m,S as u,f as i,g as d,h as E,P as p}from"./vendor.e4de5330.js";const _=e=>new Promise((t=>setTimeout(t,e))),h=()=>e(),f=t,g=a({name:"products",initialState:{products:{}},reducers:{receivedProducts(e,t){t.payload.forEach((t=>{e.products[t.id]=t}))}}}),{receivedProducts:y}=g.actions;var v=g.reducer;const k=r("cart/checkout",(async(e,t)=>{const a=t.getState().cart.items;return await async function(e){const t=`/checkout-${Object.keys(e).length>0?"success":"error"}.json`;await _(500);const a=await fetch(t,{method:"POST",body:JSON.stringify(e)}),r=await a.json();if(!r.success)throw new Error(r.error);return r}(a)})),N=a({name:"cart",initialState:{items:{},checkoutState:"READY",errorMessage:""},reducers:{addToCart(e,t){e.items[t.payload]?e.items[t.payload]++:e.items[t.payload]=1},removeFromCart(e,t){delete e.items[t.payload]},updateQuantity(e,t){const{id:a,quantity:r}=t.payload;e.items[a]=r}},extraReducers:function(e){e.addCase(k.pending,((e,t)=>{e.checkoutState="LOADING"})),e.addCase(k.fulfilled,((e,t)=>{const{success:a}=t.payload;a?(e.checkoutState="READY",e.items={}):e.checkoutState="ERROR"})),e.addCase(k.rejected,((e,t)=>{e.checkoutState="ERROR",e.errorMessage=t.error.message||""}))}}),{addToCart:C,removeFromCart:R,updateQuantity:b}=N.actions;var S=N.reducer;const j=n((e=>e.cart.items),(e=>{let t=0;for(let a in e)t+=e[a];return t})),O=n((e=>e.cart.items),(e=>e.products.products),((e,t)=>{let a=0;for(let r in e)a+=t[r].price*e[r];return a.toFixed(2)}));var w="_products_1ohc8_1",L="_product_1ohc8_1",x="_caption_1ohc8_59";function A(){const e=h();c.exports.useEffect((()=>{(async function(){return(await fetch("/products.json")).json()})().then((t=>{e(y(t))}))}),[]);const t=f((e=>e.products.products));return l.createElement("main",{className:"page"},l.createElement("ul",{className:w},Object.values(t).map((t=>l.createElement("li",{key:t.id},l.createElement("article",{className:L},l.createElement("figure",null,l.createElement("img",{src:t.imageURL,alt:t.imageAlt}),l.createElement("figcaption",{className:x},t.imageCredit)),l.createElement("div",null,l.createElement("h1",null,t.name),l.createElement("p",null,t.description),l.createElement("p",null,"$",t.price),l.createElement("button",{onClick:()=>e(C(t.id))},"Add to Cart 🛒"))))))))}var P="_link_b1e58_1",T="_text_b1e58_11";function D(){const e=f(j);return l.createElement(s,{to:"/cart",className:P},l.createElement("span",{className:T},"🛒  ",e||"Cart"))}var $="_table_1ns8t_1",B="_checkoutError_1ns8t_39",M="_checkoutLoading_1ns8t_47",F="_total_1ns8t_55",G="_button_1ns8t_63",I="_input_1ns8t_73",Q="_errorBox_1ns8t_83";function q(){const e=h(),t=f((e=>e.products.products)),a=f((e=>e.cart.items)),r=f(O),n=f((e=>e.cart.checkoutState)),c=f((e=>e.cart.errorMessage));const s=o({[$]:!0,[B]:"ERROR"===n,[M]:"LOADING"===n});return l.createElement("main",{className:"page"},l.createElement("h1",null,"Shopping Cart"),l.createElement("table",{className:s},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Product"),l.createElement("th",null,"Quantity"),l.createElement("th",null,"Total"),l.createElement("th",null,"Remove"))),l.createElement("tbody",null,Object.entries(a).map((([a,r])=>l.createElement("tr",{key:a},l.createElement("td",null,t[a].name),l.createElement("td",null,l.createElement("input",{type:"text",className:I,defaultValue:r,onBlur:t=>function(t,a){const r=Number(t.target.value)||0;e(b({id:a,quantity:r}))}(t,a)})),l.createElement("td",null,"$",t[a].price),l.createElement("td",null,l.createElement("button",{onClick:()=>e(R(a)),"aria-label":`Remove ${t[a].name}} from Shopping Cart`},"X")))))),l.createElement("tfoot",null,l.createElement("tr",null,l.createElement("td",null,"Total"),l.createElement("td",null),l.createElement("td",{className:F},"$",r),l.createElement("td",null)))),l.createElement("form",{onSubmit:function(t){t.preventDefault(),e(k())}},"ERROR"===n&&c?l.createElement("p",{className:Q},c):null,l.createElement("button",{className:G,type:"submit"},"Checkout")))}var H={header:"_header_tjltr_1",navLink:"_navLink_tjltr_23"};function W(){return l.createElement(m,null,l.createElement("div",{className:H.app},l.createElement("header",{className:H.header},l.createElement("nav",null,l.createElement(s,{className:H.navLink,to:"/"},"Home"),l.createElement(s,{className:H.navLink,to:"/products"},"Products"),l.createElement(D,null)))),l.createElement(u,null,l.createElement(i,{exact:!0,path:"/"},l.createElement(Y,null)),l.createElement(i,{path:"/products"},l.createElement(A,null)),l.createElement(i,{path:"/cart"},l.createElement(q,null))))}function Y(){return l.createElement("main",{className:"page"},l.createElement("h1",null,"Welcome to the Store"),l.createElement("figure",null,l.createElement("img",{src:"/store.jpg",alt:"A large old storefront",width:"800"}),l.createElement("figcaption",null,"Gary Houston, CC0, via Wikimedia Commons")))}const J=d({reducer:{cart:S,products:v}});E.render(l.createElement(l.StrictMode,null,l.createElement(p,{store:J},l.createElement(W,null))),document.getElementById("root"));