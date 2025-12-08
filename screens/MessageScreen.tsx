import React, { useState } from 'react';
import { UserPlus, ChevronRight, Search } from 'lucide-react';

const MessageScreen: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-[#F5F6F8] pb-24 font-sans">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-3 flex justify-between items-center sticky top-0 z-30 shadow-[0_1px_0px_rgba(0,0,0,0.05)]">
        <div className="w-10"></div> {/* Spacer */}
        <span className="text-[17px] font-medium text-[#333]">群发消息</span>
        <button className="text-primary font-medium text-[15px] px-2">发送</button>
      </div>

      <div className="p-4 space-y-4">
        {/* Recipient Input */}
        <div className="bg-white rounded-lg px-4 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center text-[15px] flex-1">
            <span className="text-[#333] font-medium mr-2">接收人：</span>
            <span className="text-gray-400 font-normal">请添加</span>
          </div>
          <UserPlus className="text-[#333]" size={20} strokeWidth={1.5} />
        </div>

        {/* Message Content */}
        <div className="bg-white rounded-lg p-4 shadow-sm h-72 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#333] font-medium text-[15px]">消息内容</span>
            <div className="flex items-center text-[#333] text-[13px] cursor-pointer active:opacity-70">
              <span>选择消息模版</span>
              <ChevronRight size={14} className="text-primary ml-1" />
            </div>
          </div>
          
          <textarea
            className="flex-1 w-full resize-none outline-none text-[14px] placeholder-gray-400 leading-relaxed"
            placeholder="请输入您要发送的内容"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          
          <div className="text-right text-gray-400 text-xs mt-2">
            {message.length}/200
          </div>
        </div>

        {/* Info / QR Section */}
        <div className="mt-10 flex flex-row items-start justify-between px-2">
          <div className="flex-1 pr-6 pt-1">
             <div className="flex items-center space-x-2 mb-3 text-gray-400">
                <span className="text-[13px]">💡 友情提示</span>
             </div>
             <p className="text-[12px] text-gray-400 leading-6 text-justify">
               团员扫描二维码关注“全国旅游监管服务”公众号，即可在公众号里接收导游推送的群发消息哦！
             </p>
          </div>
          
          <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100 shrink-0">
             {/* QR Code */}
             <div className="w-24 h-24 relative bg-white">
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TourGuideApp" 
                 alt="QR Code"
                 className="w-full h-full object-contain"
               />
               {/* Center Logo Overlay */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm">
                  <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-[6px] text-white">旅</span>
                  </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MessageScreen;