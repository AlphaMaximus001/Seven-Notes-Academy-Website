import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Courses } from "./components/Courses";
import { ClassOptions } from "./components/ClassOptions";
import { StudentsShowcase } from "./components/StudentsShowcase";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { BookingForm } from "./components/BookingForm";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Courses />
        <ClassOptions />
        <StudentsShowcase />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}