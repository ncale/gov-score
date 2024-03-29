'use client';

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WC_PROJECT_ID } from '@/config/config';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider } from 'wagmi';
import { mainnet, optimism, optimismSepolia } from 'wagmi/chains';
import { http } from '@wagmi/core';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const config = getDefaultConfig({
  appName: 'GovScore',
  projectId: WC_PROJECT_ID,
  chains: [mainnet, optimism, optimismSepolia],
	transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
		[optimismSepolia.id]: http(),
  },
  ssr: true,
});
const queryClient = new QueryClient();

export default function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
	return (
    <WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>
					<NextUIProvider navigate={router.push}>
						{children}
					</NextUIProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
  );
};