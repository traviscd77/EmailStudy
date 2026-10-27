COLLEGE STUDENT MAIL — INSTRUCTOR GUIDE
Stimulus version: campus-v1

Open index.html with styles.css and mail.js in the same folder.
Exactly 10 fictional messages: 3 phishing, 3 unsolicited promotional/spam,
and 4 legitimate. Category and difficulty labels are hidden in the interface.
All begin in Inbox, interleaved in a fixed order.

PARTICIPANT CONTEXT
The participant is Alex Morgan, a Lakeview University student in CIS 205.
Sam Rivera and Jordan are in Alex's class project group. The established
university email domain is lakeview.example. Campus services are:
- learn.lakeview.example: courses
- files.lakeview.example: shared documents
- portal.lakeview.example: student services
- library.lakeview.example: library
The three promotional emails were not requested by Alex. This context is
available in the Campus context panel; standardize its presentation in a study.

PHISHING KEY — INTENDED DIFFICULTY, NOT VALIDATED
1. Fall semester refund preference review — subtle
   Sender: studentaccounts@lakeview-studentservices.example
   Routine student-finance request with a normal processing deadline,
   personalized greeting, professional signature, and no overt threat.
   Observable cues: email and link use lakeview-studentservices.example
   instead of the established campus domain. Campus sign-in is requested
   through that unapproved destination. Refund/bank-profile language gives
   a plausible pretext for a simulated account-access lure.

2. Student research assistant opening — application details
   Intended difficulty: somewhat challenging
   Sender: careers@lakeview-careers.example
   Plausible student work, ordinary wages/hours, a faculty research context,
   and no extravagant pay, advance payment, or gift-card request.
   Observable cues: sender uses a different domain; link destination is
   careers.lakeview.example.applicant-services.example. Its controlling
   domain is applicant-services.example, not lakeview.example. A university
   sign-in is requested to view the posting. An unfamiliar recruitment
   service alone does not prove real-world fraud; here it is defined as an
   unauthorized credential lure by the fictional scenario's ground truth.

3. CIS 205 group project — survey summary added — very difficult
   Displayed sender: srivera@lakeview.example
   The exact displayed address also appears on the legitimate group message.
   This is a simulated spoofed-sender scenario, not evidence that a real
   account has been compromised or that the displayed sender is authenticated.
   Personalized peer message references the same project, group member,
   survey task, and 4 p.m. meeting as the legitimate thread context.
   Main visible cue: files.lakevlew.example uses a lowercase l where the i
   appears in the established files.lakeview.example document host.
   The simulated target is defined as a credential-phishing destination;
   no landing page or credential form is implemented. Mail headers and
   authentication results are not available in this simulation.

JUNK / SPAM KEY
- Study break special: large pizza + two sides for $14.99
- Looking for roommates next year? Tour The Landing
- Before you buy next term’s books: compare rental prices
These are unsolicited marketing messages from fictional commercial senders.
They have ordinary terms, promotional links, and unsubscribe links, without
impersonation or requests for campus credentials. This study's spam labels
refer to the unwanted commercial messages in Alex's stated context; marketing
content alone does not establish malicious intent.

LEGITIMATE KEY
- CIS 205: case study materials for Thursday
  Course instructions from Dr. Maya Chen; established course-system link.
- Library reminder: your loan is due October 30
  Routine reminder and renewal link on the established library service.
- CIS 205 group project — library at 4?
  Sam Rivera's project coordination with an established shared-document link.
- Your advising appointment: Wednesday at 10:30
  Advising confirmation and degree-progress link on the established portal.

LINK AND REPORT BEHAVIOR
Every email contains at least one link. Links have placeholder href="#"
targets and do not navigate or open a dialog. The fictional destination is
stored in data-destination and shown by the native title tooltip on hover.
The status bar and Copy link address show the placeholder rather than the
fictional destination. Keep tooltip instructions and device/input conditions
consistent; hover behavior is not equivalent on touch devices.

Report phishing / Report junk records a participant's choice, not a score.
Badges, confirmations, and report folders reflect that choice. All 10 messages
remain accessible in Inbox. Undo removes one report; Reset reports removes
all. Reports persist in local browser storage, or only for the current session
when storage is blocked. Campus-v1 has a new storage key so earlier reports
do not carry over to this new content. Search and Previous/Next are available.
Other toolbar actions are disabled. No real messages are sent or received.

RESEARCH NOTES
The three difficulty levels are author intentions, not measured results.
Pilot with the target student population to estimate detection accuracy,
false positives, time, and confidence. One item per level cannot distinguish
difficulty from topic, sender, length, or familiarity. A larger matched set
would be needed to support general conclusions about difficulty.
All four legitimate emails contain contextual links, so link presence alone
cannot identify phishing. This does not make the set fully matched. The fixed
order and classmate-context pairing may affect responses; account for these
features in the study design before collecting data.

The answer key is inspectable in the source; this is not a secure assessment.
No participant identifiers, confidence ratings, response-time collection,
click logging, or centralized results are implemented. Browser-local reports
are not a substitute for study data collection. All identities, university
names, and addresses are fictional; destinations use reserved .example names.
