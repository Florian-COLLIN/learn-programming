/* @ author : Florian COLLIN <florian.collin36@gmail.com>
 *
 * @ date : 11 décembre 2020
 */
 /* Annonce de mise à jour. */
alert("Une importante mise à jour est prévue le dimanche 13 décembre 2020.\nLe site sera inacessible à partir de 22h.")
/* Données du sites */
let donnees = {
	auteur: 'Florian COLLIN',
	version: '1.1.1',
	datepremièreversion: 'Octobre 2020',
	datedernièreversion: 'Octobre 2020'
};
/* Données */
document.querySelector('#auteur').innerText = `${donnees.auteur}`
document.querySelector('#version').innerText = `${donnees.version}`
document.querySelector('#datepremièreversion').innerText = `${donnees.datepremièreversion}`
document.querySelector('#datedernièreversion').innerText = `${donnees.datedernièreversion}`