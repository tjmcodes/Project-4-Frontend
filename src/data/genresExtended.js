import React from 'react';

const Genres = ({ selected, setSelected }) => {


/** Function that will set different values to state variable
* based on which dropdown is selected
*/

const changeSelectOptionHandler = (event) => {
	setSelected({ category: event.target.value, subCategory: '' });
};
const changeSecondSelectOptionHandler = (event) => {
	setSelected({ ...selected, subCategory: event.target.value });
};


/** Different arrays for different dropdowns */
const alternative = [
  "Art Punk",
  "Alternative Rock",
  "Britpunk",
  "College Rock",
  "Crossover Thrash",
  "Crust Punk (thx Haug)",
  "Emotional Hardcore (emo / emocore)",
  "Experimental Rock",
  "Folk Punk",
  "Goth / Gothic Rock",
  "Grunge",
  "Hardcore Punk",
  "Hard Rock",
  "Indie Rock",
  "Lo-fi",
  "Musique Concrète",
  "New Wave",
  "Progressive Rock",
  "Punk",
  "Shoegaze",
  "Steampunk",
  ];

const blues = [
  "Acoustic Blues",
  "African Blues",
  "Blues Rock",
  "Blues Shouter",
  "British Blues",
  "Canadian Blues",
  "Chicago Blues",
  "Classic Blues",
  "Classic Female Blues",
  "Contemporary Blues",
  "Contemporary R&B",
  "Country Blues",
  "Dark Blues",
  "Delta Blues",
  "Detroit Blues",
  "Doom Blues",
  "Electric Blues",
  "Folk Blues",
  "Gospel Blues",
  "Harmonica Blues",
  "Hill Country Blues",
  "Hokum Blues",
  "Jazz Blues",
  "Jump Blues",
  "Kansas City Blues",
  "Louisiana Blues",
  "Memphis Blues",
  "Modern Blues",
  "New Orlean Blues",
  "NY Blues",
  "Piano Blues",
  "Piedmont Blues",
  "Punk Blues",
  "Ragtime Blues",
  "Rhythm Blues",
  "Soul Blues",
  "St. Louis Blues",
  "Soul Blues",
  "Swamp Blues",
  "Texas Blues",
  "Urban Blues",
  "Vandeville",
  "West Coast Blues",
  "Zydeco ",
]

const classical = [
  "Avant-Garde",
  "Ballet",
  "Baroque",
  "Cantata",
  "Chamber Music",
  "String Quartet",
  "Chant",
  "Choral",
  "Classical Crossover",
  "Concerto",
  "Concerto Grosso",
  "Contemporary Classical",
  "Early Music",
  "Expressionist",
  "High Classical",
  "Impressionist",
  "Mass Requiem",
  "Medieval",
  "Minimalism",
  "Modern Composition",
  "Modern Classical",
  "Opera",
  "Oratorio",
  "Orchestral",
  "Organum",
  "Renaissance",
  "Romantic (early period)",
  "Romantic (later period)",
  "Sonata",
  "Symphonic",
  "Symphony",
  "Twelve-tone",
  "Wedding Music",
]

const electronic = [
  "Ambient",
  "Ambient Dub",
  "Ambient House",
  "Ambient Techno",
  "Dark Ambient",
  "Drone Music",
  "Illbient",
  "Isolationism",
  "Lowercase",
  "Asian Underground",
  "Bassline",
  "Chillwave",
  "Chiptune",
  "Bitpop",
  "Game Boy",
  "Nintendocore",
  "Video Game Music",
  "Yorkshire Bleeps and Bass",
  "Crunk",
  "Downtempo",
  "Acid Jazz",
  "Balearic Beat",
  "Chill Out",
  "Dub Music",
  "Dubtronica",
  "Ethnic Electronica",
  "Moombahton",
  "Nu Jazz",
  "Trip Hop",
  "Drum & Bass",
  "Darkcore",
  "Darkstep",
  "Drumfunk",
  "Drumstep",
  "Hardstep",
  "Intelligent Drum and Bass",
  "Jump-Up",
  "Liquid Funk",
  "Neurofunk",
  "Oldschool Jungle:",
  "Darkside Jungle",
  "Ragga Jungle",
  "Raggacore",
  "Sambass",
  "Techstep",
  "Electro",
  "Crunk",
  "Electro Backbeat",
  "Electro-Grime",
  "Electropop",
  "Electro-swing",
  "Electroacoustic",
  "Acousmatic Music",
  "Computer Music",
  "Electroacoustic Improvisation",
  "Field Recording",
  "Live Coding",
  "Live Electronics",
  "Soundscape Composition",
  "Tape Music",
  "Electronica",
  "Berlin School",
  "Chillwave",
  "Electronic Art Music",
  "Electronic Dance Music",
  "Folktronica",
  "Freestyle Music",
  "Glitch",
  "Idm",
  "Laptronica",
  "Skweee",
  "Sound Art",
  "Synthcore",
  "Electronic Rock",
  "Alternative Dance",
  "Baggy",
  "Madchester",
  "Dance-Punk",
  "Dance-Rock",
  "Dark Wave",
  "Electroclash",
  "Electronicore",
  "Electropunk",
  "Ethereal Wave",
  "Indietronica",
  "New Rave",
  "Space Rock",
  "Synthpop",
  "Synthpunk",
  "Eurodance",
  "Bubblegum Dance",
  "Italo Dance",
  "Turbofolk",
  "Hardstyle",
  "Hi-Nrg",
  "Eurobeat",
  "Hard Nrg",
  "New Beat",
  "IDM/Experimental",
  "Industrial",
  "Trip Hop",
  "Vaporwave",
  "Hyponagogic",
  "Vektroid",
  "Mallsoft",
  "Vaportrap",
  "Vaporhop",
  "Protovapor",
  "UK Garage",
  "2-Step",
  "Bassline",
  "Grime",
  "Speed Garage",
] 

const folk = [
  "American Folk Revival",
  "Anti-Folk",
  "British Folk Revival",
  "Contemporary Folk",
  "Filk Music",
  "Freak Folk",
  "Indie Folk",
  "Industrial Folk",
  "Neofolk",
  "Progressive Folk",
  "Psychedelic Folk",
  "Sung Poetry",
  "Techno-Folk",
]

const jazz = [
  "Acid Jazz",
  "Afro-Cuban Jazz",
  "Avant-Garde Jazz",
  "Bebop",
  "Big Band",
  "Blue Note",
  "British Dance Band (Jazz)",
  "Cape Jazz",
  "Chamber Jazz",
  "Contemporary Jazz",
  "Continental Jazz",
  "Cool Jazz",
  "Crossover Jazz",
  "Dark Jazz",
  "Dixieland",
  "Early Jazz",
  "Electro Swing (Jazz)",
  "Ethio-jazz",
  "Ethno-Jazz",
  "European Free Jazz",
  "Free Funk (Avant-Garde / Funk Jazz)",
  "Free Jazz",
  "Fusion",
  "Gypsy Jazz",
  "Hard Bop",
  "Indo Jazz",
  "Jazz Blues",
  "Jazz-Funk (see Free Funk)",
  "Jazz-Fusion",
  "Jazz Rap",
  "Jazz Rock",
  "Kansas City Jazz",
  "Latin Jazz",
  "M-Base Jazz",
  "Mainstream Jazz",
  "Modal Jazz",
  "Neo-Bop",
  "Neo-Swing",
  "Nu Jazz",
  "Orchestral Jazz",
  "Post-Bop",
  "Punk Jazz",
  "Ragtime",
  "Ska Jazz",
  "Skiffle (also Folk)",
  "Smooth Jazz",
  "Soul Jazz",
  "Swing Jazz",
  "Straight-Ahead Jazz",
  "Trad Jazz",
  "Third Stream",
  "Jazz-Funk",
  "Free Jazz",
  "West Coast Jazz",
]

const latin = [
  'Static-noise',
  'Sparks',
  'White-noise',
  'Pink-noise',
  'Brown-noise',
]

const weather = [
  'Thunder',
  'Light-rain',
  'Heavy-rain',
  'Wind',
]

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
let options = null;

/** Setting Type variable according to dropdown */
if (selected.category === "nature") {
	type = nature;
} else if (selected.category === "human") {
	type = human;
} else if (selected.category === "machines") {
	type = machines;
} else if (selected.category === "animals") {
	type = animals;
} else if (selected.category === "materials") {
	type = materials;
} else if (selected.category === "ambience") {
	type = ambience;
} else if (selected.category === "electric") {
	type = electric;
} else if (selected.category === "weather") {
	type = weather;
}

/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
if (type) {
	options = type.map((element) => <option key={element}>{element}</option>);
}


return (
	<div className="container">
	<form>
		<div>
		{/** Bind changeSelectOptionHandler to onChange method of select.
		* This method will trigger every time different
		* option is selected.
		*/}
		<select className={styles.inputText} onChange={changeSelectOptionHandler}>
			<option>Choose category...</option>
			<option>nature</option>
			<option>human</option>
			<option>machines</option>
			<option>animals</option>
			<option>materials</option>
			<option>ambience</option>
			<option>electric</option>
			<option>weather</option>
		</select>
		</div>
		<div>
		<select className='input' onChange={changeSecondSelectOptionHandler}>
        {
			/** This is where we have used our options variable */
			options
			}
		</select>
		</div>
	</form>
	</div>
);
};

export default Genres;
