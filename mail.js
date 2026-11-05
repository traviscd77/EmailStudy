/* Fictional local sample data. Edit this array to add or change emails. */
(() => {
  const emails = [
  {
    "id": "course",
    "category": "legitimate",
    "sender": "Dr. Maya Chen",
    "address": "mchen@mailbox.sc.edu",
    "initials": "MC",
    "color": "blue",
    "subject": "ITEC 101: case study materials for Thursday",
    "body": "<img class=\"email-image\" src=\"assets/student-study.png\" alt=\"Laptops, notebooks, and textbooks on a shared college study table.\" loading=\"lazy\" decoding=\"async\"><p>Hi everyone,</p><p>The case study for Thursday is now available in our course site. Read the two-page scenario and bring an example of how a campus organization uses information systems.</p><p><a href=\"#\" data-destination=\"https://blackboard.sc.edu/ultra/courses/_48231_1/outline\" title=\"https://blackboard.sc.edu/ultra/courses/_48231_1/outline\">Open Week 10 materials</a></p><p>We’ll work in the same groups as last week. One person from each group should upload your notes by 5 p.m. Friday.</p><p>Best,<br>Maya Chen<br>Information Technology<br>University of South Carolina</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:55:00",
    "label": "10:55 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  },
  {
    "id": "refund",
    "category": "phishing",
    "difficulty": "easy",
    "sender": "Carolina Student Accounts",
    "address": "studentaccounts@carolina-studentservices.com",
    "initials": "SA",
    "color": "green",
    "subject": "Action required today: confirm your refund before 5 p.m.",
    "body": "<section class=\"message-card\"><div class=\"message-brand garnet-brand\">UNIVERSITY OF SOUTH CAROLINA<span>Student Accounts</span></div><div class=\"message-card-content\"><p class=\"message-eyebrow\">FALL 2026 · REFUND DELIVERY</p><p>Hi Alex,</p><p>Your fall semester refund is ready for processing, but the delivery preference on your student account still requires verification.</p><p><strong>Confirm your refund destination by 5:00 p.m. today, Tuesday, October 27.</strong> If confirmation is not received, your payment will be placed on hold and moved to the next processing cycle.</p><p>Use the secure review below to sign in with your Carolina username and password and confirm the bank account listed for direct deposit.</p><p><a href=\"#\" data-destination=\"https://carolina-studentservices.com/refunds/preferences\" title=\"https://carolina-studentservices.com/refunds/preferences\" class=\"message-cta\">Confirm refund delivery</a></p><p class=\"message-reference\">Student account reference: RF-2026-10482<br>Review deadline: October 27, 2026, 5:00 p.m.</p><p>Student Accounts<br>University of South Carolina</p></div><div class=\"message-footer\">This is an automated account notification. Replies to this message are not monitored.</div></section>",
    "folder": "Inbox",
    "date": "2026-10-27T10:50:00",
    "label": "10:50 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  },
  {
    "id": "pizza",
    "category": "spam",
    "sender": "Campus Slice Deals",
    "address": "offers@campusslicedeals.com",
    "initials": "CS",
    "color": "amber",
    "subject": "Tonight only: large pizza + two sides for $14.99",
    "body": "<section class=\"message-card\"><div class=\"message-brand pizza-brand\">CAMPUS SLICE<span>Your study break, sorted.</span></div><img class=\"email-image promotion-image\" src=\"assets/student-pizza.png\" alt=\"A pepperoni pizza and two sides beside college study materials.\" loading=\"lazy\" decoding=\"async\"><div class=\"message-card-content\"><p class=\"message-eyebrow\">STUDENT NIGHT SPECIAL</p><h3 class=\"promotion-headline\">Large pizza. Two sides. $14.99.</h3><p>Hi Alex,</p><p>Close the laptop for a minute. Dinner is covered with a large two-topping pizza and your choice of two sides from our College Avenue location.</p><p><strong>Order by 11:59 p.m. tonight</strong> and enter <strong>STUDYBREAK</strong> at checkout.</p><p><a href=\"#\" data-destination=\"https://campusslicedeals.com/student-special\" title=\"https://campusslicedeals.com/student-special\" class=\"message-cta\">See tonight’s special</a></p><p class=\"message-reference\">Pickup only. Excludes tax and delivery fees. Participating location only. Cannot be combined with other offers.</p></div><div class=\"message-footer\">Campus Slice · 18 College Avenue, Columbia, SC<br>Advertisement · Student offers mailing list<br><a href=\"#\" data-destination=\"https://campusslicedeals.com/email-preferences\" title=\"https://campusslicedeals.com/email-preferences\">Email preferences / unsubscribe</a></div></section>",
    "folder": "Inbox",
    "date": "2026-10-27T10:45:00",
    "label": "10:45 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>",
    "difficulty": "easy"
  },
  {
    "id": "library",
    "category": "legitimate",
    "sender": "University Libraries",
    "address": "circulation@mailbox.sc.edu",
    "initials": "LL",
    "color": "purple",
    "subject": "Library reminder: your loan is due October 30",
    "body": "<p>Hi Alex,</p><p>A quick reminder that <em>Information Systems in Organizations</em> is due Friday, October 30. If you need more time, you can check renewal availability in your library account.</p><p><a href=\"#\" data-destination=\"https://sc.edu/libraries/\" title=\"https://sc.edu/libraries/\">View your loans and renewal options</a></p><p>Renewals depend on whether another borrower has requested the item. Return bins are located at the main entrance and by the student center.</p><p>Access Services<br>University of South Carolina Libraries</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:40:00",
    "label": "10:40 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  },
  {
    "id": "campus-job",
    "category": "phishing",
    "difficulty": "medium",
    "sender": "Carolina Career Connections",
    "address": "careers@carolina-careers.org",
    "initials": "CC",
    "color": "blue",
    "subject": "Research assistant shortlist — availability needed by 2 p.m.",
    "body": "<section class=\"message-card\"><div class=\"message-brand neutral-brand\">Carolina Career Connections<span>Student employment opportunities</span></div><div class=\"message-card-content\"><p>Hi Alex,</p><p>We’re helping a faculty research team finalize its shortlist for a paid student assistant position. Your technology coursework appears to match the team’s needs.</p><p>The assistant will organize survey responses and check entries in a research database. The position is 6–8 hours per week at $17 per hour, with scheduling around classes.</p><p><strong>The team is setting interview times this afternoon.</strong> If you would like to be considered, review the position details and submit your availability by <strong>2:00 p.m. today</strong>.</p><p><a href=\"#\" data-destination=\"https://careers.sc.edu.student-applicant-services.com/positions/ra-241\" title=\"https://careers.sc.edu.student-applicant-services.com/positions/ra-241\" class=\"message-cta\">View position and submit availability</a></p><p>Select <em>University sign-in</em> and use your Carolina account to access the applicant workspace. The position description, supervisor information, and scheduling form are available there.</p><p>Best,<br>Carolina Career Connections<br>Student Employment | University of South Carolina</p><p class=\"message-reference\">Position reference: RA-241 · Fall 2026</p></div></section>",
    "folder": "Inbox",
    "date": "2026-10-27T10:35:00",
    "label": "10:35 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  },
  {
    "id": "apartments",
    "category": "spam",
    "sender": "Vista Commons Apartments",
    "address": "leasing@vistacommons.com",
    "initials": "VC",
    "color": "green",
    "subject": "Alex, planning housing for next year?",
    "body": "<p>Hi Alex,</p><p>I’m Morgan with the leasing team at Vista Commons. With students beginning to compare housing for next year, I wanted to introduce our downtown community.</p><p>We have one- and two-bedroom layouts, study areas, and options for students planning with roommates. You can review floor plans and current availability here:</p><p><a href=\"#\" data-destination=\"https://www.vistacommons.com/availableunits\" title=\"https://www.vistacommons.com/availableunits\">Vista Commons — floor plans and availability</a></p><p>We have a few tour appointments available Thursday and Friday. If one of those days works for you, you can choose a time below. There’s no obligation to apply.</p><p><a href=\"#\" data-destination=\"https://www.vistacommons.com/contactus\" title=\"https://www.vistacommons.com/contactus\">View available tour times</a></p><p>Best,<br>Morgan Ellis<br>Leasing Team | Vista Commons Apartments<br>1100 Pulaski St, Columbia, SC 29201</p><p class=\"message-reference\">This message is part of our student housing outreach. Availability and lease terms may change. <a href=\"#\" data-destination=\"https://www.vistacommons.com/email-preferences\" title=\"https://www.vistacommons.com/email-preferences\">Opt out of leasing emails</a></p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:30:00",
    "label": "10:30 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>",
    "difficulty": "medium"
  },
  {
    "id": "study-group",
    "category": "legitimate",
    "sender": "Sam Rivera",
    "address": "srivera@email.sc.edu",
    "initials": "SR",
    "color": "amber",
    "subject": "ITEC 101 group project — library at 4?",
    "body": "<p>Hey Alex,</p><p>Could you meet in the library at 4 tomorrow to finish our project outline? Jordan said they can join after class.</p><p>I put the latest outline and task list in our shared folder: <a href=\"#\" data-destination=\"https://blackboard.sc.edu/ultra/courses/_48231_1/groups/_1042_1/project-outline\" title=\"https://blackboard.sc.edu/ultra/courses/_48231_1/groups/_1042_1/project-outline\">Group 4 project outline</a>.</p><p>I’ll take the data privacy section. Could you check the survey summary and add a couple of points about the information system we chose?</p><p>Thanks,<br>Sam</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:25:00",
    "label": "10:25 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  },
  {
    "id": "shared-notes",
    "category": "phishing",
    "difficulty": "hard",
    "sender": "Sam Rivera",
    "address": "srivera@email.sc.edu",
    "initials": "SR",
    "color": "amber",
    "subject": "ITEC 101 group project — quick check before we meet?",
    "body": "<p>Hey Alex,</p><p>I added the survey summary and the two charts to our project folder. Jordan is finishing the introduction, so this should be the last piece we need before we put the slides together.</p><p>Could you check the response totals and add your comments by 3 tomorrow? That gives me a little time to update the charts before we meet in the library at 4.</p><p><a href=\"#\" data-destination=\"https://blackboard.sc-edu.com/ultra/courses/_48231_1/groups/_1042_1/survey-summary\" title=\"https://blackboard.sc-edu.com/ultra/courses/_48231_1/groups/_1042_1/survey-summary\">Group 4 — survey summary and charts</a></p><p>The folder may ask you to sign in again with your Carolina account; I had to do that when I opened it this morning.</p><p>Thanks!<br>Sam</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:20:00",
    "label": "10:20 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  },
  {
    "id": "textbooks",
    "category": "spam",
    "sender": "BookLoop Campus Brief",
    "address": "deals@booklooprentals.com",
    "initials": "BS",
    "color": "purple",
    "subject": "Spring course materials: a short planning checklist",
    "body": "<section class=\"message-card\"><div class=\"message-brand newsletter-brand\">BookLoop Campus Brief<span>Practical notes for the next semester</span></div><div class=\"message-card-content\"><p class=\"message-eyebrow\">OCTOBER 27, 2026 · COURSE MATERIALS</p><p>Hi Alex,</p><p>As spring registration approaches, a little preparation can make it easier to budget for course materials.</p><ol class=\"newsletter-checklist\"><li>Check the required edition and ISBN before comparing prices.</li><li>Confirm whether your course needs a new access code; a used book may not include one.</li><li>Compare the total cost of buying, renting, and digital access, including return shipping.</li></ol><p>Our student rental guide brings those options together, with selected offers from participating sellers.</p><p><a href=\"#\" data-destination=\"https://booklooprentals.com/student-rentals\" title=\"https://booklooprentals.com/student-rentals\">Compare course material options</a></p><p>Some participating sellers are offering early rental rates through Friday. Availability and pricing depend on the title and edition.</p><p>The BookLoop team</p></div><div class=\"message-footer\">BookLoop Student Savings · Independent course materials marketplace<br>Commercial newsletter · Sponsored seller listings may appear in the guide. BookLoop is not affiliated with the university.<br><a href=\"#\" data-destination=\"https://booklooprentals.com/preferences\" title=\"https://booklooprentals.com/preferences\">Manage preferences or unsubscribe</a></div></section>",
    "folder": "Inbox",
    "date": "2026-10-27T10:15:00",
    "label": "10:15 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>",
    "difficulty": "hard"
  },
  {
    "id": "advising",
    "category": "legitimate",
    "sender": "Elena Brooks",
    "address": "ebrooks@mailbox.sc.edu",
    "initials": "EB",
    "color": "blue",
    "subject": "Your advising appointment: Wednesday at 10:30",
    "body": "<p>Hi Alex,</p><p>Your advising appointment is confirmed for Wednesday, October 28, at 10:30 a.m. in Student Services 214. We’ll review your planned spring courses and check prerequisite requirements.</p><p>Please look over your <a href=\"#\" data-destination=\"https://my.sc.edu/\" title=\"https://my.sc.edu/\">degree progress report</a> beforehand and bring any questions about registration.</p><p>If you need a different time, reply to this message and we’ll find another appointment.</p><p>Best,<br>Elena Brooks<br>Academic Advising | University of South Carolina</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:10:00",
    "label": "10:10 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  }
];
  // Neutral, stable filenames identify stimuli without exposing their categories.
  const pages = Object.fromEntries(emails.map((email, index) =>
    [email.id, `email-${String(index + 1).padStart(2, '0')}.html`]));
  const filename = location.pathname.split('/').pop();
  const pageEmail = emails.find(email => pages[email.id] === filename);
  const viewKey = 'sample-mail-linked-view-v1';
  let folder='Inbox', selected=pageEmail?.id || 'course', query='';
  try {
    const view = JSON.parse(sessionStorage.getItem(viewKey) || '{}');
    if (['Inbox', 'Keep', 'Deleted Items', 'Reported Phishing', 'Junk Email'].includes(view.folder)) folder=view.folder;
    if (typeof view.query === 'string') query=view.query;
  } catch { /* Navigation works even when session storage is unavailable. */ }
  function saveView(){
    try { sessionStorage.setItem(viewKey, JSON.stringify({folder, query})); } catch {}
  }
  function messageURL(id){ return pages[id]; }
  function openMessage(id){ saveView(); location.assign(messageURL(id)); }

  const storageKey='sample-mail-reports-carolina-v2';
  let reports={};
  let storageAvailable=true;
  try {
    const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');
    if(saved&&typeof saved==='object'&&!Array.isArray(saved)) {
      emails.forEach(e=>{if(['phishing','junk'].includes(saved[e.id]))reports[e.id]=saved[e.id];});
    }
  } catch { storageAvailable=false; }
  function persist(){try{localStorage.setItem(storageKey,JSON.stringify(reports));}catch{storageAvailable=false;}}
  const deletedStorageKey='sample-mail-deleted-carolina-v2';
  let deleted=new Set();
  let deletionStorageAvailable=true;
  let lastDeleted=null;
  try { lastDeleted=sessionStorage.getItem('sample-mail-last-deleted-v1'); } catch {}
  try {
    const saved=JSON.parse(localStorage.getItem(deletedStorageKey)||'[]');
    if(Array.isArray(saved))deleted=new Set(saved.filter(id=>emails.some(e=>e.id===id)));
  } catch { deletionStorageAvailable=false; }
  function persistDeleted(){try{localStorage.setItem(deletedStorageKey,JSON.stringify([...deleted]));}catch{deletionStorageAvailable=false;}}
  const keptStorageKey='sample-mail-kept-carolina-v2';
  let kept=new Set();
  let keepStorageAvailable=true;
  try {
    const saved=JSON.parse(localStorage.getItem(keptStorageKey)||'[]');
    if(Array.isArray(saved))kept=new Set(saved.filter(id=>emails.some(e=>e.id===id)&&!reports[id]));
  } catch { keepStorageAvailable=false; }
  function persistKept(){try{localStorage.setItem(keptStorageKey,JSON.stringify([...kept]));}catch{keepStorageAvailable=false;}}
  const keepButton=document.querySelector('#keep-email');
  const deleteButton=document.querySelector('#delete-email');
  const reportPhishing=document.querySelector('#report-phishing');
  const reportJunk=document.querySelector('#report-junk');
  const list=document.querySelector('.message-list');
  const pane=document.querySelector('.reading-pane');
  const status=document.querySelector('#mail-status');
  const buttons=[...document.querySelectorAll('.folder')];
  const folderNames=buttons.map(b=>b.textContent.trim().replace(/\s*\d+$/, ''));
  const textFromHTML=html=>{const t=document.createElement('div');t.innerHTML=html;return t.textContent.replace(/\s+/g,' ').trim();};
  const inFolder=(e,name)=>deleted.has(e.id)?name==='Deleted Items':kept.has(e.id)?name==='Keep':(name==='Inbox'||(name==='Reported Phishing'&&reports[e.id]==='phishing')||(name==='Junk Email'&&reports[e.id]==='junk'));
  const visible=()=>emails.filter(e=>inFolder(e,folder) && (!query||`${e.sender} ${e.address} ${e.subject} ${textFromHTML(e.body)}`.toLowerCase().includes(query)));
  function updateFolders(){
    buttons.forEach((b,i)=>{
      const name=folderNames[i], count=emails.filter(e=>inFolder(e,name)).length;
      b.replaceChildren();const label=document.createElement('span');label.textContent=name;b.append(label);
      if(count){const badge=document.createElement('span');badge.className='folder-count';badge.textContent=count;b.append(badge);}
      b.classList.toggle('active',name===folder);
      if(name===folder)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
    });
  }
  function renderList(){
    list.replaceChildren();
    const items=visible();
    if(!items.length){const li=document.createElement('li');li.className='empty-list';li.textContent='No emails match your search or filter.';list.append(li);}
    items.forEach(e=>{
      const li=document.createElement('li');
      const b=document.createElement('a');b.href=messageURL(e.id);b.className=`message message-button ${e.id===selected?'selected':''} ${e.unread?'unread':''}`;b.dataset.emailId=e.id;
      if(e.id===selected)b.setAttribute('aria-current','page');
      b.innerHTML=`<span class="avatar ${e.color}" aria-hidden="true">${e.initials}</span><span class="message-info"><span class="message-top"><span class="sender"></span><time></time></span><span class="subject"></span><span class="preview"></span></span>`;
      b.querySelector('.sender').textContent=e.sender;b.querySelector('time').textContent=e.label;b.querySelector('time').dateTime=e.date;
      b.querySelector('.subject').textContent=e.subject;b.querySelector('.preview').textContent=textFromHTML(e.body);
      if(kept.has(e.id)){const badge=document.createElement('span');badge.className='report-badge keep-badge';badge.textContent='Kept';b.querySelector('.message-info').append(badge);}
      if(reports[e.id]){const badge=document.createElement('span');badge.className='report-badge';badge.textContent=reports[e.id]==='phishing'?'Reported as phishing':'Reported as junk';b.querySelector('.message-info').append(badge);}
      b.addEventListener('click',()=>saveView());li.append(b);list.append(li);
    });
    status.textContent=`${items.length} ${items.length===1?'email':'emails'} in ${folder}.`;
    updateFolders();
  }
  function renderReading(){
    const e=emails.find(e=>e.id===selected), items=visible(), index=items.findIndex(e=>e.id===selected);
    const has=!!e;
    document.title=has?`${e.subject} | Student Mail`:'Student Mail | Inbox';
    document.querySelector('#email-subject').textContent=has?e.subject:'No email selected';
    document.querySelector('.email-header').hidden=!has;
    document.querySelector('.email-body').innerHTML=has?e.body:'<p>Select a folder or change your search to view sample emails.</p>';
    document.querySelector('#message-position').textContent=has?`${index+1} of ${items.length}`:'0 emails';
    document.querySelector('#previous-email').disabled=index<=0;
    document.querySelector('#next-email').disabled=index<0||index>=items.length-1;
    keepButton.disabled=!has||deleted.has(e?.id)||kept.has(e?.id);
    const isKept=has&&kept.has(e.id)&&!deleted.has(e.id);
    document.querySelector('#keep-banner').hidden=!isKept;
    document.querySelector('#keep-confirmation').textContent=isKept?`Kept in the Keep folder. ${keepStorageAvailable?'Saved in this browser.':'Saved for this session only.'}`:'';
    document.querySelector('#restore-email').textContent=has&&kept.has(e.id)?'Restore to Keep':'Restore to Inbox';
    deleteButton.disabled=!has||deleted.has(e?.id);
    document.querySelector('#deleted-banner').hidden=!has||!deleted.has(e?.id);
    reportPhishing.disabled=!has||deleted.has(e?.id)||reports[e?.id]==='phishing';
    reportJunk.disabled=!has||deleted.has(e?.id)||reports[e?.id]==='junk';
    const report=has?reports[e.id]:null;
    document.querySelector('#report-banner').hidden=!report;
    document.querySelector('#report-confirmation').textContent=report?`Reported as ${report}. ${storageAvailable?'Saved in this browser.':'Saved for this session only.'}`:'';
    document.querySelector('#report-summary').textContent=`${Object.values(reports).filter(x=>x==='phishing').length} reported as phishing · ${Object.values(reports).filter(x=>x==='junk').length} reported as junk`;
    if(!e)return;
    const header=document.querySelector('.email-header');
    header.querySelector('.avatar').className=`avatar ${e.color}`;header.querySelector('.avatar').textContent=e.initials;
    header.querySelector('strong').textContent=e.sender;header.querySelector('.email-address').textContent=`<${e.address}>`;
    header.querySelector('.recipients').textContent=`To: ${e.recipients||'Alex Morgan'}`;
    const date=new Date(e.date);header.querySelector('time').dateTime=e.date;
    header.querySelector('time').textContent=new Intl.DateTimeFormat('en-US',{weekday:'short',month:'numeric',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'}).format(date);
  }
  function select(id,focus=false){
    if(id && pageEmail?.id !== id){openMessage(id);return;}
    saveView();
    selected=id;const e=emails.find(e=>e.id===id);if(e)e.unread=false;
    renderList();renderReading();pane.scrollTop=0;
    if(e){status.textContent=`Opened ${e.subject} from ${e.sender}.`;if(focus)list.querySelector(`[data-email-id="${id}"]`)?.focus({preventScroll:true});}
  }
  function reconcile(){const items=visible();select(items.some(e=>e.id===selected)?selected:items[0]?.id||null);}
  buttons.forEach((b,i)=>b.addEventListener('click',()=>{folder=folderNames[i];document.querySelector('#inbox-heading').textContent=folder;reconcile();}));
  document.querySelector('#search').addEventListener('input',e=>{query=e.target.value.toLowerCase().trim();reconcile();});
  document.querySelector('#previous-email').addEventListener('click',()=>navigate(-1));
  document.querySelector('#next-email').addEventListener('click',()=>navigate(1));
  function navigate(delta){const items=visible();const i=items.findIndex(e=>e.id===selected);const next=items[i+delta];if(next)select(next.id);}
  // Reporting records the user's choice, without revealing the answer key.
  function reportAs(type){
    if(!selected||deleted.has(selected))return;
    const e=emails.find(e=>e.id===selected);
    kept.delete(selected);persistKept();
    reports[selected]=type;persist();
    // Keep the selected message visible when changing a report in a report folder.
    if(!inFolder(e,folder)){folder='Inbox';document.querySelector('#inbox-heading').textContent=folder;}
    renderList();renderReading();
    status.textContent=`${e.subject}: reported as ${type}.`;
    document.querySelector('#undo-report').focus({preventScroll:true});
  }
  reportPhishing.addEventListener('click',()=>reportAs('phishing'));
  reportJunk.addEventListener('click',()=>reportAs('junk'));
  document.querySelector('#undo-report').addEventListener('click',()=>{
    const e=emails.find(e=>e.id===selected);if(!e)return;
    delete reports[selected];persist();
    if(!inFolder(e,folder)){folder='Inbox';document.querySelector('#inbox-heading').textContent=folder;}
    renderList();renderReading();status.textContent=`Report removed for ${e.subject}.`;
    reportPhishing.focus({preventScroll:true});
  });
  document.querySelector('#reset-reports').addEventListener('click',()=>{
    reports={};persist();folder='Inbox';query='';selected=emails[0].id;
    document.querySelector('#search').value='';document.querySelector('#inbox-heading').textContent=folder;
    reconcile();status.textContent='All reports cleared. Deleted emails remain in Deleted Items.';
  });
  function showDeleteFeedback(message,canUndo=false){
    document.querySelector('#delete-feedback-text').textContent=message;
    document.querySelector('#delete-feedback').hidden=false;
    document.querySelector('#undo-delete').hidden=!canUndo;
    status.textContent=message;
  }
  deleteButton.addEventListener('click',()=>{
    const e=emails.find(e=>e.id===selected);if(!e||deleted.has(e.id))return;
    deleted.add(e.id);lastDeleted=e.id;persistDeleted();
    try { sessionStorage.setItem('sample-mail-last-deleted-v1', lastDeleted); } catch {}
    folder='Deleted Items';query='';document.querySelector('#search').value='';
    document.querySelector('#inbox-heading').textContent=folder;select(e.id);
    showDeleteFeedback(`Deleted “${e.subject}”. Moved to Deleted Items.${deletionStorageAvailable?'':' Saved for this session only.'}`,true);
    document.querySelector('#undo-delete').focus({preventScroll:true});
  });
  function restoreEmail(id){
    const e=emails.find(e=>e.id===id);if(!e||!deleted.has(id))return;
    deleted.delete(id);persistDeleted();
    if(lastDeleted===id){lastDeleted=null;try{sessionStorage.removeItem('sample-mail-last-deleted-v1');}catch{}}
    folder=kept.has(id)?'Keep':'Inbox';query='';document.querySelector('#search').value='';
    document.querySelector('#inbox-heading').textContent=folder;select(id);
    showDeleteFeedback(`Restored “${e.subject}” to ${folder}.${deletionStorageAvailable?'':' Saved for this session only.'}`);
    list.querySelector(`[data-email-id="${id}"]`)?.focus({preventScroll:true});
  }
  document.querySelector('#undo-delete').addEventListener('click',()=>restoreEmail(lastDeleted));
  document.querySelector('#restore-email').addEventListener('click',()=>restoreEmail(selected));
  keepButton.addEventListener('click',()=>{
    const e=emails.find(e=>e.id===selected);if(!e||deleted.has(e.id)||kept.has(e.id))return;
    delete reports[e.id];persist();kept.add(e.id);persistKept();
    folder='Keep';document.querySelector('#inbox-heading').textContent=folder;
    document.querySelector('#delete-feedback').hidden=true;
    select(e.id);status.textContent=`Kept “${e.subject}” in the Keep folder.`;
    document.querySelector('#undo-keep').focus({preventScroll:true});
  });
  document.querySelector('#undo-keep').addEventListener('click',()=>{
    const e=emails.find(e=>e.id===selected);if(!e||!kept.has(e.id)||deleted.has(e.id))return;
    kept.delete(e.id);persistKept();folder='Inbox';query='';document.querySelector('#search').value='';
    document.querySelector('#inbox-heading').textContent=folder;select(e.id);
    status.textContent=`Keep removed for “${e.subject}”. Returned to Inbox.`;
    keepButton.focus({preventScroll:true});
  });
  document.querySelectorAll('.toolbar button').forEach(b=>{
    if(b===reportPhishing||b===reportJunk||b===deleteButton||b===keepButton)return;
    b.disabled=true;b.title='This action is unavailable in the sample inbox.';
  });
  // All message links are placeholders. Hover shows the fictional destination.
  function keepLinkInactive(event){
    if(event.target.closest('a'))event.preventDefault();
  }
  document.querySelector('.email-body').addEventListener('click',keepLinkInactive);
  document.querySelector('.email-body').addEventListener('auxclick',keepLinkInactive);
  // A direct link always opens its own email, including after categorization.
  const initial=emails.find(e=>e.id===selected);
  if(!inFolder(initial,folder)) folder=deleted.has(selected)?'Deleted Items':kept.has(selected)?'Keep':'Inbox';
  if(query && !visible().some(e=>e.id===selected))query='';
  document.querySelector('#search').value=query;
  document.querySelector('#inbox-heading').textContent=folder;
  if(pageEmail)select(selected);else reconcile();
})();