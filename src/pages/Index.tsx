import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4 bg-gradient-to-b from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold text-center text-primary">Welcome to the Aquarium</h1>
      <Separator />
      <Tabs defaultValue="explore" className="w-full max-w-2xl">
        <TabsList className="flex justify-center">
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
        </TabsList>
        <TabsContent value="explore">
          <Card className="w-full shadow-xl">
            <CardHeader>
              <CardTitle className="text-primary">Explore the Marine Life</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/images/aquarium.jpg"
                  alt="Aquarium"
                  className={cn("rounded-md object-cover transition-opacity duration-1000 ease-in-out", {
                    "opacity-0": !isModalOpen,
                    "opacity-100": isModalOpen,
                  })}
                />
              </AspectRatio>
              <p className="mt-4 text-center">
                Discover the beauty of marine life at our aquarium. From colorful
                fish to majestic sea turtles, there's something for everyone to
                enjoy.
              </p>
              <div className="mt-4 flex justify-center">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-primary text-primary" onClick={handleLearnMoreClick}>Learn More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>More Information</DialogTitle>
                    </DialogHeader>
                    <p>
                      Our aquarium is home to a diverse range of marine life, including exotic fish, sea turtles, and more. We are dedicated to marine conservation and education.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Button variant="outline" className="border-primary text-primary" onClick={handleCloseModal}>Close</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card className="w-full shadow-xl">
            <CardHeader>
              <CardTitle className="text-primary">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" className="rounded-md border" />
              <p className="mt-4 text-center">
                Join us for special events and activities throughout the year. Check our calendar for upcoming events.
              </p>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="border-primary text-primary">View Events</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tickets">
          <Card className="w-full shadow-xl">
            <CardHeader>
              <CardTitle className="text-primary">Buy Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-center">
                Purchase your tickets online and skip the line! We offer various ticket options to suit your needs.
              </p>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="border-primary text-primary">Buy Tickets</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="outline" className="border-primary text-primary mt-8">Need Help?</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact our support team for assistance.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Alert className="mt-8">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          We have special discounts for group visits. Contact us for more details.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Index;