import{e as q,b as N,f as M,B as $,h as f,r as h,L as G,j as l,o as H,l as J,m as e,w as a,p as d,v as Q,t as C,x as i,F as W,U as X,y as Y,z as Z,_ as ee}from"./index.2c261d0b.js";const te=[{title:"\u5E8F\u53F7",align:"center",colKey:"index",width:50},{title:"\u8BA2\u5355\u53F7",align:"center",colKey:"orderId",width:120,ellipsis:!0},{title:"\u5546\u54C1",align:"left",colKey:"commodity",width:200,ellipsis:!0},{title:"\u62A5\u5355\u4EBA",align:"center",colKey:"reporter",width:80,ellipsis:!0},{title:"\u5B9E\u4ED8\u91D1\u989D",align:"center",colKey:"payAmount",width:80,ellipsis:!0},{title:"\u9884\u8BA1\u8FD4\u6B3E\u91D1\u989D",align:"center",colKey:"expectPayback",width:80,ellipsis:!0},{title:"\u5B9E\u9645\u8FD4\u6B3E\u91D1\u989D",align:"center",colKey:"actualPayback",width:80,ellipsis:!0},{title:"\u7533\u8BF7\u8FD4\u6B3E\u65F6\u95F4",align:"center",colKey:"applyPaybackTime",width:120,ellipsis:!0},{title:"\u62A5\u5355\u65F6\u95F4",align:"center",colKey:"declarateTime",width:120,ellipsis:!0},{title:"\u8BA2\u5355\u72B6\u6001",align:"center",colKey:"status",width:80,ellipsis:!0},{title:"\u4E0B\u5355\u56FE",align:"center",colKey:"orderPic",width:80},{title:"\u5B8C\u6210\u56FE",align:"center",colKey:"completePic",width:80},{title:"\u64CD\u4F5C",align:"left",colKey:"settings",fixed:"right",width:100}],ae=c=>(Y("data-v-8ca0611c"),c=c(),Z(),c),ue=ae(()=>i("div",{class:"cardTitle"},"\u641C\u7D22\u6761\u4EF6",-1)),le={class:"tdesign-demo-image-viewer__base"},oe={class:"tdesign-demo-image-viewer__ui-image"},ie=["src"],ne={class:"tdesign-demo-image-viewer__base"},se={class:"tdesign-demo-image-viewer__ui-image"},de=["src"],re={class:"settingBtns"},ce=q({__name:"index",setup(c){const V=N();M();const k=$(()=>V.isUseTabsRouter?48:0),b=()=>document.querySelector(`.${X}-layout`),n=f({tableLoading:!1,tableData:[{index:1,orderId:"123456789",commodity:"\u5546\u54C1\u540D\u79F0",reporter:"\u62A5\u5355\u4EBA",payAmount:"1000",expectPayback:"800",actualPayback:"700",applyPaybackTime:"2023-08-01",declarateTime:"2023-08-02",status:"\u5DF2\u5BA1\u6838",orderPic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg",completePic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg"},{index:1,orderId:"123456789",commodity:"\u52A0\u957F\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0",reporter:"\u62A5\u5355\u4EBA",payAmount:"1000",expectPayback:"800",actualPayback:"700",applyPaybackTime:"2023-08-01",declarateTime:"2023-08-02",status:"\u5BA1\u6838\u4E2D",orderPic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg",completePic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg"}],searchText:"",pagination:{total:0,current:1,pageSize:20}}),B=f([{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"},{label:"option4",value:"4"},{label:"OPTION5",value:"5"}]),P=f([{label:"\u5168\u90E8",value:"0"},{label:"\u5BA1\u6838\u4E2D",value:"1"},{label:"\u5DF2\u5BA1\u6838",value:"2"}]),y=h(!1),v=h(!1),m=h(!1),o=f({commodity:"",status:"",orderId:"",payAmount:"",remark:""});G(()=>{});const T=s=>{console.log("\u5206\u9875\u53D8\u5316",s)},I=()=>{y.value=!0},S=()=>{v.value=!0},U=s=>{console.log(s),Object.assign(o,{commodity:s.commodity,status:s.status,orderId:s.orderId,payAmount:s.payAmount,remark:s.remark}),m.value=!0},K=()=>{m.value=!1,console.log(o)};return(s,u)=>{const A=l("t-row"),p=l("t-input"),F=l("t-select"),j=l("t-date-range-picker"),g=l("t-icon"),w=l("t-button"),D=l("t-card"),E=l("t-tag"),x=l("t-image-viewer"),z=l("t-table"),r=l("t-form-item"),O=l("t-textarea"),R=l("t-form"),L=l("t-dialog");return H(),J(W,null,[e(D,{class:"declarated-card"},{default:a(()=>[e(A,{justify:"start",class:"cardTop"},{default:a(()=>[ue]),_:1}),e(A,{justify:"start",class:"cardTop"},{default:a(()=>[e(p,{class:"inputStyle",modelValue:n.searchText,"onUpdate:modelValue":u[0]||(u[0]=t=>n.searchText=t),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7",clearable:""},null,8,["modelValue"]),e(F,{class:"inputStyle",modelValue:n.searchText,"onUpdate:modelValue":u[1]||(u[1]=t=>n.searchText=t),placeholder:"-\u8BF7\u9009\u62E9\u5546\u54C1-",options:B,filterable:"",clearable:""},null,8,["modelValue","options"]),e(p,{class:"inputStyle",modelValue:n.searchText,"onUpdate:modelValue":u[2]||(u[2]=t=>n.searchText=t),placeholder:"\u8BF7\u8F93\u5165\u62A5\u5355\u4EBA",clearable:""},null,8,["modelValue"]),e(j,{class:"inputStyle rangeInputStyle",placeholder:["\u62A5\u5355\u65E5\u671F \u8D77","\u62A5\u5355\u65E5\u671F \u6B62"],clearable:""}),e(w,{class:"inputStyle",style:{width:"100px"}},{icon:a(()=>[e(g,{name:"search"})]),default:a(()=>[d(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1}),e(D,{class:"declarated-card"},{default:a(()=>[e(z,{class:"tableStyle",data:n.tableData,columns:Q(te),"row-key":"id",hover:"",stripe:"","table-content-width":"1600",pagination:n.pagination,loading:n.tableLoading,"header-affixed-top":{offsetTop:k.value,container:b},"horizontal-scroll-affixed-bottom":{offsetBottom:64,container:b},"pagination-affixed-bottom":{offsetBottom:0,container:b},onPageChange:T,size:"small",style:{"margin-top":"10px"}},{orderId:a(t=>[e(E,{theme:"primary",variant:"light-outline"},{default:a(()=>[d(C(t.row.orderId),1)]),_:2},1024)]),orderPic:a(t=>[i("div",le,[e(x,{visible:y.value,"onUpdate:visible":u[3]||(u[3]=_=>y.value=_),images:[t.row.orderPic]},{trigger:a(()=>[i("div",oe,[i("img",{alt:"test",src:t.row.orderPic,class:"tdesign-demo-image-viewer__ui-image--img"},null,8,ie),i("div",{class:"tdesign-demo-image-viewer__ui-image--hover",onClick:I},[i("span",null,[e(g,{size:"1.2em",name:"browse"}),d(" \u9884\u89C8")])])])]),_:2},1032,["visible","images"])])]),completePic:a(t=>[i("div",ne,[e(x,{visible:v.value,"onUpdate:visible":u[4]||(u[4]=_=>v.value=_),images:[t.row.completePic]},{trigger:a(()=>[i("div",se,[i("img",{alt:"test",src:t.row.completePic,class:"tdesign-demo-image-viewer__ui-image--img"},null,8,de),i("div",{class:"tdesign-demo-image-viewer__ui-image--hover",onClick:S},[i("span",null,[e(g,{size:"1.2em",name:"browse"}),d(" \u9884\u89C8")])])])]),_:2},1032,["visible","images"])])]),status:a(t=>[e(E,{theme:"success",variant:"light-outline",shape:"round"},{default:a(()=>[d(C(t.row.status),1)]),_:2},1024)]),settings:a(t=>[i("div",re,[e(w,{theme:"warning",onClick:_=>U(t.row)},{icon:a(()=>[e(g,{name:"edit"})]),default:a(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])])]),_:1},8,["data","columns","pagination","loading","header-affixed-top","horizontal-scroll-affixed-bottom","pagination-affixed-bottom"])]),_:1}),e(L,{visible:m.value,"onUpdate:visible":u[10]||(u[10]=t=>m.value=t),header:"\u62A5\u5355\u7F16\u8F91",attach:"body","confirm-on-enter":!0,"on-confirm":K},{body:a(()=>[e(R,null,{default:a(()=>[e(r,{label:"\u5546\u54C1"},{default:a(()=>[e(F,{modelValue:o.commodity,"onUpdate:modelValue":u[5]||(u[5]=t=>o.commodity=t),placeholder:"-\u8BF7\u9009\u62E9\u5546\u54C1-",options:B,filterable:"",clearable:""},null,8,["modelValue","options"])]),_:1}),e(r,{label:"\u72B6\u6001"},{default:a(()=>[e(F,{modelValue:o.status,"onUpdate:modelValue":u[6]||(u[6]=t=>o.status=t),placeholder:"-\u8BF7\u9009\u62E9\u72B6\u6001-",options:P,filterable:"",clearable:""},null,8,["modelValue","options"])]),_:1}),e(r,{label:"\u8BA2\u5355\u53F7"},{default:a(()=>[e(p,{modelValue:o.orderId,"onUpdate:modelValue":u[7]||(u[7]=t=>o.orderId=t),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5B9E\u4ED8\u91D1\u989D"},{default:a(()=>[e(p,{modelValue:o.payAmount,"onUpdate:modelValue":u[8]||(u[8]=t=>o.payAmount=t),placeholder:"\u8BF7\u8F93\u5165\u5B9E\u4ED8\u91D1\u989D",suffix:"\u5143"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5907\u6CE8"},{default:a(()=>[e(O,{modelValue:o.remark,"onUpdate:modelValue":u[9]||(u[9]=t=>o.remark=t),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["visible"])],64)}}});const pe=ee(ce,[["__scopeId","data-v-8ca0611c"]]);export{pe as default};