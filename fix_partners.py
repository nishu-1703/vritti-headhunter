import re

# Read the file
with open('src/pages/Services.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the entire partners array
old_pattern = r'\{\[[\s\S]*?\].map\(\(partner, idx\) => \('

# New partners array with all URLs
new_partners = '''{[
                  { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flipkart_logo.svg" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                  { name: "Mahindra", logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Mahindra_%26_Mahindra_logo.svg" },
                  { name: "Whitehat Jr", logo: "https://images.g2crowd.com/upload_file/logo/293970/whitehat_junior.png" },
                  { name: "LevarageEdu", logo: "https://leverageedu.com/assets/img/le-logo.png" },
                  { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flipkart_logo.svg" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                  { name: "Mahindra", logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Mahindra_%26_Mahindra_logo.svg" },
                  { name: "Whitehat Jr", logo: "https://images.g2crowd.com/upload_file/logo/293970/whitehat_junior.png" },
                  { name: "LevarageEdu", logo: "https://leverageedu.com/assets/img/le-logo.png" }
                ].map((partner, idx) => ('''

content = re.sub(old_pattern, new_partners, content)

# Write back
with open('src/pages/Services.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed partners array!")
