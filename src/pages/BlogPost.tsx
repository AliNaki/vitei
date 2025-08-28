import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Heart, MessageSquare, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const BlogPost = ()=>{
    const navigate = useNavigate();
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(42);
    const blogPost = {
        id: 1,
        title: "Understanding Consumer Rights in India: A Comprehensive Guide",
        excerpt: "A detailed exploration of consumer protection laws in India, including recent amendments and practical applications for common legal issues.",
        content: `
    <h2>Introduction to Consumer Rights in India</h2>
    
    <p>Consumer protection in India has evolved significantly over the past few decades. The Consumer Protection Act, 2019, has brought about revolutionary changes in how consumer grievances are addressed and resolved. This comprehensive guide will help you understand your rights as a consumer and how to exercise them effectively.</p>
    
    <h3>Historical Background</h3>
    
    <p>The journey of consumer protection in India began with the Consumer Protection Act, 1986, which was a landmark legislation that recognized consumer rights for the first time. The Act was later replaced by the Consumer Protection Act, 2019, which expanded the scope of consumer protection and introduced new mechanisms for dispute resolution.</p>
    
    <h3>Key Consumer Rights</h3>
    
    <p>Under the current legal framework, consumers enjoy several fundamental rights:</p>
    
    <ul>
      <li><strong>Right to Safety:</strong> Protection against goods and services that are hazardous to life and property</li>
      <li><strong>Right to Information:</strong> Access to information about quality, quantity, potency, purity, standard, and price of goods or services</li>
      <li><strong>Right to Choose:</strong> Access to a variety of goods and services at competitive prices</li>
      <li><strong>Right to be Heard:</strong> Assurance that consumer interests will receive due consideration</li>
      <li><strong>Right to Redress:</strong> Seek redressal against unfair trade practices or exploitation</li>
      <li><strong>Right to Consumer Education:</strong> Acquire knowledge and skills to be an informed consumer</li>
    </ul>
    
    <h3>The Consumer Protection Act, 2019: Key Features</h3>
    
    <p>The new Act has introduced several progressive features:</p>
    
    <h4>Expanded Definition of Consumer</h4>
    <p>The Act now includes online transactions and e-commerce platforms, making it more relevant in the digital age. Any person who buys goods or avails services through electronic means is now covered under the Act.</p>
    
    <h4>Central Consumer Protection Authority (CCPA)</h4>
    <p>A new regulatory body has been established to promote, protect, and enforce consumer rights. The CCPA has the power to conduct investigations, file complaints, and impose penalties for violations of consumer rights.</p>
    
    <h4>Three-Tier Redressal Mechanism</h4>
    <p>The Act maintains a three-tier system for dispute resolution:</p>
    <ul>
      <li>District Consumer Disputes Redressal Commission (up to ₹1 crore)</li>
      <li>State Consumer Disputes Redressal Commission (₹1 crore to ₹10 crores)</li>
      <li>National Consumer Disputes Redressal Commission (above ₹10 crores)</li>
    </ul>
    
    <h3>E-commerce and Consumer Protection</h3>
    
    <p>With the rise of online shopping, the 2019 Act specifically addresses e-commerce related issues:</p>
    
    <ul>
      <li>E-commerce entities must provide clear information about return, refund, and cancellation policies</li>
      <li>Liability for defective products sold through their platform</li>
      <li>Protection against unfair trade practices in online transactions</li>
      <li>Mandatory grievance redressal mechanism for online platforms</li>
    </ul>
    
    <h3>How to File a Consumer Complaint</h3>
    
    <p>Filing a consumer complaint has been simplified under the new Act:</p>
    
    <ol>
      <li><strong>Online Filing:</strong> Complaints can now be filed online through the e-Daakhil portal</li>
      <li><strong>Video Conferencing:</strong> Hearings can be conducted through video conferencing</li>
      <li><strong>No Court Fee:</strong> For complaints up to ₹5 lakhs, no court fee is required</li>
      <li><strong>Time-bound Resolution:</strong> Complaints must be resolved within specific time frames</li>
    </ol>
    
    <h3>Common Consumer Issues and Remedies</h3>
    
    <h4>Defective Products</h4>
    <p>If you purchase a defective product, you can seek:</p>
    <ul>
      <li>Replacement of the product</li>
      <li>Refund of the purchase price</li>
      <li>Compensation for any loss or injury</li>
    </ul>
    
    <h4>Deficient Services</h4>
    <p>For poor quality services, remedies include:</p>
    <ul>
      <li>Re-performance of the service</li>
      <li>Refund of service charges</li>
      <li>Compensation for mental agony and harassment</li>
    </ul>
    
    <h3>Recent Developments and Case Studies</h3>
    
    <p>Recent judgments have strengthened consumer protection:</p>
    
    <ul>
      <li>The Supreme Court's ruling on medical negligence as a service deficiency</li>
      <li>Protection for airline passengers against flight delays and cancellations</li>
      <li>Banking services and the liability of banks for unauthorized transactions</li>
    </ul>
    
    <h3>Practical Tips for Consumers</h3>
    
    <ul>
      <li>Always keep purchase receipts and warranty cards</li>
      <li>Read terms and conditions carefully before making purchases</li>
      <li>Document all communications with service providers</li>
      <li>Be aware of cooling-off periods for online purchases</li>
      <li>Know your rights under various product-specific regulations</li>
    </ul>
    
    <h3>Conclusion</h3>
    
    <p>Consumer protection in India has come a long way, and the 2019 Act has significantly strengthened the legal framework. As consumers become more aware of their rights and the legal system becomes more accessible, we can expect better protection and redressal for consumer grievances. It is essential for every consumer to be informed about their rights and the available remedies to ensure fair treatment in the marketplace.</p>
    
    <p>Remember, an informed consumer is an empowered consumer. Stay updated with the latest developments in consumer law and don't hesitate to seek legal remedy when your rights are violated.</p>
    `,
        author: {
            name: "Adv. Meera Singh",
            title: "Consumer Rights Advocate",
            image: "https://images.unsplash.com/photo-1494790108755-2616b9232955?w=100&h=100&fit=crop&crop=face",
            bio: "Specialist in consumer protection law with 10+ years of experience"
        },
        publishDate: "March 15, 2024",
        readTime: "12 min read",
        views: 1547,
        category: "Consumer Law",
        tags: [
            "Consumer Rights",
            "Legal Guide",
            "Consumer Protection Act",
            "E-commerce",
            "Legal Remedies"
        ],
        relatedPosts: [
            {
                id: 2,
                title: "Property Law Updates 2024",
                excerpt: "Latest amendments in property registration and transfer laws...",
                readTime: "8 min read",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop"
            },
            {
                id: 3,
                title: "How to File an FIR Online",
                excerpt: "Step-by-step guide to filing First Information Report...",
                readTime: "4 min read",
                image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=300&h=200&fit=crop"
            },
            {
                id: 4,
                title: "Family Law Reforms in India",
                excerpt: "Recent changes in marriage and divorce proceedings...",
                readTime: "6 min read",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop"
            }
        ]
    };
    const handleLike = ()=>{
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="blog-post-page">
      <div className="max-w-4xl mx-auto px-4 py-6" data-spec-id="GFZHRd3u9HJ7MrsJ">
        {}
        <div className="mb-6" data-spec-id="blog-header">
          <Button variant="outline" onClick={()=>navigate('/')} className="mb-4" data-spec-id="back-to-blog">
            <ArrowLeft className="mr-2 h-4 w-4" data-spec-id="0RLoFXpXcEef32BC"/>
            Back to Blog
          </Button>
        </div>

        {}
        <div className="grid lg:grid-cols-4 gap-6" data-spec-id="jrp9Rt6kRMf0xv7r">
          {}
          <div className="lg:col-span-3" data-spec-id="article-content">
            <Card data-spec-id="0UpAJoSTmeYX2a7m">
              <CardHeader className="pb-6" data-spec-id="222yORehkG6VddY4">
                <div className="flex items-center gap-2 mb-4" data-spec-id="XTN4xbPNx3ah1a8k">
                  <Badge variant="secondary" data-spec-id="OJn3TYDEgyX0Xckv">{blogPost.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500 gap-4" data-spec-id="vBWX3CGe993U56D1">
                    <div className="flex items-center" data-spec-id="BvgFoUs9ulWoV9r1">
                      <Calendar className="h-4 w-4 mr-1" data-spec-id="fQpUZTgp96W25hTy"/>
                      {blogPost.publishDate}
                    </div>
                    <div className="flex items-center" data-spec-id="T0UwzaKASqsBdVsM">
                      <Clock className="h-4 w-4 mr-1" data-spec-id="bMzdzcvK6acIL67s"/>
                      {blogPost.readTime}
                    </div>
                    <div className="flex items-center" data-spec-id="6oCnvR1os7AK7Nly">
                      <Eye className="h-4 w-4 mr-1" data-spec-id="9tmwSwUN6HOsxa6Y"/>
                      {blogPost.views} views
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-3xl font-bold leading-tight mb-4" data-spec-id="H60FWAu01yacG756">
                  {blogPost.title}
                </CardTitle>
                
                <CardDescription className="text-lg text-gray-600 mb-6" data-spec-id="E9rWESS2KANMfJm8">
                  {blogPost.excerpt}
                </CardDescription>

                {}
                <div className="flex items-center justify-between" data-spec-id="lWG3cTanARC35diS">
                  <div className="flex items-center space-x-3" data-spec-id="36Du46cChA2j14VC">
                    <img src={blogPost.author.image} alt={blogPost.author.name} className="w-12 h-12 rounded-full object-cover" data-spec-id="hqPQklV4YotHhJi8"/>
                    <div data-spec-id="1S8LYW1VCVQCzL84">
                      <p className="font-semibold text-gray-900" data-spec-id="aVjKQDUCUG0uFFKt">{blogPost.author.name}</p>
                      <p className="text-sm text-gray-600" data-spec-id="XJM4rkpBtLjpKIlC">{blogPost.author.title}</p>
                    </div>
                  </div>
                  
                  {}
                  <div className="flex items-center space-x-2" data-spec-id="article-actions">
                    <Button variant="outline" size="sm" onClick={handleLike} className={isLiked ? "text-red-600 border-red-600" : ""} data-spec-id="like-button">
                      <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} data-spec-id="D9RTXy682G7wY95D"/>
                      {likes}
                    </Button>
                    <Button variant="outline" size="sm" onClick={()=>setIsBookmarked(!isBookmarked)} className={isBookmarked ? "text-blue-600 border-blue-600" : ""} data-spec-id="bookmark-button">
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} data-spec-id="IAaOumJ2TeGAfOOB"/>
                    </Button>
                    <Button variant="outline" size="sm" data-spec-id="share-button">
                      <Share2 className="h-4 w-4" data-spec-id="UbfC1cqxpvBlXeuM"/>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent data-spec-id="li6zBhXVGyBl7zkg">
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700" dangerouslySetInnerHTML={{
        __html: blogPost.content
    }} data-spec-id="article-body"/>
                
                <Separator className="my-8" data-spec-id="aayk4n0mttSv7cAH"/>
                
                {}
                <div className="mb-6" data-spec-id="article-tags">
                  <h3 className="text-lg font-semibold mb-3" data-spec-id="VrZKYwX0MOVYrl2i">Tags</h3>
                  <div className="flex flex-wrap gap-2" data-spec-id="RnCRl6K2VwpWyjGw">
                    {blogPost.tags.map((tag, index)=>(<Badge key={index} variant="outline" data-spec-id="ooQ5bG7dNiVi8Go3">{tag}</Badge>))}
                  </div>
                </div>

                {}
                <Card className="bg-blue-50 border-blue-200" data-spec-id="author-bio">
                  <CardContent className="pt-6" data-spec-id="Qsb2rEsj0z1PP2Eu">
                    <div className="flex items-start space-x-4" data-spec-id="durePFTlaSOWeO9N">
                      <img src={blogPost.author.image} alt={blogPost.author.name} className="w-16 h-16 rounded-full object-cover" data-spec-id="KC2z5CbV9kvNYPqF"/>
                      <div data-spec-id="fDDzhtZLdDi3fTlg">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1" data-spec-id="ZnEw3GzQ4R2ocbdZ">
                          About {blogPost.author.name}
                        </h4>
                        <p className="text-gray-600 mb-2" data-spec-id="PnxuzIeyNTm1qcj7">{blogPost.author.bio}</p>
                        <Button variant="outline" size="sm" data-spec-id="view-author-profile">
                          <User className="h-4 w-4 mr-2" data-spec-id="FiPnwbYHysB2TgFI"/>
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {}
          <div className="lg:col-span-1" data-spec-id="blog-sidebar">
            <div className="space-y-6 sticky top-6" data-spec-id="zHuBs2PiKjgBu25w">
              {}
              <Card data-spec-id="table-of-contents">
                <CardHeader data-spec-id="KZmZOZhREgSIMdZs">
                  <CardTitle className="text-lg" data-spec-id="kO0IFhteKRpvrKjj">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent data-spec-id="0mUscmRfvllSmp03">
                  <nav className="space-y-2 text-sm" data-spec-id="k3RJntA3RO6QatEQ">
                    <a href="#introduction" className="block text-blue-600 hover:text-blue-800" data-spec-id="tLsNhLCfDgU45Xng">
                      Introduction to Consumer Rights
                    </a>
                    <a href="#historical" className="block text-blue-600 hover:text-blue-800" data-spec-id="wwu4tZOk5LJlNzfl">
                      Historical Background
                    </a>
                    <a href="#key-rights" className="block text-blue-600 hover:text-blue-800" data-spec-id="dui7wf2jKjbPse74">
                      Key Consumer Rights
                    </a>
                    <a href="#act-2019" className="block text-blue-600 hover:text-blue-800" data-spec-id="kOPA0gZGZyDcCKn5">
                      Consumer Protection Act, 2019
                    </a>
                    <a href="#ecommerce" className="block text-blue-600 hover:text-blue-800" data-spec-id="PY4oCwwaFTWpQrX4">
                      E-commerce Protection
                    </a>
                    <a href="#filing-complaint" className="block text-blue-600 hover:text-blue-800" data-spec-id="ePuaMQ4vM7ICf39N">
                      How to File a Complaint
                    </a>
                    <a href="#common-issues" className="block text-blue-600 hover:text-blue-800" data-spec-id="cX673C2NTdhIQwnb">
                      Common Issues and Remedies
                    </a>
                    <a href="#recent-developments" className="block text-blue-600 hover:text-blue-800" data-spec-id="YCrI5cI9Q7LmUvbo">
                      Recent Developments
                    </a>
                    <a href="#practical-tips" className="block text-blue-600 hover:text-blue-800" data-spec-id="MsZNShHw1x1J6Yzd">
                      Practical Tips
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {}
              <Card data-spec-id="share-article">
                <CardHeader data-spec-id="hOPWBZdKMHh5gu5p">
                  <CardTitle className="text-lg" data-spec-id="T4sLlQyzlfYTWpqb">Share Article</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2" data-spec-id="3gM6zcU3y4TF3H4x">
                  <Button variant="outline" className="w-full justify-start" data-spec-id="share-twitter">
                    Share on Twitter
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-spec-id="share-linkedin">
                    Share on LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-spec-id="share-facebook">
                    Share on Facebook
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-spec-id="copy-link">
                    Copy Link
                  </Button>
                </CardContent>
              </Card>

              {}
              <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white" data-spec-id="newsletter-signup">
                <CardContent className="pt-6" data-spec-id="A1o5unqlBJvc71YB">
                  <h3 className="text-lg font-semibold mb-2" data-spec-id="rzEo3ZpXRVZWpJBI">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4" data-spec-id="NaHA18N9lkTLEP5x">
                    Get the latest legal insights delivered to your inbox
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100" data-spec-id="subscribe-newsletter">
                    Subscribe to Newsletter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {}
        <div className="mt-12" data-spec-id="related-articles">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" data-spec-id="MJXJMCMgONxrnUmV">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6" data-spec-id="QruyGgvoh8PUDpdX">
            {blogPost.relatedPosts.map((post)=>(<Card key={post.id} className="hover:shadow-lg transition-shadow" data-spec-id="nE6eO3gp9RI79bFH">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" data-spec-id="lgNKFfCzlm3WhYji"/>
                <CardContent className="pt-4" data-spec-id="QZBiIzqVWH0eKyp6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2" data-spec-id="fIHwUJUnHCh5ISYk">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2" data-spec-id="p8c5PjCCQQoxx4vk">{post.excerpt}</p>
                  <div className="flex items-center justify-between" data-spec-id="rO98Bt73GPEjoin3">
                    <span className="text-xs text-gray-500" data-spec-id="XdsXTV51vll9hVC3">{post.readTime}</span>
                    <Button variant="outline" size="sm" data-spec-id={`read-related-${post.id}`}>
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>))}
          </div>
        </div>

        {}
        <div className="mt-12" data-spec-id="comments-section">
          <Card data-spec-id="HQS6JPgWxJMHlqZk">
            <CardHeader data-spec-id="0iVIZKNDTxWPavqA">
              <CardTitle className="flex items-center" data-spec-id="6fM3c4eSy4EO9eby">
                <MessageSquare className="h-5 w-5 mr-2" data-spec-id="qLLxITrdCPnwfHR1"/>
                Comments & Discussion
              </CardTitle>
            </CardHeader>
            <CardContent data-spec-id="rHUHx8aNbUbs6rj6">
              <div className="text-center py-8 text-gray-500" data-spec-id="GHkSIEHWBd9HCRLI">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" data-spec-id="IB1nx9LIqYyBDDPq"/>
                <p className="text-lg font-medium mb-2" data-spec-id="37b4GahKlcOXqIm3">Start a Discussion</p>
                <p className="mb-4" data-spec-id="oBXrluZXbhjD99rW">Be the first to comment on this article</p>
                <Button data-spec-id="add-comment">Add Comment</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>);
};
export default BlogPost;
