import { withToggler } from "../HOCs/withToggler"

function Favorite(props: any) {
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span
                    onClick={props.toggle}
                >
                    {props.on ? "❤️" : "🖤"}
                </span>
            </h1>
        </div>

    )
}

export default withToggler(Favorite, { defaultOnValue: false })