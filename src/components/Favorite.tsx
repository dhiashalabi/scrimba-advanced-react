import React, { Component } from "react"

type FavoriteState = {
    isFavorite: boolean
}

class Favorite extends Component {
    state: FavoriteState = {
        isFavorite: false
    }

    toggleFavorite = () => {
        this.setState(function (prevState: FavoriteState) {
            return {
                isFavorite: !prevState.isFavorite
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span
                        onClick={this.toggleFavorite}
                    >
                        {this.state.isFavorite ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        )
    }
}

export default Favorite