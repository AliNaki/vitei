import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Scale, Users, BookOpen, Star, MapPin, Phone, Mail, Clock, Award, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Index = ()=>{
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const lawyers = [
        {
            id: 1,
            name: "Adv. Rajesh Kumar",
            specialization: "Criminal Law",
            experience: "15 years",
            rating: 4.8,
            location: "Delhi High Court",
            price: "₹2,500/hour",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Adv. Priya Sharma",
            specialization: "Family Law",
            experience: "12 years",
            rating: 4.9,
            location: "Mumbai High Court",
            price: "₹2,000/hour",
            image: "https://images.unsplash.com/photo-1594824804732-ca8db3dbc7c2?w=300&h=300&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Adv. Sanjay Patel",
            specialization: "Corporate Law",
            experience: "20 years",
            rating: 4.7,
            location: "Bangalore High Court",
            price: "₹3,000/hour",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
        }
    ];
    const blogs = [
        {
            id: 1,
            title: "Understanding Consumer Rights in India",
            excerpt: "A comprehensive guide to consumer protection laws and how to file complaints...",
            author: "Legal Team",
            date: "2 days ago",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop"
        },
        {
            id: 2,
            title: "Property Law Updates 2024",
            excerpt: "Latest amendments in property registration and transfer laws across Indian states...",
            author: "Adv. Meera Singh",
            date: "1 week ago",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop"
        },
        {
            id: 3,
            title: "How to File an FIR Online",
            excerpt: "Step-by-step guide to filing First Information Report through digital platforms...",
            author: "Legal Desk",
            date: "2 weeks ago",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=200&fit=crop"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="app-root">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="navigation-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="aybBSJz8OoVCcAKU">
          <div className="flex justify-between items-center h-16" data-spec-id="1fMw4vuklXiR234I">
            <div className="flex items-center space-x-2" data-spec-id="W84ifFFb5gUygWSV">
              <Scale className="h-8 w-8 text-blue-600" data-spec-id="9HOOMHFUGhsaBUBO"/>
              <span className="text-2xl font-bold text-gray-900" data-spec-id="RMDx5jDMGAdZ6SQC">LegalConnect</span>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="B32pfbeXTh5EED1B">
              <a href="#lawyers" className="text-gray-700 hover:text-blue-600 font-medium" data-spec-id="V8RNhdSvXB4uDFUV">Find Lawyers</a>
              <a href="#quiz" className="text-gray-700 hover:text-blue-600 font-medium" data-spec-id="zkj3ZgLGQSGshsGr">Law Quiz</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium" data-spec-id="8AhMIgEkx9laLkn6">Legal Blog</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" data-spec-id="GdRRmj9fWVdhKrei">About</a>
            </nav>
            <div className="flex space-x-4" data-spec-id="e7mWt66qvI07jQFj">
              <Button variant="outline" data-spec-id="login-button">Login</Button>
              <Button data-spec-id="signup-button">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20" data-spec-id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="SXp2lz1mPJWAvTYd">
          <h1 className="text-5xl font-bold mb-6" data-spec-id="lapuJQHJrADh0Bkv">Connect with Expert Legal Advocates</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-spec-id="VIlj8TQ821DbeSnr">
            Find qualified lawyers, test your legal knowledge, and stay updated with latest legal insights. 
            Your trusted platform for all legal needs in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-spec-id="cDKjK23MgtrfQXR7">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" data-spec-id="find-lawyer-cta">
              <Search className="mr-2 h-5 w-5" data-spec-id="PLTLp2UhceY8KAOL"/>
              Find a Lawyer
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={()=>navigate('/quiz')} data-spec-id="take-quiz-cta">
              <BookOpen className="mr-2 h-5 w-5" data-spec-id="Dz6bS0FechtMAGgi"/>
              Take Law Quiz
            </Button>
          </div>
        </div>
      </section>

      {}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-spec-id="VNOAT0CTwmwYRTUI">
        <Tabs defaultValue="lawyers" className="w-full" data-spec-id="main-tabs">
          <TabsList className="grid w-full grid-cols-3" data-spec-id="dBfGBSHKCp83e8aM">
            <TabsTrigger value="lawyers" data-spec-id="mXYMzkkaDI9XRFnh">Find Lawyers</TabsTrigger>
            <TabsTrigger value="quiz" data-spec-id="htrTF6G1RNxZfLpK">Law Quiz</TabsTrigger>
            <TabsTrigger value="blog" data-spec-id="sjVRXDeqRaB49dBc">Legal Blog</TabsTrigger>
          </TabsList>

          {}
          <TabsContent value="lawyers" className="space-y-6" data-spec-id="lawyers-section">
            <div className="text-center mb-8" data-spec-id="7vOe0wSmz3q5nhvz">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-spec-id="c5DdwHiFdCObvxHb">Find Expert Lawyers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto" data-spec-id="UrbMEhoRvWF8ObKU">
                Connect with experienced advocates specialized in various fields of law across India
              </p>
            </div>

            {}
            <div className="relative max-w-md mx-auto mb-8" data-spec-id="lawyer-search">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-spec-id="iAmuugiHAv2JFLT3"/>
              <Input placeholder="Search by specialization or location..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="pl-10" data-spec-id="4KluYBOjOkyoTql7"/>
            </div>

            {}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-spec-id="lawyers-grid">
              {lawyers.map((lawyer)=>(<Card key={lawyer.id} className="hover:shadow-lg transition-shadow" data-spec-id="hDivPTvKcyJe50sU">
                  <CardHeader className="text-center" data-spec-id="vZCDhm7naJJlHu8H">
                    <img src={lawyer.image} alt={lawyer.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" data-spec-id="gpyXxFMm8Hts2PrS"/>
                    <CardTitle className="text-xl" data-spec-id="7x9uS2z1l7DbYC68">{lawyer.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium" data-spec-id="gHmr4GUVN8BoJInl">
                      {lawyer.specialization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3" data-spec-id="Pa6O2UApKbJFJk0S">
                    <div className="flex items-center justify-between text-sm text-gray-600" data-spec-id="VgTPhiZNcSjuGPeI">
                      <div className="flex items-center" data-spec-id="wMAzWZEYolwKCaXz">
                        <Award className="h-4 w-4 mr-1" data-spec-id="W3su9KgDl09UY2K0"/>
                        {lawyer.experience}
                      </div>
                      <div className="flex items-center" data-spec-id="6wFV8OI9mcW9BZmV">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" data-spec-id="u4DOyGhX1s0bkh9s"/>
                        {lawyer.rating}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600" data-spec-id="zCs7rjW08FWQ7kQ0">
                      <MapPin className="h-4 w-4 mr-1" data-spec-id="gyfySf7OpwX9XZvY"/>
                      {lawyer.location}
                    </div>
                    <div className="flex items-center justify-between" data-spec-id="SJtDdck0gdiK2ZGI">
                      <Badge variant="secondary" data-spec-id="js4XQsY0x8ZPYdKV">{lawyer.price}</Badge>
                      <Button size="sm" onClick={()=>navigate(`/lawyer/${lawyer.id}`)} data-spec-id={`hire-lawyer-${lawyer.id}`}>
                        Hire Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>))}
            </div>
          </TabsContent>

          {}
          <TabsContent value="quiz" className="space-y-6" data-spec-id="quiz-section">
            <div className="text-center mb-8" data-spec-id="a7BZ5wQgmYiaG54r">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-spec-id="zBYAdPr6napDHEbk">Test Your Legal Knowledge</h2>
              <p className="text-gray-600 max-w-2xl mx-auto" data-spec-id="X2ZXdlIBVGGD7MSo">
                Challenge yourself with our comprehensive law quizzes covering various legal topics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-spec-id="quiz-categories">
              {[
        {
            title: "Constitutional Law",
            questions: 25,
            difficulty: "Intermediate",
            time: "30 min"
        },
        {
            title: "Criminal Law",
            questions: 30,
            difficulty: "Advanced",
            time: "40 min"
        },
        {
            title: "Family Law",
            questions: 20,
            difficulty: "Beginner",
            time: "25 min"
        },
        {
            title: "Corporate Law",
            questions: 35,
            difficulty: "Advanced",
            time: "45 min"
        },
        {
            title: "Property Law",
            questions: 22,
            difficulty: "Intermediate",
            time: "28 min"
        },
        {
            title: "Consumer Rights",
            questions: 18,
            difficulty: "Beginner",
            time: "20 min"
        }
    ].map((quiz, index)=>(<Card key={index} className="hover:shadow-lg transition-shadow" data-spec-id="ysEI2UySlXa0XOjJ">
                  <CardHeader data-spec-id="n5T1bBUiSH0AQs0y">
                    <CardTitle className="text-xl" data-spec-id="DcXuR1SaGe48l3Yl">{quiz.title}</CardTitle>
                    <CardDescription data-spec-id="dvbT6RdIDGn3fZ87">Test your knowledge in {quiz.title.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3" data-spec-id="swnMunr9udJp55yR">
                    <div className="flex justify-between text-sm text-gray-600" data-spec-id="OfhNnZEhmd1Op3iU">
                      <div className="flex items-center" data-spec-id="hRwaKKtSCtssoXN4">
                        <BookOpen className="h-4 w-4 mr-1" data-spec-id="q3azJWAjKXCaSnK4"/>
                        {quiz.questions} Questions
                      </div>
                      <div className="flex items-center" data-spec-id="E1CHlF111AGrhAwB">
                        <Clock className="h-4 w-4 mr-1" data-spec-id="8SpsZLMJE0tDdvxb"/>
                        {quiz.time}
                      </div>
                    </div>
                    <Badge variant={quiz.difficulty === 'Beginner' ? 'secondary' : quiz.difficulty === 'Intermediate' ? 'default' : 'destructive'} data-spec-id="yCfS2EAU3m8bdiv6">
                      {quiz.difficulty}
                    </Badge>
                    <Button className="w-full" onClick={()=>navigate('/quiz')} data-spec-id={`start-quiz-${index}`}>
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>))}
            </div>
          </TabsContent>

          {}
          <TabsContent value="blog" className="space-y-6" data-spec-id="blog-section">
            <div className="text-center mb-8" data-spec-id="AC66gBlfkFkIE6Q3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-spec-id="tvXA4tiH8dCRc6dM">Legal Insights & Updates</h2>
              <p className="text-gray-600 max-w-2xl mx-auto" data-spec-id="li2ey03QBWboOS8N">
                Stay informed with the latest legal news, case studies, and expert opinions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-spec-id="blog-posts">
              {blogs.map((blog)=>(<Card key={blog.id} className="hover:shadow-lg transition-shadow" data-spec-id="k6l6CQgggjbYe5FM">
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" data-spec-id="tC8kEVpBWJySVkHT"/>
                  <CardHeader data-spec-id="OnHM2ZtO66NKrCoC">
                    <CardTitle className="text-lg line-clamp-2" data-spec-id="oReY3F9BiG56hbH9">{blog.title}</CardTitle>
                    <CardDescription className="line-clamp-2" data-spec-id="CGTAHxSmfcuept2b">{blog.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent data-spec-id="NotmdwxtHflhgByk">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3" data-spec-id="cylpw71vL7OPEbEr">
                      <span data-spec-id="RfwEEIjwvsojRrGO">By {blog.author}</span>
                      <span data-spec-id="lC68U4IzN2tthd9a">{blog.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between" data-spec-id="qrfbJku0t3Qpp9n9">
                      <span className="text-sm text-gray-500" data-spec-id="cZ6uJyUIPwGfZMlJ">{blog.date}</span>
                      <Button variant="outline" size="sm" onClick={()=>navigate(`/blog/${blog.id}`)} data-spec-id={`read-blog-${blog.id}`}>
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {}
      <footer className="bg-gray-900 text-white py-12" data-spec-id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="xulTRtzxnGK1qgDS">
          <div className="grid md:grid-cols-4 gap-8" data-spec-id="NqKQRblO9XHRpD3f">
            <div data-spec-id="660qylOn0zaMUcgD">
              <div className="flex items-center space-x-2 mb-4" data-spec-id="SWvVAQbefgTwlYcH">
                <Scale className="h-6 w-6 text-blue-400" data-spec-id="6BC81ptOkespGOJH"/>
                <span className="text-xl font-bold" data-spec-id="PeHCIZqOGsIw5uii">LegalConnect</span>
              </div>
              <p className="text-gray-400" data-spec-id="JhD47axs2PuYuQ0C">
                Your trusted platform for legal services, knowledge, and professional connections across India.
              </p>
            </div>
            <div data-spec-id="GftZbIBw4Ll7Rred">
              <h3 className="text-lg font-semibold mb-4" data-spec-id="6Q6DvoMF0NGTzHi1">Services</h3>
              <ul className="space-y-2 text-gray-400" data-spec-id="tsUlKh9CBPknwpSZ">
                <li data-spec-id="rkQDRM7y3ZqSoGDu"><a href="#" className="hover:text-white" data-spec-id="89BbLBECSgbx0RQL">Find Lawyers</a></li>
                <li data-spec-id="wGPliwpNCqaMTqyg"><a href="#" className="hover:text-white" data-spec-id="hGTXYseHoOE1fy8D">Legal Consultation</a></li>
                <li data-spec-id="auvaDGqISWonDUuH"><a href="#" className="hover:text-white" data-spec-id="qGqgjfS77goFF6EE">Document Review</a></li>
                <li data-spec-id="3vvCcGxkAg272geZ"><a href="#" className="hover:text-white" data-spec-id="Mh6h0il7Xfr2nFEV">Court Representation</a></li>
              </ul>
            </div>
            <div data-spec-id="Q89dI9SJGXtnHG0S">
              <h3 className="text-lg font-semibold mb-4" data-spec-id="A2AiNJXlBAceWjcr">Legal Areas</h3>
              <ul className="space-y-2 text-gray-400" data-spec-id="2EuWH3tKVHtu6GFw">
                <li data-spec-id="HGzTFHYpGqknHoBk"><a href="#" className="hover:text-white" data-spec-id="3zYI4EKXKi1GBAYP">Criminal Law</a></li>
                <li data-spec-id="sjbdJRdOtETGQdZW"><a href="#" className="hover:text-white" data-spec-id="SkLshvwQx2610WjK">Family Law</a></li>
                <li data-spec-id="FM725V5CgzqE1cTD"><a href="#" className="hover:text-white" data-spec-id="ZrvD8l29zK3lG1x5">Corporate Law</a></li>
                <li data-spec-id="aLrVnXnxxdmVG11m"><a href="#" className="hover:text-white" data-spec-id="cE8pWdPzIwiAzHMi">Property Law</a></li>
              </ul>
            </div>
            <div data-spec-id="I59oSafKkVkt7yXV">
              <h3 className="text-lg font-semibold mb-4" data-spec-id="oXdpsMZtMcGb54wH">Contact</h3>
              <div className="space-y-2 text-gray-400" data-spec-id="Rj9yDUAKwz2Hm8lL">
                <div className="flex items-center" data-spec-id="Czr8oOMIrTrKn17q">
                  <Phone className="h-4 w-4 mr-2" data-spec-id="uR3nD3PazLPGOcGh"/>
                  +91 98765 43210
                </div>
                <div className="flex items-center" data-spec-id="nuf9BwJiV8VzHoIU">
                  <Mail className="h-4 w-4 mr-2" data-spec-id="W9ZDj192Wxj9tjZE"/>
                  contact@legalconnect.in
                </div>
                <div className="flex items-center" data-spec-id="LxWUjsZo6t3dCy5r">
                  <MapPin className="h-4 w-4 mr-2" data-spec-id="O0AsKVE8BBDkWT4p"/>
                  New Delhi, India
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-spec-id="ZHUAhhYvj6q5Ovz3">
            <p data-spec-id="eASewBwPc7IvjOeO">&copy; 2024 LegalConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);
};
export default Index;
