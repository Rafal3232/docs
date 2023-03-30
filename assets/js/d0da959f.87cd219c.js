"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[2337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="Damask Upgrade",s={unversionedId:"node/mainnet/damask-upgrade",id:"node/mainnet/damask-upgrade",title:"Damask Upgrade",description:"This document provides an overview of the changes for the Damask Mainnet",source:"@site/docs/node/mainnet/damask-upgrade.md",sourceDirName:"node/mainnet",slug:"/node/mainnet/damask-upgrade",permalink:"/node/mainnet/damask-upgrade",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/mainnet/damask-upgrade.md",tags:[],version:"current",lastUpdatedAt:1680165721,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Mainnet",permalink:"/node/mainnet/"},next:{title:"Previous Upgrades",permalink:"/node/mainnet/previous-upgrades"}},p={},l=[{value:"Major Features",id:"major-features",level:2},{value:"Mechanics of the Upgrade",id:"mechanics-of-the-upgrade",level:2},{value:"Proposed State Changes",id:"state-changes",level:2},{value:"<strong>General</strong>",id:"general",level:3},{value:"<strong>Registry</strong>",id:"registry",level:3},{value:"<strong>Root Hash</strong>",id:"root-hash",level:3},{value:"<strong>Staking</strong>",id:"staking",level:3},{value:"<strong>Committee Scheduler</strong>",id:"committee-scheduler",level:3},{value:"<strong>Random Beacon</strong>",id:"random-beacon",level:3},{value:"<strong>Governance</strong>",id:"governance",level:3},{value:"<strong>Consensus</strong>",id:"consensus",level:3},{value:"Other",id:"other",level:3},{value:"Launch Support",id:"launch-support",level:2}],m={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"damask-upgrade"},"Damask Upgrade"),(0,r.kt)("p",null,"This document provides an overview of the changes for the Damask Mainnet\nupgrade."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Damask upgrade on Mainnet is scheduled at epoch ",(0,r.kt)("strong",{parentName:"p"},"13402")," which will happen\naround ",(0,r.kt)("strong",{parentName:"p"},"Apr 11, 2022 at 8:30 UTC"),".")),(0,r.kt)("h2",{id:"major-features"},"Major Features"),(0,r.kt)("p",null,"All features for the Damask upgrade are implemented as part of\n",(0,r.kt)("strong",{parentName:"p"},"Oasis Core 22.1.x")," release series which is a consensus protocol-breaking\nrelease."),(0,r.kt)("p",null,"Summary of the major features is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Random Beacon"),": The random beacon is used by the consensus layer for\nParaTime committee elections and is a critical component in providing\nsecurity for ParaTimes with an open admission policy.\nTo make the random beacon more performant and scalable, the upgrade\ntransitions the election procedure to one that is based on cryptographic\nsortition of Verifiable Random Function (VRF) outputs.\nFor more details, see ",(0,r.kt)("a",{parentName:"p",href:"/adrs/0010-vrf-elections"},"ADR 0010"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On-Chain Governance"),": The upgrade simplifies the governance by replacing\nseparate quorum and threshold parameters with a single unified stake threshold\nparameter that represents the percentage of ",(0,r.kt)("em",{parentName:"p"},"yes")," votes in terms of total\nvoting power for a governance proposal to pass.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ParaTime Performance"),": By simplifying the protocol (executor and storage\ncommittees are merged into a single committee) the upgrade improves ParaTime\ncommittee performance and opens the way for even more improvements on the\nParaTime side. It also leads to simplified configuration of ParaTime nodes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ParaTime Upgrades"),": After the Damask upgrade, runtime descriptors will\ninclude information regarding supported versions, and the epoch from which\nthey are valid, which will allow ParaTime upgrades to happen without incurring\ndowntime by having upgrades and the descriptor changes pre-staged well in\nadvance of the upgrade epoch.\nFor more details, see ",(0,r.kt)("a",{parentName:"p",href:"/adrs/0013-runtime-upgrades"},"ADR 0013"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ParaTime Packaging"),": This upgrade changes runtime bundles to be unified\nacross all supported TEE types and self describing so that configuring\nParaTimes is only a matter of passing in the runtime bundle file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consensus and ParaTime Communication"),": The upgrade adds support for\nincoming runtime messages where consensus layer transactions can trigger\nactions inside ParaTimes.\nFor more details, see ",(0,r.kt)("a",{parentName:"p",href:"/adrs/0011-incoming-runtime-messages"},"ADR 0011"),"."),(0,r.kt)("p",{parentName:"li"},"The upgrade also adds support for runtime message results which extends the\nresults of the emitted runtime messages with relevant information beyond\nindicating whether the message execution was successful or not.\nFor more details, see ",(0,r.kt)("a",{parentName:"p",href:"/adrs/0012-runtime-message-results"},"ADR 0012"),"."))),(0,r.kt)("p",null,"In addition to the specified additional features, we also propose the\n",(0,r.kt)("strong",{parentName:"p"},"validator set size")," to be ",(0,r.kt)("strong",{parentName:"p"},"increased from")," the current ",(0,r.kt)("strong",{parentName:"p"},"110 to 120")," as\ndiscussed in the\n",(0,r.kt)("a",{parentName:"p",href:"https://oasiscommunity.slack.com/archives/CMUSJCRFA/p1647881564057319?thread_ts=1647448573.197229&cid=CMUSJCRFA"},"Oasis Community Slack #nodeoperators channel"),"."),(0,r.kt)("p",null,"This upgrade marks an important milestone for the Oasis Network, as it sets the\nfoundation for unlocking the network's full capabilities."),(0,r.kt)("h2",{id:"mechanics-of-the-upgrade"},"Mechanics of the Upgrade"),(0,r.kt)("p",null,"On Mar 24, 2022, the Oasis Protocol Foundation submitted the upgrade governance\nproposal with id of ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," which proposed upgrading the network at epoch 13402."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In addition to submitting the actual governance proposal to the network, Oasis\nProtocol Foundation also published the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/community/discussions/30"},"Damask Upgrade Proposal discussion")," to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/community"},"Oasis Community Forum on GitHub"),".")),(0,r.kt)("p",null,"Node operators which had an active validator node in the validator set had 1\nweek to cast their vote."),(0,r.kt)("p",null,"Validators representing more than 88% of the total stake in the consensus\ncommittee participated in the vote, and 100% of them voted ",(0,r.kt)("em",{parentName:"p"},"yes")," for the proposal."),(0,r.kt)("p",null,"The upgrade will be performed by exporting the network's state at the upgrade\nepoch, updating the ",(0,r.kt)("a",{parentName:"p",href:"/node/genesis-doc#parameters"},"genesis document"),", upgrading the Oasis Node\nand the ParaTime binaries and starting a new network from the new genesis file."),(0,r.kt)("p",null,"This will require coordination between node operators and the Oasis Protocol\nFoundation.\nAll nodes will need to configure the new genesis file that they can generate or\nverify independently and reset/archive any existing state from Mainnet."),(0,r.kt)("p",null,"Once enough nodes (representing 2/3+ of stake) have taken this step, the\nupgraded network will start."),(0,r.kt)("p",null,"For the actual steps that node operators need to make on their nodes, see the\n",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/upgrade-log#damask-upgrade"},"Upgrade Log"),"."),(0,r.kt)("h2",{id:"state-changes"},"Proposed State Changes"),(0,r.kt)("p",null,"The following parts of the genesis document will be updated:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section will be updated with the exact details as we get closer to the\nupgrade.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a more detailed explanation of the parameters below, see the\n",(0,r.kt)("a",{parentName:"p",href:"/node/genesis-doc#parameters"},"Genesis Document")," docs.")),(0,r.kt)("h3",{id:"general"},(0,r.kt)("strong",{parentName:"h3"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," will be set to the height of the Mainnet state dump + 1,\n",(0,r.kt)("inlineCode",{parentName:"p"},"8048956"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"genesis_time"))," will be set to",(0,r.kt)("inlineCode",{parentName:"p"},"2022-04-11T09:30:00Z"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"chain_id"))," will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-3"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"halt_epoch"))," will be bumped by ",(0,r.kt)("inlineCode",{parentName:"p"},"10000")," (a little more than a year) to\n",(0,r.kt)("inlineCode",{parentName:"p"},"23807"),"."))),(0,r.kt)("h3",{id:"registry"},(0,r.kt)("strong",{parentName:"h3"},"Registry")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"registry.runtimes"))," list contains the registered runtimes' descriptors.\nIn this upgrade, all runtime descriptors will be migrated from version ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," to\nversion ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,r.kt)("p",{parentName:"li"},"The migration will be done automatically with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis")," command.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"registry.runtimes.[id=000000000000000000000000000000000000000000000000e2eaa99fc008f87f].deployments.version")),"\nspecifies Emerald ParaTime's version on Mainnet."),(0,r.kt)("p",{parentName:"li"},"It will be upgraded from version 7.1.0 to 8.2.0 and hence the configuration\nneeds to be manually updated to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"version": {\n  "major": 8,\n  "minor": 2\n},\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"registry.runtimes.[id=000000000000000000000000000000000000000000000000e199119c992377cb].deployments")),"\nspecifies Cipher ParaTime's version and TEE identity on Mainnet."),(0,r.kt)("p",{parentName:"li"},"It will be upgraded from version 1.0.0 to 1.1.0 and hence the configuration\nneeds to be manually updated to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"version": {\n  "major": 1,\n  "minor": 1\n},\n"valid_from": 0,\n"tee": "oWhlbmNsYXZlc4GiaW1yX3NpZ25lclggQCXat+vaH77MTjY3YG4CEhTQ9BxtBCL9N4sqi4iBhFlqbXJfZW5jbGF2ZVggoiJgre0cDF5arUk9wh0X9eGWr5cHb8LY0A3/msmznHc="\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"registry.suspended_runtimes"))," list contains the suspended registered\nruntimes' descriptors. In this upgrade, all runtime descriptors for suspended\nruntimes will be migrated from version ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," to version ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,r.kt)("p",{parentName:"li"},"The migration will be done automatically with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis")," command.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inactive registered entities in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"registry.entities"))," (and their\ncorresponding nodes in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"registry.nodes")),") that don't pass the\n",(0,r.kt)("a",{parentName:"p",href:"/node/genesis-doc#staking-thresholds"},"minimum staking thresholds")," will be removed."),(0,r.kt)("p",{parentName:"li"},"The removal will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand."))),(0,r.kt)("h3",{id:"root-hash"},(0,r.kt)("strong",{parentName:"h3"},"Root Hash")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"roothash.params.gas_costs.submit_msg"))," is a new parameter that specifies\nthe cost for a submit message transaction. It will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"roothash.params.max_in_runtime_messages"))," is a new parameter that\nspecifies the maximum number of incoming messages that can be queued for\nprocessing by a runtime. It will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"128"),"."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"roothash.runtime_state"))," contains the state roots of the runtimes.\nEmpty fields will be omitted."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand."))),(0,r.kt)("h3",{id:"staking"},(0,r.kt)("strong",{parentName:"h3"},"Staking")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"staking.params.thresholds"))," specifies the minimum number of tokens that\nneed to be staked in order for a particular entity or a particular type of\nnode to participate in the network."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"node-storage")," key is removed since Oasis Core 22.0+ removes separate\nstorage nodes.\nFor more details, see: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/pull/4308"},"Oasis Core #4308"),"."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"staking.params.min_transfer"))," is a new parameter that specifies the\nminimum number of tokens one can transfer.\nIt will be set to 10,000,000 base units, or 0.01 ROSE tokens."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"staking.params.min_transact_balance"))," is a new parameter that specifies\nthe minimum general balance an account must have to be able to perform\ntransactions on the network.\nIt will be set to 0 base units, meaning this requirement is currently not\nenforced."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand."))),(0,r.kt)("h3",{id:"committee-scheduler"},(0,r.kt)("strong",{parentName:"h3"},"Committee Scheduler")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"scheduler.params.min_validators"))," is the minimum size of the consensus\ncommittee (i.e. the validator set). It will be increased from ",(0,r.kt)("inlineCode",{parentName:"p"},"15")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"30"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"scheduler.params.max_validators"))," is the maximum size of the consensus\ncommittee (i.e. the validator set). It will be increased from ",(0,r.kt)("inlineCode",{parentName:"p"},"110")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"120"),"."))),(0,r.kt)("h3",{id:"random-beacon"},(0,r.kt)("strong",{parentName:"h3"},"Random Beacon")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon"))," object contains parameters controlling the new\n",(0,r.kt)("a",{parentName:"p",href:"/adrs/0010-vrf-elections"},"improved VRF-based random beacon")," introduced in the Damask upgrade."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.base"))," is the network's starting epoch. It will be set to the epoch\nof Mainnet's state dump + 1, ",(0,r.kt)("inlineCode",{parentName:"p"},"13402"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.params.backend"))," configures the random beacon backend to use.\nIt will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"vrf"')," indicating that the beacon implementing\n",(0,r.kt)("a",{parentName:"p",href:"/adrs/0010-vrf-elections"},"VRF-based random beacon")," should be used."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand."))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.params.vrf_parameters"))," control the behavior of the new\n",(0,r.kt)("a",{parentName:"p",href:"/adrs/0010-vrf-elections"},"VRF-based random beacon"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.params.vrf_parameters.alpha_hq_threshold"))," is minimal number of\nnodes that need to contribute a VRF proof for the beacon's output to be valid.\nIt will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),"."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.params.vrf_parameters.interval"))," is the duration of an epoch.\nIt will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"600"),"."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.params.vrf_parameters.proof_delay"))," is number of blocks since the\nbeginning of an epoch after a node can still submit its VRF proof.\nIt will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"400"),"."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.params.vrf_parameters.gas_costs.vrf_prove"))," specifies the cost for\na VRF prove transaction.\nIt will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand."))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon.params.pvss_parameters"))," control the behavior of the\n",(0,r.kt)("a",{parentName:"p",href:"/adrs/0007-improved-random-beacon"},"previous random beacon implementing a PVSS scheme"),"."),(0,r.kt)("p",null,"Since PVSS is no longer supported, all its configuration options are removed\nas well."),(0,r.kt)("h3",{id:"governance"},(0,r.kt)("strong",{parentName:"h3"},"Governance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"governance.params.stake_threshold"))," is a new parameter specifying the\nsingle unified stake threshold representing the percentage of ",(0,r.kt)("inlineCode",{parentName:"p"},"VoteYes")," votes\nin terms of total voting power for a governance proposal to pass.\nIt will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"68")," (i.e. 68%)."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"governance.params.quorum"))," is the minimum percentage of voting power that\nneeds to be cast on a proposal for the result to be valid."),(0,r.kt)("p",{parentName:"li"},"It will be removed since it is being replaced by the single\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"governance.params.staking_threshold"))," parameter."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"governance.params.threshold"))," is the minimum percentage of ",(0,r.kt)("inlineCode",{parentName:"p"},"VoteYes")," votes\nin order for a proposal to be accepted."),(0,r.kt)("p",{parentName:"li"},"It will be removed since it is being replaced by the single\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"governance.params.staking_threshold"))," parameter."),(0,r.kt)("p",{parentName:"li"},"This will be done automatically with the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis"),"\ncommand."))),(0,r.kt)("h3",{id:"consensus"},(0,r.kt)("strong",{parentName:"h3"},"Consensus")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"consensus.params.state_checkpoint_interval"))," parameter controls the\ninterval (in blocks) on which state checkpoints should be taken. It will be\nincreased from ",(0,r.kt)("inlineCode",{parentName:"li"},"10000")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"100000")," to improve nodes' performance since\ncomputing checkpoints is I/O intensive.")),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"extra_data"))," will be set back to the value in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/mainnet-artifacts/releases/tag/2020-11-18"},"Mainnet genesis file"),"\nto include the Oasis Network's genesis quote:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"\u201d"),(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quis_custodiet_ipsos_custodes%3F"},(0,r.kt)("em",{parentName:"a"},"Quis custodiet ipsos custodes?")),(0,r.kt)("em",{parentName:"p"},"\u201d ","[","submitted by Oasis\nCommunity Member Daniyar Borangaziyev]:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"extra_data": {\n  "quote": "UXVpcyBjdXN0b2RpZXQgaXBzb3MgY3VzdG9kZXM/IFtzdWJtaXR0ZWQgYnkgT2FzaXMgQ29tbXVuaXR5IE1lbWJlciBEYW5peWFyIEJvcmFuZ2F6aXlldl0="\n}\n')))),(0,r.kt)("h2",{id:"launch-support"},"Launch Support"),(0,r.kt)("p",null,"The Oasis team will be offering live video support during the Damask upgrade.\nVideo call link and calendar details will be shared with node operators via\nemail and Slack."),(0,r.kt)("p",null,"For any additional support, please reach out via the\n",(0,r.kt)("a",{parentName:"p",href:"/get-involved/"},(0,r.kt)("strong",{parentName:"a"},"#nodeoperators")," Oasis Community Slack channel")," with\nyour questions, comments, and feedback related to Damask upgrade."),(0,r.kt)("p",null,"To follow the network, please use one of the many\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/docs/blob/0aeeb93a6e7c9001925923661e4eb3340ec4fb4b/docs/general/community-resources/community-made-resources.md#block-explorers--validator-leaderboards-block-explorers-validator-leaderboards"},"community block explorers"),"."))}c.isMDXComponent=!0}}]);