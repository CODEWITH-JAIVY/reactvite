import React from 'react';

function Notes() {
  const notesData = [
    {
      title: 'C++ Notes',
      description: 'Complete C++ course notes with examples and code snippets.',
      download: '/notes/cpp_notes.pdf',
    },
    {
      title: 'DSA Handbook',
      description: 'DSA notes including trees, graphs, sorting, searching, etc.',
      download: '/notes/dsa_notes.pdf',
    },
    {
      title: 'React Cheat Sheet',
      description: 'Quick guide for React developers with hooks and router basics.',
      download: '/notes/react_cheatsheet.pdf',
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📚 Download Notes
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {notesData.map((note, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">{note.title}</h3>
              <p className="text-gray-600 mb-4">{note.description}</p>
              <a
                href={note.download}
                download
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Notes;
