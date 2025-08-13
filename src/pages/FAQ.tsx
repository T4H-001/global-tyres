import { useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QAItem {
  q: string;
  a: string;
}

interface FAQSection {
  id: string;
  title: string;
  items: QAItem[];
}

const sectionsData: FAQSection[] = [
  {
    id: "using-the-site",
    title: "Using TLRS (Site Help)",
    items: [
      { q: "How do I sign up and log in?", a: "Click Sign In from the top navigation. Create an account with your email. After confirming your email, you can log in and access your dashboard." },
      { q: "How are payments handled?", a: "Free plans activate instantly. For paid tiers, you are redirected to Stripe Checkout. After payment, you’ll return to TLRS and your subscription is activated." },
      { q: "What are the onboarding steps?", a: "1) Select your role, 2) Choose a plan, 3) Complete payment (if applicable), 4) Start registering or importing tyres." },
      { q: "How do I register a tyre?", a: "Use the Tyre Registration page to scan RFID/QR or manually enter the ID, then link it to a vehicle, license plate, and optional notes (e.g., repair)." },
      { q: "Can I transfer a tyre to another party?", a: "Yes. Use the transfer workflow from the tyre details page to hand off custody to retailers, recyclers, or fleet operators." },
      { q: "How do I generate compliance reports?", a: "Open Reports in your dashboard to export TSA/state-ready CSV or PDF, filtered by brand, batch, date, and location." },
      { q: "Does TLRS work on mobile devices?", a: "Yes. The app is responsive and supports mobile scanning workflows for RFID/QR using compatible devices." },
      { q: "How is my data protected?", a: "We use secure authentication and audit trails. Lifecycle events are immutably logged to support compliance and investigations." },
      { q: "How do I get support?", a: "Use the Help link in the footer or the Support button in your dashboard to contact us. We typically respond within one business day." },
    ],
  },
  {
    id: "manufacturers",
    title: "Manufacturers / Brands",
    items: [
      { q: "How does TLRS help me comply with regulations like TSA's voluntary scheme?", a: "TLRS assigns unique IDs (e.g., serialized DOT codes) at production, logging them on blockchain for immutable traceability. You can generate compliance reports showing recovery rates (e.g., 66% benchmark) and export data for TSA audits, reducing fines (up to $12,000 in QLD) by proving end-of-life accountability." },
      { q: "Can I integrate TLRS with my manufacturing process?", a: "Yes, embed RFID/NFC tags or laser-engrave IDs during curing/post-curing stages. The system APIs allow real-time registration, linking tyres to batches for bulk tracking, with costs ~$0.50–$1 per tyre." },
      { q: "How do I track tyres after sale?", a: "Use the dashboard to search by batch/supplier, viewing lifecycle updates (e.g., from retailer sale to recycler disposal). Insights predict waste flows (e.g., OTR burial risks in mining), helping optimize designs for retreading." },
      { q: "What if my tyres are retrofitted later?", a: "TLRS supports retrofitting via laser marking or tags at service points; your brand can pre-encode IDs, ensuring consistency when mechanics/dealers update statuses." },
      { q: "Is there a cost for brands?", a: "Start with free tier for basic tracking; upgrade to Pro ($100/month) for advanced analytics and API integrations. Value: Reduced liability from dumping incidents." },
      { q: "How does it benefit my sustainability goals?", a: "Generate environmental reports (e.g., CO2 savings from recycling), aligning with TSA's circular economy push and boosting brand image (e.g., '100% tracked tyres')." },
    ],
  },
  {
    id: "retailers",
    title: "Retailers",
    items: [
      { q: "How can I use TLRS during sales and disposals?", a: "Scan RFID/QR codes at point-of-sale to register tyres, linking to customer vehicles/licenses. For disposals, update status to 'Collected' and transfer to recyclers via blockchain-signed handoffs." },
      { q: "Does it simplify compliance with state regulations?", a: "Yes, state-based dashboards (e.g., QLD/NSW views) flag non-compliant tyres, generating reports for audits. It helps avoid fines by proving proper disposal." },
      { q: "Can I handle bulk inputs for multiple customers?", a: "Absolutely—use CSV uploads or RFID bulk scans for fleets, associating tyres with repairs (e.g., 'Rotated for Toyota RAV4, license QLD-DEF456')." },
      { q: "How do I check if a tyre is in the scheme?", a: "Search by ID/batch in the app; it verifies against TSA lists and blockchain logs, alerting if unregistered (e.g., 'This Goodyear tyre is compliant—66% recovery rate')." },
      { q: "What if a customer brings in retrofitted tyres?", a: "The system supports self-registration via form (enter ID, status); you can add tags during service for real-time uniqueness." },
      { q: "What's the pricing for retailers?", a: "Free tier for up to 100 registrations/month; Basic ($50/month) for unlimited, with fraud protection via blockchain validation." },
      { q: "How does it protect against fraud like fake disposals?", a: "Blockchain requires signed updates (e.g., your wallet key), with anomaly detection flagging suspicious patterns (e.g., bulk 'Disposed' without recycler confirmation)." },
    ],
  },
  {
    id: "mechanics",
    title: "Mechanics / Service Providers",
    items: [
      { q: "How do I register or update tyres during a service?", a: "Use the mobile app to scan RFID/QR or enter IDs manually, updating status (e.g., 'In Use' with repair notes like 'Punctured and patched on Ford Ranger')." },
      { q: "Can I associate tyres with specific vehicles?", a: "Yes, link to car brand/model/license (e.g., 'Hyundai Tucson, NSW-GHI789') and add repair history, searchable for future services." },
      { q: "What if the tyre isn't tagged yet?", a: "Retrofit with NFC stickers or laser marking on-site (tools ~$200–$500); self-registration form generates unique IDs in real-time." },
      { q: "How do I verify if a tyre is compliant or in the scheme?", a: "Search by field (e.g., batch/supplier); the system checks blockchain for status, alerting if at risk (e.g., 'This tyre is unregistered—flag for dumping potential')." },
      { q: "Does it help with fraud protection during repairs?", a: "Blockchain logs all changes with your signature, preventing tampering (e.g., faking repairs). Anomalies trigger alerts, ensuring audits are fraud-proof." },
      { q: "What's the cost for a solo mechanic?", a: "Free tier for basic use; Pro ($100/month) for advanced features like predictive maintenance insights." },
      { q: "Can I see real-time visualizations of my service history?", a: "Yes, personal dashboard shows tyre flows (e.g., pie charts of repaired vs. disposed), updating live as you scan." },
    ],
  },
  {
    id: "wholesalers",
    title: "Wholesalers / Suppliers",
    items: [
      { q: "How can I track batches from import to distribution?", a: "Register batches at import with unique IDs, using bulk uploads to link suppliers (e.g., Hankook Australia) and monitor downstream (e.g., to Tyrepower stores)." },
      { q: "Does it support searching by supplier or batch?", a: "Yes, advanced search filters by field (e.g., 'batch: 0225 supplier: Sumitomo'), showing full lifecycle and associations (e.g., to fleet vehicles)." },
      { q: "How do I handle retrofitting for supplied tyres?", a: "Provide pre-tagged tyres or use the system to generate IDs during renewal; self-registration allows wholesalers to add tags at warehouse service points." },
      { q: "Can I check scheme compliance for my stock?", a: "Search any tyre/batch; blockchain verifies if in TSA scheme (e.g., 'Compliant—recovered at 75% rate'), with reports for audits." },
      { q: "What fraud protection is built in for wholesale?", a: "Smart contracts require multi-party signatures for batch transfers, detecting fraud like fake disposals. Real-time alerts for anomalies in supply chains." },
      { q: "What's the pricing for wholesalers?", a: "Standard ($150/month) for unlimited registrations; includes wholesale trends insights." },
      { q: "Are there real-time visualizations for supply flows?", a: "Yes, Sankey diagrams update live with RFID scans, showing batch movements from import to end-of-life." },
    ],
  },
  {
    id: "fleets",
    title: "Fleet / Chain Operators",
    items: [
      { q: "How do I manage bulk tyre tracking for fleets?", a: "Use RFID bulk scans or CSV imports to register/update thousands of tyres, associating with fleet vehicles (e.g., 'Isuzu D-Max, NT-PQR678') and repairs." },
      { q: "Can I search by particular fields like batch or supplier?", a: "Yes, filter searches (e.g., 'supplier: Goodyear batch: 0525 location: WA'), viewing linked data like repair notes or compliance status." },
      { q: "What if tyres need retrofitting during renewal?", a: "Self-registration via app during retreading; embed BLE/NFC tags for real-time monitoring, generating unique IDs on-the-fly." },
      { q: "How do I verify if fleet tyres are in the scheme?", a: "Batch search checks blockchain for scheme compliance (e.g., 'All 100 OTR tyres compliant per TSA—avoid burial risks')." },
      { q: "How does it protect against fraud in chain operations?", a: "Blockchain enterprise features require wallet keys for updates, with AI detecting patterns like unauthorized disposals. Multi-user audits ensure chain-wide integrity." },
      { q: "What's the pricing for fleets?", a: "Pro ($200/month) or custom (TBD $500+); includes on-site support and risk maps." },
      { q: "Are there real-time visualizations for fleet optimization?", a: "Yes, live dashboards show tyre flows and predictions (e.g., '10% waste increase in QLD mining—schedule retreads')." },
    ],
  },
  {
    id: "recyclers",
    title: "Recyclers / Disposal Providers",
    items: [
      { q: "How do I update tyres at end-of-life?", a: "Scan incoming tyres to update status to 'Recycled,' logging outcomes (e.g., 'Processed into road base') on blockchain for proof." },
      { q: "Can I search for incoming batches from suppliers?", a: "Yes, filter by batch/supplier (e.g., 'supplier: Continental batch: 0425'), viewing full history and associations (e.g., from ship repairers)." },
      { q: "What about retrofitting recycled materials?", a: "For renewal products (e.g., retreads), self-registration adds new IDs; the system tracks recycled content for sustainability reports." },
      { q: "How do I confirm tyres are scheme-compliant?", a: "ID search verifies against TSA lists/blockchain (e.g., 'Compliant—contributes to 66% national rate')." },
      { q: "What fraud protection exists for disposal?", a: "Blockchain requires recycler signatures for final updates, alerting on mismatches (e.g., 'Unverified disposal—potential fraud')." },
      { q: "What's the pricing for recyclers?", a: "Enterprise tier ($300/month); includes material flow insights." },
      { q: "Are there real-time visualizations for recycling trends?", a: "Yes, updating charts show recovery rates and waste flows, e.g., 'QLD OTR at 100,000 tonnes buried—improve with TLRS'." },
    ],
  },
  {
    id: "regulators",
    title: "Regulators / Government",
    items: [
      { q: "How does TLRS support regulatory audits?", a: "Generate state-based reports (e.g., QLD dumping trends) from blockchain data, exporting for investigations like Springbrook cases." },
      { q: "Can I search for non-compliant tyres or batches?", a: "Yes, admin search by field (e.g., 'batch: unrecovered supplier: Pirelli'), flagging risks with associated vehicles/licenses." },
      { q: "What about self-registration for public reporting?", a: "Citizens/regulators can register anonymously via form to report untagged tyres, triggering blockchain logs for follow-up." },
      { q: "How do I verify scheme participation?", a: "Search shows compliance (e.g., 'Tyre in TSA scheme: Yes, recovered at 75%')." },
      { q: "What fraud protection is there for enforcement?", a: "Immutable blockchain provides audit trails, with AI alerts for anomalies (e.g., mass disposals without verification)." },
      { q: "Is pricing applicable for government use?", a: "Custom tier (TBD, potentially subsidized); focus on public dashboards for transparency." },
      { q: "Are there real-time visualizations for policy monitoring?", a: "Yes, heat maps update live for state recovery (e.g., NSW vs. QLD gaps), aiding EPR policy development." },
    ],
  },
];

const FAQ = () => {
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    document.title = "TLRS FAQ | Tyre Lifecycle Registration";
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sectionsData;
    return sectionsData
      .map((s) => ({
        ...s,
        items: s.items.filter((it) =>
          it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((s) => s.items.length > 0);
  }, [query]);

  const allVisibleItemValues = useMemo(() => {
    return filtered.flatMap((s) =>
      s.items.map((_, idx) => `${s.id}-q${idx}`)
    );
  }, [filtered]);

  const expandAll = () => setOpenItems(allVisibleItemValues);
  const collapseAll = () => setOpenItems([]);

  const handleSectionOpenChange = (sectionId: string, values: string[]) => {
    // Replace only values for this section prefix
    setOpenItems((prev) => {
      const withoutSection = prev.filter((v) => !v.startsWith(`${sectionId}-`));
      return [...withoutSection, ...values];
    });
  };

  return (
    <main className="min-h-screen bg-gradient-earth">
      <header className="border-b bg-background/70 backdrop-blur">
        <div className="container py-6">
          <h1 className="text-3xl font-bold">TLRS FAQ – Tyre Lifecycle Registration</h1>
          <p className="text-muted-foreground">Answers tailored for each stakeholder and practical site guidance</p>
        </div>
      </header>

      <div className="container py-10 grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3">
          <nav className="sticky top-24 space-y-2">
            <p className="text-sm font-semibold text-muted-foreground">On this page</p>
            <ul className="space-y-1 text-sm">
              {sectionsData.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section className="col-span-12 md:col-span-9 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions (e.g., TSA, recycling, batch)"
              aria-label="Search FAQs"
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={expandAll} disabled={allVisibleItemValues.length === 0}>Expand all</Button>
              <Button variant="outline" onClick={collapseAll}>Collapse all</Button>
            </div>
          </div>

          {filtered.map((section) => (
            <article id={section.id} key={section.id} className="scroll-mt-28">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <Accordion
                type="multiple"
                value={openItems.filter((v) => v.startsWith(`${section.id}-`))}
                onValueChange={(vals) => handleSectionOpenChange(section.id, vals as string[])}
                className="w-full"
              >
                {section.items.map((item, idx) => {
                  const value = `${section.id}-q${idx}`;
                  return (
                    <AccordionItem value={value} key={value}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{item.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground">No results. Try different keywords.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default FAQ;
