module.exports.info = {
	name: "unban",
	version: "1.0.2",
	permissions: 2,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Tha tội cho người đã bị ban trước đó",
        short: "Gỡ lệnh ban"
    },
	group: "Dành Cho Quản Lí",
	guide: [
		'[tag]',
	],
	countdown: 5
};

module.exports.handleReactionMessage = async function({ api, event, Users, Reaction, Cherry, multiple }) {
    function _0x5d72(){var _0x41ddee=['4HtBYAj','superban','age','11631HPvbSv','105208mgvLHd','banned','(((.+)+)+)','uperban\x20ch','constructo','KWYgI','getData','configs','push','BRssu','2282QtPivG','unban\x20cho\x20','Cherry\x20-\x20S','2354hNvhAo','ạn\x20để\x20gỡ\x20s','9ONsiJc','sendMessag','search','length','1040955bWgjBs','has','Đã\x20gỡ\x20lệnh','allUsersBa','48444oJglFl','UCIip','GCaML','Bạn\x20không\x20','delete','unsendMess','nned','setData','join','a\x20lỗi\x20khi\x20','40510ZgnjLf','type','\x20thành\x20viê','iHOMj','ujhLT','1597568RRzKaU','keys','messageID','Bot\x20cho\x20','erBan\x20của\x20','717AHmAqU','ZTzzS','toString','name','CeFPP'];_0x5d72=function(){return _0x41ddee;};return _0x5d72();}(function(_0x219e79,_0x23a546){function _0x20012f(_0x5e53e8,_0x374e0b,_0x5516b4,_0x28297f){return _0x2fc7(_0x28297f- -0x2e2,_0x5516b4);}function _0x3c206e(_0x43c2d,_0xa0c1cc,_0x4082ee,_0x4542df){return _0x2fc7(_0x43c2d-0x289,_0x4082ee);}var _0x3028e4=_0x219e79();while(!![]){try{var _0x58bf5c=parseInt(_0x3c206e(0x3c4,0x3d9,0x3b3,0x3b2))/(-0x1fa0+0x1*0x13cd+0x2*0x5ea)+-parseInt(_0x20012f(-0x1d0,-0x1b6,-0x1cf,-0x1d0))/(-0x420*-0x6+-0xb50+-0x12*0xbf)*(parseInt(_0x20012f(-0x1ae,-0x1aa,-0x1c0,-0x1af))/(-0x225*-0x12+0x18e+0x2825*-0x1))+parseInt(_0x3c206e(0x3c1,0x3a9,0x3af,0x3bd))/(0x163*-0xd+-0x1223*-0x2+-0x123b)*(-parseInt(_0x20012f(-0x1c2,-0x1d1,-0x1c6,-0x1c7))/(-0x8cb*-0x1+-0x2121+0x2b*0x91))+-parseInt(_0x20012f(-0x1c3,-0x1c1,-0x1be,-0x1c3))/(-0x19e9+-0x66*-0x1+-0x883*-0x3)+-parseInt(_0x20012f(-0x1c0,-0x1c1,-0x1c3,-0x1b4))/(0x12a5+0x1*0xeef+-0x218d)+parseInt(_0x20012f(-0x1ae,-0x19f,-0x1b0,-0x1a6))/(0x1*-0x120b+0x28d*0x4+0x7df)*(parseInt(_0x3c206e(0x3a0,0x3a9,0x39e,0x3a8))/(-0xd5f+0x2532+-0xcb*0x1e))+parseInt(_0x3c206e(0x3b2,0x3ac,0x3b9,0x3c2))/(0x1*-0x617+-0x3*0x968+0x1*0x2259)*(parseInt(_0x3c206e(0x39e,0x3a1,0x3b0,0x3a0))/(-0xf81+-0x214+0x2*0x8d0));if(_0x58bf5c===_0x23a546)break;else _0x3028e4['push'](_0x3028e4['shift']());}catch(_0x5e243a){_0x3028e4['push'](_0x3028e4['shift']());}}}(_0x5d72,0xbb*-0x713+0x38a*0x13e+0x36f21));var _0x5d14af=(function(){var _0x2f833b={};function _0x5349b0(_0x1a0664,_0x168e4,_0x149141,_0x38178f){return _0x2fc7(_0x168e4-0x3a5,_0x149141);}_0x2f833b['KWYgI']=_0x520903(0x3af,0x3a7,0x3a3,0x3a5),_0x2f833b[_0x5349b0(0x4cd,0x4d9,0x4ec,0x4bf)]=function(_0x59ba1a,_0x259daa){return _0x59ba1a===_0x259daa;};function _0x520903(_0x15395b,_0xabec3e,_0x3c3d5f,_0x3811c5){return _0x2fc7(_0x3811c5-0x284,_0x3c3d5f);}_0x2f833b[_0x520903(0x39a,0x3ca,0x3b3,0x3b1)]=_0x520903(0x3cc,0x3a1,0x3cb,0x3bb),_0x2f833b[_0x5349b0(0x4b1,0x4b6,0x4bf,0x4d0)]=_0x520903(0x394,0x377,0x383,0x38e)+'+$';var _0x1cc708=_0x2f833b,_0x331676=!![];return function(_0x47e29f,_0x452c1a){var _0x214889={};_0x214889[_0x46ae5e(0xb0,0xb5,0xb6,0xa2)]=_0x1cc708['BRssu'];var _0x3daaa4=_0x214889,_0x39f3aa=_0x331676?function(){function _0x4e721f(_0xb05b03,_0x3af98f,_0x318dbd,_0x5435bb){return _0x46ae5e(_0xb05b03-0x324,_0x3af98f-0x118,_0x318dbd,_0x5435bb-0x6b);}function _0x45c418(_0x37a509,_0x42b511,_0x31484a,_0x261616){return _0x46ae5e(_0x37a509- -0x1a6,_0x42b511-0x169,_0x261616,_0x261616-0xc5);}if(_0x1cc708[_0x4e721f(0x3b5,0x3c5,0x39e,0x3c6)]===_0x4e721f(0x3c9,0x3df,0x3b0,0x3da)){if(_0x452c1a){if(_0x1cc708['ZTzzS'](_0x45c418(-0xeb,-0xd5,-0xde,-0xfb),_0x1cc708['ujhLT'])){var _0x2e3117=_0x452c1a['apply'](_0x47e29f,arguments);return _0x452c1a=null,_0x2e3117;}else return _0x1daaab[_0x45c418(-0xed,-0xf6,-0xef,-0xeb)]()[_0x4e721f(0x3c1,0x3ad,0x3d0,0x3ac)](_0x3daaa4[_0x4e721f(0x3d4,0x3bf,0x3d9,0x3ba)])['toString']()[_0x45c418(-0x116,-0x124,-0x12c,-0x124)+'r'](_0x42c330)['search']('(((.+)+)+)'+'+$');}}else{if(_0xc45b8c){var _0x2cd1b1=_0x2e4d0e['apply'](_0x4130be,arguments);return _0x1ef7f7=null,_0x2cd1b1;}}}:function(){};function _0x46ae5e(_0x27d464,_0x599f4f,_0x19641f,_0xe169bf){return _0x5349b0(_0x27d464-0x16c,_0x27d464- -0x421,_0x19641f,_0xe169bf-0x1ee);}return _0x331676=![],_0x39f3aa;};}());function _0x127e73(_0x19dd9b,_0x161778,_0x3cf003,_0x38ff49){return _0x2fc7(_0x38ff49- -0x69,_0x3cf003);}function _0x2fc7(_0x3efa78,_0x413390){var _0x1be22b=_0x5d72();return _0x2fc7=function(_0x58fdcd,_0x116e8d){_0x58fdcd=_0x58fdcd-(-0x5*-0x6f7+0x1967*-0x1+-0x13*0x71);var _0x45d7a3=_0x1be22b[_0x58fdcd];return _0x45d7a3;},_0x2fc7(_0x3efa78,_0x413390);}var _0x1ab7d6=_0x5d14af(this,function(){function _0x2a7bb5(_0x7f3806,_0x171a76,_0xd3d397,_0x495443){return _0x2fc7(_0xd3d397- -0x186,_0x171a76);}function _0x331e15(_0x34cba2,_0xb4bd03,_0x15c728,_0x2d3b4b){return _0x2fc7(_0x34cba2-0xc8,_0x2d3b4b);}var _0x46bdeb={};_0x46bdeb[_0x331e15(0x1e8,0x1f5,0x1d9,0x1d6)]=_0x331e15(0x1d2,0x1c9,0x1e4,0x1dd)+'+$';var _0x3184f6=_0x46bdeb;return _0x1ab7d6['toString']()[_0x331e15(0x1e1,0x1ce,0x1c9,0x1e1)](_0x3184f6[_0x331e15(0x1e8,0x1fa,0x1ce,0x1f9)])[_0x331e15(0x1fd,0x205,0x212,0x20a)]()[_0x2a7bb5(-0x77,-0x8d,-0x7a,-0x87)+'r'](_0x1ab7d6)[_0x331e15(0x1e1,0x1cf,0x1de,0x1f1)](_0x3184f6[_0x2a7bb5(-0x5e,-0x61,-0x66,-0x65)]);});_0x1ab7d6();var {author,unbanUser}=Reaction;function _0x5845e0(_0x328241,_0x357477,_0x4e7d3a,_0x42f7bf){return _0x2fc7(_0x4e7d3a-0x71,_0x42f7bf);}var {threadID,userID}=event;if(userID!=author)return;api[_0x127e73(0xcd,0xaf,0xd1,0xbb)+_0x5845e0(0x1c2,0x1b3,0x1ab,0x1a1)](Reaction[_0x5845e0(0x1ba,0x18b,0x1a1,0x1bb)]);var finish=-0x11d0+0x14b3+0x1*-0x2e3,error=[];for(var i of Object[_0x127e73(0xb7,0xdb,0xb0,0xc6)](unbanUser)){var unbanInfo=await Users[_0x127e73(0x9e,0x93,0x8d,0xa5)](i);switch(unbanInfo[_0x127e73(0xba,0x8a,0xa4,0xa0)][_0x5845e0(0x1ad,0x1a9,0x19b,0x1b5)]){case _0x127e73(0xc1,0x91,0xb3,0xab)+'uperBan':api['sendMessag'+'e'](_0x127e73(0xa7,0xb9,0xa6,0xb9)+'thể\x20gỡ\x20Sup'+_0x127e73(0xd1,0xbf,0xb2,0xc9)+'Cherry\x20cho'+_0x5845e0(0x18a,0x18b,0x19c,0x185)+'n\x20'+unbanInfo[_0x5845e0(0x1b2,0x1a1,0x1a7,0x1b4)],threadID);continue;case _0x127e73(0xb7,0xb9,0xbd,0xd0):var {ADMIN}=Cherry[_0x5845e0(0x167,0x180,0x180,0x175)];if(ADMIN['includes'](userID)){delete unbanInfo[_0x127e73(0xa6,0x90,0x95,0xa0)],await Users[_0x5845e0(0x17e,0x19a,0x197,0x1ad)](i,unbanInfo);if(multiple['allUsersBa'+_0x127e73(0xaf,0xb8,0xd0,0xbc)][_0x5845e0(0x183,0x1a0,0x18d,0x18b)](i))multiple['allUsersBa'+_0x127e73(0xa8,0xbd,0xb9,0xbc)]['delete'](i);finish++;}else error[_0x5845e0(0x16c,0x190,0x181,0x18c)](i),api[_0x127e73(0x97,0xc5,0xba,0xaf)+'e'](_0x5845e0(0x18a,0x19b,0x193,0x189)+'đủ\x20quyền\x20h'+_0x5845e0(0x197,0x189,0x187,0x18a)+_0x5845e0(0x195,0x163,0x17c,0x18a)+'o\x20thành\x20vi'+'ên\x20'+unbanInfo[_0x5845e0(0x1ad,0x1a9,0x1a7,0x1ba)]+'!',threadID);continue;default:delete unbanInfo['banned'],await Users['setData'](i,unbanInfo);if(multiple[_0x5845e0(0x1a9,0x1a7,0x18f,0x18f)+_0x5845e0(0x17e,0x1a8,0x196,0x1a3)]['has'](i))multiple[_0x127e73(0x9c,0xb8,0xa1,0xb5)+'nned'][_0x127e73(0xa7,0xd1,0xa3,0xba)](i);finish++;continue;}}return api['sendMessag'+'e'](_0x5845e0(0x17c,0x1a6,0x18e,0x1a8)+'\x20cấm\x20dùng\x20'+_0x5845e0(0x195,0x19a,0x1a2,0x1bb)+finish+(_0x5845e0(0x1a6,0x1ad,0x19c,0x1ae)+'n.')+(error[_0x5845e0(0x190,0x172,0x18b,0x183)]>-0x29*0x9e+-0xe3*-0x15+0x3b*0x1d?'\x0a\x0aĐã\x20xảy\x20r'+_0x5845e0(0x194,0x17f,0x199,0x1a0)+'thực\x20hiện\x20'+_0x127e73(0xa8,0xaf,0xb4,0xaa)+error['length']+('\x20thành\x20viê'+'n\x20có\x20ID:\x20')+error[_0x5845e0(0x186,0x1ad,0x198,0x19b)](',\x20'):''),threadID);
}

module.exports.run = async function({ api, event, multiple, Users }) {
    var { threadID, senderID, messageID, mentions } = event;
    var mention = Object.keys(mentions);
    if (mention.length == 0) return api.sendMessage("Bạn cần tag người muốn unban!", threadID, messageID);
    var msg = `Bạn có chắc muốn unban cho ${mention.length > 0 ? 'những thành viên này' : 'thành viên này'}?\n\n`, number = 1;
    for (var [id, name] of Object.entries(mentions)) {
        var unbannedInfo = await Users.getData(id);
        if (!unbannedInfo || !unbannedInfo.banned || unbannedInfo.banned.status == false) return api.sendMessage(`${name.replace("@", "")} chưa bị ban hoặc chưa có dữ liệu trong database`, threadID);
        msg += `${number++}. ${name.replace("@", "")}`
    }
    msg += `\n\nVui lòng thả cảm xúc vào tin nhắn này để xác nhận.`;
    return api.sendMessage(msg, threadID, (error, info) => {
        multiple.handleReactionMessage.push({
            name: this.info.name,
            messageID: info.messageID,
            author: senderID,
            unbanUser: mentions
        });
    }, messageID);
}