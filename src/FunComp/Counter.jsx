import { render } from "@testing-library/react"
import axios from "axios"
import { useEffect, useState } from "react"


const Counter = () => {
    
    let [text, setText] = useState('')
    let [view, setView] = useState([])

    useEffect(() => {

        const url = 'https://newsapi.org/v2/top-headlines?apiKey=54da94e5bdee433caf334ae91c37f642&country=id&q='


        axios.get(url+text).then(res => {
        const article = res.data.articles
        setView(article)

        })

        localStorage.setItem('text', text)
        console.log(text)

    }, [text])

    
    return (

        <div className="header">
            
            <nav class="navbar fixed-top navbar-light bg-light">
                <div class="container">
                    <h1 class="navbar-brand">RNews</h1>
                    <form class="d-flex">
                    <input type="text" class="form-control me-2" placeholder="Search" aria-label="Search" onChange={(a) => setText(a.target.value)} />
                    </form>
                </div>
            </nav>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                {view.map(( v ) => ( 
                    <div class="col">
                        <div class="card">
                            <img src={v.urlToImage} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{ v.title }</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{v.author}</h6>
                                <p class="card-text"><small class="text-muted">{v.publishedAt}</small></p>
                                <p class="card-text">{v.description}</p>
                                <button href={v.url} class="btn btn-primary" >Selengkapnya</button>           
                            </div>
                        </div>
                    </div>
                    ) )}
                </div>
            </div>
        </div>
    ) 
}


export default Counter