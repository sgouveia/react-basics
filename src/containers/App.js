import React, { Component } from 'react';
import CodeCadets from '../components/CodeCadets/CodeCadets';
import styles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        codeCadets: [
            { id: '10abdc', name: 'André', age: 45 },
            { id: '2bbyyp', name: 'João', age: 16 },
            { id: 'a', name: 'Mafalda', age: 20 }
        ],
        someOtherValue: 35,
        showCadets: false
    };

    nameChangedHandler = (event, id) => {
        const codeCadetIndex = this.state.codeCadets.findIndex(
            codeCadet => codeCadet.id === id
        );
        const codeCadet = { ...this.state.codeCadets[codeCadetIndex] };

        codeCadet.name = event.target.value;
        const codeCadets = [...this.state.codeCadets];
        codeCadets[codeCadetIndex] = codeCadet;

        this.setState({ codeCadets });
    };

    toggleCadetsHandler = () => {
        const doesShow = this.state.showCadets;
        this.setState({ showCadets: !doesShow });
    };

    deleteCodeCadetHandler = codeCadetIndex => {
        // const codeCadets = this.state.codeCadets; NEVER
        // const codeCadets = this.state.codeCadets.slice();
        const codeCadets = [...this.state.codeCadets];
        codeCadets.splice(codeCadetIndex, 1);
        this.setState({ codeCadets });
    };

    render() {
        let codeCadets = null;

        if (this.state.showCadets) {
            codeCadets = (
                    <CodeCadets 
                    codeCadets={this.state.codeCadets}
                    clicked={this.deleteCodeCadetHandler}
                    changed={this.nameChangedHandler}/>
            );
        }

        return (
            <div className={styles.App}>
                <Cockpit
                showCadets={this.state.showCadets}
                codeCadets={this.state.codeCadets}
                clicked={this.toggleCadetsHandler}
                />

                {codeCadets}
            </div>
        );
    }
}

export default App;
