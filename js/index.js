document.getElementById('monster-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const monster = {
      name: formData.get('name'),
      age: formData.get('age'),
      description: formData.get('description')
    };
  
    fetch('http://localhost:3000/monsters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(monster)
    })
    .then(response => response.json())
    .then(createdMonster => {
      // Code to add the created monster to the list on the page
    });
  });