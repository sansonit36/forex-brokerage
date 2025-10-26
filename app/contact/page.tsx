import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
