# Color Palette Quick Reference

A quick checklist for changing the color scheme of your pitch deck.

---

## 📋 Color Change Checklist

- [ ] **Step 1:** Choose your brand colors (Primary + Accent)
- [ ] **Step 2:** Convert HEX to RGB (use tool below)
- [ ] **Step 3:** Update `app/globals.css` (CSS variables & gradients)
- [ ] **Step 4:** Update `constants/design-tokens.ts` (gradient borders)
- [ ] **Step 5:** Clear cache and restart dev server
- [ ] **Step 6:** Test all slides for visual consistency

---

## 🎨 ReadyAI/ReadyMove Branding Colors

| Color Name         | HEX       | RGB             | Usage                            |
|--------------------|-----------|-----------------|----------------------------------|
| Pine Green         | `#2d5a3d` | `45, 90, 61`    | Primary brand color              |
| Wild Strawberry    | `#FF4081` | `255, 64, 129`  | Accent color                     |
| Pine Dark          | `#24492f` | `36, 73, 47`    | Dark green complement            |
| Strawberry Dark    | `#CC3367` | `204, 51, 103`  | Dark pink accent                 |
| Mint               | `#B2DFDB` | `178, 223, 219` | Light teal accent (optional)     |

---

## 🔧 HEX to RGB Converter

**Manual Conversion:**
- HEX: `#RRGGBB`
- RGB: `R, G, B`

**Example:** `#7c3aed` → `124, 58, 237`
- `7c` (hex) = `124` (decimal)
- `3a` (hex) = `58` (decimal)
- `ed` (hex) = `237` (decimal)

**Online Tool:** [HEX to RGB Converter](https://www.rapidtables.com/convert/color/hex-to-rgb.html)

---

## 📝 File Locations & Line Numbers

### 1️⃣ `app/globals.css`

**Lines 9-14** - CSS Variables:
```css
--color-primary: #06c0d7;      /* CHANGE ME */
--color-accent: #f77024;       /* CHANGE ME */
--color-blue-chill: #117297;   /* CHANGE ME */
--color-bunting: #1b2356;      /* CHANGE ME */
--color-ironstone: #894a3d;    /* CHANGE ME */
```

**Lines 24-28** - Shadow Glows (Optional):
```css
--shadow-glow-primary: 0 0 24px rgb(6 192 215 / 0.15), ...
--shadow-glow-accent: 0 0 24px rgb(247 112 36 / 0.15), ...
```
*Replace RGB values to match your colors*

**Lines 61-79** - Gradient Utilities:
```css
.gradient-animated {
  background: linear-gradient(-45deg, #06c0d7, #117297, #1b2356, #f77024);
}

.gradient-primary {
  background: linear-gradient(135deg, #06c0d7 0%, #117297 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #f77024 0%, #894a3d 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #06c0d7, #f77024);
}
```
*Replace all HEX values*

---

### 2️⃣ `constants/design-tokens.ts`

**Lines 6-20** - Gradient Borders:
```typescript
export const GRADIENTS = {
  cyan: {
    border: 'linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(6,192,215,0.4), rgba(6,192,215,0.2))',
    text: 'linear-gradient(135deg, rgb(6,192,215), rgb(37,99,235))',
  },
  orange: {
    border: 'linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(247,112,36,0.4), rgba(247,112,36,0.2))',
    text: 'linear-gradient(135deg, rgb(247,112,36), rgb(234,88,12))',
  },
};
```
*Replace RGB values (keep the opacity values as-is)*

---

## 🎯 ReadyAI Color Implementation

### ReadyMove Branding Colors
- **Primary:** Pine Green `#2d5a3d` → RGB `45, 90, 61`
- **Accent:** Wild Strawberry `#FF4081` → RGB `255, 64, 129`
- **Dark Primary:** Pine Dark `#24492f` → RGB `36, 73, 47`
- **Dark Accent:** Strawberry Dark `#CC3367` → RGB `204, 51, 103`
- **Optional:** Mint `#B2DFDB` → RGB `178, 223, 219`

### Changes to Make

#### `app/globals.css` - CSS Variables:
```css
--color-primary: #2d5a3d;      /* Pine Green */
--color-accent: #FF4081;       /* Wild Strawberry */
--color-blue-chill: #24492f;   /* Pine Dark */
--color-bunting: #1a3522;      /* Pine Darker */
--color-ironstone: #CC3367;    /* Strawberry Dark */
```

#### `app/globals.css` - Shadows:
```css
--shadow-glow-primary: 0 0 24px rgb(45 90 61 / 0.15), 0 4px 12px -2px rgb(0 0 0 / 0.05);
--shadow-glow-accent: 0 0 24px rgb(255 64 129 / 0.15), 0 4px 12px -2px rgb(0 0 0 / 0.05);
```

#### `app/globals.css` - Gradients:
```css
.gradient-animated {
  background: linear-gradient(-45deg, #2d5a3d, #24492f, #1a3522, #FF4081);
}

.gradient-primary {
  background: linear-gradient(135deg, #2d5a3d 0%, #24492f 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #FF4081 0%, #CC3367 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #2d5a3d, #FF4081);
}
```

#### `constants/design-tokens.ts`:
```typescript
export const GRADIENTS = {
  cyan: {  // Keep name or rename to 'pine'
    border: 'linear-gradient(135deg, rgba(45,90,61,0.3), rgba(45,90,61,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(45,90,61,0.4), rgba(45,90,61,0.2))',
    text: 'linear-gradient(135deg, rgb(45,90,61), rgb(36,73,47))',
  },
  orange: {  // Keep name or rename to 'strawberry'
    border: 'linear-gradient(135deg, rgba(255,64,129,0.3), rgba(255,64,129,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(255,64,129,0.4), rgba(255,64,129,0.2))',
    text: 'linear-gradient(135deg, rgb(255,64,129), rgb(204,51,103))',
  },
};
```

---

## 🔍 Testing Checklist

After making color changes:

- [ ] Restart dev server: `npm run dev`
- [ ] Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- [ ] Check Hero slide gradient text
- [ ] Check StatCard borders (both variants)
- [ ] Check Button hover states
- [ ] Check ValuePropCard icons
- [ ] Check gradient backgrounds (if any)
- [ ] Test on mobile view
- [ ] Check color contrast (accessibility)

---

## 🎨 Color Palette Design Tips

### Choosing Colors
1. **Brand Alignment:** Use your official brand colors
2. **Contrast:** Ensure text is readable on all backgrounds
3. **Complementary:** Choose colors that work well together
4. **Accessibility:** Test with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Two-Color System
- **Primary:** Main brand color (used ~60% of the time)
- **Accent:** Complementary color (used ~30% of the time)
- **Neutrals:** Grays for text/backgrounds (used ~10%)

### Recommended Pairings
- **Tech/Modern:** Blue + Orange, Purple + Green, Teal + Coral
- **Professional:** Navy + Gold, Charcoal + Cyan, Forest + Amber
- **Creative:** Magenta + Yellow, Indigo + Pink, Crimson + Turquoise

---

## 🚨 Common Issues

### "Colors aren't changing!"
✅ **Solution:** Clear browser cache and restart dev server

### "Gradients look wrong"
✅ **Solution:** Check that RGB values match between files

### "Some components still show old colors"
✅ **Solution:** Search globally for old HEX codes: `Cmd+Shift+F` (Mac) or `Ctrl+Shift+F` (Windows)

### "Text is hard to read"
✅ **Solution:** Adjust color contrast or use different text colors for light/dark backgrounds

---

## 🔗 Quick Links

- [Full Template Guide](./TEMPLATE_GUIDE.md)
- [Tailwind Color Reference](https://tailwindcss.com/docs/customizing-colors)
- [Color Hunt - Palette Inspiration](https://colorhunt.co/)
- [Coolors - Palette Generator](https://coolors.co/)

---

## 💡 Pro Tips

1. **Keep it simple:** Stick to 2-3 main colors
2. **Test early:** Change colors first, before customizing content
3. **Document your palette:** Save your HEX/RGB values somewhere safe
4. **Use variables:** Never hardcode colors in components - always use the design tokens
5. **Consistency matters:** Use the same colors throughout the entire deck

---

**Need help?** Check the [TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md) for comprehensive documentation.
