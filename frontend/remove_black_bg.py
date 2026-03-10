"""Remove black background from mark.png and make it transparent."""
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    import sys
    print("Pillow required: python -m pip install Pillow")
    sys.exit(1)

path = Path(__file__).resolve().parent / "mark.png"
img = Image.open(path).convert("RGBA")
data = img.getdata()

# Make pixels that are black or near-black transparent (threshold on R,G,B)
threshold = 40
new_data = []
for item in data:
    r, g, b, a = item
    if r <= threshold and g <= threshold and b <= threshold:
        new_data.append((r, g, b, 0))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save(path, "PNG")
print("Saved transparent mark.png")
