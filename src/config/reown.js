import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { http } from "wagmi";
import { activeNetwork, ACTIVE_NETWORK } from "./networks";

export const projectId = process.env.REACT_APP_REOWN_PROJECT_ID || "YOUR_PROJECT_ID";

const metadata = {
    name: "FluxSwap",
    description: "Automated Market Maker",
    url: typeof window !== "undefined" ? window.location.origin : "https://localhost:3000",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};


const METAMASK_WALLET_ID = "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96";


const networks = [activeNetwork];


export const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    transports: {
        // Dynamic transport based on active network
        [activeNetwork.id]: http(activeNetwork.rpcUrls.default.http[0]),
    },
});


createAppKit({
    adapters: [wagmiAdapter],
    metadata: metadata,
    networks: networks,
    defaultNetwork: activeNetwork,
    projectId,

    featuredWalletIds: [METAMASK_WALLET_ID],
    includeWalletIds: [METAMASK_WALLET_ID],

    allWallets: "HIDE",

    enableCoinbase: false,

    features: {
        analytics: false,  // Disable analytics
        swaps: false,      // Disable swap feature
        onramp: false,     // Disable fiat onramp
    },

    enableWalletGuide: false,
});

console.log(` Reown AppKit initialized for ${activeNetwork.name}`);
console.log(` Active Network Key: ${ACTIVE_NETWORK}`);

export { activeNetwork };
