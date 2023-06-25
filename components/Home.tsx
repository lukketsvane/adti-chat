import { useState } from 'react';
import Chat from '@/components/Chat';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleChatOpen = () => setIsChatOpen(true);
  const handleChatClose = () => setIsChatOpen(false);

  return (
    <div className="p-4">
      {/* Your other Home component code here */}
      
      {!isChatOpen && (
        <button
          className="fixed bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          onClick={handleChatOpen}
        >
          Chat
        </button>
      )}

      {isChatOpen && <Chat onClose={handleChatClose} />}
    </div>
  );
}
