import React, { Component } from 'react';


class ThemeSelector extends Component {
    render() {
        let themes = [
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

        let thumbnails = [];
        let onChange = this.props.changeTheme;
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