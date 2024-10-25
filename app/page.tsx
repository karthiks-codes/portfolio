"use client"
import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, BookOpen, Trophy, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const technicalSkills = [
    "C", "Java", "R", "Python", "SQL", "Linux", 
    "HTML", "CSS", "JavaScript", "StarUML", "GitHub"
  ];

  const projects = [
    {
      title: "Weather Data Analysis",
      description: "Comprehensive analysis of weather patterns and conditions using R, focusing on data interpretation and visualization.",
      tech: ["R", "Data Analysis", "Statistics"],
      period: "July 2023"
    },
    {
      title: "House Rental Application",
      description: "Streamlined platform connecting tenants and landlords, simplifying property management and search processes.",
      tech: ["Java", "SQL", "Database Design"],
      period: "Dec 2023"
    },
    {
      title: "Diabetes Disease Analysis",
      description: "In-depth analysis of diabetes causes, risk factors, and management strategies using Python.",
      tech: ["Python", "Data Analysis", "Healthcare"],
      period: "Dec 2023"
    }
  ];

  const achievements = [
    "Rank 7380 among 1,70,000 candidates in TS-EAMCET",
    "Rank 150 among 600 participants in Smart Interviews coding contest",
    "Active participant in CodeChef competitions"
  ];

  return (
    <div className="min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            Akhil Karthik
          </motion.h1>
          <motion.p 
            {...fadeIn}
            className="text-2xl mb-8 text-gray-300"
          >
            Computer Science Student at VNR Vignana Jyothi
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 border-2 border-b text-black "
              onClick={() => window.open('https://github.com/karthiks-codes', '_blank')}
            >
              <Github className="w-5 h-5" /> GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 text-black "
              onClick={() => window.open('https://linkedin.com/in/akhil-karthik-3a9253256', '_blank')}
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="gap-2  "
              onClick={() => window.location.href = 'mailto:akhilkarthikboddupalli@gmail.com'}
            >
              <Mail className="w-5 h-5" /> Email
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            {...fadeIn}
            className="text-4xl font-bold mb-8 flex items-center gap-3"
          >
            <BookOpen className="w-8 h-8 text-purple-400" />
            Education
          </motion.h2>
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">B.Tech in Computer Science and Business Systems</h3>
                <p className="text-gray-300">VNR Vignana Jyothi Institute of Engineering and Technology</p>
                <p className="text-purple-400">CGPA: 8.73 | 2022-2026</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            {...fadeIn}
            className="text-4xl font-bold mb-8 flex items-center gap-3"
          >
            <Cpu className="w-8 h-8 text-blue-400" />
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-lg py-2 px-4 hover:bg-purple-500 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            {...fadeIn}
            className="text-4xl font-bold mb-8 flex items-center gap-3"
          >
            <Code className="w-8 h-8 text-pink-400" />
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-purple-400 text-sm">{project.period}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            {...fadeIn}
            className="text-4xl font-bold mb-8 flex items-center gap-3"
          >
            <Trophy className="w-8 h-8 text-yellow-400" />
            Achievements
          </motion.h2>
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-lg">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            {...fadeIn}
            className="text-4xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            {...fadeIn}
            className="text-lg text-gray-300 mb-8"
          >
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:akhilkarthikboddupalli@gmail.com'}
            >
              <Mail className="w-5 h-5" /> Send Message
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 Akhil Karthik. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;