import{r as p}from"./request-DgN2nWOZ.js";import{d as m,r as n,k as b,u as _,_ as h,a as f,o as c,c as l,b as d,e as B,h as u,i as k}from"./index-CrLo8s4r.js";const A=m({setup(){const e=n(""),a=_(),i=n("# huahua"),t=n(!1),o=()=>{const v=a.currentRoute.value.query.id;p.get(`/api/article/show?id=${v}`).then(s=>{i.value=s.data[0].content,e.value=s.data[0].coverPhotoUrl})},r=()=>{t.value=!t.value};return b(()=>{o()}),{markdown:i,ImageUrl:e,getArticle:o,flip:r,isMain:t}}}),C={class:"container"},g={key:0,class:"main"},w={class:"content"},y={key:1,class:"comment"},D={class:"coverPhoto"},$=["src"],E=k('<div class="information" data-v-43620eeb><div class="strip" data-v-43620eeb><div class="like" data-v-43620eeb></div><div class="collect" data-v-43620eeb></div></div><div class="title" data-v-43620eeb> 这个是标题 </div><div class="author" data-v-43620eeb><div class="avatar" data-v-43620eeb></div><div class="identity" data-v-43620eeb><p data-v-43620eeb>huahua</p><p data-v-43620eeb>7181个粉丝</p></div><div class="attention" data-v-43620eeb><span data-v-43620eeb>保存</span></div></div><div class="review" data-v-43620eeb><div class="temp" data-v-43620eeb><span data-v-43620eeb>11条评论</span><div class="respond" data-v-43620eeb></div><div class="input" data-v-43620eeb><input type="text" placeholder="添加评论" data-v-43620eeb><div class="send" data-v-43620eeb></div></div><div class="characters" data-v-43620eeb></div></div></div></div>',1);function F(e,a,i,t,o,r){const v=f("v-md-editor");return c(),l("div",C,[d("div",{class:"flip",onClick:a[0]||(a[0]=(...s)=>e.flip&&e.flip(...s))}),e.isMain?(c(),l("div",g,[d("div",w,[B(v,{"model-value":e.markdown,mode:"preview"},null,8,["model-value"])])])):u("",!0),e.isMain?u("",!0):(c(),l("div",y,[d("div",D,[d("img",{src:e.ImageUrl},null,8,$)]),E]))])}const V=h(A,[["render",F],["__scopeId","data-v-43620eeb"]]);export{V as default};
