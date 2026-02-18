---
title: "Software Development Life Cycle (SDLC)"
date: 2026-02-13T13:03:57-08:00
draft: false
description: "Managing software from technical design to production."
---

### Methodologies

- Scrum
	- Backlog development (refinement)
	- Spring planning
- Agile
- Kanban
- Waterfall
- Extreme programming (XP)
- Lean
- DevOps
- Rapid application development (RAD)
- Test-driven development (TDD)

### Production Process

1. Technical design doc / RFC + architecture (how components interact)
2. Design review + senior engineer feedback loop
3. Documentation of subsystems to be built by individual dev teams
4. Backlog dev + sprint planning + working with PMs + TPMs to discretize tasks
5. Software dev + completing task tickets (JIRA, Linear, Asana)
6. Unit + integration tests, static + dynamic analysis
7. Code submission review (CR) + pull/merge requests + adherence to style guides + automated checks (CI)
8. Test in staging + testing edge cases + performance + security testing (simulate high traffic and security standards)
9. Push to production + CI/CD pipeline
10. Canary release + blue-green deployment + feature flags (switch to enable/disable a feature)
11. Monitoring (error rates, latency, real-time logs) + support tickets + user feedback + incident response (pre-defined rollback plan)

### Philosophies

- Scoping + preventing "scope creep"
- Consider data models (database structs + API specs) + trade-offs
- Always start with a solid design doc + architecture
- Built modular from design doc + architecture in chunks
- Always write tests first
- Load balancing + session affinity
- Canary is often released to a small subset of users (e.g. 1%) + A>>B (e.g. 90-10, 80-20) since it is meant to validate production functionality

### Production Deployment Methodologies

- Canary
- Blue-Green
- Rolling
- Shadow
- A/B Testing
- Big Bang
- Feature flags
- Dark launching

