import os
import sys
from google import genai
from google.genai import types

api_key = os.environ.get("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY environment variable not set")

client = genai.Client(api_key=api_key)

prompt = """Generate a high-fidelity UI mockup for a Homepage with GLASSMORPHISM design.

**Screen Purpose:** Landscaping company homepage showcasing services and portfolio for "GL Landscaping"

**Style:** Dark background with #2E7D32 (Forest Green) accents - professional and slick glassmorphism
**Format:** Desktop screenshot, 1440px width, high resolution

**Colors:**
- Primary accent: #2E7D32 (Forest Green)
- Primary hover: #1B5E20
- Background: Dark (#0a0a0a to #1a1a2e gradient)
- Card backgrounds: Semi-transparent with frosted glass blur effect
- Card borders: Subtle green tint glow

**Layout - VARIANT 1 (Standard Homepage Layout):**
- TOP: Horizontal navigation bar with "GL Landscaping" logo (left), nav links (Services, Portfolio, Testimonials, Contact) centered, and a CTA button (right)
- HERO SECTION: Full-width hero with large headline "Transform Your Outdoor Space", subtext about professional landscaping, CTA button "Get Free Quote", and a subtle nature/landscape background image overlay
- SERVICES SECTION: 4-card grid (2x2) showing: Lawn Care, Garden Design, Hardscaping, Tree Services - each with an icon, title, and brief description
- PORTFOLIO SECTION: 3-column gallery grid showing landscape project thumbnails with hover overlay effects
- TESTIMONIALS SECTION: 3 testimonial cards in a row with client name, quote, and star rating
- CONTACT SECTION: Split layout - left side has contact info (phone, email, address), right side has a contact form (name, email, message, submit button)
- FOOTER: Dark footer with company info, quick links, social icons

**Content Elements:**
- App/Brand name: "GL Landscaping" with #2E7D32 accent on "GL"
- Personalized greeting in hero: "Welcome, Cole"
- Services: Lawn Care, Garden Design, Hardscaping, Tree Services
- Navigation: Services, Portfolio, Testimonials, Contact
- CTA buttons with forest green background

**Glassmorphism effects:**
- All cards: frosted glass effect with blur
- Decorative background blobs/shapes in green and dark blue for blur visibility
- Border-radius: 24px on all cards
- Semi-transparent overlays
- Navigation bar with glass effect

**Overall feel:** Premium, professional and slick, clean, minimal, NOT cluttered"""

response = client.models.generate_content(
    model="gemini-3.1-flash-image-preview",
    contents=[prompt],
    config=types.GenerateContentConfig(
        response_modalities=['TEXT', 'IMAGE'],
    ),
)

for part in response.candidates[0].content.parts:
    if part.inline_data is not None:
        with open("/home/ubuntu/gl-landscaping/mockups/variant-1-mockup.jpg", "wb") as f:
            f.write(part.inline_data.data)
        print("Variant 1 mockup saved successfully")
        sys.exit(0)

print("ERROR: No image generated")
sys.exit(1)
