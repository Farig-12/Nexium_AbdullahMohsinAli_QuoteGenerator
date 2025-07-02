
'use-client'

{/*for now it's static but we have to add client side logic in it */}
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Smile, Frown } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-400  to-blue-800 h-screen">

      {/*Buttons*/}
      <div className=" flex space-x-2 justify-center">
        <Button className='rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg">
        <Sparkles/> All Quotes
      </Button>
      <Button  className='rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg"> 
        <Heart/> Thoughtful
      </Button>
      <Button  className='rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg">
        <Smile/> Happy
      </Button>
      <Button  className='rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg">
        <Frown/> Sad
      </Button>
      </div>

      {/*Cards*/}
      <Card className="w-[400px] bg-white/5 text-white shadow-lg">
      <CardHeader>
        <CardTitle>Quote of the Day</CardTitle>
        <CardDescription>Inspirational • Life</CardDescription>
      </CardHeader>
      <CardContent>
        <p>"Success is not final, failure is not fatal: It is the courage to continue that counts."</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">— Winston Churchill</p>
      </CardFooter>
    </Card>
    </div>
  );
}
