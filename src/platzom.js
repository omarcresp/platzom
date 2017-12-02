
export default function platzom(str) {
	let translation = str;

	// REGLA1: Si la palabra termina en "ar", se le quitan esos 2 caracteres.
	if ( str.toLowerCase().endsWith('ar') ) {
		translation = str.slice(0, -2);
	}

	// REGLA2: Si la palabra inicia con Z, se le añade "pe" al final.
	if ( str.toLowerCase().startsWith('z') ) {
		translation += 'pe';
	}

	// REGLA3: Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad
	// y colocar un guion en el medio.

	const len = translation.length;
	if (len >= 10) {
		var Mitad1 = translation.slice(0, Math.round(len / 2));
		var Mitad2 = translation.slice(Math.round(len / 2));

		translation = `${Mitad1}-${Mitad2}`;
	}

	// REGLA4: Si la palabra es un palindromo, ninguna regla cuenta y se devuelve,
	// la misma palabra intercalando mayusculas a minusculas

	const reverse = (str) => str.split('').reverse().join('');

	function minMay(str) {
		const leng = str.length;
		let translation = '';
		let capitalize = true;

		for (let i = 0; i < leng; i++) {
			var char = str.charAt(i);

			translation += capitalize ? char.toUpperCase() : char.toLowerCase();

			capitalize = !capitalize;
		}

		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}
