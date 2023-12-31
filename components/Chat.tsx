// components/Chat.tsx
import { useRef, useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import { Message } from '@/types/chat';
import ReactMarkdown from 'react-markdown';
import LoadingDots from '@/components/ui/LoadingDots';
import { Document } from 'langchain/document';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Chat({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [messageState, setMessageState] = useState<{
    messages: Message[];
    pending?: string;
    history: [string, string][];
    pendingSourceDocs?: Document[];
  }>({
    messages: [
      {
        message: 'Hi, what would you like to learn about this document?',
        type: 'apiMessage',
      },
    ],
    history: [],
  });

  const { messages, history } = messageState;

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  //handle form submission
  async function handleSubmit(e: any) {
    e.preventDefault();

    setError(null);

    if (!query) {
      alert('Please input a question');
      return;
    }

    const question = query.trim();

    setMessageState((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          type: 'userMessage',
          message: question,
        },
      ],
    }));

    setLoading(true);
    setQuery('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          history,
        }),
      });
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setMessageState((state) => ({
          ...state,
          messages: [
            ...state.messages,
            {
              type: 'apiMessage',
              message: data.text,
              sourceDocs: data.sourceDocuments.slice(0, 2),
            },
          ],
          history: [...state.history, [question, data.text]],
        }));
      }

      setLoading(false);

      //scroll to bottom
      messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight);
    } catch (error) {
      setLoading(false);
      setError('An error occurred while fetching the data. Please try again.');
    }
  }

  //prevent empty submissions
  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && query) {
      handleSubmit(e);
    } else if (e.key == 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className="fixed bottom-2 right-2 w-1/4 h-3/5 bg-white shadow-xl flex flex-col p-4 rounded">
      <div className="flex justify-between items-center">
        <button className="text-xl text-gray-200 rounded-full" onClick={onClose}>X</button>
      </div>
      <div className="flex-1 mt-2 overflow-y-auto" ref={messageListRef}>
        {messages.map((message, index) => (
          <div key={index} className={`p-2 rounded ${message.type === 'userMessage' ? 'bg-blue-100' : 'bg-gray-100'} my-2`}>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        ))}
        {error && (
          <div className="bg-red-100 p-2 rounded mt-2">
            <p className="text-red-600">{error}</p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-2">
        <textarea
          className="w-full h-20 p-2 border rounded"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleEnter}
          value={query}
          ref={textAreaRef}
        />
        <button type="submit" className="mt-2 w-full py-2 bg-blue-500 text-white rounded">
          {loading ? <LoadingDots color="white" /> : 'Send'}
        </button>
      </form>
    </div>
  );
}
