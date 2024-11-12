// LandingPage.js
import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Ripple from "@/components/ui/ripple";
import companies from "../data/companies.json";
import faq from "../data/faq.json";
import About from "@/components/About";


const LandingPage = () => {
  // const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  return (
    
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-10 px-6">
      
      <section className="text-center">
      <Ripple />
        <div className="relative flex flex-col items-center justify-center ripple-container">
          <h1 className="relative z-10 gradient-title text-3xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
            For Devs who <br />are 100X
          </h1>
        </div>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      

      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="green" size="xl" className="rounded-xl">
            Find Jobs
          </Button>
        </Link>

        <Link to="/post-job">
          <Button variant="destructive" size="xl" className="rounded-xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Bento Grid */}
      <About/>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post Jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* Accordion */}
      <Accordion className="px-4" type="single" collapsible>
        {faq.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
