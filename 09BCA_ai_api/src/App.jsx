import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer YOUR_OPENAI_API_KEY_HERE`, // ⚠️ Use backend for real apps
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You're a helpful BCA tutor. Answer the question clearly for a student.",
            },
            {
              role: "user",
              content: question,
            },
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      console.log("OpenAI response:", data);

      if (data.choices && data.choices.length > 0) {
        setAnswer(data.choices[0].message.content);
      } else if (data.error) {
        setAnswer(`Error: ${data.error.message}`);
      } else {
        setAnswer("No valid response received.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setAnswer("Error: Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🎓 BCA Q&A Chat</h1>

      <textarea
        className="w-full max-w-2xl h-32 p-4 rounded-lg border border-gray-300 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Ask your BCA question (e.g. Explain normalization in DBMS)..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Asking..." : "Ask"}
      </button>

      {answer && (
        <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Answer:</h2>
          <p className="text-gray-800 whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
