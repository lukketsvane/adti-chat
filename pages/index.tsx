import { useState } from 'react';
import Layout from '@/components/layout';
import Chat from '@/components/Chat-window';
import FullPageIframe from '@/components/FullPageIframe';

export default function Home() {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <Layout>
      <div className="fixed z-10 bottom-4 right-4 md:bottom-6 md:right-6">
        <button
          onClick={toggleChat}
        >
        </button>
      </div>
      <div style={{position: 'relative'}}>
        <FullPageIframe src="https://v2-embednotion.com/ad42171d5f944ecb8b21620672ff8e4b?v=26b4c0b906254070888d894b8fe51bc5" />
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}></div>
      </div>
      {chatVisible && (
        <div className="fixed inset-0 z-20 w-full h-full md:w-80 md:h-96 md:right-4 md:bottom-4 md:top-auto md:left-auto overflow-auto bg-white p-4 shadow-lg rounded-lg">
          <Chat onClose={toggleChat} />
        </div>
      )}
    </Layout>
  );
}
