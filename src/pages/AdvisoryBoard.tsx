import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Search, Grid, List, Lightbulb } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { advisoryBoardMembers, type AdvisoryBoardMember } from "@/content/advisoryBoard";
import { useIsMobile } from "@/hooks/use-mobile";
import TyreConnectionCard from "@/components/advisory/TyreConnectionCard";
import AdvisoryActionButton from "@/components/advisory/AdvisoryActionButton";

type ViewMode = "table" | "cards" | "tyre-focus";

const domainColors: Record<string, string> = {
  Environment: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Engineering: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Business: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
  Policy: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  Science: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  Health: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  Law: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  Finance: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  Design: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300",
  Education: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
};

const costColors: Record<string, string> = {
  Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const domains = ["All", "Environment", "Engineering", "Business", "Policy", "Science", "Health", "Law", "Finance", "Design", "Education"];

// Extended advisory board data with tyre connections and TLRS features
const advisoryBoardWithTyres = advisoryBoardMembers.map(member => ({
  ...member,
  tyreConnection: getTyreConnection(member.adviser, member.domain),
  tlrsFeature: getTlrsFeature(member.adviser, member.domain),
  actions: getAdviserActions(member.adviser, member.domain)
}));

function getTyreConnection(adviser: string, domain: string) {
  const connections: Record<string, any> = {
    "Jane Goodall": {
      aspect: "Wildlife Protection from Tyre Waste",
      description: "Discarded tyres create toxic breeding grounds for disease vectors and harm wildlife habitats.",
      impact: "Preventing 537,000 tonnes of tyre waste from damaging Australian ecosystems annually",
      example: "Springbrook's illegal dumping site threatened koala habitats with microplastics and chemical leaching"
    },
    "David Attenborough": {
      aspect: "Ocean Conservation & Microplastics",
      description: "Tyre wear particles are the largest source of microplastics entering our waterways.",
      impact: "Tracking tyre lifecycles prevents 35% of microplastic pollution in marine environments",
      example: "Great Barrier Reef protection through better tyre disposal tracking near coastal areas"
    },
    "Hedy Lamarr": {
      aspect: "RFID Innovation in Tyre Tracking",
      description: "Frequency-hopping technology enables tamper-proof tyre identification systems.",
      impact: "99.9% accurate tracking reduces illegal dumping by enabling instant identification",
      example: "Crypto-secured RFID tags make tyre counterfeiting impossible, protecting recycling integrity"
    },
    "Elon Musk": {
      aspect: "IoT Sensors for Smart Tyre Management",
      description: "Connected sensors monitor tyre condition, location, and environmental impact in real-time.",
      impact: "Predictive maintenance reduces tyre waste by 40% through optimized replacement timing",
      example: "Tesla-style over-the-air updates for tyre health monitoring across commercial fleets"
    }
  };
  
  return connections[adviser] || {
    aspect: "Lifecycle Management",
    description: "Expert guidance on optimizing tyre tracking and disposal processes.",
    impact: "Contributing to Australia's 66% tyre recovery rate improvement",
    example: "Implementation of best practices for tyre stewardship programs"
  };
}

function getTlrsFeature(adviser: string, domain: string) {
  const features: Record<string, any> = {
    "Jane Goodall": {
      name: "Wildlife Impact Dashboard",
      description: "Track environmental impact of tyre disposal near protected habitats",
      status: "planned"
    },
    "David Attenborough": {
      name: "Ocean Health Metrics",
      description: "Monitor microplastic reduction through proper tyre recycling",
      status: "concept"
    },
    "Hedy Lamarr": {
      name: "RFID Tyre Authentication",
      description: "Crypto-secured tags for tamper-proof tyre identification",
      status: "live"
    },
    "Elon Musk": {
      name: "Smart Tyre Sensors",
      description: "IoT-enabled predictive maintenance and location tracking",
      status: "planned"
    }
  };
  
  return features[adviser] || {
    name: "Core Tracking System",
    description: "Fundamental tyre lifecycle management and reporting",
    status: "live"
  };
}

function getAdviserActions(adviser: string, domain: string) {
  const actions: Record<string, any> = {
    "Jane Goodall": [
      {
        type: "report",
        label: "Report Wildlife Impact",
        route: "/tyres?tab=report&type=wildlife",
        description: "Document environmental damage from illegal tyre dumping"
      }
    ],
    "David Attenborough": [
      {
        type: "feature",
        label: "View Ocean Metrics",
        route: "/dashboard?view=environmental",
        description: "See microplastic reduction from proper tyre disposal"
      }
    ],
    "Hedy Lamarr": [
      {
        type: "demo",
        label: "RFID Demo",
        external: "https://globaltyres.org/demo/rfid",
        description: "Interactive demonstration of tyre authentication technology"
      }
    ],
    "Elon Musk": [
      {
        type: "feature",
        label: "Smart Sensors",
        route: "/tyres?tab=sensors",
        description: "Explore IoT-enabled tyre monitoring capabilities"
      }
    ]
  };
  
  return actions[adviser] || [
    {
      type: "guide",
      label: "Best Practices Guide",
      route: "/faq",
      description: "Learn optimal tyre stewardship methods"
    }
  ];
}

export default function AdvisoryBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const isMobile = useIsMobile();

  const filteredMembers = useMemo(() => {
    return advisoryBoardWithTyres.filter((member) => {
      const matchesSearch = [
        member.adviser,
        member.want,
        member.courseCorrect,
        member.benefits,
        member.results,
        member.tyreConnection.aspect,
        member.tlrsFeature.name
      ].some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const matchesDomain =
        selectedDomain === "All" || member.domain === selectedDomain;

      return matchesSearch && matchesDomain;
    });
  }, [searchQuery, selectedDomain]);

  const MemberCard = ({ member }: { member: any }) => (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{member.adviser}</CardTitle>
          <Badge className={domainColors[member.domain]}>{member.domain}</Badge>
        </div>
        <CardDescription className="font-medium">{member.want}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Methods to Course-Correct</p>
          <p className="text-sm">{member.courseCorrect}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Cost</p>
          <div className="flex flex-col gap-1">
            <Badge className={costColors[member.costLevel]}>{member.costLevel}</Badge>
            <p className="text-xs text-muted-foreground">{member.costNotes}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Benefits</p>
          <p className="text-sm">{member.benefits}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Results</p>
          <p className="text-sm">{member.results}</p>
        </div>
        
        <div className="border-t pt-3">
          <p className="text-sm font-medium text-muted-foreground mb-2">How Tyres Are Involved</p>
          <p className="text-sm font-medium">{member.tyreConnection.aspect}</p>
          <p className="text-xs text-muted-foreground">{member.tyreConnection.description}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">TLRS Feature</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{member.tlrsFeature.name}</p>
            <Badge variant={member.tlrsFeature.status === 'live' ? 'default' : 'outline'} className="text-xs">
              {member.tlrsFeature.status}
            </Badge>
          </div>
        </div>
        
        {member.actions.length > 0 && (
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Take Action</p>
            <div className="space-y-2">
              {member.actions.map((action: any, index: number) => (
                <AdvisoryActionButton
                  key={index}
                  adviser={member.adviser}
                  domain={member.domain}
                  action={action}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>Virtual Advisory Board | TLRS</title>
        <meta
          name="description"
          content="Meet our virtual advisory board of renowned experts guiding TLRS development across environment, engineering, policy, and more domains."
        />
        <link rel="canonical" href="https://globaltyres.org/board" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Virtual Advisory Board
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our virtual advisory board comprises distinguished experts across multiple domains, 
              providing strategic guidance to enhance TLRS capabilities and maximize positive impact on Australia's tyre stewardship.
            </p>
          </header>

          <div className="space-y-6">
            {/* Controls */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search advisors, tyre connections, TLRS features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* View Mode Toggle */}
                <div className="flex bg-muted rounded-lg p-1">
                  <Button
                    variant={viewMode === "table" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("table")}
                    className="px-3"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "cards" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("cards")}
                    className="px-3"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "tyre-focus" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("tyre-focus")}
                    className="px-3"
                  >
                    <Lightbulb className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Domain Filter */}
            {isMobile ? (
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select domain" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Tabs value={selectedDomain} onValueChange={setSelectedDomain}>
                <TabsList className="grid w-full grid-cols-6 lg:grid-cols-11">
                  {domains.map((domain) => (
                    <TabsTrigger key={domain} value={domain} className="text-xs">
                      {domain}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value={selectedDomain} className="mt-6">
                  {/* Content will be rendered below */}
                </TabsContent>
              </Tabs>
            )}

            {/* Results */}
            {filteredMembers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No advisory board members found matching your criteria.
                </p>
              </div>
            ) : viewMode === "tyre-focus" ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredMembers.map((member, index) => (
                  <TyreConnectionCard
                    key={index}
                    adviser={member.adviser}
                    domain={member.domain}
                    tyreConnection={member.tyreConnection}
                    tlrsFeature={member.tlrsFeature}
                  />
                ))}
              </div>
            ) : viewMode === "cards" ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredMembers.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border bg-card overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Adviser</TableHead>
                      <TableHead>Domain</TableHead>
                      <TableHead className="hidden lg:table-cell">What They Want</TableHead>
                      <TableHead className="hidden xl:table-cell">Tyre Connection</TableHead>
                      <TableHead className="hidden lg:table-cell">TLRS Feature</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead className="hidden lg:table-cell">Benefits</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMembers.map((member, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{member.adviser}</TableCell>
                        <TableCell>
                          <Badge className={domainColors[member.domain]}>
                            {member.domain}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell max-w-xs">
                          <div className="truncate" title={member.want}>
                            {member.want}
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-cell max-w-sm">
                          <div className="truncate" title={member.tyreConnection.aspect}>
                            {member.tyreConnection.aspect}
                          </div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell max-w-xs">
                          <div className="flex items-center gap-2">
                            <span className="truncate" title={member.tlrsFeature.name}>
                              {member.tlrsFeature.name}
                            </span>
                            <Badge variant={member.tlrsFeature.status === 'live' ? 'default' : 'outline'} className="text-xs">
                              {member.tlrsFeature.status}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <Badge className={costColors[member.costLevel]}>
                              {member.costLevel}
                            </Badge>
                            <p className="text-xs text-muted-foreground hidden sm:block">
                              {member.costNotes}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell max-w-xs">
                          <div className="truncate" title={member.benefits}>
                            {member.benefits}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
