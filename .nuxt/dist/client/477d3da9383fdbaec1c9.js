(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{212:function(t,e,r){var content=r(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("556c1ea8",content,!0,{sourceMap:!1})},224:function(t,e,r){"use strict";var n=r(212);r.n(n).a},225:function(t,e,r){(e=r(31)(!1)).push([t.i,".hero-container[data-v-4c32c98c]{position:relative;text-align:center;color:#fff}.hero-text[data-v-4c32c98c]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:30px}@media screen and (max-width:768px){.hero-text[data-v-4c32c98c]{font-size:1.2em;letter-spacing:10px}}",""]),t.exports=e},239:function(t,e,r){"use strict";r.r(e);r(54),r(18),r(19),r(12),r(43);var n=r(20),o=(r(9),r(2)),c=r(44);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"BookPackage",middleware:["auth"],fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.GET_PACKAGE(t.$route.params.id);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.response.data.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},data:function(){return{form:{},loading:!1}},computed:m(m({},Object(c.c)({PACKAGE:"packages/PACKAGE",TRANSACTION:"transactions/TRANSACTION"})),{},{item:function(){return this.PACKAGE.data}}),methods:m(m({},Object(c.b)({GET_PACKAGE:"packages/GET_PACKAGE",CREATE_TRANSACTION:"transactions/CREATE_TRANSACTION"})),{},{clearForm:function(){Object.assign(this.$data,this.$options.data())},createTransaction:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.form.package_id=t.$route.params.id,e.prev=2,e.next=5,t.CREATE_TRANSACTION(t.form);case 5:return e.next=7,t.clearForm();case 7:return e.next=9,t.$swal({icon:"success",title:"Created! ",text:"Please proceed to fill your booking details. Booking number: ".concat(t.TRANSACTION.data.transaction_number),showConfirmButton:!0});case 9:t.$router.push("/transactions/".concat(t.TRANSACTION.data.id)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),t.$swal({icon:"error",title:"Oops! Something wrong.",text:"Please try again later.",showConfirmButton:!1,timerProgressBar:!0,timer:5e3});case 15:return e.prev=15,t.loading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})))()}})},f=(r(224),r(10)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.PACKAGE.data&&!t.$fetchState.pending?r("div",[r("section",{staticClass:"ceo-gmbh-welcome-area bg-img bg-overlay"},[r("div",{staticClass:"hero-container"},[r("img",{staticClass:"img-fluid",staticStyle:{"max-height":"400px","object-fit":"cover",filter:"brightness(0.8)"},attrs:{src:t.item.image_url,width:"100%",alt:t.item.name+"-package",loading:"lazy"}}),t._v(" "),r("h1",{staticClass:"hero-text text-uppercase display-1 font-weight-bold text-white"},[t._v("\n          "+t._s(t.item.name)+"\n        ")])])]),t._v(" "),r("div",{staticClass:"dorne-contact-area d-md-flex",attrs:{id:"contact"}},[r("div",{staticClass:"contact-form-area equal-height mb-0"},[r("div",{staticClass:"contact-text"},[r("h4",[t._v("Book section for "+t._s(t.item.name))]),t._v(" "),r("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac\n            nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue sit\n            amet vestibulum. Proin tempus lacus porta lorem blandit aliquam\n            eget quis ipsum. Vivamus accumsan consequat ligula non volutpat.\n            Sed mollis orci non cursus vestibulum. Pellentesque vitae est a\n            augue laoreet venenatis sed eu felis. Sed cursus magna nec turpis\n            ullamcorper, eget rutrum felis egestas. Nunc odio ex, fermentum\n            efficitur nunc vitae, efficitur hendrerit diam. Lorem ipsum dolor\n            sit amet, consectetur.\n          ")]),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"ceo-gmbh-map-area equal-height"},[r("div",{staticClass:"container"},[t._m(1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.createTransaction(e)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"book-package-id"}},[t._v("Package\n                  ")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{staticClass:"form-control-plaintext text-uppercase",attrs:{id:"book-package-id",type:"text",readonly:"",required:""},domProps:{value:t.item.name}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"book-adults"}},[t._v("Adults\n                  ")]),t._v(" "),r("div",{staticClass:"col-sm-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.adults,expression:"form.adults"}],staticClass:"form-control",attrs:{id:"book-adults",type:"number",min:"0",required:""},domProps:{value:t.form.adults},on:{input:function(e){e.target.composing||t.$set(t.form,"adults",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"book-children"}},[t._v("Children\n                  ")]),t._v(" "),r("div",{staticClass:"col-sm-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.children,expression:"form.children"}],staticClass:"form-control",attrs:{id:"book-children",type:"number",min:"0",required:""},domProps:{value:t.form.children},on:{input:function(e){e.target.composing||t.$set(t.form,"children",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"book-infants"}},[t._v("Infants\n                  ")]),t._v(" "),r("div",{staticClass:"col-sm-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.infants,expression:"form.infants"}],staticClass:"form-control",attrs:{id:"book-infants",type:"number",min:"0"},domProps:{value:t.form.infants},on:{input:function(e){e.target.composing||t.$set(t.form,"infants",e.target.value)}}})])]),t._v(" "),t.loading?r("button",{staticClass:"ceo-gmbh-btn mt-2 mb-5",attrs:{disabled:""}},[t._v("\n                  Making your booking ...\n                ")]):r("button",{staticClass:"ceo-gmbh-btn mt-2 mb-5",attrs:{type:"submit"}},[t._v("\n                  Make Booking\n                ")])])])])])])])]):r("div",[r("client-only",[r("div",{staticClass:"container"},[r("div",{staticClass:"row p-5 align-items-center mx-auto"},[r("div",{staticClass:"col-12 my-4"},[r("content-placeholders",{attrs:{rounded:!0}},[r("content-placeholders-img")],1)],1),t._v(" "),t._l(2,(function(e){return r("div",{key:e,staticClass:"col-12 my-4"},[r("content-placeholders",{attrs:{rounded:!0}},[r("content-placeholders-heading"),t._v(" "),r("content-placeholders-text",{attrs:{lines:2}})],1)],1)}))],2)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-info d-lg-flex"},[e("div",{staticClass:"single-contact-info"},[e("h6",[e("i",{staticClass:"fa fa-map-signs text-dark",attrs:{"aria-hidden":"true"}}),this._v("\n                Jakarta\n              ")]),this._v(" "),e("h6",[e("i",{staticClass:"fa fa-map-signs text-dark",attrs:{"aria-hidden":"true"}}),this._v("\n                No. 25-33\n              ")])]),this._v(" "),e("div",{staticClass:"single-contact-info"},[e("h6",[e("i",{staticClass:"fa fa-envelope-o text-dark",attrs:{"aria-hidden":"true"}}),this._v("\n                contact@yourbusiness.com\n              ")]),this._v(" "),e("h6",[e("i",{staticClass:"fa fa-phone text-dark",attrs:{"aria-hidden":"true"}}),this._v(" +34\n                567 22478 49567\n              ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h4",{staticClass:"section-heading dark text-uppercase mb-4",staticStyle:{"font-weight":"800"}},[this._v("\n                Make Booking\n              ")])])])}],!1,null,"4c32c98c",null);e.default=component.exports}}]);