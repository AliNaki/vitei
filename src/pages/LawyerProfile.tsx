import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Phone, Mail, Calendar, Award, GraduationCap, Scale, Clock, ArrowLeft, MessageCircle, Video, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
const LawyerProfile = ()=>{
    const navigate = useNavigate();
    const lawyer = {
        id: 1,
        name: "Adv. Rajesh Kumar",
        title: "Senior Advocate",
        specialization: "Criminal Law",
        experience: "15 years",
        rating: 4.8,
        reviewCount: 127,
        location: "Delhi High Court",
        phone: "+91 98765 43210",
        email: "rajesh.kumar@lawfirm.in",
        consultationFee: "₹2,500/hour",
        availability: "Available Today",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face",
        about: "Senior Advocate with 15 years of extensive experience in Criminal Law, Constitutional Law, and Supreme Court matters. Graduated from National Law School of India University and has appeared in numerous high-profile cases. Known for meticulous case preparation and strong courtroom advocacy.",
        education: [
            {
                degree: "LLM in Criminal Law",
                institution: "National Law School of India University",
                year: "2009"
            },
            {
                degree: "Bachelor of Laws (LLB)",
                institution: "Delhi University",
                year: "2007"
            }
        ],
        certifications: [
            "Enrolled with Bar Council of India",
            "Senior Advocate designation (2018)",
            "Member of Supreme Court Bar Association"
        ],
        practiceAreas: [
            "Criminal Defense",
            "White Collar Crimes",
            "Constitutional Law",
            "Bail Applications",
            "Supreme Court Matters",
            "High Court Litigation"
        ],
        achievements: [
            "Successfully defended 200+ criminal cases",
            "Argued 15 cases in Supreme Court",
            "Winner of Best Criminal Lawyer Award 2022",
            "Published 5 research papers on criminal jurisprudence"
        ],
        languages: [
            "Hindi",
            "English",
            "Punjabi"
        ],
        courtExperience: [
            "Supreme Court of India",
            "Delhi High Court",
            "District Courts (Delhi)",
            "National Green Tribunal"
        ]
    };
    const reviews = [
        {
            id: 1,
            clientName: "Amit Sharma",
            rating: 5,
            comment: "Excellent lawyer with deep knowledge of criminal law. Helped me get bail in a complex case. Highly recommended!",
            date: "2 weeks ago",
            caseType: "Bail Application"
        },
        {
            id: 2,
            clientName: "Priya Gupta",
            rating: 5,
            comment: "Very professional and knowledgeable. Handled my case with utmost care and got favorable verdict.",
            date: "1 month ago",
            caseType: "Criminal Defense"
        },
        {
            id: 3,
            clientName: "Ravi Kumar",
            rating: 4,
            comment: "Good communication and regular updates. Satisfied with the legal representation provided.",
            date: "2 months ago",
            caseType: "Constitutional Matter"
        }
    ];
    const renderStars = (rating: number)=>{
        return Array.from({
            length: 5
        }, (_, i)=>(<Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} data-spec-id="7m8GhtQmAOVsvOY9"/>));
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="lawyer-profile-page">
      <div className="max-w-6xl mx-auto px-4 py-6" data-spec-id="x6OPCi4bC7nDg6Ln">
        {}
        <div className="mb-6" data-spec-id="profile-header">
          <Button variant="outline" onClick={()=>navigate('/')} className="mb-4" data-spec-id="back-to-listings">
            <ArrowLeft className="mr-2 h-4 w-4" data-spec-id="sJ771S1jBVC7mP0x"/>
            Back to Lawyers
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6" data-spec-id="LOVDopfSNOst8RiX">
          {}
          <div className="lg:col-span-1 space-y-6" data-spec-id="profile-sidebar">
            {}
            <Card data-spec-id="basic-info-card">
              <CardContent className="pt-6" data-spec-id="YYxFTEEQhjnRRt2N">
                <div className="text-center space-y-4" data-spec-id="CceWElg1arfsWZET">
                  <img src={lawyer.image} alt={lawyer.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg" data-spec-id="C9vpdj9b48WflEBa"/>
                  <div data-spec-id="8R55MPGhEDWpdLjM">
                    <h1 className="text-2xl font-bold text-gray-900" data-spec-id="yqyGsz9vFUQwFpSB">{lawyer.name}</h1>
                    <p className="text-blue-600 font-medium" data-spec-id="U2QfqOOekCp9vNPe">{lawyer.title}</p>
                    <p className="text-gray-600" data-spec-id="A9zQN3MZgcenKSxX">{lawyer.specialization}</p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2" data-spec-id="L4aOs7diCYS7v4Dz">
                    <div className="flex items-center space-x-1" data-spec-id="KA8EJpAgGWaQtPC8">
                      {renderStars(Math.floor(lawyer.rating))}
                    </div>
                    <span className="font-semibold" data-spec-id="DRy4ZwamHvyQuurb">{lawyer.rating}</span>
                    <span className="text-gray-500" data-spec-id="Kit2P14qyZIEbOa6">({lawyer.reviewCount} reviews)</span>
                  </div>

                  <Badge variant="secondary" className="text-lg px-4 py-2" data-spec-id="PU2HNpdthEghnOu9">
                    {lawyer.consultationFee}
                  </Badge>

                  <div className="text-green-600 font-medium flex items-center justify-center" data-spec-id="AzwCwjIr3aUOgPJc">
                    <Clock className="h-4 w-4 mr-2" data-spec-id="znsVRrUfbwHdGnT9"/>
                    {lawyer.availability}
                  </div>
                </div>
              </CardContent>
            </Card>

            {}
            <Card data-spec-id="contact-info-card">
              <CardHeader data-spec-id="7uxezcgCceDjt5XW">
                <CardTitle data-spec-id="mO9jtCL1SusH6Yse">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3" data-spec-id="dkmGGCKpZP3CbKkb">
                <div className="flex items-center space-x-3" data-spec-id="0hO4NGEmQzZ5tGGd">
                  <MapPin className="h-5 w-5 text-gray-400" data-spec-id="yZPs5zQdDSIvNoVM"/>
                  <span className="text-gray-700" data-spec-id="LlFj5t5vjprBLIs5">{lawyer.location}</span>
                </div>
                <div className="flex items-center space-x-3" data-spec-id="8mM4grUyB2QWyfGk">
                  <Phone className="h-5 w-5 text-gray-400" data-spec-id="N7DcKAD7mr5vbr2k"/>
                  <span className="text-gray-700" data-spec-id="zd50EE82o1P0AmaP">{lawyer.phone}</span>
                </div>
                <div className="flex items-center space-x-3" data-spec-id="zS8HjC58XlMyJVX7">
                  <Mail className="h-5 w-5 text-gray-400" data-spec-id="I8kiujrHIXQNVwDG"/>
                  <span className="text-gray-700" data-spec-id="B304bamyFU2IGCXM">{lawyer.email}</span>
                </div>
                <div className="flex items-center space-x-3" data-spec-id="4wkx5nQU3W4Bv8fX">
                  <Award className="h-5 w-5 text-gray-400" data-spec-id="ASVPfgA95PLluwb2"/>
                  <span className="text-gray-700" data-spec-id="LWjg3Pt4jN5Ct8fO">{lawyer.experience} Experience</span>
                </div>
              </CardContent>
            </Card>

            {}
            <Card data-spec-id="quick-actions-card">
              <CardHeader data-spec-id="blNLedO4pUtMS8GB">
                <CardTitle data-spec-id="KXdp7RhlKBI5hTwN">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3" data-spec-id="3j974A1bBdi0QQgf">
                <Button className="w-full" data-spec-id="schedule-consultation">
                  <Calendar className="mr-2 h-4 w-4" data-spec-id="TH1rjhNY1pWc5LyK"/>
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full" data-spec-id="send-message">
                  <MessageCircle className="mr-2 h-4 w-4" data-spec-id="77fkmvRsLzLRiHkS"/>
                  Send Message
                </Button>
                <Button variant="outline" className="w-full" data-spec-id="video-call">
                  <Video className="mr-2 h-4 w-4" data-spec-id="JfPsPgLnWLBWEVL7"/>
                  Video Consultation
                </Button>
                <Button variant="outline" className="w-full" data-spec-id="request-quote">
                  <FileText className="mr-2 h-4 w-4" data-spec-id="7U3An0iUOGS3JDYp"/>
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          {}
          <div className="lg:col-span-2" data-spec-id="profile-details">
            <Tabs defaultValue="about" className="w-full" data-spec-id="profile-tabs">
              <TabsList className="grid w-full grid-cols-4" data-spec-id="3vPcIJ31cHCKdZMS">
                <TabsTrigger value="about" data-spec-id="yebSCX7Ato2BrF3U">About</TabsTrigger>
                <TabsTrigger value="experience" data-spec-id="EDyWaopRAHzXFMYY">Experience</TabsTrigger>
                <TabsTrigger value="reviews" data-spec-id="XQL4hDoN6YOb1Yqn">Reviews</TabsTrigger>
                <TabsTrigger value="education" data-spec-id="WqDJIRAPZBTO960p">Education</TabsTrigger>
              </TabsList>

              {}
              <TabsContent value="about" className="space-y-6" data-spec-id="about-tab">
                <Card data-spec-id="vND44xfn6KKmQ8eB">
                  <CardHeader data-spec-id="TH0pBdUTWEggBydq">
                    <CardTitle data-spec-id="tdnUU697eF2pDxxg">About {lawyer.name}</CardTitle>
                  </CardHeader>
                  <CardContent data-spec-id="KuDMvF7dfgdfaqFN">
                    <p className="text-gray-700 leading-relaxed mb-6" data-spec-id="O3XjjgjFNs4G20E5">
                      {lawyer.about}
                    </p>
                    
                    <div className="space-y-4" data-spec-id="KoIbiQp2nhjmYv6Q">
                      <div data-spec-id="1GuxYLeTPKj7T7g0">
                        <h3 className="font-semibold text-gray-900 mb-2" data-spec-id="EBFj6oNses9dvAOh">Practice Areas</h3>
                        <div className="flex flex-wrap gap-2" data-spec-id="Y6Jq0WhAujSrWEYl">
                          {lawyer.practiceAreas.map((area, index)=>(<Badge key={index} variant="outline" data-spec-id="dWSc7iiLKHK1o6xu">{area}</Badge>))}
                        </div>
                      </div>

                      <Separator data-spec-id="BsHM69khFG98qDGd"/>

                      <div data-spec-id="TvOxfXUBL8kDXUx1">
                        <h3 className="font-semibold text-gray-900 mb-2" data-spec-id="4cZDjiLEoHmCGUlJ">Languages</h3>
                        <div className="flex flex-wrap gap-2" data-spec-id="cYE9R7eQWrbHyyl4">
                          {lawyer.languages.map((language, index)=>(<Badge key={index} variant="secondary" data-spec-id="nlfAjm7pN57KJj7f">{language}</Badge>))}
                        </div>
                      </div>

                      <Separator data-spec-id="CaUCtPMvZGBx1RBZ"/>

                      <div data-spec-id="wyAt9k11ZHRU0RvJ">
                        <h3 className="font-semibold text-gray-900 mb-2" data-spec-id="MYSurKTUCfyaKdU0">Court Experience</h3>
                        <ul className="space-y-1" data-spec-id="rNfwmJZ6hh1UcFxx">
                          {lawyer.courtExperience.map((court, index)=>(<li key={index} className="flex items-center text-gray-700" data-spec-id="dosVrfKLF5hS3DZi">
                              <Scale className="h-4 w-4 mr-2 text-blue-600" data-spec-id="tbXOAQ0eg87hRASD"/>
                              {court}
                            </li>))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {}
              <TabsContent value="experience" className="space-y-6" data-spec-id="experience-tab">
                <Card data-spec-id="LFPPREGFIj3JyWyy">
                  <CardHeader data-spec-id="GsZeQ8hXPFC0yX9j">
                    <CardTitle data-spec-id="bUzp9o6FIOXyvUfk">Professional Achievements</CardTitle>
                  </CardHeader>
                  <CardContent data-spec-id="eixSo7R7wJQ9HDXq">
                    <ul className="space-y-3" data-spec-id="QQwezcklJl4ZTmiH">
                      {lawyer.achievements.map((achievement, index)=>(<li key={index} className="flex items-start space-x-3" data-spec-id="SWaFNHy1t5i0xVXn">
                          <Award className="h-5 w-5 text-yellow-500 mt-0.5" data-spec-id="Eo52v6KwLJoUHdot"/>
                          <span className="text-gray-700" data-spec-id="6dP0XINhXwCs0egd">{achievement}</span>
                        </li>))}
                    </ul>
                  </CardContent>
                </Card>

                <Card data-spec-id="aogXf654AZCK44Tz">
                  <CardHeader data-spec-id="ExNN4bTilii6KAIO">
                    <CardTitle data-spec-id="0ehEPxKdAAxDNQt9">Certifications & Memberships</CardTitle>
                  </CardHeader>
                  <CardContent data-spec-id="IANN8FR8efsAYtfe">
                    <ul className="space-y-3" data-spec-id="KaUtJVCoOoXItjnq">
                      {lawyer.certifications.map((certification, index)=>(<li key={index} className="flex items-start space-x-3" data-spec-id="wFiGG7NRg1UfxktH">
                          <Badge className="mt-0.5" variant="outline" data-spec-id="VhQBrHHXJoRgWrIT">
                            Certified
                          </Badge>
                          <span className="text-gray-700" data-spec-id="q6lIZNflzEUT1Y1Z">{certification}</span>
                        </li>))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {}
              <TabsContent value="reviews" className="space-y-6" data-spec-id="reviews-tab">
                <Card data-spec-id="z1U8qZqDJDoWy8zs">
                  <CardHeader data-spec-id="eVMNH0CoQQPcNONV">
                    <CardTitle data-spec-id="fL7VGZJEnCLa8AsF">Client Reviews</CardTitle>
                    <CardDescription data-spec-id="494hAqw1zY8PjMWr">
                      {lawyer.reviewCount} reviews with an average rating of {lawyer.rating}/5
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6" data-spec-id="S9pO3KdfoaDcV2KI">
                    {reviews.map((review)=>(<div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0" data-spec-id="dUO7powMV6sb28bX">
                        <div className="flex items-start justify-between mb-2" data-spec-id="5aJZ9hmFoIVNLBN1">
                          <div data-spec-id="cmj2aNFVmntTKXLO">
                            <p className="font-semibold text-gray-900" data-spec-id="IzA1XwxoqECo7VLm">{review.clientName}</p>
                            <div className="flex items-center space-x-2" data-spec-id="2LjAYiwkzv6XlzQv">
                              <div className="flex items-center space-x-1" data-spec-id="09zlU36OfgbQhIQS">
                                {renderStars(review.rating)}
                              </div>
                              <Badge variant="outline" className="text-xs" data-spec-id="EXMcMDaXIIx1EbjH">
                                {review.caseType}
                              </Badge>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500" data-spec-id="oE6hNz6Yx6l2bgeK">{review.date}</span>
                        </div>
                        <p className="text-gray-700" data-spec-id="Q3wF7xlduhQ7M7GC">{review.comment}</p>
                      </div>))}
                  </CardContent>
                </Card>
              </TabsContent>

              {}
              <TabsContent value="education" className="space-y-6" data-spec-id="education-tab">
                <Card data-spec-id="gvOzKGSD3ecG75ss">
                  <CardHeader data-spec-id="gWm3O5PqOkfWZLw6">
                    <CardTitle data-spec-id="87cfac02dm2VpZli">Educational Background</CardTitle>
                  </CardHeader>
                  <CardContent data-spec-id="uHpNcZHzsPE5RYVn">
                    <div className="space-y-4" data-spec-id="Y61EB13gv72HpH2w">
                      {lawyer.education.map((edu, index)=>(<div key={index} className="flex items-start space-x-3" data-spec-id="VfxpBYS1tW5FUVDG">
                          <GraduationCap className="h-5 w-5 text-blue-600 mt-1" data-spec-id="TrZwVOAFfigLpZwi"/>
                          <div data-spec-id="0ppGIlq6qZfPjFOW">
                            <p className="font-semibold text-gray-900" data-spec-id="JPXybbijombN66Oc">{edu.degree}</p>
                            <p className="text-gray-600" data-spec-id="lymsJe9ByYe5xKLl">{edu.institution}</p>
                            <p className="text-sm text-gray-500" data-spec-id="mGxo2bTUNGmCDQR6">{edu.year}</p>
                          </div>
                        </div>))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>);
};
export default LawyerProfile;
