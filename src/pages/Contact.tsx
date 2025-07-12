import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactProps {
  language: 'en' | 'ar';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Ready to transform your business? Let's start the conversation.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        message: "Project Details",
        send: "Send Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your@email.com",
        companyPlaceholder: "Your company name",
        messagePlaceholder: "Tell us about your project..."
      },
      info: {
        title: "Contact Information",
        email: "hello@eyet.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Street, Silicon Valley, CA 94101",
        hours: "Mon - Fri: 9:00 AM - 6:00 PM PST"
      },
      offices: {
        title: "Our Offices",
        locations: [
          {
            city: "San Francisco",
            address: "123 Tech Street, Silicon Valley, CA",
            phone: "+1 (555) 123-4567"
          },
          {
            city: "Dubai",
            address: "Downtown Dubai, UAE",
            phone: "+971 4 123 4567"
          },
          {
            city: "London",
            address: "Tech Hub, London, UK",
            phone: "+44 20 1234 5678"
          }
        ]
      }
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "مستعد لتحويل عملك؟ دعنا نبدأ المحادثة.",
      form: {
        name: "الاسم الكامل",
        email: "عنوان البريد الإلكتروني",
        company: "الشركة",
        message: "تفاصيل المشروع",
        send: "إرسال الرسالة",
        namePlaceholder: "اسمك الكامل",
        emailPlaceholder: "your@email.com",
        companyPlaceholder: "اسم شركتك",
        messagePlaceholder: "أخبرنا عن مشروعك..."
      },
      info: {
        title: "معلومات الاتصال",
        email: "hello@eyet.com",
        phone: "+1 (555) 123-4567",
        address: "123 شارع التقنية، وادي السيليكون، كاليفورنيا 94101",
        hours: "الإثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً PST"
      },
      offices: {
        title: "مكاتبنا",
        locations: [
          {
            city: "سان فرانسيسكو",
            address: "123 شارع التقنية، وادي السيليكون، كاليفورنيا",
            phone: "+1 (555) 123-4567"
          },
          {
            city: "دبي",
            address: "وسط مدينة دبي، الإمارات العربية المتحدة",
            phone: "+971 4 123 4567"
          },
          {
            city: "لندن",
            address: "مركز التقنية، لندن، المملكة المتحدة",
            phone: "+44 20 1234 5678"
          }
        ]
      }
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

      {/* Contact Form and Info */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={`text-white ${
                      isRTL ? 'font-cairo' : 'font-rbno'
                    }`}>
                      {currentContent.form.name}
                    </Label>
                    <Input
                      id="name"
                      placeholder={currentContent.form.namePlaceholder}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className={`text-white ${
                      isRTL ? 'font-cairo' : 'font-rbno'
                    }`}>
                      {currentContent.form.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={currentContent.form.emailPlaceholder}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className={`text-white ${
                    isRTL ? 'font-cairo' : 'font-rbno'
                  }`}>
                    {currentContent.form.company}
                  </Label>
                  <Input
                    id="company"
                    placeholder={currentContent.form.companyPlaceholder}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={`text-white ${
                    isRTL ? 'font-cairo' : 'font-rbno'
                  }`}>
                    {currentContent.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder={currentContent.form.messagePlaceholder}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 resize-none"
                  />
                </div>

                <Button variant="default" size="lg" className="w-full">
                  {currentContent.form.send}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-white/10">
                <h3 className={`text-2xl font-bold text-white mb-6 ${
                  isRTL ? 'font-cairo' : 'font-rbno'
                }`}>
                  {currentContent.info.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-pink" />
                    <span className={`text-white ${
                      isRTL ? 'font-cairo' : 'font-rbno'
                    }`}>
                      {currentContent.info.email}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-brand-pink" />
                    <span className={`text-white ${
                      isRTL ? 'font-cairo' : 'font-rbno'
                    }`}>
                      {currentContent.info.phone}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-brand-pink" />
                    <span className={`text-white ${
                      isRTL ? 'font-cairo' : 'font-rbno'
                    }`}>
                      {currentContent.info.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-brand-pink" />
                    <span className={`text-white ${
                      isRTL ? 'font-cairo' : 'font-rbno'
                    }`}>
                      {currentContent.info.hours}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Office Locations */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-white/10">
                <h3 className={`text-2xl font-bold text-white mb-6 ${
                  isRTL ? 'font-cairo' : 'font-rbno'
                }`}>
                  {currentContent.offices.title}
                </h3>
                
                <div className="space-y-6">
                  {currentContent.offices.locations.map((office, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className={`text-lg font-semibold text-brand-pink ${
                        isRTL ? 'font-cairo' : 'font-rbno'
                      }`}>
                        {office.city}
                      </h4>
                      <p className={`text-sm text-white/80 ${
                        isRTL ? 'font-cairo' : 'font-rbno'
                      }`}>
                        {office.address}
                      </p>
                      <p className={`text-sm text-white/80 ${
                        isRTL ? 'font-cairo' : 'font-rbno'
                      }`}>
                        {office.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10">
            <div className="h-64 md:h-96 bg-gradient-secondary flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-brand-pink" />
                <p className={`text-lg ${
                  isRTL ? 'font-cairo' : 'font-rbno'
                }`}>
                  {language === 'en' ? 'Interactive Map Coming Soon' : 'خريطة تفاعلية قريباً'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;