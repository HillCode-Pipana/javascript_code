// Fetch about.json dynamically
fetch('/data/about.json')
  .then(res => res.json())
  .then(data => {
    // Title and description
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.description;

    // Team members
    const teamDiv = document.getElementById('team');
    data.team.forEach(member => {
      const div = document.createElement('div');
      div.className = 'team-member';
      div.innerHTML = `
        ${member.image ? `<img src="${member.image}" width="100" alt="${member.name}">` : ''}
        <strong>${member.name}</strong> - ${member.role}
      `;
      teamDiv.appendChild(div);
    });

    // Values
    const valuesUl = document.getElementById('values');
    data.values.forEach(val => {
      const li = document.createElement('li');
      li.textContent = val;
      valuesUl.appendChild(li);
    });

    // CTA button
    if (data.cta) {
      const a = document.createElement('a');
      a.href = data.cta.link;
      a.textContent = data.cta.text;
      a.style.display = 'inline-block';
      a.style.marginTop = '1rem';
      a.style.padding = '0.5rem 1rem';
      a.style.backgroundColor = '#007BFF';
      a.style.color = 'white';
      a.style.textDecoration = 'none';
      a.style.borderRadius = '4px';
      document.getElementById('cta').appendChild(a);
    }
  })
  .catch(err => console.error('Error loading About Us data:', err));
