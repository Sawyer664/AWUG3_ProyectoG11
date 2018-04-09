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
				
				tx.executeSql("SELECT * FROM AWUG3_fotos, AWUG3_usuarios WHERE idusuario=id_usuario_foto AND idusuario=2",[],querySuccess,queryFailure);
				
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
                
                  for(var i=0;i<1;i++) {
                  var perfil = results.rows.item(i);
                  $('#perfil1').append('<li style="display:block; margin:auto;"><img src="' + perfil.img_perfil + '" class="list-icon2"><p class="itempeli" style=" padding-left:45%; padding-top:5%; padding-bottom:10%;height: 30px; font-size:22px;"><strong>' + perfil.usernick + '</strong></p>');
                  
                  $('#perfil1').append('<img src="' + perfil.img +'" style="display:left; width:110px; heigh:110px;">');
                  
                  }
                  for(var i=1;i<rowLength;i++) {
                  var perfil = results.rows.item(i);
                  $('#perfil1').append('<img src="' + perfil.img +'" style="display:left; width:110px; heigh:110px;">');
                  
                  }
                for(var i=rowLength;i<rowLength;i++) {
                    $('#perfil1').append('</li>');
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

