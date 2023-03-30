"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="Obtain Account Address From Entity's ID",i={unversionedId:"general/manage-tokens/advanced/oasis-cli-tools/address",id:"general/manage-tokens/advanced/oasis-cli-tools/address",title:"Obtain Account Address From Entity's ID",description:"To convert an entity ID (Base64 encoded), e.g. nyjbDRKAXgUkL6CYfJP0WVA0XbF0pAGuvObZNMufgfY=, to a staking account address, run:",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/address.md",sourceDirName:"general/manage-tokens/advanced/oasis-cli-tools",slug:"/general/manage-tokens/advanced/oasis-cli-tools/address",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/address",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/address.md",tags:[],version:"current",lastUpdatedAt:1680165721,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{},sidebar:"general",previous:{title:"Get Account Nonce",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-nonce"},next:{title:"Transfer Tokens",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/transfer-tokens"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"obtain-account-address-from-entitys-id"},"Obtain Account Address From Entity's ID"),(0,a.kt)("p",null,"To convert an entity ID (Base64 encoded), e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"nyjbDRKAXgUkL6CYfJP0WVA0XbF0pAGuvObZNMufgfY="),", to a ",(0,a.kt)("a",{parentName:"p",href:"/general/manage-tokens/terminology#address"},"staking account address"),", run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node stake pubkey2address \\\n  --public_key nyjbDRKAXgUkL6CYfJP0WVA0XbF0pAGuvObZNMufgfY=\n")),(0,a.kt)("p",null,"This will output the staking account address for the given entity ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"oasis1qrvsa8ukfw3p6kw2vcs0fk9t59mceqq7fyttwqgx\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find your entity's ID in the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field of the ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.json")," file.")))}u.isMDXComponent=!0}}]);