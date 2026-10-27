/* Fictional local sample data. Edit this array to add or change emails. */
(() => {
  const emails = [
  {
    "id": "course",
    "category": "legitimate",
    "sender": "Dr. Maya Chen",
    "address": "mchen@lakeview.example",
    "initials": "MC",
    "color": "blue",
    "subject": "CIS 205: case study materials for Thursday",
    "body": "<p>Hi everyone,</p><p>The case study for Thursday is now available in our course site. Read the two-page scenario and bring an example of how a campus organization uses information systems.</p><p><a href=\"#\" data-destination=\"https://learn.lakeview.example/courses/cis205/modules/week-10\" title=\"https://learn.lakeview.example/courses/cis205/modules/week-10\">Open Week 10 materials</a></p><p>We’ll work in the same groups as last week. One person from each group should upload your notes by 5 p.m. Friday.</p><p>Best,<br>Maya Chen<br>Department of Information Systems<br>Lakeview University</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:55:00",
    "label": "10:55 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "refund",
    "category": "phishing",
    "difficulty": "subtle",
    "sender": "Lakeview Student Accounts",
    "address": "studentaccounts@lakeview-studentservices.example",
    "initials": "SA",
    "color": "green",
    "subject": "Fall semester refund preference review",
    "body": "<p>Hi Alex,</p><p>We’re reviewing refund delivery preferences for students whose fall aid has posted. Your profile is listed for confirmation before the next disbursement run.</p><p>Please review the refund destination currently listed in your profile and confirm that it should remain your default. You can update the details if you have changed accounts.</p><p><a href=\"#\" data-destination=\"https://lakeview-studentservices.example/refunds/preferences\" title=\"https://lakeview-studentservices.example/refunds/preferences\">Review refund preferences</a></p><p>Sign in with your Lakeview account to view your profile. Please complete the review by Friday so any changes can be included in the next run.</p><p>Thank you,<br>Student Accounts<br>Lakeview University</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:50:00",
    "label": "10:50 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "pizza",
    "category": "spam",
    "sender": "Campus Slice Deals",
    "address": "offers@campus-slice.example",
    "initials": "CS",
    "color": "amber",
    "subject": "Study break special: large pizza + two sides for $14.99",
    "body": "<p>Hi Alex,</p><p>Long study night? Pick up a large two-topping pizza and two sides for $14.99 at our College Avenue location. The student special runs through Sunday.</p><p><a href=\"#\" data-destination=\"https://campus-slice.example/student-special\" title=\"https://campus-slice.example/student-special\">View the student menu</a></p><p>Use code STUDYBREAK at checkout. Offer excludes delivery fees and cannot be combined with other coupons.</p><p>Campus Slice | 18 College Avenue<br>Student offers mailing list</p><p><a href=\"#\" data-destination=\"https://campus-slice.example/email-preferences\" title=\"https://campus-slice.example/email-preferences\">Email preferences / unsubscribe</a></p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:45:00",
    "label": "10:45 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "library",
    "category": "legitimate",
    "sender": "Lakeview Library",
    "address": "circulation@lakeview.example",
    "initials": "LL",
    "color": "purple",
    "subject": "Library reminder: your loan is due October 30",
    "body": "<p>Hi Alex,</p><p>A quick reminder that <em>Information Systems in Organizations</em> is due Friday, October 30. If you need more time, you can check renewal availability in your library account.</p><p><a href=\"#\" data-destination=\"https://library.lakeview.example/account/loans\" title=\"https://library.lakeview.example/account/loans\">View your loans and renewal options</a></p><p>Renewals depend on whether another borrower has requested the item. Return bins are located at the main entrance and by the student center.</p><p>Access Services<br>Lakeview University Library</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:40:00",
    "label": "10:40 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "campus-job",
    "category": "phishing",
    "difficulty": "somewhat challenging",
    "sender": "Lakeview Career Connections",
    "address": "careers@lakeview-careers.example",
    "initials": "CC",
    "color": "blue",
    "subject": "Student research assistant opening — application details",
    "body": "<p>Hi Alex,</p><p>A faculty research team has asked us to share a part-time student assistant opening with students interested in technology. The role involves organizing survey responses and checking entries in a research database, approximately 6–8 hours a week at $17 per hour.</p><p>The position description, supervisor contact, and availability form are in the applicant workspace below.</p><p><a href=\"#\" data-destination=\"https://careers.lakeview.example.applicant-services.example/positions/ra-241\" title=\"https://careers.lakeview.example.applicant-services.example/positions/ra-241\">View the research assistant position</a></p><p>Choose University sign-in and use your Lakeview account to open the posting. Applications are reviewed as they arrive; the proposed start date is next month.</p><p>Best,<br>Career Connections<br>Student Employment | Lakeview University</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:35:00",
    "label": "10:35 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "apartments",
    "category": "spam",
    "sender": "The Landing Student Apartments",
    "address": "leasing@landing-studentliving.example",
    "initials": "LA",
    "color": "green",
    "subject": "Looking for roommates next year? Tour The Landing",
    "body": "<p>Hi Alex,</p><p>Still working out housing for next year? The Landing has two- and four-bedroom floor plans, individual leases, and a shuttle stop near campus.</p><p><a href=\"#\" data-destination=\"https://landing-studentliving.example/floor-plans\" title=\"https://landing-studentliving.example/floor-plans\">See floor plans and current rates</a></p><p>Tour this month and we’ll waive the application fee on select units. Availability and lease terms vary.</p><p>The Landing leasing team<br>Off-campus student housing</p><p><a href=\"#\" data-destination=\"https://landing-studentliving.example/unsubscribe\" title=\"https://landing-studentliving.example/unsubscribe\">Unsubscribe from leasing promotions</a></p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:30:00",
    "label": "10:30 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "study-group",
    "category": "legitimate",
    "sender": "Sam Rivera",
    "address": "srivera@lakeview.example",
    "initials": "SR",
    "color": "amber",
    "subject": "CIS 205 group project — library at 4?",
    "body": "<p>Hey Alex,</p><p>Could you meet in the library at 4 tomorrow to finish our project outline? Jordan said they can join after class.</p><p>I put the latest outline and task list in our shared folder: <a href=\"#\" data-destination=\"https://files.lakeview.example/cis205/group-4/project-outline\" title=\"https://files.lakeview.example/cis205/group-4/project-outline\">Group 4 project outline</a>.</p><p>I’ll take the data privacy section. Could you check the survey summary and add a couple of points about the information system we chose?</p><p>Thanks,<br>Sam</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:25:00",
    "label": "10:25 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "shared-notes",
    "category": "phishing",
    "difficulty": "very difficult",
    "sender": "Sam Rivera",
    "address": "srivera@lakeview.example",
    "initials": "SR",
    "color": "amber",
    "subject": "CIS 205 group project — survey summary added",
    "body": "<p>Hey Alex,</p><p>I added the survey summary and the two charts we talked about to the project folder. The outline is the same version we’re using for tomorrow.</p><p><a href=\"#\" data-destination=\"https://files.lakevlew.example/cis205/group-4/survey-summary\" title=\"https://files.lakevlew.example/cis205/group-4/survey-summary\">Open the survey summary</a></p><p>Could you check the response totals and add your comments below the charts before we meet at 4? Jordan is working on the introduction.</p><p>Thanks,<br>Sam</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:20:00",
    "label": "10:20 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "textbooks",
    "category": "spam",
    "sender": "BookLoop Student Savings",
    "address": "deals@bookloop.example",
    "initials": "BS",
    "color": "purple",
    "subject": "Before you buy next term’s books: compare rental prices",
    "body": "<p>Hi Alex,</p><p>Book lists are starting to appear for next term. Compare used copies, semester rentals, and e-book options before you order.</p><p><a href=\"#\" data-destination=\"https://bookloop.example/student-rentals\" title=\"https://bookloop.example/student-rentals\">Browse textbook rental offers</a></p><p>Selected rentals include free return shipping. Prices depend on title, edition, and availability. Sponsored offers from participating sellers may appear in search results.</p><p>BookLoop student promotions</p><p><a href=\"#\" data-destination=\"https://bookloop.example/preferences\" title=\"https://bookloop.example/preferences\">Manage email preferences</a></p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:15:00",
    "label": "10:15 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  },
  {
    "id": "advising",
    "category": "legitimate",
    "sender": "Elena Brooks",
    "address": "ebrooks@lakeview.example",
    "initials": "EB",
    "color": "blue",
    "subject": "Your advising appointment: Wednesday at 10:30",
    "body": "<p>Hi Alex,</p><p>Your advising appointment is confirmed for Wednesday, October 28, at 10:30 a.m. in Student Services 214. We’ll review your planned spring courses and check prerequisite requirements.</p><p>Please look over your <a href=\"#\" data-destination=\"https://portal.lakeview.example/academics/degree-progress\" title=\"https://portal.lakeview.example/academics/degree-progress\">degree progress report</a> beforehand and bring any questions about registration.</p><p>If you need a different time, reply to this message and we’ll find another appointment.</p><p>Best,<br>Elena Brooks<br>Academic Advising | Lakeview University</p>",
    "folder": "Inbox",
    "date": "2026-10-27T10:10:00",
    "label": "10:10 AM",
    "unread": true,
    "recipients": "Alex Morgan <amorgan@lakeview.example>"
  }
];
  let folder='Inbox', selected='course', query='';
  const storageKey='sample-mail-reports-campus-v1';
  let reports={};
  let storageAvailable=true;
  try {
    const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');
    if(saved&&typeof saved==='object'&&!Array.isArray(saved)) {
      emails.forEach(e=>{if(['phishing','junk'].includes(saved[e.id]))reports[e.id]=saved[e.id];});
    }
  } catch { storageAvailable=false; }
  function persist(){try{localStorage.setItem(storageKey,JSON.stringify(reports));}catch{storageAvailable=false;}}
  const reportPhishing=document.querySelector('#report-phishing');
  const reportJunk=document.querySelector('#report-junk');
  const list=document.querySelector('.message-list');
  const pane=document.querySelector('.reading-pane');
  const status=document.querySelector('#mail-status');
  const buttons=[...document.querySelectorAll('.folder')];
  const folderNames=buttons.map(b=>b.textContent.trim().replace(/\s*\d+$/, ''));
  const textFromHTML=html=>{const t=document.createElement('div');t.innerHTML=html;return t.textContent.replace(/\s+/g,' ').trim();};
  const inFolder=(e,name)=>name==='Inbox'||(name==='Reported Phishing'&&reports[e.id]==='phishing')||(name==='Junk Email'&&reports[e.id]==='junk');
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
    reportPhishing.disabled=!has||reports[e?.id]==='phishing';
    reportJunk.disabled=!has||reports[e?.id]==='junk';
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
    if(!selected)return;
    const e=emails.find(e=>e.id===selected);
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
    select(selected);status.textContent='All reports cleared. All 10 sample emails are available.';
  });
  document.querySelectorAll('.toolbar button').forEach(b=>{
    if(b===reportPhishing||b===reportJunk)return;
    b.disabled=true;b.title='This action is unavailable in the sample inbox.';
  });
  // All message links are placeholders. Hover shows the fictional destination.
  function keepLinkInactive(event){
    if(event.target.closest('a'))event.preventDefault();
  }
  document.querySelector('.email-body').addEventListener('click',keepLinkInactive);
  document.querySelector('.email-body').addEventListener('auxclick',keepLinkInactive);
  select(selected);
})();
