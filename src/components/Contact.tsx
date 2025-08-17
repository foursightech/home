import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Building2, Loader2, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "", // renamed (was phone)
    business_name: "", // renamed (was businessName)
    project_details: "", // renamed (was message)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone_number, business_name, project_details } =
      formData;

    if (!name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return false;
    }
    if (phone_number && !/^\+?[0-9]{7,15}$/.test(phone_number)) {
      toast({
        title: "Please enter a valid phone number",
        variant: "destructive",
      });
      return false;
    }
    if (!business_name.trim()) {
      toast({
        title: "Please enter your business name",
        variant: "destructive",
      });
      return false;
    }
    if (!project_details.trim()) {
      toast({ title: "Please enter project details", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL ||
          "https://naman.tail8718b4.ts.net/api/formdata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send");

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        business_name: "",
        project_details: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let’s Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form and we’ll reach out with a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Form Section */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-between">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-green-600">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    We’ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-1 flex flex-col"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <Input
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Business Name *
                      </label>
                      <Input
                        name="business_name"
                        value={formData.business_name}
                        onChange={handleInputChange}
                        placeholder="Your Business LLC"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="block text-sm font-medium mb-1">
                      Project Details *
                    </label>
                    <Textarea
                      name="project_details"
                      value={formData.project_details}
                      onChange={handleInputChange}
                      placeholder="Tell us about your business and what kind of website you need..."
                      rows={5}
                      required
                      className="flex-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="p-6 bg-muted/50 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>⚡ Response within 24 hours</li>
                  <li>📅 Websites ready in 7-14 days</li>
                  <li>💬 Free initial consultation</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Mail size={18} /> foursightech@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Building2 size={18} /> Bengaluru, India
                  </p>
                </div>
              </div>

              <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl text-sm text-muted-foreground">
                <strong className="block text-primary mb-2">
                  What happens next?
                </strong>
                <ol className="list-decimal list-inside space-y-1">
                  <li>We review your details</li>
                  <li>Schedule a free consultation call</li>
                  <li>Share a detailed proposal</li>
                  <li>Begin building your website</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
