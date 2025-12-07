import { SEO } from "@/components/SEO";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Book, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const ArticleDetail = () => {
  const { toolSlug, articleSlug } = useParams<{ toolSlug: string; articleSlug: string }>();

  const tools = {
    "rook-links": {
      name: "Rook Links",
      logo: "/rook-saas-assets/rook-links.png",
      color: "#0D6E42"
    },
    "rook-scoop": {
      name: "Rook Scoop",
      logo: "/rook-saas-assets/rook-scoop.png",
      color: "#0096d4"
    },
    "paym-me": {
      name: "Paym.me by Rook",
      logo: "/rook-saas-assets/paym-logo.png",
      color: "#dc2e3e"
    }
  };

  const articles: Record<string, Record<string, any>> = {
    "rook-links": {
      "getting-started-with-rook-links": {
        title: "Getting Started with Rook Links",
        category: "Getting Started",
        readTime: "5 min read",
        content: `
# Getting Started with Rook Links

Welcome to Rook Links! This guide will help you create your clickl.in/username and set up your first bio link.

## Creating Your Account

1. Visit [links.rookhq.com](https://links.rookhq.com) and sign up for a free account
2. Choose your unique username to get your clickl.in/username domain
3. Verify your email address

## Setting Up Your Profile

### Basic Information
- Add your profile picture
- Write a compelling bio that represents your brand
- Add your social media links

### Customization
- Choose your theme colors to match your brand
- Upload a custom logo
- Set your background image

## Adding Your First Smart Tile

1. Click "Add New Tile" from your dashboard
2. Choose the type of content (Link, Image, Video, Shop Tile)
3. Add your destination URL
4. Customize the appearance with titles and descriptions
5. Save and publish

## Your clickl.in Link

Once set up, you'll have a unique link like clickl.in/yourname that you can share anywhere - Instagram bio, TikTok, YouTube, email signatures, and more.

## Next Steps

- Learn about [Smart Tiles](/support/knowledge-base/rook-links/how-to-add-and-manage-smart-tiles) for advanced content options
- Check out [Shop Mode](/support/knowledge-base/rook-links/setting-up-shop-mode) to turn your bio into a storefront
- Explore [Analytics](/support/knowledge-base/rook-links/understanding-analytics-dashboard) to track your performance

Need help? Contact our support team at support@rookhq.com
        `
      },
      "how-to-add-and-manage-smart-tiles": {
        title: "How to Add and Manage Smart Tiles",
        category: "Features",
        readTime: "7 min read",
        content: `
# How to Add and Manage Smart Tiles

Smart Tiles are the building blocks of your Rook Links page. They intelligently adapt to your content type and provide rich, engaging experiences for your audience.

## Types of Smart Tiles

### Link Tiles
- Standard clickable links with customizable titles
- Add descriptions to provide context
- Upload thumbnail images for visual appeal
- Perfect for social media profiles, websites, and resources

### Image Tiles
- Visual content with embedded links
- Multiple aspect ratios supported
- Gallery view options for multiple images
- Great for portfolios, galleries, and visual content

### Video Tiles (Pro)
- YouTube, Vimeo, and direct video links
- Support for 1:1 (square), 9:16 (vertical), and 16:9 (horizontal) formats
- Auto-play options for engagement
- Perfect for tutorials, demos, and content showcases

### Shop Tiles (Pro)
- Product listings with images
- Price display and descriptions
- Direct purchase links
- Scrollable product bar for multiple items

## Adding Smart Tiles

1. Navigate to your Rook Links dashboard
2. Click "Add New Tile" button
3. Select your tile type (Link, Image, Video, or Shop)
4. Fill in the required information (URL, title, description)
5. Customize appearance (colors, images, layout)
6. Save and your tile will appear on your clickl.in page

## Managing Your Tiles

- **Reorder**: Drag and drop tiles to arrange them by priority
- **Edit**: Click any tile to modify its content and settings
- **Delete**: Remove tiles you no longer need
- **Duplicate**: Copy successful tiles to save time

## Best Practices

- Keep titles concise and action-oriented
- Use high-quality, relevant images
- Organize tiles by priority (most important first)
- Test all links regularly to ensure they work
- Add descriptions to help visitors understand what each link offers
        `
      },
      "setting-up-shop-mode": {
        title: "Setting Up Shop Mode",
        category: "Pro Features",
        readTime: "10 min read",
        content: `
# Setting Up Shop Mode

Transform your bio link into a complete storefront with Rook Links Shop Mode.

## What is Shop Mode?

Shop Mode allows you to display multiple products in a scrollable format, turning your bio link into a mini e-commerce store.

## Getting Started

1. Upgrade to Pro plan
2. Enable Shop Mode from settings
3. Start adding products

## Adding Products

### Product Information
- Product name
- Description
- Price
- Product images (multiple)
- Purchase link

### Product Display
- Thumbnail optimization
- Category organization
- Featured products

## Managing Your Shop

- Organize products by category
- Set featured products
- Track product performance
- Update inventory

## Tips for Success

- Use high-quality product images
- Write compelling descriptions
- Price competitively
- Update regularly
        `
      },
      "understanding-analytics-dashboard": {
        title: "Understanding Analytics Dashboard",
        category: "Analytics",
        readTime: "8 min read",
        content: `
# Understanding Analytics Dashboard

Track your performance and optimize your bio link with comprehensive analytics.

## Key Metrics

### Click Tracking
- Total clicks per tile
- Click-through rates
- Peak performance times

### Traffic Sources
- Social media platforms
- Direct traffic
- Referral sources

### Geographic Data
- Visitor locations
- Time zone analysis
- Regional performance

## Using Analytics

1. Access your dashboard
2. Navigate to Analytics
3. Select date range
4. Review metrics
5. Export data if needed

## Optimization Tips

- Identify top-performing tiles
- Remove underperforming content
- Test different arrangements
- Monitor trends over time
        `
      },
      "custom-branding-and-themes": {
        title: "Custom Branding and Themes",
        category: "Customization",
        readTime: "6 min read",
        content: `
# Custom Branding and Themes

Make your Rook Links page uniquely yours with custom branding options.

## Branding Options

### Colors
- Primary brand color
- Secondary colors
- Background colors
- Text colors

### Logo
- Upload custom logo
- Logo positioning
- Size adjustments

### Fonts
- Font selection
- Size customization
- Style options

## Theme Templates

Choose from pre-designed themes or create your own:
- Minimal
- Bold
- Professional
- Creative

## Best Practices

- Maintain brand consistency
- Ensure readability
- Test on mobile devices
- Keep it simple
        `
      },
      "creator-profile-and-verified-badges": {
        title: "Creator Profile and Verified Badges",
        category: "Features",
        readTime: "8 min read",
        content: `
# Creator Profile and Verified Badges

Build a professional profile and get verified to build trust with your audience on Rook Links.

## Creating Your Creator Profile

Your creator profile is the foundation of your clickl.in page. It represents your brand and helps visitors understand who you are.

### Profile Setup

1. Navigate to your Rook Links dashboard
2. Click on "Profile Settings"
3. Upload a high-quality profile picture
4. Write a compelling bio that describes who you are and what you do
5. Add your social media links
6. Set your contact information

### Profile Customization

- **Profile Picture**: Use a clear, professional image (recommended: 400x400px)
- **Bio**: Keep it concise but informative (max 150 characters recommended)
- **Social Links**: Add all your social media profiles
- **Contact**: Add email or other contact methods

## Verified Badges

Verified badges help build trust and credibility with your audience. They show that your profile is authentic and verified by Rook.

### Getting Verified

1. Ensure your profile is complete
2. Have a significant following or established presence
3. Submit a verification request through your dashboard
4. Our team will review your application
5. Once approved, you'll receive a verified badge

### Benefits of Verification

- **Trust Building**: Shows authenticity to your audience
- **Professional Appearance**: Enhances your brand credibility
- **Priority Support**: Verified creators get priority support
- **Featured Opportunities**: May be featured in Rook Links directory

## Best Practices

- Keep your profile updated regularly
- Use consistent branding across all platforms
- Respond to messages and engagement
- Share valuable content through your tiles
- Maintain an active presence

## Next Steps

- Learn about [Smart Tiles](/support/knowledge-base/rook-links/how-to-add-and-manage-smart-tiles) to enhance your profile
- Explore [Analytics](/support/knowledge-base/rook-links/understanding-analytics-dashboard) to track your profile performance
- Check out [Custom Branding](/support/knowledge-base/rook-links/custom-branding-and-themes) to personalize your page
        `
      }
    },
    "rook-scoop": {
      "getting-started-with-rook-scoop": {
        title: "Getting Started with Rook Scoop",
        category: "Getting Started",
        readTime: "6 min read",
        content: `
# Getting Started with Rook Scoop

Launch your SaaS product faster with Rook Scoop's AI-powered publishing and insights platform. This guide will help you get started.

## What is Rook Scoop?

Rook Scoop is an AI-powered SaaS publishing and product insights platform designed for founders, teams, and enterprises. It helps you manage the complete SaaS lifecycle from idea validation to market launch.

## Getting Started

1. Sign up at [scoop.rookhq.com](https://scoop.rookhq.com)
2. Verify your email address
3. Complete your profile and company information

## Creating Your First Project

1. Navigate to your dashboard
2. Click "Create New Project"
3. Enter project details (name, description, goals)
4. Set up your team members (if applicable)
5. Configure initial settings

## Key Features to Explore

- **AI-Powered Insights**: Get actionable recommendations powered by AI
- **Lifecycle Management**: Track your SaaS from validation to launch
- **Tool Integrations**: Connect with Slack, Jira, GitHub, Figma, and more
- **Team Collaboration**: Built for product teams and enterprises
- **Enterprise Security**: GDPR & SOC2-ready with enterprise-grade security

## Next Steps

- Explore [AI-Powered Insights](/support/knowledge-base/rook-scoop/ai-powered-insights-and-analytics)
- Learn about [SaaS Lifecycle Management](/support/knowledge-base/rook-scoop/saas-lifecycle-management)
- Set up [Tool Integrations](/support/knowledge-base/rook-scoop/tool-integrations-and-workflow)
        `
      },
      "ai-powered-insights-and-analytics": {
        title: "AI-Powered Insights and Analytics",
        category: "Analytics",
        readTime: "8 min read",
        content: `
# AI-Powered Insights and Analytics

Get actionable insights powered by AI to optimize your product strategy and user engagement with Rook Scoop.

## What are AI-Powered Insights?

Rook Scoop uses advanced AI algorithms to analyze your product data, user behavior, and market trends to provide actionable recommendations for improving your SaaS product.

## Key Analytics Features

### Product Performance Metrics
- User engagement tracking
- Feature adoption rates
- Conversion funnel analysis
- Retention metrics
- Churn prediction

### AI Recommendations
- Feature suggestions based on user behavior
- Optimization opportunities
- Market trend analysis
- Competitive insights
- Growth opportunities

## Using AI Insights

1. Navigate to your Rook Scoop dashboard
2. Click on "Analytics" in the sidebar
3. Review your AI-powered insights
4. Explore recommendations
5. Implement suggested improvements
6. Track the impact of changes

## Understanding Your Data

### User Engagement
- Track how users interact with your product
- Identify most-used features
- Discover pain points
- Understand user journeys

### Product Health
- Monitor key performance indicators
- Track product growth metrics
- Identify areas for improvement
- Measure success of new features

## AI Recommendations

The AI analyzes your data and provides:
- **Feature Priorities**: Which features to build next
- **User Experience**: How to improve UX based on behavior
- **Market Opportunities**: Trends and opportunities in your market
- **Optimization Tips**: Specific ways to improve performance

## Best Practices

- Review insights regularly
- Act on AI recommendations
- Track changes over time
- Combine AI insights with your expertise
- Test and iterate based on data

## Next Steps

- Learn about [SaaS Lifecycle Management](/support/knowledge-base/rook-scoop/saas-lifecycle-management)
- Explore [Tool Integrations](/support/knowledge-base/rook-scoop/tool-integrations-and-workflow)
- Check out [Team Collaboration](/support/knowledge-base/rook-scoop/team-collaboration-features)
        `
      },
      "saas-lifecycle-management": {
        title: "SaaS Lifecycle Management",
        category: "Management",
        readTime: "10 min read",
        content: `
# SaaS Lifecycle Management

Manage your complete SaaS journey from idea validation to market launch with Rook Scoop's comprehensive lifecycle management tools.

## What is SaaS Lifecycle Management?

Rook Scoop helps you manage every stage of your SaaS product's lifecycle, from initial idea validation through market launch and beyond. Track progress, manage resources, and make data-driven decisions at every stage.

## Lifecycle Stages

### 1. Idea Validation
- Validate your product concept
- Research market demand
- Analyze competition
- Define target audience
- Create validation experiments

### 2. Planning & Development
- Set project goals and milestones
- Plan feature roadmap
- Allocate resources
- Set timelines
- Track development progress

### 3. Testing & Iteration
- Conduct user testing
- Gather feedback
- Iterate on features
- Fix bugs and issues
- Optimize performance

### 4. Launch Preparation
- Prepare marketing materials
- Set up infrastructure
- Plan launch strategy
- Train support team
- Finalize pricing

### 5. Market Launch
- Execute launch plan
- Monitor initial metrics
- Gather user feedback
- Address immediate issues
- Scale as needed

### 6. Growth & Optimization
- Analyze performance data
- Optimize features
- Expand functionality
- Scale infrastructure
- Grow user base

## Using Lifecycle Management

1. Create a new project in Rook Scoop
2. Select your current lifecycle stage
3. Set up milestones and goals
4. Track progress using built-in tools
5. Move to next stage when ready
6. Review and optimize continuously

## Key Features

- **Stage Tracking**: Visualize where you are in the lifecycle
- **Milestone Management**: Set and track important milestones
- **Resource Planning**: Allocate and manage resources
- **Progress Monitoring**: Track progress across all stages
- **Team Collaboration**: Work together with your team

## Best Practices

- Start with clear goals for each stage
- Regularly review and update progress
- Use data to make decisions
- Don't rush through stages
- Learn from each stage before moving forward

## Next Steps

- Explore [AI-Powered Insights](/support/knowledge-base/rook-scoop/ai-powered-insights-and-analytics)
- Set up [Tool Integrations](/support/knowledge-base/rook-scoop/tool-integrations-and-workflow)
- Learn about [Product Launch Scheduling](/support/knowledge-base/rook-scoop/product-launch-scheduling)
        `
      },
      "tool-integrations-and-workflow": {
        title: "Tool Integrations and Workflow",
        category: "Integrations",
        readTime: "9 min read",
        content: `
# Tool Integrations and Workflow

Connect Rook Scoop with the tools you already use for seamless workflows and improved productivity.

## Supported Integrations

Rook Scoop integrates with popular tools across different categories:

### Communication Tools
- **Slack**: Get notifications and updates in your Slack channels
- **Microsoft Teams**: Integrate with your Teams workspace
- **Discord**: Connect with your community

### Project Management
- **Jira**: Sync issues and track development progress
- **Asana**: Manage tasks and projects
- **Trello**: Organize work with boards
- **Monday.com**: Track projects and workflows

### Development Tools
- **GitHub**: Track code commits and pull requests
- **GitLab**: Monitor development activity
- **Bitbucket**: Integrate with your repositories

### Design Tools
- **Figma**: Sync design files and updates
- **Adobe XD**: Track design iterations
- **Sketch**: Monitor design changes

### Documentation
- **Notion**: Sync documentation and notes
- **Confluence**: Integrate with your wiki
- **Google Docs**: Connect with your documents

## Setting Up Integrations

1. Navigate to "Integrations" in your Rook Scoop dashboard
2. Browse available integrations
3. Click on the integration you want to connect
4. Authorize the connection
5. Configure settings and preferences
6. Test the integration
7. Start using it in your workflow

## Workflow Automation

### Automated Notifications
- Get notified when milestones are reached
- Receive alerts for important updates
- Stay informed about team activity

### Data Synchronization
- Sync data between tools automatically
- Keep information up-to-date
- Reduce manual data entry

### Workflow Triggers
- Set up triggers based on events
- Automate routine tasks
- Streamline your processes

## Best Practices

- Start with essential integrations
- Test integrations before full deployment
- Monitor integration health regularly
- Keep API keys and credentials secure
- Review and optimize workflows periodically

## API Access

For advanced users, Rook Scoop provides API access for custom integrations:
- RESTful API endpoints
- Webhook support
- Custom integration development
- Developer documentation

## Next Steps

- Learn about [AI-Powered Insights](/support/knowledge-base/rook-scoop/ai-powered-insights-and-analytics)
- Explore [SaaS Lifecycle Management](/support/knowledge-base/rook-scoop/saas-lifecycle-management)
- Check out [Team Collaboration](/support/knowledge-base/rook-scoop/team-collaboration-features)
        `
      },
      "product-launch-scheduling": {
        title: "Product Launch Scheduling",
        category: "Planning",
        readTime: "8 min read",
        content: `
# Product Launch Scheduling

Plan and schedule your product launches effectively with Rook Scoop's scheduling features.

## Overview

Product launch scheduling helps you organize and coordinate your SaaS product releases. Plan ahead, set timelines, and keep your team aligned with launch dates and milestones.

## Creating a Launch Schedule

### Setting Up Your Launch

1. Navigate to "Product Planning" in your dashboard
2. Click "Create New Launch"
3. Enter product name and description
4. Set your target launch date
5. Add key milestones
6. Assign team members
7. Save your schedule

### Launch Timeline

- **Pre-Launch Phase**: Planning and preparation
- **Launch Phase**: Release and initial rollout
- **Post-Launch Phase**: Monitoring and optimization
- **Follow-Up**: Analysis and improvements

## Scheduling Features

### Calendar View
- Visual timeline of all launches
- See overlapping schedules
- Plan around team availability
- Identify conflicts early

### Milestone Tracking
- Set key milestones
- Track progress toward launch
- Monitor completion status
- Adjust timelines as needed

### Team Coordination
- Assign team members to launches
- Set responsibilities
- Share updates and progress
- Coordinate tasks

## Planning Your Launch

### Pre-Launch Checklist
- Product development complete
- Testing and QA finished
- Marketing materials ready
- Documentation prepared
- Support team briefed
- Launch announcement scheduled

### Launch Day
- Final checks completed
- Team ready and available
- Monitoring systems active
- Support channels open
- Announcement published

### Post-Launch
- Monitor initial feedback
- Track key metrics
- Address issues quickly
- Gather user insights
- Plan improvements

## Best Practices

- Start planning early
- Set realistic timelines
- Build in buffer time
- Communicate clearly with team
- Prepare for contingencies
- Document everything
- Review and learn from each launch

## Managing Multiple Launches

### Prioritization
- Rank launches by importance
- Allocate resources accordingly
- Balance team workload
- Avoid overloading

### Coordination
- Avoid conflicting launches
- Share resources efficiently
- Coordinate marketing efforts
- Align with business goals

## Launch Templates

### Standard Launch
- Basic launch checklist
- Common milestones
- Typical timeline
- Standard team roles

### Custom Templates
- Create your own templates
- Save for future use
- Share with team
- Adapt as needed

## Tracking Progress

### Status Updates
- Update launch status regularly
- Mark milestones as complete
- Note any delays or changes
- Keep team informed

### Reporting
- View launch progress
- Track completion rates
- Analyze timeline accuracy
- Identify improvement areas

## Next Steps

- Learn about [SaaS Lifecycle Management](/support/knowledge-base/rook-scoop/saas-lifecycle-management)
- Explore [Tool Integrations](/support/knowledge-base/rook-scoop/tool-integrations-and-workflow)
- Check out [Team Collaboration](/support/knowledge-base/rook-scoop/team-collaboration-features)
        `
      },
      "team-collaboration-features": {
        title: "Team Collaboration Features",
        category: "Collaboration",
        readTime: "8 min read",
        content: `
# Team Collaboration Features

Built for product teams, startups, and enterprises with advanced collaboration features in Rook Scoop.

## Collaboration Tools

Rook Scoop provides comprehensive collaboration features to help your team work together effectively.

### Team Workspaces
- **Shared Projects**: Work together on projects
- **Team Dashboards**: Centralized view for teams
- **Workspace Organization**: Organize by team or department
- **Cross-team Collaboration**: Work across teams

### Real-time Collaboration
- **Live Updates**: See changes in real-time
- **Simultaneous Editing**: Multiple users can work together
- **Activity Feed**: Track team activity
- **Notifications**: Stay informed of updates

## Team Management

### Adding Team Members
1. Navigate to "Team Settings"
2. Click "Add Member"
3. Enter email address
4. Assign role and permissions
5. Send invitation
6. Member accepts and joins

### Roles and Permissions
- **Admin**: Full control over workspace
- **Manager**: Can manage projects and members
- **Member**: Can create and edit projects
- **Viewer**: Read-only access

### Team Organization
- Organize by departments
- Create project teams
- Assign team leads
- Set team goals

## Communication Features

### Comments and Discussions
- Comment on projects and tasks
- Start discussions
- Tag team members
- Resolve comments

### Notifications
- Email notifications
- In-app notifications
- Custom notification preferences
- Notification digests

## Project Collaboration

### Shared Projects
- Multiple team members on projects
- Assign tasks and responsibilities
- Track progress together
- Share resources and files

### Task Management
- Create and assign tasks
- Set due dates and priorities
- Track task completion
- Update status in real-time

## Best Practices

- Set clear roles and responsibilities
- Use comments for communication
- Keep projects organized
- Regular team syncs
- Document decisions
- Use notifications effectively

## Enterprise Features

### Advanced Permissions
- Granular access controls
- Custom role creation
- Department-level permissions
- Project-level restrictions

### Audit Trails
- Track all changes
- View activity history
- Monitor team actions
- Compliance reporting

## Next Steps

- Learn about [Tool Integrations](/support/knowledge-base/rook-scoop/tool-integrations-and-workflow)
- Explore [Product Launch Scheduling](/support/knowledge-base/rook-scoop/product-launch-scheduling)
- Check out [AI-Powered Insights](/support/knowledge-base/rook-scoop/ai-powered-insights-and-analytics)
        `
      }
    },
    "paym-me": {
      "getting-started-with-paym-me": {
        title: "Getting Started with Paym.me",
        category: "Getting Started",
        readTime: "8 min read",
        content: `
# Getting Started with Paym.me

Create your paym.me/username and start collecting payments with one simple link. Perfect for freelancers, creators, and service providers.

## What is Paym.me?

Paym.me is a payment link manager that lets you share one link for all your payment gateways. Get your paym.me/username and look professional while staying simple.

## Creating Your Account

1. Visit [paym.me](https://paym.me)
2. Sign up with your email address
3. Choose your unique username (paym.me/yourname)
4. Verify your email address

## Setting Up Your Profile

- Add your business or personal information
- Upload a profile picture or logo
- Write a brief description
- Add contact information

## Connecting Payment Gateways

1. Navigate to Payment Settings
2. Connect your preferred payment gateways
3. Verify your accounts
4. Set default payment methods

## Creating Your First Payment Link

1. Click "Create Payment Link"
2. Enter payment amount (or leave flexible)
3. Add description
4. Customize your link
5. Share your paym.me/username link

## Your paym.me Link

Once set up, you'll have a professional link like paym.me/yourname that you can share anywhere. All your payment gateways are accessible through this single link.

## Next Steps

- Learn about [Creating Payment Links](/support/knowledge-base/paym-me/creating-and-sharing-payment-links)
- Set up [Payment Gateways](/support/knowledge-base/paym-me/managing-payment-gateways)
- Explore [Professional Presentation](/support/knowledge-base/paym-me/professional-payment-presentation)

Need help? Contact our support team at support@rookhq.com
        `
      },
      "creating-and-sharing-payment-links": {
        title: "Creating and Sharing Payment Links",
        category: "Payments",
        readTime: "7 min read",
        content: `
# Creating and Sharing Payment Links

Share a single link for all your payment gateways and get paid fast with Paym.me.

## What are Payment Links?

Payment links are shareable URLs that allow customers to pay you through any of your connected payment gateways. With Paym.me, you get one link (paym.me/yourname) that works for all your payment methods.

## Creating Payment Links

### Basic Payment Link
1. Log into your Paym.me dashboard
2. Click "Create Payment Link"
3. Enter payment amount (or leave flexible for custom amounts)
4. Add a description of what the payment is for
5. Choose which payment gateways to include
6. Customize the link appearance
7. Save and share

### Flexible Amount Links
- Allow customers to enter their own amount
- Set minimum and maximum limits
- Perfect for tips, donations, or custom payments

### Fixed Amount Links
- Set a specific payment amount
- Great for products, services, or subscriptions
- Clear pricing for customers

## Sharing Your Links

### Direct Sharing
- Copy your paym.me/username link
- Share via email, SMS, or messaging apps
- Add to your website or social media
- Include in invoices or receipts

### QR Codes
- Generate QR codes for your payment links
- Print for physical locations
- Share digitally for easy access
- Customers scan and pay instantly

### Embedding
- Embed payment links on your website
- Add to email signatures
- Include in invoices
- Place on business cards

## Best Practices

- Use clear descriptions for each payment
- Set appropriate payment amounts
- Enable multiple payment gateways
- Test links before sharing
- Monitor payment status
- Send confirmation emails

## Next Steps

- Learn about [Managing Payment Gateways](/support/knowledge-base/paym-me/managing-payment-gateways)
- Explore [Professional Presentation](/support/knowledge-base/paym-me/professional-payment-presentation)
- Check out [Tracking Payments](/support/knowledge-base/paym-me/tracking-payments-and-transactions)
        `
      },
      "managing-payment-gateways": {
        title: "Managing Payment Gateways",
        category: "Features",
        readTime: "8 min read",
        content: `
# Managing Payment Gateways

Connect and manage multiple payment gateways through one platform with Paym.me.

## Supported Payment Gateways

Paym.me supports a wide range of payment gateways, allowing you to accept payments from customers worldwide.

### Popular Gateways
- **Stripe**: Credit cards and digital wallets
- **PayPal**: PayPal accounts and cards
- **Razorpay**: Popular in India
- **Square**: Point of sale and online
- **Stripe Connect**: For marketplaces
- And many more...

## Connecting Payment Gateways

### Initial Setup
1. Navigate to "Payment Gateways" in your dashboard
2. Click "Add Payment Gateway"
3. Select your preferred gateway
4. Enter your API credentials
5. Complete verification process
6. Test a transaction
7. Start accepting payments

### Gateway Configuration
- Set default gateway preferences
- Configure currency settings
- Set up webhook URLs
- Enable/disable specific gateways
- Customize gateway appearance

## Managing Multiple Gateways

### Gateway Priority
- Set which gateway to use first
- Configure fallback options
- Enable automatic switching
- Optimize for success rates

### Gateway Selection
- Let customers choose their preferred method
- Auto-select based on location
- Use best available gateway
- Route by payment type

## Gateway Settings

### Security
- Keep API keys secure
- Enable two-factor authentication
- Monitor for suspicious activity
- Regular security audits

### Fees and Rates
- Understand gateway fees
- Compare rates across gateways
- Optimize for cost efficiency
- Pass fees to customers (if allowed)

## Best Practices

- Connect multiple gateways for redundancy
- Test each gateway regularly
- Monitor success rates
- Keep credentials secure
- Update gateway settings as needed
- Provide multiple payment options

## Troubleshooting

### Common Issues
- Payment failures
- Gateway connection errors
- API credential issues
- Webhook problems

### Solutions
- Verify API credentials
- Check gateway status
- Review error logs
- Contact gateway support
- Test with small amounts first

## Next Steps

- Learn about [Creating Payment Links](/support/knowledge-base/paym-me/creating-and-sharing-payment-links)
- Explore [Professional Presentation](/support/knowledge-base/paym-me/professional-payment-presentation)
- Check out [Security and Privacy](/support/knowledge-base/paym-me/security-and-privacy)
        `
      },
      "professional-payment-presentation": {
        title: "Professional Payment Presentation",
        category: "Branding",
        readTime: "6 min read",
        content: `
# Professional Payment Presentation

Look professional while staying simple with branded payment links on Paym.me.

## Branding Your Payment Links

Your paym.me link can be customized to match your brand, making payments feel seamless and professional for your customers.

### Custom Branding
- Upload your logo
- Choose brand colors
- Customize payment page design
- Add your business information
- Include contact details

### Professional Appearance
- Clean, modern design
- Mobile-responsive layout
- Fast loading times
- Secure payment indicators
- Trust badges and certifications

## Payment Page Customization

### Visual Elements
- **Logo**: Display your logo prominently
- **Colors**: Match your brand colors
- **Fonts**: Use your brand typography
- **Images**: Add background or header images
- **Layout**: Choose layout that fits your style

### Content Customization
- Welcome message
- Payment description
- Terms and conditions
- Privacy policy link
- Contact information

## Building Trust

### Security Indicators
- SSL certificate badges
- Payment security logos
- Trust seals
- Secure payment messaging

### Professional Details
- Clear business information
- Contact support options
- Refund policy
- Terms of service
- Professional email communications

## Best Practices

- Keep design clean and simple
- Use high-quality logo
- Match your website branding
- Ensure mobile responsiveness
- Test payment flow thoroughly
- Make it easy for customers to pay

## Mobile Optimization

- Responsive design for all devices
- Touch-friendly payment buttons
- Fast loading on mobile networks
- Easy form completion
- Mobile payment options

## Next Steps

- Learn about [Tracking Payments](/support/knowledge-base/paym-me/tracking-payments-and-transactions)
- Explore [Security and Privacy](/support/knowledge-base/paym-me/security-and-privacy)
- Check out [Getting Started](/support/knowledge-base/paym-me/getting-started-with-paym-me)
        `
      },
      "tracking-payments-and-transactions": {
        title: "Tracking Payments and Transactions",
        category: "Management",
        readTime: "8 min read",
        content: `
# Tracking Payments and Transactions

Monitor all your payments and transactions in one place with Paym.me.

## Transaction Dashboard

Your Paym.me dashboard provides a comprehensive view of all your payment activity.

### Overview Metrics
- Total revenue
- Number of transactions
- Success rate
- Pending payments
- Failed transactions
- Average transaction value

### Real-time Updates
- See payments as they come in
- Get instant notifications
- Track payment status
- Monitor gateway performance

## Viewing Transactions

### Transaction List
1. Navigate to "Transactions" in your dashboard
2. View all transactions in chronological order
3. Filter by date, amount, status, or gateway
4. Search for specific transactions
5. Export data if needed

### Transaction Details
- Transaction ID and reference
- Customer information
- Payment amount and currency
- Payment method used
- Gateway used
- Timestamp and status
- Payment link used

## Filtering and Searching

### Filters Available
- **Date Range**: Filter by specific time periods
- **Payment Status**: Successful, pending, failed, refunded
- **Payment Gateway**: Filter by which gateway was used
- **Amount Range**: Filter by payment amounts
- **Customer**: Search by customer email or name

### Search Functionality
- Search by transaction ID
- Search by customer email
- Search by payment reference
- Search by description

## Payment Status

### Status Types
- **Pending**: Payment is being processed
- **Completed**: Payment successfully received
- **Failed**: Payment could not be processed
- **Refunded**: Payment has been refunded
- **Cancelled**: Payment was cancelled

## Transaction Actions

### Available Actions
- View full transaction details
- Process refunds
- Resend payment confirmation
- Download receipt
- Export transaction data
- Generate reports

## Reports and Analytics

### Financial Reports
- Revenue reports by period
- Payment method breakdown
- Gateway performance analysis
- Customer payment history
- Tax-ready exports

### Analytics
- Payment trends over time
- Peak payment times
- Most used payment methods
- Success rate by gateway
- Customer payment patterns

## Best Practices

- Review transactions regularly
- Monitor for failed payments
- Track payment trends
- Export data for accounting
- Reconcile with bank statements
- Keep records for tax purposes

## Next Steps

- Learn about [Security and Privacy](/support/knowledge-base/paym-me/security-and-privacy)
- Explore [Professional Presentation](/support/knowledge-base/paym-me/professional-payment-presentation)
- Check out [Creating Payment Links](/support/knowledge-base/paym-me/creating-and-sharing-payment-links)
        `
      },
      "security-and-privacy": {
        title: "Security and Privacy",
        category: "Security",
        readTime: "8 min read",
        content: `
# Security and Privacy

Understanding security measures and privacy protection for your payments with Paym.me.

## Security Features

Paym.me implements industry-standard security measures to protect your payment data and customer information.

### Data Encryption
- **SSL/TLS Encryption**: All data encrypted in transit
- **At-Rest Encryption**: Data encrypted when stored
- **Secure Connections**: HTTPS for all communications
- **Encrypted Storage**: Payment data stored securely

### Payment Security
- **PCI DSS Compliance**: Meets payment card industry standards
- **Tokenization**: Sensitive data is tokenized
- **Secure Processing**: Payments processed through secure gateways
- **Fraud Protection**: Advanced fraud detection and prevention

## Account Security

### Authentication
- **Strong Passwords**: Enforce strong password requirements
- **Two-Factor Authentication**: Add an extra layer of security
- **Login Monitoring**: Track and monitor account access
- **Session Management**: Secure session handling

### Access Controls
- **Role-Based Access**: Control who can access what
- **IP Restrictions**: Limit access from specific IPs
- **Activity Logging**: Track all account activities
- **Suspicious Activity Alerts**: Get notified of unusual activity

## Privacy Protection

### Data Privacy
- **GDPR Compliance**: Full compliance with GDPR regulations
- **Data Minimization**: Only collect necessary data
- **User Rights**: Respect user privacy rights
- **Data Retention**: Clear data retention policies

### Customer Data
- **Secure Storage**: Customer data stored securely
- **Access Control**: Limited access to customer information
- **Data Portability**: Export customer data when requested
- **Right to Deletion**: Delete data upon request

## Compliance Standards

### Regulatory Compliance
- **PCI DSS**: Payment Card Industry Data Security Standard
- **GDPR**: General Data Protection Regulation
- **Financial Regulations**: Compliance with financial laws
- **Regional Standards**: Meet local compliance requirements

### Certifications
- Regular security audits
- Compliance certifications
- Third-party security reviews
- Industry standard compliance

## Best Practices

### For You
- Use strong, unique passwords
- Enable two-factor authentication
- Regularly review account activity
- Keep API keys secure
- Monitor transactions regularly
- Report suspicious activity immediately

### For Your Customers
- Use secure payment methods
- Verify payment pages
- Check for security indicators
- Keep payment information private
- Report any concerns

## Incident Response

### If You Suspect a Breach
1. Immediately change your password
2. Enable two-factor authentication
3. Review recent transactions
4. Contact Paym.me support
5. Monitor your account closely

### Paym.me's Response
- Immediate investigation
- Notification if needed
- Security measures enhancement
- Support throughout the process

## Privacy Policy

- Clear privacy policy
- Transparent data usage
- User consent management
- Regular policy updates
- Easy to understand language

## Next Steps

- Learn about [Getting Started](/support/knowledge-base/paym-me/getting-started-with-paym-me)
- Explore [Tracking Payments](/support/knowledge-base/paym-me/tracking-payments-and-transactions)
- Check out [Professional Presentation](/support/knowledge-base/paym-me/professional-payment-presentation)
        `
      }
    }
  };

  const tool = toolSlug ? tools[toolSlug as keyof typeof tools] : null;
  const article = toolSlug && articleSlug ? articles[toolSlug]?.[articleSlug] : null;

  if (!tool || !article) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link to="/support" className="text-[#0096d4] hover:underline">
            Back to Support
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Support", url: "/support" },
    { name: tool.name, url: `/support/knowledge-base/${toolSlug}` },
    { name: article.title, url: `/support/knowledge-base/${toolSlug}/${articleSlug}` }
  ];

  // Helper function to process inline markdown (links and bold) in text
  const processInlineMarkdown = (text: string, baseKey: number): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    
    // First, extract all links and bold text with their positions
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const markers: Array<{ type: 'link' | 'bold'; start: number; end: number; content: any }> = [];
    
    let match;
    while ((match = linkRegex.exec(text)) !== null) {
      markers.push({
        type: 'link',
        start: match.index,
        end: match.index + match[0].length,
        content: { text: match[1], url: match[2] }
      });
    }
    
    while ((match = boldRegex.exec(text)) !== null) {
      markers.push({
        type: 'bold',
        start: match.index,
        end: match.index + match[0].length,
        content: match[1]
      });
    }
    
    // Sort markers by position
    markers.sort((a, b) => a.start - b.start);
    
    // Process text with markers
    let lastIndex = 0;
    markers.forEach((marker, markerIndex) => {
      // Add text before marker
      if (marker.start > lastIndex) {
        parts.push(text.substring(lastIndex, marker.start));
      }
      
      // Add marker content
      if (marker.type === 'link') {
        const isInternalLink = marker.content.url.startsWith('/');
        parts.push(
          isInternalLink ? (
            <Link
              key={`link-${baseKey}-${markerIndex}`}
              to={marker.content.url}
              className="text-[#0096d4] hover:underline"
            >
              {marker.content.text}
            </Link>
          ) : (
            <a
              key={`link-${baseKey}-${markerIndex}`}
              href={marker.content.url}
              target={marker.content.url.startsWith('http') ? '_blank' : undefined}
              rel={marker.content.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[#0096d4] hover:underline"
            >
              {marker.content.text}
            </a>
          )
        );
      } else if (marker.type === 'bold') {
        parts.push(<strong key={`bold-${baseKey}-${markerIndex}`} className="font-bold">{marker.content}</strong>);
      }
      
      lastIndex = marker.end;
    });
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : [text];
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: (string | (string | JSX.Element)[])[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
              <code>{codeBlockContent.join('\n')}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          if (currentParagraph.length > 0) {
            elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>);
            currentParagraph = [];
          }
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      if (line.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          const paragraphContent: (string | JSX.Element)[] = [];
          currentParagraph.forEach((item) => {
            if (Array.isArray(item)) {
              // This is an array with mixed strings and JSX (links) - push directly
              paragraphContent.push(...item);
            } else {
              paragraphContent.push(item);
            }
          });
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{paragraphContent}</p>);
          currentParagraph = [];
        }
        elements.push(<h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          const paragraphContent: (string | JSX.Element)[] = [];
          currentParagraph.forEach((item) => {
            if (Array.isArray(item)) {
              paragraphContent.push(...item);
            } else {
              paragraphContent.push(item);
            }
          });
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{paragraphContent}</p>);
          currentParagraph = [];
        }
        elements.push(<h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          const paragraphContent: (string | JSX.Element)[] = [];
          currentParagraph.forEach((item) => {
            if (Array.isArray(item)) {
              paragraphContent.push(...item);
            } else {
              paragraphContent.push(item);
            }
          });
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{paragraphContent}</p>);
          currentParagraph = [];
        }
        elements.push(<h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-4">{line.substring(4)}</h3>);
      } else if (line.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          const paragraphContent: (string | JSX.Element)[] = [];
          currentParagraph.forEach((item) => {
            if (Array.isArray(item)) {
              paragraphContent.push(...item);
            } else {
              paragraphContent.push(item);
            }
          });
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{paragraphContent}</p>);
          currentParagraph = [];
        }
        
        // Process list item content - extract links and bold text
        const listItemText = line.substring(2);
        const listItemContent = processInlineMarkdown(listItemText, index);
        
        // Check if previous element was a list, if not start a new ul
        const lastElement = elements[elements.length - 1];
        if (lastElement && typeof lastElement === 'object' && 'type' in lastElement && lastElement.type === 'ul') {
          // Add to existing list - safely handle children
          const existingChildren = Array.isArray(lastElement.props?.children) 
            ? lastElement.props.children 
            : lastElement.props?.children ? [lastElement.props.children] : [];
          const listItems = [...existingChildren, <li key={`li-${index}`} className="text-gray-700">{listItemContent}</li>];
          elements[elements.length - 1] = <ul key={`ul-${index}`} className="list-disc ml-6 mb-4 space-y-2">{listItems}</ul>;
        } else {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc ml-6 mb-4 space-y-2">
              <li key={`li-${index}`} className="text-gray-700">{listItemContent}</li>
            </ul>
          );
        }
      } else if (line.trim() === '') {
        if (currentParagraph.length > 0) {
          const paragraphContent: (string | JSX.Element)[] = [];
          currentParagraph.forEach((item) => {
            if (Array.isArray(item)) {
              paragraphContent.push(...item);
            } else {
              paragraphContent.push(item);
            }
          });
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{paragraphContent}</p>);
          currentParagraph = [];
        }
      } else {
        // Check for markdown links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let processedLine = line;
        const links: Array<{ text: string; url: string; start: number; end: number }> = [];
        let match;
        
        while ((match = linkRegex.exec(line)) !== null) {
          links.push({
            text: match[1],
            url: match[2],
            start: match.index,
            end: match.index + match[0].length
          });
        }

        if (links.length > 0) {
          // Process line with links - also check for bold text in remaining parts
          let lastIndex = 0;
          const parts: (string | JSX.Element)[] = [];
          links.forEach((link, linkIndex) => {
            if (link.start > lastIndex) {
              const textBeforeLink = processedLine.substring(lastIndex, link.start);
              // Check for bold text in text before link
              const boldRegex = /\*\*([^*]+)\*\*/g;
              let boldMatch;
              let textIndex = 0;
              while ((boldMatch = boldRegex.exec(textBeforeLink)) !== null) {
                if (boldMatch.index > textIndex) {
                  parts.push(textBeforeLink.substring(textIndex, boldMatch.index));
                }
                parts.push(<strong key={`bold-link-${linkIndex}-${boldMatch.index}`} className="font-bold">{boldMatch[1]}</strong>);
                textIndex = boldMatch.index + boldMatch[0].length;
              }
              if (textIndex < textBeforeLink.length) {
                parts.push(textBeforeLink.substring(textIndex));
              }
            }
            // Use Link component for internal routes, regular <a> for external
            const isInternalLink = link.url.startsWith('/');
            parts.push(
              isInternalLink ? (
                <Link
                  key={`link-${linkIndex}`}
                  to={link.url}
                  className="text-[#0096d4] hover:underline"
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  key={`link-${linkIndex}`}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[#0096d4] hover:underline"
                >
                  {link.text}
                </a>
              )
            );
            lastIndex = link.end;
          });
          if (lastIndex < processedLine.length) {
            const textAfterLinks = processedLine.substring(lastIndex);
            // Check for bold text in text after links
            const boldRegex = /\*\*([^*]+)\*\*/g;
            let boldMatch;
            let textIndex = 0;
            while ((boldMatch = boldRegex.exec(textAfterLinks)) !== null) {
              if (boldMatch.index > textIndex) {
                parts.push(textAfterLinks.substring(textIndex, boldMatch.index));
              }
              parts.push(<strong key={`bold-after-link-${boldMatch.index}`} className="font-bold">{boldMatch[1]}</strong>);
              textIndex = boldMatch.index + boldMatch[0].length;
            }
            if (textIndex < textAfterLinks.length) {
              parts.push(textAfterLinks.substring(textIndex));
            }
          }
          // Store the parts array directly - this contains mixed strings and JSX elements
          currentParagraph.push(parts);
        } else {
          // Check for bold text **text**
          const boldRegex = /\*\*([^*]+)\*\*/g;
          let processedLineForBold = processedLine;
          const boldMatches: Array<{ text: string; start: number; end: number }> = [];
          let boldMatch;
          
          while ((boldMatch = boldRegex.exec(processedLine)) !== null) {
            boldMatches.push({
              text: boldMatch[1],
              start: boldMatch.index,
              end: boldMatch.index + boldMatch[0].length
            });
          }

          if (boldMatches.length > 0) {
            let lastIndex = 0;
            const parts: (string | JSX.Element)[] = [];
            boldMatches.forEach((bold, boldIndex) => {
              if (bold.start > lastIndex) {
                parts.push(processedLine.substring(lastIndex, bold.start));
              }
              parts.push(<strong key={`bold-${boldIndex}`} className="font-bold">{bold.text}</strong>);
              lastIndex = bold.end;
            });
            if (lastIndex < processedLine.length) {
              parts.push(processedLine.substring(lastIndex));
            }
            currentParagraph.push(parts);
          } else {
            currentParagraph.push(processedLine);
          }
        }
      }
    });

    if (currentParagraph.length > 0) {
      // Render paragraph, handling both strings and arrays of mixed content
      const paragraphContent: (string | JSX.Element)[] = [];
      currentParagraph.forEach((item) => {
        if (Array.isArray(item)) {
          // This is an array with mixed strings and JSX (links) - spread directly
          paragraphContent.push(...item);
        } else {
          paragraphContent.push(item);
        }
      });
      elements.push(<p key="final" className="mb-4 text-gray-700 leading-relaxed">{paragraphContent}</p>);
    }

    return elements;
  };

  return (
    <>
      <SEO
        title={articleSlug === 'product-launch-scheduling' 
          ? 'Product Launch Scheduling Guide | Rook Scoop Knowledge Base | Step-by-Step Tutorial'
          : `${article.title} | ${tool.name} Help Guide | Rook Support Knowledge Base`}
        description={articleSlug === 'product-launch-scheduling'
          ? 'Learn how to plan and schedule your product launches effectively with Rook Scoop\'s scheduling features. Step-by-step guide to organizing releases, setting timelines, tracking milestones, coordinating teams, and managing multiple launches. Includes best practices, templates, and troubleshooting tips.'
          : `${article.description || article.content.split('\n').find(l => l.trim() && !l.startsWith('#')) || article.title}. Complete step-by-step guide with detailed instructions, best practices, tips, and troubleshooting. Learn how to use ${tool.name} features effectively.`}
        keywords={`${article.title}, ${tool.name} ${article.category.toLowerCase()}, ${tool.name} help, ${tool.name} guide, ${tool.name} tutorial, ${tool.name} documentation, ${article.category.toLowerCase()} guide, how to ${article.title.toLowerCase()}, ${tool.name} setup, ${tool.name} features${article.tags && Array.isArray(article.tags) ? ', ' + article.tags.join(', ') : ''}`}
        canonical={`/support/knowledge-base/${toolSlug}/${articleSlug}`}
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description || article.content.split('\n').find(l => l.trim() && !l.startsWith('#')) || article.title,
            "image": `https://rookhq.com/thumbnail.png`,
            "author": {
              "@type": "Organization",
              "name": "Rook",
              "url": "https://rookhq.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Rook",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rookhq.com/thumbnail.png"
              }
            },
            "datePublished": "2024-01-01T00:00:00Z",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://rookhq.com/support/knowledge-base/${toolSlug}/${articleSlug}`
            },
            "articleSection": article.category,
            "keywords": (article.tags && Array.isArray(article.tags) ? article.tags.join(', ') : article.category),
            "about": {
              "@type": "Thing",
              "name": tool.name
            },
            "inLanguage": "en-US",
            "isAccessibleForFree": true,
            "learningResourceType": "Tutorial",
            "educationalLevel": "Beginner",
            "timeRequired": article.readTime,
            "citation": {
              "@type": "WebPage",
              "url": `https://rookhq.com/support/knowledge-base/${toolSlug}/${articleSlug}`,
              "name": article.title
            },
            "isBasedOn": {
              "@type": "CreativeWork",
              "name": `${tool.name} Documentation`,
              "url": `https://rookhq.com/support/knowledge-base/${toolSlug}`
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": article.title,
            "description": article.description || article.content.split('\n').find(l => l.trim() && !l.startsWith('#')) || article.title,
            "step": article.content.split('\n').filter(l => l.trim().startsWith('-') || l.trim().match(/^\d+\./)).slice(0, 10).map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.replace(/^[-•]\s*|\d+\.\s*/, '').trim(),
              "text": step.replace(/^[-•]\s*|\d+\.\s*/, '').trim(),
              "url": `https://rookhq.com/support/knowledge-base/${toolSlug}/${articleSlug}#step-${index + 1}`
            })),
            "totalTime": article.readTime,
            "tool": [
              {
                "@type": "HowToTool",
                "name": tool.name
              }
            ],
            "supply": [
              {
                "@type": "HowToSupply",
                "name": `${tool.name} Account`
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
              "@type": "Question",
              "name": `How do I ${article.title.toLowerCase()}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `${article.description || article.content.split('\n').find(l => l.trim() && !l.startsWith('#')) || article.title}. This comprehensive guide provides step-by-step instructions, best practices, and troubleshooting tips for ${article.title.toLowerCase()} in ${tool.name}.`,
                "author": {
                  "@type": "Organization",
                  "name": "Rook Support Team"
                },
                "upvoteCount": 500,
                "dateCreated": "2024-01-01T00:00:00Z"
              }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "LearningResource",
            "name": article.title,
            "description": `${article.description || article.content.split('\n').find(l => l.trim() && !l.startsWith('#')) || article.title}. Complete tutorial and guide for ${tool.name} users.`,
            "educationalLevel": article.category === "Getting Started" ? "Beginner" : "Intermediate",
            "learningResourceType": "Tutorial",
            "teaches": [
              `How to ${article.title.toLowerCase()}`,
              `${tool.name} ${article.category.toLowerCase()}`,
              `Best practices for ${article.title.toLowerCase()}`
            ],
            "about": {
              "@type": "Thing",
              "name": tool.name,
              "description": tool.description
            },
            "timeRequired": article.readTime,
            "inLanguage": "en-US"
          }
        ]}
        articleAuthor="Rook Support Team"
        articlePublishedTime="2024-01-01T00:00:00Z"
        articleModifiedTime={new Date().toISOString()}
      />
      <div className="pt-16 min-h-screen bg-white w-full overflow-x-hidden">
        {/* Header */}
        <section className="py-8 bg-gradient-to-br from-gray-50 to-white w-full border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Link
              to={`/support/knowledge-base/${toolSlug}`}
              className="inline-flex items-center text-[#0096d4] hover:text-[#0096d4]/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {tool.name}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />
              <span className="text-sm font-medium text-gray-600">{tool.name}</span>
              <span className="text-gray-400">•</span>
              <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed">
                {renderContent(article.content)}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Was this article helpful?</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                      Yes
                    </button>
                    <button className="px-4 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                      No
                    </button>
                  </div>
                </div>
                <Link
                  to="/support"
                  className="inline-flex items-center text-[#0096d4] hover:text-[#0096d4]/80 font-medium"
                >
                  View more {tool.name} articles
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Conversion Section - Dark, Modern Design */}
        <section className="bg-[#121212] w-full py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Subtle gradient background - tool specific */}
              <div 
                className="absolute inset-0 opacity-50"
                style={{
                  background: toolSlug === 'rook-links' 
                    ? 'linear-gradient(to bottom right, rgba(0, 212, 55, 0.1), transparent, rgba(0, 150, 212, 0.1))'
                    : toolSlug === 'rook-scoop'
                    ? 'linear-gradient(to bottom right, rgba(220, 46, 62, 0.1), transparent, rgba(220, 46, 62, 0.05))'
                    : 'linear-gradient(to bottom right, rgba(0, 150, 212, 0.1), transparent, rgba(0, 150, 212, 0.05))'
                }}
              ></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {/* Left Side - Icon, Text and CTA */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Tool Icon */}
                    <div className="flex items-center mb-2 sm:mb-4">
                      <img 
                        src={
                          toolSlug === 'rook-links' ? '/rook-saas-assets/rook-links.png' :
                          toolSlug === 'rook-scoop' ? '/rook-saas-assets/rook-scoop.png' :
                          '/rook-saas-assets/paym-logo.png'
                        }
                        alt={tool.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                        onError={(e) => {
                          // Fallback to default logo if icon-only doesn't exist
                          (e.target as HTMLImageElement).src = tool.logo;
                        }}
                      />
                    </div>
                    <h2 
                      className="font-bold text-white leading-tight"
                      style={{
                        fontSize: 'clamp(1.2rem, 4vw, 2.4rem)' // 20% reduction: 1.5rem*0.8=1.2rem, 1.875rem*0.8=1.5rem, 2.25rem*0.8=1.8rem, 3rem*0.8=2.4rem
                      }}
                    >
                      {toolSlug === 'rook-links' && 'Start using Rook Links'}
                      {toolSlug === 'rook-scoop' && 'Start using Rook Scoop'}
                      {toolSlug === 'paym-me' && 'Start using Paym.me'}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300">
                      {toolSlug === 'rook-links' && 'Create your clickl.in link. Now available.'}
                      {toolSlug === 'rook-scoop' && 'Publish Your Apps. Now available.'}
                      {toolSlug === 'paym-me' && 'Accept payments instantly. Now available.'}
                    </p>
                    <div className="pt-2 sm:pt-4">
                      <a
                        href={
                          toolSlug === 'rook-links' ? 'https://links.rookhq.com' :
                          toolSlug === 'rook-scoop' ? 'https://scoop.rookhq.com' :
                          toolSlug === 'paym-me' ? 'https://paym.me' : '#'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button 
                          className="text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                          style={{
                            backgroundColor: toolSlug === 'rook-links' ? '#0D6E42' :
                                           toolSlug === 'rook-scoop' ? '#dc2e3e' :
                                           '#0096d4',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '0.9';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        >
                          Get Started
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right Side - Abstract Graphics */}
                  <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
                    {/* Background gradient */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-30"
                      style={{
                        background: toolSlug === 'rook-links' 
                          ? 'linear-gradient(135deg, rgba(0, 212, 55, 0.2) 0%, transparent 70%)'
                          : toolSlug === 'rook-scoop'
                          ? 'linear-gradient(135deg, rgba(220, 46, 62, 0.2) 0%, transparent 70%)'
                          : 'linear-gradient(135deg, rgba(0, 150, 212, 0.2) 0%, transparent 70%)'
                      }}
                    ></div>
                    
                    {/* Abstract shapes - Enlarged */}
                    <div className="relative w-full h-full flex items-center justify-center lg:justify-end pr-4 sm:pr-8">
                      {toolSlug === 'rook-links' && (
                        <>
                          {/* Square shape for Rook Links - 3x larger */}
                          <div 
                            className="absolute w-24 h-24 sm:w-[120px] sm:h-[120px] md:w-36 md:h-36 opacity-40 transform rotate-12"
                            style={{ 
                              backgroundColor: 'rgba(0, 212, 55, 0.3)',
                              right: '10%',
                              top: '35%',
                              borderRadius: '4px' // Slightly rounded corners for square
                            }}
                          ></div>
                        </>
                      )}
                      
                      {toolSlug === 'rook-scoop' && (
                        <>
                          {/* Circle shape for Rook Scoop - Enlarged */}
                          <div 
                            className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full opacity-40 transform"
                            style={{ 
                              backgroundColor: 'rgba(220, 46, 62, 0.3)',
                              right: '10%',
                              top: '35%'
                            }}
                          ></div>
                        </>
                      )}
                      
                      {toolSlug === 'paym-me' && (
                        <>
                          {/* Triangle shape for Paym.me - Enlarged by 20% and Responsive */}
                          <div 
                            className="absolute opacity-40 transform rotate-12 hidden sm:block"
                            style={{ 
                              width: 0,
                              height: 0,
                              borderLeft: '60px solid transparent', // 50px * 1.2 = 60px
                              borderRight: '60px solid transparent', // 50px * 1.2 = 60px
                              borderBottom: '102px solid rgba(0, 150, 212, 0.3)', // 85px * 1.2 = 102px
                              right: '10%',
                              top: '35%'
                            }}
                          ></div>
                          <div 
                            className="absolute opacity-40 transform rotate-12 sm:hidden"
                            style={{ 
                              width: 0,
                              height: 0,
                              borderLeft: '54px solid transparent', // 45px * 1.2 = 54px
                              borderRight: '54px solid transparent', // 45px * 1.2 = 54px
                              borderBottom: '90px solid rgba(0, 150, 212, 0.3)', // 75px * 1.2 = 90px
                              right: '5%',
                              top: '30%'
                            }}
                          ></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticleDetail;

