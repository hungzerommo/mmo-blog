(function () {
    const posts = [
        {
            id: "brand-partnerships-2025",
            title: "Negotiating Brand Partnerships That Scale in 2025",
            category: "affiliate",
            date: "2025-10-05",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Framework to pitch, price, and deliver high value brand collaborations for MMO creators.",
            coverCaption: "Planning session for a brand partnership campaign.",
            tags: ["facebook"],
            content: `
                <p>Brands are shifting from one-off shoutouts to performance linked retainers. Creators who walk in with data, clear deliverables, and post campaign reporting close longer deals.</p>
                <h2>Pitch Materials</h2>
                <ul>
                    <li>Bundle channel analytics, audience persona, and rate cards into one deck.</li>
                    <li>Include at least two outcome scenarios that map to the brand funnel.</li>
                    <li>Showcase proof of execution with short case studies and testimonials.</li>
                </ul>
                <p>Lock in expectations by outlining timelines, review windows, and how bonuses trigger when KPIs are surpassed.</p>
                <blockquote>Partnerships work best when you treat the brand as a product co creator, not just a sponsor.</blockquote>
                <p>After delivery, send a recap dashboard and a next quarter proposal while momentum is high.</p>
            `
        },
        {
            id: "tiktok-shop-playbook",
            title: "TikTok Shop Playbook for Digital Products",
            category: "website-blog",
            date: "2025-10-01",
            thumbnail: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=900&q=80",
            excerpt: "Use live demos, bundled offers, and creator affiliates to move digital goods on TikTok Shop.",
            coverCaption: "Storyboard for a TikTok Shop live stream.",
            content: `
                <p>TikTok Shop is rewarding sellers who combine short form discovery with fast follow offers. The key is to treat every live as a mini funnel.</p>
                <h2>Live Session Outline</h2>
                <ul>
                    <li>Hook viewers in the first ten seconds with a transformation statement.</li>
                    <li>Demo the product workflow and highlight quick wins.</li>
                    <li>Drop limited bundles every five minutes and recycle best comments as social proof.</li>
                </ul>
                <p>Pair your live calendar with micro affiliates who drive pre live traffic using stitched clips.</p>
                <p>Measure average watch time, click through rates, and coupon redemption to refine the next broadcast.</p>
            `
        },
        {
            id: "ads-budget-allocation",
            title: "Smart Ad Budget Allocation for Lean MMO Teams",
            category: "tool-toi-uu-hoa",
            date: "2025-09-28",
            thumbnail: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80",
            excerpt: "A simple method to split paid media spend across awareness, retargeting, and offer testing.",
            coverCaption: "Spreadsheet tracking weekly ad performance by funnel stage.",
            content: `
                <p>Paid media can drive predictable sales when you control experimentation. Allocate budget based on funnel health rather than platform hype.</p>
                <h2>Weekly Split</h2>
                <ul>
                    <li>40 percent to awareness creatives that stress problem agitation.</li>
                    <li>35 percent to retargeting sequences with proof and urgency.</li>
                    <li>25 percent to sandbox campaigns that test new hooks or offers.</li>
                </ul>
                <p>Review cost per acquisition and velocity every Monday. Pause the bottom twenty percent of creatives and redistribute into winners.</p>
                <p>Pair ad iterations with organic content themes so messaging stays consistent cross channel.</p>
            `
        },
        {
            id: "ai-research-workflow",
            title: "AI Research Workflow for Faster Topic Validation",
            category: "case-study-ai",
            date: "2025-09-25",
            thumbnail: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Combine AI agents with human sense making to pick winning content and product angles.",
            coverCaption: "Research board showing clustered topic ideas generated with AI.",
            content: `
                <p>A lightweight stack of AI tools can cut research time by eighty percent while keeping insights sharp. The trick is to define decision criteria before you prompt.</p>
                <h2>Four Step Loop</h2>
                <ol>
                    <li>Scrape community threads and export into a spreadsheet.</li>
                    <li>Ask your language model to cluster pains, desires, and buying triggers.</li>
                    <li>Score each cluster by search volume, urgency, and monetization fit.</li>
                    <li>Draft briefs with headline variations and proof points you already own.</li>
                </ol>
                <p>Close the loop by logging which ideas convert so the model can learn your taste over time.</p>
            `
        },
        {
            id: "tiktok-affiliate-shortform",
            title: "Short Form Affiliate Framework for TikTok",
            category: "affiliate",
            date: "2025-09-22",
            thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Structure hook, proof, and call to action blocks for high converting TikTok affiliate clips.",
            coverCaption: "Creator scripting a vertical affiliate video.",
            content: `
                <p>Winning TikTok affiliate clips feel native and deliver value before the offer drop. Think of each video as a three beat story.</p>
                <h2>Three Beat Script</h2>
                <ul>
                    <li><strong>Hook:</strong> Lead with a bold result or a painful mistake.</li>
                    <li><strong>Proof:</strong> Show the tool in action with screen recordings or b roll.</li>
                    <li><strong>Action:</strong> Spell out what to tap, what bonus they unlock, and when it expires.</li>
                </ul>
                <p>Stack variations by changing only the hook first. Once a clip performs, spin it into duet and stitch formats to widen reach.</p>
            `
        },
        {
            id: "automation-retention-bots",
            title: "Retention Bots That Keep Customers Buying",
            category: "tu-dong-hoa-mmo",
            date: "2025-09-20",
            thumbnail: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
            excerpt: "Deploy chat and email bots that drive repeat sales without feeling robotic.",
            coverCaption: "Flowchart of retention automations for a digital product shop.",
            content: `
                <p>Automation shines when it feels like a helpful assistant. Map the customer lifecycle and identify the moments where a nudge creates value.</p>
                <h2>Signals to Track</h2>
                <ul>
                    <li>Product usage milestones that should trigger upgrade tips.</li>
                    <li>Download completion paired with a request for quick feedback.</li>
                    <li>Invoice paid events that invite customers into an advanced workshop.</li>
                </ul>
                <p>Keep scripts short, personal, and signed by a real team member. Route high value replies to humans and log every interaction into your CRM.</p>
            `
        },
        {
            id: "youtube-shorts-revenue",
            title: "Turn YouTube Shorts Into Revenue Streams",
            category: "tao-anh-video",
            date: "2025-09-18",
            thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
            excerpt: "Blend short form education with evergreen offers to monetize Shorts traffic.",
            coverCaption: "Creator editing a batch of YouTube Shorts.",
            content: `
                <p>Shorts pull top of funnel attention, but revenue appears when you architect the handoff. Design a mini content series that tees up a deeper resource.</p>
                <h2>Bridge Strategy</h2>
                <ul>
                    <li>Publish four Shorts that teach one concept from different angles.</li>
                    <li>Pin a comment with a lead magnet landing page and mirror it in the description.</li>
                    <li>Retarget viewers with a longer tutorial or webinar replay within forty eight hours.</li>
                </ul>
                <p>Measure view through rate, pinned comment click rate, and email opt ins to see which topics deserve a long form spin off.</p>
            `
        },
        {
            id: "affiliate-funnel-2025",
            title: "Optimize 2025 Affiliate Funnels for Lifetime Value",
            category: "affiliate",
            date: "2025-09-15",
            thumbnail: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
            excerpt: "Build multi channel affiliate funnels that nurture prospects beyond the first click.",
            coverCaption: "Dashboard review for a multi channel affiliate campaign.",
            content: `
                <p>The affiliate game has matured. Sustainable teams track the entire customer journey instead of obsessing over day one revenue.</p>
                <h2>Key Moves</h2>
                <ul>
                    <li>Design a welcome sequence that segments by intent and sends tailored tutorials.</li>
                    <li>Use content upgrades to re engage cold subscribers and upsell premium bundles.</li>
                    <li>Share attribution dashboards with partners so everyone agrees on performance.</li>
                </ul>
                <p>Schedule quarterly audits to prune blockers, refresh copy, and plug new offers into the funnel.</p>
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/Q4Q0rQu9fho" allowfullscreen title="Affiliate funnel 2025"></iframe>
                </div>
            `
        },
        {
            id: "ai-content-upgrade",
            title: "AI Content Upgrade Workflow for Evergreen Posts",
            category: "case-study-ai",
            date: "2025-09-10",
            thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
            excerpt: "Refresh pillar articles in hours using AI assistants and a human quality control checklist.",
            coverCaption: "AI assisted content upgrade checklist displayed on screen.",
            content: `
                <p>Instead of rewriting evergreen posts from scratch, use AI to surface gaps and draft improvements.</p>
                <h2>Upgrade Steps</h2>
                <ol>
                    <li>Collect SERP data and competitor headings into a single brief.</li>
                    <li>Prompt the model to suggest new angles, statistics, and examples.</li>
                    <li>Review manually for voice, accuracy, and add screenshots where needed.</li>
                </ol>
                <p>Log before and after results for organic traffic, dwell time, and affiliate clicks to prove the uplift.</p>
            `
        },
        {
            id: "newsletter-growth",
            title: "Grow an MMO Newsletter from Zero to 10K Readers",
            category: "tai-nguyen-hoc",
            date: "2025-09-08",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
            excerpt: "Six step blueprint to acquire and retain newsletter subscribers with high engagement.",
            coverCaption: "Newsletter analytics dashboard tracking subscriber growth.",
            content: `
                <p>Newsletters win when every touchpoint delivers a quick win. Map your promise to a predictable publishing rhythm.</p>
                <h2>Six Steps</h2>
                <ol>
                    <li>Clarify the core transformation you publish every week.</li>
                    <li>Offer a concise lead magnet that delivers value in under ten minutes.</li>
                    <li>Onboard new readers with a four email welcome arc that tells your story.</li>
                    <li>Cross promote with aligned creators and track referral performance.</li>
                    <li>Invite readers to share screenshots of wins for social proof.</li>
                    <li>Analyze open, click, and reply rates monthly to keep pacing sharp.</li>
                </ol>
                <p>Diversify revenue with sponsorship slots, premium tiers, and affiliate bundles once engagement stabilizes.</p>
            `
        },
        {
            id: "weekly-newsletter-systems",
            title: "Systems to Ship a Weekly Newsletter Without Burnout",
            category: "tai-nguyen-hoc",
            date: "2025-09-05",
            thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
            excerpt: "Templates and batching tactics that keep your publishing schedule on track.",
            coverCaption: "Kanban board for weekly newsletter production.",
            content: `
                <p>Consistency matters more than length. Build a production lane that turns raw ideas into polished sends.</p>
                <h2>Workflow Highlights</h2>
                <ul>
                    <li>Collect ideas in a shared inbox and tag them by theme.</li>
                    <li>Draft outlines on Monday, finalize copy on Wednesday, and schedule on Thursday.</li>
                    <li>Automate visuals with saved Canva layouts and reusable snippets.</li>
                </ul>
                <p>Block time to reply to reader emails so you keep the feedback loop alive.</p>
            `
        },
        {
            id: "linkedin-lead-engine",
            title: "LinkedIn Lead Engine for Service Based MMO Offers",
            category: "facebook",
            date: "2025-09-02",
            thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Package expertise into weekly LinkedIn rituals that drive qualified calls.",
            coverCaption: "Tracking spreadsheet for LinkedIn outreach cadence.",
            content: `
                <p>LinkedIn rewards credibility signals. Structure your feed so buyers understand your process before they ever hop on a call.</p>
                <h2>Weekly Rhythm</h2>
                <ul>
                    <li>Publish one authority post, one story, and one quick win carousel.</li>
                    <li>Engage with ten ideal client posts daily and leave thoughtful comments.</li>
                    <li>Send five permission based DMs that reference public conversations.</li>
                </ul>
                <p>Measure profile views, connection acceptance rate, and booked calls to forecast pipeline.</p>
            `
        },
        {
            id: "community-discord-launch",
            title: "Launch a Discord Community That Stays Active",
            category: "dien-dan",
            date: "2025-08-28",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Structure channels, rituals, and moderation rules that keep members engaged.",
            coverCaption: "Community manager mapping Discord channel structure.",
            content: `
                <p>Communities thrive on clarity and consistent prompts. Set the tone on day one by over communicating expectations.</p>
                <h2>Core Elements</h2>
                <ul>
                    <li>Onboarding channel with a video tour and quick start checklist.</li>
                    <li>Weekly themed threads for wins, questions, and accountability.</li>
                    <li>Clear escalation path for support so conversations stay focused.</li>
                </ul>
                <p>Spotlight member contributions in your newsletter and live sessions to reinforce participation.</p>
            `
        },
        {
            id: "mastermind-setup",
            title: "Design a Paid Mastermind That Delivers Results",
            category: "dien-dan",
            date: "2025-08-25",
            thumbnail: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
            excerpt: "Build curriculum, accountability, and facilitation plans for high end masterminds.",
            coverCaption: "Facilitator preparing agenda for a mastermind call.",
            content: `
                <p>A profitable mastermind balances structure with peer learning. Decide on outcomes before inviting the first member.</p>
                <h2>Pillars to Lock In</h2>
                <ul>
                    <li>Cohort length and milestone map with monthly deliverables.</li>
                    <li>Private coaching slots that align with group calls.</li>
                    <li>Shared dashboard where members log goals and report wins.</li>
                </ul>
                <p>Collect testimonials mid cycle to keep energy high and improve the next cohort.</p>
            `
        },
        {
            id: "case-study-tribe",
            title: "Case Study: Building a Paid Tribe to 500 Members",
            category: "dien-dan",
            date: "2025-08-22",
            thumbnail: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
            excerpt: "How a niche MMO tribe translated content momentum into recurring revenue.",
            coverCaption: "Virtual roundtable with community members sharing wins.",
            content: `
                <p>Within twelve months the tribe crossed five hundred paid members by mixing weekly workshops with structured coworking.</p>
                <h2>Growth Drivers</h2>
                <ul>
                    <li>Monthly public teardown that teased the depth of premium sessions.</li>
                    <li>Tiered pricing with a low friction trial and a VIP coaching layer.</li>
                    <li>Member led challenges that generated social proof and referrals.</li>
                </ul>
                <p>Churn dropped below five percent after adding accountability pods and a concierge channel.</p>
            `
        },
        {
            id: "sales-funnel-automation",
            title: "Automate Sales Funnels Without Losing Personal Touch",
            category: "chien-luoc-mmo",
            date: "2025-08-18",
            thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
            excerpt: "Blend automation and human touchpoints so prospects feel guided, not herded.",
            coverCaption: "Sales workflow combining automation with human follow ups.",
            content: `
                <p>Automation should free your team to focus on conversations that matter. Map where bots can qualify leads and where humans should step in.</p>
                <h2>Suggested Flow</h2>
                <ul>
                    <li>Lead magnet triggered nurture that warms prospects with case studies.</li>
                    <li>Automated scheduler that routes qualified leads to the right closer.</li>
                    <li>Manual loom videos for high ticket proposals to keep trust high.</li>
                </ul>
                <p>Review feedback monthly and adjust copy to reflect real objections you hear on calls.</p>
            `
        },
        {
            id: "micro-influencer-outreach",
            title: "Micro Influencer Outreach Scripts That Convert",
            category: "facebook",
            date: "2025-08-15",
            thumbnail: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=900&q=80",
            excerpt: "Short outreach templates and tracking tips for collaborative launches.",
            coverCaption: "CRM view of micro influencer outreach cadence.",
            content: `
                <p>Creators read plenty of cold pitches. Respect their time by leading with relevance and a clear win.</p>
                <h2>Script Outline</h2>
                <ul>
                    <li>Reference a specific post or metric that proves you understand their niche.</li>
                    <li>Explain the collaboration concept in two sentences or less.</li>
                    <li>Offer revenue share details and next steps without pressure.</li>
                </ul>
                <p>Log responses in a simple CRM and follow up twice before archiving the lead.</p>
            `
        },
        {
            id: "micro-saas-playbook",
            title: "Micro SaaS Playbook for Solo MMO Builders",
            category: "chien-luoc-mmo",
            date: "2025-08-12",
            thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
            excerpt: "Validate, launch, and scale micro SaaS products with minimal overhead.",
            coverCaption: "Founder mapping a micro SaaS feature roadmap.",
            content: `
                <p>Micro SaaS thrives when you obsess over one workflow for a narrow audience. Start with a manual service to collect insights before writing code.</p>
                <h2>Three Phase Roadmap</h2>
                <ol>
                    <li>Problem interviews and concierge MVP with five paying testers.</li>
                    <li>Automate the painful steps and release to a private beta.</li>
                    <li>Layer affiliate and partner deals once churn stabilizes below five percent.</li>
                </ol>
                <p>Document every iteration so future updates feel intentional and easy to communicate.</p>
            `
        },
        {
            id: "ai-automation-stack",
            title: "Build an AI Automation Stack That Actually Delivers",
            category: "case-study-ai",
            date: "2025-08-09",
            thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
            excerpt: "Select AI tools that automate repetitive MMO workflows without breaking quality.",
            coverCaption: "Automation dashboard showing AI handoffs across tools.",
            content: `
                <p>Stacking every shiny AI tool wastes time. Instead, diagram your workflow and plug automation where data already flows.</p>
                <h2>Automation Layers</h2>
                <ul>
                    <li>Capture inputs with forms and synced spreadsheets.</li>
                    <li>Use AI to summarize, tag, and prioritize before humans review.</li>
                    <li>Trigger notifications and fulfillment tasks only after verification.</li>
                </ul>
                <p>Audit the stack quarterly and remove anything that is not saving time or increasing revenue.</p>
            `
        },
        {
            id: "data-dashboard-setup",
            title: "Set Up a Lean Data Dashboard for MMO Metrics",
            category: "kho-tai-nguyen",
            date: "2025-08-05",
            thumbnail: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
            excerpt: "Track acquisition, activation, and revenue metrics without drowning in spreadsheets.",
            coverCaption: "Data studio dashboard summarizing MMO KPIs.",
            content: `
                <p>Before you open any BI tool, define the handful of metrics that drive decisions. Everything else belongs in a separate report.</p>
                <h2>Dashboard Sections</h2>
                <ul>
                    <li>Traffic sources with trends and week over week deltas.</li>
                    <li>Conversion metrics for lead magnets, sales pages, and upsells.</li>
                    <li>Revenue breakdown by product, channel, and cohort.</li>
                </ul>
                <p>Schedule a fifteen minute weekly review to annotate anomalies and assign follow up tasks.</p>
            `
        },
        {
            id: "performance-tracking-sheet",
            title: "Performance Tracking Sheet for Creator Businesses",
            category: "kho-tai-nguyen",
            date: "2025-07-30",
            thumbnail: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
            excerpt: "A simple spreadsheet to monitor campaigns, revenue streams, and experiments.",
            coverCaption: "Spreadsheet template showing weekly creator business metrics.",
            content: `
                <p>Not every team needs a fancy analytics suite. A disciplined spreadsheet can reveal the same insights with less friction.</p>
                <h2>Tabs to Include</h2>
                <ul>
                    <li>Weekly scorecard with traffic, email, and revenue numbers.</li>
                    <li>Experiment log capturing assumptions, results, and lessons.</li>
                    <li>Content tracker that ties topics to conversions.</li>
                </ul>
                <p>Review the sheet as a team each Friday and call out one metric to improve the following week.</p>
            `
        },
        {
            id: "customer-journey-mapping",
            title: "Map the Customer Journey to Spot New Offers",
            category: "chien-luoc-mmo",
            date: "2025-07-25",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Visualize every touchpoint to uncover gaps, friction, and upsell opportunities.",
            coverCaption: "Whiteboard sketch of an MMO customer journey map.",
            content: `
                <p>A journey map clarifies where prospects drop off and what support they crave. Collaborate with marketing, product, and support on the same canvas.</p>
                <h2>Workshop Agenda</h2>
                <ul>
                    <li>List each awareness, consideration, and conversion touchpoint.</li>
                    <li>Mark emotions or questions customers feel at each step.</li>
                    <li>Brainstorm offers or assets that remove friction.</li>
                </ul>
                <p>Translate the map into a ninety day roadmap with owners and measurable outcomes.</p>
            `
        },
        {
            id: "freelance-personal-brand",
            title: "Build a Freelance Personal Brand That Books Better Clients",
            category: "freelance",
            date: "2025-07-12",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Position, package, and promote your freelance services with clarity.",
            coverCaption: "Freelancer planning a personal brand content calendar.",
            content: `
                <p>Great clients look for specialists. Define the problem you solve, the outcomes you guarantee, and the proof you can deliver.</p>
                <h2>Brand Assets</h2>
                <ul>
                    <li>One page service guide with pricing ranges and timelines.</li>
                    <li>Portfolio focused on measurable results instead of pretty visuals.</li>
                    <li>Weekly thought leadership posts that show how you think.</li>
                </ul>
                <p>Collect testimonials after every project and weave them into proposals and social profiles.</p>
            `
        },
        {
            id: "specialization-worksheet",
            title: "Specialization Worksheet for Freelance Clarity",
            category: "freelance",
            date: "2025-07-08",
            thumbnail: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
            excerpt: "Use this worksheet to narrow your niche and craft irresistible service offers.",
            coverCaption: "Freelancer filling out a specialization worksheet.",
            content: `
                <p>When you try to serve everyone, clients negotiate you down. This worksheet guides you through choosing a niche that values your expertise.</p>
                <h2>Worksheet Prompts</h2>
                <ul>
                    <li>List industries where you already have case studies or relationships.</li>
                    <li>Score each segment by budget, urgency, and how much you enjoy the work.</li>
                    <li>Draft a positioning statement and sanity check it with past clients.</li>
                </ul>
                <p>Refine your service page and outreach scripts using the language you gather from the interviews.</p>
            `
        },
        {
            id: "productivity-weekly-review",
            title: "Weekly Review Ritual for MMO Entrepreneurs",
            category: "nang-cao",
            date: "2025-07-02",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Run a 45 minute weekly review to stay aligned with revenue targets.",
            coverCaption: "Desk setup ready for a weekly review session.",
            content: `
                <p>A steady review ritual keeps you focused on the right experiments and prevents burnout.</p>
                <h2>Agenda</h2>
                <ol>
                    <li>Highlight three wins and the inputs that created them.</li>
                    <li>Identify bottlenecks in marketing, delivery, or operations.</li>
                    <li>Commit to one needle moving action for the upcoming week.</li>
                </ol>
                <p>Document lessons in a running log so you spot patterns across quarters.</p>
            `
        },
        {
            id: "tool-stack-lean",
            title: "Lean Tool Stack for Fast MMO Execution",
            category: "tool-template",
            date: "2025-06-25",
            thumbnail: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Assemble a light tool stack that keeps your team shipping quickly.",
            coverCaption: "Overview of a lean tool stack on a laptop screen.",
            content: `
                <p>Too many tools slow down collaboration. Choose one app per workflow and document the rules of engagement.</p>
                <h2>Suggested Stack</h2>
                <ul>
                    <li>Project management in ClickUp or Notion with clear owners.</li>
                    <li>Async updates via Loom and a dedicated wins channel.</li>
                    <li>Finance tracking with a shared dashboard that syncs payouts.</li>
                </ul>
                <p>Audit your stack quarterly and remove anything with low adoption.</p>
            `
        },
        {
            id: "notion-operating-system",
            title: "Build a Notion Operating System for Your MMO Business",
            category: "tool-template",
            date: "2025-06-20",
            thumbnail: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
            excerpt: "Centralize knowledge, SOPs, and dashboards inside Notion.",
            coverCaption: "Notion workspace showing linked databases for an MMO brand.",
            content: `
                <p>Notion can replace scattered docs and spreadsheets when you link data together. Start simple and expand as the team adopts it.</p>
                <h2>Core Databases</h2>
                <ul>
                    <li>Content calendar linked to asset libraries and briefs.</li>
                    <li>SOP wiki with video walkthroughs and revision history.</li>
                    <li>Experiment tracker that connects to performance dashboards.</li>
                </ul>
                <p>Automate status updates using Notion buttons or third party integrations.</p>
            `
        },
        {
            id: "landing-page-audit",
            title: "Landing Page Audit Checklist for Higher Conversions",
            category: "chien-luoc-mmo",
            date: "2025-06-15",
            thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
            excerpt: "A ten point checklist to diagnose landing page friction in minutes.",
            coverCaption: "Marketing team reviewing landing page metrics on a monitor.",
            content: `
                <p>Great landing pages answer objections fast. Use this checklist before launching any paid promotion.</p>
                <h2>Checklist Highlights</h2>
                <ul>
                    <li>Headline and subhead echo the promise visitors clicked on.</li>
                    <li>Hero section shows proof and a clear next step.</li>
                    <li>Social proof and FAQs remove the last minute doubts.</li>
                </ul>
                <p>Record session replays to validate your assumptions and iterate quickly.</p>
            `
        },
        {
            id: "evergreen-blog-structure",
            title: "Structure Evergreen Blog Posts for MMO Keywords",
            category: "seo-content",
            date: "2025-06-10",
            thumbnail: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
            excerpt: "A repeatable outline to write evergreen MMO articles that rank and convert.",
            coverCaption: "Blog outline template for evergreen MMO content.",
            content: `
                <p>Evergreen posts should help readers act right away. Blend storytelling, checklists, and calls to action.</p>
                <h2>Outline</h2>
                <ul>
                    <li>Open with a high stakes story that frames the problem.</li>
                    <li>Detail the step by step process with screenshots or gifs.</li>
                    <li>Close with a toolkit download or affiliate recommendation.</li>
                </ul>
                <p>Refresh stats and examples quarterly to keep the post relevant.</p>
            `
        },
        {
            id: "email-lifecycle-mmo",
            title: "Email Lifecycle Map for MMO Products",
            category: "tai-nguyen-hoc",
            date: "2025-06-05",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
            excerpt: "Map pre launch, onboarding, and retention emails so subscribers keep buying.",
            coverCaption: "Lifecycle email flow diagram on a whiteboard.",
            content: `
                <p>Email still drives the highest ROI when each message has a job. Plan sequences around customer milestones.</p>
                <h2>Lifecycle Stages</h2>
                <ul>
                    <li>Pre launch hype with behind the scenes content and waitlist perks.</li>
                    <li>Onboarding drip that guides new buyers through their first success.</li>
                    <li>Retention campaigns with case studies and advanced use cases.</li>
                </ul>
                <p>Review flows quarterly and sunset emails that no longer match your offers.</p>
            `
        },
        {
            id: "ecommerce-cross-border",
            title: "Cross Border Ecommerce Strategy for Creators",
            category: "website-blog",
            date: "2025-05-28",
            thumbnail: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
            excerpt: "Localize offers, payments, and support to sell globally without chaos.",
            coverCaption: "Dashboard monitoring cross border ecommerce logistics.",
            content: `
                <p>Going global expands revenue, but only if you localize the buyer experience.</p>
                <h2>Localization Checklist</h2>
                <ul>
                    <li>Translate core pages and checkout into top buyer languages.</li>
                    <li>Offer multiple payment gateways with regional wallets.</li>
                    <li>Provide follow up emails and support hours in local time zones.</li>
                </ul>
                <p>Track fulfillment metrics to ensure shipping times and taxes stay predictable.</p>
            `
        },
        {
            id: "ecommerce-email-flows",
            title: "Ecommerce Email Flows That Print ROI",
            category: "website-blog",
            date: "2025-05-24",
            thumbnail: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
            excerpt: "Set up the four core flows every store needs to convert browsers into buyers.",
            coverCaption: "Email automation screen highlighting key ecommerce flows.",
            content: `
                <p>These four flows drive the majority of ecommerce revenue. Get them live before chasing advanced automation.</p>
                <h2>Core Flows</h2>
                <ul>
                    <li>Welcome series that introduces brand story and best sellers.</li>
                    <li>Browse abandonment with product education and proof.</li>
                    <li>Cart recovery that tackles price objections.</li>
                    <li>Post purchase upsell with care tips and related offers.</li>
                </ul>
                <p>Test subject lines monthly and keep offers aligned with inventory levels.</p>
            `
        },
        {
            id: "case-study-100k",
            title: "Case Study: Scaling a YouTube Affiliate Channel to 100K USD",
            category: "affiliate",
            date: "2025-05-20",
            thumbnail: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
            excerpt: "Behind the scenes look at the systems powering a six figure affiliate channel.",
            coverCaption: "Home studio setup for a niche review channel.",
            content: `
                <p>Over eighteen months the channel grew from zero to six figures by treating every video like a product demo.</p>
                <h2>What Worked</h2>
                <ul>
                    <li>Editorial calendar anchored around comparison and tutorial keywords.</li>
                    <li>Audience surveys that informed bonus resources linked below each video.</li>
                    <li>Weekly live Q and A sessions to push viewers into the email list.</li>
                </ul>
                <p>Affiliate CTR averaged nine percent after adding timestamps and value stacks in descriptions.</p>
            `
        },
        {
            id: "crypto-airdrop-machine",
            title: "Crypto Airdrop Machine for Consistent Rewards",
            category: "crypto-blockchain",
            date: "2025-05-15",
            thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
            excerpt: "Build a research and execution loop that captures legit airdrop opportunities.",
            coverCaption: "Spreadsheet tracking weekly crypto airdrop tasks.",
            content: `
                <p>Airdrop hunting is noisy. Filter opportunities with strict criteria so you protect time and capital.</p>
                <h2>Evaluation Criteria</h2>
                <ul>
                    <li>Fundraising and team background to spot credible builders.</li>
                    <li>Task complexity versus potential token upside.</li>
                    <li>On chain activity requirements and risk exposure.</li>
                </ul>
                <p>Log every interaction, wallet, and reward to maintain compliance and avoid double work.</p>
            `
        },
        {
            id: "passive-income-checklist",
            title: "Passive Income Checklist for MMO Creators",
            category: "chien-luoc-mmo",
            date: "2025-05-10",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Audit your business and stack income streams without losing focus.",
            coverCaption: "Creator reviewing a passive income checklist on a tablet.",
            content: `
                <p>Passive income is rarely passive at the start. Use this checklist to prioritize assets that compound.</p>
                <h2>Checklist Items</h2>
                <ul>
                    <li>Document your flagship framework and turn it into a paid workshop.</li>
                    <li>Build evergreen funnels that lead to digital templates or courses.</li>
                    <li>Partner with complementary creators for recurring affiliate swaps.</li>
                </ul>
                <p>Schedule quarterly reviews to prune offers that do not fit your brand promise.</p>
            `
        },
        {
            id: "ugc-affiliate-collab",
            title: "UGC Affiliate Collaboration Blueprint",
            category: "affiliate",
            date: "2025-05-05",
            thumbnail: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=900&q=80",
            excerpt: "Recruit UGC creators, set briefs, and track performance with clarity.",
            coverCaption: "Team reviewing UGC submissions for an affiliate launch.",
            content: `
                <p>UGC creators extend your reach with authentic testimonials. Treat them like partners, not contractors.</p>
                <h2>Collaboration Steps</h2>
                <ul>
                    <li>Source creators who already use the product or serve your niche.</li>
                    <li>Provide mood boards, talking points, and compliance notes.</li>
                    <li>Share dashboards so everyone sees clicks, conversions, and payouts.</li>
                </ul>
                <p>Repurpose winning clips across ads, landing pages, and nurture emails.</p>
            `
        },
        {
            id: "digital-product-pricing",
            title: "Price Digital Products with Confidence",
            category: "chien-luoc-mmo",
            date: "2025-04-30",
            thumbnail: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80",
            excerpt: "Use anchored pricing tiers and value ladders to increase average order value.",
            coverCaption: "Pricing experiment board for digital offers.",
            content: `
                <p>Pricing is a strategic story. Anchor each tier to a clear outcome and support level.</p>
                <h2>Testing Ideas</h2>
                <ul>
                    <li>Bundle fast action bonuses that expire within seventy two hours.</li>
                    <li>Offer a payment plan with progress checkpoints to reduce churn.</li>
                    <li>Survey buyers thirty days post purchase to validate perceived value.</li>
                </ul>
                <p>Update your sales page copy and guarantee when you shift price points.</p>
            `
        },
        {
            id: "live-webinar-funnels",
            title: "Live Webinar Funnels That Still Convert",
            category: "tao-anh-video",
            date: "2025-04-22",
            thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
            excerpt: "Refresh your webinar stack with modern content hooks and follow ups.",
            coverCaption: "Presenter rehearsing a live webinar with slide previews.",
            content: `
                <p>Webinars work when they deliver actionable wins and smooth transitions into your offer.</p>
                <h2>Modern Funnel</h2>
                <ul>
                    <li>Short form teasers that seed curiosity across social channels.</li>
                    <li>Interactive polls and worksheets during the session to keep attention.</li>
                    <li>Follow up emails that segment based on watch time and questions asked.</li>
                </ul>
                <p>Measure registration to attendance conversion and adjust reminders accordingly.</p>
            `
        },
        {
            id: "organic-traffic-roadmap",
            title: "Organic Traffic Roadmap for MMO Sites",
            category: "seo-content",
            date: "2025-04-18",
            thumbnail: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
            excerpt: "Plan quarterly sprints to grow search traffic without sacrificing quality.",
            coverCaption: "SEO planner with quarterly roadmap milestones.",
            content: `
                <p>SEO momentum compounds when you focus on one growth lever per sprint.</p>
                <h2>Quarterly Focus Areas</h2>
                <ul>
                    <li>Quarter one: keyword research and technical clean up.</li>
                    <li>Quarter two: pillar content and internal linking refresh.</li>
                    <li>Quarter three: digital PR and partner backlinks.</li>
                    <li>Quarter four: conversion rate optimization on money pages.</li>
                </ul>
                <p>Track leading indicators like impressions and click through rate to stay motivated before revenue jumps.</p>
            `
        },
        {
            id: "outsourcing-operations",
            title: "Outsource Operations Without Losing Control",
            category: "quan-ly-du-an",
            date: "2025-04-12",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Delegate admin, support, and delivery tasks while keeping quality high.",
            coverCaption: "Operations manager documenting SOPs for assistants.",
            content: `
                <p>Delegation fails when expectations stay in your head. Document outcomes, deadlines, and examples before you hire.</p>
                <h2>Hand Off Plan</h2>
                <ul>
                    <li>Create SOPs with screenshots and short Loom videos.</li>
                    <li>Agree on success metrics and weekly reporting cadence.</li>
                    <li>Run a two week trial where you review work daily and offer feedback.</li>
                </ul>
                <p>Promote ownership by letting contractors propose improvements to the process.</p>
            `
        }
    ];

        const CATEGORY_GROUPS = [
        {
            id: "kiem-tien-online",
            title: "Kiếm Tiền Online",
            description: "Chiến lược và nền tảng giúp bạn tạo ra thu nhập MMO bền vững.",
            categories: [
                {
                    id: "facebook",
                    title: "Facebook",
                    description: "Phát triển tệp khách và triển khai chiến dịch trên hệ sinh thái Facebook."
                },
                {
                    id: "tiktok",
                    title: "TikTok",
                    description: "Chiến lược nội dung, livestream và bán hàng trên TikTok."
                },
                {
                    id: "youtube",
                    title: "YouTube",
                    description: "Tối ưu video dài/ngắn và hệ thống YouTube cho MMO."
                },
                {
                    id: "affiliate",
                    title: "Affiliate",
                    description: "Tăng doanh thu từ tiếp thị liên kết và hợp tác thương hiệu."
                },
                {
                    id: "google-adsense",
                    title: "Google AdSense",
                    description: "Tối ưu quảng cáo và doanh thu AdSense cho website, blog."
                },
                {
                    id: "freelance",
                    title: "Freelance",
                    description: "Xây dựng sự nghiệp freelance và dịch vụ MMO ổn định."
                },
                {
                    id: "website-blog",
                    title: "Website / Blog",
                    description: "Phát triển website/blog làm nền tảng kiếm tiền dài hạn."
                },
                {
                    id: "crypto-blockchain",
                    title: "Crypto & Blockchain",
                    description: "Cơ hội MMO đến từ Web3, crypto và blockchain."
                }
            ]
        },
        {
            id: "phan-mem",
            title: "Phần Mềm",
            description: "Bộ công cụ trên máy tính và di động giúp vận hành MMO hiệu quả.",
            categories: [
                {
                    id: "may-tinh",
                    title: "Máy Tính",
                    description: "Phần mềm dành cho máy tính hỗ trợ công việc MMO."
                },
                {
                    id: "dien-thoai",
                    title: "Điện Thoại",
                    description: "Ứng dụng di động để quản lý và triển khai MMO mọi lúc."
                },
                {
                    id: "extension-addon",
                    title: "Extension / Addon",
                    description: "Tiện ích trình duyệt giúp tăng tốc thao tác quan trọng."
                },
                {
                    id: "tool-toi-uu-hoa",
                    title: "Tool Tối Ưu Hóa",
                    description: "Bộ công cụ tối ưu hiệu suất chiến dịch và vận hành MMO."
                },
                {
                    id: "ai-tools",
                    title: "AI Tools",
                    description: "Danh sách công cụ AI hữu ích nhất cho MMO."
                }
            ]
        },
        {
            id: "ai",
            title: "AI",
            description: "Ứng dụng trí tuệ nhân tạo để mở rộng quy trình MMO.",
            categories: [
                {
                    id: "viet-noi-dung-tu-dong",
                    title: "Viết Nội Dung Tự Động",
                    description: "Quy trình dùng AI để viết nội dung nhanh và chuẩn."
                },
                {
                    id: "tao-anh-video",
                    title: "Tạo Ảnh & Video",
                    description: "Tạo hình ảnh, video bằng AI phục vụ marketing MMO."
                },
                {
                    id: "giong-noi-nhan-vat-ao",
                    title: "Giọng Nói & Nhân Vật Ảo",
                    description: "Biến giọng nói và nhân vật ảo thành tài sản MMO."
                },
                {
                    id: "tu-dong-hoa-mmo",
                    title: "Tự Động Hóa MMO",
                    description: "Tự động hóa quy trình vận hành MMO với AI và workflow."
                },
                {
                    id: "case-study-ai",
                    title: "Case Study AI",
                    description: "Bài học thực tế khi áp dụng AI trong MMO."
                }
            ]
        },
        {
            id: "chia-se-mmo",
            title: "Chia Sẻ",
            description: "Trải nghiệm thực tế và câu chuyện truyền cảm hứng từ cộng đồng.",
            categories: [
                {
                    id: "hanh-trinh-ca-nhan",
                    title: "Hành Trình Cá Nhân",
                    description: "Hành trình kiếm tiền online của thành viên MMO."
                },
                {
                    id: "case-study-that",
                    title: "Case Study Thật",
                    description: "Phân tích case study MMO thực chiến."
                },
                {
                    id: "bai-hoc-that-bai",
                    title: "Bài Học Thất Bại",
                    description: "Những sai lầm và cách đứng dậy trong MMO."
                },
                {
                    id: "chien-luoc-mmo",
                    title: "Chiến Lược MMO",
                    description: "Chiến lược MMO đã kiểm chứng qua thực tế."
                },
                {
                    id: "truyen-cam-hung",
                    title: "Truyền Cảm Hứng",
                    description: "Câu chuyện tiếp thêm động lực cho hành trình MMO."
                }
            ]
        },
        {
            id: "huong-dan-kien-thuc",
            title: "Hướng Dẫn",
            description: "Tài liệu nền tảng và nâng cao để bạn học MMO từng bước.",
            categories: [
                {
                    id: "co-ban",
                    title: "Cơ Bản",
                    description: "Kiến thức nền tảng để bắt đầu MMO."
                },
                {
                    id: "nang-cao",
                    title: "Nâng Cao",
                    description: "Kỹ năng nâng cao dành cho MMO chuyên nghiệp."
                },
                {
                    id: "tai-nguyen-hoc",
                    title: "Tài Nguyên Học",
                    description: "Tài liệu, khóa học, nguồn học MMO nên tham khảo."
                },
                {
                    id: "checklist-template",
                    title: "Checklist & Template",
                    description: "Checklist và template giúp triển khai nhanh hơn."
                }
            ]
        },
        {
            id: "tin-tuc-cap-nhat",
            title: "Tin Tức",
            description: "Tin nóng, xu hướng và chính sách ảnh hưởng tới MMO.",
            categories: [
                {
                    id: "cap-nhat-nen-tang",
                    title: "Cập Nhật Nền Tảng",
                    description: "Thay đổi quan trọng từ các nền tảng MMO phổ biến."
                },
                {
                    id: "xu-huong-moi",
                    title: "Xu Hướng Mới",
                    description: "Xu hướng mới nổi trong cộng đồng MMO."
                },
                {
                    id: "tin-cong-nghe",
                    title: "Tin Công Nghệ",
                    description: "Tin tức công nghệ tác động đến MMO."
                },
                {
                    id: "chinh-sach",
                    title: "Chính Sách",
                    description: "Chính sách, điều khoản và luật liên quan tới MMO."
                }
            ]
        },
        {
            id: "cong-cu-tai-nguyen",
            title: "Công Cụ & Tài Nguyên",
            description: "Kho tài nguyên giúp bạn triển khai và quản lý dự án MMO.",
            categories: [
                {
                    id: "seo-content",
                    title: "SEO & Content",
                    description: "Công cụ SEO và sản xuất nội dung chất lượng."
                },
                {
                    id: "quan-ly-du-an",
                    title: "Quản Lý Dự Án",
                    description: "Giải pháp quản lý dự án và quy trình MMO."
                },
                {
                    id: "kho-tai-nguyen",
                    title: "Kho Tài Nguyên",
                    description: "Kho tài nguyên tải nhanh phục vụ MMO."
                },
                {
                    id: "tool-template",
                    title: "Tool / Template",
                    description: "Bộ template và automation tiện dụng nhất."
                }
            ]
        },
        {
            id: "cong-dong-lien-he",
            title: "Cộng Đồng & Liên Hệ",
            description: "Nơi kết nối, trao đổi và liên hệ với MMO Insight.",
            categories: [
                {
                    id: "dien-dan",
                    title: "Diễn Đàn",
                    description: "Thông tin diễn đàn và kênh cộng đồng chính thức."
                },
                {
                    id: "lien-he",
                    title: "Liên Hệ",
                    description: "Cách liên hệ và gửi yêu cầu tới MMO Insight."
                },
                {
                    id: "hop-tac-ctv",
                    title: "Hợp Tác / CTV",
                    description: "Cơ hội hợp tác, tuyển cộng tác viên."
                },
                {
                    id: "faq",
                    title: "FAQ",
                    description: "Giải đáp câu hỏi thường gặp về MMO Insight."
                }
            ]
        }
    ];

    const CATEGORY_TO_GROUP = CATEGORY_GROUPS.reduce((acc, group) => {
        group.categories.forEach((item) => {
            acc[item.id] = group.id;
        });
        return acc;
    }, {});

    const categories = {
        All: {
            title: "Tất cả bài viết",
            description: "Kho bài viết MMO Insight được cập nhật liên tục.",
            group: null
        }
    };
    CATEGORY_GROUPS.forEach((group) => {
        group.categories.forEach((category) => {
            categories[category.id] = {
                title: category.title,
                description: category.description,
                group: group.id
            };
        });
    });

    posts.forEach((post) => {
        const explicitTags = Array.isArray(post.tags) ? post.tags.filter(Boolean) : [];
        const unique = new Set(explicitTags);
        if (post.category && !unique.has(post.category)) unique.add(post.category);
        const derivedGroup = CATEGORY_TO_GROUP[post.category] || null;
        if (derivedGroup && !unique.has(derivedGroup)) unique.add(derivedGroup);

        const orderedTags = [];
        if (derivedGroup && unique.has(derivedGroup)) {
            orderedTags.push(derivedGroup);
            unique.delete(derivedGroup);
        }
        if (post.category && unique.has(post.category)) {
            orderedTags.push(post.category);
            unique.delete(post.category);
        }
        orderedTags.push(...unique);

        post.tags = orderedTags;
        post.group = derivedGroup;
    });

    window.BLOG_DATA = {
        posts,
        categories,
        categoryGroups: CATEGORY_GROUPS,
        categoryToGroup: CATEGORY_TO_GROUP
    };
})();







