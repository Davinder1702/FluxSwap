# 🌊 AMM DEX – USDC/WETH (Polygon Amoy) PoC

A Proof of Concept (PoC) Automated Market Maker (AMM) decentralized exchange inspired by Uniswap V2, built with React and a custom ERC20-based LP AMM smart contract.
This PoC demonstrates USDC ↔ WETH swaps and liquidity provisioning on the Polygon Amoy Testnet.

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![React](https://img.shields.io/badge/react-18.3.1-61dafb.svg)
![ethers](https://img.shields.io/badge/ethers-5.8.0-764abc.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Project Scope (PoC)

This project focuses on:

✅ A single AMM pool (USDC / WETH)

✅ Constant product formula (x × y = k)

✅ Uniswap V2–style swap & liquidity logic

✅ ERC20 LP tokens minted/burned on liquidity changes

✅ Polygon Amoy Testnet only

## ✨ Features

- 🔄 **Token Swapping** - Swap between USDC and WETH with real-time price estimation
- 💧 **Liquidity Management** - Add and remove liquidity from the pool
- 📊 **Pool Details** - Real-time pool statistics and user holdings
- 🔐 **Multi-Wallet Support** - Powered by Reown AppKit (WalletConnect)
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🌐 **Multi-Chain** - Support for Polygon Amoy Testnet
- ⚡ **Slippage Protection** - Configurable slippage tolerance

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18.0.0 or higher
- **npm** or **yarn**
- **MetaMask** or compatible Web3 wallet
- **Reown Project ID** ([Get one here](https://dashboard.reown.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishabhkushwaha17/FluxSwap.git
   cd FluxSwap
   ```

2. **Install dependencies**
   ```bash
   npm install

   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
FluxSwap/
├── public/
│   └── index.html
├── src/
│   ├── components/          # React components
│   │   ├── BoxTemplate.jsx        # Reusable input box component
│   │   ├── ContainerComponent.jsx # Main container with tabs
│   │   ├── SwapComponent.jsx      # Token swap interface
│   │   ├── ProvideComponent.jsx   # Add liquidity interface
│   │   ├── WithdrawComponent.jsx  # Remove liquidity interface
│   │   └── FaucetComponent.jsx    # Testnet faucet (optional)
│   ├── config/              # Configuration files
│   │   ├── networks.js            # Network configurations
│   │   └── reown.js               # Wallet connection config
│   ├── utils/               # Utility functions
│   │   └── errorHandler.js        # User-friendly error messages
│   ├── App.js               # Main app component
│   ├── constants.js         # Contract ABI and addresses
│   ├── styles.css           # Global styles
│   └── index.js             # App entry point
├── package.json             # Dependencies and scripts
└── README.md
```
## 🔧 Configuration

### Network Configuration

The app supports multiple blockchain networks. Configure in `src/config/networks.js`:

```javascript
export const ACTIVE_NETWORK = "POLYGON_AMOY"; 
```

**Supported Networks:**
- Polygon (Amoy Testnet)

### Adding a Custom Network

Edit `src/config/networks.js`:

```javascript
CUSTOM_NETWORK: defineChain({
  id: YOUR_CHAIN_ID,
  caipNetworkId: "eip155:YOUR_CHAIN_ID",
  chainNamespace: "eip155",
  name: "Custom Network",
  nativeCurrency: {
    name: "Token",
    symbol: "TKN",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-url.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.com",
    },
  },
  testnet: true,
}),
```

### Contract Configuration

Update contract details in `src/constants.js`:

```javascript
export const CONTRACT_ADDRESS = "0x...";
export const USDC_CONFIG = {
  address: "0x...",
  abi: [...],
  decimals: 6
};
export const WETH_CONFIG = {
  address: "0x...",
  abi: [...],
  decimals: 18
};
```

## 🔌 Wallet Integration

The app uses **Reown AppKit** (formerly WalletConnect) for wallet connectivity.

### Supported Wallets

- MetaMask
- WalletConnect
- Coinbase Wallet
- Trust Wallet
- Rainbow
- And more...

Configure in `src/config/reown.js`.

## 🧪 Testing

### Local Testing

1. **Install Ganache** or use a testnet
2. **Deploy contracts** to your local/test network
3. **Update** `CONTRACT_ADDRESS` in `src/constants.js`
4. **Connect wallet** to the same network
5. **Test features** in the UI

### Testnet Setup

**Polygon Amoy Testnet:**
- Network: Polygon Amoy
- Chain ID: 80002
- RPC: https://rpc-amoy.polygon.technology/
- Faucet: https://faucet.polygon.technology/

**Get Test Tokens:**
1. Connect wallet to testnet
2. Visit faucet
3. Request test MATIC
4. Use the app's swap/provide features

## 🛠️ Development

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Create production build
npm run eject      # Eject from Create React App
```

### Code Style

- **ES6+** syntax
- **React Hooks** for state management
- **Functional components** preferred
- **CSS custom properties** for theming

## 🎯 Smart Contract Integration

### Contract Functions Used

**Read Functions:**
- `getPoolDetails()` - Get pool reserves and total shares
- `balanceOf(address)` - Get LP token balance
- `getSwapToken1Estimate()` - Estimate swap output
- `getEquivalentToken2Estimate()` - Estimate required tokens

**Write Functions:**
- `swapToken1()` / `swapToken2()` - Execute token swaps
- `provide()` - Add liquidity
- `withdraw()` - Remove liquidity

## 🐛 Troubleshooting

### Common Issues

**Transaction Fails:**
- ✅ Check wallet balance
- ✅ Verify correct network
- ✅ Increase slippage tolerance
- ✅ Check contract approval

**Wallet Won't Connect:**
- ✅ Verify Reown Project ID
- ✅ Check network configuration
- ✅ Clear browser cache
- ✅ Try different wallet

**Incorrect Estimates:**
- ✅ Ensure pool has liquidity
- ✅ Check token decimals (USDC=6, WETH=18)
- ✅ Verify contract addresses

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.