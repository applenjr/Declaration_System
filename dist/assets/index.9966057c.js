import{e as R,b as L,f as q,B as N,h as y,r as F,L as M,j as u,o as $,l as W,m as e,w as a,p as n,v as G,t as C,x as o,F as H,U as J,V as Q,M as X,y as Y,z as Z,_ as ee}from"./index.2c261d0b.js";const te=[{title:"\u5E8F\u53F7",align:"center",colKey:"index",width:50},{title:"\u8BA2\u5355\u53F7",align:"center",colKey:"orderId",width:120,ellipsis:!0},{title:"\u5546\u54C1",align:"left",colKey:"commodity",width:200,ellipsis:!0},{title:"\u62A5\u5355\u4EBA",align:"center",colKey:"reporter",width:80,ellipsis:!0},{title:"\u5B9E\u4ED8\u91D1\u989D",align:"center",colKey:"payAmount",width:80,ellipsis:!0},{title:"\u9884\u8BA1\u8FD4\u6B3E\u91D1\u989D",align:"center",colKey:"expectPayback",width:80,ellipsis:!0},{title:"\u5B9E\u9645\u8FD4\u6B3E\u91D1\u989D",align:"center",colKey:"actualPayback",width:80,ellipsis:!0},{title:"\u7533\u8BF7\u8FD4\u6B3E\u65F6\u95F4",align:"center",colKey:"applyPaybackTime",width:120,ellipsis:!0},{title:"\u62A5\u5355\u65F6\u95F4",align:"center",colKey:"declarateTime",width:120,ellipsis:!0},{title:"\u8BA2\u5355\u72B6\u6001",align:"center",colKey:"status",width:80,ellipsis:!0},{title:"\u4E0B\u5355\u56FE",align:"center",colKey:"orderPic",width:80},{title:"\u5B8C\u6210\u56FE",align:"center",colKey:"completePic",width:80},{title:"\u64CD\u4F5C",align:"left",colKey:"settings",fixed:"right",width:200}],x=d=>(Y("data-v-54f0dc73"),d=d(),Z(),d),ae=x(()=>o("div",{class:"cardTitle"},"\u641C\u7D22\u6761\u4EF6",-1)),ie={class:"tdesign-demo-image-viewer__base"},oe={class:"tdesign-demo-image-viewer__ui-image"},ue=["src"],le={class:"tdesign-demo-image-viewer__base"},ne={class:"tdesign-demo-image-viewer__ui-image"},se=["src"],re={class:"settingBtns"},ce=x(()=>o("div",null,"\u786E\u5B9A\u8981\u5BA1\u6279\u901A\u8FC7\u5417\uFF1F",-1)),de=R({__name:"index",setup(d){const D=L();q();const E=N(()=>D.isUseTabsRouter?48:0),g=()=>document.querySelector(`.${J}-layout`),l=y({tableLoading:!1,tableData:[{index:1,orderId:"123456789",commodity:"\u5546\u54C1\u540D\u79F0",reporter:"\u62A5\u5355\u4EBA",payAmount:"1000",expectPayback:"800",actualPayback:"700",applyPaybackTime:"2023-08-01",declarateTime:"2023-08-02",status:"\u5F85\u5BA1\u6838",orderPic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg",completePic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg"},{index:1,orderId:"123456789",commodity:"\u52A0\u957F\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0\u5546\u54C1\u540D\u79F0",reporter:"\u62A5\u5355\u4EBA",payAmount:"1000",expectPayback:"800",actualPayback:"700",applyPaybackTime:"2023-08-01",declarateTime:"2023-08-02",status:"\u5F85\u5BA1\u6838",orderPic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg",completePic:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRF4j.img?w=1920&h=1080&q=60&m=2&f=jpg"}],searchText:"",pagination:{total:0,current:1,pageSize:20}}),k=y([{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"},{label:"option4",value:"4"},{label:"OPTION5",value:"5"}]),_=F(!1),v=F(!1),m=F(!1),p=y({orderId:"",remark:""});M(()=>{});const P=s=>{console.log("\u5206\u9875\u53D8\u5316",s)},T=()=>{_.value=!0},V=()=>{v.value=!0},S=s=>{Object.assign(p,{orderId:s.orderId,remark:""}),m.value=!0},I=()=>{console.log(p),m.value=!1},K=s=>{console.log(s);const i=Q.confirm({header:"\u63D0\u793A",theme:"warning",body:"\u786E\u5B9A\u8981\u4F5C\u5E9F\u5417\uFF1F",confirmBtn:{content:"\u786E\u8BA4",variant:"base",theme:"danger"},cancelBtn:"\u53D6\u6D88",onConfirm:()=>{X.success("\u5DF2\u4F5C\u5E9F"),i.destroy()},onClose:()=>{i.hide()}})};return(s,i)=>{const b=u("t-row"),f=u("t-input"),j=u("t-select"),z=u("t-date-range-picker"),r=u("t-icon"),h=u("t-button"),w=u("t-card"),A=u("t-tag"),B=u("t-image-viewer"),U=u("t-table"),O=u("t-dialog");return $(),W(H,null,[e(w,{class:"wait-approval-card"},{default:a(()=>[e(b,{justify:"start",class:"cardTop"},{default:a(()=>[ae]),_:1}),e(b,{justify:"start",class:"cardTop"},{default:a(()=>[e(f,{class:"inputStyle",modelValue:l.searchText,"onUpdate:modelValue":i[0]||(i[0]=t=>l.searchText=t),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7",clearable:""},null,8,["modelValue"]),e(j,{class:"inputStyle",modelValue:l.searchText,"onUpdate:modelValue":i[1]||(i[1]=t=>l.searchText=t),placeholder:"-\u8BF7\u9009\u62E9\u5546\u54C1-",options:k,filterable:"",clearable:""},null,8,["modelValue","options"]),e(f,{class:"inputStyle",modelValue:l.searchText,"onUpdate:modelValue":i[2]||(i[2]=t=>l.searchText=t),placeholder:"\u8BF7\u8F93\u5165\u62A5\u5355\u4EBA",clearable:""},null,8,["modelValue"]),e(z,{class:"inputStyle rangeInputStyle",placeholder:["\u62A5\u5355\u65E5\u671F \u8D77","\u62A5\u5355\u65E5\u671F \u6B62"],clearable:""}),e(h,{class:"inputStyle",style:{width:"100px"}},{icon:a(()=>[e(r,{name:"search"})]),default:a(()=>[n(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1}),e(w,{class:"wait-approval-card"},{default:a(()=>[e(U,{class:"tableStyle",data:l.tableData,columns:G(te),"row-key":"id",hover:"",stripe:"","table-content-width":"1600",pagination:l.pagination,loading:l.tableLoading,"header-affixed-top":{offsetTop:E.value,container:g},"horizontal-scroll-affixed-bottom":{offsetBottom:64,container:g},"pagination-affixed-bottom":{offsetBottom:0,container:g},onPageChange:P,size:"small",style:{"margin-top":"10px"}},{orderId:a(t=>[e(A,{theme:"primary",variant:"light-outline"},{default:a(()=>[n(C(t.row.orderId),1)]),_:2},1024)]),orderPic:a(t=>[o("div",ie,[e(B,{visible:_.value,"onUpdate:visible":i[3]||(i[3]=c=>_.value=c),images:[t.row.orderPic]},{trigger:a(()=>[o("div",oe,[o("img",{alt:"test",src:t.row.orderPic,class:"tdesign-demo-image-viewer__ui-image--img"},null,8,ue),o("div",{class:"tdesign-demo-image-viewer__ui-image--hover",onClick:T},[o("span",null,[e(r,{size:"1.2em",name:"browse"}),n(" \u9884\u89C8")])])])]),_:2},1032,["visible","images"])])]),completePic:a(t=>[o("div",le,[e(B,{visible:v.value,"onUpdate:visible":i[4]||(i[4]=c=>v.value=c),images:[t.row.completePic]},{trigger:a(()=>[o("div",ne,[o("img",{alt:"test",src:t.row.completePic,class:"tdesign-demo-image-viewer__ui-image--img"},null,8,se),o("div",{class:"tdesign-demo-image-viewer__ui-image--hover",onClick:V},[o("span",null,[e(r,{size:"1.2em",name:"browse"}),n(" \u9884\u89C8")])])])]),_:2},1032,["visible","images"])])]),status:a(t=>[e(A,{theme:"warning",variant:"light-outline",shape:"round"},{default:a(()=>[n(C(t.row.status),1)]),_:2},1024)]),settings:a(t=>[o("div",re,[e(h,{theme:"success",onClick:c=>S(t.row)},{icon:a(()=>[e(r,{name:"check-circle"})]),default:a(()=>[n(" \u5BA1\u6279\u901A\u8FC7 ")]),_:2},1032,["onClick"]),e(h,{theme:"danger",onClick:c=>K(t.row)},{icon:a(()=>[e(r,{name:"delete"})]),default:a(()=>[n(" \u4F5C\u5E9F ")]),_:2},1032,["onClick"])])]),_:1},8,["data","columns","pagination","loading","header-affixed-top","horizontal-scroll-affixed-bottom","pagination-affixed-bottom"])]),_:1}),e(O,{visible:m.value,"onUpdate:visible":i[6]||(i[6]=t=>m.value=t),header:"\u5BA1\u6279\u901A\u8FC7",theme:"warning",attach:"body","confirm-on-enter":!0,"on-confirm":I},{body:a(()=>[ce,e(f,{style:{"margin-top":"10px"},modelValue:p.remark,"onUpdate:modelValue":i[5]||(i[5]=t=>p.remark=t),placeholder:"\u5BA1\u6279\u901A\u8FC7\u8BF7\u586B\u5199\u5907\u6CE8"},null,8,["modelValue"])]),_:1},8,["visible"])],64)}}});const pe=ee(de,[["__scopeId","data-v-54f0dc73"]]);export{pe as default};