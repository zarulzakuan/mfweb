(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{shHm:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var i=t("pMnS"),u=t("MKJQ"),r=t("sZkV"),a=t("5zTm"),s=t("TSSN"),c=t("s7LF"),b=t("SVse"),d=t("AytR"),p=t("HDdC"),h=t("JIr8"),g=t("IheW");let m=(()=>{class n{constructor(n){this.httpClient=n,this.APIURL=d.a.baseUrl}getHospital(n){return this.httpClient.get(`${this.APIURL}/hospital/${n}`).pipe(Object(h.a)(n=>this.handleError(n)))}getFarmasi(n){return this.httpClient.get(`${this.APIURL}/farmasi/${n}`).pipe(Object(h.a)(n=>this.handleError(n)))}handleError(n){return p.a.throw(n||"Unknown Application Error")}}return n.ngInjectableDef=e.Ob({factory:function(){return new n(e.Pb(g.c))},token:n,providedIn:"root"}),n})();class f{constructor(n,l,t){this.navCtrl=n,this.route=l,this.hospitalService=t,this.hospitalList=[],this.farmasiList=[],this.doctor={id:4,name:"MsC John Carter",speciality:"Internal medicine",photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=124&q=80",reviews:582,stars:4.8,bio:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",member_since:"Mar, 2005",appointments:1200,services:[{id:1,service:"Dental Consultant",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s",price:20,isChecked:!1},{id:2,service:"Hair Loss Treatment",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s",price:25,isChecked:!1},{id:3,service:"Acne/Pimples Treatment",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s",price:90,isChecked:!1},{id:4,service:"Wart removal",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s",price:80,isChecked:!1}]}}ngOnInit(){this.getHospitalList()}getHospitalList(){this.hospitalService.getHospital("penang").subscribe(n=>{this.hospitalList=n})}getFarmasiList(){this.hospitalService.getFarmasi("Je9mqIhPsx1bwzQKNZFw").subscribe(n=>{this.farmasiList=n})}goBack(){this.navCtrl.navigateRoot(["/tabs/patients"])}onNext(){this.route.navigate(["/order-form/patient-form",{queryParams:JSON.stringify({hospital:this.hospital,farmasi:this.farmasi})}])}onClick(n){console.log(n)}}var C=t("iInd"),k=e.ob({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-primary);color:#fff}ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-primary)}ion-select[_ngcontent-%COMP%]{box-shadow:none!important;border-radius:6pt!important;--padding-top:0.7rem;--padding-bottom:0.7rem;--padding-start:1rem;--padding-end:1rem;--icon-color:#508eff;background:#e5edfa!important;text-align:left!important}.select-text[_ngcontent-%COMP%]{text-align:left}.content[_ngcontent-%COMP%]{border-radius:14pt 14pt 0 0;background:#fff;padding-top:1rem;min-height:100%}ion-toolbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}ion-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700;font-size:12pt;margin-top:.5rem}ion-item[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0;--inner-padding-end:0}ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{--border-radius:6pt;margin:0 1rem;width:42pt;height:42pt}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#fff}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:8pt;text-transform:uppercase;color:rgba(255,255,255,.6)}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#ffffff}.apply-button[_ngcontent-%COMP%]{margin:1rem!important}.block-container[_ngcontent-%COMP%]{padding:.5rem 1.5rem}.block-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:11pt;line-height:16pt;color:var(--ion-color-text)}ion-text[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{margin-top:0;font-size:12pt;font-weight:700;color:var(--ion-color-title)}"]],data:{}});function v(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.nb,u.C)),e.pb(1,49152,null,0,r.nb,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.Jb(2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit)}),(function(n,l){n(l,2,0,l.context.$implicit.nama)}))}function x(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.nb,u.C)),e.pb(1,49152,null,0,r.nb,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.Jb(2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit)}),(function(n,l){n(l,2,0,l.context.$implicit.nama)}))}function P(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,16,"ion-header",[["class","ion-no-border"]],null,null,null,u.bb,u.p)),e.pb(1,49152,null,0,r.D,[e.h,e.k,e.x],null,null),(n()(),e.qb(2,0,null,0,14,"ion-toolbar",[],null,null,null,u.xb,u.L)),e.pb(3,49152,null,0,r.Bb,[e.h,e.k,e.x],null,null),e.pb(4,81920,null,0,a.a,[e.k,e.B,r.f],{scrollArea:[0,"scrollArea"]},null),(n()(),e.qb(5,0,null,0,2,"ion-back-button",[["color","light"],["slot","start"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Cb(n,7).onClick(t)&&o),o}),u.O,u.c)),e.pb(6,49152,null,0,r.i,[e.h,e.k,e.x],{color:[0,"color"]},null),e.pb(7,16384,null,0,r.j,[[2,r.hb],r.Hb],null,null),(n()(),e.qb(8,0,null,0,3,"ion-title",[],null,null,null,u.wb,u.K)),e.pb(9,49152,null,0,r.zb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(10,0,["",""])),e.Db(131072,s.j,[s.k,e.h]),(n()(),e.qb(12,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,u.Q,u.e)),e.pb(13,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(n()(),e.qb(14,0,null,0,2,"ion-button",[["class","circle-button ion-no-padding"],["color","default"],["fill","clear"],["shape","round"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e}),u.P,u.d)),e.pb(15,49152,null,0,r.m,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(n()(),e.qb(16,0,null,0,0,"i",[["class","icon-x"]],null,null,null,null,null)),(n()(),e.qb(17,0,null,null,34,"ion-content",[["scrollEvents","true"]],null,null,null,u.Y,u.m)),e.pb(18,49152,[["scrollArea",4]],0,r.w,[e.h,e.k,e.x],{scrollEvents:[0,"scrollEvents"]},null),(n()(),e.qb(19,0,null,0,32,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.qb(20,0,null,null,15,"div",[["class","block-container flex flex-column ion-text-left"]],null,null,null,null,null)),(n()(),e.qb(21,0,null,null,4,"ion-text",[["color","dark"]],null,null,null,u.ub,u.I)),e.pb(22,49152,null,0,r.wb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(23,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),e.Jb(24,null,["",""])),e.Db(131072,s.j,[s.k,e.h]),(n()(),e.qb(26,0,null,null,9,"ion-select",[["class","ion-text-end"],["interface","action-sheet"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,27)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,27)._handleChangeEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(i.hospital=t)&&o),"ionChange"===l&&(o=!1!==i.getFarmasiList()&&o),o}),u.ob,u.B)),e.pb(27,16384,null,0,r.Mb,[e.k],null,null),e.Gb(1024,null,c.b,(function(n){return[n]}),[r.Mb]),e.pb(29,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.c,null,[c.e]),e.pb(31,16384,null,0,c.d,[[4,c.c]],null,null),e.pb(32,49152,null,0,r.mb,[e.h,e.k,e.x],{interface:[0,"interface"],placeholder:[1,"placeholder"]},null),e.Db(131072,s.j,[s.k,e.h]),(n()(),e.fb(16777216,null,0,1,null,v)),e.pb(35,278528,null,0,b.j,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(36,0,null,null,15,"div",[["class","block-container flex flex-column ion-text-left"]],null,null,null,null,null)),(n()(),e.qb(37,0,null,null,4,"ion-text",[["color","dark"]],null,null,null,u.ub,u.I)),e.pb(38,49152,null,0,r.wb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(39,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),e.Jb(40,null,["",""])),e.Db(131072,s.j,[s.k,e.h]),(n()(),e.qb(42,0,null,null,9,"ion-select",[["class","ion-text-end"],["interface","action-sheet"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,43)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,43)._handleChangeEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(i.farmasi=t)&&o),o}),u.ob,u.B)),e.pb(43,16384,null,0,r.Mb,[e.k],null,null),e.Gb(1024,null,c.b,(function(n){return[n]}),[r.Mb]),e.pb(45,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.c,null,[c.e]),e.pb(47,16384,null,0,c.d,[[4,c.c]],null,null),e.pb(48,49152,null,0,r.mb,[e.h,e.k,e.x],{interface:[0,"interface"],placeholder:[1,"placeholder"]},null),e.Db(131072,s.j,[s.k,e.h]),(n()(),e.fb(16777216,null,0,1,null,x)),e.pb(51,278528,null,0,b.j,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(52,0,null,null,7,"ion-footer",[["class","ion-no-border"]],null,null,null,u.Z,u.n)),e.pb(53,49152,null,0,r.B,[e.h,e.k,e.x],null,null),(n()(),e.qb(54,0,null,0,5,"ion-toolbar",[],null,null,null,u.xb,u.L)),e.pb(55,49152,null,0,r.Bb,[e.h,e.k,e.x],null,null),(n()(),e.qb(56,0,null,0,3,"ion-button",[["class","apply-button"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onNext()&&e),e}),u.P,u.d)),e.pb(57,49152,null,0,r.m,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),e.Jb(58,0,[" "," "])),e.Db(131072,s.j,[s.k,e.h])],(function(n,l){var t=l.component;n(l,4,0,e.Cb(l,18)),n(l,6,0,"light"),n(l,15,0,"default","clear","round"),n(l,18,0,"true"),n(l,22,0,"dark"),n(l,29,0,t.hospital),n(l,32,0,"action-sheet",e.ub(1,"",e.Kb(l,32,1,e.Cb(l,33).transform("hospital")),"")),n(l,35,0,t.hospitalList),n(l,38,0,"dark"),n(l,45,0,t.farmasi),n(l,48,0,"action-sheet",e.ub(1,"",e.Kb(l,48,1,e.Cb(l,49).transform("pharmacy")),"")),n(l,51,0,t.farmasiList),n(l,57,0,!t.hospital||!t.farmasi,"block")}),(function(n,l){n(l,10,0,e.Kb(l,10,0,e.Cb(l,11).transform("create_supply"))),n(l,24,0,e.Kb(l,24,0,e.Cb(l,25).transform("hospital"))),n(l,26,0,e.Cb(l,31).ngClassUntouched,e.Cb(l,31).ngClassTouched,e.Cb(l,31).ngClassPristine,e.Cb(l,31).ngClassDirty,e.Cb(l,31).ngClassValid,e.Cb(l,31).ngClassInvalid,e.Cb(l,31).ngClassPending),n(l,40,0,e.Kb(l,40,0,e.Cb(l,41).transform("pharmacy"))),n(l,42,0,e.Cb(l,47).ngClassUntouched,e.Cb(l,47).ngClassTouched,e.Cb(l,47).ngClassPristine,e.Cb(l,47).ngClassDirty,e.Cb(l,47).ngClassValid,e.Cb(l,47).ngClassInvalid,e.Cb(l,47).ngClassPending),n(l,58,0,e.Kb(l,58,0,e.Cb(l,59).transform("next")))}))}function M(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,1,"app-order-form",[],null,null,null,P,k)),e.pb(1,114688,null,0,f,[r.Hb,C.m,m],null,null)],(function(n,l){n(l,1,0)}),null)}var O=e.mb("app-order-form",f,M,{},{},[]);const y=()=>Promise.all([t.e(0),t.e(105)]).then(t.bind(null,"qZm8")).then(n=>n.PatientFormPageModuleNgFactory),_=()=>Promise.all([t.e(0),t.e(104)]).then(t.bind(null,"2pdt")).then(n=>n.OthersFormPageModuleNgFactory);class q{}var A=t("j1ZV"),L=t("FUS3");t.d(l,"OrderFormPageModuleNgFactory",(function(){return w}));var w=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,O]],[3,e.j],e.v]),e.Ab(4608,b.m,b.l,[e.s,[2,b.A]]),e.Ab(4608,c.g,c.g,[]),e.Ab(4608,r.c,r.c,[e.x,e.g]),e.Ab(4608,r.Gb,r.Gb,[r.c,e.j,e.p]),e.Ab(4608,r.Kb,r.Kb,[r.c,e.j,e.p]),e.Ab(5120,e.d,(function(n,l,t){return[r.Pb(n,l,t)]}),[r.Ob,b.c,e.x]),e.Ab(1073742336,b.b,b.b,[]),e.Ab(1073742336,c.f,c.f,[]),e.Ab(1073742336,c.a,c.a,[]),e.Ab(1073742336,r.Db,r.Db,[]),e.Ab(1073742336,s.h,s.h,[]),e.Ab(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),e.Ab(1073742336,q,q,[]),e.Ab(1073742336,A.a,A.a,[]),e.Ab(1073742336,L.a,L.a,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,C.k,(function(){return[[{path:"",component:f},{path:"patient-form",loadChildren:y},{path:"others-form",loadChildren:_}]]}),[]),e.Ab(256,r.Ob,void 0,[])])}))}}]);