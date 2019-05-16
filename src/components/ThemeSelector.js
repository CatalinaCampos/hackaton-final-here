import React, { Component } from 'react';


class ThemeSelector extends Component {
    render() {
        var themes = [
            // 'normal.day',
            // 'normal.day.grey',
            // 'normal.day.transit',
            // 'normal.night',
            // 'normal.night.grey',
            // 'reduced.night',
            // 'reduced.day',
            // 'pedestrian.day',
            // 'pedestrian.night',
        ];

        var thumbnails = [];
        var onChange = this.props.changeTheme;
        themes.forEach(function(theme) {
            thumbnails.push(<img key={ theme } src={ 'images/' + theme + '.thumb.png' } onClick= { onChange } alt={ theme } id={ theme } />);
        });

        return (
            <div>
            { thumbnails }
            </div>
        );

    }
}

export default ThemeSelector;