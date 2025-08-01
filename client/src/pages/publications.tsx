import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Quote, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import publicationsData from '@/data/publications.json';

type Publication = {
  id: number;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: string;
  citations: number;
  url: string;
  abstract: string;
  keywords: string[];
};

type ScholarMetrics = {
  totalCitations: number;
  hIndex: number;
  i10Index: number;
  citationsByYear: Record<string, number>;
};

export default function Publications() {
  const data = publicationsData;
  const { publications, metrics } = data;
  const totalCitations = metrics?.totalCitations || 0;
  const journals = publications.filter(pub => pub.type === 'Journal').length;
  const conferences = publications.filter(pub => pub.type === 'Conference').length;

  // Transform citations by year data for chart
  const chartData = metrics?.citationsByYear 
    ? Object.entries(metrics.citationsByYear)
        .map(([year, citations]) => ({ year: parseInt(year), citations }))
        .sort((a, b) => a.year - b.year)
    : [];

  // Publications by year chart
  const publicationsByYear = publications.reduce((acc, pub) => {
    acc[pub.year] = (acc[pub.year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const publicationsChartData = Object.entries(publicationsByYear)
    .map(([year, count]) => ({ year: parseInt(year), publications: count }))
    .sort((a, b) => a.year - b.year);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-[var(--text-primary)]">
              Publications & <span className="text-[var(--primary-color)]">Research Impact</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Research contributions in cybersecurity, AI, and dependable systems security
            </p>
            

          </div>

          {/* Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)] text-center"
            >
              <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">{publications.length}</div>
              <div className="text-sm text-[var(--text-secondary)]">Total Publications</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)] text-center"
            >
              <div className="text-3xl font-bold text-[var(--secondary-color)] mb-2">{totalCitations}</div>
              <div className="text-sm text-[var(--text-secondary)]">Total Citations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)] text-center"
            >
              <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">{metrics?.hIndex || 0}</div>
              <div className="text-sm text-[var(--text-secondary)]">h-index</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)] text-center"
            >
              <div className="text-3xl font-bold text-[var(--warning-color)] mb-2">{metrics?.i10Index || 0}</div>
              <div className="text-sm text-[var(--text-secondary)]">i10-index</div>
            </motion.div>
          </div>

          {/* Citation Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)]"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[var(--text-primary)]">
                <TrendingUp className="w-5 h-5 text-[var(--primary-color)]" />
                Citations by Year
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="citations" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)]"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[var(--text-primary)]">
                <FileText className="w-5 h-5 text-[var(--secondary-color)]" />
                Publications by Year
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={publicationsChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="publications" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Publications List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">All Publications</h2>
              <div className="flex gap-4 text-sm text-[var(--text-secondary)]">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  {journals} Journals
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  {conferences} Conferences
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {publications
                .sort((a, b) => b.year - a.year || (b.citations || 0) - (a.citations || 0))
                .map((pub, index) => (
                <motion.article
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)] hover:bg-[var(--bg-hover)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          pub.type === 'Journal' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {pub.type}
                        </span>
                        <span className="text-sm text-[var(--text-secondary)]">{pub.year}</span>
                        <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                          <Quote className="w-4 h-4" />
                          {pub.citations || 0}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
                        {pub.title}
                      </h3>
                      
                      <p className="text-sm text-[var(--text-secondary)] mb-2">
                        {pub.authors}
                      </p>
                      
                      <p className="text-sm text-[var(--text-secondary)] mb-2">
                        {pub.venue}
                      </p>
                    </div>
                    
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--primary-color)] hover:text-[var(--primary-dark)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Paper
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Scholar Profile Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <a
              href="https://scholar.google.com/citations?user=2SUBIBkAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white rounded-lg font-semibold transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              View Google Scholar Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}