# Interactive Daily Checklist App – Project Specification

## Objective
Create a minimalist, modern, smart daily checklist app that:
- Suggests one context‑aware bite‑sized creative or skill‑building activity per day.
- Helps maintain well‑being, progress, and daily structure.
- Integrates with Obsidian for cataloging completed projects.
- Works phone‑first, with optional desktop use.

## Core Features
### 1. **Daily Checklist Engine**
- Interactive checklist with tasks across:
  - Creative hobbies (watercolor, sewing, photography, singing, etc.)
  - Coding bite‑sized tasks
  - Career/learning tasks (Rhino, Onshape, automation, etc.)
  - Daily chores (pre‑scheduled the night prior)
- Each task is fully tappable, with:
  - **Simple check-off** for standard tasks.
  - **Upload button** to catalog creative work (image, audio, file).

### 2. **Smart Activity Generator**
- Generates one daily “micro‑project” based on:
  - Skill level
  - Available materials/tools
  - Owned courses/resources (Domestika, Craftsy, YouTube)
  - Weather (e.g., suggests outdoor sketch if not raining)
  - Time available (optionally)
- Learns from rejected suggestions (e.g., “Skip up to 3 times/week”)
- Stores user feedback to improve future suggestions.

### 3. **Obsidian Integration**
- Completed items can be logged via button:
  - Photos → markdown embed
  - Audio/music → file link
  - Text notes → templated entry
- Each entry saved with:
  - Date
  - Task type
  - Tools used
  - Materials
  - Attached files
- Uses a predefined Obsidian folder structure.

### 4. **Morning Summary Notification**
- If not opened by 9:00 a.m., send a single notification:
  - Today’s micro‑project
  - Today’s chores
  - Any appointments (from calendar)

### 5. **Initialization Stage**
Collect the following from user (one‑off setup):
- Tools and equipment owned  
  (e.g., sewing machine, overlocker, paints, brushes, iPad, etc.)
- Skill levels per hobby  
  (e.g., watercolor: beginner; sewing: intermediate)
- List of courses owned  
  - Domestika links  
  - Craftsy links  
  - YouTube playlists (optional)
- Login/API keys (optional):
  - Calendar access (read‑only)
  - Weather API
  - Domestika/Craftsy account (if needed)
- Preferred design theme:
  - Minimal, modern, strong typography, negative space.

## Technical Requirements
- Must be phone‑first UI, desktop compatible.
- Should work with Obsidian syncing.
- Should allow file uploads from phone camera/mic.
- Needs module for:
  - Weather lookup
  - Calendar lookup
  - Local store of resources/tools
  - Adaptive suggestion engine

## Deliverables for Developer
1. UI wireframes (minimalist graphic design)
2. Base app structure with:
   - Checklist screen
   - Daily project generator
   - Obsidian export module
   - Initialization wizard
3. Integration hooks:
   - Weather API
   - Calendar API
   - File upload → Obsidian
4. Feedback learning system:
   - Rejections
   - Task difficulty adjustments

## Notes
- Avoid overwhelming the user—bite‑sized only.
- Focus on beauty, spacing, typography.
- Provide structure, not pressure.
