COLLEGE STUDENT MAIL — INSTRUCTOR GUIDE
Stimulus version: carolina-v2

Open index.html with styles.css and mail.js in the same folder.
Exactly 10 fictional messages: 3 phishing, 3 unsolicited promotional/spam,
and 4 legitimate. Category and difficulty labels are hidden in the interface.
All begin in Inbox, interleaved in a fixed order, on a fresh session.

PARTICIPANT CONTEXT
The participant is Alex Morgan, a Carolina student at the University of
South Carolina in ITEC 101. Sam Rivera and Jordan are Alex's project partners.
Use @email.sc.edu for student addresses and @mailbox.sc.edu for staff/faculty
addresses in these samples. Individual names and exact mailboxes are fictional.
Verified campus service hosts used in the simulation:
- blackboard.sc.edu: Blackboard
- my.sc.edu: student services
- sc.edu/libraries/: library gateway (redirects to University Libraries)
Paths, document identifiers, appointments, and messages are authored stimuli,
not verified live resources, institutional procedures, or real communications.
The three promotional emails were not requested by Alex. This context is
available in the Campus context panel; standardize its presentation in a study.

PHISHING KEY — INTENDED DIFFICULTY, NOT VALIDATED
1. Fall semester refund preference review — subtle
   Sender: studentaccounts@carolina-studentservices.com
   Routine student-finance request with a normal processing deadline,
   personalized greeting, professional signature, and no overt threat.
   Observable cues: email and link use carolina-studentservices.com
   instead of the established sc.edu university domain. Campus sign-in is requested
   through that unapproved destination. Refund/bank-profile language gives
   a plausible pretext for a simulated account-access lure.

2. Student research assistant opening — application details
   Intended difficulty: somewhat challenging
   Sender: careers@carolina-careers.org
   Plausible student work, ordinary wages/hours, a faculty research context,
   and no extravagant pay, advance payment, or gift-card request.
   Observable cues: sender uses a different domain; link destination is
   careers.sc.edu.student-applicant-services.com. Its controlling
   domain is student-applicant-services.com, not sc.edu. A university
   sign-in is requested to view the posting. An unfamiliar recruitment
   service alone does not prove real-world fraud; here it is defined as an
   unauthorized credential lure by the fictional scenario's ground truth.

3. ITEC 101 group project — survey summary added — very difficult
   Displayed sender: srivera@email.sc.edu
   The exact displayed address also appears on the legitimate group message.
   This is a simulated spoofed-sender scenario, not evidence that a real
   account has been compromised or that the displayed sender is authenticated.
   Personalized peer message references the same project, group member,
   survey task, and 4 p.m. meeting as the legitimate thread context.
   Main visible cue: blackboard.sc-edu.com is under sc-edu.com rather than sc.edu. The
   familiar Blackboard label and campus-like domain are intentionally used
   to blend into the class-project context.
   The simulated target is defined as a credential-phishing destination;
   no landing page or credential form is implemented. Mail headers and
   authentication results are not available in this simulation.

JUNK / SPAM KEY
- Study break special: large pizza + two sides for $14.99
- Looking for housing next year? Explore Vista Commons
- Before you buy next term’s books: compare rental prices
These are authored unsolicited marketing messages in the simulation.
They have ordinary terms, promotional links, and unsubscribe links, without
impersonation or requests for campus credentials. This study's spam labels
refer to the unwanted commercial messages in Alex's stated context; marketing
content alone does not establish malicious intent.

LEGITIMATE KEY
- ITEC 101: case study materials for Thursday
  Course instructions from Dr. Maya Chen; established course-system link.
- Library reminder: your loan is due October 30
  Routine reminder and renewal link on the established library service.
- ITEC 101 group project — library at 4?
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
all reports. Deleted messages stay in Deleted Items. Reports persist in local browser storage, or only for the current session
when storage is blocked. Campus-v1 has a new storage key so earlier reports
do not carry over to this new content. Search and Previous/Next are available.
Delete moves a selected message to Deleted Items and shows a neutral confirmation
naming the message. Undo delete restores the most recently deleted message.
Deleted Items lets you read and restore any deleted message to Inbox. Deletions
persist in this browser, with a session-only fallback if storage is blocked.
Delete and reporting controls are disabled for deleted messages; restore first
to report them. Prior report labels are retained when restoring a message.
Reset reports does not clear deletions. Feedback does not reveal correctness.
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
are not a substitute for study data collection. Names, mailbox local parts, messages, and commercial brand identities are
fictional. The institutional name and legitimate service domains refer to
Carolina. Promotional and phishing domain strings were authored for the
simulation; their registration/ownership and live content were not verified.
They are not claims that any existing site or owner is malicious. They are
stored solely as inert tooltip text, never as navigable email links.

DOMAIN REVISION NOTES — CAROLINA-V2
This revision replaces the fictional university with Carolina, updates every
sender/recipient and simulated link, and starts with fresh report/deletion
storage keys. The intended 3/3/4 mix and difficulty labels are unchanged.
The most challenging cue is now blackboard.sc-edu.com versus blackboard.sc.edu,
not the former single-character substitution. Pilot the revised stimuli;
difficulty rankings do not automatically transfer between domain versions.

Official domain references (checked for this revision):
https://my.sc.edu/software/login
https://blackboard.sc.edu/
https://my.sc.edu/
https://sc.edu/libraries/

ITEC 101 AND IMAGE REVISION
All course references now use ITEC 101. Three messages contain locally hosted
images: the course announcement, research assistant phishing message, and pizza
promotion. Imagery appears across the three categories, but the set is not a
balanced image experiment. Pilot difficulty again after introducing visual cues.
Images have descriptive alt text and responsive dimensions. They load from
assets/ without external requests, tracking pixels, links, or clickable areas.
Keep assets/ with the HTML, CSS, and JavaScript when using the source offline.
This revision uses fresh report/deletion keys so old decisions do not carry over.

IMAGE ASSETS
assets/student-study.png: generated image of a college study table, used in
both the legitimate course announcement and simulated recruitment message.
assets/student-pizza.png: generated fictional pizza promotional photograph.
Both use the built-in image-generation tool. No official logos are included.
Prompt briefs: (1) realistic wide editorial image of laptops, notebooks, sticky
notes, and textbooks on a shared college library table, hands only, warm light,
subdued garnet accents, unreadable screens, no logos or text; (2) realistic wide
photo of pepperoni pizza in a plain box with two sides, beside study materials,
warm light, no logos or text. These are synthetic illustrations, not documentary
photographs of the University of South Carolina or a named vendor.

VISTA COMMONS UPDATE
The housing promotion now names Vista Commons Apartments at
1100 Pulaski St, Columbia, SC 29201, as requested. Its tooltip destinations
use the official site www.vistacommons.com. The email text and sender mailbox
leasing@vistacommons.com are simulated; the mailbox was not verified. This
is not an actual message or offer from the property. Earlier invented claims
about a shuttle, individual leases, and waived application fees were removed.
All links remain inactive and no external images or tracking were added.
Official reference: https://www.vistacommons.com/

KEEP FOLDER
Keep is an explicit alternative to reporting or deleting. The Keep button moves
the selected message into Keep and shows a neutral confirmation plus Kept badge.
Undo keep returns it to Inbox. Keep is available regardless of the true category;
no correctness feedback is given. Keeping removes a prior phishing/junk report,
and reporting a kept message removes its Keep status, so these choices do not
conflict. Reporting folders still follow the existing Inbox behavior.

Keep choices persist in this browser, with a session-only fallback if storage is
blocked. Deleted kept messages appear in Deleted Items; restoring returns them
to Keep. Restore deleted messages before attempting to keep or report them.
Reset reports clears report labels only; it does not clear Keep or Deleted Items.
All 10 messages remain recoverable across the folders. No centralized study data
collection or automatic accuracy scoring has been added.

PARTICIPANT COPY UPDATE
The sidebar uses the user's neutral instruction to decide what to do with each
message. Campus context no longer states that promotions were unsolicited or
explains hover behavior; its current rendered text is authoritative. The spam
labels in this instructor guide remain the authored ground truth for the set.
