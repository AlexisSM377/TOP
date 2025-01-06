import { Container3D } from "@/components/Container3D"
import Ticket from "@/components/Ticket"
import 'atropos/css'


export const TicketHomeE = () => {
    return (
        <div>
            <div className="block w-full h-full">
                <div className="flex items-center justify-center max-w-[700px] mx-auto mt-16 flex-0">
                    <Container3D >
                        <Ticket />
                    </Container3D>

                </div>
            </div>
        </div>
    )
}