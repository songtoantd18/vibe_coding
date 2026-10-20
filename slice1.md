# Task: Plan Slice 1 — E-commerce Project Foundation (Demo MVP)

## Context
I am building a new e-commerce website for electronic products. I am learning Vibe Coding and want to understand each decision before implementation. We decided to use a local JSON file storage strategy (`backend/data/`) for this MVP demo to enable zero-config instant startup, deferring MySQL/Prisma to a post-MVP upgrade phase.

## Confirmed decisions
- Frontend: Vue 2 (Vue 2.7 with Vite)
- Backend: Node.js with Express.js
- Data Storage for MVP: Local JSON files (`backend/data/`) with file persistence
- Repository structure: Monorepo (`frontend/`, `backend/`)
- Initial environment: Local development
- The repository has not been created yet.
- Do not implement business features (cart, products, checkout) in this slice.

## Goal
Prepare a detailed implementation plan for Slice 1: Project Foundation.

## Requirements
1. Recommend compatible versions of Node.js, Vue 2, and Express.js. Explain compatibility considerations.
2. Propose the monorepo folder structure and explain the responsibility of each folder.
3. Plan frontend and backend initialization.
4. Plan local JSON storage setup and data helper structure.
5. Define environment-variable and Git secret-management practices.
6. Define a basic backend health-check endpoint (`GET /api/health`).
7. Define the installation, startup, and verification commands.
8. Create acceptance criteria and a manual testing checklist.
9. Identify risks, assumptions, and decisions that still require approval.

## Constraints
- Planning only. Do not create, modify, or delete files yet.
- Do not write implementation code.
- Do not add product, cart, checkout, admin-login, or order-management features.
- Do not silently decide unresolved technical choices.
- Clearly distinguish confirmed decisions, recommendations, and open questions.
- Explain technical terms in simple language suitable for a Fullstack Developer learning Vibe Coding.

## Output
Produce a step-by-step implementation plan, proposed folder structure, compatibility notes, acceptance criteria, and a list of open decisions. Wait for my approval before implementation.