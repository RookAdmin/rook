
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Lightbulb, Target } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications and innovative solutions.",
      requirements: ["5+ years experience", "React/Node.js", "TypeScript", "Cloud platforms"]
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our products.",
      requirements: ["3+ years UX/UI experience", "Figma proficiency", "Design systems", "User research"]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Help us scale our infrastructure and improve deployment processes.",
      requirements: ["AWS/GCP experience", "Kubernetes", "CI/CD pipelines", "Monitoring tools"]
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      description: "Drive growth and brand awareness through strategic marketing initiatives.",
      requirements: ["Digital marketing experience", "Content creation", "Analytics", "Campaign management"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO policy"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Learning & Growth",
      description: "Professional development budget, conferences, and continuous learning opportunities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Inclusive Culture",
      description: "Diverse team with emphasis on collaboration, innovation, and inclusion"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve complex problems."
    },
    {
      title: "Customer Obsessed",
      description: "Every decision we make starts with understanding our customers' needs."
    },
    {
      title: "Team Excellence",
      description: "We succeed together by fostering collaboration and supporting each other."
    },
    {
      title: "Continuous Growth",
      description: "We're committed to learning, improving, and evolving every day."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Help us build the future of digital solutions. We're looking for passionate individuals who want to make a meaningful impact.
          </p>
          <Button size="lg" className="bg-[#0096d4] hover:bg-[#0096d4]/90">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Target className="h-8 w-8 text-[#0096d4] mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-[#0096d4] mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">
              Ready to make an impact? Check out our current openings.
            </p>
          </div>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="mt-2">{job.description}</CardDescription>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      Apply Now
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-sm text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1 w-1 bg-gray-400 rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0096d4] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals. Send us your resume and let's talk.
          </p>
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
