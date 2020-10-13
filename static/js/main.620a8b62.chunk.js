(this["webpackJsonpstudytime-stopwatch-app"]=this["webpackJsonpstudytime-stopwatch-app"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=a(25),l=a(15),s=a(12),m=a(41),u=a(139),d=a(142),p=a(144),h=a(145),f=a(46),g=a(13),E=a(146),v=a(147),y=a(148),b=a(149),T=a(150),O=a(167),S=a(168),j=a(79),w=a.n(j),x=a(80),R=a.n(x),N=a(81),k=a.n(N),C=a(82),P=a.n(C),A=Object(u.a)((function(e){return{drawer:Object(m.a)({},e.breakpoints.up("sm"),{width:200,flexShrink:0}),appBar:Object(m.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(200,"px)"),marginLeft:200}),menuButton:Object(m.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:200}}}));function D(){var e=A(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1],i=function(){o(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:e.appBar,component:"header"},r.a.createElement(p.a,null,r.a.createElement(h.a,{color:"inherit","aria-label":"Open main menu",edge:"start",onClick:i,className:e.menuButton},r.a.createElement(w.a,null)),r.a.createElement(f.a,{noWrap:!0,variant:"h6",component:"h1"},"\uc2a4\ud1b1\uc6cc\uce58"))),r.a.createElement(M,{open:c,onClose:i}))}function M(e){var t=e.open,a=e.onClose,n=A(),c=Object(g.a)(),o=r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(R.a,null)),r.a.createElement(b.a,null,r.a.createElement(T.a,{component:i.b,to:"/"},"\uc2a4\ud1b1\uc6cc\uce58"))),r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(k.a,null)),r.a.createElement(b.a,null,r.a.createElement(T.a,{component:i.b,to:"/myRecords"},"\ub0b4 \uae30\ub85d"))),r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(P.a,null)),r.a.createElement(b.a,null,r.a.createElement(T.a,{component:i.b,to:"/statisticOfUsers"},"\uc804\uccb4\uc720\uc800 \ud1b5\uacc4"))));return r.a.createElement("nav",{className:n.drawer,"aria-label":"Main menu"},r.a.createElement(O.a,{smUp:!0,implementation:"css"},r.a.createElement(S.a,{variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:t,onClose:a,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(p.a,null),o)),r.a.createElement(O.a,{xsDown:!0,implementation:"css"},r.a.createElement(S.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},r.a.createElement(p.a,null),o)))}var B=a(62),F=a(45);function I(e){return e<10?"0".concat(e):"".concat(e)}var z=function(e){var t=e.hours,a=e.minutes,n=e.seconds;return r.a.createElement("span",null,I(t),":",I(a),":",I(n))},H=a(151),L=a(152),U=a(153),W=a(154),J=a(155),G=a(156),q=Object(u.a)((function(e){return{caption:{padding:"0 !important"},thead:{position:"absolute",width:"1px",height:"1px",overflow:"hidden"},tbody:{"& td:nth-child(1)":{width:"20%"},"& td:nth-child(2)":{width:"40%"},"& td:nth-child(3)":{width:"40%"}},td:{fontSize:"calc(1rem + 1vw)",textAlign:"center",borderBottom:0}}})),K=function(e){var t=e.record,a=q();return r.a.createElement(H.a,{component:"article"},r.a.createElement(L.a,null,r.a.createElement(f.a,{variant:"srOnly",component:"caption",className:a.caption},"\uad50\uc2dc\ub2f9 \uacf5\ubd80\uc2dc\uac04 \ubc0f \ud734\uc2dd\uc2dc\uac04"),r.a.createElement(U.a,{className:a.thead},r.a.createElement(W.a,null,r.a.createElement(J.a,{scope:"col"},"\uad50\uc2dc"),r.a.createElement(J.a,{scope:"col"},"\uacf5\ubd80\uc2dc\uac04"),r.a.createElement(J.a,{scope:"col"},"\ud734\uc2dd\uc2dc\uac04"))),r.a.createElement(G.a,{className:a.tbody},t.periodRecords.map((function(e){var t=e.period,n=e.studyTimeHours,c=e.studyTimeMinutes,o=e.studyTimeSeconds,i=e.restTimeHours,l=e.restTimeMinutes,s=e.restTimeSeconds;return r.a.createElement(W.a,{key:t},r.a.createElement(J.a,{className:a.td},t),r.a.createElement(J.a,{className:a.td},r.a.createElement(z,{hours:n,minutes:c,seconds:o})),void 0!==i?r.a.createElement(J.a,{className:a.td},r.a.createElement(z,{hours:i,minutes:l,seconds:s})):r.a.createElement(J.a,{className:a.td}))})))))},Y="object"===typeof performance?performance:Date,$=function(){return Y.now()},Q=function(e){return Math.floor(e/1e3)},V=function(e){var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60);return{hours:t,minutes:a,seconds:e-3600*t-60*a}},X=function(e){return 3600*e.hours+60*e.minutes+e.seconds},Z=function(e){var t=e.hours,a=e.minutes,n=e.seconds;return"".concat(t,"\uc2dc\uac04 ").concat(a,"\ubd84 ").concat(n,"\ucd08")};function _(e){return"".concat(e.getFullYear(),"\ub144 ").concat(e.getMonth()+1,"\uc6d4 ").concat(e.getDate(),"\uc77c ").concat(function(e){if(0===e)return"\uc77c";if(1===e)return"\uc6d4";if(2===e)return"\ud654";if(3===e)return"\uc218";if(4===e)return"\ubaa9";if(5===e)return"\uae08";if(6===e)return"\ud1a0";throw new Error("\uc62c\ubc14\ub978 \uc778\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4")}(e.getDay()),"\uc694\uc77c")}var ee=a(52),te=a.n(ee),ae=a(66);function ne(){return(ne=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.studytimestopwatch.com/studyRecordsOfAllUsers",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return e.abrupt("return");case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function re(){return(re=Object(ae.a)(te.a.mark((function e(t){var a,n,r,c,o;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.studytimestopwatch.com/statisticOfAllUsers",{signal:t,mode:"cors",headers:{Accept:"application/json"}});case 2:if(!(a=e.sent).ok){e.next=11;break}return e.next=6,a.json();case 6:return n=e.sent,r=n.totalPeriod,c=n.totalRestTime,o=n.totalStudyTime,e.abrupt("return",{totalPeriod:r,totalRestTime:c,totalStudyTime:o});case 11:return e.abrupt("return",{totalPeriod:0,totalRestTime:{hours:0,minutes:0,seconds:0},totalStudyTime:{hours:0,minutes:0,seconds:0}});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=a(157),oe=a(169),ie=a(158),le=a(159),se=a(160),me=a(161),ue=a(166),de=a(162),pe=Object(u.a)((function(e){return{textCenter:{textAlign:"center"},textRight:{textAlign:"right"},timeDisplay:{marginBottom:e.spacing(10)},switch:{marginBottom:e.spacing(5)},displayedLabel:{fontSize:"calc(2rem + 1vw)"},displayedTime:{fontSize:"calc(2.5rem + 5vw)"},buttonGap:{margin:e.spacing(0,1)}}})),he=function(e,t){var a,n=t.type,r=t.totalStudyTime,c=t.totalRestTime,o=t.heading,i=void 0===o?"":o,l=Object(F.a)({},e),s=Object(B.a)(e.periodRecords);switch(n){case"reset":return{date:new Date,periodRecords:[],heading:"",totalStudyTime:{hours:0,minutes:0,seconds:0},totalRestTime:{hours:0,minutes:0,seconds:0}};case"studyTime":if(0===s.length)s.push({period:1,studyTimeHours:r.hours,studyTimeMinutes:r.minutes,studyTimeSeconds:r.seconds});else{var m=e.totalStudyTime,u=V(X(r)-X(m)),d=u.hours,p=u.minutes,h=u.seconds;s.push({period:e.periodRecords.length+1,studyTimeHours:d,studyTimeMinutes:p,studyTimeSeconds:h})}return l.totalStudyTime=r,l.periodRecords=s,l;case"restTime":var f=V(X(c)-X(e.totalRestTime)),g=f.hours,E=f.minutes,v=f.seconds;return(a=s[s.length-1])&&void 0===a.restTimeHours&&(a=Object(F.a)({},a,{restTimeHours:g,restTimeMinutes:E,restTimeSeconds:v})),s[s.length-1]=a,l.periodRecords=s,l.totalRestTime=c,l;case"heading":return l=Object(F.a)({},l,{heading:i});default:return e}},fe=function(e){var t=pe(),a=Object(n.useRef)(""),c=Object(n.useRef)(0),o=Object(n.useRef)(0),i=Object(n.useState)({hours:0,minutes:0,seconds:0}),s=Object(l.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)({hours:0,minutes:0,seconds:0}),p=Object(l.a)(d,2),h=p[0],g=p[1],E=Object(n.useState)(!1),v=Object(l.a)(E,2),y=v[0],b=v[1],T=Object(n.useState)(!1),O=Object(l.a)(T,2),S=O[0],j=O[1],w=Object(n.useReducer)(he,{heading:"",date:new Date,periodRecords:[],totalStudyTime:{hours:0,minutes:0,seconds:0},totalRestTime:{hours:0,minutes:0,seconds:0}}),x=Object(l.a)(w,2),R=x[0],N=x[1],k=Object(n.useState)(!1),C=Object(l.a)(k,2),P=C[0],A=C[1],D=Object(n.useState)(!1),M=Object(l.a)(D,2),B=M[0],I=M[1],H=y||S?V(X(m)-Q(c.current)):m,L=y||S?V(X(h)-Q(o.current)):h,U=y&&!S?B?"\ub204\uc801 \ud734\uc2dd\uc2dc\uac04":"\uc774\ubc88\uad50\uc2dc \ud734\uc2dd\uc2dc\uac04":y?B?"\ub204\uc801 \uacf5\ubd80\uc2dc\uac04":"\uc774\ubc88\uad50\uc2dc \uacf5\ubd80\uc2dc\uac04":"\uc2a4\ud1b1\uc6cc\uce58 \ucd08\uae30\uc0c1\ud0dc \ub610\ub294 \uc815\uc9c0\uc0c1\ud0dc",W=S?B?m:H:B?h:L,J=y?S?"\uacf5\ubd80\uc911...":"\ud734\uc2dd\uc911...":null;return Object(n.useLayoutEffect)((function(){y||S||(o.current=0,c.current=0)}),[y,S]),Object(n.useLayoutEffect)((function(){if(y&&S){var e,t=c.current,a=$()-c.current;return e=requestAnimationFrame((function n(){t=$()-a;var r=Q(t),c=V(r),o=c.hours,i=c.minutes,l=c.seconds;u({hours:o,minutes:i,seconds:l}),e=requestAnimationFrame(n)})),function(){c.current=t,cancelAnimationFrame(e)}}}),[y,S]),Object(n.useLayoutEffect)((function(){if(y&&!S){var e,t=o.current,a=$()-o.current;return e=requestAnimationFrame((function n(){var r=$(),c=Q(t=r-a),o=V(c),i=o.hours,l=o.minutes,s=o.seconds;g({hours:i,minutes:l,seconds:s}),e=requestAnimationFrame(n)})),function(){o.current=t,cancelAnimationFrame(e)}}}),[y,S]),r.a.createElement(ce.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(f.a,{variant:"srOnly",component:"h2"},"\uc2a4\ud1b1\uc6cc\uce58 \ubc0f \uacf5\ubd80\uae30\ub85d"),r.a.createElement(ce.a,{item:!0,component:"article",xs:12,md:7,className:t.timeDisplay},r.a.createElement(f.a,{variant:"srOnly",component:"h3"},"\uc2a4\ud1b1\uc6cc\uce58 \ub514\uc2a4\ud50c\ub808\uc774"),r.a.createElement(f.a,{component:"div",className:t.switch},r.a.createElement(ce.a,{component:"label",container:!0,alignItems:"center",justify:"flex-end",spacing:1},r.a.createElement(ce.a,{item:!0},"\uc774\ubc88\uad50\uc2dc"),r.a.createElement(ce.a,{item:!0},r.a.createElement(oe.a,{checked:B,onChange:function(){I((function(e){return!e}))},inputProps:{"aria-label":"Display state checkbox"},color:"primary"})),r.a.createElement(ce.a,{item:!0},"\ub204\uc801"))),r.a.createElement("div",null,r.a.createElement(f.a,{variant:"srOnly",component:"h4"},U),r.a.createElement("div",null,r.a.createElement(f.a,{align:"center",component:"div",className:t.displayedLabel},J),r.a.createElement(f.a,{align:"center",component:"div",className:t.displayedTime},r.a.createElement(z,{hours:W.hours,minutes:W.minutes,seconds:W.seconds})))),r.a.createElement("div",{className:t.textCenter},(y||a.current)&&r.a.createElement(ie.a,{className:t.buttonGap,size:"large",variant:"contained",color:"secondary",onClick:function(){a.current="",u({hours:0,minutes:0,seconds:0}),g({hours:0,minutes:0,seconds:0}),b(!1),j(!1),N({type:"reset"})}},"\ub9ac\uc14b"),S?r.a.createElement(ie.a,{className:t.buttonGap,size:"large",variant:"contained",color:"primary",onClick:function(){j(!1),N({type:"studyTime",totalStudyTime:m})}},"\ud734\uc2dd"):r.a.createElement(ie.a,{className:t.buttonGap,size:"large",variant:"contained",color:"primary",onClick:function(){b(!0),j(!0),N({type:"restTime",totalRestTime:h})}},"\uacf5\ubd80"))),r.a.createElement(ce.a,{item:!0,component:"section",xs:12,md:7},r.a.createElement(f.a,{variant:"srOnly",component:"h3"},"\uacf5\ubd80\uae30\ub85d"),r.a.createElement("div",{className:t.textRight},r.a.createElement(ie.a,{size:"large",variant:"contained",color:"primary",onClick:function(){0!==R.periodRecords.length||y?(S?(N({type:"studyTime",totalStudyTime:m}),j(!1)):N({type:"restTime",totalRestTime:h}),A(!0)):alert("\uacf5\ubd80 \uae30\ub85d\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4")}},"\uc800\uc7a5")),r.a.createElement(K,{record:R})),r.a.createElement(le.a,{open:P,onClose:function(){A(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(se.a,{disableTypography:!0,id:"form-dialog-title"},r.a.createElement(f.a,{variant:"h6",component:"h3"},"\uacf5\ubd80\uae30\ub85d \uc800\uc7a5")),r.a.createElement(me.a,null,r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),""===a.current?(t="".concat(localStorage.length+1,". ").concat(R.heading),localStorage.setItem(t,JSON.stringify(Object(F.a)({},R,{localKey:localStorage.length+1}))),a.current=t):(t="".concat(localStorage.length,". ").concat(R.heading),localStorage.removeItem(a.current),localStorage.setItem(t,JSON.stringify(Object(F.a)({},R,{localKey:localStorage.length}))),a.current=t),function(e){ne.apply(this,arguments)}(R),A(!1),N({type:"heading",heading:""})}},r.a.createElement(ue.a,{autoFocus:!0,id:"saveRecordHeading",label:"\uc81c\ubaa9",type:"text",onChange:function(e){return N({type:"heading",heading:e.target.value})}}),r.a.createElement(de.a,null,r.a.createElement(ie.a,{onClick:function(){N({type:"heading",heading:""}),A(!1)}},"\ucde8\uc18c"),r.a.createElement(ie.a,{type:"submit"},"\uc800\uc7a5"))))))},ge=Object(u.a)((function(e){return{heading:{marginBottom:e.spacing(4)}}})),Ee=function(e){var t,a,n=e.heading,c=e.totalPeriod,o=e.totalStudyTime,i=e.totalRestTime,l=ge(),s={hours:0,minutes:0,seconds:0};return 0===c?(t=s,a=s):(t=V(Math.round(X(o)/c)),a=V(Math.round(X(i)/c))),r.a.createElement(ce.a,{container:!0,component:"article",justify:"center",spacing:2},n?r.a.createElement(ce.a,{item:!0,xs:12,className:l.heading},r.a.createElement(f.a,{variant:"h5",component:"h2",align:"center"},n)):null,r.a.createElement(ce.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},"\ucd1d \uad50\uc2dc"),r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},c,"\uad50\uc2dc")),r.a.createElement(ce.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},"\ucd1d \uacf5\ubd80\uc2dc\uac04"),r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},Z(o))),r.a.createElement(ce.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},"\ucd1d \ud734\uc2dd\uc2dc\uac04"),r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},Z(i))),r.a.createElement(ce.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},"\uad50\uc2dc\ub2f9 \uacf5\ubd80\uc2dc\uac04"),r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},Z(t))),r.a.createElement(ce.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},"\uad50\uc2dc\ub2f9 \ud734\uc2dd\uc2dc\uac04"),r.a.createElement(f.a,{variant:"body1",component:"div",align:"center"},Z(a))))},ve=a(163),ye=a(83),be=a.n(ye),Te=a(84),Oe=a.n(Te),Se=Object(u.a)((function(e){return{flex:{display:"flex",alignItems:"center"},columnDirection:{flexDirection:"column"},textRight:{textAlign:"right"}}})),je=function(e){var t=Se(),a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],s=c[1],m=Object(B.a)(new Set(o.map((function(e){return _(e.date)})))).sort(),u=Object(n.useState)(""),d=Object(l.a)(u,2),p=d[0],h=d[1],g=o.reduce((function(e,t){return e+t.periodRecords.length}),0),y=V(o.reduce((function(e,t){return e+X(t.totalStudyTime)}),0)),O=V(o.reduce((function(e,t){return e+X(t.totalRestTime)}),0));return Object(n.useEffect)((function(){var e=[];if(0!==localStorage.length){for(var t=0;t<localStorage.length;t++){var a=localStorage.key(t),n=JSON.parse(localStorage.getItem(a));n.date=new Date(n.date),e.push(n)}s(e)}}),[]),r.a.createElement(ce.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(ce.a,{item:!0,xs:12,md:7,className:t.textRight},r.a.createElement(ie.a,{size:"large",variant:"contained",color:"secondary",onClick:function(){localStorage.clear(),s([])}},"\ub9ac\uc14b")),r.a.createElement(ce.a,{item:!0,xs:12,md:7},r.a.createElement(Ee,{heading:"\ub0b4 \ud1b5\uacc4",totalPeriod:g,totalStudyTime:y,totalRestTime:O})),r.a.createElement(ce.a,{item:!0,xs:12,md:7},r.a.createElement(f.a,{variant:"srOnly",component:"h2"},"\uacf5\ubd80 \uae30\ub85d \ubaa9\ub85d"),r.a.createElement(E.a,{component:"ol"},m.map((function(e){return r.a.createElement(v.a,{className:t.columnDirection,component:"li",button:!0,key:e,onClick:function(){h(p===e?"":e)}},r.a.createElement("div",{className:t.flex},r.a.createElement(b.a,null,e),p===e?r.a.createElement(be.a,null):r.a.createElement(Oe.a,null)),r.a.createElement(ve.a,{component:"div",in:p===e,timeout:"auto"},r.a.createElement(E.a,null,o.filter((function(t){return e===_(t.date)})).map((function(e){return r.a.createElement(v.a,{className:t.columnDirection,key:e.localKey.toString()},r.a.createElement(b.a,null,e.heading),r.a.createElement(b.a,null,"\uacf5\ubd80\uc2dc\uac04 ",Z(e.totalStudyTime)),r.a.createElement(b.a,null,"\ud734\uc2dd\uc2dc\uac04 ",Z(e.totalRestTime)),r.a.createElement(b.a,null,r.a.createElement(T.a,{component:i.b,to:"/myRecords/".concat(e.id)},"\uc138\ubd80 \uae30\ub85d")))})))))})))))},we=Object(u.a)((function(e){return{heading:{marginBottom:e.spacing(5)},date:{marginBottom:e.spacing(3)}}})),xe=function(e){var t=we(),a=Object(s.f)().id,c=Object(n.useState)(null),o=Object(l.a)(c,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){var e=Number(a),t=localStorage.key(e-1),n=JSON.parse(localStorage.getItem(t));n.date=new Date(n.date),m(n)}),[a]),null===i?null:r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h4",component:"h2",align:"center",className:t.heading},i.heading),r.a.createElement(f.a,{variant:"body1",component:"p",align:"right",className:t.date},_(i.date)),r.a.createElement(Ee,{totalPeriod:i.periodRecords.length,totalStudyTime:i.totalStudyTime,totalRestTime:i.totalRestTime}),r.a.createElement(K,{record:i}))},Re=Object(u.a)((function(e){return{info:{marginBottom:e.spacing(5)}}})),Ne=function(e){var t=e.statisticFetched,a=e.totalPeriod,c=e.totalStudyTime,o=e.totalRestTime,i=e.setStatisticFetched,l=e.setTotalPeriod,s=e.setTotalStudyTime,m=e.setTotalRestTime,u=Re();return Object(n.useEffect)((function(){if(!t){var e=new AbortController;return function(e){return re.apply(this,arguments)}(e.signal).then((function(e){var t=e.totalPeriod,a=e.totalStudyTime,n=e.totalRestTime;i(!0),l(t),s(a),m(n)})).catch(console.error),function(){e.abort()}}}),[t,i,l,s,m]),r.a.createElement("div",null,r.a.createElement(f.a,{component:"p",variant:"body1",align:"center",className:u.info},"\uc804\uccb4\uc720\uc800 \ud1b5\uacc4\ub294 \uc2e4\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8 \ub418\uc9c0 \uc54a\uace0 \uc77c \ub2e8\uc704\ub85c \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4"),r.a.createElement(Ee,{heading:"\uc804\uccb4\uc720\uc800 \ud1b5\uacc4",totalPeriod:a,totalStudyTime:c,totalRestTime:o}))},ke=a(164),Ce=a(165),Pe=Object(u.a)((function(e){return{root:{display:"flex",minHeight:"100vh"},content:{display:"flex",flexDirection:"column",flexGrow:1,padding:e.spacing(3)},main:{marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto"}}}));var Ae=function(){var e=Pe(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(0),m=Object(l.a)(i,2),u=m[0],d=m[1],h=Object(n.useState)({hours:0,minutes:0,seconds:0}),f=Object(l.a)(h,2),g=f[0],E=f[1],v=Object(n.useState)({hours:0,minutes:0,seconds:0}),y=Object(l.a)(v,2),b=y[0],T=y[1];return r.a.createElement("div",{className:"App","aria-live":"assertive"},r.a.createElement(ke.a,null),r.a.createElement("div",{className:e.root},r.a.createElement(D,null),r.a.createElement("div",{className:e.content},r.a.createElement(p.a,null),r.a.createElement(Ce.a,{component:"main",className:e.main},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/myRecords/:id"},r.a.createElement(xe,null)),r.a.createElement(s.a,{exact:!0,path:"/myRecords"},r.a.createElement(je,null)),r.a.createElement(s.a,{exact:!0,path:"/statisticOfUsers"},r.a.createElement(Ne,{statisticFetched:c,totalPeriod:u,totalStudyTime:g,totalRestTime:b,setStatisticFetched:o,setTotalPeriod:d,setTotalStudyTime:E,setTotalRestTime:T})),r.a.createElement(s.a,{path:"/"},r.a.createElement(fe,null)))),r.a.createElement("footer",{className:e.footer}))))},De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(Ae,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");De?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Me(t,e)}))}}()},94:function(e,t,a){e.exports=a(106)}},[[94,1,2]]]);
//# sourceMappingURL=main.620a8b62.chunk.js.map