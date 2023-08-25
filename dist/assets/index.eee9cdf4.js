import{i as R,M as v,e as H,b as q,f as G,B as X,h as F,r as T,L as J,O as Q,j as s,o as W,l as Z,m as e,w as a,p as d,v as h,t as ee,x as A,X as C,Y as w,F as te,U as oe,y as ae,z as ue,_ as le}from"./index.2c261d0b.js";import{t as k}from"./date.91880873.js";const ne={commodityList:"/commodity/list"},se=[{title:"\u5E8F\u53F7",align:"center",colKey:"index",width:80},{title:"\u5546\u54C1\u540D\u79F0",align:"left",colKey:"commodity",width:160,ellipsis:!0},{title:"\u5269\u4F59\u989D\u5EA6",align:"center",colKey:"remainAmount",width:80,ellipsis:!0},{title:"\u603B\u91D1\u989D",align:"center",colKey:"totalAmount",width:80,ellipsis:!0},{title:"\u9884\u8BA1\u8FD4\u6B3E\u91D1\u989D",align:"center",colKey:"expectPayback",width:80,ellipsis:!0},{title:"\u521B\u5EFA\u65F6\u95F4",align:"center",colKey:"buildTime",width:120,ellipsis:!0},{title:"\u622A\u6B62\u65F6\u95F4",align:"center",colKey:"endTime",width:120,ellipsis:!0},{title:"\u72B6\u6001",align:"center",colKey:"status",width:80,ellipsis:!0},{title:"\u64CD\u4F5C",align:"left",colKey:"settings",fixed:"right",width:200}],ie=i=>{switch(i){case 0:return"\u7981\u7528";case 1:return"\u542F\u7528"}},ce=i=>{switch(i){case"\u7981\u7528":return"danger";case"\u542F\u7528":return"success"}},de=i=>{R(i)?(navigator.clipboard.writeText(i),v.success("\u5DF2\u590D\u5236")):v.error("\u590D\u5236\u503C\u4E3A\u7A7A")},re=i=>(ae("data-v-9cb896ec"),i=i(),ue(),i),me=re(()=>A("div",{class:"cardTitle"},"\u641C\u7D22\u6761\u4EF6",-1)),pe={class:"settingBtns"},ge=H({__name:"index",setup(i){const V=q();G();const E=X(()=>V.isUseTabsRouter?48:0),y=()=>document.querySelector(`.${oe}-layout`),u=F({tableLoading:!1,tableData:[],searchText:"",pagination:{total:0,current:1,pageSize:20}}),S=F([{label:"\u5F85\u5BA1\u6838",value:"1"},{label:"\u5BA1\u6838\u4E2D",value:"2"},{label:"\u5DF2\u5BA1\u6838",value:"3"}]),_=T("\u7F16\u8F91\u5546\u54C1\u4FE1\u606F"),p=T(!1),n=F({commodity:"",shoppingUrl:"",totalAmount:"",expectPayback:"",endTime:""}),c=F({pageNo:1,pageItems:20,commodity:null,status:null});J(()=>{u.pagination.current=c.pageNo,u.pagination.pageSize=c.pageItems,x()});const I=l=>{console.log("\u5206\u9875\u53D8\u5316",l),c.pageNo=l.current,c.pageItems=l.pageSize,u.pagination.current=c.pageNo,u.pagination.pageSize=c.pageItems,x()},x=()=>{u.tableData=[],u.tableLoading=!0,Q.post({url:ne.commodityList,data:c}).then(l=>{u.pagination.total=l.totalRows,u.tableData=l.list,u.tableData.map((t,b)=>{t.index=(u.pagination.current-1)*u.pagination.pageSize+b+1,t.remainAmount+=" \u5143",t.totalAmount+=" \u5143",t.expectPayback+=" \u5143",t.buildTime=k(t.buildTime),t.endTime=k(t.endTime),t.status=ie(t.status)}),console.log(u.tableData)}).catch(l=>{}).finally(()=>{u.tableLoading=!1})},L=()=>{_.value="\u65B0\u589E\u5546\u54C1\u4FE1\u606F",Object.assign(n,{commodity:"",shoppingUrl:"",totalAmount:"",expectPayback:"",endTime:""}),p.value=!0},U=l=>{console.log("\u542F\u7528"),console.log(l)},N=l=>{console.log("\u7981\u7528"),console.log(l)},z=l=>{_.value="\u7F16\u8F91\u5546\u54C1\u4FE1\u606F",Object.assign(n,{commodity:l.commodity,totalAmount:l.totalAmount,expectPayback:l.expectPayback,endTime:l.endTime}),p.value=!0},K=()=>{console.log(_),p.value=!1};return(l,t)=>{const b=s("t-row"),g=s("t-input"),Y=s("t-select"),r=s("t-icon"),m=s("t-button"),B=s("t-card"),M=s("t-tag"),O=s("t-table"),f=s("t-form-item"),$=s("t-date-picker"),j=s("t-form"),P=s("t-dialog");return W(),Z(te,null,[e(B,{class:"goods-card"},{default:a(()=>[e(b,{justify:"start",class:"cardTop"},{default:a(()=>[me]),_:1}),e(b,{justify:"start",class:"cardTop"},{default:a(()=>[e(g,{class:"inputStyle",modelValue:u.searchText,"onUpdate:modelValue":t[0]||(t[0]=o=>u.searchText=o),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",clearable:""},null,8,["modelValue"]),e(Y,{class:"inputStyle",modelValue:u.searchText,"onUpdate:modelValue":t[1]||(t[1]=o=>u.searchText=o),placeholder:"-\u8BF7\u9009\u62E9\u5546\u54C1\u72B6\u6001-",options:S,filterable:"",clearable:""},null,8,["modelValue","options"]),e(m,{class:"inputStyle",style:{width:"100px"}},{icon:a(()=>[e(r,{name:"search"})]),default:a(()=>[d(" \u67E5\u8BE2 ")]),_:1}),e(m,{class:"inputStyle",style:{width:"100px"},onClick:t[2]||(t[2]=o=>L())},{icon:a(()=>[e(r,{name:"add"})]),default:a(()=>[d(" \u65B0\u589E ")]),_:1})]),_:1})]),_:1}),e(B,{class:"goods-card"},{default:a(()=>[e(O,{class:"tableStyle",data:u.tableData,columns:h(se),"row-key":"id",hover:"",stripe:"","table-layout":"auto",pagination:u.pagination,loading:u.tableLoading,"header-affixed-top":{offsetTop:E.value,container:y},"horizontal-scroll-affixed-bottom":{offsetBottom:64,container:y},"pagination-affixed-bottom":{offsetBottom:0,container:y},onPageChange:I,size:"small",style:{"margin-top":"10px"}},{status:a(o=>[e(M,{theme:h(ce)(o.row.status),variant:"light-outline",shape:"round"},{default:a(()=>[d(ee(o.row.status),1)]),_:2},1032,["theme"])]),settings:a(o=>[A("div",pe,[e(m,{theme:"primary",onClick:D=>h(de)(o.row.shoppingUrl)},{icon:a(()=>[e(r,{name:"file-copy"})]),default:a(()=>[d(" \u590D\u5236 ")]),_:2},1032,["onClick"]),C(e(m,{theme:"success",onClick:D=>U(o.row)},{icon:a(()=>[e(r,{name:"check-circle"})]),default:a(()=>[d(" \u542F\u7528 ")]),_:2},1032,["onClick"]),[[w,o.row.status==="\u7981\u7528"]]),C(e(m,{theme:"danger",onClick:D=>N(o.row)},{icon:a(()=>[e(r,{name:"close-circle"})]),default:a(()=>[d(" \u7981\u7528 ")]),_:2},1032,["onClick"]),[[w,o.row.status==="\u542F\u7528"]]),e(m,{theme:"warning",onClick:D=>z(o.row)},{icon:a(()=>[e(r,{name:"edit"})]),default:a(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])])]),_:1},8,["data","columns","pagination","loading","header-affixed-top","horizontal-scroll-affixed-bottom","pagination-affixed-bottom"])]),_:1}),e(P,{visible:p.value,"onUpdate:visible":t[8]||(t[8]=o=>p.value=o),header:_.value,attach:"body","confirm-on-enter":!0,"on-confirm":K},{body:a(()=>[e(j,null,{default:a(()=>[e(f,{label:"\u5546\u54C1"},{default:a(()=>[e(g,{modelValue:n.commodity,"onUpdate:modelValue":t[3]||(t[3]=o=>n.commodity=o),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(f,{label:"\u5546\u54C1\u94FE\u63A5"},{default:a(()=>[e(g,{modelValue:n.shoppingUrl,"onUpdate:modelValue":t[4]||(t[4]=o=>n.shoppingUrl=o),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u94FE\u63A5"},null,8,["modelValue"])]),_:1}),e(f,{label:"\u603B\u91D1\u989D"},{default:a(()=>[e(g,{modelValue:n.totalAmount,"onUpdate:modelValue":t[5]||(t[5]=o=>n.totalAmount=o),placeholder:"\u8BF7\u8F93\u5165\u603B\u91D1\u989D",suffix:"\u5143"},null,8,["modelValue"])]),_:1}),e(f,{label:"\u9884\u8BA1\u8FD4\u6B3E\u91D1\u989D"},{default:a(()=>[e(g,{modelValue:n.expectPayback,"onUpdate:modelValue":t[6]||(t[6]=o=>n.expectPayback=o),placeholder:"\u8BF7\u8F93\u5165\u9884\u8BA1\u8FD4\u6B3E\u91D1\u989D",suffix:"\u5143"},null,8,["modelValue"])]),_:1}),e(f,{label:"\u622A\u6B62\u65F6\u95F4"},{default:a(()=>[e($,{modelValue:n.endTime,"onUpdate:modelValue":t[7]||(t[7]=o=>n.endTime=o),"enable-time-picker":"",placeholder:"\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4",format:"YYYY-MM-DD HH:mm:ss",valueType:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["visible","header"])],64)}}});const be=le(ge,[["__scopeId","data-v-9cb896ec"]]);export{be as default};
