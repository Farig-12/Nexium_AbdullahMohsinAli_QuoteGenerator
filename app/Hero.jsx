'use client';

import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Smile, Frown, RotateCcw } from "lucide-react";
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

 const generateQuotes = () =>{
    const filterQuotes = selectedTag ? quotes.filter(q => q.category.toLowerCase() === selectedTag.toLowerCase()) : quotes;
    const shuffle = [...filterQuotes].sort(() => {return Math.random() - 0.5}).slice(0, 3)
    setRandomquotes(shuffle)
 }

  useEffect(() => {
    generateQuotes();

  }, [selectedTag])

  
  return (
    <div className="bg-gradient-to-r from-purple-800  to-amber-800 h-screen">

      {/* Buttons */}
      <div className=" flex space-x-2 justify-center">
        <Button onClick = {() => {setselectedTag('')}}  className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-6 py-6 text-lg ${
      selectedTag === '' ? 'bg-white text-black hover:scale-105 hover:text-white' : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
    }`} size = "lg">
        <Sparkles/> All Quotes
      </Button>

      <Button  onClick = {() => {setselectedTag('Thoughtful')}} className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-6 py-6 text-lg ${
      selectedTag === 'Thoughtful' ? 'bg-white text-black hover:scale-105 hover:text-white' : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
    }`} size = "lg"> 
        <Heart/> Thoughtful
      </Button>

      <Button onClick = {() => {setselectedTag('Happy')}} className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-6 py-6 text-lg ${
      selectedTag === 'Happy' ? 'bg-white text-black hover:scale-105 hover:text-white' : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
    }`} size = "lg">
        <Smile/> Happy
      </Button>

      <Button onClick = {() => {setselectedTag('Sad')}} className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-6 py-6 text-lg ${
      selectedTag === 'Sad' ? 'bg-white text-black hover:scale-105 hover:text-white' : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
    }`} size = "lg">
        <Frown/> Sad
      </Button>

      <Button onClick={generateQuotes} className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-md shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 transform px-6 py-6 text-lg" size="lg">
          <RotateCcw /> Refresh
      </Button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-x-7 gap-y-6 mt-6">
        {
            Randomquotes.map((quote) => (

                <Card key = {quote.id} className="w-[500px] h-auto p-6 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-2xl shadow-xl">
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



