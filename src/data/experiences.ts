import INFEST_Hackathon from '@/assets/infest_hackathon.png';
import PBP from '@/assets/pbp.jpg';
import BukaPajak from '@/assets/bukapajak.png';
import UREEKA_AI from '@/assets/ureeka_ai.png';
import Responsi from '@/assets/responsi.png';
import UREEKA_Web from '@/assets/ureeka_web.png';
import Researcher from '@/assets/researcher.png';
import TeachingAssistant from '@/assets/teachingassistant.jpg';

export const experiences = [
  {
    year: 2025,
    title: 'Software Developer',
    company: 'INFEST Hackathon',
    period: 'Oct 2025 – Present',
    description: 'Designed Teman Usaha, an AI-powered investment platform using fraud detection and credit scoring models for MSMEs. Currently in the final stage, doing 20+ hours non-stop of prototype development.',
    image: INFEST_Hackathon,
    color: 'primary',
    category: 'Hackathon',
  },
  {
    year: 2025,
    title: 'Technical Lead of PBP & PBP Bootcamp 2025',
    company: 'Himpunan Mahasiswa Teknik Informatika (HIMTI)',
    period: 'Sep 2025',
    description: 'Served as Technical Lead of PBP Bootcamp, a 3-week online program designed to prepare Computer Science freshmen by covering the full scope of first-semester courses. Responsible for managing the learning flow, ensuring smooth technical execution, and coordinating participant data to deliver an effective learning experience.',
    image: PBP,
    color: 'secondary',
    category: 'Organization',
  },
  {
    year: 2025,
    title: 'Web Developer',
    company: 'Hology 2.0 Hackathon',
    period: 'Aug 2025 – Sep 2025',
    description: 'Built BukaPajak, a Web3 tax transparency platform using React and TailwindCSS with real-time data visualization.',
    image: BukaPajak,
    color: 'accent',
    category: 'Hackathon',
  },
  {
    year: 2025,
    title: 'Researcher',
    company: 'ICCSCI 2025',
    period: 'Feb 2025 – Aug 2025',
    description: 'Led leukemia image classification research using CNN, YOLOv11, and Vision Transformers. Built AI pipeline and presented at an international conference.',
    image: Researcher,
    color: 'primary',
    category: 'Research',
  },
  {
    year: 2025,
    title: 'Responsi Activist',
    company: 'Himpunan Mahasiswa Teknik Informatika (HIMTI)',
    period: 'Mar 2025 – Jan 2025 (Expected)',
    description: 'Served as an activist in the Responsi Division of HIMTI BINUS, responsible for creating accessible study summaries for All Region - BINUS students (Batch B27 & B28), including midterm and final exam materials. Collaborated with the team to ensure effective communication and smooth execution of learning support activities.',
    image: Responsi,
    color: 'accent',
    category: 'Organization',
  },
    {
      year: 2025,
      title: 'Web Development Member',
      company: 'UREEKA',
      period: 'Mar 2025 – Jan 2025 (Expected)',
      description: 'Competed in 3+ intensive hackathons, mastered front-end technologies including React, Next.js, and TailwindCSS to build responsive and dynamic user interfaces from ideation to deployment.',
      image: UREEKA_Web,
      color: 'primary',
      category: 'Organization',
    },
    {
      year: 2025,
      title: 'Artificial Intelligence Member',
      company: 'UREEKA',
      period: 'Aug 2025 – Sep 2025',
      description: 'Gained deep knowledge about Artificial Intelligence from how does LLM works to hands-on experience in AI Engineering projects',
      image: UREEKA_AI,
      color: 'primary',
      category: 'Organization',
    },
  {
    year: 2024,
    title: 'Teaching Assistant',
    company: 'BINUS University',
    period: 'Nov 2024 – Jan 2025',
    description: 'Taught programming fundamentals and mentored 145+ students in foundational computer science concepts.',
    image: TeachingAssistant,
    color: 'secondary',
    category: 'Teaching',
  },
].sort((a, b) => new Date(b.period.split(' – ')[0]).getTime() - new Date(a.period.split(' – ')[0]).getTime());