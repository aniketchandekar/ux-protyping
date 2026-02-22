# Rekvin Design System

## Overview
Rekvin follows a **"Dark Technical"** aesthetic, inspired by professional developer tools and scientific instruments. The design prioritizes content density, focus, and clarity using a dark mode-first approach with high-contrast accents for semantic meaning.

---

## 1. Color Palette

### Core Backgrounds
The application uses a deep, cool-toned black palette to reduce eye strain and make colored nodes pop.

| Token | Value | Usage |
|-------|-------|-------|
| `app-bg` | `#0e0e11` | Main canvas background |
| `app-sidebar` | `#0a0a0f` | Sidebar background |
| `app-card` | `#18181b` | Node cards, Modals, Panels |
| `app-input` | `#121217` | Input fields |

### Semantic Accents
Colors are used strictly for meaning, not decoration.

- **Purple** (`text-purple-400`): AI-related actions, "Initial Idea", SCAMPER.
- **Blue** (`text-blue-400`): Mind Maps, Market Viability, DOC files.
- **Green** (`text-green-400`): Opportunity Solution Trees, Technical Feasibility, Success states.
- **Pink** (`text-pink-400`): Analogies, User Desirability.
- **Yellow** (`text-yellow-400`): Sticky Notes, How Might We, Warnings.
- **Red** (`text-red-400`): Problem Statements, Critical Assumptions, Errors, PDF files.
- **Gray** (`text-gray-400/500`): Secondary text, empty states.

### Borders & Separators
Subtle white opacity is used for structure.

- **Subtle**: `border-white/5` (Dividers)
- **Default**: `border-white/10` (Panels, Inputs)
- **Active/Hover**: `border-white/20` (Nodes, Hover states)
- **Focus**: `border-white/40` (Selected items)

---

## 2. Typography

**Font Family**: `Inter Tight` (Sans-serif)
Selected for its modern, technical feel and high legibility at small sizes.

### Hierarchy

| Role | Style | Tailwind Classes |
|------|-------|------------------|
| **Display** | Large, Bold, Tight | `text-5xl font-bold tracking-tight` |
| **Headings** | Medium, White | `text-2xl font-bold text-white` |
| **Labels** | Small, Uppercase, Wide | `text-xs font-bold tracking-wider uppercase opacity-90` |
| **Body** | Light, Relaxed | `text-lg font-light leading-relaxed` (Input) / `text-sm text-gray-300` (Nodes) |
| **Mono** | Code, Data | `font-mono text-xs` |

---

## 3. Component Recipes

### Idea Nodes
The core building block of the canvas.

- **Container**: `min-w-[320px] max-w-[420px] rounded-2xl p-6 border`
- **Default State**: `bg-[#18181b] border-white/20 shadow-2xl shadow-black/50`
- **Hover State**: `hover:border-white/60 hover:shadow-white/5`
- **Ghost Node (AI)**: Same as default but with **Sparkles** icon and tooltip.
- **Sticky Note**: `bg-yellow-500/10 border-yellow-500/30`
- **Suggested**: `bg-[#18181b]/40 backdrop-blur-sm border-white/40 border-dashed animate-pulse-slow`

### Input Bar
Designed for focus and "flow" state entry.

- **Container**: `bg-[#18181b] border rounded-2xl p-2 shadow-2xl shadow-black/50`
- **Text Area**: `bg-transparent text-white text-lg font-light h-20`
- **Actions**: Floating bottom bar with `rounded-xl` buttons.

### Modals & Overlays
Used for Onboarding and Phase Completion.

- **Backdrop**: `bg-black/80 backdrop-blur-md`
- **Card**: `bg-[#18181b] border border-white/10 rounded-2xl shadow-2xl`
- **Animation**: `animate-fade-in-up-fast`

### Sidebars & Panels
Floating utility panels.

- **Container**: `bg-[#18181b] border border-white/10 rounded-xl shadow-2xl backdrop-blur-sm`
- **Progress Bar**: `h-1.5 bg-white/5 rounded-full` with colored inner bar.

---

## 4. Effects & Animation

### Shadows
Deep, diffuse shadows are used to create depth in the dark environment.
- **Elevation**: `shadow-2xl shadow-black/50` (Nodes)
- **Floating**: `shadow-2xl shadow-black/80` (Modals)

### Animations
Custom keyframes defined in `tailwind.config`.

- **`animate-fade-in`**: Smooth entry for new elements.
- **`animate-fade-in-up`**: Upward drift for landing page elements.
- **`animate-pulse-slow`**: 3s pulse for "Suggested" nodes (breathing effect).
- **`animate-spin`**: Loading states (Lucide `Loader2`).

### Glassmorphism
Used sparingly to indicate layering.
- `backdrop-blur-sm`: Sticky headers, floating panels.
- `backdrop-blur-md`: Modal overlays.
