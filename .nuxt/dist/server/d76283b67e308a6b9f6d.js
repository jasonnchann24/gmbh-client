exports.ids=[12],exports.modules={43:function(t,e,r){var content=r(61);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("14f69658",content,!0,t)}},60:function(t,e,r){"use strict";r.r(e);var o=r(43),l=r.n(o);for(var d in o)["default"].indexOf(d)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(d);e.default=l.a},61:function(t,e,r){(e=r(2)(!1)).push([t.i,".hero-container[data-v-17ca961a]{position:relative;text-align:center;color:#fff}.hero-text[data-v-17ca961a]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:30px}@media screen and (max-width:768px){.hero-text[data-v-17ca961a]{font-size:1.2em;letter-spacing:10px}}.shadow-form[data-v-17ca961a]{box-shadow:4px 4px 15px 0 grey}",""]),t.exports=e},87:function(t,e,r){"use strict";r.r(e);var o=r(4),l={name:"CustomTourPage",data:()=>({countries:{},form:{},adult:0,infant:0,child:0,loading:!1}),computed:{...Object(o.mapGetters)({isAuthenticated:"isAuthenticated"}),disabled(){return"2"!==this.form.trip_type}},async created(){const data=await this.$axios.$get("https://restcountries.eu/rest/v2/all?fields=name");this.countries=data},methods:{...Object(o.mapActions)({CREATE_TICKET:"tickets/CREATE_TICKET"}),clearForm(){Object.assign(this.$data,this.$options.data())},async createTicket(){this.loading=!0,this.form.adult=parseInt(this.adult),this.form.infant=parseInt(this.infant),this.form.child=parseInt(this.child);try{await this.CREATE_TICKET(this.form),await this.$swal({icon:"success",title:"Created! ",text:"Your tickets request has been created! Kindly wait for our email.",showConfirmButton:!0}),this.clearForm()}catch(t){this.$swal({icon:"error",title:"Oops! Something wrong.",text:"Double check your inputs! or Please try again later.",showConfirmButton:!1,timerProgressBar:!0,timer:5e3})}finally{this.loading=!1}}},head:()=>({title:"Ticketing | CEO Travel GmbH"})},d=r(1);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<section class="ceo-gmbh-welcome-area bg-img bg-overlay" data-v-17ca961a><div class="hero-container" data-v-17ca961a><img src="/images/ticketing/hero-ticketing.jpg" width="100%" alt="customize-tour-hero-image" loading="lazy" class="img-fluid" style="max-height: 400px; object-fit: cover; filter: brightness(0.8);" data-v-17ca961a> <h1 class="hero-text text-uppercase display-1 font-weight-bold text-white" data-v-17ca961a>\n        TICKETING\n      </h1></div></section> '),t._ssrNode('<div class="container" data-v-17ca961a>',"</div>",[t._ssrNode('<div class="row" data-v-17ca961a><div class="col-12 mt-50" data-v-17ca961a><div class="section-heading dark text-center mb-0" data-v-17ca961a><span data-v-17ca961a></span> <h4 data-v-17ca961a>TICKETING FORM</h4> <p data-v-17ca961a>Fill all fields provided</p></div></div></div> '),t.isAuthenticated?t._ssrNode('<div class="row my-5" data-v-17ca961a>',"</div>",[t._ssrNode('<div class="col-12" data-v-17ca961a>',"</div>",[t._ssrNode('<form class="bg-light p-md-5 p-4 shadow-form" style="border-radius: 25px" data-v-17ca961a>',"</form>",[t._ssrNode('<div class="form-row" data-v-17ca961a><div class="form-group col-md-6" data-v-17ca961a><label for="ticketing-name" data-v-17ca961a>Full Name</label> <input id="ticketing-name" type="text" required="required" placeholder="John Doe"'+t._ssrAttr("value",t.form.name)+' class="form-control" data-v-17ca961a></div> <div class="form-group col-md-6" data-v-17ca961a><label for="ticketing-email" data-v-17ca961a>Email</label> <input id="ticketing-email" type="email" required="required" placeholder="email@example.com"'+t._ssrAttr("value",t.form.email)+' class="form-control" data-v-17ca961a></div></div> <div class="form-group" data-v-17ca961a><label for="ticketing-phone" data-v-17ca961a>Phone</label> <input id="ticketing-phone" type="tel" required="required" placeholder="62812170845"'+t._ssrAttr("value",t.form.phone)+' class="form-control" data-v-17ca961a></div> '),t._ssrNode('<div class="form-row" data-v-17ca961a>',"</div>",[t._ssrNode('<div class="form-group col-md-4" data-v-17ca961a>',"</div>",[t._ssrNode('<label for="ticketing-origin" data-v-17ca961a>Origin</label> '),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.origin,expression:"form.origin"}],staticClass:"form-control",attrs:{id:"ticketing-origin",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"origin",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.countries,(function(e,o){return r("option",{key:o,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)],2),t._ssrNode(" "),t._ssrNode('<div class="form-group col-md-4" data-v-17ca961a>',"</div>",[t._ssrNode('<label for="ticketing-destination" data-v-17ca961a>Destination</label> '),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.destination,expression:"form.destination"}],staticClass:"form-control",attrs:{id:"ticketing-destination",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"destination",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.countries,(function(e,o){return r("option",{key:o,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)],2),t._ssrNode(" "),t._ssrNode('<div class="form-group col-12 col-md-4" data-v-17ca961a>',"</div>",[t._ssrNode('<label for="ticketing-purpose" data-v-17ca961a>Trip Type</label> '),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.trip_type,expression:"form.trip_type"}],staticClass:"form-control",attrs:{id:"ticketing-purpose",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"trip_type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose ...")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("One-way")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Round-trip")])])],2)],2),t._ssrNode(' <div class="form-row" data-v-17ca961a><div class="form-group col-12 col-md-6" data-v-17ca961a><label for="ticketing-date_from" data-v-17ca961a>Departure Date</label> <input id="ticketing-date_from" type="date" required="required"'+t._ssrAttr("value",t.form.departure)+' class="form-control" data-v-17ca961a></div> <div class="form-group col-12 col-md-6" data-v-17ca961a><label for="ticketing-date_return" data-v-17ca961a>'+(t.disabled?'<span class="text-secondary" data-v-17ca961a>Trip Type (Round Trip Only)</span>':"<span data-v-17ca961a>Trip Type</span>")+'</label> <input id="ticketing-date_return" type="date"'+t._ssrAttr("disabled",t.disabled)+t._ssrAttr("required",!t.disabled)+t._ssrAttr("value",t.form.return)+' class="form-control" data-v-17ca961a></div></div> <div class="form-row" data-v-17ca961a><div class="form-group col-12 col-md-4" data-v-17ca961a><label for="ticketing-adult" data-v-17ca961a>Adult</label> <input id="ticketing-adult" type="number" min="0" placeholder="0" required="required"'+t._ssrAttr("value",t.adult)+' class="form-control" data-v-17ca961a></div> <div class="form-group col-12 col-md-4" data-v-17ca961a><label for="ticketing-child" data-v-17ca961a>Child</label> <input id="ticketing-child" type="number" min="0" placeholder="0" required="required"'+t._ssrAttr("value",t.child)+' class="form-control" data-v-17ca961a></div> <div class="form-group col-12 col-md-4" data-v-17ca961a><label for="ticketing-infant" data-v-17ca961a>Infant</label> <input id="ticketing-infant" type="number" min="0" placeholder="0" required="required"'+t._ssrAttr("value",t.infant)+' class="form-control" data-v-17ca961a></div></div> '),t._ssrNode('<div class="form-row" data-v-17ca961a>',"</div>",[t._ssrNode('<div class="form-group col-md-12" data-v-17ca961a>',"</div>",[t._ssrNode('<label for="ticketing-seat_class" data-v-17ca961a>Seat Class</label> '),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.seat_class,expression:"form.seat_class"}],staticClass:"form-control",attrs:{id:"ticketing-seat_class",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"seat_class",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),r("option",{attrs:{value:"Economy"}},[t._v("Economy")]),t._v(" "),r("option",{attrs:{value:"Business"}},[t._v("Business")]),t._v(" "),r("option",{attrs:{value:"First Class"}},[t._v("First Class")])])],2)]),t._ssrNode(' <div class="row" data-v-17ca961a><div class="col-12 text-center mt-4" data-v-17ca961a>'+(t.loading?'<button disabled="disabled" class="btn btn-primary" style="background-color:#4576a2" data-v-17ca961a>\n                Submitting your request ...\n              </button>':'<button type="submit" class="btn btn-primary w-25 " style="background-color: #4576a2" data-v-17ca961a>\n                Submit\n              </button>')+"</div></div>")],2)])]):t._ssrNode('<div class="row my-5" style="height: 250px" data-v-17ca961a><div class="col-12 text-center mt-50" data-v-17ca961a><h4 class="text-danger font-weight-bold" data-v-17ca961a>\n          Please login to request your ticket!\n        </h4> <button type="button" data-toggle="modal" data-target="#modal-login" class="ceo-gmbh-btn text-white mt-4" data-v-17ca961a>\n          LOGIN\n        </button></div></div>')],2)],2)}),[],!1,(function(t){var e=r(60);e.__inject__&&e.__inject__(t)}),"17ca961a","2f6d6810");e.default=component.exports}};