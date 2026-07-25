import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { ProjectsList } from "@/pages/ProjectsList";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { EventsPage } from "@/pages/EventsPage";
import { EventDetail } from "@/pages/EventDetail";
import { TeamPage } from "@/pages/TeamPage";
import { BlogList } from "@/pages/BlogList";
import { BlogPost } from "@/pages/BlogPost";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectsList />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:slug" element={<EventDetail />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default App;
