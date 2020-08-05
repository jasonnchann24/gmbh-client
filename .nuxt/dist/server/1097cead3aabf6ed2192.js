exports.ids=[11],exports.modules={67:function(t,e,n){"use strict";n.r(e);var d=n(2),r={name:"TransactionsPage",middleware:["auth"],data:()=>({page:1,loading:!1}),computed:{...Object(d.mapGetters)({TRANSACTIONS:"transactions/TRANSACTIONS"})},created(){this.GET_TRANSACTIONS()},methods:{...Object(d.mapActions)({GET_TRANSACTIONS:"transactions/GET_TRANSACTIONS"}),badge:t=>t.forms.emergency_contact&&t.forms.master_passenger&&t.forms.transfer_evidence&&t.forms.passengers.length>0,async changePage(t){this.loading=!0,"next"===t?(this.page++,await this.GET_TRANSACTIONS(this.page),this.loading=!1):"prev"===t&&(this.page--,await this.GET_TRANSACTIONS(this.page),this.loading=!1)}}},c=n(1);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.TRANSACTIONS.data?t._ssrNode("<div data-v-b8bf873a>","</div>",[t._ssrNode('<section class="ceo-gmbh-listing-destinations-area section-padding-100-50" data-v-b8bf873a>',"</section>",[t._ssrNode('<div class="container" data-v-b8bf873a>',"</div>",[t._ssrNode('<div class="row" data-v-b8bf873a><div class="col-12" data-v-b8bf873a><div class="section-heading dark text-center" data-v-b8bf873a><span data-v-b8bf873a></span> <h4 data-v-b8bf873a>Bookings</h4> <p data-v-b8bf873a>Click for more detail</p></div></div></div> '),t._ssrNode('<div class="row" data-v-b8bf873a>',"</div>",t._l(t.TRANSACTIONS.data,(function(e){return t._ssrNode('<div class="col-12 col-sm-6 col-lg-4" data-v-b8bf873a>',"</div>",[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/transactions/"+e.id,tag:"a"}},[n("div",{staticClass:"single-features-area mb-50"},[n("img",{attrs:{src:e.package.image_url,alt:""}}),t._v(" "),n("div",{staticClass:"price-start"},[t.badge(e)?n("p",{staticClass:"bg-success"},[t._v("\n                    Complete\n                  ")]):n("p",{staticClass:"bg-danger"},[t._v("Incomplete")])]),t._v(" "),n("div",{staticClass:"feature-content d-flex align-items-center justify-content-between"},[n("div",{staticClass:"feature-title"},[n("h5",[t._v(t._s(e.package.name))]),t._v(" "),n("p",[t._v(t._s(e.transaction_number))]),t._v(" "),n("p",[t._v(t._s(e.created_at))])])])])])],1)})),0),t._ssrNode(" "+(t.TRANSACTIONS.links?'<nav aria-label="Page navigation example" data-v-b8bf873a><ul class="pagination pagination-lg " data-v-b8bf873a>'+(t.TRANSACTIONS.links.prev?'<li class="page-item" data-v-b8bf873a><a href="javascript:void(0);" aria-label="Previous" class="page-link border-0" data-v-b8bf873a><span aria-hidden="true" data-v-b8bf873a>«</span></a></li>':"\x3c!----\x3e")+' <li class="page-item disabled " data-v-b8bf873a>'+(t.loading?'<a class="page-link border-0" data-v-b8bf873a>Loading...</a>':'<a href="#" class="page-link border-0" data-v-b8bf873a>'+t._ssrEscape(t._s(t.TRANSACTIONS.meta.current_page))+"</a>")+"</li> "+(t.TRANSACTIONS.links.next?'<li class="page-item" data-v-b8bf873a><a href="javascript:void(0)" aria-label="Next" class="page-link border-0" data-v-b8bf873a><span aria-hidden="true" data-v-b8bf873a>»</span></a></li>':"\x3c!----\x3e")+"</ul></nav>":"\x3c!----\x3e"))],2)])]):t._ssrNode("<div data-v-b8bf873a>","</div>",[n("client-only",[n("div",{staticClass:"container"},[n("div",{staticClass:"row p-5 align-items-center mx-auto"},[n("div",{staticClass:"col-12 my-4"},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-img")],1)],1),t._v(" "),t._l(2,(function(e){return n("div",{key:e,staticClass:"col-12 my-4"},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-heading"),t._v(" "),n("content-placeholders-text",{attrs:{lines:2}})],1)],1)}))],2)])])],1)])}),[],!1,(function(t){}),"b8bf873a","3bd43f8f");e.default=component.exports}};