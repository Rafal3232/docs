"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5954],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return t?a.createElement(k,i(i({ref:n},l),{},{components:t})):a.createElement(k,i({ref:n},l))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const s={},i="oasis-node CLI",r={unversionedId:"core/oasis-node/cli",id:"core/oasis-node/cli",title:"oasis-node CLI",description:"control",source:"@site/docs/core/oasis-node/cli.md",sourceDirName:"core/oasis-node",slug:"/core/oasis-node/cli",permalink:"/core/oasis-node/cli",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/oasis-node/cli.md",tags:[],version:"current",lastUpdatedAt:1669418750,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Metrics",permalink:"/core/oasis-node/metrics"},next:{title:"Common Functionality",permalink:"/core/common-functionality"}},c={},d=[{value:"<code>control</code>",id:"control",level:2},{value:"<code>status</code>",id:"status",level:3},{value:"<code>genesis</code>",id:"genesis",level:2},{value:"<code>check</code>",id:"check",level:3},{value:"<code>dump</code>",id:"dump",level:3},{value:"<code>init</code>",id:"init",level:3},{value:"<code>stake</code>",id:"stake",level:2},{value:"<code>account</code>",id:"account",level:3},{value:"<code>info</code>",id:"info",level:4},{value:"<code>pubkey2address</code>",id:"pubkey2address",level:3}],l={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oasis-node-cli"},(0,o.kt)("inlineCode",{parentName:"h1"},"oasis-node")," CLI"),(0,o.kt)("h2",{id:"control"},(0,o.kt)("inlineCode",{parentName:"h2"},"control")),(0,o.kt)("h3",{id:"status"},(0,o.kt)("inlineCode",{parentName:"h3"},"status")),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oasis-node control status\n")),(0,o.kt)("p",null,"to get information like the following (example taken from a runtime compute\nnode):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "software_version": "21.3",\n  "identity": {\n    "node": "iWq6Nft6dU2GWAr9U7ICbhXWwmAINIniKzMMblSo5Xs=",\n    "p2p": "dGd+pGgIlkJb0dnkBQ7vI2EWWG81pF5M1G+jL2/6pyA=",\n    "consensus": "QaMdKVwX1da0Uf82cp0DDukQQwrSjr8BwlIxc//ANE8=",\n    "tls": [\n      "Kj8ANHwfMzcWoA1vx0OMhn4oGv8Y0vc46xMOdQUIh5c=",\n      "1C8rWqyuARkSxNXuPbDPh9XID/SiYAU3GxGk6nMwR0Q="\n    ]\n  },\n  "consensus": {\n    "version": {\n      "major": 4\n    },\n    "backend": "tendermint",\n    "features": 3,\n    "node_peers": [\n      "5ab8074ce3053ef9b72d664c73e39972241442e3@57.71.39.73:26658",\n      "abb66e8780f3815d87bad488a2892b4d4b2221e3@108.15.34.59:50716"\n    ],\n    "latest_height": 5960191,\n    "latest_hash": "091c29c3d588c52421a4f215268c6b4ab1a7762c429a98fec5de9251f8907add",\n    "latest_time": "2021-09-24T21:42:29+02:00",\n    "latest_epoch": 10489,\n    "latest_state_root": {\n      "ns": "0000000000000000000000000000000000000000000000000000000000000000",\n      "version": 5960190,\n      "root_type": 1,\n      "hash": "c34581dcec59d80656d6082260d63f3206aef0a1b950c1f2c06d1eaa36a22ec3"\n    },\n    "genesis_height": 5891596,\n    "genesis_hash": "e9d9fb99baefc3192a866581c35bf43d7f0499c64e1c150171e87b2d5dc35087",\n    "last_retained_height": 5891596,\n    "last_retained_hash": "e9d9fb99baefc3192a866581c35bf43d7f0499c64e1c150171e87b2d5dc35087",\n    "chain_context": "9ee492b63e99eab58fd979a23dfc9b246e5fc151bfdecd48d3ba26a9d0712c2b",\n    "is_validator": true\n  },\n  "runtimes": {\n    "0000000000000000000000000000000000000000000000000000000000000001": {\n      "descriptor": {\n        "v": 2,\n        "id": "0000000000000000000000000000000000000000000000000000000000000001",\n        "entity_id": "Ldzg8aeLiUBrMYxidd5DqEzpamyV2cprmRH0pG8d/Jg=",\n        "genesis": {\n          "state_root": "c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a",\n          "state": null,\n          "storage_receipts": null,\n          "round": 0\n        },\n        "kind": 1,\n        "tee_hardware": 0,\n        "versions": {\n          "version": {\n            "minor": 2\n          }\n        },\n        "executor": {\n          "group_size": 3,\n          "group_backup_size": 3,\n          "allowed_stragglers": 1,\n          "round_timeout": 5,\n          "max_messages": 256\n        },\n        "txn_scheduler": {\n          "algorithm": "simple",\n          "batch_flush_timeout": 1000000000,\n          "max_batch_size": 100,\n          "max_batch_size_bytes": 1048576,\n          "propose_batch_timeout": 2\n        },\n        "storage": {\n          "group_size": 3,\n          "min_write_replication": 2,\n          "max_apply_write_log_entries": 10000,\n          "max_apply_ops": 2,\n          "checkpoint_interval": 100,\n          "checkpoint_num_kept": 2,\n          "checkpoint_chunk_size": 8388608\n        },\n        "admission_policy": {\n          "any_node": {}\n        },\n        "constraints": {\n          "executor": {\n            "backup-worker": {\n              "max_nodes": {\n                "limit": 1\n              },\n              "min_pool_size": {\n                "limit": 3\n              }\n            },\n            "worker": {\n              "max_nodes": {\n                "limit": 1\n              },\n              "min_pool_size": {\n                "limit": 3\n              }\n            }\n          },\n          "storage": {\n            "worker": {\n              "max_nodes": {\n                "limit": 1\n              },\n              "min_pool_size": {\n                "limit": 3\n              }\n            }\n          }\n        },\n        "staking": {},\n        "governance_model": "entity"\n      },\n      "latest_round": 1355,\n      "latest_hash": "2a11820c0524a8a753f7f4a268ee2d0a4f4588a89121f92a43f4be9cc6acca7e",\n      "latest_time": "2021-09-24T21:41:29+02:00",\n      "latest_state_root": {\n        "ns": "0000000000000000000000000000000000000000000000000000000000000000",\n        "version": 1355,\n        "root_type": 1,\n        "hash": "45168e11548ac5322a9a206abff4368983b5cf676b1bcb2269f5dfbdf9df7be3"\n      },\n      "genesis_round": 0,\n      "genesis_hash": "aed94c03ebd2d16dfb5f6434021abf69c8c15fc69b6b19554d23da8a5a053776",\n      "committee": {\n        "latest_round": 1355,\n        "latest_height": 5960180,\n        "last_committee_update_height": 5960174,\n        "executor_roles": [\n          "worker",\n          "backup-worker"\n        ],\n        "storage_roles": [\n          "worker"\n        ],\n        "is_txn_scheduler": false,\n        "peers": [\n          "/ip4/57.71.39.73/tcp/41002/p2p/12D3KooWJvL8mYzHbcLtj91bf5sHhtrB7C8CWND5sV6Kk24eUdpQ",\n          "/ip4/108.67.32.45/tcp/26648/p2p/12D3KooWBKgcH7TGMSLuxzLxK41nTwk6DsxHRpb7HpWQXJzLurcv"\n        ]\n      },\n      "storage": {\n        "last_finalized_round": 1355\n      }\n    }\n  },\n  "registration": {\n    "last_registration": "2021-09-24T21:41:08+02:00",\n    "descriptor": {\n      "v": 1,\n      "id": "iWq6Nft6dU2GWAr9U7ICbhXWwmAINIniKzMMblSo5Xs=",\n      "entity_id": "4G4ISI8hANvMRYTbxdXU+0r9m/6ZySHERR+2RDbNOU8=",\n      "expiration": 10491,\n      "tls": {\n        "pub_key": "Kj8ANHwfMzcWoA1vx0OMhn4oGv8Y0vc46xMOdQUIh5c=",\n        "next_pub_key": "1C8rWqyuARkSxNXuPbDPh9XID/SiYAU3GxGk6nMwR0Q=",\n        "addresses": [\n          "Kj8ANHwfMzcWoA1vx0OMhn4oGv8Y0vc46xMOdQUIh5c=@128.89.215.24:30001",\n          "1C8rWqyuARkSxNXuPbDPh9XID/SiYAU3GxGk6nMwR0Q=@128.89.215.24:30001"\n        ]\n      },\n      "p2p": {\n        "id": "dGd+pGgIlkJb0dnkBQ7vI2EWWG81pF5M1G+jL2/6pyA=",\n        "addresses": [\n          "159.89.215.24:30002"\n        ]\n      },\n      "consensus": {\n        "id": "QaMdKVwX1da0Uf82cp0DDukQQwrSjr8BwlIxc//ANE8=",\n        "addresses": [\n          "dGd+pGgIlkJb0dnkBQ7vI2EWWG81pF5M1G+jL2/6pyA=@128.89.215.24:26656"\n        ]\n      },\n      "beacon": {\n        "point": "BHg8TOqKD4wV8UCu9nICvJt7rhXFd8CxXuYiHa6X/NnzlIndzGNEJyyTr00s5rgKwX25yPmv+r2xRFbcQK6hGLE="\n      },\n      "runtimes": [\n        {\n          "id": "0000000000000000000000000000000000000000000000000000000000000001",\n          "version": {\n            "minor": 2\n          },\n          "capabilities": {},\n          "extra_info": null\n        }\n      ],\n      "roles": "compute,storage,validator"\n    },\n    "node_status": {\n      "expiration_processed": false,\n      "freeze_end_time": 0,\n      "election_eligible_after": 9810\n    }\n  },\n  "pending_upgrades": []\n}\n')),(0,o.kt)("h2",{id:"genesis"},(0,o.kt)("inlineCode",{parentName:"h2"},"genesis")),(0,o.kt)("h3",{id:"check"},(0,o.kt)("inlineCode",{parentName:"h3"},"check")),(0,o.kt)("p",null,"To check if a given ",(0,o.kt)("a",{parentName:"p",href:"/core/consensus/genesis#genesis-file"},"genesis file")," is valid, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oasis-node genesis check --genesis.file /path/to/genesis.json\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This also checks if the genesis file is in the ",(0,o.kt)("a",{parentName:"p",href:"/core/consensus/genesis#canonical-form"},"canonical form"),".")),(0,o.kt)("h3",{id:"dump"},(0,o.kt)("inlineCode",{parentName:"h3"},"dump")),(0,o.kt)("p",null,"To dump the state of the network at a specific block height, e.g. 717600, to a\n",(0,o.kt)("a",{parentName:"p",href:"/core/consensus/genesis#genesis-file"},"genesis file"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oasis-node genesis dump \\\n  --address unix:/path/to/node/internal.sock \\\n  --genesis.file /path/to/genesis_dump.json \\\n  --height 717600\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You must only run the following command after the given block height has been\nreached on the network.")),(0,o.kt)("h3",{id:"init"},(0,o.kt)("inlineCode",{parentName:"h3"},"init")),(0,o.kt)("p",null,"To initialize a new ",(0,o.kt)("a",{parentName:"p",href:"/core/consensus/genesis#genesis-file"},"genesis file")," with the given chain id and ",(0,o.kt)("a",{parentName:"p",href:"/core/consensus/services/staking#tokens-and-base-units"},"staking token\nsymbol"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'oasis-node genesis init --genesis.file /path/to/genesis.json \\\n  --chain.id "name-of-my-network" \\\n  --staking.token_symbol TEST\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can set a lot of parameters for the various ",(0,o.kt)("a",{parentName:"p",href:"/core/consensus/"},"consensus layer services"),"."),(0,o.kt)("p",{parentName:"admonition"},"To see the full list, run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oasis-node genesis init --help\n"))),(0,o.kt)("h2",{id:"stake"},(0,o.kt)("inlineCode",{parentName:"h2"},"stake")),(0,o.kt)("h3",{id:"account"},(0,o.kt)("inlineCode",{parentName:"h3"},"account")),(0,o.kt)("h4",{id:"info"},(0,o.kt)("inlineCode",{parentName:"h4"},"info")),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oasis-node stake account info \\\n  --stake.account.address <account address> \\\n  --address unix:/path/to/node/internal.sock\n")),(0,o.kt)("p",null,"to get staking information for a specific account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"General Account:\n  Balance: TEST 0.0\n  Nonce: 0\nEscrow Account:\n  Active:\n    Balance: TEST 0.0\n    Total Shares: 0\n  Debonding:\n    Balance: TEST 0.0\n    Total Shares: 0\n  Commission Schedule:\n    Rates: (none)\n    Rate Bounds: (none)\n  Stake Accumulator:\n    Claims:\n      - Name: registry.RegisterEntity\n        Staking Thresholds:\n          - Global: entity\n      - Name: registry.RegisterNode.LQu4ZtFg8OJ0MC4M4QMeUR7Is6Xt4A/CW+PK/7TPiH0=\n        Staking Thresholds:\n          - Global: node-validator\n")),(0,o.kt)("h3",{id:"pubkey2address"},(0,o.kt)("inlineCode",{parentName:"h3"},"pubkey2address")),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oasis-node stake pubkey2address --public_key <public_key>\n")),(0,o.kt)("p",null,"to get staking account address from an entity or node public key. Example\nresponse:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oasis1qqncl383h8458mr9cytatygctzwsx02n4c5f8ed7\n")))}u.isMDXComponent=!0}}]);