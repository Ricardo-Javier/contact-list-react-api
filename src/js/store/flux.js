const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: "1736",
					agenda_slug: "chris-agenda",
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-12-23 00:01:20"
				},
				{
					id: "1736",
					agenda_slug: "chris-agenda",
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-12-23 00:01:20"
				},
				{
					id: "1736",
					agenda_slug: "chris-agenda",
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-12-23 00:01:20"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
