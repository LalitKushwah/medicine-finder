(this["webpackJsonpmedicine-finder"]=this["webpackJsonpmedicine-finder"]||[]).push([[1],{101:function(a,e,l){var n={"./ion-icon.entry.js":[217,57]};function r(a){if(!l.o(n,a))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[a],r=e[0];return l.e(e[1]).then((function(){return l(r)}))}r.keys=function(){return Object.keys(n)},r.id=101,a.exports=r},109:function(a,e,l){},129:function(a,e,l){},159:function(a,e,l){},170:function(a,e,l){},171:function(a,e,l){"use strict";l.r(e);var n,r,i=l(0),t=l.n(i),u=l(30),o=l.n(u),b=l(25),s=l(4),c=l(80),d=l(81),h=l(16),v=(l(109),l(1)),j=function(a){var e=a.address,l=a.city,n=a.distributorID,r=a.distributorName;a.medicineName,a.phoneNumber,a.state;return Object(v.jsxs)(s.h,{lines:"none",className:"distributor-item",routerLink:"/message/".concat(n),detail:!1,children:[Object(v.jsx)("div",{className:"store-icon",children:Object(v.jsx)("img",{src:"assets/medical-cross.svg",alt:""})}),Object(v.jsxs)(s.i,{className:"ion-text-wrap",children:[Object(v.jsx)("h2",{children:r}),Object(v.jsx)("h3",{children:l}),Object(v.jsx)("p",{children:e})]})]})},m=[],g=l(82),p=l.n(g),O={API:{BASEURL:"https://backend.coviconnect.in/api",fetchDistributors:"/distributors"}},x=l(50),y=l(89),f=l(51),w=f.a.div(n||(n=Object(x.a)(["\n  padding: 10px;\n  line-height: 1.2;\n"]))),B=function(a){var e=Object(i.useState)({showPopover:!1,event:void 0}),l=Object(h.a)(e,2),n=l[0],r=l[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(s.n,{cssClass:"my-custom-class",event:n.event,isOpen:n.showPopover,onDidDismiss:function(){return r({showPopover:!1,event:void 0})},children:Object(v.jsx)(w,{children:Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:a.content}})})}),Object(v.jsx)(y.a,{style:{paddingRight:"-5px"},onClick:function(a){a.persist(),r({showPopover:!0,event:a})}})]})},k=(l(129),{city:[{label:"Ahmedabad",value:"Ahmedabad"},{label:"Ahmednagar",value:"Ahmednagar"},{label:"Akluj",value:"Akluj"},{label:"Akola",value:"Akola"},{label:"Alwar",value:"Alwar"},{label:"Ambala",value:"Ambala"},{label:"Ambala City",value:"Ambala City"},{label:"Amgaon",value:"Amgaon"},{label:"Amravati",value:"Amravati"},{label:"Amritsar",value:"Amritsar"},{label:"Anand",value:"Anand"},{label:"Andheri West",value:"Andheri West"},{label:"Attingal",value:"Attingal"},{label:"Aurangabad",value:"Aurangabad"},{label:"Aurangpura",value:"Aurangpura"},{label:"Aurngabad",value:"Aurngabad"},{label:"Bangalore",value:"Bangalore"},{label:"Baramati",value:"Baramati"},{label:"Bardoli",value:"Bardoli"},{label:"Baroda",value:"Baroda"},{label:"Barshi",value:"Barshi"},{label:"Bathinda",value:"Bathinda"},{label:"Beed",value:"Beed"},{label:"Belgaum",value:"Belgaum"},{label:"Betul",value:"Betul"},{label:"Bhandara",value:"Bhandara"},{label:"Bharuch",value:"Bharuch"},{label:"Bhavnagar",value:"Bhavnagar"},{label:"Bhayander West",value:"Bhayander West"},{label:"Bhiwandi",value:"Bhiwandi"},{label:"Bhopal",value:"Bhopal"},{label:"Bhubaneswar",value:"Bhubaneswar"},{label:"Bhuj",value:"Bhuj"},{label:"Bhusawal",value:"Bhusawal"},{label:"Bilaspur",value:"Bilaspur"},{label:"Bilaspur",value:"Bilaspur"},{label:"Bilimora",value:"Bilimora"},{label:"Botad",value:"Botad"},{label:"Buldhana",value:"Buldhana"},{label:"Byculla",value:"Byculla"},{label:"Calicut",value:"Calicut"},{label:"Chandigarh",value:"Chandigarh"},{label:"Chandrapur",value:"Chandrapur"},{label:"Chennai",value:"Chennai"},{label:"Chinchwad",value:"Chinchwad"},{label:"Chiplun",value:"Chiplun"},{label:"Cochin",value:"Cochin"},{label:"Coimbatore",value:"Coimbatore"},{label:"Cuttack",value:"Cuttack"},{label:"Dahisar (E)",value:"Dahisar (E)"},{label:"Dehradun",value:"Dehradun"},{label:"Delhi",value:"Delhi"},{label:"Dewas",value:"Dewas"},{label:"Dhanera",value:"Dhanera"},{label:"Dhar",value:"Dhar"},{label:"Dhule",value:"Dhule"},{label:"Dindigul",value:"Dindigul"},{label:"Durg",value:"Durg"},{label:"Ernakulam",value:"Ernakulam"},{label:"Faridabad",value:"Faridabad"},{label:"Fatehabad",value:"Fatehabad"},{label:"Gandhinagar",value:"Gandhinagar"},{label:"Ghaziabad",value:"Ghaziabad"},{label:"Gondia",value:"Gondia"},{label:"Gorakhpur",value:"Gorakhpur"},{label:"Guntur",value:"Guntur"},{label:"Gurgaon",value:"Gurgaon"},{label:"Gurugram",value:"Gurugram"},{label:"Guwahati",value:"Guwahati"},{label:"Gwalior",value:"Gwalior"},{label:"Haldwani",value:"Haldwani"},{label:"Himatnagar",value:"Himatnagar"},{label:"Hisar",value:"Hisar"},{label:"Hubli",value:"Hubli"},{label:"Hyderabad",value:"Hyderabad"},{label:"Idar",value:"Idar"},{label:"Indore",value:"Indore"},{label:"Jabalpur",value:"Jabalpur"},{label:"Jaipur",value:"Jaipur"},{label:"Jalandhar",value:"Jalandhar"},{label:"Jalgaon",value:"Jalgaon"},{label:"Jalgaon 431 001",value:"Jalgaon 431 001"},{label:"Jalna",value:"Jalna"},{label:"Jammu",value:"Jammu"},{label:"Jamnagar",value:"Jamnagar"},{label:"Jharsuguda",value:"Jharsuguda"},{label:"Jodhpur",value:"Jodhpur"},{label:"Junagadh",value:"Junagadh"},{label:"Kadi",value:"Kadi"},{label:"Kalamb",value:"Kalamb"},{label:"Kalol",value:"Kalol"},{label:"Kalyan",value:"Kalyan"},{label:"Kamptee",value:"Kamptee"},{label:"Kanpur",value:"Kanpur"},{label:"Kedgaon",value:"Kedgaon"},{label:"Khamgaon",value:"Khamgaon"},{label:"Kharghar",value:"Kharghar"},{label:"Kolhapur",value:"Kolhapur"},{label:"Kolkata",value:"Kolkata"},{label:"Kota",value:"Kota"},{label:"Kottayam",value:"Kottayam"},{label:"Kurukshetra",value:"Kurukshetra"},{label:"Latur",value:"Latur"},{label:"Lucknow",value:"Lucknow"},{label:"Ludhiana",value:"Ludhiana"},{label:"Madurai",value:"Madurai"},{label:"Malad (W)",value:"Malad (W)"},{label:"Malegaon",value:"Malegaon"},{label:"Malkajgiri",value:"Malkajgiri"},{label:"Manchar",value:"Manchar"},{label:"Mandsaur",value:"Mandsaur"},{label:"Mangalagiri",value:"Mangalagiri"},{label:"Mangalore",value:"Mangalore"},{label:"Margao",value:"Margao"},{label:"Miraj",value:"Miraj"},{label:"Moga",value:"Moga"},{label:"Mumbai",value:"Mumbai"},{label:"Nadiad",value:"Nadiad"},{label:"Nagercoil",value:"Nagercoil"},{label:"Nagpur",value:"Nagpur"},{label:"Naigaon Cross Road",value:"Naigaon Cross Road"},{label:"Nalasopara ( W )",value:"Nalasopara ( W )"},{label:"Nanded",value:"Nanded"},{label:"Nandurbar",value:"Nandurbar"},{label:"Nashik",value:"Nashik"},{label:"Navi Mumbai",value:"Navi Mumbai"},{label:"Neemuch",value:"Neemuch"},{label:"New Delhi",value:"New Delhi"},{label:"Omerga",value:"Omerga"},{label:"Ongole",value:"Ongole"},{label:"Palanpur",value:"Palanpur"},{label:"Palaspe",value:"Palaspe"},{label:"Pandharpur",value:"Pandharpur"},{label:"Panvel",value:"Panvel"},{label:"Parali Vaijanath",value:"Parali Vaijanath"},{label:"Parbhani",value:"Parbhani"},{label:"Patan",value:"Patan"},{label:"Patiala",value:"Patiala"},{label:"Patna",value:"Patna"},{label:"Pimpri",value:"Pimpri"},{label:"Pune",value:"Pune"},{label:"Pusad",value:"Pusad"},{label:"Raigarh",value:"Raigarh"},{label:"Raipur",value:"Raipur"},{label:"Rajkot",value:"Rajkot"},{label:"Ranchi",value:"Ranchi"},{label:"Ratlam",value:"Ratlam"},{label:"Ratnagiri",value:"Ratnagiri"},{label:"Rohtak",value:"Rohtak"},{label:"Sagar",value:"Sagar"},{label:"Sangamner",value:"Sangamner"},{label:"Sangli",value:"Sangli"},{label:"Sanpada",value:"Sanpada"},{label:"Satara",value:"Satara"},{label:"Secunderabad",value:"Secunderabad"},{label:"Shajapur",value:"Shajapur"},{label:"Shirur",value:"Shirur"},{label:"Siddpur",value:"Siddpur"},{label:"Silvassa",value:"Silvassa"},{label:"Sinner",value:"Sinner"},{label:"Solapur",value:"Solapur"},{label:"Surat",value:"Surat"},{label:"Surendranagar",value:"Surendranagar"},{label:"Tajane Mala",value:"Tajane Mala"},{label:"Tanjore",value:"Tanjore"},{label:"Thane",value:"Thane"},{label:"Thiruvalla",value:"Thiruvalla"},{label:"Thrissur",value:"Thrissur"},{label:"Tirupathi",value:"Tirupathi"},{label:"Tiruvarur",value:"Tiruvarur"},{label:"Trihcy",value:"Trihcy"},{label:"Trivandrum",value:"Trivandrum"},{label:"Udaipur",value:"Udaipur"},{label:"Udgir",value:"Udgir"},{label:"Ujjain",value:"Ujjain"},{label:"Vadodara",value:"Vadodara"},{label:"Vapi",value:"Vapi"},{label:"Varanasi",value:"Varanasi"},{label:"Vasai (W)",value:"Vasai (W)"},{label:"Vellore",value:"Vellore"},{label:"Veraval",value:"Veraval"},{label:"Vijayawada",value:"Vijayawada"},{label:"Viramgam",value:"Viramgam"},{label:"Visakhapatnam",value:"Visakhapatnam"},{label:"Vyara",value:"Vyara"},{label:"Wai",value:"Wai"},{label:"Wardha",value:"Wardha"},{label:"Washim",value:"Washim"},{label:"Yavatmal",value:"Yavatmal"},{label:"Zirakpur",value:"Zirakpur"}],medicine:["Remdesivir"]}),S=l(85),N=l.n(S),A=(l(148),f.a.div(r||(r=Object(x.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n"])))),C=function(){return Object(v.jsx)(A,{children:Object(v.jsx)(N.a,{type:"Grid",color:"#ff1a1a",height:80,width:80})})},D=l(87),P=function(){var a=Object(i.useState)([]),e=Object(h.a)(a,2),l=e[0],n=e[1],r=Object(i.useState)([]),t=Object(h.a)(r,2),u=t[0],o=t[1],b=Object(i.useState)([]),c=Object(h.a)(b,2),g=c[0],x=c[1],y=Object(i.useState)(!1),f=Object(h.a)(y,2),w=f[0],S=f[1],N=function(){S(!0);var a={medicine:"'".concat(u,"'"),city:"'".concat(l.value,"'")};p.a.get("".concat(O.API.BASEURL).concat(O.API.fetchDistributors),{params:a}).then((function(a){var e=a.data.response;x(e),m=e,S(!1)})).catch((function(a){console.error(a),S(!1),x(m)}))};return w?Object(v.jsx)(C,{}):Object(v.jsxs)(s.m,{id:"home-page",children:[Object(v.jsx)(s.g,{mode:"ios",children:Object(v.jsxs)(s.t,{mode:"ios",color:"primary",children:[Object(v.jsx)(s.s,{children:"CoviConnect"}),Object(v.jsx)("section",{slot:"end",style:{marginRight:"10px"},children:Object(v.jsx)(B,{content:'Though we have tried to get data from authenticated sources and verify it as much possible, there was only limited verification we could perform in span of few days. Please report any gaps in information by writing an email to <b><u>data@coviconnect.in</u></b>. If you can help us find, validate, update details to increase data relevance please join our team by providing some details <a href="https://forms.gle/zutbQqjNxdvmXrre7" target="_blank">here</a> (Even we don\'t like filling a form but that just increases convenience).'})})]})}),Object(v.jsxs)(s.f,{fullscreen:!0,children:[Object(v.jsxs)("div",{className:"action_bar",children:[Object(v.jsx)(D.a,{value:l,onChange:function(a){return n(a)},options:k.city,placeholder:"Select city"}),Object(v.jsxs)(s.h,{lines:"none",children:[Object(v.jsx)(s.i,{children:"Medicine"}),Object(v.jsx)(s.q,{value:u,multiple:!1,mode:"ios",cancelText:"Cancel",okText:"Okay",onIonChange:function(a){return o(a.detail.value)},children:k.medicine.map((function(a){return Object(v.jsx)(s.r,{value:a,children:a},a)}))})]}),Object(v.jsx)(s.d,{expand:"block",color:"primary",fill:"solid",mode:"ios",onClick:function(){return N()},disabled:!l||!u.length,children:"Search Distributor"})]}),g.length>0&&Object(v.jsxs)(s.j,{children:[Object(v.jsx)(s.k,{lines:"inset",children:Object(v.jsxs)(s.i,{children:["Found ",g.length," Distriubtors"]})}),g.map((function(a){return Object(v.jsx)(j,Object(d.a)({},a),a.distributorID)}))]})]})]})},M=l(88);l(159);var _=function(){var a=Object(i.useState)(),e=Object(h.a)(a,2),l=e[0],n=e[1],r=Object(b.e)();return Object(s.C)((function(){var a,e=(a=parseInt(r.id,10),m.find((function(e){return e.distributorID===a})));n(e)})),Object(v.jsxs)(s.m,{id:"view-message-page",children:[Object(v.jsx)(s.g,{mode:"ios",translucent:!0,color:"primary",children:Object(v.jsx)(s.t,{mode:"ios",children:Object(v.jsx)(s.e,{children:Object(v.jsx)(s.c,{text:"Distributor Details",defaultHref:"/home"})})})}),Object(v.jsx)(s.f,{fullscreen:!0,children:l?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(s.h,{lines:"none",children:Object(v.jsxs)(s.i,{className:"ion-text-wrap",children:[Object(v.jsx)("h2",{children:Object(v.jsx)(s.l,{children:"Name"})}),Object(v.jsx)("h3",{children:l.distributorName})]})}),Object(v.jsx)(s.h,{lines:"none",children:Object(v.jsxs)(s.i,{children:[Object(v.jsx)("h2",{children:Object(v.jsx)(s.l,{children:"Medicine"})}),Object(v.jsx)("h3",{children:l.medicineName})]})}),Object(v.jsx)(s.h,{lines:"none",children:Object(v.jsxs)(s.i,{style:{whiteSpace:"normal"},children:[Object(v.jsx)("h2",{children:Object(v.jsx)(s.l,{children:"Address"})}),Object(v.jsx)("h3",{children:l.address})]})}),l.phoneNumber.length&&l.phoneNumber.map((function(a,e){return a&&Object(v.jsxs)(s.h,{lines:"none",onClick:function(){return M.a.callNumber(a,!1)},children:[Object(v.jsxs)(s.i,{children:[Object(v.jsx)("h2",{children:Object(v.jsxs)(s.l,{children:["Contact-",e+1]})}),Object(v.jsx)("h3",{children:a})]}),Object(v.jsx)("a",{href:"tel:".concat(a),children:Object(v.jsx)(s.b,{slot:"end",children:Object(v.jsx)("img",{src:"https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png"})})})]},a)}))]}):Object(v.jsx)("div",{children:"Distributor not found"})})]})},K=(l(160),l(161),l(162),l(163),l(164),l(165),l(166),l(167),l(168),l(169),l(170),function(){return Object(v.jsx)(s.a,{style:{background:"#eff3fd"},children:Object(v.jsx)(c.a,{children:Object(v.jsxs)(s.p,{children:[Object(v.jsx)(b.b,{path:"/",exact:!0,children:Object(v.jsx)(b.a,{to:"/home"})}),Object(v.jsx)(b.b,{path:"/home",exact:!0,children:Object(v.jsx)(P,{})}),Object(v.jsx)(b.b,{path:"/message/:id",children:Object(v.jsx)(_,{})})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=function(a){a&&a instanceof Function&&l.e(58).then(l.bind(null,234)).then((function(e){var l=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,t=e.getTTFB;l(a),n(a),r(a),i(a),t(a)}))};o.a.render(Object(v.jsx)(t.a.StrictMode,{children:Object(v.jsx)(K,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)})),T()},99:function(a,e,l){var n={"./ion-action-sheet.entry.js":[174,5],"./ion-alert.entry.js":[175,6],"./ion-app_8.entry.js":[176,7],"./ion-avatar_3.entry.js":[177,17],"./ion-back-button.entry.js":[178,18],"./ion-backdrop.entry.js":[179,43],"./ion-button_2.entry.js":[180,19],"./ion-card_5.entry.js":[181,20],"./ion-checkbox.entry.js":[182,21],"./ion-chip.entry.js":[183,22],"./ion-col_3.entry.js":[184,44],"./ion-datetime_3.entry.js":[185,10],"./ion-fab_3.entry.js":[186,23],"./ion-img.entry.js":[187,45],"./ion-infinite-scroll_2.entry.js":[188,46],"./ion-input.entry.js":[189,24],"./ion-item-option_3.entry.js":[190,25],"./ion-item_8.entry.js":[191,26],"./ion-loading.entry.js":[192,27],"./ion-menu_3.entry.js":[193,28],"./ion-modal.entry.js":[194,8],"./ion-nav_2.entry.js":[195,14],"./ion-popover.entry.js":[196,9],"./ion-progress-bar.entry.js":[197,29],"./ion-radio_2.entry.js":[198,30],"./ion-range.entry.js":[199,31],"./ion-refresher_2.entry.js":[200,11],"./ion-reorder_2.entry.js":[201,16],"./ion-ripple-effect.entry.js":[202,47],"./ion-route_4.entry.js":[203,32],"./ion-searchbar.entry.js":[204,33],"./ion-segment_2.entry.js":[205,34],"./ion-select_3.entry.js":[206,35],"./ion-slide_2.entry.js":[207,48],"./ion-spinner.entry.js":[208,13],"./ion-split-pane.entry.js":[209,49],"./ion-tab-bar_2.entry.js":[210,36],"./ion-tab_2.entry.js":[211,15],"./ion-text.entry.js":[212,37],"./ion-textarea.entry.js":[213,38],"./ion-toast.entry.js":[214,39],"./ion-toggle.entry.js":[215,12],"./ion-virtual-scroll.entry.js":[216,50]};function r(a){if(!l.o(n,a))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[a],r=e[0];return l.e(e[1]).then((function(){return l(r)}))}r.keys=function(){return Object.keys(n)},r.id=99,a.exports=r}},[[171,3,4]]]);
//# sourceMappingURL=main.685b10bb.chunk.js.map