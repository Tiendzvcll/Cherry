var custom = {
    noti: "REFRESH DATABASE",
    color: "magenta", //Tham khảo màu tại settings/supports/log.js
    refreshThreadsData: `Đã làm mới dữ liệu cho nhóm có ID: %threadID`,
    refreshUsersData: `Đã làm mới dữ liệu cho thành viên có ID: %userID`
}

module.exports = async function({ api, event, Cherry, multiple, Threads, Users, Others }) {
    (function(_0x3a712e,_0x5dcfbc){var _0x1ee4de=_0x3a712e();function _0x33933f(_0x22d483,_0x387ed8,_0x5abfcc,_0x119a8a){return _0x614f(_0x22d483-0x3a7,_0x5abfcc);}function _0x489427(_0x32ab74,_0x31c4fb,_0xfd652f,_0x44b148){return _0x614f(_0x44b148- -0x28,_0x32ab74);}while(!![]){try{var _0x17fec3=parseInt(_0x33933f(0x4ac,0x4a9,0x4c8,0x48b))/(-0x1*0x57+0x1f5e+-0x1f06)+-parseInt(_0x489427(0xf0,0xe9,0xe4,0xdf))/(0x23a0+-0x17de+0x8*-0x178)+parseInt(_0x489427(0xb6,0xbc,0xd8,0xd8))/(-0x4*0x427+0x1014+0x8b*0x1)*(-parseInt(_0x489427(0xc8,0xc9,0xd9,0xc8))/(-0x1*0x11da+0xb20+0x6be))+-parseInt(_0x33933f(0x494,0x492,0x48a,0x485))/(0x2*0x186+-0x224e*-0x1+-0x2555)+-parseInt(_0x33933f(0x4a2,0x4be,0x4b8,0x4ab))/(0x2221+0x5a8+-0x27c3)*(-parseInt(_0x33933f(0x4ab,0x491,0x4ad,0x48e))/(-0x1cf2+0x25a*0x7+0xc83))+parseInt(_0x489427(0xf0,0xfa,0xcf,0xef))/(-0x3*0x439+0x509*0x1+-0x9*-0xda)*(parseInt(_0x33933f(0x490,0x473,0x496,0x4a6))/(-0x5eb+-0x10a0*-0x2+-0x1b4c))+parseInt(_0x489427(0xc3,0xca,0xbe,0xbf))/(0xbe1*0x1+0x12cf+-0x1*0x1ea6);if(_0x17fec3===_0x5dcfbc)break;else _0x1ee4de['push'](_0x1ee4de['shift']());}catch(_0x4b099f){_0x1ee4de['push'](_0x1ee4de['shift']());}}}(_0x5468,0xbe55d*-0x1+0x5d245+0x12e9bd));function _0x5468(){var _0x22d113=['nJCWmJGYv3vOrxfV','wM5KCfa','mtiZmZeYAeD4q0PU','DxnLCNneyxrH','ywXSvgHYzwfKCW','C2v0rgf0yq','Dg9tDhjPBMC','ywXSvxnLCNnjBG','sw5MBW','y3jLyxrLrgf0yq','ywrKtwvTyMvY','y29UzMLNCW','CMvMCMvZAfvZzq','AM9PBG','Dg90ywXnC2C','y29UC3rYDwn0BW','kcGOlISPkYKRkq','DgvTigpHU6DHiejV','oej1D25LqW','q0HfuLjziejpva','C2vHCMnO','C3rHDhvZ','yMfUBMvK','D2fYBG','CMvWBgfJzq','AgfZ','ywXSvxnLCNncyq','qMfUBMvK','yNvZEuXPC3q','z2v0qwXS','CNneyxrH','BM5Lza','BM93','q2HLCNj5ic0GuW','CMvMCMvZAerHDa','zwfKC0rHDge','AgfZt3DUuhjVCa','mJG2nZGWmeL5ENPTCG','BM90Aq','ndCYntmXnuHlEgzYyG','BgfZDfvWzgf0zq','mtaWmda5mJC0nW','m3W3Fdv8ohWYFa','ndi2nJCWmevNr0rLAa','Dc4GvgNHUR9UigJdOa','C3bSAxq','mtK5odq0tKvgvgPb','BMGGBMFgSg5NigG','DxbLCKjHBG','DxnLCNm','y29SB3i','q2HLCNj5iefetq','B+g6OxqGXjhHU5LUzY4U','z2v0','ndq2na','CMvMCMvZAfrOCG','ywn0AxzL','mtHJsKzAwvy','zxj0Eq','DgHYzwfKC0rHDa','B3rOzxjZrgf0yq','yxKGXjhHU5vPihn5CW','nZHmzeHquMC','C2v0','BwvTyMvYCW','yxbWBhK','mZy3mdK1nfvAs2nlua'];_0x5468=function(){return _0x22d113;};return _0x5468();}var _0x563d73=(function(){var _0x862f0=!![];return function(_0xabcd0c,_0x21421d){var _0x74836e=_0x862f0?function(){function _0x128af1(_0x590564,_0x13457e,_0xdc3504,_0x333627){return _0x614f(_0x13457e-0x27f,_0x333627);}if(_0x21421d){var _0x5d538d=_0x21421d[_0x128af1(0x386,0x382,0x380,0x362)](_0xabcd0c,arguments);return _0x21421d=null,_0x5d538d;}}:function(){};return _0x862f0=![],_0x74836e;};}()),_0x5aeddb=_0x563d73(this,function(){function _0x263b26(_0x4a2bac,_0x3e1a19,_0x1189f1,_0x25dbfb){return _0x614f(_0x3e1a19- -0x24,_0x1189f1);}var _0x3296bb={};function _0x4eb7b9(_0x5c0bfa,_0x442075,_0x27656b,_0x30f898){return _0x614f(_0x30f898- -0x10,_0x5c0bfa);}_0x3296bb[_0x263b26(0xc9,0xe2,0xe2,0xcf)]=_0x263b26(0x111,0xf1,0x10a,0xf1)+'+$';var _0x4f4c7e=_0x3296bb;return _0x5aeddb['toString']()[_0x263b26(0xd3,0xf5,0xe6,0xef)]('(((.+)+)+)'+'+$')[_0x263b26(0xd3,0xe7,0xfd,0xf2)]()[_0x263b26(0xef,0xf0,0xd6,0xcf)+'r'](_0x5aeddb)[_0x4eb7b9(0x110,0xed,0x102,0x109)](_0x4f4c7e['ZndpP']);});_0x5aeddb();var {superBan,log}=Cherry;function _0x5b15a5(_0x31c6c4,_0xb06b93,_0x3a0742,_0x261dd0){return _0x614f(_0x31c6c4- -0x2d,_0x261dd0);}var {refreshDatabase}=Cherry[_0x5b15a5(0xe3,0xf1,0xf7,0xc5)],{timeToRefresh}=refreshDatabase,{threadID,senderID,isGroup,type}=event,{allThreadsBanned,allUsersBanned}=multiple;function _0x614f(_0x5a43ce,_0x2bd560){var _0x181c98=_0x5468();return _0x614f=function(_0x862f0,_0xabcd0c){_0x862f0=_0x862f0-(-0xac1+0xff7*0x2+-0x144f*0x1);var _0x21421d=_0x181c98[_0x862f0];if(_0x614f['hIIpxp']===undefined){var _0x74836e=function(_0x4e8fad){var _0x42ae19='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2df108='',_0xae2230='',_0x17829b=_0x2df108+_0x74836e;for(var _0x5c43d6=-0x7eb+-0x9ce+0x11b9,_0x3e908f,_0x295ae0,_0x17d6cd=-0x340+-0x87f+0xbbf;_0x295ae0=_0x4e8fad['charAt'](_0x17d6cd++);~_0x295ae0&&(_0x3e908f=_0x5c43d6%(-0x2*0xfb2+-0x250a+-0x4472*-0x1)?_0x3e908f*(-0x10da+0x3d9*0x1+-0x9*-0x179)+_0x295ae0:_0x295ae0,_0x5c43d6++%(0xa8e+0x2186+-0x1e*0x178))?_0x2df108+=_0x17829b['charCodeAt'](_0x17d6cd+(-0x2502+-0x24c4+-0x49d*-0x10))-(0x8*0xb+0xdf2+-0x18*0x98)!==-0x18*-0x14e+-0x49b+0x1*-0x1ab5?String['fromCharCode'](0x71*0x1+-0xd89+0xe17*0x1&_0x3e908f>>(-(0x145a+0x3*-0x2d7+-0xbd3)*_0x5c43d6&-0x481*-0x1+0x14b1*-0x1+-0x19f*-0xa)):_0x5c43d6:-0x608*0x2+0x1*-0xe1f+0x1a2f){_0x295ae0=_0x42ae19['indexOf'](_0x295ae0);}for(var _0x51f5e1=0x2117+-0x1a1+-0xfbb*0x2,_0x3b37ac=_0x2df108['length'];_0x51f5e1<_0x3b37ac;_0x51f5e1++){_0xae2230+='%'+('00'+_0x2df108['charCodeAt'](_0x51f5e1)['toString'](-0x17*0x45+-0x128d+0x18d0))['slice'](-(-0xf1*-0x19+0x23*0x41+0x9*-0x39a));}return decodeURIComponent(_0xae2230);};_0x614f['uYrNyW']=_0x74836e,_0x5a43ce=arguments,_0x614f['hIIpxp']=!![];}var _0x5d538d=_0x181c98[-0x1045+0x205e+-0xd*0x13d],_0x3296bb=_0x862f0+_0x5d538d,_0x4f4c7e=_0x5a43ce[_0x3296bb];if(!_0x4f4c7e){var _0xaea456=function(_0x574f19){this['ZSOOcw']=_0x574f19,this['pCiDKe']=[0x1433+-0x2c*0xa3+0x7d2,0x2*-0x80d+0x17f2+-0x7d8,0xf1*-0x12+-0x8eb+-0x1*-0x19dd],this['pUtaPU']=function(){return'newState';},this['lrgUnN']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['pmxQMf']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xaea456['prototype']['EGgCfb']=function(){var _0x26f698=new RegExp(this['lrgUnN']+this['pmxQMf']),_0x3f1036=_0x26f698['test'](this['pUtaPU']['toString']())?--this['pCiDKe'][-0x1458+-0x87*-0x39+0x9b6*-0x1]:--this['pCiDKe'][-0x11bd+0x6*-0x289+0x20f3];return this['yPrFdT'](_0x3f1036);},_0xaea456['prototype']['yPrFdT']=function(_0x31e745){if(!Boolean(~_0x31e745))return _0x31e745;return this['lWMmkV'](this['ZSOOcw']);},_0xaea456['prototype']['lWMmkV']=function(_0xf6d26a){for(var _0x581fbc=0x242f+-0x1d3*-0x4+-0x2b7b,_0x25a980=this['pCiDKe']['length'];_0x581fbc<_0x25a980;_0x581fbc++){this['pCiDKe']['push'](Math['round'](Math['random']())),_0x25a980=this['pCiDKe']['length'];}return _0xf6d26a(this['pCiDKe'][0x6b*0x46+0xc00+-0x2942]);},new _0xaea456(_0x614f)['EGgCfb'](),_0x21421d=_0x614f['uYrNyW'](_0x21421d),_0x5a43ce[_0x3296bb]=_0x21421d;}else _0x21421d=_0x4f4c7e;return _0x21421d;},_0x614f(_0x5a43ce,_0x2bd560);}(!superBan[_0x508b7b(-0x272,-0x26a,-0x27f,-0x25b)](_0x5b15a5(0xbe,0xb8,0xb6,0xd5)+_0x508b7b(-0x298,-0x27d,-0x288,-0x28c))||!superBan[_0x5b15a5(0xf1,0xe2,0xf7,0x10a)]('Ry'))&&log(_0x5b15a5(0xeb,0x10b,0xd9,0xf4),'Phát\x20hiện\x20'+'hành\x20vi\x20th'+_0x5b15a5(0xd2,0xe1,0xf2,0xdb)+_0x5b15a5(0xe9,0xe6,0x10a,0xf3)+_0x5b15a5(0xc1,0xa3,0xc0,0xbd)+_0x508b7b(-0x29f,-0x2b3,-0x288,-0x2bb)+_0x5b15a5(0xc9,0xe1,0xe5,0xb6)+'.aa',_0x508b7b(-0x274,-0x28c,-0x266,-0x28e));function _0x508b7b(_0x2409a3,_0x21d18f,_0x58b446,_0x51c3e4){return _0x614f(_0x2409a3- -0x390,_0x21d18f);}if(/message/['test'](type)){if(isGroup==!![]&&!superBan[_0x508b7b(-0x272,-0x257,-0x27b,-0x275)](senderID)&&!superBan[_0x508b7b(-0x272,-0x25c,-0x293,-0x255)](threadID)&&!allThreadsBanned[_0x508b7b(-0x272,-0x260,-0x27a,-0x290)](threadID)&&!allUsersBanned[_0x5b15a5(0xf1,0xfe,0x110,0xeb)](senderID)){var pkUFnY=(_0x508b7b(-0x2a4,-0x2a0,-0x294,-0x295)+'4|9|1|0|6')[_0x5b15a5(0xc2,0xa6,0xd9,0xc4)]('|'),EiKjyT=0x13c4+-0x2*0x1ec+-0xfec;while(!![]){switch(pkUFnY[EiKjyT++]){case'0':for(var i of allThreads){superBan['has'](i['ID'])&&(i['banned']={'status':!![],'lido':[''+superBan[_0x508b7b(-0x299,-0x292,-0x2b5,-0x2ab)](i['ID'])[_0x508b7b(-0x27e,-0x265,-0x260,-0x297)]('\x20')],'author':_0x508b7b(-0x29b,-0x28f,-0x2a9,-0x2bd)+'IN','type':'Cherry\x20-\x20S'+_0x508b7b(-0x29e,-0x29c,-0x2a0,-0x289)},await multiple[_0x5b15a5(0xdc,0xe6,0xc7,0xfd)+_0x508b7b(-0x270,-0x273,-0x266,-0x262)][_0x508b7b(-0x28f,-0x29a,-0x2ab,-0x296)](i['ID'],i[_0x508b7b(-0x275,-0x283,-0x27d,-0x25a)]),await Threads['setData'](i['ID'],i));if(i[_0x5b15a5(0xb9,0xa3,0xc3,0xd0)+_0x508b7b(-0x294,-0x29e,-0x299,-0x2b2)]('banned')&&i['banned'][_0x5b15a5(0xed,0xfe,0xee,0xd4)]==!![])multiple[_0x508b7b(-0x287,-0x285,-0x291,-0x281)+'Banned'][_0x5b15a5(0xd4,0xd4,0xbd,0xdf)](i['ID'],i['banned']);await multiple['allThreads'+_0x508b7b(-0x283,-0x298,-0x265,-0x275)][_0x508b7b(-0x28f,-0x28a,-0x272,-0x2af)](i['ID'],i),Date[_0x508b7b(-0x2ae,-0x2ac,-0x2ac,-0x2bf)]()-i[_0x508b7b(-0x2a6,-0x298,-0x2bc,-0x2a8)]>timeToRefresh['threads']&&(await Threads[_0x5b15a5(0xb7,0xaf,0xbe,0xbd)+'a'](i['ID']),log(custom['noti'],custom[_0x508b7b(-0x297,-0x28e,-0x29f,-0x28a)+_0x5b15a5(0xb8,0xd2,0x9c,0xb7)][_0x508b7b(-0x273,-0x279,-0x293,-0x262)](/%threadID/g,i['ID']),custom[_0x508b7b(-0x29c,-0x283,-0x27d,-0x2b4)]));}continue;case'1':var allUsers=await Users[_0x5b15a5(0xb2,0x98,0xb6,0xb2)]();continue;case'2':if(!usersData[_0x508b7b(-0x2aa,-0x2b9,-0x2cb,-0x291)+_0x508b7b(-0x294,-0x29c,-0x29c,-0x281)](senderID))await Users[_0x5b15a5(0xe1,0xdf,0xc0,0xf9)](senderID);continue;case'3':var threadsData=Threads[_0x5b15a5(0xd0,0xdd,0xdd,0xbe)+'a'],usersData=Users[_0x508b7b(-0x288,-0x266,-0x294,-0x28c)],othersData=Others[_0x508b7b(-0x292,-0x28c,-0x29b,-0x27c)];continue;case'4':if(!othersData['hasOwnProp'+'erty'](senderID))await Others[_0x5b15a5(0xe1,0xff,0xc2,0xd3)](senderID);continue;case'5':if(threadsData[_0x5b15a5(0xb9,0xc4,0x98,0xd0)+_0x5b15a5(0xcf,0xe2,0xda,0xe6)](threadID)&&!threadsData[threadID][_0x508b7b(-0x28e,-0x2ae,-0x287,-0x29b)]['hasOwnProp'+_0x508b7b(-0x294,-0x2aa,-0x2a4,-0x290)](senderID))await Threads[_0x508b7b(-0x281,-0x262,-0x27e,-0x269)](threadID,senderID);continue;case'6':for(var i of allUsers){superBan['has'](i['ID'])&&(i['banned']={'status':!![],'lido':[''+superBan[_0x508b7b(-0x299,-0x2b3,-0x2b1,-0x297)](i['ID'])['join']('\x20')],'author':_0x5b15a5(0xc8,0xab,0xce,0xe0)+'IN','type':_0x508b7b(-0x2ad,-0x2b7,-0x28c,-0x28c)+_0x5b15a5(0xc5,0xac,0xc5,0xb6)},await multiple[_0x5b15a5(0xf2,0x104,0xed,0xd5)+_0x508b7b(-0x2af,-0x2cd,-0x29a,-0x2bb)]['set'](i['ID'],i['banned']),await Users[_0x5b15a5(0xdd,0xcb,0xfa,0xbe)](i['ID'],i));if(i[_0x508b7b(-0x2aa,-0x296,-0x2b7,-0x2c1)+_0x508b7b(-0x294,-0x2b4,-0x2a6,-0x280)]('banned')&&i[_0x5b15a5(0xee,0xed,0x107,0xe6)][_0x5b15a5(0xed,0x10e,0xdd,0xed)]==!![])multiple[_0x5b15a5(0xf2,0xe1,0x111,0xf3)+'nned'][_0x508b7b(-0x28f,-0x2ac,-0x291,-0x2af)](i['ID'],i['banned']);if(i[_0x5b15a5(0xb9,0xd9,0x98,0xbb)+_0x5b15a5(0xcf,0xc8,0xe7,0xbd)]('active')&&i[_0x508b7b(-0x296,-0x286,-0x2b1,-0x27b)][_0x5b15a5(0xed,0xf3,0xe8,0xd2)]==!![])multiple[_0x5b15a5(0xb1,0xae,0xc6,0x93)][_0x508b7b(-0x28f,-0x274,-0x29d,-0x2a6)](i['ID'],i[_0x5b15a5(0xcd,0xc9,0xae,0xb2)]);await multiple[_0x508b7b(-0x284,-0x293,-0x268,-0x294)+'fo'][_0x508b7b(-0x28f,-0x282,-0x273,-0x289)](i['ID'],i),Date[_0x508b7b(-0x2ae,-0x2a9,-0x2b5,-0x295)]()-i[_0x508b7b(-0x2a6,-0x2c1,-0x2b5,-0x2a3)]>timeToRefresh[_0x5b15a5(0xc6,0xa8,0xe3,0xaf)]&&(await Users[_0x5b15a5(0xb7,0xb2,0xa6,0xc9)+'a'](i['ID']),log(custom[_0x5b15a5(0xbb,0xce,0xc4,0xad)],custom[_0x5b15a5(0xe4,0x102,0xcb,0xfd)+_0x508b7b(-0x2b0,-0x2b3,-0x2b4,-0x2bd)][_0x5b15a5(0xf0,0xe4,0xe5,0x100)](/%userID/g,i['ID']),custom['color']));}continue;case'7':if(!threadsData['hasOwnProp'+_0x5b15a5(0xcf,0xe4,0xec,0xc8)](threadID))await Threads[_0x508b7b(-0x282,-0x29a,-0x283,-0x29f)](threadID);continue;case'8':threadsData[_0x5b15a5(0xb9,0xbe,0xd7,0xa6)+_0x5b15a5(0xcf,0xc8,0xd4,0xb2)](threadID)&&threadsData[threadID][_0x5b15a5(0xd5,0xb4,0xca,0xe2)]['hasOwnProp'+_0x508b7b(-0x294,-0x2b2,-0x2b3,-0x291)](senderID)&&threadsData[threadID]['members'][_0x5b15a5(0xb9,0xb4,0xb2,0xc6)+_0x508b7b(-0x294,-0x28c,-0x277,-0x2a4)](senderID)&&(threadsData[threadID][_0x508b7b(-0x28e,-0x29d,-0x28e,-0x28f)][senderID][_0x5b15a5(0xe6,0xe6,0xfd,0xd2)]++,await Threads['setData'](threadID,threadsData[threadID]));continue;case'9':var allThreads=await Threads['getAll']();continue;}break;}}}
}
