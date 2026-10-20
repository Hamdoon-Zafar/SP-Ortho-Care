import { getClinic, getServices, getTeam } from '@/lib/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

// Server component: data is fetched at build time and passed down as props.
export default async function Page() {
  const [clinic, services, team] = await Promise.all([getClinic(), getServices(), getTeam()]);
  return (
    <>
      <Header name={clinic.name} />
      <main>
        <Hero />
        <Services services={services} />
        <Team team={team} />
        <Contact clinic={clinic} />
      </main>
      <Footer clinic={clinic} />
      <FloatingActions />
    </>
  );
}
