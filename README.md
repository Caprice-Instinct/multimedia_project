# African Traditional Foods - Multimedia Website

A comprehensive, responsive website showcasing African traditional foods through multimedia storytelling, featuring separate pages for Pilau, Fufu, and Injera with rich cultural context and historical significance.

## Project Structure

```
Food_Project/
├── index.html          # Homepage with African food history
├── pilau.html          # Dedicated Pilau page
├── fufu.html           # Dedicated Fufu page
├── injera.html         # Dedicated Injera page
├── styles.css          # Comprehensive responsive CSS
├── script.js           # Interactive JavaScript
├── videos/             # Video content folder
├── audio/              # Audio content folder
├── images/             # Image content folder
└── README.md           # This documentation
```

## Media Files Needed

### Videos (add to `videos/` folder):
- `intro-video.mp4` - Hero section background video
- `pilau-cooking.mp4` - Step-by-step pilau cooking process
- `fufu_cooking.mp4` - Traditional fufu preparation process
- `final-presentation.mp4` - Traditional Swahili serving presentation

### Audio (add to `audio/` folder):
- `pilau-narration.mp3` - Voice-over for pilau cooking process
- `fufu_recipe.mp3` - Traditional fufu recipe narration
- `injera_Recipe.mp3` - Modern injera recipe narration
- `closing-music.mp3` - Background closing music

### Images (add to `images/` folder):
**Homepage Cards:**
- `pilau-card.jpg` - Pilau card image (350x250px)
- `fufu-card.jpg` - Fufu card image (350x250px)
- `injera-card.jpg` - Injera card image (350x250px)

**Individual Page Images:**
- `pilau-hero.jpg` - Pilau hero background
- `fufu-hero.jpg` - Fufu hero background
- `injera-hero.jpg` - Injera hero background
- `fufu-preparation.jpg` - Fufu preparation process
- `fufu-serving.jpg` - Traditional fufu serving
- `fufu-community.jpg` - Community preparing fufu
- `injera-making.jpg` - Traditional injera preparation
- `injera-serving.jpg` - Injera with traditional stews
- `teff-grain.jpg` - Close-up of teff grain

*See `images/placeholder-info.txt` for detailed specifications*

## Features

### 🏠 **Enhanced Homepage**
✅ **Historical Context** - Deep dive into food's role in African communities
✅ **Cultural Timeline** - 3000+ years of culinary evolution
✅ **Interactive Statistics** - Visual representation of African food diversity
✅ **Featured Food Cards** - Clickable cards leading to individual pages

### 📱 **Multi-Page Architecture**
✅ **Dedicated Food Pages** - Separate pages for Pilau, Fufu, and Injera
✅ **Rich Content** - Detailed cultural context, preparation methods, variations
✅ **Cross-Navigation** - Easy movement between different foods
✅ **Consistent Design** - Unified visual language across all pages

### 🎨 **Advanced Design Elements**
✅ **Responsive Design** - Optimized for all devices (mobile-first approach)
✅ **Multimedia Integration** - Video, audio, and image galleries
✅ **Advanced Animations** - Hero background animations, floating elements, and interactive effects
✅ **Interactive Elements** - Flip cards, slideshows, and enhanced navigation
✅ **Enhanced Typography** - Custom headers with decorative elements and animations
✅ **Accessibility** - Keyboard navigation and screen reader friendly
✅ **Error Handling** - Graceful fallbacks for missing media files

### 📚 **Educational Content**
✅ **Cultural Significance** - Deep exploration of food's role in society
✅ **Regional Variations** - Different preparations across countries
✅ **Nutritional Information** - Health benefits and dietary considerations
✅ **Modern Adaptations** - How traditional foods evolve in contemporary settings

## How to Use

1. **Add your media files** to the respective folders (videos/, audio/, images/)
2. **Open index.html** in a web browser to start with the homepage
3. **Navigate through pages** using the menu or food cards
4. **Test on different devices** to ensure responsiveness
5. **Customize content** by editing the HTML text sections in each page

## Customization

### Adding Team Members
Edit the Credits section in `index.html`:
```html
<div class="team-member">
    <h3>Your Name</h3>
    <p>Your role in the project</p>
</div>
```

### Changing Colors
Modify the CSS color scheme in `styles.css`:
- Primary color: `#ff6b35` (orange)
- Secondary color: `#8b4513` (brown)
- Background gradients can be adjusted in each section

### Adding More Foods
To add another traditional food:
1. Create a new HTML file (e.g., `jollof.html`)
2. Copy the structure from any existing food page
3. Add navigation link in all pages
4. Create corresponding images and media
5. Add a food card to the homepage

### Content Sections Available
Each food page includes modular sections:
- Hero section with badges
- Quick facts grid
- Main content with media
- Regional variations
- Preparation process
- Cultural context
- Modern adaptations
- Navigation to other foods

## Technical Notes

- **Mobile-First Design**: Optimized for mobile devices first
- **Progressive Enhancement**: Works without JavaScript
- **Cross-Browser Compatible**: Tested on modern browsers
- **Performance Optimized**: Lazy loading and efficient animations
- **SEO Friendly**: Semantic HTML structure

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Tips for Best Results

### 📹 **Media Optimization**
1. **Video Format**: Use MP4 format for best compatibility
2. **Audio Format**: Use MP3 format for universal support
3. **Image Format**: Use JPG for photos, PNG for graphics with transparency
4. **File Sizes**: Compress media files for faster loading
   - Videos: Keep under 50MB each
   - Images: Optimize to under 500KB each
   - Audio: Use 128kbps MP3 for good quality/size balance

### 🧪 **Testing Strategy**
1. **Cross-Device Testing**: Test on actual mobile devices, tablets, and desktops
2. **Browser Compatibility**: Check on Chrome, Firefox, Safari, and Edge
3. **Network Conditions**: Test on slow internet connections
4. **Accessibility**: Use screen readers and keyboard-only navigation
5. **Content Validation**: Ensure all cultural information is accurate and respectful

### 📊 **Performance Optimization**
1. **Image Lazy Loading**: Built-in lazy loading for better performance
2. **Progressive Enhancement**: Site works without JavaScript
3. **Mobile-First**: Optimized for mobile devices first
4. **Efficient CSS**: Minimal, optimized stylesheets
5. **Graceful Degradation**: Fallbacks for missing media files

## Troubleshooting

**Videos not playing?**
- Check file paths match exactly
- Ensure MP4 format
- Some browsers block autoplay - click play button

**Audio not working?**
- Verify MP3 format
- Check browser audio permissions
- Test with different audio files

**Images not showing?**
- Confirm file names match HTML references exactly
- Check image file formats (JPG/PNG)
- Verify folder structure (images/ folder exists)
- Check file permissions
- Ensure images are properly optimized for web

**Navigation not working?**
- Verify all HTML files are in the same directory
- Check that file names match navigation links
- Ensure JavaScript is enabled in browser

**Styling issues?**
- Clear browser cache and refresh
- Check that styles.css is in the same directory
- Verify CSS file is not corrupted
- Test in different browsers

## Website Highlights

### 🏛️ **Homepage Features**
- **Historical Timeline**: 3000+ years of African culinary evolution
- **Cultural Significance**: 6 key areas where food impacts African communities
- **Interactive Statistics**: Visual representation of Africa's food diversity
- **Featured Food Cards**: Beautiful, clickable cards for each dish

### 🍚 **Pilau Page Highlights**
- **Animated Hero Background**: Floating spices and gradient orbs animation
- **Spice Route History**: Connection to Indian Ocean trade
- **Interactive Flip Cards**: Regional variations with hover-to-flip functionality
- **Detailed Recipe**: Step-by-step traditional preparation with audio narration
- **Cultural Significance**: Full-width "Beyond the Kitchen" section

### 🥣 **Fufu Page Highlights**
- **Enhanced Header**: "More Than Food: A Cultural Institution" with animated graphics
- **Multimedia Integration**: Video cooking demonstration and image slideshow
- **Interactive Flip Cards**: Regional variations across Ghana, Nigeria, and Ivory Coast
- **Spiritual Dimensions**: Full-width section on cultural and spiritual significance
- **Enhanced Nutrition Cards**: 2x2 grid layout with gradient borders and animations
- **Cultural Etiquette**: Proper eating customs and social significance

### 🫓 **Injera Page Highlights**
- **Animated Hero Background**: Floating teff grains, fermentation bubbles, and ancient patterns
- **Teff Showcase**: Animated grain visualization with premium benefit cards
- **Sacred Ritual**: 3000-year journey roadmap with visual timeline
- **Cultural Mosaic**: Interactive significance cards with glow effects
- **Regional Flip Cards**: Variations across Horn of Africa with detailed specifications
- **Global Impact**: Modern recognition and contemporary applications

## Project Team

**Development Team:**
- Gitiche Emmanuel Chege
- Kimanga Victor
- Wabuga Linet Wangui
- Kariuki Maryfancy
- Tracey Munyagia

**Special Thanks:**
- Dr Victor Mageto - Project Supervisor
- Cultural consultants and community members

## Animation Features

### 🎬 **Hero Section Animations**
- **Pilau**: Floating spices (herbs, cinnamon, cloves) with gradient orbs
- **Fufu**: Enhanced typography with decorative elements
- **Injera**: Floating teff grains, fermentation bubbles, and rotating ancient patterns

### 🎨 **Interactive Elements**
- **Flip Cards**: Hover-to-flip regional variations with detailed information
- **Enhanced Cards**: Gradient borders, floating animations, and hover effects
- **Typography**: Animated headers with decorative elements and sparkle effects

## Future Enhancements

- **Interactive Recipe Calculator**: Ingredient scaling for different serving sizes
- **Audio Pronunciation Guide**: Correct pronunciation of food names
- **Social Media Integration**: Share buttons and embedded content
- **Search Functionality**: Find specific information across all pages
- **Multi-language Support**: Translations in local African languages
- **User Contributions**: Allow visitors to share their own food stories
- **Virtual Cooking Classes**: Integration with video conferencing for live demos