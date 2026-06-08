from PIL import Image, ImageDraw, ImageFont

SOURCE = r"c:\Users\rocky\Desktop\ME\2604-official\scripts\app-original.jpg"
OUTPUT = r"c:\Users\rocky\Desktop\ME\2604-official\public\images\app.jpg"

FONT_REGULAR = "C:/Windows/Fonts/segoeui.ttf"
FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
BG = (255, 255, 255)


def cover(draw, box):
    draw.rectangle(box, fill=BG)


def draw_in_box(draw, box, text, font, color):
    x1, y1, x2, y2 = box
    bbox = font.getbbox(text)
    text_h = bbox[3] - bbox[1]
    x = x1 + 2
    y = y1 + (y2 - y1 - text_h) // 2 - bbox[1]
    draw.text((x, y), text, font=font, fill=color)


def find_text_box(img, x1, y1, x2, y2, threshold=400):
    minx, miny, maxx, maxy = x2, y2, x1, y1
    found = False
    for y in range(y1, y2):
        for x in range(x1, x2):
            if sum(img.getpixel((x, y))[:3]) < threshold:
                minx = min(minx, x)
                maxx = max(maxx, x)
                miny = min(miny, y)
                maxy = max(maxy, y)
                found = True
    if not found:
        return None
    return (max(0, minx - 3), max(0, miny - 2), maxx + 3, maxy + 2)


def main():
    img = Image.open(SOURCE).convert("RGB")
    draw = ImageDraw.Draw(img)

    font_sidebar = ImageFont.truetype(FONT_BOLD, 17)
    font_title = ImageFont.truetype(FONT_BOLD, 22)
    font_ref = ImageFont.truetype(FONT_REGULAR, 12)

    replacements = [
        ((50, 30, 220, 70), "website", font_sidebar, (37, 37, 37)),
        ((90, 125, 240, 170), "website.is", font_title, (37, 37, 37)),
        ((760, 910, 930, 950), "eu.website.is", font_ref, (24, 24, 24)),
        ((760, 1055, 930, 1095), "cloud.website.is", font_ref, (24, 24, 24)),
    ]

    for search, text, font, color in replacements:
        box = find_text_box(img, *search)
        if box is None:
            raise RuntimeError(f"Text region not found in {search}")
        cover(draw, box)
        draw_in_box(draw, box, text, font, color)
        print(f"Replaced {search} -> {text} at {box}")

    img.save(OUTPUT, quality=95)
    print("Saved:", OUTPUT)


if __name__ == "__main__":
    main()
