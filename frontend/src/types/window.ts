export {}; 
// Corrected declaration for extending the global Window interface
declare global {
    interface Window {
        ethereum: any; // or a more specific type if known
    }
}