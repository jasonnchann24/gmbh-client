exports.ids=[2],exports.modules={43:function(t,e,n){var content=n(57);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var l=n(4).default;t.exports.__inject__=function(t){l("097de57c",content,!0,t)}},56:function(t,e,n){"use strict";n.r(e);var l=n(43),o=n.n(l);for(var r in l)"default"!==r&&function(t){n.d(e,t,(function(){return l[t]}))}(r);e.default=o.a},57:function(t,e,n){(e=n(2)(!1)).push([t.i,"#agile[data-v-10cb36ff]{margin:0 auto;max-width:900px;padding:30px}.main[data-v-10cb36ff]{margin-bottom:30px}.thumbnails[data-v-10cb36ff]{margin:0 -5px;width:calc(100% + 10px)}.slide[data-v-10cb36ff]{align-items:center;box-sizing:border-box;color:#fff;display:flex;height:450px;justify-content:center}.slide--thumbniail[data-v-10cb36ff]{cursor:pointer;height:100px;padding:0 5px;transition:opacity .3s}.slide--thumbniail[data-v-10cb36ff]:hover{opacity:.75}.slide img[data-v-10cb36ff]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}.fade-enter-active[data-v-10cb36ff],.fade-leave-active[data-v-10cb36ff]{transition:opacity .7s}.fade-enter[data-v-10cb36ff],.fade-leave-to[data-v-10cb36ff]{opacity:0}",""]),t.exports=e},78:function(t,e,n){"use strict";n.r(e);var l=n(3),o={name:"GalleryPage",data(){return{page:1,loading:!1,loaded:!1,asNavFor1:[this.$refs.thumbnails],asNavFor2:[this.$refs.mainHero],options1:{dots:!1,fade:!0,navButtons:!1},options2:{autoplay:!0,autoplaySpeed:4e3,centerMode:!0,dots:!1,navButtons:!1,slidesToShow:3,responsive:[{breakpoint:600,settings:{slidesToShow:5}},{breakpoint:1e3,settings:{navButtons:!1}}]},slides:[]}},computed:{...Object(l.mapGetters)({GALLERY:"gallery/GALLERY"})},created(){this.getGallery(this.page)},methods:{...Object(l.mapActions)({GET_GALLERY:"gallery/GET_GALLERY"}),syncSliders(t){this.$refs.mainHero.goTo(t)},async getGallery(t){await this.GET_GALLERY(t),await this.GALLERY.data.forEach(this.pushSlides),this.loaded=!0},pushSlides(t,e){this.slides.push(t.image_url)},async changePage(t){this.loading=!0,"next"===t?(this.page++,this.slides=[],await this.getGallery(this.page),this.loading=!1):"prev"===t&&(this.page--,this.slides=[],await this.getGallery(this.page),this.loading=!1)}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._ssrNode('<div class="container" data-v-10cb36ff><div class="row" data-v-10cb36ff><div class="col-12 mt-100" data-v-10cb36ff><div class="section-heading dark text-center" data-v-10cb36ff><span data-v-10cb36ff></span> <h4 data-v-10cb36ff>Gallery</h4> <p data-v-10cb36ff>Our beautiful photos</p></div></div></div></div> '),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.GALLERY.data&&t.slides.length>0?n("div",{key:"1",attrs:{id:"agile"}},[n("client-only",[t.slides.length>0?n("agile",{ref:"mainHero",staticClass:"main slider-for",attrs:{options:t.options1,"as-nav-for":t.asNavFor1}},t._l(t.slides,(function(t,e){return n("div",{key:e,staticClass:"slide",class:"slide--"+e},[n("img",{attrs:{src:t}})])})),0):t._e(),t._v(" "),t.slides.length>0?n("agile",{ref:"thumbnails",staticClass:"thumbnails slider-nav",attrs:{options:t.options2,"as-nav-for":t.asNavFor2},on:{"before-change":function(e){t.syncSliders(t.$refs.thumbnails.getCurrentSlide())}}},[t._l(t.slides,(function(e,l){return n("div",{key:l,staticClass:"slide slide--thumbniail",class:"slide--"+l,on:{click:function(e){t.$refs.thumbnails.goTo(l),t.syncSliders(l)}}},[n("img",{attrs:{src:e}})])})),t._v(" "),n("template",{slot:"prevButton"},[n("i",{staticClass:"fas fa-chevron-left"})]),t._v(" "),n("template",{slot:"nextButton"},[n("i",{staticClass:"fas fa-chevron-right"})])],2):t._e()],1)],1):n("div",{key:"2",staticClass:"row mb-100 mx-5 px-2 text-center"},t._l(2,(function(t){return n("div",{key:t,staticClass:"col-12 mb-4"},[n("client-only",[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-img")],1)],1)],1)})),0)]),t._ssrNode(' <div class="row mx-5 justify-content-center mb-100" data-v-10cb36ff>'+(t.GALLERY.links&&t.GALLERY.meta.last_page>1?'<nav aria-label="Page navigation example" data-v-10cb36ff><ul class="pagination pagination-lg " data-v-10cb36ff>'+(t.GALLERY.links.prev?'<li class="page-item" data-v-10cb36ff><a href="javascript:void(0);" aria-label="Previous" class="page-link border-0" data-v-10cb36ff><span aria-hidden="true" data-v-10cb36ff>«</span></a></li>':"\x3c!----\x3e")+' <li class="page-item disabled " data-v-10cb36ff>'+(t.loading?'<a class="page-link border-0" data-v-10cb36ff>Loading...</a>':'<a href="#" class="page-link border-0" data-v-10cb36ff>'+t._ssrEscape(t._s(t.GALLERY.meta.current_page))+"</a>")+"</li> "+(t.GALLERY.links.next?'<li class="page-item" data-v-10cb36ff><a href="javascript:void(0)" aria-label="Next" class="page-link border-0" data-v-10cb36ff><span aria-hidden="true" data-v-10cb36ff>»</span></a></li>':"\x3c!----\x3e")+"</ul></nav>":"\x3c!----\x3e")+"</div>")],2)}),[],!1,(function(t){var e=n(56);e.__inject__&&e.__inject__(t)}),"10cb36ff","9104a650");e.default=component.exports}};