import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold text-center">Welcome to the Aquarium</h1>
      <Separator />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Explore the Marine Life</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <img
              src="/images/aquarium.jpg"
              alt="Aquarium"
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <p className="mt-4 text-center">
            Discover the beauty of marine life at our aquarium. From colorful
            fish to majestic sea turtles, there's something for everyone to
            enjoy.
          </p>
          <div className="mt-4 flex justify-center">
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;