"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[8719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1564:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(7294),n=a(6010),i=a(9960),o=a(3438),l=a(3919),s=a(5999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:a}=e;return r.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",d.cardContainer)},a)}function p(e){let{href:t,icon:a,title:i,description:o}=e;return r.createElement(c,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",d.cardTitle),title:i},a," ",i),o&&r.createElement("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:o},o))}function m(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?r.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const a=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:a,title:t.label,description:n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9268:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010),i=a(3438),o=a(1564);function l(e){let{className:t}=e;const a=(0,i.jA)();return r.createElement(s,{items:a.items,className:t})}function s(e){const{items:t,className:a}=e;if(!t)return r.createElement(l,e);const s=(0,i.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",a)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(o.Z,{item:e})))))}},7525:(e,t,a)=>{a.d(t,{n:()=>i});var r=a(4477);function n(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&n(t.items)}}function i(e){const t=(0,r.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)n(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},2313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),i=a(9268),o=a(7525);const l={},s="Emerald ParaTime",d={unversionedId:"dapp/emerald/README",id:"dapp/emerald/README",title:"Emerald ParaTime",description:"The Emerald ParaTime is our official EVM Compatible ParaTime providing smart contract environment with full EVM compatibility.",source:"@site/docs/dapp/emerald/README.mdx",sourceDirName:"dapp/emerald",slug:"/dapp/emerald/",permalink:"/dapp/emerald/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/emerald/README.mdx",tags:[],version:"current",lastUpdatedAt:1680165721,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/dapp/"},next:{title:"Writing dApps on Emerald",permalink:"/dapp/emerald/writing-dapps-on-emerald"}},c={},p=[{value:"ParaTime Incentives",id:"paratime-incentives",level:2},{value:"Web3 Gateway",id:"web3-gateway",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Testnet",id:"testnet",level:3},{value:"See also",id:"see-also",level:2}],m={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emerald-paratime"},"Emerald ParaTime"),(0,n.kt)("p",null,"The Emerald ParaTime is our official EVM Compatible ParaTime providing smart contract environment with full EVM compatibility."),(0,n.kt)("p",null,"As the official EVM compatible ParaTime on the Oasis Network, Emerald allows for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full EVM compatibility"),(0,n.kt)("li",{parentName:"ul"},"Easy integration with EVM-based dApps, such as DeFi, NFT, Metaverse and crypto gaming"),(0,n.kt)("li",{parentName:"ul"},"Scalability \u2014 increased throughput of transactions"),(0,n.kt)("li",{parentName:"ul"},"Low-cost \u2014 99%+ lower fees than Ethereum"),(0,n.kt)("li",{parentName:"ul"},"Cross-chain bridge to enable cross-chain interoperability (upcoming)")),(0,n.kt)("p",null,"If you're looking for EVM, but with confidentiality,\ncheck out the ",(0,n.kt)("a",{parentName:"p",href:"/dapp/sapphire/"},"Sapphire ParaTime"),"."),(0,n.kt)("h2",{id:"paratime-incentives"},"ParaTime Incentives"),(0,n.kt)("p",null,"Emerald is fully decentralized with node operators distributed globally, and Oasis ROSE will be the native token used for gas fees."),(0,n.kt)("p",null,"The ParaTime will release tokens on-chain to reward nodes for participation. These tokens will be released, per epoch, with the reward being 3 ROSE Tokens per entity per epoch."),(0,n.kt)("p",null,"Epochs are currently being produced at a speed of one per hour. Each node has an approximately 30% chance of being selected by the primary committee to claim the rewards. Hence, a node entity can earn 24 ROSE tokens per day, 720 ROSE tokens per month."),(0,n.kt)("p",null,"The reward program is two years long."),(0,n.kt)("h2",{id:"web3-gateway"},"Web3 Gateway"),(0,n.kt)("p",null,"To get started building on our Emerald ParaTime, you can use our public Web3 gateway, fully compatible with Ethereum's Web3 gateway."),(0,n.kt)("h3",{id:"mainnet"},"Mainnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RPC HTTP endpoint: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://emerald.oasis.dev")),(0,n.kt)("li",{parentName:"ul"},"RPC WebSockets endpoint: ",(0,n.kt)("inlineCode",{parentName:"li"},"wss://emerald.oasis.dev/ws")),(0,n.kt)("li",{parentName:"ul"},"Chain ID:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Hex: 0xa516"),(0,n.kt)("li",{parentName:"ul"},"Decimal: 42262"))),(0,n.kt)("li",{parentName:"ul"},"Block explorer: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.emerald.oasis.dev"},"https://explorer.emerald.oasis.dev"))),(0,n.kt)("button",{class:"button button--primary margin-bottom--md",onClick:()=>{if(!window.ethereum?.request)return alert("Have you installed MetaMask yet? If not, please do so.\n\nComputer: Once it is installed, you will be able to add the ParaTime to your MetaMask.\n\nPhone: Open the website through your MetaMask Browser to add the ParaTime.");window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0xa516",chainName:"Oasis Emerald",nativeCurrency:{name:"Emerald Rose",symbol:"ROSE",decimals:18},rpcUrls:["https://emerald.oasis.dev","wss://emerald.oasis.dev/ws"],blockExplorerUrls:["https://explorer.emerald.oasis.dev"]}]})}},"Click here to register Emerald Mainnet to your MetaMask or Brave Wallet"),(0,n.kt)("h3",{id:"testnet"},"Testnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RPC HTTP endpoint: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://testnet.emerald.oasis.dev")),(0,n.kt)("li",{parentName:"ul"},"RPC WebSockets endpoint: ",(0,n.kt)("inlineCode",{parentName:"li"},"wss://testnet.emerald.oasis.dev/ws")),(0,n.kt)("li",{parentName:"ul"},"Chain ID:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Hex: 0xa515"),(0,n.kt)("li",{parentName:"ul"},"Decimal: 42261"))),(0,n.kt)("li",{parentName:"ul"},"Block explorer: ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.explorer.emerald.oasis.dev"},"https://testnet.explorer.emerald.oasis.dev"))),(0,n.kt)("button",{class:"button button--primary margin-bottom--md",onClick:()=>{if(!window.ethereum?.request)return alert("Have you installed MetaMask yet? If not, please do so.\n\nComputer: Once it is installed, you will be able to add the ParaTime to your MetaMask.\n\nPhone: Open the website through your MetaMask Browser to add the ParaTime.");window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0xa515",chainName:"Oasis Emerald Testnet",nativeCurrency:{name:"TEST",symbol:"TEST",decimals:18},rpcUrls:["https://testnet.emerald.oasis.dev/","wss://testnet.emerald.oasis.dev/ws"],blockExplorerUrls:["https://testnet.explorer.emerald.oasis.dev"]}]})}},"Click here to register Emerald Testnet to your MetaMask or Brave Wallet"),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)(i.Z,{items:[(0,o.n)("/general/manage-tokens/how-to-transfer-rose-into-paratime"),(0,o.n)("/node/run-your-node/paratime-node"),(0,o.n)("/node/run-your-node/paratime-client-node"),(0,o.n)("/node/web3"),(0,o.n)("/dapp/sapphire/"),(0,o.n)("/dapp/cipher/")],mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);