**REKVIN**

Synthetic Persona Engine

**Usability Testing Report**

INF 385T — UX Prototyping | Spring 2026

University of Texas at Austin

April 2026

# **Executive Summary**

This report documents the findings from two rounds of moderated usability testing conducted on Rekvin, a node-based synthetic persona engine designed for UX researchers and product teams. The application allows users to build AI-powered personas, run simulated user testing sessions, and analyze behavioral metrics through an interactive canvas interface.

Two participants were recruited and tested individually. Testing was conducted in person, following the standardized protocol and script developed for INF 385T. Participants completed four task scenarios covering persona synthesis, node-based workflow building, live simulation, and metric analysis.

Overall, participants found the visual aesthetic and AI-powered features compelling. However, several critical usability issues were identified — most notably around onboarding clarity, node connection mechanics, canvas discoverability, and platform compatibility. The following report presents the full methodology, findings, analysis, and prioritized recommendations.

# **Testing Methodology**

## **Study Design**

The study used a moderated, task-based usability testing approach. Each session was conducted one-on-one with a moderator following a standardized protocol script. Sessions lasted approximately 30–45 minutes each and included a pre-test survey, four guided tasks, and a post-test survey.

## **Participants**

| Dimension | Participant 1 | Participant 2 |
| :---- | :---- | :---- |
| **Professional Role** | Data Analyst / Scientist | UX/UI Designer |
| **Years of Experience** | 2–5 years | 2–5 years |
| **Persona Usage Frequency** | Never (1/5) | Sometimes (3/5) |
| **Node Canvas Comfort** | Somewhat Uncomfortable (2/5) | Somewhat Comfortable (4/5) |
| **AI Tool Familiarity** | Extremely Familiar (5/5) | Very Familiar (4/5) |

Both participants had 2–5 years of professional experience. Participant 1 was a Data Analyst with no prior experience using node-based interfaces and no prior use of user personas. Participant 2 was a UX/UI Designer with moderate persona usage experience and some comfort with node-based canvases. Both participants were highly familiar with AI tools.

## 

## **Task Overview**

1. Task 1 — Persona Synthesis: Generate a complete synthetic persona using the Persona node.

2. Task 2 — Branching Workflows: Connect the persona to an idea or research node on the canvas.

3. Task 3 — Live Session Simulation: Launch a simulation and interpret the Aura visualization.

4. Task 4 — Metric & Friction Analysis: Locate and interpret the Persona-Product Fit report and Cognitive Friction metrics.

## **Protocol & Consent**

Participants completed a voluntary consent form prior to testing. No personally identifiable information was collected. All data was anonymized and used solely for educational purposes. The moderator read a standardized introduction, emphasized think-aloud protocol, and did not provide task assistance unless participants were completely blocked.

# **Application Overview**

The following screenshots illustrate the three primary sections of Rekvin as tested: the Personas canvas, the Agent Testing (simulation) view, and the Metrics analysis panel.

![][image1]

*Figure 1: Personas view — node-based canvas for building synthetic persona profiles with the Quality Score panel.*

![][image2]

*Figure 2: Agent Testing view — drag-and-drop persona simulation interface with target application URL input.*

![][image3]

*Figure 3: Metrics view — metric node library with filtering options for analyzing simulation results.*

# **Key Findings**

## **Finding 1: Onboarding Clarity is Insufficient**

Both participants struggled during the initial moments of the session. Content on the landing/front page was skimmed or missed entirely. Neither participant had a clear mental model of how the three sections (Personas, Testing, Metrics) connected before beginning tasks.

| Observed Behaviors: Participants skipped over instructional text on the front page without reading it. Neither participant could articulate the platform's core workflow before starting. Participant 1 (less design background) expressed confusion about where to begin. No progress indicator or guided tour exists to orient first-time users. |
| :---- |

Participant 1 noted in post-test: "Onboarding needs clarity, also how to continue to the three sections. Like a progress bar/indicator." This finding had the highest impact on task completion for Task 1 and Task 2\.

## **Finding 2: Node Canvas Discoverability & Connection Mechanics**

The canvas interface was unfamiliar to users without prior node-based tool experience. Even Participant 2, who was somewhat comfortable with similar tools, encountered friction when attempting to draw connections between nodes.

| Observed Behaviors: Participant 1 did not immediately understand that nodes were draggable onto the canvas. Both participants had difficulty finding and activating the connection ports on nodes. The concept of 'edges' (connecting lines) between nodes was not intuitively discovered. Node management: participants could not search within the node palette or filter easily. Personas could not be edited after being generated — this was surprising to both users. |
| :---- |

This finding directly impacted Task 2 (Branching Workflows), where both participants required extended exploration time and one required moderator prompting to proceed.

## **Finding 3: Platform Compatibility & Responsiveness**

Technical issues surfaced during testing that limited the depth of Task 3 exploration. The deployed version of the software was unable to use Gemini in computer use mode, which affected the live simulation feature.

| Observed Behaviors: Gemini-powered computer use was non-functional in the deployed environment. Responsiveness issues were noted — the interface did not adapt cleanly on all screen sizes. One participant encountered a situation where a node appeared to get "stuck" during workflow building. The canvas required some acclimatization to zoom, pan, and fit-to-screen effectively. |
| :---- |

## **Finding 4: High-Value Features Well Received**

Despite usability friction, both participants responded positively to several differentiating features of Rekvin. The voice interaction and persona conversation features (pre/post session) were described as notably impressive.

| Positives Highlighted: Voice and conversational interaction with a persona before and after a test session was described as 'cool' and memorable. The node-based system's flexibility for late-stage design edits was seen as highly valuable. The Aura visualization was perceived as visually engaging and helped users understand AI processing. The overall dark aesthetic was appreciated as modern and professional. Participant 1: 'The liberty to make small edits even in late stages of design because of the node-based system is really valuable\!' |
| :---- |

## **Finding 5: Expectations Focused on UI Quality Over Persona Compatibility**

An interesting meta-finding emerged: participant expectations during testing were oriented more toward the interface's visual quality and responsiveness than toward evaluating whether the synthetic persona's behavior matched a real user profile. This suggests the UI itself is prominent enough to draw attention away from the core AI value proposition.

# **Survey Results**

## **Pre-Test Survey: Participant Backgrounds**

The pre-test survey confirmed that the two participants represented distinct user segments: a technical data professional with no persona creation experience, and a UX designer with moderate experience. This diversity was intentional to surface breadth of usability issues.

## **Post-Test Survey: SUS Results**

The System Usability Scale (SUS) was administered post-session. Responses are summarized below. Note: Q8 for Participant 1 was recorded as 'Fair' (interpreted as Neutral/3) and Q4 as 'No' (interpreted as Disagree/2).

| \# | Statement | P1 Response | P2 Response |
| :---- | :---- | :---- | :---- |
| **Q1** | I think that I would like to use this system frequently. | Disagree | Neutral |
| **Q2** | I found the system unnecessarily complex. | Disagree | Disagree |
| **Q3** | I thought the system was easy to use. | Agree | Agree |
| **Q4** | I think that I would need the support of a technical person. | No (Disagree) | No (Disagree) |
| **Q5** | I found the various functions well integrated. | Agree | Agree |
| **Q6** | I thought there was too much inconsistency. | Strongly Disagree | Disagree |
| **Q7** | I would imagine most people would learn this quickly. | Agree | Agree |
| **Q8** | I found the system very cumbersome to use. | Fair (Neutral) | Poor (Disagree) |
| **Q9** | I felt very confident using the system. | Neutral | Agree |
| **Q10** | I needed to learn a lot before I could get going. | Strongly Disagree | Disagree |

Both participants agreed the system was easy to use (Q3) and that most people would learn it quickly (Q7). Neither felt they needed technical support (Q4). Key friction points were reflected in Q10 (needing to learn things before getting started) where Participant 1 strongly disagreed — suggesting they felt they needed significant orientation before productive use.

## **Post-Test Survey: Feature-Specific Ratings**

| Feature | Statement | P1 | P2 |
| :---- | :---- | :---- | :---- |
| **Node Canvas** | Connecting nodes was intuitive and easy to understand. | Strongly Agree (5) | Neutral (3) |
| **AI Synthesis** | Magic Generate felt seamless and produced realistic results. | Agree (4) | Agree (4) |
| **Aura Visualization** | The Aura animation helped understand the AI was thinking. | Strongly Agree (5) | Neutral (3) |
| **Metrics** | Status indicators were easy to read and interpret. | Agree (4) | Disagree (2) |
| **Aesthetics** | The border-less design felt modern and focused. | Agree (4) | Neutral (3) |

Participant 1 rated the Node Canvas and Aura Visualization very highly (Strongly Agree), while Participant 2 gave Neutral scores to these features. The Metrics status indicators received divergent ratings — Agree from P1 and Disagree from P2 — suggesting that interpretation of metrics varies significantly by user background.

## **Open-Ended Feedback Summary**

| Question | Participant 1 Response |
| :---- | :---- |
| **Most Frustrating** | *"Onboarding needs clarity, also how to continue to three sections. Like a progress bar/indicator."* |
| **Favorite Feature** | *"The liberty to make small edits even in late stages of design because of node-based system is really valuable\!"* |
| **One Change** | *"Clear onboarding flow, a demo maybe to see potential options and tools. Better contrast with background."* |

Participant 2 left open-ended responses blank, which may indicate survey fatigue or satisfaction without specific pain points to articulate.

# **Recommendations**

The following recommendations are prioritized by impact and feasibility. They address the core usability issues surfaced during both test sessions.

## **Priority 1 — Critical: Rebuild Onboarding Flow**

| Recommended Actions: Add an interactive guided tour or step-by-step onboarding sequence for first-time users. Implement a visual progress indicator showing the Personas → Testing → Metrics workflow. Create a demo mode or sample project that users can explore before starting from scratch. Ensure key instructional text on the landing page is visually prominent (size, contrast, placement). |
| :---- |

## **Priority 2 — High: Improve Node Canvas Discoverability**

| Recommended Actions: Add subtle animated affordances or tooltips on node connection ports to indicate interactivity. Include a short in-canvas tutorial (e.g., an animated first-use hint: 'Drag a node here to begin'). Enable editing of saved personas — users expect to refine generated content. Add a search/filter bar to the node palette for faster node discovery. Improve visual feedback when a valid connection is established between nodes. |
| :---- |

## **Priority 3 — High: Resolve Platform Compatibility**

| Recommended Actions: Resolve Gemini computer-use integration in the deployed environment before next test round. Conduct responsive design testing across device sizes and fix layout issues. Implement error states and fallback messaging when AI backend features are unavailable. Improve canvas stability — prevent node-locking or stuck-state issues during workflow creation. |
| :---- |

## **Priority 4 — Medium: Enhance Metrics Clarity**

| Recommended Actions: Add brief descriptions or tooltips to each metric node explaining what the score means in plain language. Distinguish between 'Persona-Product Fit' and 'Cognitive Friction' with visual hierarchy and color coding. Consider adding example report outputs to help users understand expected results before running a session. |
| :---- |

# **Conclusion**

Rekvin presents a genuinely innovative approach to synthetic persona testing, and its core value proposition — enabling AI-powered simulation of user behavior — is well understood and appreciated by participants once they engage with it. The voice interaction, node-based flexibility, and visual aesthetic were standout positives.

However, two rounds of usability testing clearly demonstrated that the path to that value is obstructed by onboarding friction, node canvas discoverability challenges, and platform compatibility issues. These are solvable problems. With focused iteration on the onboarding experience and node interaction model, Rekvin has strong potential to deliver a compelling, differentiated product experience for UX researchers and product teams.

The team recommends prioritizing the onboarding redesign and node canvas improvements as the highest-leverage changes before the next round of testing.

# **Appendix**

## **A. Testing Protocol & Script**

The full moderator script used in both sessions is included below.

**Part 1: Moderator Introduction (Read Aloud)**

"Hi, thank you so much for participating today. My name is \[Your Name\], and I'm part of a team designing a new tool for user researchers called Rekvin.

Before we start, I want to emphasize a few things:

* We are testing the platform, not you. You cannot make any mistakes today. If you get stuck, that's actually great data for us.

* Please 'Think Aloud'. As you use the site, tell me what you're looking at, what you're trying to do, and what you're thinking.

* Be honest. You won't hurt my feelings. We need candid feedback to improve the product.

Do you have any questions before we begin?"

**Part 2: Pre-Test / Context Setting**

"First, without clicking on anything, please take a look at this main screen."

* "Based on what you see here, what do you think this platform is designed to do?"

* "If you were a Product Manager or UX Researcher, what is the first thing you would want to click on?"

**Task 1 — Persona Synthesis**

Scenario: "You are starting a new research project and need to test a concept on a specific type of user. You don't have time to recruit a human, so you want to generate a synthetic persona."

Goal: "Show me how you would use this platform to automatically generate a new, complete persona profile (including a name, bio, and avatar)."

**Task 2 — Branching Workflows**

Scenario: "Now that you have your persona, you want to set up a research simulation to see how they might react to a new product idea."

Goal: "Show me how you would connect your newly created persona to a research or idea node to create a workflow."

**Task 3 — Running a Live Session**

Scenario: "Your workflow is set up, and you are ready to observe the persona in action."

Goal: "Please start the simulation. While it runs, tell me what you think is happening on the screen."

**Task 4 — Metric & Friction Analysis**

Scenario: "The simulation has finished, and you need to report your findings to your design team."

Goal: "Find the results of the simulation. Specifically, locate the Persona-Product Fit report and the Cognitive Friction metrics. Tell me what these results mean to you."

**Post-Test Debrief Questions**

* "Overall, how would you describe your experience using Rekvin today?"

* "What was the most frustrating part of the experience?"

* "What was your favorite feature or the easiest part to use?"

* "On a scale of 1 to 5, how easy was it to build a workflow on the canvas?"

* "If you could change one thing about this tool, what would it be?"

## **B. Consent Form Reference**

A signed participant consent form was obtained for each session prior to testing. Forms are retained by the research team in accordance with course guidelines. Key consent elements included:

* No personal data (name, email, or identifying information) was collected.

* Data usage is limited to an educational group report and class website posting.

* Session recordings, if captured, were viewed only by the project team.

* Participation was voluntary; participants could withdraw at any time.

* Participants confirmed they were at least 18 years of age.

## **C. Session Observation Notes**

**Session 1 — Participant 1 (Data Analyst)**

| Task 1 — Persona Synthesis: Initially scanned the landing page without reading the descriptive text. Did not immediately identify the Persona Node or the Magic Generate button. Needed additional time to locate the node palette and understand drag-to-canvas mechanics. Once oriented, successfully generated a persona — positive reaction to the output quality. |
| :---- |

| Task 2 — Branching Workflows: Had difficulty locating connection ports on nodes. Attempted to drag the entire node rather than drawing a connection edge. Required moderator prompt to proceed; after guidance, understood the mechanic. Expressed frustration: 'I expected clicking the node to open a connection menu.' |
| :---- |

| Task 3 — Live Session: Deployed environment could not run Gemini computer use — simulation was limited. Aura visualization was clearly understood as an 'AI is thinking' indicator. Expressed enthusiasm about the voice/conversation feature with the persona. |
| :---- |

| Task 4 — Metrics: Navigated to the Metrics panel successfully. Found metric categories (Time, Navigation, Friction, etc.) clear in concept. Noted that without a completed simulation, it was difficult to interpret results contextually. |
| :---- |

**Session 2 — Participant 2 (UX/UI Designer)**

| Task 1 — Persona Synthesis: More comfortable with the canvas concept from the outset. Understood drag-and-drop faster, but still expected onboarding guidance. Generated persona successfully; noted the output felt realistic and detailed. |
| :---- |

| Task 2 — Branching Workflows: Connected nodes with less difficulty than P1 but still required exploration. Attempted to edit a generated persona and found it was not editable — expressed surprise. Noted the lack of a search function in the node palette as a friction point. |
| :---- |

| Task 3 — Live Session: Same Gemini compatibility issue encountered. Found the Testing view layout intuitive — drag-and-drop persona to testing area was clear. Positive reaction to the voice interaction feature. |
| :---- |

| Task 4 — Metrics: Had some difficulty interpreting specific metric categories without prior context. Found the Metrics panel well-organized but wanted more explanation of each metric's implications. Suggested adding tooltips or a glossary for metric definitions. |
| :---- |

## **D. Tools and AI Assistance for Report Generation**

The creation of this report and the underlying research materials relied on several specific tools and AI assistants to streamline the process, from data collection to documentation.

* Gemini: Used for summarizing and structuring raw meeting transcripts and observation session notes, ensuring efficient extraction of key findings and quotes.  
* Microsoft Forms: Utilized as the platform for all quantitative data collection, specifically for the [Pre-Test Survey (Demographics & Background)](https://forms.office.com/Pages/ResponsePage.aspx?id=peLXMdi9TkGel76pmOvf4T18JFivpWhAi0jLqQyCTrRUQzRHTkRRWEU2TFpET0xQQTFZUzlJS09QTS4u) and the [Post-Test Survey (Satisfaction & Usability)](https://forms.office.com/r/NE7ZWv0gYz).  
* Claude: Employed as an AI assistant to aid in compiling, structuring, and refining the written analysis and synthesis sections of the final report.

## **E. Supporting Research Documentation**

For a detailed review of the raw data, specific testing prompts, and comprehensive survey responses, please refer to the following external assets:

*   **[Consent Form](https://docs.google.com/document/d/1Bk0b_3TWpkX8wQz8mts29xhqOEBls1rIuTRW76DvJ3c/edit?usp=sharing)**
*   **[Testing Protocol & Script](https://docs.google.com/document/d/1el4v7QO4hxtksNUtMNws5Q3IQ17Yv7E9c69I8q3_GT4/edit?usp=sharing)**
*   **[Pre and Post Test Surveys](https://docs.google.com/document/d/13tCVAXdHh6xyzwXUMA_uYJdVPbPlCpqp1hoxvlt7nz0/edit?usp=sharing)**
*   **[Post-test Survey Results](https://docs.google.com/spreadsheets/d/1eLuIjokZzWER-zM9MMkjvQy32sjV3vwrVu4Uxlvdfcw/edit?usp=sharing)**
*   **[Usability Survey Results](https://docs.google.com/spreadsheets/d/1E4XwKKLYbiZi-gtFQ0DIe0aKFvH2__6isPVerIlqB-o/edit?usp=sharing)**