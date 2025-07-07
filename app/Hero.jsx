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
    <div className="bg-gradient-to-r from-purple-800 to-amber-800 min-h-screen px-4 py-8">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <Button
          onClick={() => setselectedTag('')}
          className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg ${
            selectedTag === ''
              ? 'bg-white text-black hover:scale-105 hover:text-white'
              : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
          }`}
        >
          <Sparkles /> All Quotes
        </Button>

        <Button
          onClick={() => setselectedTag('Thoughtful')}
          className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg ${
            selectedTag === 'Thoughtful'
              ? 'bg-white text-black hover:scale-105 hover:text-white'
              : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
          }`}
        >
          <Heart /> Thoughtful
        </Button>

        <Button
          onClick={() => setselectedTag('Happy')}
          className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg ${
            selectedTag === 'Happy'
              ? 'bg-white text-black hover:scale-105 hover:text-white'
              : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
          }`}
        >
          <Smile /> Happy
        </Button>

        <Button
          onClick={() => setselectedTag('Sad')}
          className={`rounded-full backdrop-blur-md shadow-xl transition-all duration-300 transform px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg ${
            selectedTag === 'Sad'
              ? 'bg-white text-black hover:scale-105 hover:text-white'
              : 'bg-white/10 hover:bg-white/20 hover:scale-105 text-white'
          }`}
        >
          <Frown /> Sad
        </Button>

        <Button
          onClick={generateQuotes}
          className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-md shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 transform px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg"
        >
          <RotateCcw /> Refresh
        </Button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {Randomquotes.map((quote) => (
          <Card
            key={quote.id}
            className="w-full max-w-[90%] sm:max-w-[500px] bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-2xl shadow-xl p-4 sm:p-6"
          >
            <CardHeader>
              <CardTitle className="text-base sm:text-xl">Quote of the Day</CardTitle>
              <CardDescription className="text-gray-300 text-sm sm:text-base">
                {quote.category.toUpperCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base">"{quote.text}"</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-300 ml-auto">— {quote.author}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>

  );
}

export default Hero



