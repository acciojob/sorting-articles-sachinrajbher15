//your JS code here. If required.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove "a", "an", and "the" from the beginning of the name
function stripArticle(bandName) {
    // Replace "a", "an", "the" with an empty string
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array by the stripped names
	const sortedBands = bands.sort(function(a, b) {
    return stripArticle(a).localeCompare(stripArticle(b));
});

const bandList = document.getElementById('band');
sortedBands.forEach(function(band) {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});