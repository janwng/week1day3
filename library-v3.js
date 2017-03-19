var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}



// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


// var printPlaylists = function () {
//   for (var p0x in library.playlists){
//     var playlistLength = library.playlists[p0x].tracks.length;
//     console.log(p0x,':', library.playlists[p0x].name, '-', playlistLength, 'tracks');
//   }
// }


var printPlaylists = function () {
  for (var key in library.playlists){

    let playlist = library.playlists[key];
    printSinglePlaylist(playlist);

  }
}


var printSinglePlaylist = function (playlist) {
    var playlistLength = playlist.tracks.length;
    console.log(playlist.id,':', playlist.name, '-', playlistLength, 'tracks');
}

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



var printTracks = function () {
  for (var t0x in library.tracks){
    var track = library.tracks[t0x];
    printTrack(track); //this passes the track variable into the printTrack function
  }
}


var printTrack = function(track) {
  var trackName = track.name;
    var trackArtist = track.artist;
    var trackAlbum = track.album;
    console.log(track.id+': '+trackName+' by '+trackArtist+' ('+trackAlbum+')');
}

// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistInput) {

    var playlist = library.playlists[playlistInput];

    var playlistTracks = library.playlists[playlistInput].tracks;
    var tracks = library.tracks;

    var tracksFound = [];


    for(var i = 0; i < playlistTracks.length; i++){
      var key = playlistTracks[i];

      tracksFound.push(tracks[key]);
    }

    printSinglePlaylist(playlist);

    for(var i = 0; i < tracksFound.length; i++) {
      printTrack(tracksFound[i]);
    }
}


printPlaylist('p01');





// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}