"use strict";(self.webpackChunkthicc_ui=self.webpackChunkthicc_ui||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Fill:()=>Fill,Icon:()=>Icon,Overview:()=>Overview,Size:()=>Size,State:()=>State,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const functions_createComponentTemplate=function createComponentTemplate(ComponentClass){return args=>(0,jsx_runtime.jsx)(ComponentClass,{...args})};var Button=__webpack_require__("./src/components/Button/Button.tsx");const Button_stories={title:"Button",component:Button.A,decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"flex gap-5",children:(0,jsx_runtime.jsx)(Story,{})})]},Overview={render:functions_createComponentTemplate(Button.A).bind({}),args:{children:"Button"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},Fill={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.A,{intent:"solid",children:"Solid"}),(0,jsx_runtime.jsx)(Button.A,{intent:"outline",children:"Outline"}),(0,jsx_runtime.jsx)(Button.A,{intent:"none",children:"None"})]}),name:"Fill"},Size={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.A,{children:"Large"}),(0,jsx_runtime.jsx)(Button.A,{children:"Medium"}),(0,jsx_runtime.jsx)(Button.A,{children:"Small"})]})},Disabled={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.A,{intent:"solid",children:"Solid"}),(0,jsx_runtime.jsx)(Button.A,{intent:"outline",children:"Outline"}),(0,jsx_runtime.jsx)(Button.A,{intent:"none",children:"None"})]})},State={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.A,{children:"Normal"}),(0,jsx_runtime.jsx)(Button.A,{children:"Active"})]})},Icon={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.A,{children:"Right icon"}),(0,jsx_runtime.jsx)(Button.A,{children:"Left iconn"})]})},__namedExportsOrder=["Overview","Fill","Size","Disabled","State","Icon"];Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: buttonTemplate.bind({}),\n  args: {\n    children: "Button"\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Fill.parameters={...Fill.parameters,docs:{...Fill.parameters?.docs,source:{originalSource:'{\n  render: () => <>\r\n      <Button intent="solid">Solid</Button>\r\n      <Button intent="outline">Outline</Button>\r\n      <Button intent="none">None</Button>\r\n    </>,\n  name: "Fill"\n}',...Fill.parameters?.docs?.source},description:{story:"Button fill creates a natural heirachy in a screen with multiple buttons.",...Fill.parameters?.docs?.description}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"{\n  render: () => <>\r\n      <Button>Large</Button>\r\n      <Button>Medium</Button>\r\n      <Button>Small</Button>\r\n    </>\n}",...Size.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <>\r\n      <Button intent="solid">Solid</Button>\r\n      <Button intent="outline">Outline</Button>\r\n      <Button intent="none">None</Button>\r\n    </>\n}',...Disabled.parameters?.docs?.source}}},State.parameters={...State.parameters,docs:{...State.parameters?.docs,source:{originalSource:"{\n  render: () => <>\r\n      <Button>Normal</Button>\r\n      <Button>Active</Button>\r\n    </>\n}",...State.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  render: () => <>\r\n      <Button>Right icon</Button>\r\n      <Button>Left iconn</Button>\r\n    </>\n}",...Icon.parameters?.docs?.source}}}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const button=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("button",{variants:{intent:{solid:["bg-[#386641]","text-white","border-transparent","hover:bg-[#4CAF50]","rounded-md"],outline:["text-black","border","rounded-md"],none:["bg-transparent","text-black","border-transparent","rounded-md","hover:bg-gray"]},size:{small:["text-sm","py-1","px-2"],medium:["text-base","py-2","px-4"]}},defaultVariants:{intent:"solid",size:"medium"}}),Button=({className,intent,size,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:button({intent,size,className}),...props}),__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",composes:["VariantProps"]}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);