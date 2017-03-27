
	

	var chat = {

		renderRow: function(dataObjct){

			var chatRow = document.createElement("div"),
				date = new Date(),
				time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
				message;

			chatRow.classList.add("chatRow");

			if (dataObject.type == "status")
				message = "<span class='status'>" + dataObject.message + "</span>";
			else
				message = "<span class='name'>" + dataObject.name + ": </span><span class='message'>" + dataObject.message + "</span>";

			chatRow.innerHTML = "<span class='time'>" + time + "</span>\n" + message;

			this.chatWidow.appendChild(chatRow);


		},

		sendData: function(msgObject){

			var data = JSON.stringify(msgObject);

			// wysyłamy wiadomość na serwer
		},

		displayMessage: function(e){

			var dataObject = JSON.parse(e.data);

			this.renderRow(dataObject);
		},

		sendMessage: function(){
			var message = this.messageInput.value;

			if (message !==""){
				// wysyłamy wiadomość na serwer
				

				this.messageInput.value = "";
			}
		},

		joinToChat: function(e){

			var name = this.nameInput.value;


			if(name !== ""){
				this.sendData({
					type: "join",
					name: name
				});

				e.target.onclick = null;
				e.target.setAttribute("disabled", "disabled");
				this.nameInput.setAttribute("readonly", "readonly");

				this.submitButton.removeAttribute("disabled");
				this.submitButton.onclick = this.sendMessage.bind(this);
			} 

		},
	
		init: function(){

			if (!window.WebSocket) return; // jeśli nie jest wspierany websocket przerywam funkcję

			this.nameInput = document.querySelector("#yourName");
			this.joinButton = document.querySelector("#join");
			this.chatWindow = document.querySelector("#chatWindow");
			this.messageInput = document.querySelector("#message");
			this.submitButton = document.querySelector("#submit");

			this.joinButton.onclick = this.joinToChat.bind(this);
		}

	};

	chat.init();

