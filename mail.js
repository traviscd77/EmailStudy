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
    "difficulty": "subtle",
    "sender": "Carolina Student Accounts",
    "address": "studentaccounts@carolina-studentservices.com",
    "initials": "SA",
    "color": "green",
    "subject": "Fall semester refund preference review",
    "body": "<p>Hi Alex,</p><p>We’re reviewing refund delivery preferences for students whose fall aid has posted. Your profile is listed for confirmation before the next disbursement run.</p><p>Please review the refund destination currently listed in your profile and confirm that it should remain your default. You can update the details if you have changed accounts.</p><p><a href=\"#\" data-destination=\"https://carolina-studentservices.com/refunds/preferences\" title=\"https://carolina-studentservices.com/refunds/preferences\">Review refund preferences</a></p><p>Sign in with your Carolina account to view your profile. Please complete the review by Friday so any changes can be included in the next run.</p><p>Thank you,<br>Student Accounts<br>University of South Carolina</p>",
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
    "subject": "Study break special: large pizza + two sides for $14.99",
    "body": "<img class=\"email-image\" src=\"assets/student-pizza.png\" alt=\"A pepperoni pizza and two sides beside college study materials.\" loading=\"lazy\" decoding=\"async\"><p>Hi Alex,</p><p>Long study night? Pick up a large two-topping pizza and two sides for $14.99 at our College Avenue location. The student special runs through Sunday.</p><p><a href=\"#\" data-destination=\"https://campusslicedeals.com/student-special\" title=\"https://campusslicedeals.com/student-special\">View the student menu</a></p><p>Use code STUDYBREAK at checkout. Offer excludes delivery fees and cannot be combined with other coupons.</p><p>Campus Slice | 18 College Avenue<br>Student offers mailing list</p><p><a href=\"#\" data-destination=\"https://campusslicedeals.com/email-preferences\" title=\"https://campusslicedeals.com/email-preferences\">Email preferences / unsubscribe</a></p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:45:00",
    "label": "10:45 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
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
    "difficulty": "somewhat challenging",
    "sender": "Carolina Career Connections",
    "address": "careers@carolina-careers.org",
    "initials": "CC",
    "color": "blue",
    "subject": "Student research assistant opening — application details",
    "body": "<img class=\"email-image\" src=\"assets/student-study.png\" alt=\"A shared study table with laptops and research notes.\" loading=\"lazy\" decoding=\"async\"><p>Hi Alex,</p><p>A faculty research team has asked us to share a part-time student assistant opening with students interested in technology. The role involves organizing survey responses and checking entries in a research database, approximately 6–8 hours a week at $17 per hour.</p><p>The position description, supervisor contact, and availability form are in the applicant workspace below.</p><p><a href=\"#\" data-destination=\"https://careers.sc.edu.student-applicant-services.com/positions/ra-241\" title=\"https://careers.sc.edu.student-applicant-services.com/positions/ra-241\">View the research assistant position</a></p><p>Choose University sign-in and use your Carolina account to open the posting. Applications are reviewed as they arrive; the proposed start date is next month.</p><p>Best,<br>Career Connections<br>Student Employment | University of South Carolina</p>",
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
    "subject": "Looking for housing next year? Explore Vista Commons",
    "body": "<p>Hi Alex,</p><p>Still working out housing for next year? Take a look at Vista Commons Apartments in downtown Columbia.</p><p>Browse floor plans and current availability, then contact the leasing team if you would like to arrange a tour.</p><p><a href=\"#\" data-destination=\"https://www.vistacommons.com/availableunits\" title=\"https://www.vistacommons.com/availableunits\">See floor plans and availability</a></p><p>Planning with roommates? Compare your options and ask about lease terms before making a decision.</p><p><a href=\"#\" data-destination=\"https://www.vistacommons.com/contactus\" title=\"https://www.vistacommons.com/contactus\">Ask about availability or a tour</a></p><p>Vista Commons Apartments<br>1100 Pulaski St, Columbia, SC 29201</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:30:00",
    "label": "10:30 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
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
    "difficulty": "very difficult",
    "sender": "Sam Rivera",
    "address": "srivera@email.sc.edu",
    "initials": "SR",
    "color": "amber",
    "subject": "ITEC 101 group project — survey summary added",
    "body": "<p>Hey Alex,</p><p>I added the survey summary and the two charts we talked about to the project folder. The outline is the same version we’re using for tomorrow.</p><p><a href=\"#\" data-destination=\"https://blackboard.sc-edu.com/ultra/courses/_48231_1/groups/_1042_1/survey-summary\" title=\"https://blackboard.sc-edu.com/ultra/courses/_48231_1/groups/_1042_1/survey-summary\">Open the survey summary</a></p><p>Could you check the response totals and add your comments below the charts before we meet at 4? Jordan is working on the introduction.</p><p>Thanks,<br>Sam</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:20:00",
    "label": "10:20 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
  },
  {
    "id": "textbooks",
    "category": "spam",
    "sender": "BookLoop Student Savings",
    "address": "deals@booklooprentals.com",
    "initials": "BS",
    "color": "purple",
    "subject": "Before you buy next term’s books: compare rental prices",
    "body": "<p>Hi Alex,</p><p>Book lists are starting to appear for next term. Compare used copies, semester rentals, and e-book options before you order.</p><p><a href=\"#\" data-destination=\"https://booklooprentals.com/student-rentals\" title=\"https://booklooprentals.com/student-rentals\">Browse textbook rental offers</a></p><p>Selected rentals include free return shipping. Prices depend on title, edition, and availability. Sponsored offers from participating sellers may appear in search results.</p><p>BookLoop student promotions</p><p><a href=\"#\" data-destination=\"https://booklooprentals.com/preferences\" title=\"https://booklooprentals.com/preferences\">Manage email preferences</a></p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:15:00",
    "label": "10:15 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@email.sc.edu>"
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
  let folder='Inbox', selected='course', query='';
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
      const b=document.createElement('button');b.type='button';b.className=`message message-button ${e.id===selected?'selected':''} ${e.unread?'unread':''}`;b.dataset.emailId=e.id;
      b.setAttribute('aria-pressed',String(e.id===selected));
      b.innerHTML=`<span class="avatar ${e.color}" aria-hidden="true">${e.initials}</span><span class="message-info"><span class="message-top"><span class="sender"></span><time></time></span><span class="subject"></span><span class="preview"></span></span>`;
      b.querySelector('.sender').textContent=e.sender;b.querySelector('time').textContent=e.label;b.querySelector('time').dateTime=e.date;
      b.querySelector('.subject').textContent=e.subject;b.querySelector('.preview').textContent=textFromHTML(e.body);
      if(kept.has(e.id)){const badge=document.createElement('span');badge.className='report-badge keep-badge';badge.textContent='Kept';b.querySelector('.message-info').append(badge);}
      if(reports[e.id]){const badge=document.createElement('span');badge.className='report-badge';badge.textContent=reports[e.id]==='phishing'?'Reported as phishing':'Reported as junk';b.querySelector('.message-info').append(badge);}
      b.addEventListener('click',()=>select(e.id,true));li.append(b);list.append(li);
    });
    status.textContent=`${items.length} ${items.length===1?'email':'emails'} in ${folder}.`;
    updateFolders();
  }
  function renderReading(){
    const e=emails.find(e=>e.id===selected), items=visible(), index=items.findIndex(e=>e.id===selected);
    const has=!!e;
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
    const items=visible(),index=items.findIndex(item=>item.id===e.id);
    deleted.add(e.id);lastDeleted=e.id;persistDeleted();
    const remaining=visible();select(remaining[Math.min(index,remaining.length-1)]?.id||null);
    showDeleteFeedback(`Deleted “${e.subject}”. Moved to Deleted Items.${deletionStorageAvailable?'':' Saved for this session only.'}`,true);
    document.querySelector('#undo-delete').focus({preventScroll:true});
  });
  function restoreEmail(id){
    const e=emails.find(e=>e.id===id);if(!e||!deleted.has(id))return;
    deleted.delete(id);persistDeleted();
    if(lastDeleted===id)lastDeleted=null;
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
  reconcile();
})();
