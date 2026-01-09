import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Lesson from './pages/Lesson';
import Profile from './pages/Profile';
import Themes from './pages/Themes';
import BibleBooks from './pages/BibleBooks';
import BookStudy from './pages/BookStudy';
import BookLesson from './pages/BookLesson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:category" element={<Learn />} />
          <Route path="lesson/:lessonId" element={<Lesson />} />
          <Route path="themes" element={<Themes />} />
          <Route path="bible-books" element={<BibleBooks />} />
          <Route path="book-study/:bookId" element={<BookStudy />} />
          <Route path="book-lesson/:bookId/:lessonNumber" element={<BookLesson />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
