import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
interface PortfolioProps {
  language: 'en' | 'ar';
}
const Portfolio = ({
  language
}: PortfolioProps) => {
  const [currentProject, setCurrentProject] = useState(0);
  const content = {
    en: {
      title: "Our Portfolio",
      subtitle: "Discover the innovative solutions we've crafted for our clients",
      viewProject: "View Project",
      sourceCode: "Source Code",
      nextProject: "Next Project",
      prevProject: "Previous Project",
      projects: [{
        id: 1,
        title: "E-Commerce Platform",
        description: "A modern, scalable e-commerce solution with advanced analytics and inventory management.",
        image: "/api/placeholder/800/600",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        category: "Web Development"
      }, {
        id: 2,
        title: "Healthcare Management System",
        description: "Comprehensive healthcare management platform with patient tracking and appointment scheduling.",
        image: "/api/placeholder/800/600",
        technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
        category: "Healthcare"
      }, {
        id: 3,
        title: "Financial Analytics Dashboard",
        description: "Real-time financial data visualization and analytics platform for investment firms.",
        image: "/api/placeholder/800/600",
        technologies: ["Angular", "C#", "SQL Server", "Azure"],
        category: "Finance"
      }, {
        id: 4,
        title: "IoT Smart Home System",
        description: "Integrated smart home automation system with AI-powered energy optimization.",
        image: "/api/placeholder/800/600",
        technologies: ["React Native", "IoT", "Machine Learning", "Cloud"],
        category: "IoT"
      }]
    },
    ar: {
      title: "أعمالنا",
      subtitle: "اكتشف الحلول المبتكرة التي صممناها لعملائنا",
      viewProject: "عرض المشروع",
      sourceCode: "الكود المصدري",
      nextProject: "المشروع التالي",
      prevProject: "المشروع السابق",
      projects: [{
        id: 1,
        title: "منصة التجارة الإلكترونية",
        description: "حل تجارة إلكترونية حديث وقابل للتوسع مع تحليلات متقدمة وإدارة المخزون.",
        image: "/api/placeholder/800/600",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        category: "تطوير الويب"
      }, {
        id: 2,
        title: "نظام إدارة الرعاية الصحية",
        description: "منصة شاملة لإدارة الرعاية الصحية مع تتبع المرضى وجدولة المواعيد.",
        image: "/api/placeholder/800/600",
        technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
        category: "الرعاية الصحية"
      }, {
        id: 3,
        title: "لوحة تحليلات مالية",
        description: "منصة تصور وتحليل البيانات المالية في الوقت الفعلي لشركات الاستثمار.",
        image: "/api/placeholder/800/600",
        technologies: ["Angular", "C#", "SQL Server", "Azure"],
        category: "المالية"
      }, {
        id: 4,
        title: "نظام المنزل الذكي IoT",
        description: "نظام أتمتة منزلية ذكية متكامل مع تحسين الطاقة المدعوم بالذكاء الاصطناعي.",
        image: "/api/placeholder/800/600",
        technologies: ["React Native", "IoT", "Machine Learning", "Cloud"],
        category: "إنترنت الأشياء"
      }]
    }
  };
  const currentContent = content[language];
  const isRTL = language === 'ar';
  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % currentContent.projects.length);
  };
  const prevProject = () => {
    setCurrentProject(prev => (prev - 1 + currentContent.projects.length) % currentContent.projects.length);
  };
  useEffect(() => {
    const interval = setInterval(nextProject, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [currentContent.projects.length]);
  const project = currentContent.projects[currentProject];
  return <div className={`min-h-screen pt-24 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <section className="px-6 text-center py-0">
        <div className="container mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent ${isRTL ? 'font-israr' : 'font-rbno'}`}>
            {currentContent.title}
          </h1>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Main Portfolio Slideshow */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:border-brand-pink/50 transition-all duration-500">
            {/* Project Image */}
            <div className="relative h-96 md:h-[500px] bg-gradient-secondary flex items-center justify-center">
              <div className="text-white/60 text-2xl font-rbno">
                {project.title} Preview
              </div>
              
              {/* Navigation Arrows */}
              <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white" onClick={prevProject}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white" onClick={nextProject}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Project Details */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <span className={`inline-block px-3 py-1 text-sm bg-brand-pink/20 text-brand-pink rounded-full mb-4 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                      {project.category}
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                      {project.title}
                    </h2>
                    <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => <span key={index} className={`px-3 py-1 bg-white/5 text-white/80 rounded-lg text-sm border border-white/10 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                        {tech}
                      </span>)}
                  </div>
                </div>

                <div className="space-y-4">
                  <Button variant="default" size="lg" className="w-full group">
                    <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {currentContent.viewProject}
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full group">
                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    {currentContent.sourceCode}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {currentContent.projects.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-brand-pink scale-125' : 'bg-white/30 hover:bg-white/50'}`} onClick={() => setCurrentProject(index)} />)}
          </div>

          {/* Project Counter */}
          <div className={`text-center mt-6 text-muted-foreground ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
            {currentProject + 1} / {currentContent.projects.length}
          </div>
        </div>
      </section>

      {/* All Projects Grid (Preview) */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className={`text-3xl font-bold text-center mb-12 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
            {language === 'en' ? 'All Projects' : 'جميع المشاريع'}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.projects.map((project, index) => <Card key={project.id} className={`cursor-pointer bg-card/30 backdrop-blur-sm border-white/10 hover:border-brand-pink/50 transition-all duration-300 overflow-hidden group ${index === currentProject ? 'ring-2 ring-brand-pink' : ''}`} onClick={() => setCurrentProject(index)}>
                <div className="h-32 bg-gradient-secondary flex items-center justify-center">
                  <span className="text-white/60 text-sm font-rbno">
                    {project.title}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className={`font-semibold text-white text-sm group-hover:text-brand-pink transition-colors ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                    {project.title}
                  </h4>
                  <p className={`text-xs text-muted-foreground mt-1 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                    {project.category}
                  </p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Portfolio;