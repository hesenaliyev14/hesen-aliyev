import Image from 'next/image';
import { MapPin } from 'lucide-react';

import SagarHeadshot from '/public/images/sagar-headshot.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero" className="bg-gray-50">
      <div className="flex flex-col gap-12 md:flex-row">

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Hasan{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              Experienced and detail-oriented Front-End Developer with 3 years of
              expertise in creating high-performance web applications using Next.js,
              TypeScript, and Tailwind CSS. Proven ability to deliver scalable and
              responsive solutions, focusing on user experience and performance.
              Seeking a role where I can leverage my skills in modern front-end
              technologies, strategic problem-solving, and Agile methodologies to
              drive innovative and impactful projects.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Azerbaijan</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
