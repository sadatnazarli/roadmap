import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import CRoadmap from './pages/c-roadmap.mdx';
import GitRoadmap from './pages/git-roadmap.mdx';
import LinuxRoadmap from './pages/linux-roadmap.mdx';
import VimRoadmap from './pages/vim-roadmap.mdx';
import NotFound from './pages/NotFound';
import RoadmapLayout from './layouts/RoadmapLayout';
import Layout from './layouts/Layout';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // scroll to hash
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />

        <Route path="/c" element={
          <RoadmapLayout roadmapSlug="c">
            <CRoadmap />
          </RoadmapLayout>
        } />

        <Route path="/c-roadmap" element={
          <RoadmapLayout roadmapSlug="c">
            <CRoadmap />
          </RoadmapLayout>
        } />

        <Route path="/git" element={
          <RoadmapLayout roadmapSlug="git">
            <GitRoadmap />
          </RoadmapLayout>
        } />
        <Route path="/git-roadmap" element={
          <RoadmapLayout roadmapSlug="git">
            <GitRoadmap />
          </RoadmapLayout>
        } />

        <Route path="/linux" element={
          <RoadmapLayout roadmapSlug="linux">
            <LinuxRoadmap />
          </RoadmapLayout>
        } />
        <Route path="/linux-roadmap" element={
          <RoadmapLayout roadmapSlug="linux">
            <LinuxRoadmap />
          </RoadmapLayout>
        } />

        <Route path="/vim" element={
          <RoadmapLayout roadmapSlug="vim">
            <VimRoadmap />
          </RoadmapLayout>
        } />
        <Route path="/vim-roadmap" element={
          <RoadmapLayout roadmapSlug="vim">
            <VimRoadmap />
          </RoadmapLayout>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
