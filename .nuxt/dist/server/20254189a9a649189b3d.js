exports.ids=[6],exports.modules={45:function(t,e,d){var content=d(61);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=d(4).default;t.exports.__inject__=function(t){o("54809aa2",content,!0,t)}},60:function(t,e,d){"use strict";d.r(e);var o=d(45),n=d.n(o);for(var r in o)"default"!==r&&function(t){d.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},61:function(t,e,d){(e=d(2)(!1)).push([t.i,".carousel-item[data-v-b017db34]{height:60vh;min-height:350px;background:no-repeat 50% scroll;background-size:cover}a[data-v-b017db34]:hover{text-decoration:none}.package-image[data-v-b017db34]{height:338px;width:600px;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-radius:0 0 15px 15px}.img-hover-zoom[data-v-b017db34]{overflow:hidden;border-radius:0 0 15px 15px}.img-hover-zoom img[data-v-b017db34]{transition:transform .9s ease}.img-hover-zoom:hover img[data-v-b017db34]{transform:scale(1.2)}.parent[data-v-b017db34]{right:0}.image1[data-v-b017db34],.parent[data-v-b017db34]{position:relative;top:0;left:0}.image1[data-v-b017db34]{height:225px;width:400px;border-radius:0 0 15px 15px}.image2[data-v-b017db34]{position:absolute;top:0;left:0}",""]),t.exports=e},63:function(t,e,d){"use strict";d.r(e);var o=d(3),n={name:"InfinitePagination",props:{objectToPaginate:{type:Object,default:()=>{}},storeAction:{type:String,default:""}},data:()=>({currPage:1,destinationPage:1}),methods:{getList(t){this.$store.dispatch(""+this.storeAction,t)},refreshList(t){this.currPage=this.objectToPaginate.meta.current_page,"next"===t?(this.destinationPage=this.currPage+1,this.destinationPage>this.objectToPaginate.meta.last_page&&(this.destinationPage=1)):"prev"===t&&(this.destinationPage=this.currPage-1,0===this.destinationPage&&(this.destinationPage=this.objectToPaginate.meta.last_page)),this.getList(this.destinationPage)}}},r=d(1);var l={name:"IndexPage",components:{Pagination:Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pagination-wrapper"},[this._ssrNode('<svg height="96" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg" class="btn-page btn-page--prev"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> <path d="M0-.5h24v24H0z" fill="none"></path></svg> <div class="pagination-container"><div class="little-dot  little-dot--first"></div> <div class="little-dot"><div class="big-dot-container"><div class="big-dot"></div></div></div> <div class="little-dot  little-dot--last"></div></div> <svg height="96" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg" class="btn-page btn-page--next"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> <path d="M0-.25h24v24H0z" fill="none"></path></svg>')])}),[],!1,(function(t){}),null,"822b87c6").exports},async fetch(){await this.GET_PACKAGES()},data:()=>({show:!0}),computed:{...Object(o.mapGetters)({PACKAGES:"packages/PACKAGES"}),packageSlug:t=>t.replace(/\s/g,"-")},mounted(){},methods:{...Object(o.mapActions)({GET_PACKAGES:"packages/GET_PACKAGES"})}};var c=Object(r.a)(l,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[t._ssrNode('<section class="ceo-gmbh-welcome-area bg-img bg-overlay" data-v-b017db34><div id="carousel-toggler" data-ride="carousel" class="carousel slide carousel-fade" data-v-b017db34><ol class="carousel-indicators mb-auto" data-v-b017db34><li data-target="#carousel-toggler" data-slide-to="0" class="active" data-v-b017db34></li> <li data-target="#carousel-toggler" data-slide-to="1" data-v-b017db34></li> <li data-target="#carousel-toggler" data-slide-to="2" data-v-b017db34></li></ol> <div role="listbox" class="carousel-inner" data-v-b017db34><div crossorigin="anonymous" class="carousel-item active" style="background-image: url(\'https://images.unsplash.com/photo-1473615695634-d284ec918736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80\')" data-v-b017db34><div class="carousel-caption" style="backdrop-filter: blur(1.5px)" data-v-b017db34><h1 class=" text-white d-none d-md-block font-weight-bold" data-v-b017db34>\n              CEO Travel GmbH\n            </h1> <p class="lead text-white font-weight-bold" data-v-b017db34>\n              Discover the Beautiful World\n            </p></div></div> <div crossorigin="anonymous" class="carousel-item" style="background-image: url(\'https://images.unsplash.com/photo-1520681979516-e3c118ef971f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\'); " data-v-b017db34><div class="carousel-caption" style="backdrop-filter: blur(1.5px)" data-v-b017db34><h1 class=" text-white d-none d-md-block font-weight-bold" data-v-b017db34>\n              CEO Travel GmbH\n            </h1> <p class="lead text-white font-weight-bold" data-v-b017db34>\n              Discover the Beautiful World\n            </p></div></div> <div crossorigin="anonymous" class="carousel-item" style="background-image: url(\'https://images.unsplash.com/photo-1579863197600-9f2bc8b3e66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80\')" data-v-b017db34><div class="carousel-caption" style="backdrop-filter: blur(1.5px)" data-v-b017db34><h1 class=" text-white d-none d-md-block font-weight-bold" data-v-b017db34>\n              CEO Travel GmbH\n            </h1> <p class="lead text-white font-weight-bold" data-v-b017db34>\n              Discover the Beautiful World\n            </p></div></div></div> <a href="#carousel-toggler" role="button" data-slide="prev" class="carousel-control-prev" data-v-b017db34><span aria-hidden="true" class="carousel-control-prev-icon" data-v-b017db34></span> <span class="sr-only" data-v-b017db34>Previous</span></a> <a href="#carousel-toggler" role="button" data-slide="next" class="carousel-control-next" data-v-b017db34><span aria-hidden="true" class="carousel-control-next-icon" data-v-b017db34></span> <span class="sr-only" data-v-b017db34>Next</span></a></div></section> <section class="ceo-gmbh-about-area section-padding-0-100 pb-0 mt-100" data-v-b017db34><div class="container" data-v-b017db34><div class="row" data-v-b017db34><div class="col-12" data-v-b017db34><div class="about-content text-center" data-v-b017db34><h3 data-wow-delay="0.5s" class="font-weight-bold wow fadeInUpBig" data-v-b017db34>\n              Discover the beautiful world with\n              <br data-v-b017db34> <span data-v-b017db34>CEO Travel GmbH</span></h3> <p data-wow-delay="1.3s" data-wow-duration="0.8s" class="wow fadeIn mt-50" data-v-b017db34>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error\n              odit dolorum quasi voluptatum. Blanditiis delectus velit dolorem\n              reprehenderit, at sint dolor natus fugit minima facere vel\n              adipisci officiis nostrum minus tenetur nesciunt debitis rerum\n              eveniet fuga. Officiis, fugiat! Tempore amet eligendi inventore.\n              Est ea ut iure, possimus deleniti necessitatibus similique.\n            </p></div></div></div></div></section> '),t._ssrNode('<section class="ceo-gmbh-packages-area mt-100" data-v-b017db34>',"</section>",[t._ssrNode('<div class="container" data-v-b017db34>',"</div>",[t._ssrNode('<div class="row" data-v-b017db34><div class="col-12 mt-4" data-v-b017db34><div class="section-heading dark text-center my-auto" data-v-b017db34><span data-v-b017db34></span> <h4 class="text-dark" data-v-b017db34>Our Packages</h4> <p class="text-dark" data-v-b017db34>Discover the Beautiful World with Us</p></div></div></div> '),t.$fetchState.pending?t._ssrNode('<div class="row" data-v-b017db34>',"</div>",t._l(3,(function(e){return t._ssrNode('<div class="col-4 my-5" data-v-b017db34>',"</div>",[d("content-placeholders",{attrs:{rounded:!0}},[d("content-placeholders-heading"),t._v(" "),d("content-placeholders-img")],1)],1)})),0):t._ssrNode('<div class="row" data-v-b017db34>',"</div>",[d("client-only",[t.PACKAGES?d("div",{staticClass:"col-12  mt-4"},[t.PACKAGES&&t.show?d("div",{staticClass:"all-catagories"},[d("div",{staticClass:"row"},[d("div",{staticClass:"col-12 col-sm-12 col-md-4 my-md-3"},[d("div",{staticClass:"single-catagory-area my-50 p-0",staticStyle:{"border-radius":"15px"},attrs:{"data-wow-delay":"0.4s"}},[d("nuxt-link",{attrs:{tag:"a",to:"/custom-tour"}},[d("div",{staticClass:"catagory-content"},[d("h5",{staticClass:"text-dark py-2 p-md-2"},[t._v("\n                          Custom Tour\n                        ")]),t._v(" "),d("div",{staticClass:"img-hover-zoom parent"},[d("content-placeholders",{staticClass:"image1",attrs:{rounded:!0}},[d("content-placeholders-img")],1),t._v(" "),t.show?d("img",{staticClass:"m-0 package-image image2",attrs:{src:"/images/custom-tour.jpg",alt:"custom-tour-package",loading:"lazy"}}):t._e()],1)])])],1)]),t._v(" "),t._l(t.PACKAGES.data,(function(e,o){return d("div",{key:e.id,staticClass:"col-12 col-sm-12 col-md-4 my-md-3"},[d("div",{staticClass:"single-catagory-area my-50 p-0",staticStyle:{"border-radius":"15px"},attrs:{"data-wow-delay":.6*(o+1)+"s"}},[d("nuxt-link",{attrs:{tag:"a",to:"/packages/"+e.id+"/"+e.name.replace(/\s/g,"-").toLowerCase()}},[d("div",{staticClass:"catagory-content"},[d("h5",{staticClass:"text-dark py-2 p-md-2"},[t._v("\n                          "+t._s(e.name)+"\n                        ")]),t._v(" "),d("div",{staticClass:"img-hover-zoom parent"},[d("content-placeholders",{staticClass:"image1",attrs:{rounded:!0}},[d("content-placeholders-img")],1),t._v(" "),t.show?d("img",{staticClass:"m-0 package-image image2",attrs:{src:e.image_url,alt:"packages-"+e.name,loading:"lazy"}}):t._e()],1)])])],1)])}))],2),t._v(" "),t.PACKAGES.meta?d("div",{staticClass:"row mt-100 mb-100"},[t.PACKAGES.meta.last_page>1?d("div",{staticClass:"col-12"},[d("pagination",{attrs:{"object-to-paginate":t.PACKAGES,"store-action":"packages/GET_PACKAGES"}})],1):t._e()]):t._e()]):d("div",[d("div",{staticClass:"all-categories"},[d("div",{staticClass:"row"},t._l(3,(function(e){return d("div",{key:e,staticClass:"col-12 col-sm-12 col-md-4 my-md-3"},[d("div",{staticClass:"single-catagory-area m-1 p-0"},[d("content-placeholders",{attrs:{rounded:!0}},[d("content-placeholders-heading"),t._v(" "),d("content-placeholders-img")],1)],1)])})),0)])])]):t._e()])],1)],2)]),t._ssrNode(' <section crossorigin="anonymous" class="ceo-gmbh-features-events-area bg-img bg-overlay-9 section-padding-100-50" style="background-image: url(\'https://images.unsplash.com/photo-1579863197600-9f2bc8b3e66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80\')" data-v-b017db34><div class="container" data-v-b017db34><div class="row" data-v-b017db34><div class="col-12" data-v-b017db34><div class="section-heading text-center" data-v-b017db34><span data-v-b017db34></span> <h4 data-v-b017db34>Testimonials</h4> <p data-v-b017db34>Our happy customers</p></div></div></div> <div class="row" data-v-b017db34>'+t._ssrList(3,(function(t){return'<div class="col-12 col-lg-12" data-v-b017db34><div data-wow-delay="0.2s" class="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-v-b017db34><div class="feature-events-thumb" data-v-b017db34><img src="img/bg-img/event-1.jpg" alt style="border-radius: 15px" data-v-b017db34></div> <div class="feature-events-content" data-v-b017db34><h5 data-v-b017db34>Tom Hanks</h5> <h6 data-v-b017db34>Jakarta</h6> <p data-v-b017db34>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Repudiandae iste at vitae, totam odio provident?\n              </p></div></div></div>'}))+"</div></div></section>")],2)}),[],!1,(function(t){var e=d(60);e.__inject__&&e.__inject__(t)}),"b017db34","4603fffe");e.default=c.exports}};