interface Props {
    transition?: boolean;
    number: number;
    className?: string;
    flavor: {
        icon: any;
        colorPalete: {
            bg: string;
            border: {
                outside: string;
                inside: string;
            };
            shadowColor: string;
        };
    };
    user: {
        username: string;
        avatar: string;
    };
    isSizeFixed?: boolean;
    id?: string;
}

export default function Example({
    transition = true,
    number,
    className,
    flavor: { icon: Icon, colorPalete },
    user,
    id,
    isSizeFixed = false }: Props) {

    const { username, avatar } = user ?? {}
    const ticketNumber = `#${number != null ? number.toString().padStart(5, '0') : ''}`

    const currentTicketStyles = {
        backgroundColor: colorPalete?.bg ?? "bg-[#101E5B]/65",
        borderColor: {
            outside: colorPalete?.border.outside ?? "border-top-primary/10",
            inside: colorPalete?.border.inside ?? "border-top-primary/20",
        },
        shadowColor: colorPalete?.shadowColor ?? "shadow-top-primary/25",
    };
    return (
        <div
            id={id}
            className={`block h-full overflow-hidden opacity-100 rounded-[60px] shadow-[inset_0_4px_30px] bg-transparent border p-5 ${isSizeFixed ? 'aspect-[2/1] w-full' : 'aspect-none w-full md:aspect-[2/1]'}, ${currentTicketStyles.borderColor.outside}, ${currentTicketStyles.shadowColor}, ${transition ? 'transition duration-500 ease-in-out' : ''}, ${className}`}
        >
            <div className={`relative h-full overflow-hidden border rounded-[40px], ${isSizeFixed ? 'flex' : 'grid md:flex'} ${currentTicketStyles.backgroundColor}, ${currentTicketStyles.borderColor.inside}, ${transition ? 'transition duration-500 ease-in-out' : ''}`}>
                <div className='absolute w-1/2 rotate-45 h-[300%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#41b3ff00] via-[#b0a9ff13] to-[#41b3ff00]'></div>

                <span className={`h-full font-mono text-center text-white font-bold ${isSizeFixed ? 'ticket-dash-border px-4 text-3xl py-0 leading-none [writing-mode:vertical-lr]' : 'ticket-dash-border-top row-[3/4] px-4 py-4 md:py-0 text-4xl md:px-4 md:text-3xl md:[writing-mode:vertical-lr] md:ticket-dash-border'}`}>
                    {ticketNumber}
                </span>
                {
                    <div key={username} className={`-rotate-12 ${isSizeFixed ? 'absolute bottom-[20%] left-[25%] mb-0 h-[40%] w-auto block' : 'md:w-auto row-[2/3] mb-8 md:mb-0 left-0 mx-auto md:mx-0 h-32 md:h-[40%] relative flex justify-center w-full md:block bottom-0 md:left-[25%] md:bottom-[20%]  md:absolute'}`}>
                        <Icon className='absolute w-auto h-full' />
                        <Icon
                            className='absolute w-auto h-full scale-105 blur-xl -z-10 opacity-40'
                            key={`${username}-shadow`}
                        />

                    </div>
                }
                <div className={`z-10 grid w-full grid-rows-2 ${isSizeFixed ? 'h-full pd-0 grid-rows-2' : 'h-auto md:h-full pt-5 md:pt-0 grid-rows-[1fr_auto] md:grid-rows-2'}`}>
                    <div className={`grid ${isSizeFixed ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                        <div className="h-max">
                            {avatar ? (
                                <div className={`flex items-end justify-start font-mono gap-4 text-white gap-y-2 ${isSizeFixed ? 'items-start flex-row p-6 text-left' : 'p-5 flex-col md:items-start md:flex-row md:p-6 items-center text-center md:text-left'}`}>
                                    <img
                                        src={avatar}
                                        alt={`Avatar de ${username}`}
                                        crossOrigin={'anonymous'}
                                        className={`block rounded-full ${isSizeFixed ? 'w-[78px] h-[78px]' : 'w-20 h-20 md:w-[78px] md:h-[78px]'}`}
                                        width='78'
                                        height='78'
                                    />
                                    <div>
                                        <p>{username}</p>
                                        <span className='block px-2 py-1 mt-1 text-xs font-medium rounded w-max text-white/80 bg-white/10'>
                                            The clancy world tour
                                        </span>
                                    </div>

                                </div>
                            ) : (
                                <div className={`w-12 h-12 rounded-full bg-[#fff]`}>
                                    <p>Inicia Sesion </p>
                                </div>
                            )
                            }

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

