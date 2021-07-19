<script>
import { onMount } from 'svelte';

// $: var aktuellesDatum = new Date(2021,6,30,16,30);
let aktuellesDatum = Date.now();
const beginnDatum = new Date(2021,6,5,7,30);

function arbeitsSekunden() {
	var differenzWerktage = ((aktuellesDatum - beginnDatum)/1000/60/60/24)*(5/7);
	var arbeitsSec = differenzWerktage*8.5*60*60;
	return arbeitsSec;
}

function leosGehalt()
{
	var arbeitsSec = arbeitsSekunden();
	var gehaltProSekunde = (790/20/8.5/60)/60;
	var aktuellesGehalt = arbeitsSec*gehaltProSekunde;
	return aktuellesGehalt;
}

var brutto = (leosGehalt()).toFixed(4);
var netto = (leosGehalt()*0.8).toFixed(4);
var zeit = (arbeitsSekunden()/60/60).toFixed(4);

onMount(() => {
	const interval = setInterval(() => {
		
		aktuellesDatum = Date.now();
		brutto = (leosGehalt()).toFixed(4);
		netto = (leosGehalt()*0.8).toFixed(4);
		zeit = (arbeitsSekunden()/60/60).toFixed(4);

	}, 1000);
	return () => {
		clearInterval(interval);
	};
});
</script>

<main>
	<h1>
		💵💵💵 
	</h1>
	<h1>
		So viel hat Leo im Juli 2021 schon verdient:
    </h1>
    <h2>
		{"Brutto: " + brutto + "€"}
    </h2>
	<h2>
		{"Netto: " + netto + "€"}
    </h2>
	<h2>
		{zeit + " Stunden gearbeitet."}
	</h2>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>