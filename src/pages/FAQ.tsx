import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    document.title = "TLRS FAQ | Tyre Lifecycle Registration";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-earth">
      <header className="border-b bg-background/70 backdrop-blur">
        <div className="container py-6">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Answers for each stakeholder in the tyre lifecycle</p>
        </div>
      </header>

      <div className="container py-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Manufacturers / Brands</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="m1">
              <AccordionTrigger>How does TLRS help with TSA and compliance?</AccordionTrigger>
              <AccordionContent>
                TLRS assigns unique IDs at production and records events on an immutable ledger to generate compliance-ready reports aligned to TSA’s 66% recovery benchmark.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="m2">
              <AccordionTrigger>Can we integrate during curing/post-curing?</AccordionTrigger>
              <AccordionContent>
                Yes. Embed RFID/NFC or laser-engrave IDs and use TLRS APIs to register batches in real time with low per-tyre cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="m3">
              <AccordionTrigger>How do we track tyres post-sale?</AccordionTrigger>
              <AccordionContent>
                Use batch/ID search and dashboards to follow handoffs from retailers to recyclers with predictive waste insights for OTR and passenger tyres.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="m4">
              <AccordionTrigger>What if tyres are retrofitted later?</AccordionTrigger>
              <AccordionContent>
                TLRS supports retrofits at service points (laser/labels). Your brand IDs remain authoritative for downstream updates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Retailers</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="r1">
              <AccordionTrigger>How do we use TLRS at point-of-sale and disposal?</AccordionTrigger>
              <AccordionContent>
                Scan or enter IDs to register to vehicles/licenses, then update to Collected and transfer to recyclers with signed handoffs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="r2">
              <AccordionTrigger>Does it simplify state compliance?</AccordionTrigger>
              <AccordionContent>
                Yes. State views and audit exports reduce risk of fines by proving correct recovery and transport.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="r3">
              <AccordionTrigger>Can we bulk upload?</AccordionTrigger>
              <AccordionContent>
                Yes. Use CSV bulk registration or RFID bulk scans for fleets, mapping manufacturer and scheme by name.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Mechanics / Service Providers</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="me1">
              <AccordionTrigger>How do I register or update during service?</AccordionTrigger>
              <AccordionContent>
                Scan or enter IDs, add notes (e.g., rotation, puncture repair), and update status/location with one tap.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="me2">
              <AccordionTrigger>What if the tyre isn’t tagged?</AccordionTrigger>
              <AccordionContent>
                Self-register with an auto-generated ID and optionally apply an NFC/QR sticker or laser mark.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="me3">
              <AccordionTrigger>Is fraud protection built in?</AccordionTrigger>
              <AccordionContent>
                Updates are signed and time-stamped; anomalies are flagged for audit, preventing tampering.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Wholesalers / Suppliers</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="w1">
              <AccordionTrigger>Can we track import batches to retail?</AccordionTrigger>
              <AccordionContent>
                Yes. Register batches on import, then track downstream distribution via batch IDs and transfers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="w2">
              <AccordionTrigger>How is fraud prevented?</AccordionTrigger>
              <AccordionContent>
                Multi-party signatures on transfers and anomaly detection protect against fake disposals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fleet / Chain Operators</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="f1">
              <AccordionTrigger>How do we handle thousands of tyres?</AccordionTrigger>
              <AccordionContent>
                Use CSV or RFID bulk workflows to register/update, with filters by supplier, batch, and location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f2">
              <AccordionTrigger>Are there optimization insights?</AccordionTrigger>
              <AccordionContent>
                Dashboards highlight lifecycle trends and predict waste spikes by state and tyre type.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recyclers / Disposal Providers</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="rc1">
              <AccordionTrigger>How do we confirm recycling outcomes?</AccordionTrigger>
              <AccordionContent>
                Scan inbound tyres, update to Recycled/Disposed with outcome notes (e.g., crumb rubber) for audit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rc2">
              <AccordionTrigger>Do we see batch history?</AccordionTrigger>
              <AccordionContent>
                Yes. Search by supplier/batch to view full journey before processing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Regulators / Government</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="g1">
              <AccordionTrigger>How does TLRS support audits and enforcement?</AccordionTrigger>
              <AccordionContent>
                Immutable logs and exportable reports by state, brand, and status streamline investigations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="g2">
              <AccordionTrigger>Can we search for non-compliance?</AccordionTrigger>
              <AccordionContent>
                Admin search flags unrecovered batches and links to associated vehicles and locations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
};

export default FAQ;
