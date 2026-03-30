# Rekvin Design System

This document outlines the core design principles, tokens, and component patterns used in the Rekvin Synthetic Persona Engine.

## 1. Theme Strategy: Dual Aesthetic
Rekvin supports a dual-theme system that maintains its premium identity across both low-light and high-light environments.

### Variant A: "Ink & White" (Dark Mode - Default)
The core aesthetic utilized today. Inspired by night-time research and high-contrast terminal environments.
- **Core Surface**: `#0C0B10` (Ink) - Deep black with a slight purple undertone.
- **Primary Text**: `#FFFFFF` (White) - Pure clinical white for maximum contrast.
- **Rules/Dividers**: Translucent white (`rgba(255,255,255,0.06)`).
- **Vibe**: Immersive, surgical, nocturnal.

### Variant B: "Paper & Ink" (Light Mode - Concept)
The conceptual counterpart. Inspired by physical research notebooks and clinical documentation.
- **Core Surface**: `#FFFFFF` (White) - Pure white background.
- **Secondary Surface**: `#F8F8F8` (Off-White) - Used for cards and inset panels.
- **Primary Text**: `#0C0B10` (Ink) - Deep black for maximum legibility.
- **Rules/Dividers**: Translucent black (`rgba(12,11,16,0.08)`).
- **Vibe**: Clinical, tactical, high-contrast.

---

## 2. Shared Visual Effects
- **Background Texture**: Both modes utilize a procedural noise overlay (`opacity: 0.035`) to simulate organic paper/grain.
- **Backdrop Blur**: `backdrop-blur-xl` is constant across themes, effectively "tinting" the underlying glass based on the mode.
- **Corner Radius**: Standard `0.625rem` (10px) on both themes to maintain softness.

---

## 3. Color Palette

### Base Surfaces (Semantic Mapping)
| Token | Dark Mode (Ink & White) | Light Mode (Paper & Ink) | Usage |
| :--- | :--- | :--- | :--- |
| **Primary BG** | `#0C0B10` (Ink) | `#FFFFFF` (White) | Main app background |
| **Secondary BG**| `#1A1825` (Ink-2) | `#F8F8F8` (Off-White) | Sidebar, Cards, Panels |
| **Tertiary BG** | `#242233` (Ink-3) | `#F0F0F0` (Off-White-2) | Inset fields, Hovers |
| **Primary Text** | `#FFFFFF` (White) | `#0C0B10` (Ink) | Main content text |
| **Muted Text** | `rgba(255...0.55)` | `rgba(12...0.85)` | Muted/metadata text |
| **Rule Line** | `rgba(255...0.06)` | `rgba(12...0.12)` | Dividers and borders |

### Node Taxonomy (Darker Shades for Light Mode)
| Type | Dark Mode Hex | Light Mode Hex | Description |
| :--- | :--- | :--- | :--- |
| **Idea** | `#E8C547` | `#9A7D0A` | Core concepts and product seeds |
| **Persona** | `#7ED4A0` | `#3D7051` | Synthesized user archetypes |
| **Research** | `#F4845F` | `#B04D2D` | Web research and market data |
| **Input** | `#6BAED6` | `#2C5E7A` | Raw user quotes and direct feedback |
| **Journey** | `#5BC0EB` | `#246F88` | User flow steps and processes |
| **Tension** | `#E05C5C` | `#993B3B` | Pain points and frustrations |
| **Scene** | `#C77DDB` | `#7A408E` | Contextual environment |
| **Assumption**| `#F0A500` | `#996A00` | Unvalidated beliefs |
| **Question** | `#A0A8C0` | `#565E75` | Open research questions |

---

## 3. Typography: The "Editorial" System
Rekvin uses a three-tier typography system to distinguish between storytelling, utility, and technical metadata.

- **Tier 1: Storytelling (Serif)**
  - **Font**: "Cormorant Garamond"
  - **Usage**: Hero statements, value headings, and emphasized pull-quotes.
  - **Styling**: `italic`, `tracking-tighter`, `leading-[0.9]` for large displays.
  
- **Tier 2: Utility (Sans)**
  - **Font**: "Inter Tight"
  - **Usage**: Body copy, descriptions, and primary navigation.
  - **Styling**: `font-light` or `font-normal`, `leading-relaxed`.

- **Tier 3: Technical (Mono)**
  - **Font**: "Geist Variable"
  - **Usage**: Metadata, buttons, versioning, and status indicators.
  - **Styling**: `uppercase`, `tracking-[0.2em]` to `tracking-[0.4em]`, `text-[9px]` to `text-[11px]`.

---

## 4. Layout & Spacing
Rekvin follows a "Breathable & Grounded" spacing system to prevent visual clutter in research-heavy contexts.

### The "Ink" Grid
- **Hero Spacing**: `mb-24` (96px) between the primary value statement and the feature grid.
- **Section Dividers**: Persistent `border-t border-rule` with large top-margins (`mt-32`) to separate the application experience from environmental metadata (footers).
- **Pillar Layout**: Responsive 3-column grid (`grid-cols-1 md:grid-cols-3`) with consistent `gap-8` (32px).

### Brand Centering
- **Logo Alignment**: Centralized vertically/horizontally in entry states (Login), transitioning to the top-left in functional states (Dashboard).
- **Sub-Brand Line**: A `h-px w-8 bg-node-idea` line is often used to ground the logo and separate it from the content hero.

---

## 5. Visual Components & Textures

### Procedural Noise Texture
To simulate the feel of a physical legal pad or film grain, Rekvin layers a SVG-driven noise texture at `opacity: 0.2` over the background.
```svg
<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
```

### Ambient Atmospheric Blobs
Large, highly-blurred (`blur-[120px]`) circles using node colors are placed behind content to create a sense of cognitive space.
- **Opacity**: `0.3` (select-none)
- **Animation**: Subtle `easeInOut` loops over 15-20s durations.

### Interactive "Glass"
- **Cards**: `bg-white/5 border border-rule` with a transition to `bg-white/10` and `border-white/20` on hover.
- **Selection**: Highlights use a low-alpha accent color (`selection:bg-node-idea/30`) to maintain readability.
