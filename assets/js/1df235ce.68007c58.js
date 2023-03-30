"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Confidential Hello World",s={unversionedId:"dapp/cipher/confidential-smart-contract",id:"dapp/cipher/confidential-smart-contract",title:"Confidential Hello World",description:"Confidential smart contract execution on Oasis is assured by three mechanisms:",source:"@site/docs/dapp/cipher/confidential-smart-contract.md",sourceDirName:"dapp/cipher",slug:"/dapp/cipher/confidential-smart-contract",permalink:"/dapp/cipher/confidential-smart-contract",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-sdk/edit/main/docs/contract/confidential-smart-contract.md",tags:[],version:"current",lastUpdatedAt:1680165721,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Hello World",permalink:"/dapp/cipher/hello-world"}},l={},c=[{value:"Confidential cell",id:"confidential-cell",level:2},{value:"Confidential Instantiation and Calling",id:"confidential-instantiation-and-calling",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"confidential-hello-world"},"Confidential Hello World"),(0,o.kt)("p",null,"Confidential smart contract execution on Oasis is assured by three mechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the contract is executed in a trusted execution environment,"),(0,o.kt)("li",{parentName:"ul"},"the contract's storage on the blockchain is encrypted,"),(0,o.kt)("li",{parentName:"ul"},"the client's transactions and queries are end-to-end encrypted.")),(0,o.kt)("p",null,"The first mechanism is implemented as part of the ParaTime attestation process\non the consensus layer and is opaque to the dApp developer."),(0,o.kt)("p",null,"The other two mechanisms are available to dApp developers. The remainder of\nthis chapter will show you how to use an encrypted contract storage\nand perform contract operations with end-to-end encryption on Cipher."),(0,o.kt)("h2",{id:"confidential-cell"},"Confidential cell"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/dapp/cipher/hello-world"},"hello world")," example we used\n",(0,o.kt)("a",{parentName:"p",href:"https://api.docs.oasis.io/oasis-sdk/oasis_contract_sdk_storage/cell/struct.PublicCell.html"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicCell<T>"))," to access the key-value store\nof that contract instance. In this case the value was stored unencrypted on the\nblockchain associated with the hash of the key we provided to the constructor\n(e.g., the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," in ",(0,o.kt)("inlineCode",{parentName:"p"},'PublicCell::new(b"counter")'),")."),(0,o.kt)("p",null,"Cipher supports another primitive ",(0,o.kt)("a",{parentName:"p",href:"https://api.docs.oasis.io/oasis-sdk/oasis_contract_sdk_storage/cell/struct.ConfidentialCell.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ConfidentialCell<T>")),"\nwhich enables you to store and load data confidentially assured by\nhardware-level encryption. In addition, the value is encrypted along with a\nnonce so that it appears different each time to the blockchain observer, even\nif the decrypted value remains equal. Namely, the nonce is generated from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the round number,"),(0,o.kt)("li",{parentName:"ul"},"the number of the sub-call during current smart contract execution,"),(0,o.kt)("li",{parentName:"ul"},"the number of confidential storage accesses from smart contracts in the\ncurrent block.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The location of the confidential cell inside the contract state is\n",(0,o.kt)("strong",{parentName:"p"},"still based on the initialization key passed to the constructor"),".\nConsequently, if you declare a number of confidential cells and write to the\nsame one on each call, the blockchain observers will notice that the same\ncell is being changed every time.")),(0,o.kt)("p",null,"To call the confidential cell getter and setter, you will need to provide the\ninstance of the ",(0,o.kt)("em",{parentName:"p"},"confidential store"),". The store is obtained by calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"confidential_store()")," on the contract's ",(0,o.kt)("em",{parentName:"p"},"context")," object. If, for example, the\nnode operator will try to execute your code in a non-confidential environment,\nthey would not obtain the keys required to perform decryption so the operation\nwould fail."),(0,o.kt)("p",null,"Now, let's look at how a confidential version of the hello world smart contract\nwould look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'//! A confidential hello world smart contract.\nextern crate alloc;\n\nuse oasis_contract_sdk as sdk;\nuse oasis_contract_sdk_storage::cell::ConfidentialCell;\n\n/// All possible errors that can be returned by the contract.\n///\n/// Each error is a triplet of (module, code, message) which allows it to be both easily\n/// human readable and also identifyable programmatically.\n#[derive(Debug, thiserror::Error, sdk::Error)]\npub enum Error {\n    #[error("bad request")]\n    #[sdk_error(code = 1)]\n    BadRequest,\n}\n\n/// All possible requests that the contract can handle.\n///\n/// This includes both calls and queries.\n#[derive(Clone, Debug, cbor::Encode, cbor::Decode)]\npub enum Request {\n    #[cbor(rename = "instantiate")]\n    Instantiate { initial_counter: u64 },\n\n    #[cbor(rename = "say_hello")]\n    SayHello { who: String },\n}\n\n/// All possible responses that the contract can return.\n///\n/// This includes both calls and queries.\n#[derive(Clone, Debug, Eq, PartialEq, cbor::Encode, cbor::Decode)]\npub enum Response {\n    #[cbor(rename = "hello")]\n    Hello { greeting: String },\n\n    #[cbor(rename = "empty")]\n    Empty,\n}\n\n/// The contract type.\npub struct HelloWorld;\n\n/// Storage cell for the counter.\nconst COUNTER: ConfidentialCell<u64> = ConfidentialCell::new(b"counter");\n\nimpl HelloWorld {\n    /// Increment the counter and return the previous value.\n    fn increment_counter<C: sdk::Context>(ctx: &mut C) -> u64 {\n        let counter = COUNTER.get(ctx.confidential_store()).unwrap_or_default();\n        COUNTER.set(ctx.confidential_store(), counter + 1);\n\n        counter\n    }\n}\n\n// Implementation of the sdk::Contract trait is required in order for the type to be a contract.\nimpl sdk::Contract for HelloWorld {\n    type Request = Request;\n    type Response = Response;\n    type Error = Error;\n\n    fn instantiate<C: sdk::Context>(ctx: &mut C, request: Request) -> Result<(), Error> {\n        // This method is called during the contracts.Instantiate call when the contract is first\n        // instantiated. It can be used to initialize the contract state.\n        match request {\n            // We require the caller to always pass the Instantiate request.\n            Request::Instantiate { initial_counter } => {\n                // Initialize counter to specified value.\n                COUNTER.set(ctx.confidential_store(), initial_counter);\n\n                Ok(())\n            }\n            _ => Err(Error::BadRequest),\n        }\n    }\n\n    fn call<C: sdk::Context>(ctx: &mut C, request: Request) -> Result<Response, Error> {\n        // This method is called for each contracts.Call call. It is supposed to handle the request\n        // and return a response.\n        match request {\n            Request::SayHello { who } => {\n                // Increment the counter and retrieve the previous value.\n                let counter = Self::increment_counter(ctx);\n\n                // Return the greeting as a response.\n                Ok(Response::Hello {\n                    greeting: format!("hello {who} ({counter})"),\n                })\n            }\n            _ => Err(Error::BadRequest),\n        }\n    }\n\n    fn query<C: sdk::Context>(_ctx: &mut C, _request: Request) -> Result<Response, Error> {\n        // This method is called for each contracts.Query query. It is supposed to handle the\n        // request and return a response.\n        Err(Error::BadRequest)\n    }\n}\n\n// Create the required Wasm exports required for the contract to be runnable.\nsdk::create_contract!(HelloWorld);\n\n// We define some simple contract tests below.\n#[cfg(test)]\nmod test {\n    use oasis_contract_sdk::{testing::MockContext, types::ExecutionContext, Contract};\n\n    use super::*;\n\n    #[test]\n    fn test_hello() {\n        // Create a mock execution context with default values.\n        let mut ctx: MockContext = ExecutionContext::default().into();\n\n        // Instantiate the contract.\n        HelloWorld::instantiate(\n            &mut ctx,\n            Request::Instantiate {\n                initial_counter: 11,\n            },\n        )\n        .expect("instantiation should work");\n\n        // Dispatch the SayHello message.\n        let rsp = HelloWorld::call(\n            &mut ctx,\n            Request::SayHello {\n                who: "unit test".to_string(),\n            },\n        )\n        .expect("SayHello call should work");\n\n        // Make sure the greeting is correct.\n        assert_eq!(\n            rsp,\n            Response::Hello {\n                greeting: "hello unit test (11)".to_string()\n            }\n        );\n\n        // Dispatch another SayHello message.\n        let rsp = HelloWorld::call(\n            &mut ctx,\n            Request::SayHello {\n                who: "second call".to_string(),\n            },\n        )\n        .expect("SayHello call should work");\n\n        // Make sure the greeting is correct.\n        assert_eq!(\n            rsp,\n            Response::Hello {\n                greeting: "hello second call (12)".to_string()\n            }\n        );\n    }\n}\n')),(0,o.kt)("p",null,"The contract is built the same way as its non-confidential counterpart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cargo build --target wasm32-unknown-unknown --release\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The blockchain store containing all compiled contracts is public. This means\nthat anyone will be able to decompile your smart contract and see how it\nworks. ",(0,o.kt)("strong",{parentName:"p"},"Do not put any sensitive data inside the smart contract code!"))),(0,o.kt)("p",null,"Since the smart contracts store is public, uploading the Wasm code is\nthe same as for the non-confidential ones:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"oasis contracts upload hello_world.wasm\n")),(0,o.kt)("h2",{id:"confidential-instantiation-and-calling"},"Confidential Instantiation and Calling"),(0,o.kt)("p",null,"To generate an encrypted transaction, the ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis contracts")," subcommand\nexpects a ",(0,o.kt)("inlineCode",{parentName:"p"},"--encrypted")," flag. The client (",(0,o.kt)("inlineCode",{parentName:"p"},"oasis")," command in our case) will\ngenerate and use an ephemeral keypair for encryption. If the original\ntransaction was encrypted, the returned transaction result will also be\nencrypted inside the trusted execution environment to prevent a\nman-in-the-middle attack by the compute node."),(0,o.kt)("p",null,"Encrypted transactions have the following encrypted fields:\ncontract address, function name, parameters and the amounts and types of tokens\nsent."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Encrypted transactions are not anonymous!")," Namely, the transaction contains\nunencrypted public key of your account or a list of expected multisig keys,\nthe gas limit and the amount of fee paid for the transaction execution."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"While the transaction execution is confidential, its effects may reveal some\ninformation. For example, the account balances are public. If the effect is,\nsay, subtraction of 10 tokens from the signer's account, this most probably\nimplies that they have been transferred as part of this transaction.")),(0,o.kt)("p",null,"Before we instantiate the contract we need to consider the gas usage of our\nconfidential smart contract. Since the execution of the smart contract is\ndependent on the (confidential) smart contract state, the gas limit cannot be\ncomputed automatically. Currently, the gas limit for confidential transactions\nis tailored towards simple transaction execution (e.g. no gas is reserved for\naccessing the contract state). For more expensive transactions, we\nneed to explicitly pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--gas-limit")," parameter and ",(0,o.kt)("em",{parentName:"p"},"guess")," the sufficient\nvalue for now or we will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"out of gas")," error. For example, to\ninstantiate our smart contract above with a single write to the contract state,\nwe need to raise the gas limit to ",(0,o.kt)("inlineCode",{parentName:"p"},"60000"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"oasis contracts instantiate CODEID '{instantiate: {initial_counter: 42}}' --encrypted --gas-limit 60000\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"out of gas")," error can ",(0,o.kt)("strong",{parentName:"p"},"potentially reveal the (confidential) state of the\nsmart contract"),"! If your smart contract contains a branch which depends on the\nvalue stored in the contract state, an attack similar to the ",(0,o.kt)("strong",{parentName:"p"},"timing attack"),"\nknown from the design of cryptographic algorithms can succeed. To overcome this,\nyour code should ",(0,o.kt)("strong",{parentName:"p"},"never contain branches depending on secret smart contract\nstate"),"."),(0,o.kt)("p",{parentName:"admonition"},"A similar gas limit attack could reveal the ",(0,o.kt)("strong",{parentName:"p"},"client's transaction parameters"),".\nFor example, if calling function ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," costs ",(0,o.kt)("inlineCode",{parentName:"p"},"50,000")," gas units and function ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"300,000")," gas units, the attacker could imply which function call was performed\nbased on the transaction's gas limit, which is public. To mitigate this attack,\nthe client should always use the maximum gas cost among all contract function\ncalls - in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"300,000"),".")),(0,o.kt)("p",null,"Finally, we make a confidential call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"oasis contracts call INSTANCEID '{say_hello: {who: \"me\"}}' --encrypted --gas-limit 60000\n")),(0,o.kt)("admonition",{title:"Call Format",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://api.docs.oasis.io/oasis-sdk/oasis_contract_sdk/context/trait.Context.html"},"Context")," object has a special ",(0,o.kt)("a",{parentName:"p",href:"https://api.docs.oasis.io/oasis-sdk/oasis_contract_sdk/context/trait.Context.html#tymethod.call_format"},(0,o.kt)("inlineCode",{parentName:"a"},"call_format"))," attribute which holds\ninformation on whether the transaction was encrypted by the client's ephemeral\nkey or not. Having access control based on this value is useful as an\nadditional safety precaution to prevent leakage of any confidential\ninformation unencrypted out of the trusted execution environment by mistake.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Regardless of the encrypted transaction and confidential storage used in the\nsmart contract, any ",(0,o.kt)("a",{parentName:"p",href:"https://api.docs.oasis.io/oasis-sdk/oasis_contract_sdk/context/trait.Context.html#tymethod.emit_event"},"emitted event")," will be public.")),(0,o.kt)("admonition",{title:"Example",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can view and download a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/examples/contract-sdk/c10l-hello-world"},"complete example")," from the Oasis SDK repository.")))}u.isMDXComponent=!0}}]);