var editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click", edit);

function edit() {
	const name = document.getElementById("name");

	if (editBtn.innerText === "edit") {
		const currentName = name.innerText;
		name.innerHTML = `<input type="text" id="nameInput" value="${currentName}">`;
		editBtn.innerText = "save";
	} else {
		const newName = document.getElementById("nameInput").value;
		name.innerText = newName;
		editBtn.innerText = "edit";
	}
}


/*var addMusicBtn = document.getElementById("addMusicBtn");
addMusicBtn.addEventListener("click", addMusic);

function addMusic() {

}*/


var addMusicBtn = document.getElementById("addMusicBtn");
addMusicBtn.addEventListener("click", showForm);

// Show the form when the "Add Music" button is clicked
function showForm() {
    document.getElementById('addForm').style.display = 'block';
}


var cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener("click", hideForm);

// Hide the form
function hideForm() {
    document.getElementById('addForm').style.display = 'none';
}


var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitForm);

// Submit the form
function submitForm() {
    const musicLink = document.getElementById('musicLink').value;
    const musicName = document.getElementById('musicName').value;

    // Validate if both fields are filled
    if (musicLink === '' || musicName === '') {
        alert('Please fill in all fields!');
        return;
    }

    // Add the new music item to the album list
    const albumCovers = document.getElementById('albumCovers');
    
    const newSong = document.createElement('div');
    newSong.classList.add('song');
    
    // Create the music link and image
    const newLink = document.createElement('a');
    newLink.href = musicLink;
    newLink.target = '_blank';
    
    const newImage = document.createElement('img');
    newImage.src = 'spotify_logo.png';  // Default image, can be dynamic if needed
    newImage.alt = `image for ${musicName}`;
    
    // Append the image to the link
    newLink.appendChild(newImage);
    
    // Create the music name text
    const newText = document.createElement('div');
    newText.textContent = musicName;
    
    // Append the link and text to the new song div
    newSong.appendChild(newLink);
    newSong.appendChild(newText);
    
    // Append the new song to the album covers section
    albumCovers.appendChild(newSong);
    
    // Hide the form after submission
    hideForm();
    
    // Clear the form inputs
    document.getElementById('musicLink').value = '';
    document.getElementById('musicName').value = '';
}
