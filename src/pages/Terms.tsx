import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="text-muted-foreground mb-8">
            <p>Last updated: January 13, 2025</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the TLRS (Tyre Lifecycle Registration System), you accept 
              and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              TLRS provides a comprehensive tyre lifecycle tracking and recycling management system 
              designed to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Track tyres from manufacturing to end-of-life disposal</li>
              <li>Combat illegal tyre dumping through QR code monitoring</li>
              <li>Generate compliance reports for stewardship programs</li>
              <li>Facilitate proper recycling and disposal practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a user of TLRS, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use the service only for lawful purposes</li>
              <li>Comply with all applicable environmental regulations</li>
              <li>Report suspected illegal dumping activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Compliance and Legal Requirements</h2>
            <p className="text-muted-foreground">
              Users must comply with all local, state, and federal environmental regulations regarding 
              tyre disposal and recycling. TLRS assists with compliance tracking but does not 
              guarantee regulatory compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Accuracy and Liability</h2>
            <p className="text-muted-foreground">
              While we strive to maintain accurate data, users are responsible for verifying the 
              accuracy of information entered into the system. TLRS is not liable for decisions 
              made based on data in the system.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Service Availability</h2>
            <p className="text-muted-foreground">
              We aim to provide continuous service availability but cannot guarantee uninterrupted 
              access. Scheduled maintenance will be communicated in advance when possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate this agreement at any time. Upon termination, access to 
              the service will be revoked, but compliance data may be retained as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: info@globaltyres.org<br />
              Address: HQ - Sydney, Australia
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}