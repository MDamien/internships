var Filters = React.createClass({
  handleTextFilterChange: function(){
    var filters = this.props.filters;
    filters.text = this.refs.text.getDOMNode().value;
    this.props.onUpdate(filters);
  },
  handleTypeChange: function(){
    var filters = this.props.filters;
    filters.type = this.refs.type.getDOMNode().value;
    this.props.onUpdate(filters);
  },
  handleBranchChange: function(){
    var filters = this.props.filters;
    filters.branch = this.refs.branch.getDOMNode().value;
    this.props.onUpdate(filters);
  },
  handleDisplayNotRealChange: function(evt){
    var filters = this.props.filters;
    filters.hide_not_real = evt.target.checked;
    this.props.onUpdate(filters);
  },
  handleFromChange: function(evt){
    var filters = this.props.filters;
    filters.from = this.refs.from.getDOMNode().value;
    this.props.onUpdate(filters);
  },
  handleToChange: function(evt){
    var filters = this.props.filters;
    filters.to = this.refs.to.getDOMNode().value;
    this.props.onUpdate(filters);
  },
  render:function() {
    var date_min = "A2002";
    var date_max = "A2015";
    var dates = []
    for(var year = 2002; year <= 2015; year++){
      dates.push('P'+year);
      dates.push('A'+year);
    }
    var options = dates.map(function(d,i){
        return <option value={d} key={i}>{d}</option>
    })
    var divider = (<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>)
    return (
      <div className="form-inline">
        <input className="form-control" name="text" type="text" ref="text"
          onChange={this.handleTextFilterChange}
          placeholder="Rechercher..." value={this.props.filters.text}/>
      {divider}
      <label htmlFor="internship_type">Type</label>
      <select name="internship_type" className="form-control" defaultValue="all" ref="type"
        onChange={this.handleTypeChange} >
        <option value="all">Tous</option>
        <option value="TN05">TN05</option>
        <option value="TN09">TN09</option>
        <option value="TN10">TN10</option>
        <option value="apprentissage">Apprentissage</option>
        <option value="interculturel">Interculturel</option>
      </select>
      {divider}
      <label htmlFor="branch">Branche</label>
      <select name="branch" className="form-control" defaultValue="all"
        onChange={this.handleBranchChange} ref="branch">
        <option value="all">Toutes</option>
        <option value="GB">GB</option>
        <option value="GI">GI</option>
        <option value="GM/GSM">GM/GSM</option>
        <option value="GP">GP</option>
        <option value="GSU">GSU</option>
      </select>
      {divider}
      <label htmlFor="from">De</label>
      <select name="from" className="form-control" defaultValue={date_min} ref="from"
        onChange={this.handleFromChange}>
        {options}
      </select>
      <label htmlFor="to">&nbsp;&nbsp;&nbsp;à</label>
      <select name="to" className="form-control" defaultValue={date_max} ref="to"
        onChange={this.handleToChange}>
        {options}
      </select>
      {divider}
      <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="checkbox" className="checkbox" defaultChecked={false}
            onChange={this.handleDisplayNotRealChange} /> Cacher sujetss non pris
        </label>
      </div>
      );
}
})