import{_ as v}from"./小王子与狐狸-BKC3arKo.js";import{r as p}from"./request-DgN2nWOZ.js";import{d as h,r as i,a as u,o as V,c as w,b as c,e as s,w as m,f as _,p as x,g as y,_ as C}from"./index-CrLo8s4r.js";const b=o=>(x("data-v-392cbf29"),o=o(),y(),o),I={class:"main"},k={class:"table"},S=b(()=>c("div",{class:"littlePrice"},[c("img",{class:"littlePrice",src:v})],-1)),B=h({__name:"Login",setup(o){const l=i(""),a=i(""),f=()=>{p.post("/login",{userId:l.value,password:a.value}).then(e=>{e.code==="200"?(console.log("success"),localStorage.setItem("token",e.data)):console.log("error")})},g=()=>{p.get("/name").then(e=>{e.code==="200"?console.log("res",e):console.log("error")})};return(e,t)=>{const r=u("el-input"),d=u("el-button");return V(),w("div",I,[c("div",k,[s(r,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),style:{width:"240px"},placeholder:"账号"},null,8,["modelValue"]),s(r,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=n=>a.value=n),style:{width:"240px"},placeholder:"密码"},null,8,["modelValue"]),s(d,{type:"primary",onClick:f},{default:m(()=>[_("Primary")]),_:1}),s(d,{type:"primary",onClick:g},{default:m(()=>[_("获取数据")]),_:1})]),S])}}}),U=C(B,[["__scopeId","data-v-392cbf29"]]);export{U as default};