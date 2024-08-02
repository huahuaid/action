import{r as b}from"./request-DgN2nWOZ.js";import{d as z,r,k as O,_ as I,a as c,o as i,c as _,b as s,e as l,w as o,F as U,l as D,y as V,f as v,h as F,p as T,g as M,m as N}from"./index-CrLo8s4r.js";const q=z({name:"ArticleManager",props:{isActive:Boolean},setup(e,{emit:a}){const h=r(""),C=r(""),f=r(!1),d=r({id:0,userId:"",createdBy:"",createdTime:"",title:"",content:"",updatedTime:"",likesCount:0,readCount:0,commentCount:0,tag:"",categories:"",summary:"",coverPhotoUrl:null,status:"",isDelete:0,isPinned:null,isLikeDisabled:null,isCommentsDisabled:null}),m=r([{id:1,content:"123"}]),g=r([{id:1,content:"123"}]),p=r(""),u=r([]),$=n=>{f.value=!0,d.value=n},A=n=>{b.post("/api/article/update",d.value).then(E=>{f.value=!1,y()})},B=n=>{b.post("/api/article/delete",n.id).then(()=>{y()})},y=()=>{b.get("/api/article/get").then(n=>{u.value=n.data})},P=()=>{b.get("/api/tags/get").then(n=>{m.value=n.data})},t=()=>{b.get("/api/category/get").then(n=>{g.value=n.data})},w=(n,E)=>{d.value.coverPhotoUrl=n.data};return O(()=>{y(),P(),t()}),{categoryValue:h,tagValue:C,dialogFormVisible:f,cacheData:d,tagOptions:m,categoryOptions:g,input1:p,tableData:u,handleEdit:$,handleUpload:A,handleDelete:B,handleUploadSuccess:w}}}),S=e=>(T("data-v-292d8774"),e=e(),M(),e),L={key:0,class:"articleManager"},R={class:"function"},j={class:"table"},G={class:"upload"},H={class:"MetaAvatar"},J=["src"],K={class:"Meta"},Q=S(()=>s("p",null,"标题",-1)),W={class:"Meta"},X=S(()=>s("p",null,"标签",-1)),Y={class:"Meta"},Z=S(()=>s("p",null,"分类",-1)),x={class:"Meta"},ee=S(()=>s("p",null,"简介",-1)),te={class:"dialog-footer"};function le(e,a,h,C,f,k){const d=c("el-input"),m=c("el-option"),g=c("el-select"),p=c("el-button"),u=c("el-table-column"),$=c("el-avatar"),A=c("el-table"),B=c("el-icon"),y=c("el-upload"),P=c("el-dialog");return e.isActive?(i(),_("div",L,[s("div",R,[l(d,{modelValue:e.input1,"onUpdate:modelValue":a[0]||(a[0]=t=>e.input1=t),style:{"max-width":"25%",margin:"2%"},size:"large",placeholder:"Please input Title"},null,8,["modelValue"]),l(g,{modelValue:e.categoryValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.categoryValue=t),placeholder:"Please Select Tag",size:"large",style:{width:"25%"}},{default:o(()=>[(i(!0),_(U,null,D(e.tagOptions,t=>(i(),V(m,{key:t,label:t.content,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(g,{modelValue:e.tagValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.tagValue=t),placeholder:"Please Select Category",size:"large",style:{width:"25%","margin-left":"2%"}},{default:o(()=>[(i(!0),_(U,null,D(e.categoryOptions,t=>(i(),V(m,{key:t,label:t.content,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(p,{type:"success",size:"large",style:{"margin-left":"2%"}},{default:o(()=>[v("Search")]),_:1}),l(p,{type:"primary",size:"large",style:{"margin-left":"2%"}},{default:o(()=>[v("Reset")]),_:1})]),s("div",j,[l(A,{data:e.tableData,style:{width:"100%",height:"95%","box-shadow":"-5px 5px 5px #467048"}},{default:o(()=>[l(u,{type:"selection",width:"55"}),l(u,{prop:"coverPhotoUrl",label:"Cover",width:"120"},{default:o(({row:t})=>[l($,{shape:"square",src:t.coverPhotoUrl},null,8,["src"])]),_:1}),l(u,{prop:"title",label:"Title",width:"120"}),l(u,{prop:"summary",label:"Summary",width:"240"}),l(u,{prop:"tag",label:"Tag",width:"180"}),l(u,{prop:"categories",label:"Categories",width:"180"}),l(u,{prop:"status",label:"Status",width:"180"}),l(u,{label:"Operations",width:"250"},{default:o(({row:t})=>[l(p,{size:"small",onClick:w=>e.handleEdit(t)},{default:o(()=>[v(" Update ")]),_:2},1032,["onClick"]),l(p,{size:"small",type:"danger",onClick:w=>e.handleDelete(t)},{default:o(()=>[v(" Delete ")]),_:2},1032,["onClick"]),l(p,{size:"small",type:"success",onClick:w=>e.handleUpload(t)},{default:o(()=>[v(" Upload ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),s("div",G,[l(P,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[8]||(a[8]=t=>e.dialogFormVisible=t),title:"文章详情",draggable:"",width:"500"},{footer:o(()=>[s("div",te,[l(p,{onClick:a[7]||(a[7]=t=>e.dialogFormVisible=!1)},{default:o(()=>[v("Cancel")]),_:1}),l(p,{type:"primary",onClick:e.handleUpload},{default:o(()=>[v(" Confirm ")]),_:1},8,["onClick"])])]),default:o(()=>[s("div",H,[l(y,{class:"avatar-uploader",action:"http://localhost:9090/api/article/uploadImage","show-file-list":!1,"on-success":e.handleUploadSuccess},{default:o(()=>[e.cacheData?(i(),_("img",{key:0,src:e.cacheData.coverPhotoUrl||"",class:"avatar"},null,8,J)):(i(),V(B,{key:1,class:"avatar-uploader-icon"}))]),_:1},8,["on-success"])]),s("div",K,[Q,l(d,{modelValue:e.cacheData.title,"onUpdate:modelValue":a[3]||(a[3]=t=>e.cacheData.title=t),style:{width:"80%"},placeholder:"Please input"},null,8,["modelValue"])]),s("div",W,[X,l(g,{modelValue:e.cacheData.tag,"onUpdate:modelValue":a[4]||(a[4]=t=>e.cacheData.tag=t),placeholder:"Select",style:{width:"80%"}},{default:o(()=>[(i(!0),_(U,null,D(e.tagOptions,t=>(i(),V(m,{key:t,label:t.content,value:t.content},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),s("div",Y,[Z,l(g,{modelValue:e.cacheData.categories,"onUpdate:modelValue":a[5]||(a[5]=t=>e.cacheData.categories=t),placeholder:"Select",style:{width:"80%"}},{default:o(()=>[(i(!0),_(U,null,D(e.categoryOptions,t=>(i(),V(m,{key:t,label:t.content,value:t.content},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),s("div",x,[ee,l(d,{modelValue:e.cacheData.summary,"onUpdate:modelValue":a[6]||(a[6]=t=>e.cacheData.summary=t),style:{width:"80%"},autosize:"",type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])]),_:1},8,["modelValue"])])])):F("",!0)}const ae=I(q,[["render",le],["__scopeId","data-v-292d8774"]]),oe=e=>(T("data-v-bbb40dec"),e=e(),M(),e),se={class:"container"},ne=oe(()=>s("div",{class:"markIcon"},null,-1)),ie=[ne],de=z({__name:"information",setup(e){const a=r(!0),h=r(!1),C=()=>{a.value=!a.value},f=()=>{h.value=!h.value,setTimeout(()=>{const k=document.querySelector(".markIcon");k.style.backgroundColor="",C()},1500),setTimeout(()=>{h.value=!1},3e3)};return(k,d)=>(i(),_("div",se,[s("div",{class:N(["bookmark",{"slide-motion":h.value}]),onClick:d[0]||(d[0]=m=>f())},ie,2),l(ae,{isActive:a.value},null,8,["isActive"])]))}}),re=I(de,[["__scopeId","data-v-bbb40dec"]]);export{re as default};
