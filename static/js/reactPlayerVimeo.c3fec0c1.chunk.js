(self.webpackChunkcode_academy_arabic=self.webpackChunkcode_academy_arabic||[]).push([[173],{2458:(e,t,s)=>{var r,o=s(2897).default,a=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,u=(e,t,s,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of n(t))h.call(e,o)||o===s||i(e,o,{get:()=>t[o],enumerable:!(r=l(t,o))||r.enumerable});return e},c=(e,t,s)=>(((e,t,s)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!==typeof t?t+"":t,s),s),y={};((e,t)=>{for(var s in t)i(e,s,{get:t[s],enumerable:!0})})(y,{default:()=>P}),e.exports=(r=y,u(i({},"__esModule",{value:!0}),r));var d=((e,t,s)=>(s=null!=e?a(p(e)):{},u(!t&&e&&e.__esModule?s:i(s,"default",{value:e,enumerable:!0}),e)))(s(5043)),f=s(2206),m=s(1520);const b=e=>e.replace("/manage/videos","");class P extends d.Component{constructor(){super(...arguments),c(this,"callPlayer",f.callPlayer),c(this,"duration",null),c(this,"currentTime",null),c(this,"secondsLoaded",null),c(this,"mute",(()=>{this.setMuted(!0)})),c(this,"unmute",(()=>{this.setMuted(!1)})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,f.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((t=>{if(!this.container)return;const{playerOptions:s,title:r}=this.props.config;this.player=new t.Player(this.container,o({url:b(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls},s)),this.player.ready().then((()=>{const e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",r&&(e.title=r)})).catch(this.props.onError),this.player.on("loaded",(()=>{this.props.onReady(),this.refreshDuration()})),this.player.on("play",(()=>{this.props.onPlay(),this.refreshDuration()})),this.player.on("pause",this.props.onPause),this.player.on("seeked",(e=>this.props.onSeek(e.seconds))),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(e=>{let{seconds:t}=e;this.currentTime=t})),this.player.on("progress",(e=>{let{seconds:t}=e;this.secondsLoaded=t})),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",(e=>this.props.onPlaybackRateChange(e.playbackRate)))}),this.props.onError)}refreshDuration(){this.player.getDuration().then((e=>{this.duration=e}))}play(){const e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display:e}=this.props,t={width:"100%",height:"100%",overflow:"hidden",display:e};return d.default.createElement("div",{key:this.props.url,ref:this.ref,style:t})}}c(P,"displayName","Vimeo"),c(P,"canPlay",m.canPlay.vimeo),c(P,"forceLoad",!0)}}]);
//# sourceMappingURL=reactPlayerVimeo.c3fec0c1.chunk.js.map