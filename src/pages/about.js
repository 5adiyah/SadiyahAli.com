import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";

export default function About() {
    return (
        <Layout>
            <h2>About me</h2>
            <p>TLDR;

                My name is Sadiyah Ali, I'm 26 years old and I live in Portland Oregon. I love technology, food, traveling, and nature.

                The Longer Version

                My first love in life was anything and everything that had to do with tech and web development. I first got interested in tech when I was in middle school and I decided I wanted to start my own blog. I must have spent a good week trying to find a theme that I liked before thinking, "There's got to be a way for me to make my own". From there I started learning about html and css and the rest was history. I've taken a one year web development certificate at Portland Community College and also took about a year of Computer Science classes at Portland State University before deciding that the program was going a little too slow for me. I ended up taking a year off of school and enrolling myself into Epicodus, a local programming bootcamp. From there I was able to break into the web development world, and I have been here since enjoying every minute of it.

                My second love is travel. Back when I was 21 I took my first ever solo trip to Calgary Alberta to visit my friend who had moved there and from then on I was hit hard with the travel bug. Since then I've done over several dozen trips across the United States and Canada. This year, I had been planning on going on my first international trip but of course, Miss Corona came a long and foiled a lot of my plans.

                What will you find on this site?

                Growing up, I always thought that travel was only for the rich. Now, I’m a firm believer that you don’t need weeks of leave or thousands of dollars in the bank to have an incredible time. I'm hoping to share my future travel plans, itineraries, and tips here on this site.
                I grew up as the eldest child of immigrant parents. For as long as I can remember we were always encouraged to go into the Medical field as Doctors, Nurses, Pharmacists, etc. You can imagine my parents' hesitations when I told them I was going to learn how to create websites and applications. For a few years, my father thought that I "fixed computers". I hope to share here tips and tricks for young folks aspiring to break into the world of web development.
                Lately, I’ve been very interested in web accessibility. A11y helps marginalized people access the internet. It’s all about inclusion. I hope to share some resources for people to use their tech skills to make the web more accessible for everyone.
                I like to cook and bake, perhaps that might find it's way here as well!</p>
        </Layout>
   )
};




