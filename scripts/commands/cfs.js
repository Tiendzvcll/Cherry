module.exports.info = {
	name: "cfs",
	version: "1.0.3",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Xem confession của người khác hoặc gửi đi confession của bạn",
        short: "Xem gửi & nhận cfs"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'[get/send/view]',
	],
	countdown: 5,
    require: {
        "axios": ""
    }
};

module.exports.handleReactionMessage = async function({ event, Reaction }) {
	(function(_0x134815,_0x551b69){function _0x17f874(_0x126dd6,_0x3fd3f5,_0x4db7c5,_0xfeeb1c){return _0x257d(_0x3fd3f5- -0x18a,_0x126dd6);}var _0x3aef73=_0x134815();function _0x16e0c2(_0x16e83e,_0x51f811,_0x31a81e,_0x59fbb8){return _0x257d(_0x51f811-0x26a,_0x59fbb8);}while(!![]){try{var _0xd9939f=-parseInt(_0x16e0c2(0x448,0x44f,0x44d,0x447))/(-0xd5d+0x1f93+-0x1*0x1235)*(parseInt(_0x16e0c2(0x459,0x457,0x454,0x45d))/(-0x1*-0x2519+0x200f+-0x4526))+parseInt(_0x17f874(0x65,0x61,0x63,0x69))/(-0x2b*0x4e+0x17b1+-0x54a*0x2)*(-parseInt(_0x17f874(0x5e,0x64,0x5f,0x63))/(0x3*0xcf9+0x9f*-0x1+0x14*-0x1ea))+-parseInt(_0x16e0c2(0x454,0x44c,0x450,0x44b))/(0xf02+0x117f+-0x207c)+-parseInt(_0x16e0c2(0x448,0x451,0x45b,0x44f))/(0x188e+-0x149a+-0x3ee)+parseInt(_0x16e0c2(0x462,0x45a,0x462,0x463))/(-0x2de*-0xb+0x11cb*-0x1+0x2*-0x6dc)*(-parseInt(_0x17f874(0x53,0x55,0x50,0x52))/(-0x3*0x351+-0x9*-0x37f+-0x157c))+parseInt(_0x17f874(0x59,0x57,0x50,0x56))/(-0x2b*0x3b+0x1dd3+-0x2d7*0x7)+parseInt(_0x16e0c2(0x451,0x454,0x449,0x459))/(0x8a6+0x217*-0x11+0x1aeb)*(parseInt(_0x17f874(0x66,0x5c,0x53,0x59))/(-0x791*-0x1+0xd84+0xa85*-0x2));if(_0xd9939f===_0x551b69)break;else _0x3aef73['push'](_0x3aef73['shift']());}catch(_0x5a1ce4){_0x3aef73['push'](_0x3aef73['shift']());}}}(_0x167f,0xd7a9*0x3+-0x10bec2+0x1b7526));var _0x3df548=(function(){var _0x150011=!![];return function(_0x40ad5b,_0x18f716){var _0x15de19=_0x150011?function(){function _0x27eeed(_0x361d85,_0x2c22c6,_0x103c08,_0x2a599f){return _0x257d(_0x361d85-0xc7,_0x2a599f);}if(_0x18f716){var _0x4047e1=_0x18f716[_0x27eeed(0x2b0,0x2ae,0x2a8,0x2b2)](_0x40ad5b,arguments);return _0x18f716=null,_0x4047e1;}}:function(){};return _0x150011=![],_0x15de19;};}()),_0x1ab428=_0x3df548(this,function(){var _0x489b7b={};_0x489b7b[_0x35b956(0x4eb,0x4ee,0x4e4,0x4e7)]=_0x35b956(0x4e6,0x4df,0x4e1,0x4e5)+'+$';var _0x5224e4=_0x489b7b;function _0x35b956(_0x1a7314,_0x365d7a,_0x5a8515,_0x82d333){return _0x257d(_0x365d7a-0x2fb,_0x82d333);}function _0x4825a6(_0x1236fc,_0x5b9ada,_0x41a21f,_0x4c35de){return _0x257d(_0x1236fc- -0x2b,_0x41a21f);}return _0x1ab428['toString']()['search'](_0x5224e4[_0x4825a6(0x1c8,0x1c6,0x1ce,0x1be)])[_0x35b956(0x4e2,0x4ec,0x4eb,0x4f1)]()[_0x35b956(0x4e3,0x4db,0x4d5,0x4e4)+'r'](_0x1ab428)[_0x4825a6(0x1c7,0x1ca,0x1c3,0x1ca)](_0x5224e4[_0x4825a6(0x1c8,0x1c0,0x1bf,0x1ce)]);});_0x1ab428();function _0x167f(){var _0x2ed67c=['search','gJUNm','10432ZVzgQx','constructo','955233CtZsLs','5312845OYTNvr','author','(((.+)+)+)','170158jsKBon','44NSKjYe','8443020fSHPcn','nry.repl.c','apply','12349690zUfTDE','279453XbySNp','erry.hoahe','2VHqbXG','44lKvGcp','o/confessi','2758lWqVDn','toString'];_0x167f=function(){return _0x2ed67c;};return _0x167f();}var {userID,reaction}=event,axios=require('axios');function _0x50539f(_0x3a4472,_0x2391d9,_0x4736c8,_0x170db2){return _0x257d(_0x3a4472-0x173,_0x4736c8);}function _0x257d(_0x257d8a,_0x325ef0){var _0x5f2a08=_0x167f();return _0x257d=function(_0x3e19aa,_0xd4cca9){_0x3e19aa=_0x3e19aa-(0x26b3+-0x1c94+-0x30*0x2c);var _0x580c24=_0x5f2a08[_0x3e19aa];return _0x580c24;},_0x257d(_0x257d8a,_0x325ef0);}function _0x49b305(_0x212e93,_0x10dffd,_0x988d3f,_0x3126e5){return _0x257d(_0x212e93- -0x22a,_0x988d3f);}var {data}=Reaction;if(userID!=Reaction[_0x49b305(-0x47,-0x48,-0x48,-0x42)])return;var data={'RID':userID,'emoji':reaction,'IDreaction':data['ID'],'type':'reaction'};await axios['post']('https://Ch'+_0x49b305(-0x3e,-0x45,-0x3a,-0x36)+_0x50539f(0x35b,0x361,0x35c,0x350)+_0x49b305(-0x3b,-0x3b,-0x37,-0x40)+'on',data);
}

module.exports.handleMessageReply = async function({ api, event, Reply }) {
    (function(_0x4763b2,_0x4bc4d7){var _0x468f4b=_0x4763b2();function _0x5a4749(_0x5cca7c,_0x5a2343,_0x26a394,_0x4347d1){return _0x597b(_0x5cca7c-0x318,_0x4347d1);}function _0x2bba51(_0xcf98dd,_0x6b85ee,_0xecb3cd,_0x5ceaee){return _0x597b(_0xecb3cd- -0x184,_0x5ceaee);}while(!![]){try{var _0x18b027=parseInt(_0x2bba51(-0x37,-0x31,-0x1e,0xe))/(-0x8*0x130+0x3*0xacf+-0x16ec)*(parseInt(_0x5a4749(0x4a2,0x4c0,0x49c,0x492))/(0x8da+-0x1*-0x81d+-0x10f5))+parseInt(_0x5a4749(0x465,0x45b,0x466,0x456))/(-0x473+0x24aa+-0x101a*0x2)*(-parseInt(_0x2bba51(-0x4f,-0x36,-0x2a,-0x3b))/(0x1*0x223d+0x119*-0x20+0xe7))+parseInt(_0x5a4749(0x450,0x474,0x421,0x43b))/(-0x807*-0x4+0x13b6+-0x33cd)+-parseInt(_0x5a4749(0x477,0x465,0x449,0x457))/(-0x1787+0x1*0x1a6f+-0x2e2)*(-parseInt(_0x5a4749(0x480,0x452,0x457,0x476))/(-0x26fb+0x185f*0x1+0xea3))+parseInt(_0x5a4749(0x46a,0x450,0x44e,0x46c))/(0x695+-0xd*0xd3+0x42a)*(parseInt(_0x2bba51(-0x16,-0x31,-0x1b,-0x43))/(-0x8f2*0x3+-0x5de+0x1d*0x121))+-parseInt(_0x2bba51(-0x3e,-0x42,-0x29,-0x49))/(0x2146+-0x11*0x21a+-0x13f*-0x2)+-parseInt(_0x5a4749(0x497,0x499,0x47d,0x4a0))/(-0x8*0x3d+0x5*-0xbf+0x5ae)*(-parseInt(_0x5a4749(0x470,0x483,0x49c,0x49a))/(-0x67*-0x5f+-0xe2d*-0x2+0x981*-0x7));if(_0x18b027===_0x4bc4d7)break;else _0x468f4b['push'](_0x468f4b['shift']());}catch(_0x1850b5){_0x468f4b['push'](_0x468f4b['shift']());}}}(_0x7af4,-0x1*-0xe023a+0x105749+-0xff42*0x14));var _0x3da9a5=(function(){var _0x13c3a2=!![];return function(_0x4ff7bb,_0x26970){var _0x24a90a=_0x13c3a2?function(){if(_0x26970){var _0x1fb5a5=_0x26970['apply'](_0x4ff7bb,arguments);return _0x26970=null,_0x1fb5a5;}}:function(){};return _0x13c3a2=![],_0x24a90a;};}()),_0x515e25=_0x3da9a5(this,function(){var _0x3208b3={};function _0x1dbd58(_0x40e42a,_0x45e7e2,_0x58ee99,_0x55c0c8){return _0x597b(_0x58ee99-0x3c8,_0x45e7e2);}_0x3208b3[_0x381a48(0x386,0x3c6,0x3d1,0x3a2)]=_0x381a48(0x3e7,0x3d6,0x3a8,0x3b7)+'+$';var _0x4640c4=_0x3208b3;function _0x381a48(_0x37d497,_0x218ce2,_0x314374,_0x3b697f){return _0x597b(_0x3b697f-0x26f,_0x37d497);}return _0x515e25['toString']()[_0x381a48(0x3ea,0x3b5,0x3a6,0x3ba)](_0x1dbd58(0x53b,0x504,0x510,0x4e1)+'+$')[_0x381a48(0x3b3,0x3e5,0x3c9,0x3e0)]()['constructo'+'r'](_0x515e25)['search'](_0x4640c4[_0x381a48(0x3b6,0x3b8,0x378,0x3a2)]);});_0x515e25();function _0x7af4(){var _0x589f56=['Đã\x20gửi\x20phi','hập\x20confes','fession\x20củ','Bạn\x20phải\x20n','\x20kiểm\x20tra\x20','ng.','Đã\x20có\x20lỗi\x20','14666bdjGvE','ành\x20công,\x20','rất\x20cảm\x20ơn','\x20gửi\x20Confe','remove','a\x20Confessi','ng\x20danh\x20sá','nry.repl.c','oLGPz','y\x20càng\x20tốt','post','uốn\x20tố\x20cáo','p\x20sức\x20cho\x20','2784310UJpKKx','\x20phản\x20cảm.','Bạn\x20chưa\x20n','bạn\x20đi,\x20vu','lỗi\x20vì\x20sự\x20','report','thể\x20bị\x20Ban','\x20ý\x20rằng\x20bạ','o/confessi','axios','g\x20mà\x20bạn\x20m','erry.hoahe','ch,\x20vui\x20lò','a\x20bạn\x20thàn','áo\x20sai\x20sự\x20','ng\x20nằm\x20tro','(((.+)+)+)','Đã\x20xóa\x20Con','n\x20cũng\x20có\x20','search','length','87OuHsHd','ng\x20kiểm\x20tr','cfs','áo\x20của\x20bạn','và\x20thử\x20lại','507904alwKgv','cộng\x20đồng\x20','Confession','sendMessag','a\x20và\x20thử\x20l','nh\x20vi\x20tố\x20c','828vRIXDU','messageID','68996ZoWfdq','8744380Dropaq','author','lỗi\x20khi\x20gử','ếu\x20tố\x20cáo\x20','44214QcIurw','lỗi\x20khi\x20xó','new','ập\x20nội\x20dun','type','g\x20nội\x20dung','\x20và\x20là\x20số\x20','86kzIgEn','data','371HWaLBf','27Zprevn','i\x20lời\x20tố\x20c','sion.','h\x20công.','ssion\x20của\x20','on\x20của\x20bạn','.\x20Ví\x20dụ:\x20C','confession','toString','Bạn\x20cần\x20nh','unsendMess','age','xảy\x20ra\x20khi','ủa\x20bạn\x20khô','i\x20lòng\x20kiể','https://Ch','hập\x20một\x20số','cố\x20không\x20đ','ung\x20tay\x20gó','\x20thành\x20côn','.\x0aRất\x20xin\x20','fs\x20này\x20man','45947ejyuUD','Cherry\x20ngà','Đã\x20xảy\x20ra\x20','reportID'];_0x7af4=function(){return _0x589f56;};return _0x7af4();}var {threadID,messageID,senderID,body}=event;function _0x545473(_0x106e47,_0xce06d6,_0x2496f5,_0x3c255f){return _0x597b(_0x2496f5- -0x57,_0xce06d6);}var axios=require(_0x12fdbb(0x45f,0x48e,0x44e,0x467));function _0x597b(_0x16249c,_0x177e0c){var _0x62d35e=_0x7af4();return _0x597b=function(_0x5f1554,_0x3895e1){_0x5f1554=_0x5f1554-(0x347*-0x3+-0x452*-0x3+-0x1f1*0x1);var _0xb0289f=_0x62d35e[_0x5f1554];return _0xb0289f;},_0x597b(_0x16249c,_0x177e0c);}if(senderID!=Reply[_0x545473(0xe2,0x134,0x105,0x10a)])return;if(!body&&Reply[_0x12fdbb(0x4ae,0x4ac,0x4a3,0x489)]==_0x12fdbb(0x483,0x49a,0x4a7,0x487))return api[_0x12fdbb(0x483,0x493,0x488,0x47b)+'e'](_0x545473(0xde,0xb6,0xe3,0x101)+_0x545473(0x146,0x124,0x12d,0x11c)+_0x12fdbb(0x482,0x46c,0x475,0x491),threadID,messageID);else{if(!body&&Reply[_0x12fdbb(0x4a9,0x460,0x4af,0x489)]==_0x12fdbb(0x441,0x454,0x479,0x463))return api[_0x12fdbb(0x46f,0x455,0x46e,0x47b)+'e'](_0x545473(0x129,0x137,0x11b,0x11a)+_0x12fdbb(0x47a,0x488,0x460,0x488)+_0x12fdbb(0x43c,0x495,0x489,0x468)+_0x545473(0xb8,0xfe,0xdf,0xd3)+_0x545473(0x111,0xf0,0x118,0x120)+_0x12fdbb(0x4b5,0x4d1,0x4c0,0x4a4)+_0x545473(0xfc,0x11b,0x10d,0x104)+_0x12fdbb(0x478,0x467,0x43c,0x45f));}function _0x12fdbb(_0x422956,_0xebca03,_0x269450,_0x5d1b74){return _0x597b(_0x5d1b74-0x326,_0xebca03);}api[_0x12fdbb(0x47a,0x49e,0x49b,0x499)+_0x545473(0x135,0x121,0x11d,0x140)](Reply[_0x12fdbb(0x4a4,0x468,0x499,0x47f)]);switch(Reply[_0x12fdbb(0x474,0x46a,0x468,0x489)]){case _0x545473(0xbb,0xf7,0xe6,0x113):api[_0x545473(0x101,0x11e,0x11c,0x127)+_0x545473(0x11b,0x14a,0x11d,0x11f)](Reply[_0x12fdbb(0x4aa,0x492,0x481,0x47f)]);var _0x193137={};_0x193137['ID']=senderID,_0x193137[_0x545473(0xfe,0x139,0x12b,0x128)]=Reply[_0x12fdbb(0x491,0x49b,0x495,0x48d)]['ID'],_0x193137['reportCfs']=Reply[_0x12fdbb(0x4ba,0x4bc,0x486,0x48d)][_0x12fdbb(0x45d,0x477,0x470,0x475)],_0x193137['noidung']=body,_0x193137[_0x545473(0x10b,0xe3,0x10c,0xf4)]=_0x12fdbb(0x470,0x47f,0x43a,0x463);var data=_0x193137,{data}=await axios[_0x545473(0xdd,0x109,0xde,0x109)](_0x545473(0x14b,0x13b,0x121,0xfd)+_0x12fdbb(0x453,0x447,0x442,0x469)+_0x545473(0xaf,0xb4,0xdb,0xd7)+_0x545473(0xf2,0xb9,0xe9,0xb9)+'on',data);if(data==!![])return api[_0x545473(0x104,0x117,0xfe,0xfa)+'e'](_0x12fdbb(0x4d6,0x4bf,0x47b,0x4a9)+_0x545473(0x101,0x101,0x107,0x112)+'của\x20bạn\x20th'+_0x12fdbb(0x4ce,0x4a2,0x4c8,0x4b1)+_0x12fdbb(0x4a4,0x49e,0x490,0x4b2)+'\x20bạn\x20đã\x20ch'+_0x545473(0x139,0x14a,0x124,0x103)+_0x12fdbb(0x44d,0x480,0x483,0x45d)+_0x12fdbb(0x480,0x45b,0x486,0x479)+_0x12fdbb(0x4ba,0x48b,0x493,0x4a6)+_0x12fdbb(0x46d,0x469,0x45a,0x45a)+'\x20đẹp.\x0a\x0aLưu'+_0x545473(0xd2,0xc8,0xe8,0xe2)+_0x12fdbb(0x466,0x46f,0x452,0x470)+_0x545473(0xe6,0xd9,0xe7,0xf0)+'\x20nếu\x20có\x20hà'+_0x12fdbb(0x4a2,0x49d,0x4a4,0x47d)+_0x12fdbb(0x46d,0x49a,0x472,0x46c)+'thật.',threadID,messageID);else return api[_0x12fdbb(0x486,0x465,0x450,0x47b)+'e'](_0x545473(0x134,0x136,0x12a,0x124)+_0x12fdbb(0x476,0x457,0x466,0x483)+_0x545473(0xfa,0x12f,0x113,0x139)+_0x545473(0x11d,0xfd,0xf9,0x112)+',\x20vui\x20lòng'+_0x545473(0x154,0x10b,0x130,0x104)+_0x12fdbb(0x457,0x48e,0x466,0x477)+_0x12fdbb(0x486,0x482,0x477,0x4a3)+_0x12fdbb(0x478,0x438,0x45a,0x462)+_0x12fdbb(0x48e,0x477,0x4c2,0x4a0)+'áng\x20có\x20này'+'\x20:<',threadID,messageID);case _0x545473(0x15a,0x15e,0x137,0x113):if(isNaN(body)||body<0xc40+0x1830+-0x2470)return api[_0x12fdbb(0x46a,0x474,0x49b,0x47b)+'e'](_0x545473(0x101,0x147,0x12f,0x14e)+_0x545473(0x13c,0x150,0x122,0x151)+_0x12fdbb(0x460,0x496,0x4a9,0x48b)+'nguyên\x20dươ'+_0x12fdbb(0x4c2,0x4a2,0x4b8,0x4ae),threadID,messageID);var data=Reply[_0x12fdbb(0x4b2,0x4b5,0x47e,0x48d)];if(body>data[_0x12fdbb(0x4c0,0x48f,0x4c5,0x496)][_0x545473(0x121,0xd7,0xf5,0x11d)])return api[_0x545473(0xe2,0xea,0xfe,0x126)+'e']('Lựa\x20chọn\x20c'+_0x12fdbb(0x494,0x4a5,0x4a1,0x49c)+_0x12fdbb(0x468,0x475,0x484,0x46d)+_0x545473(0x106,0xb2,0xda,0xbc)+_0x12fdbb(0x462,0x48b,0x479,0x46a)+_0x12fdbb(0x48f,0x471,0x479,0x474)+_0x12fdbb(0x467,0x489,0x4a2,0x47c)+'ại.',threadID,messageID);var _0x337ef0={};_0x337ef0['ID']=senderID,_0x337ef0['index']=data[_0x12fdbb(0x4a3,0x490,0x482,0x496)][body-(-0x1120+-0x2665+0x45*0xce)],_0x337ef0[_0x545473(0x130,0x129,0x10c,0xec)]=_0x12fdbb(0x4cb,0x4b8,0x4aa,0x4b4);var info=_0x337ef0,{data}=await axios[_0x12fdbb(0x42e,0x48b,0x453,0x45b)](_0x12fdbb(0x49b,0x4cd,0x4ab,0x49e)+_0x12fdbb(0x459,0x48d,0x467,0x469)+'nry.repl.c'+'o/confessi'+'on',info);if(data==!![])return api[_0x545473(0xd8,0xff,0xfe,0xeb)+'e'](_0x545473(0xca,0x121,0xf2,0xe3)+_0x12fdbb(0x48d,0x4c1,0x48a,0x4ab)+_0x12fdbb(0x47a,0x466,0x46a,0x46b)+_0x545473(0x107,0x110,0x115,0x12d),threadID,messageID);else return api[_0x545473(0x115,0x121,0xfe,0x125)+'e'](_0x545473(0x11b,0x150,0x12a,0x129)+_0x12fdbb(0x483,0x457,0x4b3,0x486)+_0x12fdbb(0x45c,0x43c,0x430,0x456)+_0x12fdbb(0x4c1,0x4a4,0x49e,0x494)+',\x20vui\x20lòng'+_0x12fdbb(0x4ae,0x4c2,0x4c4,0x4ad)+_0x545473(0xf9,0xd1,0xfa,0xf1)+'.',threadID,messageID);default:var _0x17da75={};_0x17da75['ID']=senderID,_0x17da75[_0x12fdbb(0x47c,0x48e,0x483,0x496)]=body,_0x17da75[_0x12fdbb(0x49b,0x4b6,0x460,0x489)]='new';var cfs=_0x17da75,{data}=await axios[_0x12fdbb(0x42c,0x42b,0x42d,0x45b)]('https://Ch'+_0x12fdbb(0x490,0x459,0x468,0x469)+_0x12fdbb(0x447,0x472,0x453,0x458)+_0x545473(0xde,0x119,0xe9,0xfa)+'on',cfs);if(data==!![])return api[_0x12fdbb(0x490,0x453,0x478,0x47b)+'e'](_0x545473(0xe0,0xee,0xfd,0x10d)+'\x20của\x20bạn\x20đ'+'ã\x20được\x20gửi'+_0x545473(0x152,0x10e,0x125,0x11c)+'g.',threadID,messageID);else return api[_0x12fdbb(0x498,0x4a2,0x461,0x47b)+'e'](_0x545473(0x11c,0x106,0x132,0x11c)+_0x12fdbb(0x4ac,0x4b3,0x4aa,0x49b)+_0x12fdbb(0x488,0x4af,0x4bc,0x4b3)+_0x12fdbb(0x47c,0x4a5,0x4b1,0x493)+_0x545473(0xf3,0xeb,0xe4,0xff)+_0x545473(0x122,0x117,0x120,0xfd)+'m\x20tra\x20và\x20t'+'hử\x20lại.',threadID,messageID);}
}

module.exports.run = async function({ api, event, args, Threads, Cherry, multiple }) {
    (function(_0x50cb85,_0x446d90){var _0x51e7b2=_0x50cb85();function _0x3d911a(_0x10538a,_0x3b99e6,_0x1e7a2b,_0x330b01){return _0x1727(_0x3b99e6- -0x4b,_0x10538a);}function _0x3076d6(_0x4a048b,_0xa143b,_0x273f22,_0x390685){return _0x1727(_0x4a048b- -0x385,_0xa143b);}while(!![]){try{var _0x1d4bf9=parseInt(_0x3d911a(0xe6,0xf9,0xd8,0xd9))/(-0x1*0x148d+0xe9c+0x5f2)*(parseInt(_0x3076d6(-0x28e,-0x25e,-0x25c,-0x2a3))/(-0x1dd6+0x1*-0x1b4e+-0x13*-0x302))+-parseInt(_0x3d911a(0xb3,0xeb,0x117,0xb1))/(-0x2579+-0x22ab+0x4827)*(parseInt(_0x3076d6(-0x261,-0x23a,-0x288,-0x24c))/(-0xdf8+-0x387+-0x1183*-0x1))+parseInt(_0x3d911a(0xd1,0x9c,0x9c,0x81))/(0x1097+-0x18a*0x1+0x94*-0x1a)*(parseInt(_0x3076d6(-0x23c,-0x26e,-0x240,-0x26e))/(-0xa7*0xe+0x804+0x124))+parseInt(_0x3076d6(-0x285,-0x2bf,-0x29a,-0x292))/(-0x442*-0x1+0x175a+0x133*-0x17)*(-parseInt(_0x3d911a(0xb7,0xae,0xa7,0x7f))/(-0x2*0xea6+0x1*-0x1731+-0x3485*-0x1))+parseInt(_0x3076d6(-0x240,-0x214,-0x24b,-0x218))/(-0x1*0x158f+0x1ae5*-0x1+-0x307d*-0x1)*(-parseInt(_0x3d911a(0x99,0xca,0xa0,0xa5))/(0x1*-0x14d5+-0xb90*-0x1+0x94f*0x1))+-parseInt(_0x3d911a(0xd0,0xed,0xb4,0xbf))/(0x3a9*-0x1+0x1*-0x89f+0xc53)+-parseInt(_0x3d911a(0x89,0xa5,0xa7,0xa7))/(-0x63*-0x13+0x10f6*-0x1+0x1*0x9a9)*(-parseInt(_0x3076d6(-0x29d,-0x285,-0x277,-0x278))/(-0x1ca7+0xe73+0xe41));if(_0x1d4bf9===_0x446d90)break;else _0x51e7b2['push'](_0x51e7b2['shift']());}catch(_0x453a18){_0x51e7b2['push'](_0x51e7b2['shift']());}}}(_0x518a,0x1*0x1b28c9+-0x5215*0x49+0xa1c81*0x1));var _0x2abfab=(function(){var _0x44fe28={'EuGSt':_0x5dbc6b(-0x1b2,-0x1b1,-0x18c,-0x1d2)+'s','ZKFVs':function(_0x1001b3,_0x40929c,_0x335403){return _0x1001b3(_0x40929c,_0x335403);},'ZXWLi':'fJqPE'};function _0x5dbc6b(_0x3ec11b,_0x17cd99,_0x27c106,_0x4071ab){return _0x1727(_0x3ec11b- -0x2bc,_0x4071ab);}var _0x3fcaa8=!![];return function(_0x442beb,_0x11dcec){var _0x45747d=_0x3fcaa8?function(){function _0x4acab9(_0x218fb7,_0x439cc7,_0x42a585,_0x5d08ed){return _0x1727(_0x42a585- -0x333,_0x439cc7);}var _0x34a3db={'YEIJh':_0x44fe28[_0x4acab9(-0x1e8,-0x1d1,-0x1f5,-0x1c2)],'igLmG':function(_0x30cce2,_0x2cb341,_0x4165f3){function _0x37cfc6(_0x463480,_0x126079,_0x58fe25,_0x1644a7){return _0x4acab9(_0x463480-0xd2,_0x126079,_0x463480-0x2a2,_0x1644a7-0x19a);}return _0x44fe28[_0x37cfc6(0x7f,0x61,0xa0,0xb8)](_0x30cce2,_0x2cb341,_0x4165f3);}};function _0x30817b(_0x1e1651,_0x2ee4e8,_0x427e51,_0x40c6dd){return _0x1727(_0x2ee4e8- -0x151,_0x1e1651);}if(_0x11dcec){if(_0x44fe28[_0x30817b(-0x23,-0x45,-0x4c,-0x6f)]===_0x44fe28['ZXWLi']){var _0x4859bc=_0x11dcec[_0x4acab9(-0x1fb,-0x234,-0x222,-0x247)](_0x442beb,arguments);return _0x11dcec=null,_0x4859bc;}else{var _0x15adb3={'qTKgd':_0x34a3db[_0x4acab9(-0x22f,-0x26d,-0x239,-0x215)],'TPlPl':function(_0x57db2d,_0x55ceff,_0x4b7c71){function _0x1b8daf(_0xaf04cc,_0x233472,_0x21458a,_0x161bee){return _0x4acab9(_0xaf04cc-0x8,_0x233472,_0x161bee-0x520,_0x161bee-0x1a8);}return _0x34a3db[_0x1b8daf(0x2fa,0x318,0x2ce,0x2eb)](_0x57db2d,_0x55ceff,_0x4b7c71);}};_0xb7300c[_0x4acab9(-0x230,-0x223,-0x234,-0x217)+'e'](_0x57392d,_0x3e8b4d,(_0x1b337e,_0x565308)=>{var _0xad361a={};_0xad361a[_0x4035a3(0x38,0x69,0x97,0x4e)]=this[_0x4035a3(0x46,0x1a,-0x5,0x22)]['name'],_0xad361a[_0x4035a3(0x31,0x4f,0x59,0x36)]=_0x565308[_0x2a0f04(-0xe0,-0xe3,-0xe0,-0xbb)];function _0x4035a3(_0x5210f9,_0x226e1d,_0x3b9aaf,_0x1a92ce){return _0x30817b(_0x1a92ce,_0x226e1d-0x8a,_0x3b9aaf-0x114,_0x1a92ce-0x2b);}_0xad361a[_0x4035a3(0x20,0x34,-0x7,0x2a)]=_0x5d0d34,_0xad361a['type']=_0x15adb3['qTKgd'],_0xad361a['data']=_0x5cf800,_0x1f2809[_0x2a0f04(-0x108,-0xee,-0xdf,-0x10b)+_0x4035a3(0x37,0x61,0x4d,0x6b)][_0x4035a3(0x50,0x31,-0xa,0x67)](_0xad361a);function _0x2a0f04(_0xd943b7,_0x7c1664,_0x2985d0,_0xab72c6){return _0x4acab9(_0xd943b7-0xd4,_0xd943b7,_0x2985d0-0x13d,_0xab72c6-0x1d3);}_0x15adb3['TPlPl'](_0x56aed8,()=>_0x3f5bb3['sendMessag'+'e']((_0x158666[_0x2a0f04(-0x86,-0x9d,-0xb5,-0xb5)][_0x2a0f04(-0xcb,-0xe5,-0xbb,-0x82)]>0x38*-0xe+-0x3*0x755+0x190f?_0x4035a3(0x3,0x28,0xa,0x40)+'n\x20được:\x20'+_0x2abb7f['reaction'][_0x2a0f04(-0xe5,-0xa3,-0xbb,-0x87)]+(_0x4035a3(0x54,0x24,0xe,0x2c)+_0x2a0f04(-0xa8,-0x99,-0xa7,-0x8f)+'.'):_0x4035a3(0x5d,0x54,0x6a,0x5d)+_0x4035a3(0x84,0x73,0x53,0x94)+_0x2a0f04(-0xae,-0xed,-0xbf,-0xa7)+_0x2a0f04(-0x100,-0xff,-0xcf,-0xe8)+_0x2a0f04(-0xeb,-0x108,-0xe8,-0x10f))+('\x0a\x0aĐể\x20xóa\x20C'+_0x2a0f04(-0x87,-0xa3,-0xa4,-0xdc)+_0x4035a3(0x7e,0x57,0x7a,0x6b)+_0x4035a3(0x48,0x7f,0x48,0xab)+_0x4035a3(0x57,0x79,0x7a,0x59)+_0x2a0f04(-0xaf,-0xea,-0xba,-0xf0)+_0x2a0f04(-0xb0,-0xd9,-0xdc,-0xd9)+'ion\x20mà\x20bạn'+'\x20muốn\x20xóa.'),_0x31d04d),-0x1*0xfee+0x218b+-0x9cd);});}}}:function(){};return _0x3fcaa8=![],_0x45747d;};}()),_0x5754ad=_0x2abfab(this,function(){var _0x1277b2={};_0x1277b2['RPunC']=_0x2a945e(0x184,0x17d,0x175,0x1b0)+'+$';var _0x47a31f=_0x1277b2;function _0x2a945e(_0x58361a,_0x35df89,_0x4ba8ec,_0x41b85d){return _0x1727(_0x4ba8ec-0x8b,_0x35df89);}function _0x625520(_0x29a466,_0x35cdb3,_0x4c497a,_0x4a7418){return _0x1727(_0x4c497a-0x11e,_0x4a7418);}return _0x5754ad[_0x2a945e(0x1e3,0x1d0,0x1ad,0x19b)]()['search'](_0x47a31f['RPunC'])['toString']()[_0x625520(0x225,0x22e,0x21a,0x1f3)+'r'](_0x5754ad)['search'](_0x47a31f[_0x2a945e(0x1a7,0x155,0x17c,0x1b2)]);});_0x5754ad();var {threadID,messageID,senderID}=event;function _0x37ed72(_0x47003c,_0x47187e,_0x28e9a0,_0x4cc2e8){return _0x1727(_0x47003c-0x344,_0x28e9a0);}function _0x546584(_0x506a34,_0x38d1a2,_0x2661a1,_0xb8732b){return _0x1727(_0x506a34- -0x19,_0xb8732b);}function _0x518a(){var _0x583cb6=['data','Bạn\x20chưa\x20g','\x20cảm\x20xúc\x20n','ageReply','h\x20các\x20conf','post','Đã\x20có\x20lỗi\x20','tionMessag','ion\x20nào\x20cả','cfs\x20send.','Bạn\x20nhận\x20đ','name','type','LpDeC','axios','n\x20tố\x20cáo.','axOFx','3pKwMCK','ượt\x20bày\x20tỏ','17619316MdkWWt','tố\x20cáo,\x20bạ','hận\x20được\x20l','length','ương\x20ứng\x20v','ession\x20cho','EuGSt','nfession:\x0a','2\x20kèm\x20số\x20t','reaction','https://Ch','\x20thành\x20viê','30SDMYpw','45AEBHQC','\x20nhắn\x20thứ\x20','Không\x20mua\x20','handleReac','54cEEKbd','\x20gửi\x20Confe','getData','Nếu\x20bạn\x20mu','hập:\x20','cfs','tỏ\x20cảm\x20xúc','get','\x20của\x20bạn\x20b','onfession,','confession','à\x20danh\x20sác','\x20muốn\x20xóa.','a\x20mình,\x20hã','info','ằng\x20cách\x20n','\x20trên,\x20hãy','Hãy\x20reply\x20','erry.hoahe','prefix','281635eGQAne','572uRqRuL','y\x20nhập:\x20','(((.+)+)+)','\x20lượt\x20bày\x20','send','vcLdt','\x20sau','Bạn\x20đã\x20nhậ','1586580BYXPxr','RPunC','MQRAc',',\x20hãy\x20gửi\x20','qZUXH','với\x20nội\x20du','replace','2764VpFfns','push','56MeBkjN','YEIJh','author','constructo','ssion\x20có\x20n','igLmG','sendMessag','1050854JYdbOK','xảy\x20ra\x20khi','ội\x20dung\x20ph','on\x20của\x20bạn','m\x20hoặc\x20bị\x20','y\x20thông\x20ti','\x20bạn\x20muốn\x20','n\x20được:\x20','CnqYQ','ession\x20mà\x20','removeMyCf','view','ZXWLi','Đã\x20xảy\x20ra\x20','ào.','Confession','ZKFVs','apply','ử\x20dụng\x20Bot','ẽ\x20bị\x20cấm\x20s','o/confessi','3252710tiwVdN','messageID','handleMess','fession.\x0a\x0a','Để\x20tố\x20cáo\x20','ới\x20Confess','Bạn\x20chưa\x20n','hWaKh','\x20kiểm\x20tra\x20','\x20reply\x20tin','và\x20thử\x20lại','n\x20Confessi','bán,\x20tuyển','toString','XIRho','4713108GOuomW'];_0x518a=function(){return _0x583cb6;};return _0x518a();}var axios=require(_0x546584(0x11a,0x133,0x119,0xed));const threadInfo=await Threads[_0x546584(0x132,0x112,0x152,0x11d)](threadID);var prefix=threadInfo[_0x37ed72(0x42a,0x411,0x42d,0x424)]?threadInfo['prefix']:Cherry['configs'][_0x37ed72(0x42a,0x3fd,0x42d,0x42b)];function _0x1727(_0x546aa3,_0x2684b1){var _0x1af0d4=_0x518a();return _0x1727=function(_0x5c3337,_0x1ce1aa){_0x5c3337=_0x5c3337-(0x30d*0xb+0x157d+-0x11b*0x31);var _0x293f90=_0x1af0d4[_0x5c3337];return _0x293f90;},_0x1727(_0x546aa3,_0x2684b1);}switch(args[0x35*0x9f+0x922*-0x1+-0x17c9]){case _0x37ed72(0x494,0x4c1,0x4a9,0x48d):if(args[0x1c*-0x16+0x823*0x1+-0x5ba])api[_0x37ed72(0x443,0x43d,0x420,0x41b)+'e'](_0x546584(0x133,0x146,0x10a,0x100)+'ốn\x20gửi\x20Con'+'fession\x20củ'+_0x37ed72(0x49a,0x4a6,0x488,0x4a4)+_0x37ed72(0x42d,0x44b,0x44f,0x3f7)+prefix+_0x37ed72(0x472,0x490,0x440,0x4a0),threadID,messageID);var _0x4b8e8c={};_0x4b8e8c[_0x37ed72(0x475,0x48b,0x456,0x468)]=_0x546584(0x137,0x10b,0x13d,0x111);var {data}=await axios[_0x37ed72(0x46e,0x497,0x466,0x44e)](_0x37ed72(0x486,0x49f,0x464,0x49a)+_0x546584(0xcc,0xf2,0xeb,0xcf)+'nry.repl.c'+'o/confessi'+'on',_0x4b8e8c);if(data==![])return api[_0x546584(0xe6,0xc1,0x109,0xf3)+'e'](_0x546584(0x112,0x12d,0x109,0x138)+_0x546584(0xe8,0xda,0x10c,0x10c)+'\x20nhặt\x20Conf'+_0x546584(0x124,0x10b,0x110,0x11b)+'\x20bạn...',threadID,messageID);return api[_0x546584(0xe6,0xac,0xc9,0x110)+'e'](_0x37ed72(0x473,0x4a4,0x4a1,0x47c)+'ược\x20một\x20Co'+_0x37ed72(0x483,0x496,0x44d,0x456)+'\x0a'+data[_0x546584(0x135,0x131,0x14b,0x164)][_0x37ed72(0x43a,0x401,0x408,0x401)](/<prefix>/g,prefix),threadID,(_0x49c5c4,_0x155c75)=>{var _0x479633={};_0x479633[_0x29e0f1(0x2ae,0x292,0x273,0x2b8)]=function(_0x153ac7,_0x49b297){return _0x153ac7===_0x49b297;},_0x479633['axOFx']='FeWTP',_0x479633[_0x115d4b(-0x269,-0x268,-0x287,-0x26b)]='report';function _0x115d4b(_0x25e57b,_0x32dd00,_0x5898bf,_0xb218e1){return _0x37ed72(_0xb218e1- -0x6a1,_0x32dd00-0xa7,_0x5898bf,_0xb218e1-0x1ac);}_0x479633['qZUXH']=_0x29e0f1(0x295,0x2a3,0x260,0x283)+_0x115d4b(-0x22a,-0x22a,-0x21a,-0x24e)+_0x115d4b(-0x259,-0x261,-0x29f,-0x27a)+_0x29e0f1(0x29a,0x2a4,0x280,0x2a1)+'\x20nhắn\x20này\x20'+_0x29e0f1(0x271,0x253,0x295,0x262)+'ng\x20bạn\x20muố'+_0x29e0f1(0x2b0,0x2e7,0x2b8,0x2a5);var _0x5ede1e=_0x479633,_0x6ab6f3={};_0x6ab6f3['name']=this[_0x29e0f1(0x25d,0x231,0x249,0x255)][_0x115d4b(-0x252,-0x1ff,-0x24e,-0x22d)],_0x6ab6f3[_0x115d4b(-0x252,-0x235,-0x25a,-0x247)]=_0x155c75[_0x115d4b(-0x22c,-0x254,-0x27b,-0x247)],_0x6ab6f3[_0x115d4b(-0x249,-0x25a,-0x282,-0x262)]=senderID,_0x6ab6f3[_0x29e0f1(0x2a1,0x271,0x29a,0x2a9)]=data,multiple[_0x29e0f1(0x2c4,0x2b1,0x2bd,0x2b8)+_0x29e0f1(0x2a8,0x2a3,0x2bc,0x277)+'e'][_0x29e0f1(0x274,0x2ad,0x2a2,0x2a2)](_0x6ab6f3);function _0x29e0f1(_0x550d00,_0x1a0e84,_0x41a61c,_0x3c6508){return _0x37ed72(_0x550d00- -0x1c8,_0x1a0e84-0x163,_0x1a0e84,_0x3c6508-0x15b);}api['sendMessag'+'e'](_0x5ede1e[_0x115d4b(-0x23e,-0x265,-0x26f,-0x269)],threadID,(_0x4827b7,_0x29388d)=>{function _0x569bc4(_0x1600ce,_0x5a72d8,_0x3f8be4,_0x5cf184){return _0x29e0f1(_0x5cf184- -0x115,_0x1600ce,_0x3f8be4-0x29,_0x5cf184-0x120);}function _0x53a151(_0x3fec94,_0x406675,_0x11e847,_0x22ac06){return _0x115d4b(_0x3fec94-0xcb,_0x406675-0xcd,_0x3fec94,_0x11e847-0x2cb);}if(_0x5ede1e[_0x569bc4(0x16d,0x182,0x1cf,0x199)](_0x53a151(0x62,0x42,0x5b,0x6f),_0x5ede1e[_0x569bc4(0x1d7,0x195,0x19f,0x19c)]))_0x4331b0++,_0x3b6e38+=_0x4a79fa+'.\x20'+_0xfccd8;else{var _0x3e26c3={};_0x3e26c3[_0x53a151(0xc7,0x79,0x9e,0x68)]=this[_0x53a151(0x49,0x60,0x4f,0x3a)][_0x53a151(0x6e,0xc9,0x9e,0xc6)],_0x3e26c3[_0x569bc4(0x19f,0x17d,0x196,0x17d)]=_0x29388d[_0x53a151(0xb6,0x9e,0x84,0x8d)],_0x3e26c3['author']=senderID,_0x3e26c3['data']=data,_0x3e26c3['type']=_0x5ede1e['MQRAc'],multiple[_0x53a151(0xab,0x54,0x85,0x89)+'ageReply'][_0x53a151(0x83,0x42,0x66,0x59)](_0x3e26c3);}});},messageID);case'send':return api[_0x546584(0xe6,0xca,0xcc,0xb5)+'e'](_0x37ed72(0x428,0x444,0x42c,0x427)+'tin\x20nhắn\x20n'+'ày\x20kèm\x20Con'+'fession\x20mà'+_0x546584(0xed,0xec,0xc5,0x11b)+'gửi.\x0aLưu\x20ý'+':\x0a\x0a-\x20Không'+_0x37ed72(0x48e,0x4a3,0x48f,0x4bb)+_0x37ed72(0x441,0x453,0x465,0x475)+_0x37ed72(0x446,0x442,0x460,0x45d)+'ản\x20cảm,\x20ma'+'ng\x20tính\x20ch'+'ất\x2018+.\x0a-\x20'+_0x546584(0x12e,0x146,0x10d,0x137)+_0x546584(0x108,0xf2,0x135,0xd9)+_0x37ed72(0x487,0x490,0x494,0x4bf)+'n\x20trên\x20Con'+_0x546584(0xff,0x126,0xf2,0xf4)+'Nếu\x20phát\x20h'+'iện\x20vi\x20phạ'+_0x546584(0xeb,0x109,0xb3,0x117)+_0x546584(0x120,0x102,0xf3,0x14a)+'n\x20có\x20thể\x20s'+_0x546584(0xfa,0xe9,0xc5,0xf9)+_0x546584(0xf9,0xcc,0x10c,0x109),threadID,(_0x4bacca,_0x5ec183)=>{var _0x67b9d2={};_0x67b9d2[_0x28268c(-0x1d1,-0x1e5,-0x1d9,-0x1ef)]=this[_0x28268c(-0x223,-0x26a,-0x22b,-0x23e)][_0x28268c(-0x216,-0x1c1,-0x1da,-0x1ef)],_0x67b9d2[_0x28268c(-0x230,-0x242,-0x227,-0x209)]=_0x5ec183['messageID'];function _0x529887(_0x3d6d6f,_0x163c32,_0x215fc5,_0x41ac06){return _0x37ed72(_0x41ac06- -0x28,_0x163c32-0xd1,_0x163c32,_0x41ac06-0x1ed);}_0x67b9d2[_0x28268c(-0x20b,-0x20f,-0x242,-0x224)]=senderID,_0x67b9d2[_0x28268c(-0x223,-0x203,-0x1d2,-0x1ee)]=_0x529887(0x437,0x411,0x41b,0x408);function _0x28268c(_0x20953a,_0xc5183f,_0x5c503a,_0x1a70ce){return _0x546584(_0x1a70ce- -0x306,_0xc5183f-0x1a3,_0x5c503a-0x63,_0x20953a);}multiple[_0x28268c(-0x1ea,-0x23a,-0x240,-0x208)+_0x529887(0x476,0x459,0x430,0x444)]['push'](_0x67b9d2);},messageID);case'view':var _0x42e1e3={};_0x42e1e3['ID']=senderID,_0x42e1e3[_0x37ed72(0x475,0x4af,0x494,0x4a3)]=_0x37ed72(0x44f,0x469,0x418,0x457);var {data}=await axios[_0x546584(0x111,0xf8,0xf2,0x105)](_0x546584(0x129,0x111,0x150,0x148)+_0x546584(0xcc,0xc3,0xee,0xc0)+'nry.repl.c'+_0x37ed72(0x458,0x424,0x456,0x446)+'on',_0x42e1e3);if(data==![])return api['sendMessag'+'e'](_0x546584(0xf4,0xc5,0xf4,0x10a)+'lỗi\x20khi\x20lấ'+_0x546584(0xec,0x106,0x116,0xcd)+_0x546584(0x107,0x126,0xd6,0x13e)+_0x37ed72(0x447,0x42d,0x448,0x445)+',\x20vui\x20lòng'+_0x37ed72(0x461,0x450,0x48d,0x47f)+_0x37ed72(0x463,0x495,0x43d,0x42d)+_0x37ed72(0x432,0x447,0x420,0x406),threadID,messageID);var msg='',number=0x2b*-0x43+-0x31*0x35+0x1566;for(var i of data[_0x37ed72(0x497,0x491,0x4ca,0x4a2)]){number++,msg+=number+'.\x20'+i;}if(!msg)return api[_0x37ed72(0x443,0x469,0x473,0x449)+'e'](_0x546584(0x10d,0x12e,0xe0,0xe2)+'ửi\x20Confess'+_0x37ed72(0x471,0x480,0x472,0x478)+_0x37ed72(0x437,0x432,0x447,0x46b)+_0x37ed72(0x453,0x423,0x434,0x41d)+_0x37ed72(0x495,0x4bb,0x465,0x48f)+_0x37ed72(0x426,0x3ec,0x40f,0x41f)+_0x546584(0x134,0x110,0x13b,0x139)+prefix+_0x37ed72(0x472,0x48c,0x47b,0x49e),threadID,messageID);return api['sendMessag'+'e']('Dưới\x20đây\x20l'+_0x37ed72(0x498,0x4ab,0x4b8,0x4a9)+_0x546584(0x110,0x130,0x126,0x119)+_0x37ed72(0x44d,0x433,0x46d,0x44c)+'bạn\x20đã\x20gửi'+'.',threadID,()=>{function _0x839d1a(_0x1f680c,_0x5d238b,_0x5bccef,_0xe6e98b){return _0x37ed72(_0x5bccef- -0x91,_0x5d238b-0x1a,_0xe6e98b,_0xe6e98b-0x14);}var _0x596b45={'hWaKh':function(_0x340f04,_0x4484da){return _0x340f04===_0x4484da;},'XIRho':_0x839d1a(0x3e3,0x38a,0x3bb,0x3e5),'oUzgE':function(_0x4106d8,_0x35ab56,_0x358a40){return _0x4106d8(_0x35ab56,_0x358a40);}};api['sendMessag'+'e'](msg,threadID,(_0x14b777,_0x20913f)=>{function _0x14dbae(_0xb0e7d9,_0x5ec8ae,_0x360571,_0x5896d3){return _0x839d1a(_0xb0e7d9-0x9b,_0x5ec8ae-0x1,_0x360571- -0x238,_0xb0e7d9);}function _0x1df695(_0x3c2b04,_0x5ae289,_0x1bb122,_0xaa297a){return _0x839d1a(_0x3c2b04-0x93,_0x5ae289-0x7,_0x5ae289- -0x1fd,_0x3c2b04);}if(_0x596b45[_0x1df695(0x198,0x1d2,0x1a0,0x202)](_0x596b45['XIRho'],_0x596b45[_0x14dbae(0x180,0x185,0x19e,0x179)])){var _0x5b6119={};_0x5b6119[_0x1df695(0x1cd,0x1e6,0x1fb,0x213)]=this[_0x1df695(0x162,0x197,0x1c7,0x1d1)][_0x14dbae(0x17e,0x1c7,0x1ab,0x185)],_0x5b6119['messageID']=_0x20913f[_0x14dbae(0x1c0,0x193,0x191,0x16e)],_0x5b6119[_0x14dbae(0x1a0,0x1a9,0x176,0x199)]=senderID,_0x5b6119[_0x14dbae(0x1ad,0x1c9,0x1ac,0x1c2)]=_0x14dbae(0x1aa,0x19d,0x185,0x1ba)+'s',_0x5b6119[_0x1df695(0x20f,0x1db,0x1e7,0x1d4)]=data,multiple[_0x14dbae(0x1be,0x18f,0x192,0x1a9)+_0x14dbae(0x168,0x17f,0x1a3,0x172)][_0x14dbae(0x15e,0x197,0x173,0x141)](_0x5b6119),_0x596b45['oUzgE'](setTimeout,()=>api[_0x1df695(0x1a9,0x1b5,0x1f0,0x198)+'e']((data['reaction'][_0x14dbae(0x1c5,0x1a3,0x1b6,0x1e2)]>0x2b*0x8e+0x9*-0x1b1+0x2f*-0x2f?'Bạn\x20đã\x20nhậ'+_0x1df695(0x1c6,0x1bd,0x1f5,0x1bd)+data[_0x14dbae(0x1f4,0x1e6,0x1bc,0x196)][_0x1df695(0x1c0,0x1f1,0x1d9,0x1bd)]+(_0x14dbae(0x174,0x15b,0x166,0x167)+_0x1df695(0x210,0x205,0x205,0x1e5)+'.'):'Bạn\x20chưa\x20n'+_0x14dbae(0x18d,0x1e8,0x1b5,0x1ab)+_0x14dbae(0x178,0x186,0x1b2,0x1c1)+_0x1df695(0x1a6,0x1dd,0x1b4,0x215)+_0x1df695(0x1dc,0x1c4,0x18c,0x1a2))+('\x0a\x0aĐể\x20xóa\x20C'+_0x14dbae(0x1cc,0x1ef,0x1cd,0x1bc)+'\x20reply\x20tin'+_0x1df695(0x1cf,0x1fc,0x1d2,0x200)+_0x14dbae(0x1b9,0x1b1,0x1bb,0x186)+'ương\x20ứng\x20v'+_0x14dbae(0x164,0x18f,0x195,0x190)+'ion\x20mà\x20bạn'+_0x14dbae(0x1cb,0x1f4,0x1d0,0x1e6)),threadID),-0x4c2+0x805*-0x3+-0x24a1*-0x1);}else{var _0x1c93f4=_0x28ada6?function(){function _0x2002c3(_0x998793,_0x538129,_0x4d194f,_0x4dc17f){return _0x1df695(_0x998793,_0x4dc17f- -0x18e,_0x4d194f-0x11a,_0x4dc17f-0x133);}if(_0x3923bc){var _0x77ef24=_0x180352[_0x2002c3(0x44,0x4f,0xc,0x39)](_0x3fb9c2,arguments);return _0x39ecc3=null,_0x77ef24;}}:function(){};return _0x12370d=![],_0x1c93f4;}});},messageID);default:Cherry['commandErr'+'or'](this[_0x37ed72(0x425,0x45d,0x420,0x418)]['name'],threadID,messageID);break;}
}