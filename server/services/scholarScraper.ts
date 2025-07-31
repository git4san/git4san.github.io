import { publications, scholarMetrics, type InsertPublication, type InsertScholarMetrics } from '@shared/schema';
import { db } from '../db';
import { eq } from 'drizzle-orm';

export class ScholarScraper {
  private scholarId = '2SUBIBkAAAAJ';
  private baseUrl = 'https://scholar.google.com/citations';

  async scrapeAndStore() {
    try {
      console.log('Starting Scholar scraping...');
      
      // For now, we'll manually input the complete data from the Google Scholar profile
      // In a production environment, you'd use a proper web scraping library
      const publicationsData = await this.getPublicationsData();
      const metricsData = await this.getMetricsData();

      // Store publications
      for (const pub of publicationsData) {
        await db.insert(publications).values(pub).onConflictDoUpdate({
          target: publications.scholarId,
          set: {
            citations: pub.citations,
            updatedAt: new Date()
          }
        });
      }

      // Store metrics
      await db.insert(scholarMetrics).values(metricsData).onConflictDoUpdate({
        target: scholarMetrics.id,
        set: {
          ...metricsData,
          lastUpdated: new Date()
        }
      });

      console.log('Scholar data updated successfully');
      return { success: true, publications: publicationsData.length };
    } catch (error) {
      console.error('Error scraping Scholar data:', error);
      throw error;
    }
  }

  private async getPublicationsData(): Promise<InsertPublication[]> {
    // Complete list from Google Scholar profile
    return [
      {
        scholarId: '2SUBIBkAAAAJ:8k81kl-MbHgC',
        title: 'Demystify the fuzzing methods: A comprehensive survey',
        authors: 'S Mallissery, YS Wu',
        venue: 'ACM Computing Surveys 56 (3), 1-38, 2023',
        year: 2023,
        citations: 60,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:8k81kl-MbHgC',
        type: 'Journal'
      },
      {
        scholarId: '2SUBIBkAAAAJ:Y0pCki6q_DkC',
        title: 'Cloud enabled air quality detection, analysis and prediction-a smart city application for smart health',
        authors: 'Y Mehta, MMM Pai, S Mallissery, S Singh',
        venue: '2016 3rd MEC international conference on big data and smart city (ICBDSC), 1-7, 2016',
        year: 2016,
        citations: 55,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:Y0pCki6q_DkC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:qjMakFHDy7sC',
        title: 'Transport and traffic rule violation monitoring service in ITS: A secured VANET cloud application',
        authors: 'S Mallissery, MMM Pai, N Ajam, RM Pai, J Mouzna',
        venue: '2015 12th Annual IEEE Consumer Communications and Networking Conference (CCNC)',
        year: 2015,
        citations: 29,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:qjMakFHDy7sC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:u-x6o8ySG0sC',
        title: 'Accuracy analysis of machine learning algorithms for intrusion detection system using nsl-kdd dataset',
        authors: 'S Mallissery, S Kolekar, R Ganiga',
        venue: 'Proc. International Conference on Future Trends in Computing and Communication Technologies, 2013',
        year: 2013,
        citations: 18,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:u-x6o8ySG0sC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:d1gkVwhDpl0C',
        title: 'Cloud enabled secure communication in vehicular ad-hoc networks',
        authors: 'S Mallissery, MMM Pai, RM Pai, A Smitha',
        venue: '2014 International Conference on Connected Vehicles and Expo (ICCVE), 596-601, 2014',
        year: 2014,
        citations: 15,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:d1gkVwhDpl0C',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:roLk4NBRz8UC',
        title: 'Online and offline communication architecture for vehicular ad-hoc networks using NS3 and SUMO simulators',
        authors: 'S Mallissery, MMM Pai, M Mehbadi, RM Pai, YS Wu',
        venue: 'Journal of High Speed Networks 25 (3), 253-271, 2019',
        year: 2019,
        citations: 12,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:roLk4NBRz8UC',
        type: 'Journal'
      },
      {
        scholarId: '2SUBIBkAAAAJ:u5HHmVD_uO8C',
        title: 'Survey on intrusion detection methods',
        authors: 'S Mallissery, J Prabhu, R Ganiga',
        venue: '3rd International Conference on Advances in Recent Technologies in Communication and Computing, 2011',
        year: 2011,
        citations: 12,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:u5HHmVD_uO8C',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:5nxA0vEk-isC',
        title: 'Pervasive micro information flow tracking',
        authors: 'S Mallissery, KY Chiang, CA Bau, YS Wu',
        venue: 'IEEE Transactions on Dependable and Secure Computing 20 (6), 4957-4975, 2023',
        year: 2023,
        citations: 6,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:5nxA0vEk-isC',
        type: 'Journal'
      },
      {
        scholarId: '2SUBIBkAAAAJ:UeHWp8X0CEIC',
        title: 'Improvizmg the public key infrastructure to build trust architecture for VANET by using short-time certificate management and Merkle signature scheme',
        authors: 'S Mallissery, MMM Pai, A Smitha, RM Pai, J Mouzna',
        venue: '2014 asia-pacific conference on computer aided system engineering (APCASE), 2014',
        year: 2014,
        citations: 6,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:UeHWp8X0CEIC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:LkGwnXOMwfcC',
        title: 'Hypervisor-based sensitive data leakage detector',
        authors: 'SH Chang, S Mallissery, CH Hsieh, YS Wu',
        venue: '2018 IEEE International Conference on Software Quality, Reliability and Security (QRS), 2018',
        year: 2018,
        citations: 4,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:LkGwnXOMwfcC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:IjCSPb-OGe4C',
        title: 'Correlation of alerts using prerequisites and consequences for intrusion detection',
        authors: 'S Mallissery, K Praveen, S Sathar',
        venue: 'International Conference on Computational Intelligence and Information Technology, 2011',
        year: 2011,
        citations: 4,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:IjCSPb-OGe4C',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:UebtZRa9Y70C',
        title: 'POSTER: Data leakage detection for health information system based on memory introspection',
        authors: 'S Mallissery, MC Wu, CA Bau, GZ Huang, CY Yang, WC Lin, YS Wu',
        venue: 'Proceedings of the 15th ACM Asia Conference on Computer and Communications Security, 2020',
        year: 2020,
        citations: 3,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:UebtZRa9Y70C',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:ufrVoPGSRksC',
        title: 'Provable security analysis of complex or smart computer systems in the smart grid',
        authors: 'S Madhusudhanan, S Mallissery',
        venue: '2017 IEEE International Conference on Smart Grid and Smart Cities (ICSGSC), 2017',
        year: 2017,
        citations: 3,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:ufrVoPGSRksC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:W7OEmFMy1HYC',
        title: 'Cloud-enabled vehicular congestion estimation: An ITS application',
        authors: 'M Mahbadi, MMM Pai, S Mallissery, RM Pai',
        venue: '2016 IEEE Canadian Conference on Electrical and Computer Engineering (CCECE), 2016',
        year: 2016,
        citations: 3,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:W7OEmFMy1HYC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:hqOjcs7Dif8C',
        title: 'Mixed-mode information flow tracking with compile-time taint semantics extraction and offline replay',
        authors: 'YH Hung, BJ Jheng, HW Li, WY Lai, S Mallissery, YS Wu',
        venue: '2021 IEEE Conference on Dependable and Secure Computing (DSC), 1-8, 2021',
        year: 2021,
        citations: 2,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:hqOjcs7Dif8C',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:Se3iqnhoufwC',
        title: 'Identification of data propagation paths for efficient dynamic information flow tracking',
        authors: 'S Mallissery, YS Wu, CH Hsieh, CA Bau',
        venue: 'Proceedings of the 35th Annual ACM Symposium on Applied Computing, 92-99, 2020',
        year: 2020,
        citations: 2,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:Se3iqnhoufwC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:_FxGoFyzp5QC',
        title: 'Analysis of vehicle speed limit and air pollution load for identifying road conditions in India: An empirical study for smart city',
        authors: 'S Mallissery, MMM Pai, RM Pai',
        venue: '2017 IEEE International Conference on Smart Grid and Smart Cities (ICSGSC), 2017',
        year: 2017,
        citations: 2,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:_FxGoFyzp5QC',
        type: 'Conference'
      },
      {
        scholarId: '2SUBIBkAAAAJ:eQOLeE2rZwMC',
        title: 'Cloud-enabled smart health monitoring of vehicles: An ITS application',
        authors: 'Y Mehta, MM Pai, S Mallissery, MR Pai',
        venue: 'Advanced Science Letters 23 (4), 3709-3713, 2017',
        year: 2017,
        citations: 1,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:eQOLeE2rZwMC',
        type: 'Journal'
      },
      {
        scholarId: '2SUBIBkAAAAJ:YsMSGLbcyi4C',
        title: 'Congestion free vehicular path planning system: a real-time cloud-enabled ITS application',
        authors: 'MB Reddy, MM Pai, S Mallissery, RM Pai, M Mahbadi',
        venue: 'Advanced Science Letters 23 (4), 3674-3678, 2017',
        year: 2017,
        citations: 1,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:YsMSGLbcyi4C',
        type: 'Journal'
      },
      {
        scholarId: '2SUBIBkAAAAJ:MXK_kJrjxJIC',
        title: 'Enriching the Semantics of Information Flow Tracking with Source-Level Memory Allocation Event Logging',
        authors: 'S Mallissery, YS Wu',
        venue: '2023 IEEE Conference on Dependable and Secure Computing (DSC), 1-10, 2023',
        year: 2023,
        citations: 0,
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:MXK_kJrjxJIC',
        type: 'Conference'
      }
    ];
  }

  private async getMetricsData(): Promise<InsertScholarMetrics> {
    // Citation by year data from the graph on Google Scholar
    const citationsByYear = {
      '2013': 3,
      '2014': 3,
      '2015': 11,
      '2016': 15,
      '2017': 12,
      '2018': 25,
      '2019': 15,
      '2020': 30,
      '2021': 14,
      '2022': 18,
      '2023': 53,
      '2024': 33,
      '2025': 5
    };

    return {
      totalCitations: 238,
      totalCitationsSince2020: 165, 
      hIndex: 7,
      hIndexSince2020: 6,
      i10Index: 7,
      i10IndexSince2020: 5,
      citationsByYear
    };
  }

  async getLatestData() {
    const [pubs, metrics] = await Promise.all([
      db.select().from(publications).orderBy(publications.year, publications.citations),
      db.select().from(scholarMetrics).limit(1)
    ]);

    return {
      publications: pubs,
      metrics: metrics[0] || null
    };
  }
}

export const scholarScraper = new ScholarScraper();