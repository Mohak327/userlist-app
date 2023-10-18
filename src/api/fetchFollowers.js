export async function fetchFollowers(username) {
try {
    const response = await fetch(`https://api.github.com/users/${username}/followers`);
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching user details:', error);
    return [];
}
}