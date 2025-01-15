export async function fetchCountries() {
    const apiUrl = process.env.REACT_APP_URL_API_COUNTRIES || "https://restcountries.com/v3.1/all";
    if (!apiUrl) {
        throw new Error("API URL is not defined");
    }
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch countries:", error);
        throw error;
    }
}