import React, { useState } from 'react';
import { HiChat, HiX, HiPaperAirplane } from 'react-icons/hi';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Jeevan’s AI assistant. Ask me anything about his skills, projects, or education!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    // Simulated AI responses based on Jeevan's resume/projects
    setTimeout(() => {
      let reply = "I'm not sure about that. You can reach Jeevan directly at jeevansingh20510@gmail.com!";
      const lower = userMsg.toLowerCase();

      if (lower.includes('project') || lower.includes('snap') || lower.includes('viva')) {
        reply = "Jeevan has built awesome projects like SnapId/SnapAI (Computer Vision), Code Viva Generator (AI PDF Quiz), Smart Campus Hub, and HealthConnectAI!";
      } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) {
        reply = "Jeevan is skilled in the MERN Stack (React, Node, Express, MongoDB), Java (DSA), Python, Tailwind CSS, and Git/GitHub.";
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('cgpa')) {
        reply = "Jeevan is a final-year B.Tech CSE student at Dev Bhoomi Uttarakhand University, Dehradun with a 7.0 CGPA.";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) {
        reply = "You can contact Jeevan at jeevansingh20510@gmail.com or call 6397816186. He's actively looking for full-time roles!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <HiChat className="w-6 h-6" />
          <span className="text-sm font-medium">Chat with AI</span>
        </button>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-sm">Jeevan's AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full">
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-xl ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects..."
              className="flex-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
              <HiPaperAirplane className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}