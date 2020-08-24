exports.ids=[6],exports.modules={101:function(e,t,o){"use strict";o.r(t);var d=o(5),n={name:"IndexPage",components:{Pagination:o(54).a},async fetch(){await this.GET_PACKAGES()},data:()=>({show:!0}),computed:{...Object(d.mapGetters)({PACKAGES:"packages/PACKAGES"}),packageSlug:e=>e.replace(/\s/g,"-")},mounted(){},methods:{...Object(d.mapActions)({GET_PACKAGES:"packages/GET_PACKAGES"})},head:()=>({title:"Welcome | CEO Travel GmbH"})},r=o(1);var component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._ssrNode('<section class="ceo-gmbh-welcome-area bg-img bg-overlay" data-v-7e6416e3><div id="carousel-toggler" data-ride="carousel" data-touch="true" class="carousel slide carousel-fade" data-v-7e6416e3><ol class="carousel-indicators mb-auto" data-v-7e6416e3><li data-target="#carousel-toggler" data-slide-to="0" class="active" data-v-7e6416e3></li> <li data-target="#carousel-toggler" data-slide-to="1" data-v-7e6416e3></li> <li data-target="#carousel-toggler" data-slide-to="2" data-v-7e6416e3></li></ol> <div role="listbox" class="carousel-inner" data-v-7e6416e3><div crossorigin="anonymous" class="carousel-item active" style="background-image: url(\'https://images.unsplash.com/photo-1473615695634-d284ec918736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80\')" data-v-7e6416e3><div class="carousel-caption" style="backdrop-filter: blur(1.5px)" data-v-7e6416e3><h1 class=" text-white d-none d-md-block font-weight-bold" data-v-7e6416e3>\n              CEO Travel GmbH\n            </h1> <p class="lead text-white font-weight-bold" data-v-7e6416e3>\n              Discover the Beautiful World\n            </p></div></div> <div crossorigin="anonymous" class="carousel-item" style="background-image: url(\'https://images.unsplash.com/photo-1520681979516-e3c118ef971f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\'); " data-v-7e6416e3><div class="carousel-caption" style="backdrop-filter: blur(1.5px)" data-v-7e6416e3><h1 class=" text-white d-none d-md-block font-weight-bold" data-v-7e6416e3>\n              CEO Travel GmbH\n            </h1> <p class="lead text-white font-weight-bold" data-v-7e6416e3>\n              Discover the Beautiful World\n            </p></div></div> <div crossorigin="anonymous" class="carousel-item" style="background-image: url(\'https://images.unsplash.com/photo-1579863197600-9f2bc8b3e66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80\')" data-v-7e6416e3><div class="carousel-caption" style="backdrop-filter: blur(1.5px)" data-v-7e6416e3><h1 class=" text-white d-none d-md-block font-weight-bold" data-v-7e6416e3>\n              CEO Travel GmbH\n            </h1> <p class="lead text-white font-weight-bold" data-v-7e6416e3>\n              Discover the Beautiful World\n            </p></div></div></div> <a href="#carousel-toggler" role="button" data-slide="prev" class="carousel-control-prev" data-v-7e6416e3><span aria-hidden="true" class="carousel-control-prev-icon" data-v-7e6416e3></span> <span class="sr-only" data-v-7e6416e3>Previous</span></a> <a href="#carousel-toggler" role="button" data-slide="next" class="carousel-control-next" data-v-7e6416e3><span aria-hidden="true" class="carousel-control-next-icon" data-v-7e6416e3></span> <span class="sr-only" data-v-7e6416e3>Next</span></a></div></section> <section class="ceo-gmbh-about-area section-padding-0-100 pb-0 mt-100" data-v-7e6416e3><div class="container" data-v-7e6416e3><div class="row" data-v-7e6416e3><div class="col-12" data-v-7e6416e3><div class="about-content text-center" data-v-7e6416e3><h3 data-wow-delay="0.5s" class="font-weight-bold wow fadeInUpBig" data-v-7e6416e3>\n              Discover the beautiful world with\n              <br data-v-7e6416e3> <span data-v-7e6416e3>CEO Travel GmbH</span></h3> <p data-wow-delay="0.8s" data-wow-duration="0.5s" class="wow fadeIn mt-50" data-v-7e6416e3>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error\n              odit dolorum quasi voluptatum. Blanditiis delectus velit dolorem\n              reprehenderit, at sint dolor natus fugit minima facere vel\n              adipisci officiis nostrum minus tenetur nesciunt debitis rerum\n              eveniet fuga. Officiis, fugiat! Tempore amet eligendi inventore.\n              Est ea ut iure, possimus deleniti necessitatibus similique.\n            </p></div></div></div></div></section> '),e._ssrNode('<section class="ceo-gmbh-packages-area mt-100" data-v-7e6416e3>',"</section>",[e._ssrNode('<div class="container" data-v-7e6416e3>',"</div>",[e._ssrNode('<div class="row" data-v-7e6416e3><div class="col-12 mt-4" data-v-7e6416e3><div class="section-heading dark text-center my-auto" data-v-7e6416e3><span data-v-7e6416e3></span> <h4 data-wow-delay="0.5s" class="text-dark wow fadeInUp" data-v-7e6416e3>\n              Our Packages\n            </h4> <p data-wow-delay="0.6s" class="text-dark wow fadeInUp" data-v-7e6416e3>\n              Discover the Beautiful World with Us\n            </p></div></div></div> '),e.$fetchState.pending?e._ssrNode('<div class="row" data-v-7e6416e3>',"</div>",e._l(3,(function(t){return e._ssrNode('<div class="col-4 my-5" data-v-7e6416e3>',"</div>",[o("content-placeholders",{attrs:{rounded:!0}},[o("content-placeholders-heading"),e._v(" "),o("content-placeholders-img")],1)],1)})),0):e._ssrNode('<div class="row" data-v-7e6416e3>',"</div>",[o("client-only",[e.PACKAGES?o("div",{staticClass:"col-12  mt-4"},[e.PACKAGES&&e.show?o("div",{staticClass:"all-catagories"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-12 col-md-4 my-md-3"},[o("div",{staticClass:"single-catagory-area my-50 p-0",staticStyle:{"border-radius":"15px"},attrs:{"data-wow-delay":"0.4s"}},[o("nuxt-link",{attrs:{tag:"a",to:"/custom-tour"}},[o("div",{staticClass:"catagory-content"},[o("h5",{staticClass:"text-dark py-2 p-md-2"},[e._v("\n                          Custom Tour\n                        ")]),e._v(" "),o("div",{staticClass:"img-hover-zoom parent"},[o("content-placeholders",{staticClass:"image1",attrs:{rounded:!0}},[o("content-placeholders-img")],1),e._v(" "),e.show?o("img",{staticClass:"m-0 package-image image2",attrs:{src:"/images/custom-tour.jpg",alt:"custom-tour-package",loading:"lazy"}}):e._e()],1)])])],1)]),e._v(" "),e._l(e.PACKAGES.data,(function(t,d){return o("div",{key:t.id,staticClass:"col-12 col-sm-12 col-md-4 my-md-3"},[o("div",{staticClass:"single-catagory-area my-50 p-0",staticStyle:{"border-radius":"15px"},attrs:{"data-wow-delay":.6*(d+1)+"s"}},[o("nuxt-link",{attrs:{tag:"a",to:"/packages/"+t.id+"/"+t.name.replace(/\s/g,"-").toLowerCase()}},[o("div",{staticClass:"catagory-content"},[o("h5",{staticClass:"text-dark py-2 p-md-2"},[e._v("\n                          "+e._s(t.name)+"\n                        ")]),e._v(" "),o("div",{staticClass:"img-hover-zoom parent"},[o("content-placeholders",{staticClass:"image1",attrs:{rounded:!0}},[o("content-placeholders-img")],1),e._v(" "),e.show?o("img",{staticClass:"m-0 package-image image2",attrs:{src:t.image_url,alt:"packages-"+t.name,loading:"lazy"}}):e._e()],1)])])],1)])}))],2),e._v(" "),e.PACKAGES.meta?o("div",{staticClass:"row mt-100 mb-100"},[e.PACKAGES.meta.last_page>1?o("div",{staticClass:"col-12"},[o("pagination",{attrs:{"object-to-paginate":e.PACKAGES,"store-action":"packages/GET_PACKAGES"}})],1):e._e()]):e._e()]):o("div",[o("div",{staticClass:"all-categories"},[o("div",{staticClass:"row"},e._l(3,(function(t){return o("div",{key:t,staticClass:"col-12 col-sm-12 col-md-4 my-md-3"},[o("div",{staticClass:"single-catagory-area m-1 p-0"},[o("content-placeholders",{attrs:{rounded:!0}},[o("content-placeholders-heading"),e._v(" "),o("content-placeholders-img")],1)],1)])})),0)])])]):e._e()])],1)],2)]),e._ssrNode(" "),e._ssrNode('<section crossorigin="anonymous" class="ceo-gmbh-features-events-area bg-img bg-overlay-9 section-padding-100-50" style="background-image: url(\'https://images.unsplash.com/photo-1579863197600-9f2bc8b3e66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80\')" data-v-7e6416e3>',"</section>",[e._ssrNode('<div class="container" data-v-7e6416e3>',"</div>",[e._ssrNode('<div class="row" data-v-7e6416e3><div class="col-12" data-v-7e6416e3><div class="section-heading text-center" data-v-7e6416e3><span data-v-7e6416e3></span> <h4 data-wow-delay="0.5s" class="wow fadeInUp" data-v-7e6416e3>Testimonials</h4> <p data-wow-delay="0.6s" class="wow fadeInUp" data-v-7e6416e3>\n              Our happy customers\n            </p></div></div></div> '),e._ssrNode('<div class="row" data-v-7e6416e3>',"</div>",[e._ssrNode(e._ssrList(3,(function(e){return'<div class="col-12 col-lg-12" data-v-7e6416e3><div data-wow-delay="0.2s" class="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-v-7e6416e3><div class="feature-events-thumb" data-v-7e6416e3><img src="img/bg-img/event-1.jpg" alt style="border-radius: 15px" data-v-7e6416e3></div> <div class="feature-events-content" data-v-7e6416e3><h5 data-v-7e6416e3>Tom Hanks</h5> <h6 data-v-7e6416e3>Jakarta</h6> <p data-v-7e6416e3>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Repudiandae iste at vitae, totam odio provident?\n              </p></div></div></div>'}))+" "),e._ssrNode('<div class="col-12 mt-50 text-center " data-v-7e6416e3>',"</div>",[o("nuxt-link",{attrs:{to:"/about-us/testimony"}},[o("button",{staticClass:"ceo-gmbh-btn wow fadeIn",attrs:{"data-wow-delay":"0.3s"}},[e._v("\n              SEE MORE TESTIMONIALS\n            ")])])],1)],2)],2)])],2)}),[],!1,(function(e){var t=o(81);t.__inject__&&t.__inject__(e)}),"7e6416e3","4603fffe");t.default=component.exports},53:function(e,t,o){var content=o(82);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var d=o(4).default;e.exports.__inject__=function(e){d("7b8b1b8a",content,!0,e)}},54:function(e,t,o){"use strict";var d={name:"InfinitePagination",props:{objectToPaginate:{type:Object,default:()=>{}},storeAction:{type:String,default:""}},data:()=>({currPage:1,destinationPage:1}),methods:{getList(e){this.$store.dispatch(""+this.storeAction,e)},refreshList(e){this.currPage=this.objectToPaginate.meta.current_page,"next"===e?(this.destinationPage=this.currPage+1,this.destinationPage>this.objectToPaginate.meta.last_page&&(this.destinationPage=1)):"prev"===e&&(this.destinationPage=this.currPage-1,0===this.destinationPage&&(this.destinationPage=this.objectToPaginate.meta.last_page)),this.getList(this.destinationPage)}}},n=o(1);var component=Object(n.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"pagination-wrapper"},[this._ssrNode('<svg height="96" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg" class="btn-page btn-page--prev"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> <path d="M0-.5h24v24H0z" fill="none"></path></svg> <div class="pagination-container"><div class="little-dot  little-dot--first"></div> <div class="little-dot"><div class="big-dot-container"><div class="big-dot"></div></div></div> <div class="little-dot  little-dot--last"></div></div> <svg height="96" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg" class="btn-page btn-page--next"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> <path d="M0-.25h24v24H0z" fill="none"></path></svg>')])}),[],!1,(function(e){}),null,"822b87c6");t.a=component.exports},81:function(e,t,o){"use strict";o.r(t);var d=o(53),n=o.n(d);for(var r in d)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return d[e]}))}(r);t.default=n.a},82:function(e,t,o){(t=o(3)(!1)).push([e.i,".carousel-item[data-v-7e6416e3]{height:60vh;min-height:350px;background:no-repeat 50% scroll;background-size:cover}a[data-v-7e6416e3]:hover{text-decoration:none}.package-image[data-v-7e6416e3]{height:338px;width:600px;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-radius:0 0 15px 15px}.img-hover-zoom[data-v-7e6416e3]{overflow:hidden;border-radius:0 0 15px 15px}.img-hover-zoom img[data-v-7e6416e3]{transition:transform .9s ease}.img-hover-zoom:hover img[data-v-7e6416e3]{transform:scale(1.2)}.parent[data-v-7e6416e3]{right:0}.image1[data-v-7e6416e3],.parent[data-v-7e6416e3]{position:relative;top:0;left:0}.image1[data-v-7e6416e3]{height:225px;width:400px;border-radius:0 0 15px 15px}.image2[data-v-7e6416e3]{position:absolute;top:0;left:0}",""]),e.exports=t}};