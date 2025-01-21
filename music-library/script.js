
let songs = [];

function addSong() {
  const newSong = {
    title: document.getElementById("songTitle").value,
    artist: document.getElementById("artist").value,
    genre: document.getElementById("genre").value,
    year: document.getElementById("year").value
  };

  // Basic validation - prevent adding songs with empty titles
  if (newSong.title.trim() !== "") {
    songs.push(newSong);
    updateSongList();
    // Clear input fields
    document.getElementById("songTitle").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("year").value = "";
  }
}

function updateSongList() {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="song-data">Title: ${song.title}, Artist: ${song.artist}, Genre: ${song.genre}, Year: ${song.year}</span>
      <button onclick="editSong(${index})">Edit</button>
      <button onclick="deleteSong(${index})">Delete</button>
    `;
    songList.appendChild(listItem);
  });
}

function editSong(index) {
  const song = songs[index];
  const newTitle = prompt("Enter new title:", song.title);
  const newArtist = prompt("Enter new artist:", song.artist);
  const newGenre = prompt("Enter new genre:", song.genre);
  const newYear = prompt("Enter new year:", song.year);

  if (newTitle !== null) { song.title = newTitle; }
  if (newArtist !== null) { song.artist = newArtist; }
  if (newGenre !== null) { song.genre = newGenre; }
  if (newYear !== null) { song.year = newYear; }


  updateSongList();
}

function deleteSong(index) {
  songs.splice(index, 1);
  updateSongList();
}
