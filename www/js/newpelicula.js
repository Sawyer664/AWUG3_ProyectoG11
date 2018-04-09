var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		
		pictureSource=navigator.camera.PictureSourceType; 
        destinationType=navigator.camera.DestinationType; 
		
    },

    receivedEvent: function(id) {

		console.log("prova");

			var localDatabase = null;
			function init() {
				  //Creating SQL Lite database..
				  localDatabase = window.openDatabase("Peliculas App","1.0","Peliculas App",300000);
				  localDatabase.transaction(insertQuery,errorInsert,successInsert);
			}
			
			function insertQuery(tx) {
				var nom = $("#nombre").val(); 
				var any = $("#any").val();
				var vista = $("#vista").val();
				//var actor = $("#actoreselect").val();
				
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES (?,?,?)', [nom, any, vista]);
				//Como se el ultimo idpeli insertado?????????????????????
				//tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES (?,?)', [any, actor]);
				
				//document.querySelector('#peliculas').innerHTML = msg;
			}
			
			function errorInsert(err) {
				  alert("Error in creation database function...! " + err.code);
			}

			function successInsert() {
				  console.log("Database created successfully....!");
				  location.href = "index.html";
			}
			
			
			
			
			
			
			init();		
    }
};


