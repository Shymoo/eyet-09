import { ArrowRight, Play, CheckCircle, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ClientCarousel from '@/components/ClientCarousel';
interface HomeProps {
  language: 'en' | 'ar';
}
const Home = ({
  language
}: HomeProps) => {
  const content = {
    en: {
      tagline: "We're obsessed with growth. Yours, specifically",
      subtitle: "We don't just build software. We build solutions that move you forward—faster, smarter, stronger.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      trustedBy: "Trusted by industry leaders",
      services: {
        title: "Our Services",
        items: [{
          icon: <CheckCircle className="h-8 w-8" />,
          title: "Custom Software Development",
          description: "Tailored solutions built to meet your specific business needs"
        }, {
          icon: <Users className="h-8 w-8" />,
          title: "Digital Transformation",
          description: "Modernize your operations with advanced digital solutions"
        }, {
          icon: <Award className="h-8 w-8" />,
          title: "Technology Consulting",
          description: "Expert guidance to help you make informed technology decisions"
        }]
      },
      stats: {
        projects: "500+",
        clients: "200+",
        satisfaction: "99%",
        experience: "10+"
      },
      testimonial: {
        quote: "EyeT transformed our entire operation. Their attention to detail and commitment to our growth is unmatched.",
        author: "Ahmed Al-Rashid",
        position: "CEO, Emirates Tech Solutions"
      }
    },
    ar: {
      tagline: "نحن مهووسون بالنمو. نموك تحديداً",
      subtitle: "نحن لا نبني البرمجيات فحسب. نحن نبني حلولاً تدفعك إلى الأمام—أسرع وأذكى وأقوى.",
      getStarted: "ابدأ الآن",
      learnMore: "اعرف المزيد",
      trustedBy: "موثوق به من قادة الصناعة",
      services: {
        title: "خدماتنا",
        items: [{
          icon: <CheckCircle className="h-8 w-8" />,
          title: "تطوير البرمجيات المخصصة",
          description: "حلول مصممة خصيصاً لتلبية احتياجات عملك المحددة"
        }, {
          icon: <Users className="h-8 w-8" />,
          title: "التحول الرقمي",
          description: "حدّث عملياتك بحلول رقمية متقدمة"
        }, {
          icon: <Award className="h-8 w-8" />,
          title: "استشارات تقنية",
          description: "إرشادات خبيرة لمساعدتك في اتخاذ قرارات تقنية مدروسة"
        }]
      },
      stats: {
        projects: "+500",
        clients: "+200",
        satisfaction: "%99",
        experience: "+10"
      },
      testimonial: {
        quote: "آي تي حولت عمليتنا بالكامل. اهتمامهم بالتفاصيل والتزامهم بنمونا لا مثيل له.",
        author: "أحمد الراشد",
        position: "الرئيس التنفيذي، حلول الإمارات التقنية"
      }
    }
  };
  const currentContent = content[language];
  const isRTL = language === 'ar';
  return <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 via-transparent to-brand-blue/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,15,140,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(134,164,179,0.1),transparent_50%)]" />
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large moving orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink/8 rounded-full blur-3xl animate-pulse" style={{
          animationDuration: '8s',
          transform: 'translateX(-50%) translateY(-50%)'
        }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" style={{
          animationDuration: '12s',
          animationDelay: '2s',
          transform: 'translateX(50%) translateY(50%)'
        }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-pink/6 rounded-full blur-3xl animate-pulse" style={{
          animationDuration: '6s',
          animationDelay: '4s',
          transform: 'translateX(30%) translateY(-30%)'
        }}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-brand-pink/30 rotate-45 animate-pulse" style={{
          animationDuration: '3s',
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-40 right-32 w-6 h-6 border-2 border-brand-pink/20 rounded-full animate-pulse" style={{
          animationDuration: '4s',
          animationDelay: '2s'
        }}></div>
          <div className="absolute bottom-40 left-40 w-3 h-3 bg-brand-blue/40 animate-pulse" style={{
          animationDuration: '5s',
          animationDelay: '3s'
        }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          {/* Creative tagline with split animation */}
          <div className="mb-6">
            <div className={`text-2xl md:text-3xl mb-2 text-brand-pink font-bold tracking-wide animate-fade-in ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
              {language === 'en' ? "WE'RE OBSESSED WITH" : "نحن مهووسون بـ"}
            </div>
            <h1 className={`text-6xl md:text-8xl font-michroma font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent animate-fade-in ${isRTL ? 'font-israr' : ''}`} style={{
            animationDelay: '0.2s'
          }}>
              {language === 'en' ? "GROWTH" : "النمو"}
            </h1>
            <div className={`text-3xl md:text-4xl text-white/90 animate-fade-in ${isRTL ? 'font-cairo' : 'font-rbno'}`} style={{
            animationDelay: '0.4s'
          }}>
              {language === 'en' ? "Yours, specifically." : "نموك تحديداً."}
            </div>
          </div>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed ${isRTL ? 'font-cairo' : 'font-rbno'}`} style={{
          animationDelay: '0.6s'
        }}>
            {currentContent.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <Button variant="hero" size="xl" className="group transform hover:scale-105 transition-all duration-300 shadow-elegant hover:shadow-glow">
              {currentContent.getStarted}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button variant="minimal" size="xl" className="group transform hover:scale-105 transition-all duration-300">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              {currentContent.learnMore}
            </Button>
          </div>
          
          <div className="animate-fade-in" style={{
          animationDelay: '1s'
        }}>
            <ClientCarousel />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-0">
        <div className="container mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isRTL ? 'font-israr' : 'font-rbno'}`}>
            {currentContent.services.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-white/10 hover:border-brand-pink/50 transition-all duration-500 group hover:shadow-elegant hover:-translate-y-2 hover:scale-105 transform">
                <div className="text-brand-pink mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                  {service.title}
                </h3>
                <p className={`text-muted-foreground ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                  {service.description}
                </p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className={`text-4xl md:text-5xl font-bold text-white ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                {currentContent.stats.clients}
              </div>
              <p className={`text-white/80 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                {language === 'en' ? 'Clients' : 'عميل'}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className={`text-4xl md:text-5xl font-bold text-white ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                {currentContent.stats.satisfaction}
              </div>
              <p className={`text-white/80 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                {language === 'en' ? 'Satisfaction' : 'رضا العملاء'}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className={`text-4xl md:text-5xl font-bold text-white ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                {currentContent.stats.experience}
              </div>
              <p className={`text-white/80 ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
                {language === 'en' ? 'Years' : 'سنة خبرة'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-brand-pink fill-current" />)}
          </div>
          
          <blockquote className={`text-2xl md:text-3xl font-light mb-8 text-white ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
            "{currentContent.testimonial.quote}"
          </blockquote>
          
          <div className="space-y-2">
            <div className={`text-lg font-bold text-white ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
              {currentContent.testimonial.author}
            </div>
            <div className={`text-muted-foreground ${isRTL ? 'font-cairo' : 'font-rbno'}`}>
              {currentContent.testimonial.position}
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;