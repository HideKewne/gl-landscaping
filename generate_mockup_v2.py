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

**Layout - VARIANT 2 (Alternative Modern Layout):**
- TOP: Transparent floating navigation bar with "GL Landscaping" logo, nav links, and CTA - positioned with padding from edges (not full-width)
- HERO SECTION: Split-screen design - LEFT side has large text "Crafting Beautiful Landscapes Since 2010" with CTA buttons stacked vertically, RIGHT side has a large circular/organic-shaped image frame with a landscape photo
- SERVICES SECTION: Horizontal scrolling cards OR asymmetric bento grid layout - 4 services (Lawn Care, Garden Design, Hardscaping, Tree Services) with varying card sizes, the most important service gets a larger card
- PORTFOLIO SECTION: Masonry/Pinterest-style gallery with varying heights, overlapping cards with parallax-like depth
- TESTIMONIALS SECTION: Single large testimonial card centered with navigation arrows to cycle through, large quote marks decorative element
- CONTACT SECTION: Full-width glassmorphic card with the form centered, contact info as floating glass badges around the form
- FOOTER: Minimal footer with just essentials

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
- Extra: floating glass elements as decorative accents

**Overall feel:** Premium, professional and slick, clean, modern, NOT cluttered. More creative and dynamic than a standard layout."""

response = client.models.generate_content(
    model="gemini-3.1-flash-image-preview",
    contents=[prompt],
    config=types.GenerateContentConfig(
        response_modalities=['TEXT', 'IMAGE'],
    ),
)

for part in response.candidates[0].content.parts:
    if part.inline_data is not None:
        with open("/home/ubuntu/gl-landscaping/mockups/variant-2-mockup.jpg", "wb") as f:
            f.write(part.inline_data.data)
        print("Variant 2 mockup saved successfully")
        sys.exit(0)

print("ERROR: No image generated")
sys.exit(1)
