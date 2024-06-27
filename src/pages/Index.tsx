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
      <Card className="w-full max-w-md mt-8">
        <CardHeader>
          <CardTitle>Discover the Coral Reefs</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <img
              src="/images/coral-reef.jpg"
              alt="Coral Reef"
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <p className="mt-4 text-center">
            Explore the vibrant coral reefs and witness the diverse marine life that inhabits these underwater ecosystems.
          </p>
          <div className="mt-4 flex justify-center">
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-md mt-8">
        <CardHeader>
          <CardTitle>Shark Tank Adventure</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <img
              src="/images/shark-tank.jpg"
              alt="Shark Tank"
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <p className="mt-4 text-center">
            Get up close and personal with the ocean's most fascinating predators in our thrilling shark tank exhibit.
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