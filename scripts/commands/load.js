module.exports.info = {
	name: "load",
    version: "1.0.3",
    permissions: 2,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Load lại lệnh, event...",
        short: "Load lệnh, event"
    },
	group: "Khác",
	guide: [
		'[cmd/event/configs] [all/tên lệnh]',
	],
	countdown: 5,
    require: {
        "fs-extra": "",
        "path": "",
        "child_process": ""
    }
};

function loadConfigs({ api, threadID, messageID, Cherry, multiple }) {
    function _0x2c84(){var _0x8ac336=['5roghbI','glJFX','64tSRepe','275322rNeOwn','search','oQVlE','442252NmdPWW','McMwQ','lỗi\x20khi\x20lo','configs','cache','onfigs.jso','4545090byjHDO','3498075rwOsLV','/settings/','apply','207683hnirPd','86024xlygbL','workPlace','Đã\x20xảy\x20ra\x20','610304kfPhFO','toString','constructo','sendMessag','6UuZWUU','aAvLL','(((.+)+)+)','supports/c'];_0x2c84=function(){return _0x8ac336;};return _0x2c84();}(function(_0x51f0fe,_0x4385ca){function _0x20631d(_0x4d642f,_0x224abd,_0x557d48,_0x16a977){return _0x4505(_0x4d642f- -0x1a1,_0x16a977);}function _0x543e59(_0x448124,_0x4b50e1,_0x534e9d,_0x12fdca){return _0x4505(_0x534e9d-0x37c,_0x12fdca);}var _0x1e2677=_0x51f0fe();while(!![]){try{var _0x450c6e=parseInt(_0x543e59(0x42c,0x418,0x421,0x429))/(-0x11ab+-0x8ae+-0xd2d*-0x2)+parseInt(_0x543e59(0x41f,0x40d,0x413,0x40b))/(-0x1a4b+-0x18ab+-0x32f8*-0x1)+-parseInt(_0x543e59(0x409,0x40f,0x417,0x40b))/(0x164d+0x1c21+0x1*-0x326b)*(-parseInt(_0x543e59(0x41c,0x415,0x410,0x41c))/(0x1*-0x4ea+0xa92*0x1+-0x5a4))+-parseInt(_0x543e59(0x40d,0x420,0x41b,0x411))/(0x1*0x1a41+0x6aa+-0x20e6)*(-parseInt(_0x20631d(-0xff,-0x10b,-0xf6,-0x102))/(-0x1e66+0x2b3*0x3+0x1653))+parseInt(_0x20631d(-0x10e,-0x108,-0x10a,-0x101))/(-0xafe+0xc3d+-0x138)*(parseInt(_0x543e59(0x41a,0x413,0x41d,0x419))/(0x11d*-0x1c+-0xcce+0x2c02))+-parseInt(_0x543e59(0x402,0x41a,0x40c,0x3ff))/(0x950+-0x5c2+-0x385)+-parseInt(_0x543e59(0x409,0x416,0x40b,0x411))/(0xedb*-0x1+-0x118d*0x1+0x1*0x2072);if(_0x450c6e===_0x4385ca)break;else _0x1e2677['push'](_0x1e2677['shift']());}catch(_0xd4f048){_0x1e2677['push'](_0x1e2677['shift']());}}}(_0x2c84,0x675ef+-0x7b11*0x5+0x8a53*-0x1));var _0x5ee806=(function(){function _0x219077(_0x500884,_0x5cfb65,_0x33dd89,_0x2107d6){return _0x4505(_0x33dd89- -0x267,_0x500884);}var _0x137a01={};function _0x196423(_0x3d6484,_0x43fb66,_0x83ab87,_0x564bbd){return _0x4505(_0x83ab87-0x1ef,_0x3d6484);}_0x137a01[_0x219077(-0x1d5,-0x1d1,-0x1cb,-0x1c5)]=function(_0x504670,_0x30cd78){return _0x504670!==_0x30cd78;},_0x137a01['oQVlE']=_0x219077(-0x1ce,-0x1b9,-0x1c1,-0x1c9);var _0xc0fad4=_0x137a01,_0x58f3eb=!![];return function(_0x2e57bf,_0x22a666){function _0x2cd027(_0x4f5594,_0x150b96,_0x37e182,_0x584952){return _0x196423(_0x584952,_0x150b96-0x1,_0x37e182- -0x469,_0x584952-0x16e);}function _0x27e301(_0x393b53,_0x2e8c8b,_0x55f398,_0x3e6c9f){return _0x219077(_0x2e8c8b,_0x2e8c8b-0x1af,_0x393b53-0x325,_0x3e6c9f-0x3a);}if(_0xc0fad4[_0x27e301(0x15a,0x155,0x165,0x159)](_0x27e301(0x164,0x163,0x16b,0x165),_0xc0fad4[_0x2cd027(-0x1c8,-0x1ce,-0x1d6,-0x1e4)])){if(_0x522d8b){var _0x3fc86a=_0x325bc2[_0x2cd027(-0x1e6,-0x1db,-0x1e8,-0x1f0)](_0xad3c71,arguments);return _0x509f12=null,_0x3fc86a;}}else{var _0x150ff8=_0x58f3eb?function(){function _0x9e7523(_0x57973e,_0x71adbc,_0x5d785f,_0x1deacb){return _0x2cd027(_0x57973e-0x8c,_0x71adbc-0xce,_0x1deacb-0x41b,_0x71adbc);}if(_0x22a666){var _0x3e7ba7=_0x22a666[_0x9e7523(0x23b,0x235,0x23a,0x233)](_0x2e57bf,arguments);return _0x22a666=null,_0x3e7ba7;}}:function(){};return _0x58f3eb=![],_0x150ff8;}};}());function _0x1b6a15(_0x19820c,_0x2c919b,_0x193481,_0x5ddee9){return _0x4505(_0x2c919b-0x26,_0x193481);}function _0x5d15a7(_0x552b62,_0x10c125,_0x302752,_0x1c72d4){return _0x4505(_0x1c72d4- -0x213,_0x552b62);}var _0x367ad0=_0x5ee806(this,function(){var _0x422259={};_0x422259['glJFX']=_0x56c490(0x104,0xfc,0x108,0xfa)+'+$';var _0x648111=_0x422259;function _0x5a3d02(_0x2678a5,_0x54d3c5,_0xff7088,_0x5380e7){return _0x4505(_0x2678a5-0x1f0,_0xff7088);}function _0x56c490(_0x2689b0,_0xc94ae0,_0x4e1844,_0x19428f){return _0x4505(_0x19428f-0x5d,_0xc94ae0);}return _0x367ad0[_0x56c490(0xf1,0xeb,0xec,0xf5)]()[_0x5a3d02(0x293,0x295,0x287,0x29e)](_0x648111[_0x56c490(0x106,0xfe,0x105,0xfd)])['toString']()[_0x5a3d02(0x289,0x284,0x27f,0x28d)+'r'](_0x367ad0)[_0x56c490(0x10b,0x107,0x107,0x100)](_0x56c490(0x101,0x103,0xed,0xfa)+'+$');});_0x367ad0();function _0x4505(_0x450529,_0x305526){var _0x15fef8=_0x2c84();return _0x4505=function(_0x2c72cf,_0x4b0c63){_0x2c72cf=_0x2c72cf-(0x2*-0x19b+-0x2075+0x2436);var _0x52c0bc=_0x15fef8[_0x2c72cf];return _0x52c0bc;},_0x4505(_0x450529,_0x305526);}var main=multiple[_0x1b6a15(0xbd,0xbb,0xb5,0xad)];try{delete require[_0x1b6a15(0xa9,0xb3,0xa7,0xbb)][require['resolve'](main+(_0x1b6a15(0xc3,0xb7,0xad,0xbc)+_0x5d15a7(-0x178,-0x180,-0x16e,-0x175)+_0x5d15a7(-0x17c,-0x17a,-0x18d,-0x185)+'n'))];var configs=require(main+(_0x5d15a7(-0x182,-0x185,-0x18a,-0x182)+_0x5d15a7(-0x17a,-0x170,-0x175,-0x175)+_0x1b6a15(0xad,0xb4,0xbc,0xbb)+'n'));Cherry[_0x5d15a7(-0x18d,-0x193,-0x18b,-0x187)]=configs;}catch(_0x399946){return api[_0x5d15a7(-0x177,-0x177,-0x181,-0x179)+'e'](_0x1b6a15(0xbc,0xbc,0xc3,0xb5)+_0x1b6a15(0xbf,0xb1,0xa3,0xb9)+'ad\x20lại\x20fil'+'e\x20config:\x20'+_0x399946,threadID,messageID);}
}

function loadEvents({ api, threadID, Cherry, multiple, listEvents }) {
    (function(_0x3015b9,_0x145572){function _0x318030(_0x4155e8,_0x50242b,_0x4700e5,_0x1fb0f5){return _0x3b56(_0x4155e8- -0x301,_0x1fb0f5);}function _0x466f57(_0x42978f,_0x5d5506,_0x2d1e77,_0x5596ca){return _0x3b56(_0x42978f- -0x284,_0x5d5506);}var _0x428772=_0x3015b9();while(!![]){try{var _0x45282f=parseInt(_0x466f57(-0x1f6,-0x200,-0x1de,-0x1ff))/(-0x140d+-0x245b+0x3869)*(parseInt(_0x466f57(-0x1dc,-0x1e9,-0x1c3,-0x1df))/(-0x2ab*0xb+-0x1527+-0xa*-0x50d))+-parseInt(_0x318030(-0x293,-0x28b,-0x28b,-0x27e))/(0x1*0xdf0+-0x5*0xf2+-0x933)+parseInt(_0x466f57(-0x20c,-0x1fc,-0x1ec,-0x216))/(0x26b1*-0x1+0x469+-0x2*-0x1126)+-parseInt(_0x318030(-0x25f,-0x275,-0x241,-0x251))/(0x9ea+-0x143+-0x8a2)*(parseInt(_0x466f57(-0x1e7,-0x201,-0x1f8,-0x1d9))/(-0x36f*-0x5+0x25bf+-0xdb9*0x4))+parseInt(_0x318030(-0x256,-0x259,-0x24a,-0x233))/(-0x5fc+0x1*0x1ee7+0x12*-0x162)*(-parseInt(_0x318030(-0x28a,-0x280,-0x279,-0x293))/(0xf94+0x1bb0+0x2*-0x159e))+-parseInt(_0x318030(-0x28f,-0x27d,-0x282,-0x2af))/(0x2f*-0xbb+0x88*0x13+0x1846)*(parseInt(_0x318030(-0x25e,-0x251,-0x24b,-0x265))/(0x1*0x8e2+0xd2*0x1b+-0x1efe))+-parseInt(_0x466f57(-0x1d1,-0x1f2,-0x1b5,-0x1dc))/(-0x71*-0xf+-0x1f53+0x7*0x389)*(-parseInt(_0x466f57(-0x200,-0x1ff,-0x208,-0x1eb))/(-0x19d3*0x1+-0x895+0x24*0xf5));if(_0x45282f===_0x145572)break;else _0x428772['push'](_0x428772['shift']());}catch(_0x46cec7){_0x428772['push'](_0x428772['shift']());}}}(_0x5b19,-0xa3d2c+0x88f57+0x8e9cc));var _0x22bb23=(function(){var _0x1ef305={'mjUtM':function(_0x5950b5,_0x2979f3){return _0x5950b5(_0x2979f3);},'LKSSE':function(_0x5df37d,_0x458580){return _0x5df37d+_0x458580;}},_0xba79f=!![];return function(_0x24eb36,_0xde54d5){var _0x1f853a={'UkQzw':function(_0xc25acf,_0x97e265){function _0x77c1db(_0x469e97,_0x30f416,_0x1f13c0,_0x28822e){return _0x3b56(_0x1f13c0- -0x1cf,_0x30f416);}return _0x1ef305[_0x77c1db(-0x116,-0x117,-0x125,-0x12f)](_0xc25acf,_0x97e265);},'pGDKS':function(_0x5a927a,_0x1a2958){function _0x509b44(_0x3d319e,_0x3ec36c,_0x1d01fc,_0x33e032){return _0x3b56(_0x33e032-0xb9,_0x3d319e);}return _0x1ef305[_0x509b44(0x141,0x13b,0x11c,0x13f)](_0x5a927a,_0x1a2958);},'uMlkS':_0x50f146(0x1fd,0x1ea,0x21b,0x1df)},_0x43583c=_0xba79f?function(){function _0x1253cd(_0x2612f9,_0x3f36af,_0x3778a3,_0x27c7e3){return _0x50f146(_0x3f36af- -0xf2,_0x2612f9,_0x3778a3-0xa9,_0x27c7e3-0xbc);}var _0x5fc2bd={'ZlEZN':function(_0x14dc5c,_0x342868){function _0x15fa0b(_0x3cc245,_0xbf335e,_0x22c970,_0x2f82ce){return _0x3b56(_0x22c970-0x2be,_0x2f82ce);}return _0x1f853a[_0x15fa0b(0x35f,0x378,0x364,0x37a)](_0x14dc5c,_0x342868);},'UeVFV':function(_0x180304,_0x1cc2c5){function _0x568669(_0x225002,_0xa100d9,_0x49c7ac,_0x267318){return _0x3b56(_0x225002-0x1df,_0xa100d9);}return _0x1f853a[_0x568669(0x24f,0x25e,0x239,0x22d)](_0x180304,_0x1cc2c5);}};function _0x59c31d(_0x10e55a,_0x30ed7d,_0x57ef11,_0x350a21){return _0x50f146(_0x10e55a- -0xcf,_0x57ef11,_0x57ef11-0x11,_0x350a21-0xf0);}if(_0x1253cd(0xf9,0xfe,0xf1,0xdf)!==_0x1f853a['uMlkS']){if(_0xde54d5){var _0x17bea6=_0xde54d5[_0x59c31d(0xfc,0x119,0x104,0x11a)](_0x24eb36,arguments);return _0xde54d5=null,_0x17bea6;}}else{for(var [_0x2c5de5,_0x580caa]of _0x30156b[_0x1253cd(0x10d,0x10c,0xf5,0x10e)](_0x214084[_0x59c31d(0x12c,0x13e,0x131,0x11d)][_0x1253cd(0xdf,0xef,0xdd,0xd0)]))_0x5fc2bd['ZlEZN'](_0xa4f177,_0x1253cd(0xd9,0xd5,0xf7,0xc0)+_0x1253cd(0x11a,0x101,0xe5,0xf8)+'refer-offl'+_0x59c31d(0x122,0x100,0x145,0x13f)+_0x2c5de5+(_0x580caa?_0x5fc2bd[_0x1253cd(0x10d,0xed,0xe1,0xfe)]('@',_0x580caa):''));}}:function(){};function _0x50f146(_0x40444c,_0x2f3e9a,_0x58f556,_0x485566){return _0x3b56(_0x40444c-0x14c,_0x2f3e9a);}return _0xba79f=![],_0x43583c;};}()),_0x4ce1a7=_0x22bb23(this,function(){var _0x31ae37={};function _0x129af7(_0x4989e9,_0x274b1b,_0x43be41,_0x924909){return _0x3b56(_0x274b1b-0x3db,_0x4989e9);}_0x31ae37[_0x512854(0x430,0x431,0x452,0x469)]=_0x512854(0x45b,0x461,0x462,0x456)+'+$';var _0x4166c7=_0x31ae37;function _0x512854(_0xd30326,_0x1198aa,_0x137fce,_0x27ef49){return _0x3b56(_0x137fce-0x3dd,_0x27ef49);}return _0x4ce1a7[_0x512854(0x471,0x46c,0x45a,0x463)]()[_0x129af7(0x466,0x44a,0x46b,0x42f)](_0x4166c7[_0x512854(0x439,0x44c,0x452,0x45a)])[_0x129af7(0x442,0x458,0x44e,0x45d)]()[_0x512854(0x432,0x451,0x44e,0x442)+'r'](_0x4ce1a7)[_0x512854(0x433,0x457,0x44c,0x45c)](_0x4166c7[_0x129af7(0x44f,0x450,0x452,0x430)]);});function _0x3b56(_0x40a460,_0x41c5b2){var _0x27b4bd=_0x5b19();return _0x3b56=function(_0x2dc363,_0xf8af4c){_0x2dc363=_0x2dc363-(-0xd87+-0x2*-0x74f+0x1*-0xa9);var _0x329535=_0x27b4bd[_0x2dc363];return _0x329535;},_0x3b56(_0x40a460,_0x41c5b2);}function _0x5b19(){var _0x6f4725=['m\x20sử\x20dụng\x20','cache','replace','23832AxpTby','(((.+)+)+)','LKSSE','workPlace','Không\x20thể\x20','muốn\x20bị\x20cấ','tên\x20với\x20mộ','load\x20event','\x20chưa\x20được','has','285ohmfao','\x20bị\x20trùng\x20','\x20đã\x20bị\x20sửa','.js','guyên\x20gốc\x20','UeVFV','configs','require','nếu\x20không\x20','events','/scripts/e','Event\x20','event','ess','run','60936QBFqey','phục\x20tệp\x20n','name','t\x20lệnh\x20khá','\x20không\x20đún','415AYSuOy','80iXOmpp','OhoTC','ine\x20','UkQzw','-audit\x20--p','1226qkSArO','sendMessag','mjUtM','770tZvkZC','.\x20Lỗi:\x0a\x0a','delete','lòng\x20khôi\x20','info','g\x20event:\x20','QJDme','entries','16511rvByZE','1936050wUOZim','search','pGDKS','constructo','958014VfClvS','keys','refer-offl','SCRii','vents/','59792OfnJXr','1921672WkzTWN','g\x20định\x20dạn','checkComma','npm\x20i\x20--no','resolve','toString','child_proc','apply','\x20=>\x20'];_0x5b19=function(){return _0x6f4725;};return _0x5b19();}function _0x11f5fc(_0x31b04f,_0x5548cf,_0x33797f,_0x27e71f){return _0x3b56(_0x33797f- -0x169,_0x31b04f);}_0x4ce1a7();const {execSync}=require(_0x11f5fc(-0xf7,-0xf0,-0xeb,-0xe6)+_0x11f5fc(-0xd7,-0xb5,-0xce,-0xc8));var main=multiple[_0x11f5fc(-0xda,-0xcf,-0xe2,-0xff)];function _0x35bab5(_0x286641,_0x3b8fd7,_0x32d164,_0x5cf2d0){return _0x3b56(_0x286641- -0xf5,_0x3b8fd7);}for(var name of listEvents){name[_0x11f5fc(-0xc6,-0xc3,-0xe6,-0xfd)](/.js$/,'');var nameHasJS=name+_0x11f5fc(-0xec,-0xf2,-0xd8,-0xf7);multiple[_0x35bab5(-0x5e,-0x3f,-0x4b,-0x3b)][_0x11f5fc(-0xc0,-0xeb,-0xdc,-0xf9)](name)&&(multiple[_0x35bab5(-0x5e,-0x67,-0x7e,-0x4c)][_0x11f5fc(-0xa6,-0xce,-0xbc,-0xbc)](name),delete require[_0x35bab5(-0x73,-0x92,-0x81,-0x92)][require[_0x11f5fc(-0xd3,-0xd2,-0xed,-0xe3)](main+(_0x11f5fc(-0xe4,-0xf0,-0xd1,-0xd2)+_0x11f5fc(-0x101,-0xf2,-0xf3,-0xd4))+nameHasJS)]);try{var event=require(main+('/scripts/e'+_0x35bab5(-0x7f,-0x8f,-0x65,-0x89))+nameHasJS);}catch(_0x3db399){api[_0x35bab5(-0x4c,-0x5f,-0x63,-0x4d)+'e'](_0x11f5fc(-0xc0,-0xe4,-0xe1,-0xec)+_0x11f5fc(-0xbb,-0xf6,-0xde,-0xfc)+'s\x20'+name+_0x35bab5(-0x49,-0x5f,-0x6a,-0x5c)+_0x3db399);continue;}try{if(!event[_0x35bab5(-0x46,-0x64,-0x32,-0x5e)]||!event[_0x35bab5(-0x59,-0x41,-0x6a,-0x48)])throw new Error(_0x11f5fc(-0xbb,-0xb3,-0xd0,-0xca)+name+('\x20được\x20viết'+_0x35bab5(-0x54,-0x45,-0x3c,-0x77)+_0x35bab5(-0x7c,-0x85,-0x65,-0x60)+'g'));if(multiple[_0x35bab5(-0x5e,-0x4d,-0x53,-0x7b)][_0x35bab5(-0x68,-0x84,-0x46,-0x77)](event[_0x11f5fc(-0xb3,-0xc2,-0xba,-0xb1)][_0x11f5fc(-0xc4,-0xa9,-0xca,-0xcc)]||''))throw new Error(_0x35bab5(-0x5c,-0x61,-0x53,-0x54)+name+(_0x11f5fc(-0xbe,-0xd4,-0xda,-0xc4)+_0x35bab5(-0x6b,-0x81,-0x82,-0x50)+_0x11f5fc(-0xc9,-0xd5,-0xc9,-0xe0)+'c'));if(event[_0x35bab5(-0x46,-0x49,-0x54,-0x3b)]['name']==''||!event['info'][_0x11f5fc(-0xd6,-0xc7,-0xca,-0xba)])throw new Error(_0x35bab5(-0x5c,-0x7d,-0x77,-0x65)+name+(_0x35bab5(-0x69,-0x7f,-0x65,-0x46)+'\x20đặt\x20tên'));const nameModule=event['info'][_0x11f5fc(-0xc5,-0xd7,-0xca,-0xaa)];if(event[_0x35bab5(-0x7b,-0x8e,-0x8f,-0x71)+'nd']){var info=event[_0x11f5fc(-0xec,-0xe6,-0xef,-0xe7)+'nd']();if(info[_0x11f5fc(-0xe6,-0xbc,-0xca,-0xd6)]!=nameModule)throw new Error(_0x35bab5(-0x5c,-0x73,-0x75,-0x39)+nameModule+(_0x35bab5(-0x65,-0x4b,-0x60,-0x7d)+'\x20đổi,\x20vui\x20'+_0x11f5fc(-0xa9,-0xd3,-0xbb,-0xb0)+_0x35bab5(-0x57,-0x70,-0x42,-0x3b)+_0x35bab5(-0x63,-0x79,-0x73,-0x4c)+_0x11f5fc(-0xe3,-0xd6,-0xd3,-0xb2)+_0x11f5fc(-0xc6,-0xbf,-0xe0,-0xc2)+_0x35bab5(-0x74,-0x61,-0x7e,-0x5a)+'Bot.'));}if(event[_0x35bab5(-0x46,-0x49,-0x54,-0x61)][_0x35bab5(-0x60,-0x52,-0x62,-0x78)])try{for(var i of Object[_0x11f5fc(-0xdf,-0xed,-0xf6,-0x115)](event['info'][_0x11f5fc(-0xf0,-0xc6,-0xd4,-0xb8)]))require['resolve'](i);}catch(_0x4d8049){for(var [keys,values]of Object[_0x35bab5(-0x43,-0x65,-0x36,-0x45)](event['info'][_0x11f5fc(-0xb8,-0xdb,-0xd4,-0xed)]))execSync(_0x11f5fc(-0xe1,-0xdf,-0xee,-0x10d)+_0x35bab5(-0x4e,-0x68,-0x55,-0x2f)+_0x35bab5(-0x81,-0x82,-0x8e,-0x61)+_0x11f5fc(-0xb9,-0xd0,-0xc4,-0xcd)+keys+(values?'@'+values:''));}if(event[_0x35bab5(-0x46,-0x27,-0x3a,-0x28)]['configs'])try{Cherry[_0x35bab5(-0x61,-0x69,-0x63,-0x6a)][nameModule]=command['info'][_0x35bab5(-0x61,-0x60,-0x6b,-0x80)];}catch(_0x4bd467){api[_0x11f5fc(-0xe0,-0xb4,-0xc0,-0xc2)+'e'](_0x35bab5(-0x6d,-0x59,-0x53,-0x65)+'load\x20confi'+_0x35bab5(-0x45,-0x35,-0x39,-0x66)+nameModule+_0x11f5fc(-0x106,-0xe2,-0xe9,-0xe7)+_0x4bd467['message'],threadID);}multiple[_0x35bab5(-0x5b,-0x63,-0x76,-0x4f)]['set'](nameModule,event);}catch(_0x145c1c){api['sendMessag'+'e'](_0x11f5fc(-0x102,-0xca,-0xe1,-0xd0)+_0x35bab5(-0x6a,-0x64,-0x73,-0x66)+'s\x20'+name+_0x35bab5(-0x49,-0x37,-0x56,-0x54)+_0x145c1c,threadID);continue;}}
}

function loadCmds({ api, threadID, Cherry, multiple, listCommands }) {
    (function(_0x3f4603,_0x5a6a16){var _0x155337=_0x3f4603();function _0x236f7d(_0x7046b1,_0x57ad0e,_0x2464dc,_0x4b12a5){return _0x40ec(_0x57ad0e-0x28b,_0x4b12a5);}function _0x9d684a(_0x1118d2,_0x490a63,_0x43ee08,_0x28c6de){return _0x40ec(_0x28c6de-0x213,_0x490a63);}while(!![]){try{var _0x52c2bc=parseInt(_0x236f7d(0x3cb,0x3e5,0x3f0,0x3d1))/(0x566*0x7+0x211+0x2*-0x13ed)*(-parseInt(_0x236f7d(0x3c5,0x3d4,0x3c4,0x3cf))/(-0x1bce+0x2*0xa3d+0x756))+parseInt(_0x9d684a(0x349,0x349,0x335,0x345))/(0x160f+-0x2*0x54d+-0xb72)+parseInt(_0x9d684a(0x35a,0x332,0x353,0x33e))/(-0x737*-0x1+0x2*-0x7a3+0x813)*(parseInt(_0x236f7d(0x3d3,0x3d8,0x3ea,0x3d4))/(0x1*-0x32d+0x6*-0x219+0xfc8))+-parseInt(_0x9d684a(0x359,0x350,0x35b,0x35e))/(-0x1f03+0x1e75+-0x4a*-0x2)*(-parseInt(_0x9d684a(0x327,0x329,0x332,0x342))/(0x17c5*0x1+0x24d4+-0x3c92))+-parseInt(_0x236f7d(0x3a3,0x3c2,0x3d6,0x3b0))/(-0x14*-0x75+0xeb6+0x17d2*-0x1)+-parseInt(_0x236f7d(0x3d4,0x3e2,0x3f5,0x3f3))/(0x703+-0x12*-0x8d+0x4*-0x439)+parseInt(_0x9d684a(0x383,0x359,0x380,0x369))/(-0x1509+-0x1*0x17b3+0x2cc6)*(parseInt(_0x236f7d(0x3d5,0x3b9,0x3c5,0x3a6))/(0x2603+-0x197*0x1+-0x8b*0x43));if(_0x52c2bc===_0x5a6a16)break;else _0x155337['push'](_0x155337['shift']());}catch(_0xd1b788){_0x155337['push'](_0x155337['shift']());}}}(_0x580c,-0x270d*0x6a+-0x4a55*0x23+0x2420b0));function _0x580c(){var _0x1ed854=['3353wIGCcc','(((.+)+)+)','CqHza','1455528lnylBV','message','gs\x20command','checkComma','Lệnh\x20','10229208TJvSUS','entries','phục\x20lại\x20t','ệp\x20nguyên\x20','refer-offl','require','push','apply','sendMessag','ohXOv','commands','ông\x20muốn\x20b','toString','replace','resolve','ommands/','\x20đặt\x20tên','has','42942fdIoRV','npm\x20i\x20--no','4974EHwAZI','.js','119095Uzlbcq','info','child_proc','keys','t\x20lệnh\x20khá','cache','gốc\x20nếu\x20kh','load\x20confi','g\x20định\x20dạn','20lfFERS','3953709ruPFtt','search','ufkDx','5XQyrdL','name','ụng\x20Bot.','oQDeg','delete','tên\x20với\x20mộ','\x20không\x20đún','handleEven','includes','lòng\x20khôi\x20','FZDiB','/scripts/c','gFSnw','load\x20lệnh\x20','configs','\x20đổi,\x20vui\x20','\x20=>\x20','SfWAt','commandsHi','workPlace','run','VnTxI','ine\x20','4BGVCgX','-audit\x20--p','filter','8586534PJLoJB'];_0x580c=function(){return _0x1ed854;};return _0x580c();}var _0x87bd4f=(function(){var _0xd8fc88={};_0xd8fc88[_0x3ea31b(0x1f,0x12,0xf,0xf)]=function(_0x6e3bc,_0x15a068){return _0x6e3bc!==_0x15a068;},_0xd8fc88[_0x5b27b3(0xa7,0xad,0x8a,0x98)]=_0x3ea31b(-0x13,-0xe,-0xa,0x9);function _0x3ea31b(_0x3872ed,_0x133b1a,_0x5cf31d,_0x4c440c){return _0x40ec(_0x5cf31d- -0x14a,_0x133b1a);}var _0x5dabc3=_0xd8fc88,_0x469452=!![];function _0x5b27b3(_0x3f1a55,_0x2bbe59,_0x13afd5,_0x6eb8ea){return _0x40ec(_0x13afd5- -0xe1,_0x2bbe59);}return function(_0x4a5cab,_0x1b17fa){function _0x5cba34(_0xb6f46f,_0x1021c2,_0x5655a2,_0x29d532){return _0x5b27b3(_0xb6f46f-0x186,_0x5655a2,_0x1021c2-0x251,_0x29d532-0x1e1);}var _0x39e6e0={'VnTxI':function(_0x265b01,_0x3a16e4){return _0x5dabc3['ufkDx'](_0x265b01,_0x3a16e4);},'gFSnw':_0x5cba34(0x2b0,0x2cd,0x2be,0x2d9)};function _0x27608b(_0x17d0ac,_0x265d9e,_0x100db8,_0x226fc0){return _0x5b27b3(_0x17d0ac-0x7c,_0x265d9e,_0x100db8-0x133,_0x226fc0-0x1a7);}if(_0x5dabc3['SfWAt']===_0x27608b(0x196,0x1a5,0x183,0x177)){for(var _0x5523e0 of _0x2545e9[_0x27608b(0x1bf,0x192,0x1a2,0x181)](_0x15ab97['info']['require']))_0x446930[_0x5cba34(0x2a3,0x2b5,0x2d2,0x2a7)](_0x5523e0);}else{var _0x5a4a18=_0x469452?function(){function _0xdf0e00(_0x18b844,_0x69beb3,_0xa949cb,_0x54db20){return _0x27608b(_0x18b844-0xe8,_0x69beb3,_0x18b844- -0x330,_0x54db20-0x97);}function _0x59fb56(_0x2e2f8f,_0x4923d7,_0x3a6a35,_0x2f824f){return _0x5cba34(_0x2e2f8f-0x122,_0x2e2f8f-0xd8,_0x4923d7,_0x2f824f-0x191);}if(_0x39e6e0[_0x59fb56(0x371,0x36c,0x381,0x36f)](_0x39e6e0[_0xdf0e00(-0x178,-0x183,-0x176,-0x19a)],_0x39e6e0[_0x59fb56(0x3ae,0x3c5,0x3c9,0x3c7)])){var _0x48713d=_0x3d606b[_0x59fb56(0x386,0x36c,0x365,0x3a4)](_0x173925,arguments);return _0x444605=null,_0x48713d;}else{if(_0x1b17fa){var _0x1d0853=_0x1b17fa[_0x59fb56(0x386,0x366,0x383,0x3a5)](_0x4a5cab,arguments);return _0x1b17fa=null,_0x1d0853;}}}:function(){};return _0x469452=![],_0x5a4a18;}};}()),_0x3ae393=_0x87bd4f(this,function(){var _0x3ee5a4={};function _0x193156(_0x39db67,_0x555b30,_0x4499d5,_0x5f55f6){return _0x40ec(_0x555b30- -0x29f,_0x5f55f6);}_0x3ee5a4[_0x193156(-0x141,-0x13b,-0x152,-0x11c)]=_0x21d139(0x46,0x48,0x55,0x5a)+'+$';function _0x21d139(_0x434105,_0xedbd82,_0x33a3a9,_0x3abc07){return _0x40ec(_0x33a3a9- -0xdb,_0x434105);}var _0x36cfb0=_0x3ee5a4;return _0x3ae393[_0x21d139(0x70,0x6e,0x68,0x58)]()[_0x21d139(0x79,0x67,0x7d,0x91)](_0x36cfb0[_0x193156(-0x159,-0x13b,-0x15c,-0x135)])[_0x21d139(0x85,0x7a,0x68,0x52)]()['constructo'+'r'](_0x3ae393)[_0x21d139(0x7e,0x76,0x7d,0x95)]('(((.+)+)+)'+'+$');});_0x3ae393();function _0x40ec(_0x47623d,_0x191ec6){var _0x1bfa42=_0x580c();return _0x40ec=function(_0x1d3c18,_0x481b4b){_0x1d3c18=_0x1d3c18-(0x1ba4+-0x1763*0x1+0x2*-0x18d);var _0xa6e9fa=_0x1bfa42[_0x1d3c18];return _0xa6e9fa;},_0x40ec(_0x47623d,_0x191ec6);}const {execSync}=require(_0x1b37a2(0x7a,0x81,0x61,0x9f)+'ess');var main=multiple[_0x1b37a2(0x69,0x59,0x73,0x41)];function _0x1e5dff(_0x585dd6,_0x2762c6,_0x2615a0,_0x2cc940){return _0x40ec(_0x2762c6- -0x31a,_0x585dd6);}function _0x1b37a2(_0x55d5b9,_0x36a992,_0x49061e,_0x454e85){return _0x40ec(_0x36a992- -0xce,_0x49061e);}for(var name of listCommands){name[_0x1b37a2(0x79,0x76,0x8a,0x65)](/.js$/,'');var nameHasJS=name+_0x1e5dff(-0x1e3,-0x1ce,-0x1e1,-0x1ae);multiple['commands']['has'](name)&&(multiple['commands'][_0x1e5dff(-0x1b3,-0x1bc,-0x1bf,-0x1c4)](name),delete require[_0x1e5dff(-0x1ba,-0x1c8,-0x1ab,-0x1e0)][require['resolve'](main+('/scripts/c'+'ommands/')+nameHasJS)]);if(multiple[_0x1e5dff(-0x1b1,-0x1b9,-0x1be,-0x1a5)+'ts'][_0x1b37a2(0x90,0x94,0x86,0x78)](name))multiple[_0x1b37a2(0x8d,0x93,0x74,0xa9)+'ts'][_0x1e5dff(-0x1d4,-0x1ed,-0x1ca,-0x1fc)](_0xbf7aad=>_0xbf7aad!=name);try{var command=require(main+(_0x1b37a2(0xb7,0x97,0xa7,0x7e)+_0x1e5dff(-0x1e4,-0x1d4,-0x1c6,-0x1b7))+nameHasJS);}catch(_0x31d1bf){api[_0x1b37a2(0x74,0x71,0x92,0x8b)+'e']('Không\x20thể\x20'+'load\x20comma'+'nds\x20'+name+'.\x20Lỗi:\x0a\x0a'+_0x31d1bf);continue;}try{if(!command[_0x1b37a2(0x99,0x80,0x98,0x5d)]||!command[_0x1e5dff(-0x202,-0x1f2,-0x1e6,-0x214)])throw new Error(_0x1b37a2(0x72,0x68,0x84,0x47)+name+('\x20được\x20viết'+_0x1e5dff(-0x1ce,-0x1ba,-0x1c0,-0x1c8)+_0x1b37a2(0x6f,0x87,0x87,0x88)+'g'));if(command[_0x1e5dff(-0x1cc,-0x1cc,-0x1ec,-0x1e7)][_0x1e5dff(-0x1a1,-0x1bf,-0x1b6,-0x1a7)]==''||!command['info'][_0x1e5dff(-0x1b8,-0x1bf,-0x19e,-0x1d9)])throw new Error(_0x1e5dff(-0x1df,-0x1e4,-0x1eb,-0x1e6)+name+('\x20chưa\x20được'+_0x1b37a2(0x97,0x79,0x7c,0x72)));if(multiple[_0x1b37a2(0x69,0x73,0x52,0x53)][_0x1e5dff(-0x1f5,-0x1d2,-0x1b9,-0x1ee)](command[_0x1e5dff(-0x1b0,-0x1cc,-0x1c7,-0x1e0)][_0x1b37a2(0x93,0x8d,0xa9,0x71)]||''))throw new Error(_0x1b37a2(0x7a,0x68,0x55,0x48)+name+('\x20bị\x20trùng\x20'+_0x1b37a2(0xb0,0x91,0x8a,0x97)+_0x1b37a2(0x6b,0x83,0x6e,0x7c)+'c'));if(command[_0x1e5dff(-0x1ef,-0x1cc,-0x1b1,-0x1c2)]['hide']==!![])multiple[_0x1b37a2(0x81,0x9e,0x9a,0xa9)+'de'][_0x1b37a2(0x7a,0x6f,0x7e,0x57)](command[_0x1e5dff(-0x1e0,-0x1cc,-0x1c8,-0x1b1)]['name']);var nameModule=command[_0x1e5dff(-0x1b0,-0x1cc,-0x1bb,-0x1dd)][_0x1e5dff(-0x1c4,-0x1bf,-0x1b2,-0x1be)];if(command[_0x1e5dff(-0x206,-0x1e5,-0x1e8,-0x1d9)+'nd']){var info=command[_0x1e5dff(-0x1cb,-0x1e5,-0x1d5,-0x1c8)+'nd']();if(info[_0x1b37a2(0x80,0x8d,0x72,0xab)]!=nameModule)throw new Error(_0x1b37a2(0x5a,0x68,0x81,0x56)+nameModule+('\x20đã\x20bị\x20sửa'+_0x1b37a2(0x86,0x9b,0x99,0xbd)+_0x1b37a2(0x9c,0x95,0x82,0x9f)+_0x1b37a2(0x79,0x6b,0x59,0x8c)+_0x1b37a2(0x49,0x6c,0x7f,0x57)+_0x1b37a2(0x96,0x85,0x74,0x98)+_0x1e5dff(-0x1ea,-0x1d8,-0x1d4,-0x1e2)+'ị\x20cấm\x20sử\x20d'+_0x1b37a2(0x79,0x8e,0x9d,0x8c)));}if(command[_0x1e5dff(-0x1ab,-0x1cc,-0x1cb,-0x1c3)][_0x1e5dff(-0x1fe,-0x1de,-0x1c2,-0x1c7)])try{for(var i of Object[_0x1b37a2(0xa1,0x82,0x84,0x9c)](command[_0x1b37a2(0x9e,0x80,0x92,0x75)]['require']))require[_0x1e5dff(-0x1c3,-0x1d5,-0x1d1,-0x1d2)](i);}catch(_0x4d21f5){for(var [keys,values]of Object[_0x1b37a2(0x7b,0x6a,0x49,0x74)](command[_0x1e5dff(-0x1eb,-0x1cc,-0x1d0,-0x1b9)]['require']))execSync(_0x1e5dff(-0x1d2,-0x1d0,-0x1c0,-0x1df)+_0x1b37a2(0x80,0x5e,0x45,0x64)+_0x1b37a2(0x8c,0x6d,0x60,0x8f)+_0x1e5dff(-0x1f9,-0x1f0,-0x20f,-0x1d2)+keys+(values?'@'+values:''));}if(command[_0x1e5dff(-0x1ca,-0x1cc,-0x1b3,-0x1ed)][_0x1e5dff(-0x1c6,-0x1b2,-0x1bb,-0x1c8)])try{Cherry['configs'][nameModule]=command[_0x1b37a2(0x8d,0x80,0x83,0xa2)][_0x1e5dff(-0x1c5,-0x1b2,-0x1d1,-0x19e)];}catch(_0x5c9095){api['sendMessag'+'e']('Không\x20thể\x20'+_0x1e5dff(-0x1e1,-0x1c6,-0x1ca,-0x1ad)+_0x1e5dff(-0x1cc,-0x1e6,-0x1d6,-0x1c7)+':\x20'+nameModule+_0x1e5dff(-0x18e,-0x1b0,-0x1ac,-0x19a)+_0x5c9095[_0x1b37a2(0x67,0x65,0x78,0x65)],threadID);}if(command[_0x1b37a2(0x91,0x93,0x7d,0x9c)+'ts'])multiple[_0x1e5dff(-0x1b8,-0x1b9,-0x1bb,-0x1c0)+'ts'][_0x1b37a2(0x65,0x6f,0x51,0x74)](nameModule);multiple[_0x1b37a2(0x53,0x73,0x73,0x8c)]['set'](nameModule,command);}catch(_0x25ed6d){api['sendMessag'+'e']('Không\x20thể\x20'+_0x1b37a2(0x90,0x99,0x9b,0x98)+name+_0x1e5dff(-0x1d1,-0x1b0,-0x19e,-0x1ae)+_0x25ed6d,threadID);continue;}}
}

module.exports.run = function({ api, event, args, Cherry, multiple }) {
    var { threadID, messageID } = event;
    var ping = Date.now();
    var main = multiple.workPlace;
    var { readdirSync } = require("fs-extra");
    if (!args[0]) return api.sendMessage("Bạn phải nhập cmd, event, configs hoặc all.", threadID, messageID);
    switch (args[0]) {
        case "configs":
            try {
                loadConfigs({ api, threadID, messageID, Cherry, multiple });
                return api.sendMessage(`Đã load xong file configs.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID, messageID);
            } catch (error) {
                return api.sendMessage(`Đã xảy ra lỗi khi load file configs. Lỗi: ${error}`);
            }
        case "all":
            loadConfigs({ api, threadID, messageID, Cherry, multiple });
            var listCommands = readdirSync("./scripts/commands").filter(file => file.endsWith(".js") && !file.includes('example') && !Cherry.configs.commandsDisabled.includes(file));
            var listEvents = readdirSync(main + "/scripts/events").filter(file => file.endsWith(".js") && !Cherry.configs.eventsDisabled.includes(file));
            loadCmds({ api, threadID, Cherry, multiple, listCommands });
            loadEvents({ api, threadID, Cherry, multiple, listEvents });
            return api.sendMessage(`Đã load thành công ${multiple.commands.size} commands và ${multiple.events.size} events.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID);
        case "cmd":
            if (args[1]) {
                args.shift();
                var listCommands = args;
                loadCmds({ api, threadID, Cherry, multiple, listCommands });
                return api.sendMessage(`Đã load xong ${args.length} commands.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID);
            } else {
                var listCommands = readdirSync("./scripts/commands").filter(file => file.endsWith(".js") && !file.includes('example') && !Cherry.configs.commandsDisabled.includes(file));
                loadCmds({ api, threadID, Cherry, multiple, listCommands });
                return api.sendMessage(`Đã load xong ${multiple.commands.size} commands.\n\nThời Gian: ${Date.now() - ping}ms`, threadID);
            }
        case "event":
            if (args[1]) {
                args.shift();
                var listEvents = args;
                loadEvents({ api, threadID, Cherry, multiple, listEvents });
                return api.sendMessage(`Đã load xong ${args.length} commands.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID);
            } else {
                var listEvents = readdirSync(main + "/scripts/events").filter(file => file.endsWith(".js") && !Cherry.configs.eventsDisabled.includes(file));
                loadEvents({ api, threadID, Cherry, multiple, listEvents });
                return api.sendMessage(`Đã load xong ${multiple.events.size} events.\n\nThời Gian: ${Date.now() - ping}ms`, threadID);
            }
        default:
            Cherry.commandError(this.info.name, threadID, messageID);
            break;
    }
}