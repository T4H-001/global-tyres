import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Search, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { advisoryBoardMembers, type AdvisoryBoardMember } from "@/content/advisoryBoard";
import { useIsMobile } from "@/hooks/use-mobile";

type ViewMode = "table" | "cards";

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

export default function AdvisoryBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const isMobile = useIsMobile();

  const filteredMembers = useMemo(() => {
    return advisoryBoardMembers.filter((member) => {
      const matchesSearch = [
        member.adviser,
        member.want,
        member.courseCorrect,
        member.benefits,
        member.results,
      ].some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const matchesDomain =
        selectedDomain === "All" || member.domain === selectedDomain;

      return matchesSearch && matchesDomain;
    });
  }, [searchQuery, selectedDomain]);

  const MemberCard = ({ member }: { member: AdvisoryBoardMember }) => (
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
              providing strategic guidance to enhance TLRS capabilities and maximize positive impact.
            </p>
          </header>

          <div className="space-y-6">
            {/* Controls */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search advisors, recommendations, benefits..."
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
                      <TableHead className="hidden xl:table-cell">Methods to Course-Correct</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead className="hidden lg:table-cell">Benefits</TableHead>
                      <TableHead className="hidden xl:table-cell">Results</TableHead>
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
                          <div className="truncate" title={member.courseCorrect}>
                            {member.courseCorrect}
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
                        <TableCell className="hidden xl:table-cell max-w-xs">
                          <div className="truncate" title={member.results}>
                            {member.results}
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