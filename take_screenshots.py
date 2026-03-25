"""Take 10 screenshots of the HTML page for eval scoring."""
import sys
from playwright.sync_api import sync_playwright

url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8888/variant-2.html"
prefix = sys.argv[2] if len(sys.argv) > 2 else "html-cycle-1"
output_dir = "/home/ubuntu/gl-landscaping/eval-screenshots"

with sync_playwright() as p:
    browser = p.chromium.launch()
    for i in range(1, 11):
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(url)
        page.wait_for_load_state("networkidle")
        page.wait_for_timeout(1500)
        path = f"{output_dir}/{prefix}-{i}.png"
        page.screenshot(path=path, full_page=True)
        page.close()
        print(f"Saved {path}")
    browser.close()
    print("All 10 screenshots captured")
