(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{231:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5d594f7f",content,!1,{sourceMap:!1})},233:function(t,e,n){"use strict";var r=n(231);n.n(r).a},234:function(t,e,n){(e=n(11)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},235:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),o=(n(233),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},265:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/27","url":"https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/200327.pdf","text":"新型コロナウイルス感染症対策に係る都市部への移動について(PDF)"}]}')},287:function(t,e,n){var content=n(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6239357a",content,!1,{sourceMap:!1})},288:function(t,e,n){var content=n(397);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2889f5a9",content,!1,{sourceMap:!1})},394:function(t,e,n){"use strict";var r=n(287);n.n(r).a},395:function(t,e,n){(e=n(11)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#003fab;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},396:function(t,e,n){"use strict";var r=n(288);n.n(r).a},397:function(t,e,n){(e=n(11)(!1)).push([t.i,".MainPage .Header[data-v-3d1c7dae]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-3d1c7dae]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-3d1c7dae]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-3d1c7dae]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-3d1c7dae]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-3d1c7dae]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-3d1c7dae]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-3d1c7dae]{padding:4px 8px}}",""]),t.exports=e},401:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(235),d=r.default.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},computed:{linkTag:function(){return this.isInternalLink?"nuxt-link":"a"},linkAttrs:function(){return this.isInternalLink?{to:this.url,class:"StaticInfo"}:{href:this.url,class:"StaticInfo"}},isInternalLink:function(){return!/^https?:\/\//.test(this.url)}}}),c=(n(394),n(4)),l=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.linkTag,t._b({tag:"component"},"component",t.linkAttrs,!1),[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null).exports,f=n(236),m=n(265),x=n(302),v=n(296),h=n(301),_=n(300),w=n(291),I=r.default.extend({components:{PageHeader:o.a,StaticInfo:l,ConfirmedCasesNumberCard:x.a,ConfirmedCasesAttributesCard:v.a,InspectionPersonsNumberCard:h.a,TelephoneAdvisoryReportsNumberCard:_.a},data:function(){var data={Data:f,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:m.newsItems};return data},computed:{updatedAt:function(){return Object(w.a)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("県内の最新感染動向")}}}),C=(n(396),Object(c.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{text:t.$t("このページは随時更新されます。更新作業を手伝っていただけると幸いです。"),url:t.localePath("/helpus")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card"),t._v(" "),n("telephone-advisory-reports-number-card")],1)],1)}),[],!1,null,"3d1c7dae",null));e.default=C.exports}}]);