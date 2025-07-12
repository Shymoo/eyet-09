import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServicesProps {
  language: 'en' | 'ar';
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive software solutions tailored to your business needs",
      getQuote: "Get Quote",
      learnMore: "Learn More",
      services: [
        {
          icon: <Code className="h-12 w-12" />,
          title: "Custom Software Development",
          description: "Bespoke software solutions designed specifically for your business requirements and objectives.",
          features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
          price: "Starting from $5,000"
        },
        {
          icon: <Smartphone className="h-12 w-12" />,
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications that engage users and drive business growth.",
          features: ["iOS & Android", "React Native", "Flutter", "App Store optimization"],
          price: "Starting from $8,000"
        },
        {
          icon: <Cloud className="h-12 w-12" />,
          title: "Cloud Solutions",
          description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
          features: ["AWS/Azure deployment", "DevOps automation", "Scalability planning", "24/7 monitoring"],
          price: "Starting from $3,000"
        },
        {
          icon: <Database className="h-12 w-12" />,
          title: "Data Analytics",
          description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
          features: ["Business intelligence", "Data visualization", "Real-time dashboards", "Predictive analytics"],
          price: "Starting from $4,000"
        },
        {
          icon: <Shield className="h-12 w-12" />,
          title: "Cybersecurity",
          description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
          features: ["Security audits", "Penetration testing", "Compliance consulting", "Incident response"],
          price: "Starting from $2,500"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Digital Transformation",
          description: "End-to-end digital transformation services to modernize your business processes.",
          features: ["Process automation", "Legacy system migration", "Change management", "Training & support"],
          price: "Starting from $10,000"
        }
      ]
    },
    ar: {
      title: "خدماتنا",
      subtitle: "حلول برمجية شاملة مصممة خصيصاً لاحتياجات عملك",
      getQuote: "احصل على عرض سعر",
      learnMore: "اعرف المزيد",
      services: [
        {
          icon: <Code className="h-12 w-12" />,
          title: "تطوير البرمجيات المخصصة",
          description: "حلول برمجية مخصصة مصممة خصيصاً لمتطلبات وأهداف عملك.",
          features: ["تطوير متكامل", "ربط واجهات البرمجة", "تصميم قواعد البيانات", "تحسين الأداء"],
          price: "يبدأ من 5,000 دولار"
        },
        {
          icon: <Smartphone className="h-12 w-12" />,
          title: "تطوير تطبيقات الهاتف المحمول",
          description: "تطبيقات هاتف محمول أصلية ومتعددة المنصات تشرك المستخدمين وتدفع نمو الأعمال.",
          features: ["iOS و Android", "React Native", "Flutter", "تحسين متجر التطبيقات"],
          price: "يبدأ من 8,000 دولار"
        },
        {
          icon: <Cloud className="h-12 w-12" />,
          title: "حلول السحابة",
          description: "بنية تحتية سحابية قابلة للتوسع وخدمات الترحيل لتحديث عمليات عملك.",
          features: ["نشر AWS/Azure", "أتمتة DevOps", "تخطيط قابلية التوسع", "مراقبة 24/7"],
          price: "يبدأ من 3,000 دولار"
        },
        {
          icon: <Database className="h-12 w-12" />,
          title: "تحليل البيانات",
          description: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ باستخدام أدوات التحليل والتصور المتقدمة.",
          features: ["ذكاء الأعمال", "تصور البيانات", "لوحات القيادة الفورية", "التحليل التنبؤي"],
          price: "يبدأ من 4,000 دولار"
        },
        {
          icon: <Shield className="h-12 w-12" />,
          title: "الأمن السيبراني",
          description: "حلول أمنية شاملة لحماية أصولك الرقمية وضمان الامتثال.",
          features: ["تدقيق الأمان", "اختبار الاختراق", "استشارات الامتثال", "الاستجابة للحوادث"],
          price: "يبدأ من 2,500 دولار"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "التحول الرقمي",
          description: "خدمات التحول الرقمي الشاملة لتحديث عمليات عملك.",
          features: ["أتمتة العمليات", "ترحيل النظم القديمة", "إدارة التغيير", "التدريب والدعم"],
          price: "يبدأ من 10,000 دولار"
        }
      ]
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen pt-24 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent ${
            isRTL ? 'font-israr' : 'font-rbno'
          }`}>
            {currentContent.title}
          </h1>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
            isRTL ? 'font-cairo' : 'font-rbno'
          }`}>
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-white/10 hover:border-brand-pink/50 transition-all duration-300 group hover:shadow-elegant hover:scale-105"
              >
                <div className="text-brand-pink mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 text-white ${
                  isRTL ? 'font-cairo' : 'font-rbno'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-muted-foreground mb-6 leading-relaxed ${
                  isRTL ? 'font-cairo' : 'font-rbno'
                }`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`text-sm text-white/80 flex items-center ${
                        isRTL ? 'font-cairo' : 'font-rbno'
                      }`}
                    >
                      <div className="w-2 h-2 bg-brand-pink rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className={`text-brand-pink font-bold text-lg mb-6 ${
                  isRTL ? 'font-cairo' : 'font-rbno'
                }`}>
                  {service.price}
                </div>
                
                <div className="space-y-3">
                  <Button variant="default" size="lg" className="w-full">
                    {currentContent.getQuote}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    {currentContent.learnMore}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl font-bold text-white mb-6 ${
            isRTL ? 'font-cairo' : 'font-rbno'
          }`}>
            {language === 'en' ? 'Ready to Start Your Project?' : 'مستعد لبدء مشروعك؟'}
          </h2>
          <p className={`text-xl text-white/80 mb-8 max-w-2xl mx-auto ${
            isRTL ? 'font-cairo' : 'font-rbno'
          }`}>
            {language === 'en' 
              ? 'Let\'s discuss your requirements and create a custom solution for your business.'
              : 'دعنا نناقش متطلباتك ونقوم بإنشاء حل مخصص لعملك.'
            }
          </p>
          <Button variant="hero" size="xl">
            {language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;