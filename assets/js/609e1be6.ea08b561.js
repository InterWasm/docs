"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8983],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:4},l="Environment Setup",p={unversionedId:"basics/environment",id:"basics/environment",title:"Environment Setup",description:"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For",source:"@site/dev-academy/basics/04-environment.md",sourceDirName:"basics",slug:"/basics/environment",permalink:"/dev-academy/basics/environment",editUrl:"https://github.com/InterWasm/docs/edit/main/dev-academy/basics/04-environment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"devAcademy",previous:{title:"Basics of Cosmos SDK and CosmWasm",permalink:"/dev-academy/basics/cosmos-sdk-cw"},next:{title:"Challenge",permalink:"/dev-academy/basics/challenge"}},u={},c=[{value:"Gitpod",id:"gitpod",level:2},{value:"Go",id:"go",level:2},{value:"Rust",id:"rust",level:2},{value:"Installing Rust in Linux and Mac",id:"installing-rust-in-linux-and-mac",level:3},{value:"wasmd",id:"wasmd",level:2},{value:"Setup wasmd and Wallet",id:"setup-wasmd-and-wallet",level:2},{value:"Export wasmd Parameters",id:"export-wasmd-parameters",level:2},{value:"Setup command-line tools",id:"setup-command-line-tools",level:2},{value:"Setup CosmJS CLI client",id:"setup-cosmjs-cli-client",level:2},{value:"Setting up your IDE",id:"setting-up-your-ide",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,i.kt)("p",null,"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For\neasy testing, you can use the public testnet (cliffnet) to deploy and run your contracts."),(0,i.kt)("p",null,"When interacting with a network, you can either use ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," which is a Go client or the Node REPL. The Node REPL is\nrecommended for contract operations, since JSON manipulation is not intuitive with the shell/Go client."),(0,i.kt)("p",null,"For this course, we will be using the public testnet to make things simpler."),(0,i.kt)("h2",{id:"gitpod"},"Gitpod"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.gitpod.io/"},"Gitpod")," is an online development environment. We have a gitpod image that you can base your\nprojects on. The image contains all the requirements below. Gitpod is only recommended if you have a stable internet connection.\nAdd ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template/blob/master/.gitpod.yml"},".gitpod.yml")," file to your project's root\nthen push it to GitHub. After installing the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gitpod.io/extension-activation/"},"gitpod extension"),", on the GitHub\nproject repo, there will be a ",(0,i.kt)("inlineCode",{parentName:"p"},"Gitpod")," button which will create a workspace for you to work on."),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("p",null,"You can setup golang following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki#working-with-go"},"official documentation"),". The latest\nversions of ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),"\nrequire go version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.16.8+"),"."),(0,i.kt)("h2",{id:"rust"},"Rust"),(0,i.kt)("p",null,"Assuming you have never worked with rust, you will first need to install some tooling. The standard approach is to\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup")," to download dependencies and handle updating multiple versions of\n",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rustc"),", which you will be using."),(0,i.kt)("h3",{id:"installing-rust-in-linux-and-mac"},"Installing Rust in Linux and Mac"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"install rustup"),". Once installed, make sure you have the wasm32 target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# If this is lower than 1.55.0+, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,i.kt)("h2",{id:"wasmd"},"wasmd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," is the backbone of the CosmWasm platform. It is an implementation of a Cosmoszone with wasm smart contracts\nenabled."),(0,i.kt)("p",null,"This code was forked from the ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos/gaia")," repository as a base and then x/wasm was added and many\ngaia-specific files were cleaned up. However, the wasmd binary should function just like gaiad except for the addition of the x/wasm\nmodule."),(0,i.kt)("p",null,"If you intend to develop or edit a contract, you need wasmd."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\n# replace the v0.23.0 with the most stable version on https://github.com/CosmWasm/wasmd/releases\ngit checkout v0.23.0\nmake install\n\n# verify the installation\nwasmd version\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"make install")," will copy ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin"),"\nby default. If you have any problem with the installation of ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),", check your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," and make sure it includes ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin"),". "))),(0,i.kt)("h2",{id:"setup-wasmd-and-wallet"},"Setup wasmd and Wallet"),(0,i.kt)("p",null,"Let's configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," executable, point it to testnets, create a wallet and ask for tokens from the faucet:"),(0,i.kt)("p",null,"First, source the cliffnet cosmwasm public network configuration to the shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/cliffnet-1/defaults.env)\n")),(0,i.kt)("p",null,"Setup the client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# add wallets for testing\nwasmd keys add wallet\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Running the command above will add an encrypted private key to the wasmd keyring and display its attributes as follows: "),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'- name: wallet\n  type: local\n  address: wasm16ew79ekmhkvulym6auxu3prdhejm646de8d575\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AoUq0+iYyYY9FmCx3vZF2EHhvCq1zDQxIXAH8lEsjOPZ"}\'\n  mnemonic: ""\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nshare rhythm physical enrich merry female advance wrist mule mistake measure road pupil spell hollow eternal insect blast quit simple kid tooth drastic anger\n')))),(0,i.kt)("p",null,"You need some tokens in your address to interact with the network. If you are using a local node you can skip this step. Requesting tokens\nfrom the faucet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) \'{"denom":"upebble","address":$addr}\') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.cliffnet.cosmwasm.com/credit\n')),(0,i.kt)("h2",{id:"export-wasmd-parameters"},"Export wasmd Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," client requires to be further configured in order to interact with different testnets.\nEach testnet has its own endpoints and system parameters."),(0,i.kt)("p",null,"An effective way to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," is to define the following environment variables, making use of the network configuration parameters we sourced earlier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# bash\nexport NODE="--node $RPC"\nexport TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.025upebble --gas auto --gas-adjustment 1.3"\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# zsh\nexport NODE=(--node $RPC)\nexport TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001upebble --gas auto --gas-adjustment 1.3)\n")),(0,i.kt)("p",null,"If the command above throws an error, it means you are utilizing a different type of shell. If there are no errors, try executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank total $NODE\n")),(0,i.kt)("p",null,"A response that is similar to the one below means that you can now interact with the node you have configured."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'pagination:\n  total: "2"\nsupply:\n- amount: "14499899999800"\n  denom: upebble\n- amount: "15075884463468"\n  denom: urock\n')),(0,i.kt)("p",null," You can check that your faucet request has been successful by checking the balance of your wallet bank account by trying the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank balances $(wasmd keys show -a wallet) $NODE\n")),(0,i.kt)("p",null,"and you can explore the details about various other commands by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd help\n")),(0,i.kt)("h2",{id:"setup-command-line-tools"},"Setup command-line tools"),(0,i.kt)("p",null,"We will be using a few command-line tools extensively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apt install jq curl\n")),(0,i.kt)("h2",{id:"setup-cosmjs-cli-client"},"Setup CosmJS CLI client"),(0,i.kt)("p",null,"Another way to utilize and interact with on-chain contracts is using the CosmJS interactive client\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs/tree/main/packages/cli"},"@cosmjs/cli")),(0,i.kt)("p",null,"To use it, install ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js 12+")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," first."),(0,i.kt)("p",null,"Then,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.26 --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/base.ts --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/cw20-base.ts\n")),(0,i.kt)("p",null,"With that, you should observe the initialization of an interactive session."),(0,i.kt)("h2",{id:"setting-up-your-ide"},"Setting up your IDE"),(0,i.kt)("p",null,"We need a good IDE for developing smart contracts with Rust. We recommend ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/"},"IntelliJ IDEA")," (the community edition will do) coupled with the Rust Plugin."))}d.isMDXComponent=!0}}]);