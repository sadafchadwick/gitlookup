function fetchUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('No results');
                } else {
                    throw new Error('Request failed');
                }
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });
}

export default fetchUserProfile;