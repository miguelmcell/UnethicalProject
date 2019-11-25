import React, { Component } from 'react'
import axios from 'axios'
import sortImg from '../img/sort.png'
import sortAscImg from '../img/sort-asc.png'
import sortDescImg from '../img/sort-desc.png'
import Highlighter from 'react-highlight-words'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityData: [],
            sortDirection: '',
            sortColumn: '',
            loading: true,

        }
    }

    async componentDidMount() {
		try {
			const result = await axios.get('/v1/api/City')
			this.setState({
				cityData: result.data.objects,
				loading: false
			});
		} catch (error) {
			this.setState({
				error,
				loading: false
			});
		}
	}

    renderTableData(path, modelType) {
        if(modelType === 'crime') {
            return this.props.tableRows.map((data, index) => {
                const { Crime_idCity, Aggravated_Assault, Arson, Burglary, Homicide, Larceny, Property_Crime, Vehicle_Theft, Robbery, Violent_Crime } = data
                let City = ''
                let State = ''
                for(var i = 0; i < this.state.cityData.length; i++) {
                    if(this.state.cityData[i].idCity === Crime_idCity) {
                        City = this.state.cityData[i].CityName
                        State = this.state.cityData[i].State
                        break
                    }
                }

                return (
                    <tr key={index}>
                        <td><a href="" onClick={() => this.props.history.push({pathname: path, state: { data: data, city: City, state: State, id: Crime_idCity}})}><Highlighter searchWords={this.props.searchWords} textToHighlight={City} /></a></td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Aggravated_Assault)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Arson)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Burglary)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Homicide)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Larceny)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Property_Crime)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Vehicle_Theft)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Robbery)} /> cases in 2018</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Violent_Crime)} /> cases in 2018</td>
                    </tr>
                )
            })
        } else if(modelType === 'climate') {
            return this.props.tableRows.map((data, index) => {
                const { Climate_idCity, Precipitation, RainDays, Avg_Temp, Annual_High, Annual_Low } = data
                let City = ''
                let State = ''
                for(var i = 0; i < this.state.cityData.length; i++) {
                    if(this.state.cityData[i].idCity === Climate_idCity) {
                        City = this.state.cityData[i].CityName
                        State = this.state.cityData[i].State
                        break
                    }
                }
                return (
                    <tr key={index}>
                        <td><a href="" onClick={() => this.props.history.push({pathname: path, state: { data: data, city: City, state: State, id: Climate_idCity }})}><Highlighter searchWords={this.props.searchWords} textToHighlight={City} /></a></td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Precipitation)} />mm per month</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(RainDays)} /> per year</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Avg_Temp)} />°C</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Annual_High)} />°C</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Annual_Low)} />°C</td>
                    </tr>
                )
            })
        } else if(modelType === 'quality-of-life') {
            return this.props.tableRows.map((data, index) => {
                const { QOL_idCity, Housing, Cost_of_Living, Commute, Healthcare, Education, Environmental_Quality, Tax } = data
                let City = ''
                let State = ''
                for(var i = 0; i < this.state.cityData.length; i++) {
                    if(this.state.cityData[i].idCity === QOL_idCity) {
                        City = this.state.cityData[i].CityName
                        State = this.state.cityData[i].State
                        break
                    }
                }
                return (
                    <tr key={index}>
                        <td><a href="" onClick={() => this.props.history.push({pathname: path, state: { data: data, city: City, state: State, id: QOL_idCity }})}><Highlighter searchWords={this.props.searchWords} textToHighlight={City} /></a></td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Housing)} />/10</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Cost_of_Living)} />/10</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Commute)} />/10</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Healthcare)} />/10</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Education)} />/10</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Environmental_Quality)} />/10</td>
                        <td><Highlighter searchWords={this.props.searchWords} textToHighlight={String(Tax)} />/10</td>
                    </tr>
                )
            })
        }

    }

    sortClick(column) {
        console.log("before sortClick: ", column, this.state.sortDirection, this.state.sortColumn)
        if(this.state.sortColumn === column) {
            if(this.state.sortDirection === 'asc') {
                this.setState({
                    sortColumn: column,
                    sortDirection: 'desc'
                })
                this.props.sortData('desc', column)
            } else {
                this.setState({
                    sortColumn: column,
                    sortDirection: 'asc'
                })
                this.props.sortData('asc', column)
            }
        } else{
            this.setState({
                sortColumn: column,
                sortDirection: 'asc'
            })
            this.props.sortData('asc', column)
        }
        console.log("after sortClick: ", column, this.state.sortDirection, this.state.sortColumn)
    }

    renderTableHeader() {
        return this.props.tableHeader.map((key, index) => {
            if(this.props.doSort) {
                let sort = sortImg
                if(key === this.state.sortColumn){
                    sort = this.state.sortDirection === 'asc' ? sortAscImg : sortDescImg
                }
                return <th key={index}>{key} <span style={{float:"right"}}><img src={sort} height="20px" width="20px" onClick={() => this.sortClick(key)}/></span></th>
            } else {
                return <th key={index}>{key}</th>
            }
        })
    }

    render() {
        if(this.props.loading) {
            return <h2>Loading...</h2>
        }

        return (
            <table className="table table-striped table-dark" id='students'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData(this.props.path, this.props.modelType)}
                    {console.log("table len: ", this.props.tableRows.length)}
                </tbody>
            </table>
        )
    }
}

export default Table
