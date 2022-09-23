interface buttonProps {
    textColor: String,
    buttonColor: String,
    buttonText: String
}

export function Button(props: buttonProps) {
    return (
        <button className={`text-Magic_4 w-36 h-12 rounded-xl ${"text-" + props.textColor} ${"bg-" + props.buttonColor}`}>{props.buttonText}</button>
    )
}


// "w-150px h-50px border-r-10px text-`${props.}`"></button>