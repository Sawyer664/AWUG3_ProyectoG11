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
				  localDatabase = window.openDatabase("Peliculas App","1.0","Peliculas App",300000);
				  if(sessionStorage.entered){
					  displayDatabaseDetails();
				  }else {
					  localDatabase.transaction(populateDatabase,errorCreateDatabase,successCreateDatabase);
				  }
			}

			function populateDatabase(tx) {
				//$('#pelis').show();
			
				tx.executeSql('DROP TABLE IF EXISTS Peliculas');
				tx.executeSql('DROP TABLE IF EXISTS Actores');
				tx.executeSql('DROP TABLE IF EXISTS Peliactor');
				tx.executeSql('DROP TABLE IF EXISTS Pelifoto');
                tx.executeSql('DROP TABLE IF EXISTS AWUG3_usuarios');
                tx.executeSql('DROP TABLE IF EXISTS AWUG3_fotos');
                tx.executeSql('DROP TABLE IF EXISTS AWUG3_likes');
                
				tx.executeSql('CREATE TABLE Peliculas (idp INTEGER PRIMARY KEY AUTOINCREMENT  NOT NULL, nombrep TEXT, any YEAR, vista INTEGER)');
				tx.executeSql('CREATE TABLE Actores (ida INTEGER PRIMARY KEY AUTOINCREMENT  NOT NULL, nombrea TEXT)');
				
				tx.executeSql('CREATE TABLE Peliactor (idpeli INTEGER, idactor INTEGER, FOREIGN KEY(idpeli) REFERENCES Peliculas(idp), FOREIGN KEY(idactor) REFERENCES Actores(ida))');
				tx.executeSql('CREATE TABLE Pelifoto (idpe INTEGER, foto TEXT, FOREIGN KEY(idpe) REFERENCES Peliculas(idp))');	
                tx.executeSql('CREATE TABLE AWUG3_usuarios (idusuario INTEGER PRIMARY KEY AUTOINCREMENT  NOT NULL, nombre TEXT, usernick TEXT, img_perfil TEXT)');
                tx.executeSql('CREATE TABLE AWUG3_fotos (idfoto INTEGER PRIMARY KEY AUTOINCREMENT  NOT NULL, img TEXT, id_usuario_foto INTEGER, descripcion1 TEXT, descripcion2 TEXT, FOREIGN KEY(id_usuario_foto) REFERENCES AWUG3_usuarios(idusuario))');
				tx.executeSql('CREATE TABLE AWUG3_likes (idlike INTEGER PRIMARY KEY AUTOINCREMENT  NOT NULL, id_usuario_like INTEGER, id_foto_like INTEGER, FOREIGN KEY(id_usuario_like) REFERENCES AWUG3_usuarios(idusuario), FOREIGN KEY(id_foto_like) REFERENCES AWUG3_fotos(idfoto))');
					
				
				
				//	Insercion en la tabla AWUG3_usuarios
                tx.executeSql('INSERT INTO AWUG3_usuarios(idusuario, nombre, usernick, img_perfil) VALUES ("1", "Ana Garcia", "Ana_tattoo", "img_perfil/perfil2.png")');
				tx.executeSql('INSERT INTO AWUG3_usuarios(idusuario, nombre, usernick, img_perfil) VALUES ("2", "Jose Luis Perez", "JLuistattoo", "img_perfil/perfil1.png")');
				tx.executeSql('INSERT INTO AWUG3_usuarios(idusuario, nombre, usernick, img_perfil) VALUES ("3", "Jordi Mas", "Mas_tattoo", "img_perfil/perfil4.png")');
				tx.executeSql('INSERT INTO AWUG3_usuarios(idusuario, nombre, usernick, img_perfil) VALUES ("4", "Miriam Gonzalez", "Mirimiri", "img_perfil/perfil3.png")');
				tx.executeSql('INSERT INTO AWUG3_usuarios(idusuario, nombre, usernick, img_perfil) VALUES ("5", "Luis Pereira", "Pereira_tattoos", "img_perfil/perfil6.png")');
				tx.executeSql('INSERT INTO AWUG3_usuarios(idusuario, nombre, usernick, img_perfil) VALUES ("6", "Lidia Prat", "Lidi_tattoos", "img_perfil/perfil5.png")');
				
                
                //	Insercion en la tabla AWUG3_fotos
				tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "1"  , "fotos_usuarios/foto0001.png","2", "Harry Potter Deathly Hallows", "Hecho con blablabla")');
				tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "2"  ,  "fotos_usuarios/foto0002.png","1", "Pin up Doll", "Hecho con blablabla")');
				tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "3"  , "fotos_usuarios/foto0006.png","5", "Trasnformers", "Hecho con blablabla")');
				tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "4" , "fotos_usuarios/foto0007.png","3", "Wolf", "Hecho con blablabla")');
				tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "5" , "fotos_usuarios/foto0008.png","4","La muerte", "Hecho con blablabla")');
				tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "6" , "fotos_usuarios/foto0009.png","5", "Jigglypuff Kawaii", "Hecho con blablabla")');
                tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "7" , "fotos_usuarios/foto0003.png","2","Simply Deathly Hallows", "Hecho con blablabla")');
				tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "8" , "fotos_usuarios/foto0004.png","2", "Felix Felicis", "Hecho con blablabla")');
                tx.executeSql('INSERT INTO AWUG3_fotos(idfoto, img, id_usuario_foto, descripcion1, descripcion2) VALUES (  "9" , "fotos_usuarios/foto0005.png","2", "Hogwart College", "Hecho con blablabla")');
                
                
                //Insercion en la tabla AWUG3_likes
            tx.executeSql('INSERT INTO AWUG3_likes(idlike, id_usuario_like, id_foto_like) VALUES ("1","2","1")');
            tx.executeSql('INSERT INTO AWUG3_likes(idlike, id_usuario_like, id_foto_like) VALUES ("2","3","1")');
                tx.executeSql('INSERT INTO AWUG3_likes(idlike, id_usuario_like, id_foto_like) VALUES ("3","4","1")');
                tx.executeSql('INSERT INTO AWUG3_likes(idlike, id_usuario_like, id_foto_like) VALUES ("4","5","3")');
				    
                
                
				
				//	Insercion en la tabla peliculas
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("La habitacion", "2015", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("En sus zapatos", "2005", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("Qué esperar cuando estás esperando", "2012", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("Dando la nota", "2012", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("X-Men: Apocalipsis", "2016", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("Passengers", "2016", "0")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("Marte", "2015", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("El diario de Noa", "2004", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("Spotlight", "2015", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("Criadas y señoras", "2011", "1")');
				tx.executeSql('INSERT INTO Peliculas(nombrep, any, vista) VALUES ("Crazy, Stupid, Love", "2011", "1")');
				//Insercion en la tabla Peliactor
				tx.executeSql('INSERT INTO Pelifoto(idpe, foto) VALUES ("5", "xmen.jpeg")');		
				
				//	Insercion en la tabla Actores
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Brie Larson")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Jacob Tremblay")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Cameron Diaz")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Toni Collette")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Jennifer Lopez")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Jennifer Aniston")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Anna Kendrick")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Elizabeth Banks")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Rebel Wilson")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Brittany Snow")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Hugh Jackman")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Jennifer Lawrence")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Chris Pratt")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Matt Damon")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Rachel McAdams")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Mark Ruffalo")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Michael Keaton")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Emma Stone")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Viola Davis")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Ryan Gosling")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Steve Carell")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Julianne Moore")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Marisa Tomei")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Kevin Bacon")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Scarlett Johansson")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Jonathan Rhys-Meyers")');
				tx.executeSql('INSERT INTO Actores(nombrea) VALUES ("Emily Mortimer")');
				
				
				//	Insercion en la tabla Peliactor
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("1","1")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("1","2")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("2","3")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("2","4")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("3","3")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("3","5")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("3","7")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("3","8")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("3","9")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("4","7")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("4","9")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("4","10")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("5","11")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("5","12")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("6","12")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("6","13")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("7","14")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("8","15")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("8","20")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("9","15")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("9","16")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("9","17")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("10","18")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("10","19")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("11","18")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("11","20")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("11","21")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("11","22")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("11","23")');
				tx.executeSql('INSERT INTO Peliactor(idpeli, idactor) VALUES ("11","24")');
				
				sessionStorage.entered = true;
			}

			function errorCreateDatabase(err) {
				  alert("Error in creation database function...! " + err.code);
			}

			function successCreateDatabase() {
				  console.log("Database created successfully....!");
				  displayDatabaseDetails();
			}

			function displayDatabaseDetails() {
				  localDatabase.transaction(executeQuery,errorTransaction,successTransaction);
			}

			function errorTransaction(err) {
				  alert("Error in transaction...! ");
			}

			function successTransaction() {
				  console.log("Success transaction....!");
			}


			
			
			function executeQuery(db) {
				  db.executeSql("SELECT * FROM AWUG3_usuarios,AWUG3_fotos WHERE idusuario=id_usuario_foto;",[],querySuccess,queryFailure);
                    //SELECT * FROM AWUG3_usuarios, AWUG3_fotos WHERE idusuario = idusuario_foto;
				  
			}
			
			function querySuccess(tx,results) {
				  console.log("Query executed successfully....!");
				  //Getting row length...
				  var rowLength = results.rows.length;
                //    $('#pelis').append('<p>hello</p>'); 
				  for(var i=0;i<rowLength;i++) {
					var publi = results.rows.item(i);
                    var user = "002"; //ESTO ES PARA CUANDO ESTE EL LOGIN!!!!!!!!!!!!!!!!!!
                    if (publi.idusuario != user){
                      $('#pelis').append('<li><img src="' + publi.img_perfil +'" class="list-icon"> <p class="itempeli" style="padding-top:3%"><strong>' + publi.usernick + '</strong></p><img src="' + publi.img +'" style="display:block; margin:auto; width:330px; heigh:330px;"> <p style="padding-left:4%; "><strong>Descripción</strong> ' + publi.descripcion1 + '</p><p style="padding-left:4%;  "><strong> Descripción premium </strong> ' + publi.descripcion2 + '</p></li>');
                    
					
                    //likes: <p><img style="width:10%" src="img/estrella2.png"></p> 
					//localStorage.setItem("idpeli", idpelicula);
					/* $('#pelis').append('<li><img src="' + publi.img_perfil +'" class="list-icon"><p class="itempeli" style="padding-top:3%"><strong>' + publi.usernick + '</strong></p><img src="' + publi.img +'" style="display:block; margin:auto; width:330px; heigh:330px;"><p style="padding-left:4%;  display:block; margin:auto;"><strong>Descripción</strong> ' + publi.descripcion1 + '</p><p style="padding-left:4%;  display:block; margin:auto;"><strong> Descripción premium </strong> ' + publi.descripcion2 + '</p></li>');*/
					
                    }
						
					}
					
					
				
				 
			}
			
			
			
			function queryFailure() {
				  alert("Query execution failed....!");
			}
			
			init();
		
    }
};

			function pasarvariable(idpelicula){
				localStorage.setItem("idpeli", idpelicula);
				//var idpeli = localStorage.getItem("idpeli");
			}

