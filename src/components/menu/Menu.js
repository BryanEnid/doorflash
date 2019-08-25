import React, { Component } from "react"
import './Menu.css';
import "./pagination.css"

//Material UI
import Switch from "@material-ui/core/Switch"
import Pagination from "rc-pagination";
const pagStyle = {
    display: "inline-block",
    margin: "30px auto",
}

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            store: "",
            switch: false,
            numberOfPages: 0,

            actualPage: 1,
            limit: 10,
            itemsCount: 0

        }
        this.loading = false
        this.fetchMoreItems = this.fetchMoreItems.bind(this)
        this.handleSwitchForPagination = this.handleSwitchForPagination.bind(this)
    }

    componentWillReceiveProps = (nextprops) => {
        this.setState({
            menu: nextprops.menu.menu,
            store: nextprops.menu.name,
            numberOfPages: nextprops.menu.pagination.pages,
            actualPage: 1,
            limit: nextprops.menu.pagination.limit,
            itemsCount: nextprops.menu.pagination.elementsCount
        })
    }


    handleSwitchForPagination = () => {
        this.setState({
            switch: !this.state.switch,
            menu: [],
            actualPage: 1
        }, () => {
            this.loading = true
            this.state.switch ? this.fetchMoreItems() : this.fetchMoreItems(1)
        })
    }

    componentDidMount = async () => {
        const el = document.getElementById("loading")
        window.addEventListener("scroll", (e) => {
            const elDOM = el.offsetTop - 600
            const windowDOM = window.pageYOffset + window.innerHeight
            if (windowDOM >= elDOM && !this.loading && this.state.switch) {
                this.loading = true
                this.fetchMoreItems()
            }
        })
    }

    fetchMoreItems = async (paginationEvent) => {
        let page = this.state.actualPage
        if (paginationEvent) page = paginationEvent
        try {
            const storeName = this.state.store
            const menuAPI = await fetch(`${this.props.HOSTNAME}/partnerships/${storeName}/menu?skip=${(page - 1) * 10}`)
            const json = await menuAPI.json()
            const { success } = json

            if (success) {
                if (paginationEvent) {
                    this.setState({
                        menu: [...json.menu],
                        numberOfPages: json.pagination.pages,
                        switch: this.state.switch,
                        actualPage: paginationEvent
                    }, () => {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        this.loading = false
                    })
                } else {
                    this.setState({
                        menu: [...this.state.menu, ...json.menu],
                        numberOfPages: json.pagination.pages,
                        switch: this.state.switch,
                        actualPage: this.state.actualPage + 1
                    }, () => {
                        this.loading = false
                    })
                }
            }

            this.loading = false
        } catch (err) {
            console.log(err)
        }
    }

    render = () => {
        return (
            <div>
                <div className="infinite">
                    <div>
                        <p>Infinite Scroll</p>
                        <Switch checked={this.state.switch} color="primary" onChange={this.handleSwitchForPagination} />
                    </div>
                </div>

                <section>
                    <div className="menuSections">

                        <ul>
                            <div className="arrow">></div>
                            <li>Popular Items</li>
                            <li>Value Menu</li>
                            <li>Drinks</li>
                            <li>Chicken</li>
                            <li>Sanswiches</li>
                            <li>Chicken</li>
                            <li>Sanswiches</li>

                        </ul>
                    </div>
                    <div className="menuContainer">
                        {
                            this.state.menu.map(item => {
                                const { title, description, price, banner_image, _id } = item
                                if (banner_image) {
                                    return (
                                        <div className="menuCards" key={_id}>
                                            <img src={banner_image} alt={banner_image} />
                                            <h2 className="title">{title}</h2>
                                            <p>{description}</p>
                                            <span className="price">{price}</span>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="menuCards no_img" key={_id}>
                                            <img alt="" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.puella-magi.net%2Fthumb%2F2%2F27%2FNo_Image_Wide.svg%2F800px-No_Image_Wide.svg.png%3F20110202071158&f=1" />
                                            <h2 className="title">{title}</h2>
                                            <p>{description}</p>
                                            <span className="price">{price}</span>
                                        </div>
                                    )
                                }
                            })
                        }

                        {
                            this.state.menu.length === 0 ?
                                <div className="menuCards">
                                    <h2 className="title">This section or entire website is having big changes by the original source (Doordash.com). These problems will be fixed soon, please come back later</h2>
                                </div>
                                : false
                        }
                    </div>
                </section>

                <div id="loading" >
                    {!this.state.switch && <Pagination
                        current={this.state.actualPage}
                        total={this.state.itemsCount}
                        limit={10}
                        onChange={this.fetchMoreItems}
                        centerRipple={true}
                        style={pagStyle}
                    />
                    }
                </div>
            </div>
        )
    }
}