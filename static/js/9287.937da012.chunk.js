(self.webpackChunkimanestuc_app=self.webpackChunkimanestuc_app||[]).push([[9287],{89287:(e,o,l)=>{"use strict";l.r(o),l.d(o,{default:()=>b});var s=l(65043),a=l(4173),r=l(46199),d=l(11315),i=l(8438),t=l(64671),n=l(14009),c=l(27935),u=l(76523),v=l(50423),p=l(58196),m=l(70579);const f=l(26939);const b=function(e){let{isOpen:o,setIsOpen:l}=e;const b={label:"Tapa",form:"redondos",size:"30x13",r:[15],h:13,img:{src:p,alt:"Tapa pl\xe1stica com\xfan"}},x=(0,s.useRef)(null),[h,w]=(0,s.useState)(!1),[k,g]=(0,s.useState)(0),j=(e,o)=>{var l;let s=0,a=0,r=[],d=0,i=0,t={label:null===o||void 0===o?void 0:o.label};if("esferas"===(null===o||void 0===o?void 0:o.form))t.r=[null===o||void 0===o?void 0:o.r];else switch(e){case"sup":switch(null===o||void 0===o?void 0:o.form){case"de_arrastre":case"redondos":t.r=[null===o||void 0===o?void 0:o.r];break;case"cuadrados":t.sizes=[null===o||void 0===o?void 0:o.a,null===o||void 0===o?void 0:o.l];break;case"redondos_fresados":t.r=null===o||void 0===o?void 0:o.r;break;case"cuadrados_fresados":t.sizes=[null===o||void 0===o?void 0:o.a,null===o||void 0===o?void 0:o.l],t.r=null===o||void 0===o?void 0:o.r}break;case"front":switch(null===o||void 0===o?void 0:o.form){case"de_arrastre":case"redondos":t.sizes=[2*(null===o||void 0===o?void 0:o.r),null===o||void 0===o?void 0:o.h];break;case"cuadrados":case"cuadrados_fresados":t.sizes=[null===o||void 0===o?void 0:o.a,null===o||void 0===o?void 0:o.h];break;case"redondos_fresados":t.sizes=[2*(null===o||void 0===o?void 0:o.r[0]),null===o||void 0===o?void 0:o.h]}break;case"lat":switch(null===o||void 0===o?void 0:o.form){case"de_arrastre":case"redondos":t.sizes=[2*(null===o||void 0===o?void 0:o.r),null===o||void 0===o?void 0:o.h];break;case"cuadrados":case"cuadrados_fresados":t.sizes=[null===o||void 0===o?void 0:o.l,null===o||void 0===o?void 0:o.h];break;case"redondos_fresados":t.sizes=[2*(null===o||void 0===o?void 0:o.r[0]),null===o||void 0===o?void 0:o.h]}}if(null!==t&&void 0!==t&&t.sizes&&(d=null===t||void 0===t?void 0:t.sizes[0],i=null===t||void 0===t?void 0:t.sizes[1],r.push((0,m.jsx)("rect",{x:"0",y:"0",width:null===t||void 0===t?void 0:t.sizes[0],height:null===t||void 0===t?void 0:t.sizes[1],rx:".2",strokeLinejoin:"round",strokeLinecap:"round"},"".concat(e)))),null!==t&&void 0!==t&&t.r){const e=2*(null===t||void 0===t?void 0:t.r[0]);e>d&&(s=.2,d=e),e>i&&(a=.2,i=e),null===t||void 0===t||t.r.forEach((e=>{r.push((0,m.jsx)("circle",{cx:"50%",cy:"50%",r:e},e))}))}return"redondos_fresados"===(null===o||void 0===o?void 0:o.form)&&["front","lat"].includes(e)&&r.push([(0,m.jsx)("polygon",{points:"".concat((null===o||void 0===o?void 0:o.r[0])-(null===o||void 0===o?void 0:o.r[1]),",0 ").concat((null===o||void 0===o?void 0:o.r[0])-(null===o||void 0===o?void 0:o.r[2]),",").concat(null===o||void 0===o?void 0:o.h),fill:"none",stroke:"black",strokeWidth:.2},"".concat(e,"_l")),(0,m.jsx)("polygon",{points:"".concat((null===o||void 0===o?void 0:o.r[0])+(null===o||void 0===o?void 0:o.r[1]),",0 ").concat((null===o||void 0===o?void 0:o.r[0])+(null===o||void 0===o?void 0:o.r[2]),",").concat(null===o||void 0===o?void 0:o.h),fill:"none",stroke:"black",strokeWidth:.2},"".concat(e,"_r"))]),"cuadrados_fresados"===(null===o||void 0===o?void 0:o.form)&&"front"===e&&r.push([(0,m.jsx)("polygon",{points:"".concat(null===o||void 0===o?void 0:o.r[0],",0 ").concat((null===o||void 0===o?void 0:o.a)/2-(null===o||void 0===o?void 0:o.r[1]),",").concat(null===o||void 0===o?void 0:o.h),fill:"none",stroke:"black",strokeWidth:.2},"".concat(e,"_l")),(0,m.jsx)("polygon",{points:"".concat((null===o||void 0===o?void 0:o.a)-(null===o||void 0===o?void 0:o.r[0]),",0 ").concat((null===o||void 0===o?void 0:o.a)/2+(null===o||void 0===o?void 0:o.r[1]),",").concat(null===o||void 0===o?void 0:o.h),fill:"none",stroke:"black",strokeWidth:.2},"".concat(e,"_r"))]),"cuadrados_fresados"===(null===o||void 0===o?void 0:o.form)&&"lat"===e&&r.push([(0,m.jsx)("polygon",{points:"".concat((null===o||void 0===o?void 0:o.l)/2-(null===o||void 0===o?void 0:o.r[0]),",0 ").concat((null===o||void 0===o?void 0:o.l)/2-(null===o||void 0===o?void 0:o.r[1]),",").concat(null===o||void 0===o?void 0:o.h),fill:"none",stroke:"black",strokeWidth:.2},"".concat(e,"_l")),(0,m.jsx)("polygon",{points:"".concat((null===o||void 0===o?void 0:o.l)/2+(null===o||void 0===o?void 0:o.r[0]),",0 ").concat((null===o||void 0===o?void 0:o.l)/2+(null===o||void 0===o?void 0:o.r[1]),",").concat(null===o||void 0===o?void 0:o.h),fill:"none",stroke:"black",strokeWidth:.2},"".concat(e,"_r"))]),(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(d,"mm"),height:"".concat(i,"mm"),viewBox:"0 0 ".concat(d+s," ").concat(i+a),stroke:(null===t||void 0===t||null===(l=t.r)||void 0===l?void 0:l.length)>1?"black":"none",strokeWidth:.2,className:"".concat("Tapa"===(null===t||void 0===t?void 0:t.label)?"fill-yellow-400":"fill-custom1"),children:r})},_=()=>g(k+1);return(0,s.useEffect)((()=>{const e=()=>{g(k+1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,s.useEffect)((()=>{if(null!==o&&void 0!==o&&o.size){var e;const l=structuredClone(o);let s=null,a=null===l||void 0===l?void 0:l.size;["redondos_fresados","cuadrados_fresados"].includes(null===l||void 0===l?void 0:l.form)&&(a=a.replace("_","x").replace("a","x"));const r=null===(e=a)||void 0===e?void 0:e.split("x").map(Number);switch(l.label="Iman",null===l||void 0===l?void 0:l.form){case"de_arrastre":l.r=r[0]/2,l.h=r[1],s="de_arrastre";break;case"redondos":l.r=r[0]/2,l.h=r[1],s=(null===l||void 0===l?void 0:l.h)<(null===l||void 0===l?void 0:l.r)/2?"plano":(null===l||void 0===l?void 0:l.h)>=1.4*(null===l||void 0===l?void 0:l.r)?"cilindro":"boton";break;case"cuadrados":l.a=r[0],l.l=r[1],l.h=r[2],s=(null===l||void 0===l?void 0:l.a)/2<=(null===l||void 0===l?void 0:l.l)?"cuadrado":(null===l||void 0===l?void 0:l.h)<=3?"plancha":"ladrillo";break;case"redondos_fresados":l.r=r.reduce(((e,o,l)=>(1!==l&&e.push(o/2),e)),[]),l.h=r[1],s="arandela";break;case"cuadrados_fresados":l.a=r[0],l.l=r[1],l.h=r[2],l.r=null===r||void 0===r?void 0:r.slice(3,5).reduce(((e,o)=>(e.push(o/2),e)),[]),s="cuadrado-fresado";break;case"esferas":l.r=r[0]/2,s="esfera"}s&&(s=f("./".concat(s,".webp"))),l.img={src:s,alt:"Im\xe1n de neodimio"},w(l)}}),[o]),(0,m.jsx)(r.Y,{isOpen:o,placement:"top-center",className:"text-white max-w-3xl bg-radial from-custom2-10 to-custom2 ",onClose:()=>l(!1),classNames:{wrapper:"scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6"},children:(0,m.jsx)(d.g,{className:"!my-auto max-sm:max-w-none max-sm:mx-0 max-sm:mb-0 max-sm:rounded-none overflow-y-auto self-start max-sm:min-h-full",children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.c,{className:"text-2xl",children:"Comparar tama\xf1os"}),(0,m.jsxs)(t.h,{className:"overflow-hidden max-xs:px-2",children:[(0,m.jsxs)("p",{className:"max-sm:text-center",children:["La comparaci\xf3n es con una tapa pl\xe1stica com\xfan de botella.",(0,m.jsx)("br",{}),"Aseg\xfarese de que el circulo amarillo tenga 30mm de di\xe1metro con una regla. Si no los tiene ajuste el zoom de la pantalla hasta que lo tenga."]}),(0,m.jsx)("p",{className:"font-size-secondary text-neutral-400 text-center",children:"Las im\xe1genes y esquemas son solo a modo ilustrativo y pueden no coincidir con la realidad."}),(0,m.jsx)("section",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[b,h].map(((e,o)=>{var l,s,a;return(0,m.jsxs)("article",{className:"flex flex-col items-center",children:[(0,m.jsx)("div",{className:"bg-neutral-500/20 rounded-lg p-4 sm:h-full select-none flex items-center justify-center place-self-center border-3 border-divider",children:(0,m.jsx)(u.A,{src:null===e||void 0===e||null===(l=e.img)||void 0===l?void 0:l.src,width:200,className:"w-full max-w-[200px]",alt:(null===e||void 0===e||null===(s=e.alt)||void 0===s?void 0:s.alt)||"",style:{filter:"drop-shadow(2px 4px 6px black)"}})}),(0,m.jsxs)("p",{className:"bg-neutral-500/20 rounded-b-lg max-w-[250px] text-2xl p-2 font-semibold border-b-3 border-x-3 border-divider ".concat(0===o?"text-yellow-400":"text-custom1"),children:[null===e||void 0===e||null===(a=e.size)||void 0===a?void 0:a.replace("_"," "),"mm"]})]},o)}))}),(0,m.jsx)("h2",{className:"text-center text-xl font-semibold",children:"Vistas"}),h&&(0,m.jsxs)("section",{ref:x,className:"flex flex-col items-center gap-6 sm:flex-row text-center bg-custom2-10/30 pt-2 pb-6 px-4 rounded-lg relative overflow-y-hidden overflow-x-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6 shadow-small",children:[(0,m.jsx)(n.T,{variant:"light",onPress:_,isIconOnly:!0,className:"text-xl text-white absolute top-0 right-0",children:(0,m.jsx)(v.fzc,{})}),[{label:"Superior",id:"sup"},{label:"Frontal",id:"front"},{label:"Lateral",id:"lat"}].map((e=>(0,m.jsxs)("article",{className:"flex flex-col gap-4 w-full",children:[(0,m.jsx)("p",{children:e.label}),(0,m.jsx)("div",{className:"flex flex-col items-start xs:items-center gap-8 w-full",children:[b,h].map(((o,l)=>(0,m.jsx)(a.P.span,{drag:!0,dragConstraints:x,whileDrag:{zIndex:20,filter:"drop-shadow(0px 0px 1px black)"},className:"flex items-center h-full cursor-pointer ".concat(l>0?"z-10":""),style:{filter:"drop-shadow(0px 0px 5px black)"},children:j(e.id,o)},l)))})]},e.id)))]},k),(0,m.jsxs)("p",{className:"max-sm:text-center text-neutral-400 font-size-secondary",children:["Los tama\xf1os son aproximados y pueden tener errores de medidas.",(0,m.jsx)("br",{}),"Puede arrastrar los iconos para sobreponerlos."]})]}),(0,m.jsx)(c.q,{className:"items-center ",children:(0,m.jsx)(n.T,{variant:"light",onPress:e,isIconOnly:!0,className:"text-2xl text-white",children:(0,m.jsx)(v.yCO,{})})})]})})})}},26939:(e,o,l)=>{var s={"./arandela.webp":7453,"./boton.webp":66407,"./cilindro.webp":33811,"./cuadrado-fresado.webp":66911,"./cuadrado.webp":45060,"./de_arrastre.webp":65239,"./esfera.webp":79153,"./ladrillo.webp":97168,"./plancha.webp":37080,"./plano.webp":12687};function a(e){var o=r(e);return l(o)}function r(e){if(!l.o(s,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=26939},7453:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/arandela.867c927aef5fb05df1f0.webp"},66407:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/boton.ed205d91be70618cb47b.webp"},33811:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/cilindro.06cb6f7f1ba8b5a4328f.webp"},66911:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/cuadrado-fresado.d86085cddc27fdefa44f.webp"},45060:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/cuadrado.9f45cb968e2bb5cfbaf5.webp"},65239:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/de_arrastre.c9b14f0e0f631d158558.webp"},79153:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/esfera.11bd24803991278a1be3.webp"},97168:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/ladrillo.8fbf89370ae0d2dc57db.webp"},37080:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/plancha.fcfc2b356c3b78c8f9ba.webp"},12687:(e,o,l)=>{"use strict";e.exports=l.p+"static/media/plano.7e3c60b048965e5d9da8.webp"},27935:(e,o,l)=>{"use strict";l.d(o,{q:()=>v});var s=l(22555),a=l(53986),r=l(48110),d=l(81070),i=l(3195),t=l(27887),n=l(70579);const c=["as","children","className"];var u=(0,d.Rf)(((e,o)=>{const{as:l,children:d,className:u}=e,v=(0,a.A)(e,c),{slots:p,classNames:m}=(0,r.k)(),f=(0,i.zD)(o),b=l||"footer";return(0,n.jsx)(b,(0,s.A)((0,s.A)({ref:f,className:p.footer({class:(0,t.$)(null==m?void 0:m.footer,u)})},v),{},{children:d}))}));u.displayName="NextUI.ModalFooter";var v=u}}]);
//# sourceMappingURL=9287.937da012.chunk.js.map