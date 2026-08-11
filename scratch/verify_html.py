import re
from bs4 import BeautifulSoup

with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

print("HTML parsed successfully!")
print("Top-level elements in body:")
for child in soup.body.children:
    if child.name:
        classes = child.get("class", [])
        id_attr = child.get("id", "")
        print(f"Tag: {child.name}, ID: {id_attr}, Classes: {classes}")
