'use client';

import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Smile, Frown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";


const Hero = ({ quotes }) => {
  const [selectedTag, setselectedTag] = useState('')
  const [Randomquotes, setRandomquotes] = useState([])

  useEffect(() => {
    const filterQuotes = selectedTag ? quotes.filter(q => q.category.toLowerCase() === selectedTag.toLowerCase()) : quotes;
    const shuffle = [...filterQuotes].sort(() => {return Math.random() - 0.5}).slice(0, 3)
    setRandomquotes(shuffle)

  }, [selectedTag])

  
  return (
    <div className="bg-gradient-to-r from-purple-800  to-amber-800 h-screen">

      {/*Buttons*/}
      <div className=" flex space-x-2 justify-center">
        <Button onClick = {() => {setselectedTag('')}} className='rounded-full bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg">
        <Sparkles/> All Quotes
      </Button>
      <Button  onClick = {() => {setselectedTag('Thoughtful')}} className='rounded-full bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg"> 
        <Heart/> Thoughtful
      </Button>
      <Button onClick = {() => {setselectedTag('Happy')}} className='rounded-full bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg">
        <Smile/> Happy
      </Button>
      <Button onClick = {() => {setselectedTag('Sad')}} className='rounded-full bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 transform' size = "lg">
        <Frown/> Sad
      </Button>
      </div>

      <div className="flex flex-wrap ml-16 mt-4 gap-7">
        {
            Randomquotes.map((quote) => (

                <Card key = {quote.id} className="w-[500px] h-auto p-6 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-2xl shadow-xl my-[4rem]">
                <CardHeader>
                    <CardTitle>Quote of the Day</CardTitle>
                    <CardDescription className={'text-gray-300'}>{quote.category.toUpperCase()}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>"{quote.text}"</p>
                </CardContent>
                <CardFooter>
                    <p className="text-xl text-gray-300 ml-52">— {quote.author}</p>
                </CardFooter>
                </Card>
            ))
        }
         
      </div>
     

    </div>
  );
}

export default Hero



