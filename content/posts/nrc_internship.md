---
title: "National Research Council Canada"
date: 2026-01-04T00:34:43-08:00
draft: false
description: "Lessons I learned during my first engineering internship."
---

One of the first things I learned was that innovation (especially that of the technological and scientific kind) is a fast-paced, high-cost pursuit, and demands a very high degree of technical and mechanical mastery. The space in which innovation is bred is, I argue, one of the best places to grow as a technologist in the new era.

Another piece of information I learned is that doing research and building a startup are quite similar ventures. After a decent amount of exposure to lab work and real-time creative processes, I realized that in scientific research it is not always feasible to collect data that verifies your hypothesis or experiment. It is a rarity to get things right the first time; neither will the second or third iteration prove much in most cases. Research, in this sense, is a mirror image of the *rapid prototyping* effect exhibited by early-stage startups.

This type of work prioritizes useability and functionality; a sort of pragmatic approach to innovation. It is forceful and unabashed. But this is likely why good ideas flower into great ones; trial and error gives space for continuous ideation to flow, and it gives shape to your thoughts.

On the other hand, this could possibly be why many scientists in the field of research feel static and unproductive. They probe on the frontiers—the blurred edges of the knowledge fractal—and naturally produce data that has yet to fit into the current network of laws, lemmas and theorems. The job of a great researcher is to extract the substance of raw data, interpret it correctly, and fit it into the known body of facts.

It is important to define productivity in its most raw and organic sense. Traditional productivity has become obsolete in a civilization that is automating physical labour and freeing up more room for intellectual throughput. Productivity in research-intensive projects often displays itself in establishing phases/stages within a timeline consisting of production milestones.

Here are the most important things I've learned during my internship conducting research and engineering a robotic control system at NRC:

### Agile Development

When building something, make changes one at a time and test the software per new iteration. This way, you know the effect that each new implementation has on the product or service as a whole. Software engineering, using the pedantic method, is a great way of stacking changes on the initial version of the project. This also helps when troubleshooting a problem; you can have a better sense of where the source of the problem is once you isolate it by changing one thing at a time, testing it, rolling it back, and then repeating the process until you've found the issue.

### Troubleshooting

Troubelshooting and debugging is critical to making high quality programs. You can trace the source of the problem by making your software modular, then isolate and test each part. Once you find out which part of the program the issue likely comes from, repeat the process; break that specific part of the program into smaller code fragments (e.g. commenting things out), then test again. Continue the cycle until you've identified the vulnerability.

To trace software/hardware effectively, abstract everything out except for one area of your code/circuitry/wiring, then test what its result is. Isolate, test, repeat.

### Quality Control

The analytical process of quality control (QC) tests and calibration protocols (especially with research/scientific instrumentation and computing machines) is a very important way of thinking. It exercises an algorithmic approach to research because it emphasizes the importance of optimizing accuracy in your measurements/outputs, ensuring you end up collecting verifiable data that reflects the truth of your experimentation results. In research labs, the goal is to minimize as much uncertainty/error as possible in your experimental data and measurements. Conventionally, your sampling process would look something like this:

```
1. Quality control (QC)
2. Blank standard
3. Standard 1
4. Standard 2
5. Sample 1
6. Sample 2
7. Quality control (QC)
```

You can have as many samples as you'd like, but it is also good practice to run a QC sample after every ten or so readings.

This analytical process can be applied to any research paradigm, which makes it powerful; it is a methodical algorithm that any researcher/engineer can use in any technical field that uses sensing and telemetry systems. The emphasis of this process is on ensuring maximal control over your tools/machinery/instrumentation, minimizing error/uncertainty in your results, tests, and development pipelines, and preserving quality in your research and engineering projects by adhering to high quality standards.

Note: Low standard means a standard which you know will map to a calibration point on the low side of the graph (near zero). High standards are used to map out calibration points on the higher side of the graph (near the max). You can have as many samples as you need, while often there are a minimum set of standards (by convention) needed to assess, preprocess data, and calibrate the machine and its telemetry system. Such conventions for standard testing in the field of analytical chemistry may include consensus programs from ISO, IUPAC, NIST, AOAC, and ASTM International.

You test QC and standards as unknowns, expecting the machine/instrument to measure the QC and standards, which should, in theory, give you a result with the same measurement as your QC/standards. If in the case where the machine does not output a result that is close enough (within the level of confidence/uncertainty propagation limits) to the QC or the standards, you must calibrate the instrument by resloping the calibration curve to correct any offsets.

Research/scientific instrumentation and computing machines tend to **drift**, meaning the machine accumulates gradual changes over time. This is largely caused by changes in the environment, component wear and breakage (e.g. electronics, circuits, microchips), and the errosion and corrosion of materials (e.g. metal, motors, electrodes).

Another source of error is **noise**. In research/scientific machines, noise is an undesired signal or disturbance in your instrument's system, which results in irregular/fluctuating telemetry or deviated sensor fusion arrays, for example. In analytical chemistry, an important source of error is the **matrix effect**, which is defined as all the components of a sample that is not the **analyte** (i.e. the thing you want to test/measure/verify).

The matrix effect refers to the influence of such components (excluding the analyte) that may cause some sort of deviation or unwanted effect on your analysis. The **signal-to-noise ratio** (SNR) is a statistic used to interpret the strength of the desired signal compared to the strength of the noise that disturbs that signal. It is relevant to the **relative standard deviation** (RSD), which measures the dispersion of a dataset relative to the mean.

### Concentration

In research labs, most (if not, all) scientists and engineers have specializations or areas where their individual technical prowess and knowledge are highly valuable (knowledge that is application-ready, due to its intensely focused scope). This is why access-tiered R&D projects (in big tech, academia, or government institutions) tend to involve a team of members with highly specialized and extremely concentrated expertise that is relevant to the project. Because of this, high-caliber scientific and technological research tends to leverage each person's role depending on the research focus. The scope of the project becomes modular-heavy, with different parts demanding its own scope of technical skill and knowledge.

As an example, suppose someone specializes in physics modeling. He or she might work on Fourier space neural networks and computational fluid dynamics (CFD) to solve time evolution equations. Another researcher in the team might specialize in applying the Finite Element Method (FEM) for scientific computation, so he or she could potentially build a software with Firedrake and PyTorch to solve PDEs using a graph neural diffusion (GRAND) model. Now suppose they both have an idea of using their combined skills to build a new fluid dynamics model to simulate the Beltrami flow. By intersecting their respective skill sets, the boundary is pushed forward, and innovation ensues. It's pretty amazing seeing a team of researchers/engineers fuse their specializations together in a myriad of ways never before seen and end up producing something novel.

I've learned that in highly-technical research labs, everyone's domains of expertise tend to complement each other's work, based on their specialized knowledge and skill sets. Because of this, R&D tends to be a collaborative venture. At the same time, a person's own intellect and liberty to scientific experimentation thrives in non-restrictive research labs. This was proven by research conducted at AT&T Bell Laboratories, where scientists, researchers, and engineers had the freedom to pursue what they believed would change the world; take Claude Shannon, John Bardeen, Walter Brattain, William Shockley, Dennis Ritchie, Ken Thompson, Brian Kernighan, and many others, for example.

### Collaboration

Partnerships are invaluable. They help flourish collaboration in R&D, as well as encourage the sharing of what otherwise would be inaccessible resources and instrumentation critical to specific projects.

Partnerships between universities, NRC, NSERC, and corporations is a common phenomenon in Canada. Universities that partner with federal research labs or other companies tend to be doctoral and comprehensive-tiered institutions (the Canadian version of R1/R2/D&PU universities in the United States).

Another thing I learned is that the Canadian government generally wants to help commercial industries thrive, often by assisting companies with specific projects. But it is important to note that, when participating in government partnerships, you're prone to have a lot of paperwork; I learned first-hand that bureaucracy can at times hinder scientific/innovative progress.

At the same time, extremely high security protocols and department-safed network access can be a good thing. For startups, however, the main priority is to scale fast and scale big, so this may likely cause friction for early-stage founders who intend to move at terminal velocity and beat the J-curve.

### Financing

Funding is very important (especially for highly-technical research and engineering projects). Without financing, the accessible scope of your research can be limited and it will be difficult for you to exercise your full liberty for engineering new products and machines (due to the high cost and total expenses required to purchase supplies, materials, processors, and such). Fortunately, Canada offers a lot of graduate scholarships, research funding, and commercial/federal grants for students and employees seeking new career paths and technical roles. Postdoc fellowships and PhD research projects tend to be where funding grows saturated, including research-intensive federal/corporate departments.

### Project Management

Productivity can be hard to measure in scientific research, but this can be a good thing. Why? Because it encourages researchers to build their own productivity systems, workflows, agendas, timelines, pipelines, supply chains, project management systems, financing/accounting systems, meetings, and so on (all of which would be entirely adapted to that specific project). So the answer is, productivity can be hard to measure in a generalized sense, but per project/incentive it's a whole lot easier and better in the long run.

The most common form of quantified productivity in R&D initiatives is by making a timeline that shows multiple phases/stages. Under each phase you find a list of project milestones, each marking the completion/production of important features/implementations.

Research projects (especially ones that involve building something new) tend to iterate this cycle via **generations**. Frequently, innovative products are termed `Gen 1, Gen 2, ... , Gen N` based on an $N$ number of timeline cycles/iterations/upgrades (usually these generational iterations are used only to track the technological development of the machine being built during prototyping, and is often not termed as such post-deployment).

For repeatable experimentation and testing (especially for projects involving data acquisition and sampling/analysis on a regular schedule) it is good to make a timeline of multiple phases. Within those phases you would have a cycle number, indicating the iteration index of the current experiment or data collection, which would look something like the following, except the stages are replaced by cycles. You would usually use stages for tracking a project, and cycles for tracking experimental iterations.

Research Initiative Timeline Example

```
- Phase I
    - Stage I
    - Stage II
    - Stage III
- Phase II
    - Stage I
    - Stage II
- Phase III
    - Stage I
	- Stage II
	- Stage III
```

How I test if a point in the project's timeline can be a project milestone or not is by asking myself: can adding this new feature or getting new data results from a recurring experiment turn this project into an entirely new thing? If I want to know where to mark my project checkpoint and make it into a phase/stage, I ask: is there something I've discovered in the data or a new system I've engineered in order to help me build the main thing be an entirely separate research/engineering project in itself?

Project milestones are like stepping stones toward the end objective of your project, like *lemmas* building up to a final *theorem* in mathematics.

### Operations

Because research is usually collaborative in nature, you're prone to have a decent amount of meetings with other teams or people who can offer highly concentrated skills and knowledge on a part of your project. Something important to note: operational meetings are usually productive, general/reporting meetings are usually unproductive. Make sure you build your research/engineering ventures around direct communication and operational meetings (only when needed). I learned that it's very important to preserve your time to do the more important things, so be judicious in your choice of operations.

Quick note: if you're building a technical team, make it **flat**. No middle agents, direct communication, organize teams based on skill and expertise, and only have operational meetings. How I identify whether a meeting is productive or not is if you need to use the whiteboard. Using the whiteboard is also a good way to gauge how your team members are thinking about the problem, so you know what to criticise and fix. It is also an effective method of training first-principles thinking while receiving feedback in real-time.

### Training

Surround yourself with elite, high-caliber individuals. Try to **work with and learn from very, very technical people**. Having discussions with them isn't enough. PhD doctorates, postdoctoral fellows/researchers, research scientists, intensely skilled graduate students (Masters/PhD level), field-specific talents (e.g. AI hardware engineers, computer architects, etc). Some things I recommend doing with highly skilled and knowledgable people:

1. Ask **a lot** of questions, including the fundamental ones - you're not just trying to know what the answer is, you're learning how they think and arrive at that conclusion
		- You should also observe how they use first-principles and discrete math-like thinking (axioms, conjectures, theorems, propositional logic, and so on) to approach the problem, question, or topic. Every field domain has their own way of using first-principles and first-order logic to solve their niche problems (e.g. biologists think about how PCR can be controlled with temperature changes, then ask why drastic temperatures can change the folding structure of DNA, then think it out from the ground-up; computer scientists think about why the SHA3-256 hashing algorithm is better than MD5, then think about why MD5 is prone to collision attacks, and then think from the ground-up with bitwise operators).

2. Observe them working as you work with them - understand their way of thinking and the processes they use to formulate a new way of doing things; the goal is to synthesize the way they analyze and think things through *into* your own way of thinking - there's a small chance it won't be constructive to your thought process, but more often than not it will improve it drastically if you surround yourself with the right people.

3. Work together/solve a problem together - it's good to be lavished by a heap of knowledge at once while working out a problem together, though make sure to take note of everything; the process, methods of evaluating and analyzing things, tracing and troubleshooting parts of the problem, and so on.

Of course, one of the reasons why you'd wanna work together with highly technical people is because they have some knowledge unique to themselves and the work they do, often being something no one else knows or can do. That is what makes them **specialized**. That is the key: **specialization**.

You need to know what you are especially good at, and what topics or research problems only you have been learning tons about (better yet, try to solve those questions/problems together because you'll get to see the problem from a **cross-specialization** POV).

By intersecting your domain with a highly technical individual, it is much easier for you to start working or collaborating on a project with that person. **Intersect your specialized knowledge, methods, and skill sets**.

4. Take notes of everything - whether it be abbreviations, new terms and ideas, names, how things work, calculations, tables, graphs, diagrams - draw things out if you need to, and list out everything you learned.

I always bring a dedicated notebook and pen with me everywhere I go; the research lab, a university instrumentation room, the office, my cubicle, and anywhere I'm in the company of highly technical people. Paper and ink is encouraged because, in many access-tiered research labs, devices can be exposed to chemicals, electromagnetic frequencies, fluidics, radiation, and other substances/effects that could damage your device. Otherwise feel free to use whatever you'd like.

5. Ask them why they chose the field they're in now, and what motivates them to do research or engineering - understanding what motivates and drives them is important because you get to learn more about the instrinsic aspects of a specific study or industry that can influence and incentivise a person's resolution to pursue and enjoy such technical fields.

### Lab Capacity

Learn how to *sell your ideas*. Research institutions are usually organized as top management, like a binary tree in computer science. Knowing how to tell your supervisor/boss what you need, the reasons for why you need it, and how other scientists/researchers can benefit from it is critical to establishing yourself a firm charter, a reservation to doing great work and great research. It is also important because it gives others the credit they deserve and the rights they are privileged to, because more often than not, what you need is something other scientists and researchers need too. There's nothing to fear, because most of the time, you're speaking for your whole team or department.

One of the most important skills in tiered research is knowing how to **sell your need**. You should especially **be good at asking for more lab capacity**, including three things:

1. Scientific instrumentation and machine/computing capacity
2. Extensions/changes to budget and/or time
3. Partnerships with other teams/departments

### Hypothesis Economy

Ask the right questions, focus on the right problems. Richard W. Hamming, a Bell Labs mathematician and computer scientist, once said that "drive, misapplied, doesn't get you anywhere," emphasizing that your effort should be applied in the right places. Intensive research is all about **defining your problem/question** in a clear, specific, and actionable way. Trying for the right answers produces no value if you misapply your effort to needless problems or questions that won't change much in the world.

### Security

Security is important to protecting novel research and innovation at an institutional level, the national level, and at the international scope. At the NRC, there are hierarchical tiers to classifying protected intelligence, along with security clearance levels a member must have in order to access a particular tier:

1. Unclassified - No security clearance required
2. Protected A - Reliability status clearance required
3. Protected B - Reliability status clearance required
4. Protected C - Enhanced reliability status clearance required
5. Confidential - Secret clearance required
6. Secret - Secret clearance required
7. Top Secret - Top secret clearance required

Individuals in access-tiered research labs (especially within the Canadian government) strictly use an access card to enter the facility and its internal spaces.

### Edge Cases

Improvise when needed. In a research environment where rapid prototyping, diagnostics, and real-time testing is conducted, the scientist/researcher is subject to improvising which materials to use. This often happens in real-time during testing.

- E.g. using metric-sized valves instead of imperial when connecting tubes to mitigate non-sealed connections in a fluidics system.
- Often researchers will prototype using custom 3D printed models to be used as parts for a project.

It's a good idea to test all edge cases, so that your software/hardware remains robust and fault-prone in any environment it is deployed to.

### Design

Design matters a lot. Good design and good taste is a proper ingredient in robust, research-grade scientific technologies and R&D software/hardware. I've worked with a lot of research instrumentation, and some controller/master softwares have interfaces and controllers that are hard to follow and are restricting. By design I do not exclusively mean graphics and UX, I also mean SW/HW design, which will downsample your user's learning curve by probably 80% if done right. The goal here is to design your product so that users don't need an instruction manual for it. Of course, with SDKs and more dependency-stacked programs, some decent documentation will be necessary to accelerate user productivity, but my takeaway here is to design things well, because it matters a lot.

Something fun I learned is that scientists/engineers really do name their research instruments with fancy names, almost always adding extensions like "1000" or "SA320" or some other strange code. Everything's so long. No wonder why scientists and researchers have so many abbreviations and acronyms.

### Capacity Building

Capacity building and R&D run concurrently together. In high-tiered research labs, it is common to face a very specific problem in a niche facet of scientific experimentation to which no widely distributed solution or suite of tools can solve. This is a regular occurence for a technical researcher—which is why to scientists, **scraps are gold**. We aren't allowed to make excuses for not being able to do something or achieve some targeted result, because we can build the capacity (the tools, instrumentation, algorithms, parts, or prototypes) to execute fast and get the desired outcome. While most of the tools, machinery, and parts that we need are readily available to us, frontier labs and startups often step into super niche potholes no one has made a solution for yet. Making things from scratch in order to do more than what was capable is a key element to doing great work.

This is also why deep tech development and new research engineering work are superlinear activities—there are many side quests you need to finish before you can complete the main quest. It's like gathering all of your ingredients to make a final dish that incorporates all of them.

Be careful not to fall in the trap of being satisfied with suboptimal solutions to these "side quests" of capacity building. Good design is still just as important, and is the differentiating factor between a mere scientific solution and a useable working prototype that looks good, works well, and is easy to operate.

---

_My greatest gratitude and thanks to Eben, Kidus, Cipta, Javad, Liang, and Richard for making my time at NRC memorable, and for showing me the magic of science._
