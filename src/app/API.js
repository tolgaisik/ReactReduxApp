export const get = async (URL) => {
	const response = await fetch(URL);
	return await response.json();
};

export const post = async (URL, data) => {
	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(data),
	});
	return await response.json();
};
