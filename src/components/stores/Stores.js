import React, { Component } from "react"
import './Stores.css';

export default class Stores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetchedStoreData: [],
            fetchedStoreMenu: [],
            selectedMenu: "",
            query: "",
            banner_image: ""
        }

        this.fetchMenuFromSelectedStore = this.fetchMenuFromSelectedStore.bind(this)
        this.handleNewFetch = this.handleNewFetch.bind(this)
    }

    componentDidMount = async () => {
        const storesAPI = await fetch(`${this.props.HOSTNAME}/partnerships`)
        let json = [];
        if (storesAPI.status === 200) {
            json = await storesAPI.json()

            this.setState({
                fetchedStoreData: json,
                selectedMenu: json[0].name
            }, () => {
                this.fetchMenuFromSelectedStore(this.state.selectedMenu, true)
            })
        }
    }

    fetchMenuFromSelectedStore = async (storeName, componentDidMount = false, fetchMore = false) => {
        if (storeName !== this.state.selectedMenu || componentDidMount) {
            this.setState({ selectedMenu: storeName }, async () => {
                let { selectedMenu, query } = this.state
                const storesAPI = await fetch(`${this.props.HOSTNAME}/partnerships/${selectedMenu}/menu/${query}`)
                let json = {
                    _id: "",
                    name: "",
                    menu: [],
                    pagination: {
                        "elementsCount": 0,
                        "pages": 0,
                        "skip": 0,
                        "limit": 10,
                        "actualPage": 1
                    }
                }
                if (storesAPI.status === 200) {
                    json = await storesAPI.json()
                }

                this.setState({
                    fetchedStoreMenu: json
                }, () => {
                    this.props.onSelectedStore(this.state.fetchedStoreMenu)
                })
            })
        }
    }

    handleNewFetch = (e) => {
        this.fetchMenuFromSelectedStore(e.currentTarget.dataset.storeName)
    }

    render() {
        return (
            <div id="storesSection">
                <ul>
                    {this.state.fetchedStoreData.map(({ banner_image, title, _id, name }) => (
                        <li key={_id} className="storesCard" onClick={this.handleNewFetch} data-store-name={name}>
                            <img src={banner_image} alt={name + "_logo"} className="img" />
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}