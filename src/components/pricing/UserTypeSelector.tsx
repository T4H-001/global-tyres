import { Card, CardContent } from "@/components/ui/card";
import { Car, Building2 } from "lucide-react";

interface UserTypeSelectorProps {
  selectedType: 'individual' | 'business' | null;
  onSelect: (type: 'individual' | 'business') => void;
}

export const UserTypeSelector = ({ selectedType, onSelect }: UserTypeSelectorProps) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Who are you?</h3>
        <p className="text-lg text-muted-foreground">Choose your user type to see relevant plans</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Card 
          className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
            selectedType === 'individual' 
              ? 'ring-2 ring-primary shadow-primary/20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900' 
              : 'hover:bg-muted/50'
          }`}
          onClick={() => onSelect('individual')}
        >
          <CardContent className="p-8 text-center">
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              selectedType === 'individual' 
                ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                : 'bg-muted text-muted-foreground'
            }`}>
              <Car className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Car Owner</h4>
            <p className="text-muted-foreground">Individual looking to track personal vehicle tyres</p>
          </CardContent>
        </Card>
        
        <Card 
          className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
            selectedType === 'business' 
              ? 'ring-2 ring-primary shadow-primary/20 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900' 
              : 'hover:bg-muted/50'
          }`}
          onClick={() => onSelect('business')}
        >
          <CardContent className="p-8 text-center">
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              selectedType === 'business' 
                ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' 
                : 'bg-muted text-muted-foreground'
            }`}>
              <Building2 className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Business</h4>
            <p className="text-muted-foreground">Fleet operator or tyre retailer needing comprehensive tracking</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};