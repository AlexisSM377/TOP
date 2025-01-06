import Container3D from "@/components/Container3D.astro";
import Example from "@/components/Example";
import { FLAVORS } from "@/flavors/data.astro";
import Twenty from "@/icons/Twenty.astro";
import { useEffect, useState } from "react";

interface TicketProps {
    ticketNumber: number;
    username: string;
    initialFlavor: boolean;
}

export const Ticket = ({
    initialFlavor,
    ticketNumber,
    username,
}: TicketProps) => {


    const [flavor, setFlavor] = useState(FLAVORS.blurryface ?? FLAVORS.clancy)
    const [number, setNumber] = useState(ticketNumber ?? 0)



    return (
        <div>
            <div className="block w-full h-full">
                <div className="flex items-center justify-center max-w-[700px] mx-auto mt-16 flex-0">
                    <Container3D>
                        <Example
                            transition={true}
                            number={number}
                            flavor={{
                                icon: Twenty,
                                colorPalete: {
                                    bg: "bg-[#ffffff]/80",
                                    border: {
                                        outside: "border-white-200/10",
                                        inside: "border-white-400/10",
                                    },
                                    shadowColor: "shadow-white-400/25",
                                },
                            }}
                            user={{ username: 'Alexis', avatar: 'https://unavatar.io/github/' }}
                        />
                        <h1>Hola</h1>
                    </Container3D>

                </div>

            </div>

        </div>
    );
}