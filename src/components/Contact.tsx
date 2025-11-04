import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohanveesam143@gmail.com",
      link: "mailto:mohanveesam143@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91  8919275982",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad",
      link: "https://www.google.com/search?q=hyderabad&oq=hyderabad&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPNIBBzI0NmowajGoAgCwAgE&sourceid=chrome&ie=UTF-8"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@mohanveesam",
      link: "https://github.com/mohanveesam",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Mohan Veesam",
      link: "https://www.linkedin.com/in/mohan-veesam-65aa81232",
      color: "hover:text-blue-400"
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   username: "@alex_codes",
    //   link: "https://twitter.com/alex_codes",
    //   color: "hover:text-blue-400"
    // }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Form */}
          {/* <Card className="gradient-card border border-border/50 glow-soft animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-accent/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-accent/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    required
                    className="bg-accent/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="glow" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            {/* Three cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Contact Information */}
              <Card className="gradient-card border border-border/50 glow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-4 rounded-lg bg-accent/50 border border-border/30 hover:border-primary/40 transition-colors duration-300 group"
                    >
                      <info.icon className="w-6 h-6 text-primary mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="gradient-card border border-border/50 glow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect with me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-accent/50 border border-border/30 hover:border-primary/40 transition-colors duration-300 group"
                    >
                      <social.icon className={`w-6 h-6 mr-4 transition-all duration-300 group-hover:scale-110 ${social.color}`} />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="gradient-card border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                  <h3 className="text-xl font-semibold mb-2 text-gradient">
                    Ready to work together?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Let's create something amazing together.
                  </p>
                  <Button 
                    variant="glowSecondary" 
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start a Project
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
