import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenkliButon from "./RenkliButon";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            guncelRenk: {}
        }

        this.renkDegistir = this.renkDegistir.bind(this);
    }

    renkDegistir(butonunRengi){
        console.log(butonunRengi);
        this.setState({
            guncelRenk: butonunRengi
        })
    }

    render(){
        let mainClass = "main-container ";
        mainClass += this.state.guncelRenk.style;
       return <div className={mainClass}>
            <div className="main-container">
                {this.state.guncelRenk.renk} Buton Tıklandı
            </div>
           {
               [0,1,2,3,4].map(() => {
                   return <RenkliButon renkDegistir={this.renkDegistir} />
               })
           }
        </div>
    }

}

export default App;
