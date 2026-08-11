import json

sections_data = [
    {
        "name": "SECTION 01 — STICKY EMERGENCY BANNER",
        "elements": [
            {"type": "Banner Text", "text": "24/7 Emergency Plumbing — Call Now: +9 (245) 326-02-22"}
        ]
    },
    {
        "name": "SECTION 02 — NAVIGATION BAR",
        "elements": [
            {"type": "Navigation Link", "text": "Home"},
            {"type": "Navigation Link", "text": "About"},
            {"type": "Navigation Link", "text": "Service"},
            {"type": "Navigation Link", "text": "Contact"},
            {"type": "Navigation Link", "text": "Package"},
            {"type": "Navigation Link", "text": "Team"},
            {"type": "Navigation Button", "text": "Contact us"}
        ]
    },
    {
        "name": "SECTION 03 — HERO",
        "elements": [
            {"type": "Rating Score", "text": "4.9"},
            {"type": "Review Badge Text", "text": "Google Rating (150+ Reviews)"},
            {"type": "Main Heading", "text": "Your go-to plumbers for Quality and Care"},
            {"type": "Primary Button", "text": "Order services"},
            {"type": "Secondary Button", "text": "More about us"},
            {"type": "Form Title", "text": "Request an Instant Quote"},
            {"type": "Form Subtitle", "text": "Get a response within 30 minutes"},
            {"type": "Form Label", "text": "Full Name"},
            {"type": "Form Placeholder", "text": "John Doe"},
            {"type": "Form Label", "text": "Phone Number"},
            {"type": "Form Placeholder", "text": "(123) 456-7890"},
            {"type": "Form Label", "text": "Service Address"},
            {"type": "Form Placeholder", "text": "123 Main St, City, State"},
            {"type": "Form Label", "text": "Issue Type"},
            {"type": "Form Select Option", "text": "Select issue type"},
            {"type": "Form Select Option", "text": "Leak Repair"},
            {"type": "Form Select Option", "text": "Clog/Drain Cleaning"},
            {"type": "Form Select Option", "text": "Plumbing Installation"},
            {"type": "Form Select Option", "text": "Emergency Service"},
            {"type": "Form Label", "text": "Preferred Time"},
            {"type": "Form Placeholder", "text": "e.g. As soon as possible, or 2:00 PM"},
            {"type": "Form Submit Button", "text": "Get My Instant Quote"},
            {"type": "Form Success Title", "text": "Quote Request Received!"},
            {"type": "Form Success Description", "text": "Thank you! We will call or text you at your preferred time (within 30 minutes)."},
            {"type": "Statistic Number", "text": "15+"},
            {"type": "Statistic Label", "text": "Years of Dedicated services and solving plumbing problems with care"},
            {"type": "Statistic Number", "text": "95%"},
            {"type": "Statistic Label", "text": "Thousands of Satisfied Customers, Decades of Experience"},
            {"type": "Statistic Number", "text": "1000+"},
            {"type": "Statistic Label", "text": "Successfully Completed Plumbing Projects, On Time and On Budget"}
        ]
    },
    {
        "name": "SECTION 04 — ABOUT US",
        "elements": [
            {"type": "Paragraph", "text": "We pride ourselves on being your trusted local plumbing experts. With 20 years of experience serving your city/region, our mission is to provide high-quality, reliable plumbing services that you can depend on, whether it's for your home or business. From fixing leaks to full plumbing system installations, we handle every job with the utmost professionalism and care."}
        ]
    },
    {
        "name": "SECTION 05 — STATS COUNTER",
        "elements": [
            {"type": "Section Heading", "text": "Since We First Started Serving You..."},
            {"type": "Section Subtitle", "text": "Delivering top-tier plumbing solutions backed by decades of experience, rapid response times, and thousands of satisfied clients."},
            {"type": "Statistic Number", "text": "20+"},
            {"type": "Statistic Label", "text": "Years of Experience"},
            {"type": "Statistic Detail", "text": "Master plumbing excellence since 2006"},
            {"type": "Statistic Number", "text": "15K+"},
            {"type": "Statistic Label", "text": "Jobs Completed"},
            {"type": "Statistic Detail", "text": "Residential and commercial plumbing"},
            {"type": "Statistic Number", "text": "24/7"},
            {"type": "Statistic Label", "text": "Emergency Service"},
            {"type": "Statistic Detail", "text": "Fast 30-minute rapid dispatch"},
            {"type": "Statistic Number", "text": "100%"},
            {"type": "Statistic Label", "text": "Satisfaction Rate"},
            {"type": "Statistic Detail", "text": "Guaranteed quality workmanship"}
        ]
    },
    {
        "name": "SECTION 06 — TRUST BADGES & LICENSES",
        "elements": [
            {"type": "Section Heading", "text": "State of Ohio Licensed & Certified Plumbers"},
            {"type": "Section Subtitle", "text": "Fully licensed, bonded, and insured plumbing contractors committed to safety, compliance, and excellence."},
            {"type": "Badge SVG Ring Text", "text": "STATE OF OHIO LICENSED"},
            {"type": "Badge SVG Code", "text": "LIC #OH-48291"},
            {"type": "Badge Title", "text": "State of Ohio Licensed"},
            {"type": "Badge Subtitle", "text": "OCILB Plumbing License"},
            {"type": "Badge SVG Ring Text", "text": "DEPT OF COMMERCE"},
            {"type": "Badge SVG Ribbon Title", "text": "MASTER PLUMBER"},
            {"type": "Badge Title", "text": "OCILB Master Plumber"},
            {"type": "Badge Subtitle", "text": "Dept. of Commerce Cert."},
            {"type": "Badge SVG Ring Text", "text": "OHIO E.P.A. CERTIFIED"},
            {"type": "Badge SVG Ribbon Title", "text": "WATER SAFETY & BACKFLOW"},
            {"type": "Badge Title", "text": "Ohio EPA Certified"},
            {"type": "Badge Subtitle", "text": "Backflow & Clean Water"},
            {"type": "Badge SVG Ribbon Title", "text": "OHIO BWC INSURED"},
            {"type": "Badge Title", "text": "Ohio BWC Insured"},
            {"type": "Badge Subtitle", "text": "$2M Liability Protected"}
        ]
    },
    {
        "name": "SECTION 07 — SERVICES",
        "elements": [
            {"type": "Section Heading", "text": "Our Comprehensive Plumbing Services"},
            {"type": "Section Subtitle", "text": "Massa potenti tempor tristique scelerisque consequat. Et proin commodo ac amet dignissim risus pharetra sem."},
            {"type": "Card Title", "text": "Drain Cleaning Solutions"},
            {"type": "Card Link Text", "text": "View services"},
            {"type": "Card Title", "text": "Pipe Repair Services"},
            {"type": "Card Link Text", "text": "View services"},
            {"type": "Card Title", "text": "Sewer Line Repair"},
            {"type": "Card Link Text", "text": "View services"}
        ]
    },
    {
        "name": "SECTION 08 — PROCESS (HOW IT WORKS)",
        "elements": [
            {"type": "Section Heading", "text": "Streamlined plumbing process ensuring efficient and reliable service."},
            {"type": "Section Subtitle", "text": "Dignissim ut enim felis amet consequat vivamus cursus et et. Lectus eget ac in nibh risus malesuada at."},
            {"type": "Step Number", "text": "01"},
            {"type": "Step Title", "text": "Schedule Appointment"},
            {"type": "Step Description", "text": "Adipiscing sed blandit tincidunt tortor semper in odio. Parturient neque sed id netus nulla ultrices amet ullamcorper aliquet. Proin turpis imperdiet sem faucibus suscipit aliquet."},
            {"type": "Step Number", "text": "02"},
            {"type": "Step Title", "text": "Conduct Assessment"},
            {"type": "Step Description", "text": "Faucibus diam mollis augue blandit diam ornare lectus. Nunc sit ullamcorper porta praesent nulla. Duis in mi est maecenas lacus. Platea amet turpis adipiscing consectetur nibh."},
            {"type": "Step Number", "text": "03"},
            {"type": "Step Title", "text": "Schedule Appointment"},
            {"type": "Step Description", "text": "Porttitor in bibendum integer id nisl vestibulum ligula quis vitae. Interdum turpis ultricies aliquam dignissim luctus in nam. Nascetur orci facilisis maecenas vivamus tincidunt adipiscing."}
        ]
    },
    {
        "name": "SECTION 09 — CALL TO ACTION (MID-PAGE CTA)",
        "elements": [
            {"type": "Section Heading", "text": "Contact us today for your plumbing needs and solutions"},
            {"type": "Section Subtitle", "text": "Faucibus eget etiam tellus metus. Tellus auctor congue consectetur praesent est duis."},
            {"type": "Button", "text": "Get in touch"}
        ]
    },
    {
        "name": "SECTION 10 — TESTIMONIALS",
        "elements": [
            {"type": "Section Heading", "text": "See what our satisfied customers are saying about us"},
            {"type": "Section Subtitle", "text": "Eget praesent non vel dolor. Ultricies aenean nunc a mauris eget dui nulla ipsum lacus."},
            {"type": "Author Name", "text": "Emily Rodriguez"},
            {"type": "Rating Text", "text": "4 4.5 Rating"},
            {"type": "Quote Paragraph", "text": "Exceptional service! The team fixed my leak quickly and efficiently. I was amazed at how fast they responded to my call. They arrived on time, diagnosed the problem, and had everything fixed in no time. I highly recommend their services!"},
            {"type": "Category Badge", "text": "Pipe Repair"},
            {"type": "Author Name", "text": "Mike R"},
            {"type": "Rating Text", "text": "4 Rating"},
            {"type": "Quote Paragraph", "text": "We had an emergency pipe burst late at night, and Your Company was there within the hour! They provide clear, upfront pricing and always explain the work they’re doing. They quickly resolved the issue and saved us from a potential disaster. Their 24/7 service is truly a lifesaver."},
            {"type": "Category Badge", "text": "Drain Cleaning"},
            {"type": "Author Name", "text": "John Thompson"},
            {"type": "Rating Text", "text": "4 Rating"},
            {"type": "Quote Paragraph", "text": "I’m very impressed with the professionalism and expertise. From the initial consultation to the final inspection, everything was handled with care and precision. They took the time to explain the process and answered all my questions. Highly recommend!"},
            {"type": "Category Badge", "text": "Drain Cleaning"},
            {"type": "Author Name", "text": "Sarah Johnson"},
            {"type": "Rating Text", "text": "5 Rating"},
            {"type": "Quote Paragraph", "text": "Fast response and great communication. They exceeded my expectations! I had a plumbing emergency, and their team was at my house within an hour. They worked diligently and made sure everything was up to code. I couldn’t be happier!"},
            {"type": "Category Badge", "text": "Sewer Line"},
            {"type": "Author Name", "text": "David M"},
            {"type": "Rating Text", "text": "3 Rating"},
            {"type": "Quote Paragraph", "text": "The plumbers from were polite, professional, and left everything cleaner than they found it.They exceeded my expectations! I had a plumbing emergency, It’s great to work with a company that values customer service as much as quality workmanship."},
            {"type": "Category Badge", "text": "Pipe Repair"},
            {"type": "Author Name", "text": "Karen S"},
            {"type": "Rating Text", "text": "4 Rating"},
            {"type": "Quote Paragraph", "text": "I’ve used Your Company Name for several projects over the years, and they’ve always delivered excellent results. They provide clear, upfront pricing and always explain the work they’re doing. I wouldn’t trust anyone else with my plumbing needs."},
            {"type": "Category Badge", "text": "Drain Cleaning"}
        ]
    },
    {
        "name": "SECTION 11 — BEFORE & AFTER TRANSFORMATION GRID",
        "elements": [
            {"type": "Section Heading", "text": "Real Plumbing Transformations: Before & After Results"},
            {"type": "Section Subtitle", "text": "Drag the slider horizontally to reveal the dramatic before and after results of our master plumbing repairs, pipe restorations, and installations."},
            {"type": "Slider Badge", "text": "Before"},
            {"type": "Slider Badge", "text": "After"},
            {"type": "Gallery Card Title", "text": "Drain Line Clearing"},
            {"type": "Gallery Card Title", "text": "Main Sewer Line Repair"},
            {"type": "Gallery Card Title", "text": "Copper Pipe Restoration"},
            {"type": "Gallery Card Title", "text": "Kitchen Sink Installation"},
            {"type": "Info Card Title", "text": "Need Plumbing Solutions?"},
            {"type": "Info Card Paragraph", "text": "Our certified technicians are on call 24/7 to solve your leaks, sewer clogs, and piping installations with guaranteed quality care."},
            {"type": "Info Card Button", "text": "Contact Us"}
        ]
    },
    {
        "name": "SECTION 12 — PRICING & PACKAGES",
        "elements": [
            {"type": "Section Heading", "text": "Transparent pricing for quality plumbing services you can trust."},
            {"type": "Section Subtitle", "text": "Aliquet enim urna consequat etiam aenean quis ac odio. Vitae amet ipsum fermentum vulputate urna viverra. Ridiculus nunc molestie sollicitudin"},
            {"type": "Package Title", "text": "Drain Cleaning Solutions"},
            {"type": "Price Prefix", "text": "Start from :"},
            {"type": "Price Value", "text": "$ 200.00 USD"},
            {"type": "Button", "text": "Boook now"},
            {"type": "Package Title", "text": "Pipe Repair Services"},
            {"type": "Price Prefix", "text": "Start from :"},
            {"type": "Price Value", "text": "$ 300.00 USD"},
            {"type": "Button", "text": "Boook now"},
            {"type": "Package Title", "text": "Leak Detection Experts"},
            {"type": "Price Prefix", "text": "Start from :"},
            {"type": "Price Value", "text": "$ 200.00 USD"},
            {"type": "Button", "text": "Boook now"}
        ]
    },
    {
        "name": "SECTION 13 — SAME-DAY SERVICE MAP",
        "elements": [
            {"type": "Section Heading", "text": "Same-Day Service Across Ohio"},
            {"type": "Section Subtitle", "text": "Our certified master plumbers and emergency units are deployed across 5 key regional hubs. Watch our live dispatch network cycle below."},
            {"type": "Map Pin City", "text": "📍 Columbus, OH"},
            {"type": "Map Pin Address", "text": "450 E Town St, Columbus, OH 43215"},
            {"type": "Map Pin Dispatch Tag", "text": "⚡ Active Dispatch • 30-Min Arrival"},
            {"type": "Map Pin City", "text": "📍 Cleveland, OH"},
            {"type": "Map Pin Address", "text": "1220 Huron Rd E, Cleveland, OH 44115"},
            {"type": "Map Pin Dispatch Tag", "text": "⚡ Active Dispatch • 30-Min Arrival"},
            {"type": "Map Pin City", "text": "📍 Cincinnati, OH"},
            {"type": "Map Pin Address", "text": "700 Walnut St, Cincinnati, OH 45202"},
            {"type": "Map Pin Dispatch Tag", "text": "⚡ Active Dispatch • 30-Min Arrival"},
            {"type": "Map Pin City", "text": "📍 Akron, OH"},
            {"type": "Map Pin Address", "text": "175 S Main St, Akron, OH 44308"},
            {"type": "Map Pin Dispatch Tag", "text": "⚡ Active Dispatch • 30-Min Arrival"},
            {"type": "Map Pin City", "text": "📍 Dayton, OH"},
            {"type": "Map Pin Address", "text": "130 W Second St, Dayton, OH 45402"},
            {"type": "Map Pin Dispatch Tag", "text": "⚡ Active Dispatch • 30-Min Arrival"},
            {"type": "Button", "text": "Book Emergency Same-Day Visit"}
        ]
    },
    {
        "name": "SECTION 14 — FREQUENTLY ASKED QUESTIONS (FAQ)",
        "elements": [
            {"type": "Section Heading", "text": "Frequently Asked Questions"},
            {"type": "Section Subtitle", "text": "Have questions about our plumbing services? Find quick, reliable answers below regarding emergency visits, leak repairs, and pricing."},
            {"type": "Question Title", "text": "What should I do first in a plumbing emergency?"},
            {"type": "Answer Paragraph", "text": "Locate and shut off your main water valve immediately to halt active water flow and prevent structural damage. Once the valve is closed, call our 24/7 emergency dispatch team to send a certified master plumber straight to your property."},
            {"type": "Question Title", "text": "How quickly can your plumbers respond to emergency calls?"},
            {"type": "Answer Paragraph", "text": "For critical emergencies (such as burst water lines, overflowing sewer backups, or major leaks), we guarantee a 30-minute rapid response dispatch across our Ohio service network."},
            {"type": "Question Title", "text": "What are the most common signs of a hidden water leak?"},
            {"type": "Answer Paragraph", "text": "Warning signs include unexplained spikes in monthly utility bills, damp or discolored drywall/ceiling spots, musty odors, low water pressure, or hearing running water when all fixtures are turned off."},
            {"type": "Question Title", "text": "How can I prevent my drain lines from getting clogged?"},
            {"type": "Answer Paragraph", "text": "Never pour cooking oils, grease, or coffee grounds down kitchen drains, install hair strainers in tub and shower drains, and avoid flushing non-flushable wipes. Periodic hydro-jetting or professional maintenance also keeps main lines clear."},
            {"type": "Question Title", "text": "Why is my water heater making a loud knocking or popping noise?"},
            {"type": "Answer Paragraph", "text": "Popping or rumbling noises indicate mineral sediment buildup at the bottom of your heating tank. Annual flushing removes these mineral deposits, restores heating efficiency, and extends the lifespan of your unit."}
        ]
    },
    {
        "name": "SECTION 15 — FOOTER",
        "elements": [
            {"type": "Footer Description", "text": "Sit est nunc proin tellus posuere egestas vitae morbi."},
            {"type": "Footer Contact Label", "text": "Address :"},
            {"type": "Footer Contact Text", "text": "Macomb, Chicago HQ Estica Cop."},
            {"type": "Footer Contact Label", "text": "Contact :"},
            {"type": "Footer Phone Link", "text": "+9 (245) 326-02-22"},
            {"type": "Footer Email Link", "text": "hello@example.com"},
            {"type": "Column Title", "text": "Main page"},
            {"type": "Footer Link", "text": "Home"},
            {"type": "Footer Link", "text": "About"},
            {"type": "Footer Link", "text": "Contact"},
            {"type": "Column Title", "text": "Inner page"},
            {"type": "Footer Link", "text": "Blog"},
            {"type": "Footer Link", "text": "Service"},
            {"type": "Footer Link", "text": "Team"},
            {"type": "Footer Link", "text": "Package"},
            {"type": "Column Title", "text": "Inner page"},
            {"type": "Footer Link", "text": "Blog details"},
            {"type": "Footer Link", "text": "Service details"},
            {"type": "Footer Link", "text": "Team details"},
            {"type": "Footer Link", "text": "Package details"},
            {"type": "Column Title", "text": "Utility page"},
            {"type": "Footer Link", "text": "Style guide"},
            {"type": "Footer Link", "text": "Licenses"},
            {"type": "Footer Link", "text": "404 not found"},
            {"type": "Footer Link", "text": "Password protected"},
            {"type": "Footer Link", "text": "Change log"},
            {"type": "Attribution Text", "text": "Powered by Webflow | Designed by WebOcean"}
        ]
    }
]

output_lines = []
output_lines.append("==================================================")
output_lines.append("MASTER TEMPLATE CONTENT SPECIFICATION")
output_lines.append("==================================================")
output_lines.append("")
output_lines.append("Template: ProPlumbers Webflow Master Template")
output_lines.append("Source File: index.html")
output_lines.append("")
output_lines.append("Purpose:")
output_lines.append("This document defines the exact content structure and text-length requirements of the Master Template.")
output_lines.append("IMPORTANT: When generating new website content, preserve the same section structure and text-length requirements.")
output_lines.append("")
output_lines.append("--------------------------------------------------")
output_lines.append("")

summary_rows = []

for sec in sections_data:
    sec_name = sec["name"]
    output_lines.append(f"## {sec_name}")
    output_lines.append("")
    
    sec_words = 0
    sec_chars_inc = 0
    sec_chars_exc = 0
    sec_elements = len(sec["elements"])
    
    for idx, el in enumerate(sec["elements"], 1):
        text = el["text"]
        words = len(text.split())
        chars_inc = len(text)
        chars_exc = len(text.replace(" ", ""))
        lines_count = text.count("\n") + 1
        
        sec_words += words
        sec_chars_inc += chars_inc
        sec_chars_exc += chars_exc
        
        output_lines.append(f"Element {idx:02d}")
        output_lines.append(f"Type: {el['type']}")
        output_lines.append(f"Current Text: {text}")
        output_lines.append(f"Words: {words}")
        output_lines.append(f"Characters Including Spaces: {chars_inc}")
        output_lines.append(f"Characters Excluding Spaces: {chars_exc}")
        output_lines.append(f"Lines: {lines_count} line" if lines_count == 1 else f"Lines: {lines_count} lines")
        output_lines.append(f"Requirement: Approximately {words} words / {chars_inc} characters including spaces")
        output_lines.append("")
        
    output_lines.append("--------------------------------------------------")
    output_lines.append("")
    
    summary_rows.append({
        "section": sec_name,
        "elements": sec_elements,
        "words": sec_words,
        "chars": sec_chars_inc
    })

output_lines.append("## SUMMARY TABLE")
output_lines.append("")
output_lines.append("| Section | Number of Text Elements | Total Words | Total Characters |")
output_lines.append("| ------- | ----------------------- | ----------- | ---------------- |")
for r in summary_rows:
    output_lines.append(f"| {r['section']} | {r['elements']} | {r['words']} | {r['chars']} |")

with open("master_template_content_specification.md", "w", encoding="utf-8") as f:
    f.write("\n".join(output_lines))

print("Specification document generated successfully!")
