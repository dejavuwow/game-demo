(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-views-createwallet-vue","view-components-Inp-vue"],{4991:function(t,e,a){"use strict";var n=a("4efe"),i=a.n(n);i.a},"4a0e":function(t,e,a){"use strict";var n=a("fecd"),i=a.n(n);i.a},"4efe":function(t,e,a){},"8a1f":function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"c",function(){return r}),a.d(e,"b",function(){return l});a("c5f6");var n=a("2b0e"),i=a("76a0");function s(t,e){return""!==e&&null!==e||(n["default"].prototype.$message({message:"".concat(t,"不能为空"),duration:1500}),!1)}function r(t,e,a){return!(Number(e)>Number(a))||(i["MessageBox"].alert("".concat(t,"余额不足"),"提示"),!1)}function l(t,e){return!!/^\d+$/.test(e)||(i["MessageBox"].alert("请输入整数","提示"),!1)}},"907b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inp_wrap"},[a("input",{attrs:{type:t.inputData.type,placeholder:t.inputData.placeholder,name:t.inputData.name,disabled:t.inputData.disabled},domProps:{value:t.inputData.value},on:{input:function(e){t.updateVal(e.target.value,t.inputData.name)}}}),t._t("default")],2)},i=[],s={name:"inp",props:["inputData"],data:function(){return{}},computed:{},methods:{updateVal:function(t,e){this.$emit("input",{value:t,name:e})}}},r=s,l=(a("4991"),a("2877")),u=Object(l["a"])(r,n,i,!1,null,null,null);u.options.__file="Inp.vue";e["default"]=u.exports},bcf4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transitionName}},[a("div",{staticClass:"body create_wallet"},[a("Hdbar",{attrs:{title:t.title}},[a("i",{staticClass:"fa fa-angle-left",attrs:{slot:"left"},on:{click:t.changeRoute},slot:"left"}),a("i",{attrs:{slot:"right"},slot:"right"})]),a("p",{staticClass:"large"},[t._v("输入PIN码")]),a("p",{staticClass:"other padding"},[t._v("PIN码用于交易签名。Lucky Day不存储PIN码，无法提供找回功能，请牢记。")]),a("Inp",{directives:[{name:"show",rawName:"v-show",value:!t.showPwd,expression:"!showPwd"}],attrs:{inputData:t.inpData},on:{input:t.writeVal}},[a("i",{staticClass:"fa fa-eye-slash",on:{click:function(e){t.showPwd=!0}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showPwd,expression:"showPwd"}],staticClass:"inp_wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inpData.value,expression:"inpData.value"}],attrs:{type:"text",placeholder:t.inpData.placeholder,name:t.inpData.name,disabled:t.inpData.disabled},domProps:{value:t.inpData.value},on:{input:function(e){e.target.composing||t.$set(t.inpData,"value",e.target.value)}}}),a("i",{staticClass:"fa fa-eye",on:{click:function(e){t.showPwd=!1}}})]),a("button",{attrs:{type:""},on:{click:t.nextStep}},[t._v("下一步")])],1)])},i=[],s=(a("6b54"),a("7f7f"),a("8a1f")),r=a("907b"),l={name:"createWallet",components:{Inp:r["default"]},data:function(){return{transitionName:"",title:"新建钱包",inpData:{name:"pin",type:"password",placeholder:"输入PIN码",value:""},showPwd:!1,privateKey:""}},created:function(){this.transitionName="/"===this.$route.query.path?"slide-right":"slide-left"},beforeRouteLeave:function(t,e,a){this.transitionName="/"===t.path?"slide-right":"slide-left",setTimeout(a,50)},methods:{writeVal:function(t){t.name;var e=t.value;this.inpData.value=e},createdCallback:function(t){var e=this.encrypt(this.privateKey,this.inpData.value);this.changeRoute("/bindinviter",{key_store:JSON.stringify(t),newPrivateKey:e}),this.changeRoute("/bindinviter")},nextStep:function(){if(Object(s["a"])("PIN码",this.inpData.value)){var t={keyBytes:32,ivBytes:16},e=keythereum.create(t),a={kdf:"pbkdf2",cipher:"aes-128-ctr",kdfparams:{c:262144,dklen:32,prf:"hmac-sha256"}};this.privateKey=e.privateKey.toString("hex"),keythereum.dump(this.inpData.value,e.privateKey,e.salt,e.iv,a,this.createdCallback)}}}},u=l,o=(a("4a0e"),a("2877")),c=Object(o["a"])(u,n,i,!1,null,null,null);c.options.__file="createwallet.vue";e["default"]=c.exports},fecd:function(t,e,a){}}]);
//# sourceMappingURL=view-views-createwallet-vue.7c71d495.js.map