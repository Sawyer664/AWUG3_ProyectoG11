var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

		console.log("prova");

			var localDatabase = null;
			function init() {
				  //Creating SQL Lite database..
				  localDatabase = window.openDatabase("Peliculas App","1.0","Peliculas App",300000);
				  localDatabase.transaction(insertQuery,errorSelect,successSelect);
			}

			function insertQuery(tx) {
				
				tx.executeSql("SELECT * FROM AWUG3_likes, AWUG3_usuarios WHERE idusuario=id_usuario_like AND id_foto_like=1",[],querySuccess,queryFailure);
				
			}
			
			function errorSelect(err) {
				  alert("Error in creation database function...! " + err.code);
			}

			function successSelect() {
				  console.log("Database created successfully....!");
				  //location.href = "index.html";
			}
			
			
			function querySuccess(tx,results) {
				  console.log("Query executed successfully....!");
				  //Getting row length...
				  var rowLength = results.rows.length;

				  for(var i=0;i<rowLength;i++) {
					var noti = results.rows.item(i);
					
					$('#actores').append('<li><img src="img/estrella2.png" class="list-icon"><p class="itempeli" style=" padding-left:2%; padding-top:3%;">A <strong>' + noti.usernick + '</strong> le ha gustado tu foto. </a></li>');

				  	
						
								
					
					
					
				  }
				 
			}
			
			
			
			function queryFailure() {
				  alert("Query execution failed....!");
			}
			
			
			
			
			
			
			
			
			
			init();		
    }
};

function pasarvariable(idactor){
				localStorage.setItem("idactor", idactor);
				//var idpeli = localStorage.getItem("idpeli");
			}

