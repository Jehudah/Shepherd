'use client';

import { useState, FormEvent } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

type FeedbackType = 'bad-question' | 'improvement' | 'bug' | 'suggestion';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState<FeedbackType>('suggestion');
  const [questionId, setQuestionId] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      await addDoc(collection(db, 'feedback'), {
        name: name.trim() || null,
        email: email.trim() || null,
        type,
        questionId: questionId.trim() || null,
        message: message.trim(),
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setName('');
      setEmail('');
      setQuestionId('');
      setMessage('');
      setType('suggestion');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="form-success">
        <span>✓</span>
        Thank you! Your feedback has been received and will help improve Shepherd.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name <span style={{ fontWeight: 400, color: '#9CA3AF' }}>(optional)</span></label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <span style={{ fontWeight: 400, color: '#9CA3AF' }}>(optional)</span></label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="type">Type of feedback</label>
        <select id="type" value={type} onChange={e => setType(e.target.value as FeedbackType)}>
          <option value="suggestion">Suggestion or new idea</option>
          <option value="improvement">Improvement to existing content</option>
          <option value="bad-question">Bad or incorrect question</option>
          <option value="bug">Bug or technical issue</option>
        </select>
      </div>

      {type === 'bad-question' && (
        <div className="form-group">
          <label htmlFor="questionId">Question ID <span style={{ fontWeight: 400, color: '#9CA3AF' }}>(optional)</span></label>
          <input
            id="questionId"
            type="text"
            placeholder="e.g. parables-kingdom-1-q7"
            value={questionId}
            onChange={e => setQuestionId(e.target.value)}
          />
          <p className="form-note">You can find the question ID in the app&apos;s feedback section (coming soon).</p>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">Your feedback <span style={{ color: '#EF4444' }}>*</span></label>
        <textarea
          id="message"
          required
          placeholder="Describe your suggestion, the problem, or what should be improved…"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>

      {error && <div className="form-error">{error}</div>}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={submitting || !message.trim()}
        style={{ width: '100%', justifyContent: 'center', marginTop: 8, opacity: submitting ? 0.7 : 1 }}
      >
        {submitting ? 'Sending…' : 'Send feedback'}
      </button>
    </form>
  );
}
