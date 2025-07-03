'use client';

{/*for now it's static but we have to add client side logic in it */}
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Smile, Frown } from "lucide-react";
import { useState, useEffect } from "react";
import qData from '@/qdata/quotes.json'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {

  const [selectedTag, setselectedTag] = useState('')
  const [quotesData, setquotesData] = useState([])

  useEffect(()=>{
      setquotesData(qData);
  },[])

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

      {/*Cards*/}
      <div className="flex flex-wrap ml-16 mt-4 gap-7">
        <Card className="w-[500px] h-auto p-6 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-2xl shadow-xl my-[4rem]">
          <CardHeader>
            <CardTitle>Quote of the Day</CardTitle>
            <CardDescription className={'text-gray-300'}>Inspirational • Life</CardDescription>
          </CardHeader>
          <CardContent>
            <p>"Success is not final, failure is not fatal: It is the courage to continue that counts."</p>
          </CardContent>
          <CardFooter>
            <p className="text-xl text-gray-300 ml-52">— Winston Churchill</p>
          </CardFooter>
        </Card>
        <Card className="w-[500px] h-auto p-6 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-2xl shadow-xl my-[4rem]">
          <CardHeader>
            <CardTitle>Quote of the Day</CardTitle>
            <CardDescription>Inspirational • Life</CardDescription>
          </CardHeader>
          <CardContent>
            <p>"Success is not final, failure is not fatal: It is the courage to continue that counts."</p>
          </CardContent>
          <CardFooter>
            <p className="text-xl text-gray-300 ml-52">— Winston Churchill</p>
          </CardFooter>
        </Card>
        <Card className="w-[500px] h-auto p-6 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-2xl shadow-xl my-[4rem]">
          <CardHeader>
            <CardTitle>Quote of the Day</CardTitle>
            <CardDescription>Inspirational • Life</CardDescription>
          </CardHeader>
          <CardContent>
            <p>"Success is not final, failure is not fatal: It is the courage to continue that counts."</p>
          </CardContent>
          <CardFooter>
            <p className="text-xl text-gray-300 ml-52">— Winston Churchill</p>
          </CardFooter>
        </Card>
      </div>

    </div>
  );
}
