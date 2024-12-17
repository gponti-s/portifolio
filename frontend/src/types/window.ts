declare module 'global' {
    global {
        interface Window {
            ethereum: any; // or a more specific type if known
        }
    }
}