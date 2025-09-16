import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScanMeSection from '@/components/ScanMeSection';
import ShareModal from '@/components/ShareModal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Tag, TrendingUp, Users, Star, Target, Zap, Award, Eye, MessageSquare } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import FloatingActionButton from '@/components/FloatingActionButton';
const CaseStudyDetail = () => {
  const {
    id
  } = useParams();

  // This should match the data from CaseStudy.tsx
  const caseStudies = [{
    id: 1,
    title: "E-commerce Platform Transformation for Local Retailer",
    excerpt: "How we helped a traditional retail store increase online sales by 300% with a custom e-commerce solution.",
    category: "E-commerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Raj Sharma",
    image: "https://placehold.co/600x300",
    views: 1250,
    likes: 89,
    featured: true,
    content: `
        <h2>Project Overview</h2>
        <p>Our client, a traditional retail store with 20 years of experience, approached us with the challenge of establishing a strong online presence. The COVID-19 pandemic had significantly impacted their brick-and-mortar sales, and they needed a comprehensive e-commerce solution to survive and thrive in the digital marketplace.</p>
        
        <h2>The Challenge</h2>
        <p>The client faced several key challenges:</p>
        <ul>
          <li>No existing online presence or digital infrastructure</li>
          <li>Limited technical knowledge about e-commerce platforms</li>
          <li>Inventory management across multiple channels</li>
          <li>Integrating with existing POS systems</li>
          <li>Building customer trust in their online brand</li>
        </ul>
        
        <h2>Our Solution</h2>
        <p>We developed a comprehensive e-commerce platform using modern technologies:</p>
        <ul>
          <li><strong>Frontend:</strong> React.js for a responsive, fast-loading user interface</li>
          <li><strong>Backend:</strong> Node.js with Express for robust API development</li>
          <li><strong>Database:</strong> MongoDB for flexible product catalog management</li>
          <li><strong>Payment Processing:</strong> Stripe integration for secure transactions</li>
          <li><strong>Inventory Management:</strong> Real-time sync with existing POS systems</li>
        </ul>
        
        <h2>Implementation Process</h2>
        <p>The project was completed in 4 phases over 3 months:</p>
        <ol>
          <li><strong>Discovery & Planning (Week 1-2):</strong> Analyzed business requirements and designed system architecture</li>
          <li><strong>Development (Week 3-8):</strong> Built the core platform with all essential features</li>
          <li><strong>Testing & Integration (Week 9-10):</strong> Comprehensive testing and POS system integration</li>
          <li><strong>Launch & Optimization (Week 11-12):</strong> Go-live support and performance optimization</li>
        </ol>
        
        <h2>Results & Impact</h2>
        <p>The results exceeded all expectations:</p>
        <ul>
          <li>300% increase in online sales within the first 6 months</li>
          <li>Page load time optimized to 2.1 seconds</li>
          <li>Conversion rate improved to 4.2%</li>
          <li>Customer satisfaction score of 4.8/5</li>
          <li>Reduced operational costs by 25%</li>
        </ul>
        
        <h2>Technical Highlights</h2>
        <p>Some key technical achievements:</p>
        <ul>
          <li>Progressive Web App (PWA) capabilities for mobile users</li>
          <li>Advanced search and filtering functionality</li>
          <li>Real-time inventory updates</li>
          <li>Automated email marketing integration</li>
          <li>Analytics dashboard for business insights</li>
        </ul>
        
        <h2>Client Testimonial</h2>
        <blockquote>
          "Gorilla Tech Solution transformed our business completely. We went from struggling to survive to thriving in the digital marketplace. Their team understood our needs and delivered beyond our expectations." - Store Owner
        </blockquote>
      `,
    results: {
      metric1: {
        label: "Sales Increase",
        value: "300%"
      },
      metric2: {
        label: "Page Load Time",
        value: "2.1s"
      },
      metric3: {
        label: "Conversion Rate",
        value: "4.2%"
      }
    }
  }
  // Add more case studies as needed...
  ];
  const caseStudy = caseStudies.find(cs => cs.id === parseInt(id || '0'));
  useSEO({
    title: `${caseStudy?.title || 'Case Study'} | Gorilla Tech Solution`,
    description: caseStudy?.excerpt || 'Detailed case study from Gorilla Tech Solution',
    keywords: `case study, ${caseStudy?.category}, ${caseStudy?.tags.join(', ')}, Gorilla Tech Solution`,
    ogTitle: caseStudy?.title,
    ogDescription: caseStudy?.excerpt,
    ogImage: caseStudy?.image,
    canonicalUrl: `/case-study/${id}`
  });
  if (!caseStudy) {
    return <Navigate to="/case-study" replace />;
  }
  return <div className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": caseStudy.title,
        "description": caseStudy.excerpt,
        "datePublished": caseStudy.date,
        "author": {
          "@type": "Person",
          "name": caseStudy.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Gorilla Tech Solution"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://gorillatechsolution.com/case-study/${caseStudy.id}`
        }
      })
    }} />

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/case-study">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="text-sm">{caseStudy.category}</Badge>
              {caseStudy.featured && <Star className="h-5 w-5 text-yellow-500 fill-current" />}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {caseStudy.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(caseStudy.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {caseStudy.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {caseStudy.author}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {caseStudy.views} views
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                {caseStudy.likes} likes
              </div>
              <ShareModal title={caseStudy.title} description={caseStudy.excerpt} url={`${window.location.origin}/case-study/${caseStudy.id}`} />
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-64 md:h-96 object-cover rounded-lg" />
            </div>
            
          </header>


          {/* Main Content */}
          <section className="prose prose-lg max-w-none mb-12">
            <div className="leading-relaxed space-y-6" dangerouslySetInnerHTML={{
            __html: caseStudy.content
          }} />
          </section>

          {/* Horizontal Line */}
          <hr className="border-border my-12" />

          {/* QR Code Section - Above Related Studies */}
          <div className="flex justify-end">
            <ScanMeSection qrValue={`${window.location.origin}/case-study/${caseStudy.id}`} className="scale-75" />
          </div>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">SaaS</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Customer Management System for Enterprise
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a comprehensive CRM system that increased client retention by 250% and streamlined operations.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>6 min read</span>
                    <span>Tech Solutions</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">Mobile App</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Food Delivery App Development
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Created a mobile app that captured 40% market share in the local food delivery sector.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>5 min read</span>
                    <span>App Development</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          
        </article>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>;
};
export default CaseStudyDetail;