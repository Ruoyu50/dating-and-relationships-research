# COMPENDIUM v3 — Integration Methodology

## Task
Generate `COMPENDIUM_v3.md` by integrating sprint01/ + sprint02/ content into the `COMPENDIUM_v2.md` architecture. v2 is the architecture reference (heading structure, section order, frontmatter, A-class content). sprint01/ + sprint02/ contain the updated B-class content. C-class content is rewritten inline below.

## Source files (read in this order)
1. `COMPENDIUM_v2.md` — architecture reference + A-class content (frontmatter, §1.1, §1.2, §1.3, §2.5–§2.9 baseline, Appendix)
2. `sprint01/steep.md` — new §1.4 STEEP analysis (5-dim standard, 6 subsections)
3. `sprint02/futures_wheel_output.md` — new §2.1 narrative + Figma spec
4. `sprint02/rapid_forecasting.md` — new §2.2
5. `sprint02/Cone_of_Plausibility.md` — §2.3
6. `sprint02/backcasting.md` — new §2.4
7. `sprint01/bibliography.md` — replacement bibliography (11 entries, Chicago Notes-Bibliography)

## Output
`COMPENDIUM_v3.md` in repo root.

---

## Section-by-section rules

### Frontmatter
Use v2 frontmatter unchanged (title, subtitle, authors, date).

### Abstract
Use v2 abstract WITH these edits:
- Replace `**STEEP+** framework (Hines & Bishop, 2015)` with `**STEEP** framework`
- Remove the phrase `an extension of the classic STEEP framework that adds **Demographic** and **Spatial** dimensions, because population aging and urbanization could not be cleanly assigned to any of the original five`

### Executive Summary
Use v2 unchanged EXCEPT replace `STEEP+` with `STEEP`.

### §1.1 Industry / Area Definition
Use v2 unchanged.

### §1.2 Current Industry Situation
Use v2 unchanged (all subsections 1.2.1 – 1.2.4).

### §1.3 Trends Defining the Industry (Signals)
Use v2 unchanged (all subsections 1.3.1 – 1.3.6).

### §1.4 Key Drivers (Micro / Macro / Mega) — STEEP Analysis
**DELETE** v2 §1.4 entirely.
**REPLACE** with `sprint01/steep.md` content.
- Heading: `## 1.4 Key Drivers (Micro / Macro / Mega) — STEEP Analysis` (no "+")
- Subsection order: 1.4.1 [S] Social / 1.4.2 [T] Technological / 1.4.3 [E] Economic / 1.4.4 [E] Environmental / 1.4.5 [P] Political / 1.4.6 Driver Tier Table
- Source citation pattern: keep inline `*Source: ...*` italicized

### §2.1 Futures Wheel
**DELETE** v2 §2.1 entirely.
**REPLACE** with `sprint02/futures_wheel_output.md` Section 1 (narrative only — skip Section 2 Figma spec).
- Heading: `## 2.1 Futures Wheel — De-monetization Wall as Central Driver`
- After narrative, INSERT placeholder line: `[INSERT FIGURE: dating_2046_futures_wheel_v5.png]` (Ruoyu inserts image manually post-integration)
- After figure, INSERT this legend section verbatim:
Wheel node reference:
Ring 1 (STEEP-dimension direct implications):

A: AI-Companion Substitution (Generationally Skewed) — T + S
B: Outdoor Sociality Compresses — E (Environmental)
C: EU Regulatory Floor on AI-Mediated Intimacy — P
D: Tiered Jurisdictional Pricing After Consolidation — E (Economic)
E: Dating Lifespan Lengthens; 20–35 Logic Breaks — S

Ring 2 (reactive consequences, parent in parens):

A1: Brussels-Aligned Bloc Legitimates AI Companionship (parent: C)
A2: Gray-Market Offshore AI Companionship (parent: C)
B1: Indoor Commercial Venues Become Substrate for Intimate Sociality (parent: B)
C1: Compliance Cost Displaces Small Operators (parent: C)
D1: Mid-Market Collapses; Surviving Market Is Barbell-Shaped (parent: D)
E1: Longer Dating Lifespan Under Heavier Care Burden (parent: E)
E2: Loneliness Reframed as Population-Health Issue (parent: E)
BD1: Aviation Reduction Bites Asymmetrically (parent: B)
CE1: Verified-Human Premium Tier Emerges (parent: C)

Ring 3 (systemic restructurings, parent / cone tag):

1: Intimacy Infrastructure Becomes a Public-Goods Question (D1 / P+Pf)
2: Dating Industry Merges with the Care Economy (E2 / Pf)
3: Two-Tier Intimacy Stratification by Jurisdiction and Income (D1 / P+Pp)
4: Climate-Adaptive Indoor Commons Replace Open-Air Sociality (B1 / P+Pf+Pp)
5: Chronic Loneliness Reclassified as Public-Health Infrastructure (E2 / Pf)
6: Aviation Collapse Contracts the Geography of Romance; VR Substitution (BD1 / Pp)


### §2.2 Three-Step Rapid Forecasting
**DELETE** v2 §2.2 entirely.
**REPLACE** with `sprint02/rapid_forecasting.md` content.
- Drivers in new §2.2: Climate Compression + Demographic Aging (NOT Regulation + Demographics as v2 had).
- Heading: `## 2.2 Three-Step Rapid Forecasting — Climate & Demographics`

### §2.3 Cone of Plausibility
Use `sprint02/Cone_of_Plausibility.md` content unchanged. Three cones (Tiered World / Care Commons / Two-Tier World) + Companion Wars wildcard.

### §2.4 Backcasting
**DELETE** v2 §2.4 entirely.
**REPLACE** with `sprint02/backcasting.md` content.
- Target = Care Commons 2046 (Preferred), NOT Connection Club (Preposterous).
- Counterfactual format ("what would have had to be true").

### §2.5 The Business Artifact — Connection Club
**REPLACE** v2 §2.5 entirely with the following content:
2.5 The Business Artifact — Connection Club
2.5.1 What It Is
Connection Club is a members club designed to restore human connection in a world where political instability, climate constraint on outdoor mobility, and compressed work schedules have made in-person social life increasingly inaccessible (IPCC 2023; Plucinska 2025; Dobruszkes, Mattioli, and Gozzoli 2024). Members enter a physical facility, are placed into a private pod with a full sensory VR headset and haptic suit, and meet others — across the world, but only within their own region of residence — in immersive shared environments. Each user has a persistent avatar built from a full-body scan, updated on every visit. Each lived scenario — a Lisbon café, a Hokkaido onsen, a Tokyo rooftop — runs concurrently, switchable like tabs, with relationships and memories carrying across sessions.
2.5.2 How Membership Works
Applicants pass a background check and an in-person interview. Once accepted, members access any Connection Club facility on demand. Entry requires biometric verification at every visit, consistent with Article 27 Fundamental Rights Impact Assessment logic for high-risk AI deployers under Regulation 2024/1689. The pod system supports persistent identity rendering, allowing users to resume existing lived scenarios, start new ones, shift between identities and relationships fluidly, and maintain continuous digital presence across visits.
2.5.3 Format
The artifact is delivered as an interactive demonstration site (connection_club_site), which simulates a 2046 marketing site for the facility. The site adopts the polished, aspirational tone of a luxury intimacy brand — calm, clinical, sensual, expensive.
2.5.4 Why This Form
A slide deck describing this future would be forgettable. A marketing site that sells the audience on it is uncomfortable — because the discomfort comes from how easily one almost wants it. That discomfort is the provocation. The artifact is immersive (audience walks through it), provocative (it sells something we instinctively know we should not be buying), and grounded in research (every element of the world it inhabits ties back to a driver in our cones).

### §2.6 Contextual Scenario — Which World Does It Live In?
**REPLACE** v2 §2.6 entirely with the following content:
2.6 Contextual Scenario — Which World Does It Live In?
Connection Club lives in the Projected cone — the Tiered World of 2046.
It is a premium, urban, climate-controlled intimacy product for the upper-tier user in a world where:

The dating-industry revenue wall has forced consolidation into infrastructure-style services (Statista 2026).
Outdoor dating is seasonally limited under SSP2-4.5 to SSP3-7.0 trajectories (IPCC 2023, SPM Figure SPM.3).
AI is regulated in some jurisdictions, deregulated in others (Regulation 2024/1689; Bradford 2020).
The median user is 35+, often partnered-and-bored, divorced, or widowed (UN World Population Prospects 2024).
Loneliness has been segmented by class rather than solved.

It is adjacent to the Preferred cone (Care Commons) — the same physical typology, but commercial and stratified rather than public and universal. It is one regulatory shift away from being preferred infrastructure, and one deregulatory shift away from being preposterous gray-market.
This is deliberate: Connection Club asks the audience, "This already exists in your future. Which world do you want it to live in?"
2.6.1 Cone-Artifact Alignment — Why a Facility in a Post-Mobility World
A challenge surfaced at the Sprint 2 review: if the Preposterous cone collapses long-distance mobility, why does the artifact require visiting a physical facility at all? The answer resolves the apparent contradiction and explains why Connection Club's friction is a feature.
Air travel contracts under SSP3-7.0 carbon-budget pressure (Plucinska 2025; Dobruszkes, Mattioli, and Gozzoli 2024), but intra-regional mobility persists through expanded rail and local transit. Connection Club facilities are regional infrastructure — accessible within 60–90 minutes of major urban centers, but only within the user's region of residence. Cross-regional travel for intimacy is no longer possible. Additionally, post-Companion Wars regulation classifies at-home immersive identity systems as too high-risk to license — physical facility deployment, with mandated biometric audit and session logging consistent with Article 27 FRIA logic (Regulation 2024/1689), becomes the only legal channel for regulated intimate AI in jurisdictions following the EU compliance model. The friction of going to a facility is not a usability flaw; it is a regulatory feature. Combined with high-tier membership pricing accessible only to top earners, this physical access requirement becomes part of the stratification the cone reveals: only those who live near a facility and can afford the membership become users. The same friction that protects users in the regulated tier is what locks out users who cannot pay or cannot travel — they default to the gray-market AI companion described in §2.3.3.
This is also why Connection Club is more legible in the Projected cone (Tiered World) than in the Preposterous cone (Two-Tier World): it is the upper tier of a stratified intimacy market — the commercial sibling of Care Commons, not a survival product of the gray market.

### §2.7 Trends, Forces, and Happenings Underlying the Scenario
Use v2 §2.7 unchanged.

### §2.8 Target Audience & Mechanics
**REPLACE** v2 §2.8 entirely with the following content:
2.8 Target Audience & Mechanics
2.8.1 Who Is It For?
The target audience is young to middle-aged adults (21–45) living in dense urban environments — people who are experiencing social isolation despite being constantly "connected," struggling to form meaningful in-person relationships, and feeling the effects of climate restrictions on travel and mobility. This audience is structurally consistent with the cohort data the Compendium documents: the urban share of the global population reaches 68% by 2050 with 90% of growth in Asian and African megacities (UN World Urbanization Prospects 2018); long-haul aviation contracts under climate-budget pressure (Plucinska 2025; Dobruszkes, Mattioli, and Gozzoli 2024); and IPCC AR6 flags mental-health burden from extreme heat and weather events with high confidence (IPCC 2023, SPM A.2.5).
2.8.2 How It Works

Application & Membership: Applicants pass a background check and an in-person interview. Accepted members access any Connection Club facility on demand.
Arrival & Biometric Entry: Member checks in via biometric verification at facility reception.
Body Scan & Avatar Update: Each visit begins with a full-body scan that updates the user's persistent avatar.
Pod Allocation & Sensory Calibration: Member enters a private pod equipped with a full sensory VR headset, haptic body suit, and spatial audio environment.
Lived Scenario Session: Member enters one of their existing lived scenarios — a Lisbon café, a Hokkaido onsen, a Tokyo rooftop — or starts a new one. Their match is also physically in a pod, somewhere else in the world but within the same region. Scenarios are switchable mid-session like tabs on a computer.
Disclosure (Brussels-aligned jurisdictions): Every AI-mediated element — avatar smoothing, ambient NPCs, conversation prompts — is disclosed at the start of each session per Article 50 of Regulation 2024/1689. In non-aligned jurisdictions this disclosure is optional.
Persistent Memory Across Sessions: Relationships and memories evolve and carry across visits — the avatar, the scenarios, and the relationships are not reset between sessions.

2.8.3 Why It Sells
Connection Club sells because it answers problems the 2046 user actually has:

Outdoor dating is dangerous for much of the year in target megacities (IPCC 2023, SPM Figure SPM.3).
Cross-regional dating is carbon-prohibitive (Plucinska 2025; Dobruszkes, Mattioli, and Gozzoli 2024).
Compressed work schedules leave little time for in-person social formation.
Conventional dating apps are exhausted as a category (Statista 2026 revenue-wall forecast).

It is not a fantasy. It is a logical commercial response to the converging pressures the Compendium documents.
2.8.4 Mission Statement

To restore human connection by leveraging immersive technology to create accessible, continuous social environments where individuals can build relationships, foster community, and reclaim meaningful social experiences.
Restore. Reconnect. Redefine.


### §2.9 Provocation
Use v2 §2.9 unchanged.

### Bibliography
**DELETE** v2 bibliography entirely.
**REPLACE** with `sprint01/bibliography.md` content (11 entries in Chicago Notes-Bibliography format).
- Do NOT include Hines & Bishop 2015, WGSN, Stylus, GDE, or any Statista source not in `sprint01/bibliography.md`.
- The 11 entries are: Appfigures/Statista 2024, Bradford 2020, Dobruszkes et al. 2024, EU Regulation 2024/1689, IPCC 2023, Khatib 2023, Plucinska 2025, Santoso et al. 2025, Statista *Dating Services — Worldwide* 2026, UN World Population Prospects 2024, Xue et al. 2025.

### Appendix
Use v2 appendix WITH these edits:
- In A.2 "Files in the Drive Folder", update file list:
  - Remove: `COMPENDIUM_v2.md`
  - Add under `sprint01/`: `steep.md` (replaces previous draft), `bibliography.md` (Chicago NB, 11 entries)
  - Add under `sprint02/`: `futures_wheel_output.md`, `rapid_forecasting.md`, `backcasting.md`
  - Replace `Cone_of_Plausibility.pdf` reference with `Cone_of_Plausibility.md`
- All other A.X subsections unchanged.

---

## Critical consistency checks (must verify before finalizing v3)

1. **STEEP standard, 5 dimensions only.** No instance of "STEEP+", "Demographic dimension", "Spatial dimension" anywhere. Demographic content folded into [S] Social; spatial/urbanization content folded into [S] Social.
2. **No methodology citations.** No reference to Hines & Bishop, Glenn 1972, Voros, Anticipatory Governance Community, Swanson, Kemp, or any framework author. Methodology is presented without source attribution.
3. **§2.1 driver = de-monetization wall**, not climate disruption. Composite driver: Statista ARPU + EU AI Act Arts. 5(1)(b)/27/50 + UN WPP median age.
4. **§2.2 drivers = climate compression + demographic aging**, NOT regulation + demographics (as v2 had).
5. **§2.4 backcasting target = Care Commons 2046** (Preferred), NOT Connection Club (Preposterous).
6. **Every inline citation must match a bibliography entry.** The 11 entries are the only legitimate inline citations in v3.
7. **No fabricated specifics.** Connection Club spec must not include €7,200 annual fee, "7 rooms" layout, "8K VR", or any other quantitative claim not in Zara's original artifact spec or supported by bibliography.
8. **Heading numbering follows v2 architecture.** §1.1–§1.4, §2.1–§2.9, Bibliography, Appendix.
9. **No "Updated: [date]" metadata** or version annotations in v3 body.
10. **No "Section 2 — Figma Wheel Spec" content in v3.** Only Section 1 narrative + reference legend.

---

## What NOT to do

- Do NOT modify any source file (only generate v3 output)
- Do NOT introduce new content not in source files or in this methodology document
- Do NOT cite framework methodology authors
- Do NOT change v2 heading structure or section numbering
- Do NOT add or remove sections beyond what is specified above
- Do NOT include process annotations, todo notes, or commentary in v3 body