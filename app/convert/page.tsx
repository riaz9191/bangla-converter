import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ConvertPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Bangla Converter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Unicode</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Enter Unicode text here..." rows={10} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bijoy</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Enter Bijoy text here..." rows={10} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
