"use client";

import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IntercomProvider } from "./intercom-provider";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <IntercomProvider>
                {children}
            </IntercomProvider>
        </QueryClientProvider>
    )
};

export default Providers
