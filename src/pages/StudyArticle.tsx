import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Link as LinkIcon } from 'lucide-react';
import { namesStudyArticles, themesStudyArticles } from '../data/studyContent';

export default function StudyArticle() {
  const { category, articleId } = useParams<{ category: string; articleId: string }>();
  const navigate = useNavigate();

  // Get all articles based on category
  const allArticles = category === 'names' ? namesStudyArticles :
                      category === 'themes' ? themesStudyArticles : [];

  const article = allArticles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Article not found
        </h2>
        <button
          onClick={() => navigate('/study')}
          className="text-primary-600 hover:underline"
        >
          Return to Study
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-8">
      {/* Back Button */}
      <Link
        to={`/study/${category}`}
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to {category === 'names' ? 'Names & People' : 'Themes'}
      </Link>

      {/* Article Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-start space-x-4">
          <BookOpen size={48} className="flex-shrink-0" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{article.title}</h1>
            <p className="text-lg sm:text-xl opacity-90">{article.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{article.introduction}</p>
      </div>

      {/* Content Sections */}
      {article.sections.map((section, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.heading}</h2>

          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          {section.bulletPoints && (
            <ul className="list-disc list-inside space-y-2 mb-4">
              {section.bulletPoints.map((point, bIndex) => (
                <li key={bIndex} className="text-gray-700 dark:text-gray-300">{point}</li>
              ))}
            </ul>
          )}

          {section.quote && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-primary-600 rounded-lg p-4 my-4">
              <p className="text-gray-800 dark:text-gray-200 italic mb-2">"{section.quote.text}"</p>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                — {section.quote.reference}
              </p>
            </div>
          )}

          {section.illustration && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-lg p-4 my-4">
              <div className="flex items-start space-x-2">
                <Lightbulb size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">{section.illustration}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Key Takeaways */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-500 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Lightbulb size={28} className="mr-2 text-green-600" />
          Key Takeaways
        </h2>
        <ul className="space-y-2">
          {article.keyTakeaways.map((takeaway, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">•</span>
              <span className="text-gray-800 dark:text-gray-200">{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Further Study */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Further Study</h2>
        <ul className="space-y-2">
          {article.furtherStudy.map((study, index) => (
            <li key={index} className="flex items-start">
              <BookOpen size={18} className="mr-2 text-primary-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700 dark:text-gray-300">{study}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cross References */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-blue-500 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <LinkIcon size={28} className="mr-2 text-blue-600" />
          Cross References
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {article.crossReferences.map((reference, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 text-sm">
              <span className="text-primary-600 dark:text-primary-400 font-semibold">{reference}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sheep Encouragement */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Woolly's Study Tip
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Take time to read the cross-references and further study passages. The Bible interprets itself, and seeing connections across Scripture will deepen your understanding!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
