import React from "react";
import { toast } from "react-toastify";

export default function Task({ task, onComplete, resolved }) {
  const handleComplete = (task) => {
    onComplete(task);
    toast.success(`Completed: ${task.title}`);
  };

  return (
    <>
      <section className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-gray-700">Task Status</h4>
        <p className="text-sm text-gray-400 mb-3">Select a ticket to add</p>
        {task.length
          ? task.map((t) => (
              <div key={t.id} className="flex justify-between border rounded p-3 text-sm">
                <div>
                  <div className="font-semibold text-gray-800">{t.title}</div>
                  <div className="text-xs text-gray-500">{t.id} • {t.customer}</div>
                </div>
                <button onClick={() => handleComplete(t)} className="bg-green-600 text-white px-3 py-1 rounded">Complete</button>
              </div>
            ))
          : <div className="text-gray-400">No tasks selected yet.</div>}
      </section>

      <section className="bg-white rounded-lg p-4 shadow-sm mt-4">
        <h4 className="font-semibold text-gray-700">Resolved Task</h4>
        {resolved.length
          ? resolved.map((r) => (
              <div key={r.id} className="flex justify-between border rounded p-3 text-sm">
                <div>
                  <div className="font-medium text-gray-800">{r.title}</div>
                  <div className="text-xs text-gray-500">{r.id}</div>
                </div>
              </div>
            ))
          : <div className="text-gray-400">No resolved tasks yet.</div>}
      </section>
    </>
  );
}
