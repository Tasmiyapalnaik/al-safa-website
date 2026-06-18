# SPEC.md - Luxury Abaya Fashion Website

## 1. Project Overview
- **Project Name**: Amira Abaya - Luxury Modest Fashion
- **Project Type**: Single-page fashion e-commerce website
- **Core Functionality**: Showcase abaya collection, allow WhatsApp ordering, display brand information
- **Target Users**: Women seeking elegant modest fashion, abaya enthusiasts

## 2. UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo, menu links, WhatsApp CTA
- **Hero**: Full-screen banner with brand name and CTA buttons
- **Sections**: New Collection → Categories → About → Instagram → Reviews → Contact
- **Footer**: Clean footer with social links and copyright

### Responsive Breakpoints
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns)

### Visual Design

#### Color Palette
- **Primary**: #1A1A1A (Rich Black)
- **Secondary**: #F5F5F0 (Warm Beige)
- **Accent**: #C9A962 (Soft Gold)
- **White**: #FFFFFF
- **Text Primary**: #1A1A1A
- **Text Secondary**: #6B6B6B

#### Typography
- **Headings**: "Cormorant Garamond", serif (elegant, luxurious)
- **Body**: "Jost", sans-serif (modern, clean)
- **Sizes**:
  - H1: 4rem (hero)
  - H2: 2.5rem (section titles)
  - H3: 1.5rem (card titles)
  - Body: 1rem

#### Spacing System
- Section padding: 6rem vertical
- Card padding: 1.5rem
- Grid gap: 2rem

#### Visual Effects
- Subtle box shadows on cards: 0 4px 20px rgba(0,0,0,0.08)
- Hover lift effect: translateY(-8px)
- Smooth transitions: 0.4s ease
- Gold accent borders on hover

### Components

#### Navigation
- Logo (left)
- Menu links (center): Collection, Categories, About, Contact
- WhatsApp button (right)
- Mobile: hamburger menu

#### Hero Section
- Full viewport height background image
- Centered brand name in elegant script
- Tagline below
- Two buttons: "Shop Collection" (filled), "Order on WhatsApp" (outline)

#### Product Cards
- Image with aspect ratio 3:4
- Product name below
- Price in gold accent
- "Order on WhatsApp" button
- Hover: subtle lift, shadow increase

#### Category Cards
- Square images
- Category name overlay
- Hover: slight zoom

#### Testimonial Cards
- Quote icon
- Review text
- Customer name
- Star rating

#### Floating WhatsApp Button
- Fixed position bottom-right
- Green color (#25D366)
- Pulse animation

## 3. Functionality Specification

### Core Features
- Smooth scroll navigation
- WhatsApp order links (pre-filled message)
- Instagram link (https://instagram.com/yourusername)
- Mobile responsive menu
- Hover animations on all interactive elements

### User Interactions
- Click navigation to smooth scroll to section
- Click WhatsApp buttons to open WhatsApp with pre-filled message
- Click Instagram to open Instagram profile

### Data (Static)
- 6 products in collection
- 5 categories
- 4 testimonials

## 4. Acceptance Criteria
- [ ] Hero section displays with background image and centered content
- [ ] Brand name "Amira Abaya" visible
- [ ] Tagline "Elegant Modest Fashion for Every Occasion" visible
- [ ] Two CTA buttons in hero
- [ ] 6 product cards in collection section
- [ ] 5 category cards with proper labels
- [ ] About section with brand description
- [ ] Instagram section with gallery and follow button
- [ ] 4 testimonial cards with reviews
- [ ] Contact section with WhatsApp, Instagram, email
- [ ] Floating WhatsApp button visible
- [ ] All hover effects working
- [ ] Mobile responsive layout
- [ ] Smooth scrolling enabled
