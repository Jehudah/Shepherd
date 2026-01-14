import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Learn from './pages/Learn';
import Challenge from './pages/Challenge';
import Community from './pages/Community';
import Study from './pages/Study';
import Profile from './pages/Profile';
import NamesCategories from './pages/learn/NamesCategories';
import NamesLessons from './pages/learn/NamesLessons';
import ThemesSelection from './pages/learn/ThemesSelection';
import ThemesLessons from './pages/learn/ThemesLessons';
import BibleBooks from './pages/BibleBooks';
import BookStudy from './pages/BookStudy';
import BookLesson from './pages/BookLesson';
import Timeline from './pages/learn/Timeline';
import MemorizeVerses from './pages/learn/MemorizeVerses';
import Parables from './pages/learn/Parables';
import LessonPlayer from './pages/learn/LessonPlayer';
import StudyNames from './pages/StudyNames';
import StudyThemes from './pages/StudyThemes';
import StudyArticle from './pages/StudyArticle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/learn" replace />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/names" element={<NamesCategories />} />
          <Route path="learn/names/:subcategory" element={<NamesLessons />} />
          <Route path="lesson/:category/:subcategory/:lessonId" element={<LessonPlayer />} />
          <Route path="learn/themes" element={<ThemesSelection />} />
          <Route path="learn/themes/:themeId" element={<ThemesLessons />} />
          <Route path="learn/books" element={<BibleBooks />} />
          <Route path="learn/timeline" element={<Timeline />} />
          <Route path="learn/verses" element={<MemorizeVerses />} />
          <Route path="learn/parables" element={<Parables />} />
          <Route path="book-study/:bookId" element={<BookStudy />} />
          <Route path="book-lesson/:bookId/:lessonNumber" element={<BookLesson />} />
          <Route path="challenge" element={<Challenge />} />
          <Route path="community" element={<Community />} />
          <Route path="study" element={<Study />} />
          <Route path="study/names" element={<StudyNames />} />
          <Route path="study/themes" element={<StudyThemes />} />
          <Route path="study/:category/:articleId" element={<StudyArticle />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/learn" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
