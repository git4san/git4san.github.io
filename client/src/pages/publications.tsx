import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Quote, TrendingUp, RefreshCw } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { Publication, ScholarMetrics } from '@shared/schema';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

function usePublications() {
  return useQuery({
    queryKey: ['/api/publications'],
    queryFn: async (): Promise<{ publications: Publication[], metrics: ScholarMetrics | null }> => {
      const response = await fetch('/api/publications');
      if (!response.ok) throw new Error('Failed to fetch publications');
      return response.json();
    }
  });
}

function useUpdatePublications() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/publications/update', { method: 'POST' });
      if (!response.ok) throw new Error('Failed to update publications');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/publications'] });
    }
  });
}

export default function Publications() {
  const { data, isLoading, error } = usePublications();
  const updateMutation = useUpdatePublications();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Loading Publications...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-red-600">Error Loading Publications</h1>
            <p>Please try refreshing the page.</p>
          </div>
        </div>
      </div>
    );
  }

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
            
            <button
              onClick={() => updateMutation.mutate()}
              disabled={updateMutation.isPending}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${updateMutation.isPending ? 'animate-spin' : ''}`} />
              {updateMutation.isPending ? 'Updating...' : 'Update Data'}
            </button>
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
                      
                      <div className="flex items-center gap-4 mb-2">
                        <p className="text-sm text-[var(--text-secondary)]">
                          {pub.venue}
                        </p>
                        {pub.type === 'Journal' && pub.impactFactor && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            IF: {pub.impactFactor}
                          </span>
                        )}
                        {pub.type === 'Journal' && pub.quartile && (
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            pub.quartile === 'Q1' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' :
                            pub.quartile === 'Q2' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                            pub.quartile === 'Q3' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {pub.quartile}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--primary-color)] hover:text-[var(--primary-dark)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    )}
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