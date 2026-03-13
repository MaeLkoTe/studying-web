function PurpleButton({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <button {...props} className="   
                            px-2 cursor-pointer border-2 rounded-lg 
                            transition-transform duration-300 hover:scale-105 active:scale-98
                            bg-violet-400 text-white">
                    {children}
        </button>
    )
}

export default PurpleButton