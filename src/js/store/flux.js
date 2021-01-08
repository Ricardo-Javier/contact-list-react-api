const getState = ({ getStore, getActions, setStore }) => {
	const baseURL = "https://assets.breatheco.de/apis/fake/contact/";
	const agenda_slug = "chris-agenda";
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			syncData: () => {
				fetch(`${baseURL}/agenda/${agenda_slug}`)
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => setStore({ contacts: data }))
					.catch(err => console.error(err));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},

			addContact: contact => {
				fetch(`${baseURL}/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => getActions().syncData())
					.catch(err => console.error(err));
			},

			deleteContact: contactID => {
				fetch(`${baseURL}/${contactID}`, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => getActions().syncData())
					.catch(err => console.error(err));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
