export async function fetchData(url) {
    // Log the full URL for debugging
    console.log(process.env.REACT_APP_URL_BASE + url);

    try {
        // Fetch data from the API
        const response = await fetch(process.env.REACT_APP_URL_BASE + url);
        
        // Parse the JSON response
        const data = await response.json();

        // Check if data exists
        if (data) {
            console.log(data);
            return data;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return false;
    }
}
