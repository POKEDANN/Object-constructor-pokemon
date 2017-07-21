var Pikachu = {
	color: "amarillo",
	peso: 6,
	cachete:{
		color:"rojo",
		forma:"redondos"
	},
	sonrisa:true,
	habilidad:"estatica",
	tipo:"electrico",
	salud:100,
	ataques:{
		impactrueno:40,
		colaDeHierro:100,
		trueno:120,
		excavar:80
	},
	estado:"saludable",

	healing: function() {
		switch(Pikachu.estado){
			case "envenenado":
			case "quemado":
			case "paralizado":
			case "congelado":
			case "enamorado":
			case "dormido":
			case "maldito":
			Pikachu.estado = "saludable";
			alert("Tu pokemon ha sido curado");
			break;
		}
	}
}

Pikachu.estado = "quemado";
Pikachu.healing();

function pokemonNuevo(color, peso, cachete, sonrisa, habilidad, tipo, salud, ataques, estado){
	this.color = color;
	this.peso = peso;
	this.cachete.color = cachete.color;
	this.cachete.forma = cachete.forma;
	this.sonrisa = sonrisa;
	this.habilidad = habilidad;
	this.tipo = tipo;
	this.salud = salud;
	this.ataques.ataque1 = ataques.ataque1;
	this.ataques.ataque2 = ataques.ataque2;
	this.ataques.ataque3 = ataques.ataque3;
	this.ataques.ataque4 = ataques.ataque4;
	this.estado = estado;
}

var squirtle = new pokemonNuevo("azul",9,{color: "azul",forma:"no tiene"},true,"torrente","agua",100,{"pistola agua", "rayo burbuja", "doble equipo","rasguño"},"saludable");
console.log(squirtle);








