exports.ids=[5],exports.modules={38:function(t,e,o){var content=o(47);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(4).default;t.exports.__inject__=function(t){r("67eda5d2",content,!0,t)}},46:function(t,e,o){"use strict";o.r(e);var r=o(38),d=o.n(r);for(var c in r)"default"!==c&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},47:function(t,e,o){(e=o(2)(!1)).push([t.i,".hero-container[data-v-3d06c03a]{position:relative;text-align:center;color:#fff}.hero-text[data-v-3d06c03a]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:30px}@media screen and (max-width:768px){.hero-text[data-v-3d06c03a]{font-size:1.2em;letter-spacing:10px}}.shadow-form[data-v-3d06c03a]{box-shadow:4px 4px 15px 0 grey}",""]),t.exports=e},65:function(t,e,o){"use strict";o.r(e);var r=o(3),d={name:"CustomTourPage",data:()=>({countries:{},form:{},loading:!1}),computed:{...Object(r.mapGetters)({isAuthenticated:"isAuthenticated"})},async created(){const data=await this.$axios.$get("https://restcountries.eu/rest/v2/all?fields=name");this.countries=data},methods:{...Object(r.mapActions)({CREATE_CUSTOM_TOUR:"custom-tours/CREATE_CUSTOM_TOUR"}),clearForm(){Object.assign(this.$data,this.$options.data())},async createCustomTour(){this.loading=!0;try{await this.CREATE_CUSTOM_TOUR(this.form),await this.$swal({icon:"success",title:"Created! ",text:"Your custom tour has been created! Kindly wait for our email.",showConfirmButton:!0}),this.clearForm()}catch(t){this.$swal({icon:"error",title:"Oops! Something wrong.",text:"Please try again later.",showConfirmButton:!1,timerProgressBar:!0,timer:5e3})}finally{this.loading=!1}}}},c=o(1);var component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._ssrNode('<section class="ceo-gmbh-welcome-area bg-img bg-overlay" data-v-3d06c03a><div class="hero-container" data-v-3d06c03a><img src="/images/custom-tour/custom-tour-hero.jpg" width="100%" alt="customize-tour-hero-image" loading="lazy" class="img-fluid" style="max-height: 400px; object-fit: cover; filter: brightness(0.8);" data-v-3d06c03a> <h1 class="hero-text text-uppercase display-1 font-weight-bold text-white" data-v-3d06c03a>\n        CUSTOM TOUR\n      </h1></div></section> '),t._ssrNode('<div class="container" data-v-3d06c03a>',"</div>",[t._ssrNode('<div class="row" data-v-3d06c03a><div class="col-12 mt-50" data-v-3d06c03a><div class="section-heading dark text-center mb-0" data-v-3d06c03a><span data-v-3d06c03a></span> <h4 data-v-3d06c03a>CUSTOM TOUR FORM</h4> <p data-v-3d06c03a>Fill all fields provided</p></div></div></div> '),t.isAuthenticated?t._ssrNode('<div class="row my-5" data-v-3d06c03a>',"</div>",[t._ssrNode('<div class="col-12" data-v-3d06c03a>',"</div>",[t._ssrNode('<form class="bg-light p-md-5 p-4 shadow-form" style="border-radius: 25px" data-v-3d06c03a>',"</form>",[t._ssrNode('<div class="form-row" data-v-3d06c03a><div class="form-group col-md-6" data-v-3d06c03a><label for="custom-name" data-v-3d06c03a>Full Name</label> <input id="custom-name" type="text" required="required" placeholder="John Doe"'+t._ssrAttr("value",t.form.name)+' class="form-control" data-v-3d06c03a></div> <div class="form-group col-md-6" data-v-3d06c03a><label for="custom-email" data-v-3d06c03a>Email</label> <input id="custom-email" type="email" required="required" placeholder="email@example.com"'+t._ssrAttr("value",t.form.email)+' class="form-control" data-v-3d06c03a></div></div> <div class="form-group" data-v-3d06c03a><label for="custom-phone" data-v-3d06c03a>Phone</label> <input id="custom-phone" type="tel" required="required" placeholder="62812170845"'+t._ssrAttr("value",t.form.phone)+' class="form-control" data-v-3d06c03a></div> '),t._ssrNode('<div class="form-row" data-v-3d06c03a>',"</div>",[t._ssrNode('<div class="form-group col-md-4" data-v-3d06c03a>',"</div>",[t._ssrNode('<label for="custom-origin" data-v-3d06c03a>Origin</label> '),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.origin,expression:"form.origin"}],staticClass:"form-control",attrs:{id:"custom-origin",required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"origin",e.target.multiple?o:o[0])}}},[o("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.countries,(function(e,r){return o("option",{key:r,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)],2),t._ssrNode(" "),t._ssrNode('<div class="form-group col-md-4" data-v-3d06c03a>',"</div>",[t._ssrNode('<label for="custom-destination" data-v-3d06c03a>Destination</label> '),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.destination,expression:"form.destination"}],staticClass:"form-control",attrs:{id:"custom-destination",required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"destination",e.target.multiple?o:o[0])}}},[o("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.countries,(function(e,r){return o("option",{key:r,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)],2),t._ssrNode(' <div class="form-group col-12 col-md-4" data-v-3d06c03a><label for="custom-purpose" data-v-3d06c03a>Trip Purpose</label> <input id="custom-purpose" type="text" placeholder="Family Vacation" required="required"'+t._ssrAttr("value",t.form.trip_purpose)+' class="form-control" data-v-3d06c03a></div>')],2),t._ssrNode(' <div class="form-row" data-v-3d06c03a><div class="form-group col-12 col-md-6" data-v-3d06c03a><label for="custom-date_from" data-v-3d06c03a>Date From</label> <input id="custom-date_from" type="date" required="required"'+t._ssrAttr("value",t.form.date_from)+' class="form-control" data-v-3d06c03a></div> <div class="form-group col-12 col-md-6" data-v-3d06c03a><label for="custom-date_to" data-v-3d06c03a>Date To</label> <input id="custom-date_to" type="date" required="required"'+t._ssrAttr("value",t.form.date_to)+' class="form-control" data-v-3d06c03a></div></div> <div class="row" data-v-3d06c03a><div class="col-12 text-center mt-4" data-v-3d06c03a>'+(t.loading?'<button disabled="disabled" class="btn btn-primary" style="background-color:#4576a2" data-v-3d06c03a>\n                Submitting your request ...\n              </button>':'<button type="submit" class="btn btn-primary w-25 " style="background-color: #4576a2" data-v-3d06c03a>\n                Submit\n              </button>')+"</div></div>")],2)])]):t._ssrNode('<div class="row my-5" style="height: 250px" data-v-3d06c03a><div class="col-12 text-center mt-50" data-v-3d06c03a><h4 class="text-danger font-weight-bold" data-v-3d06c03a>\n          Please login to request your custom tour!\n        </h4> <button type="button" data-toggle="modal" data-target="#modal-login" class="ceo-gmbh-btn text-white mt-4" data-v-3d06c03a>\n          LOGIN\n        </button></div></div>')],2)],2)}),[],!1,(function(t){var e=o(46);e.__inject__&&e.__inject__(t)}),"3d06c03a","0732f756");e.default=component.exports}};