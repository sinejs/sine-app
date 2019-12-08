import template from './home.html';
import './home.css';
import alertHtml from '../alert/alert.html';
import alertcmpHtml from '../data/alertcmp.html';

@sine.decorator.component({
    namespace: 'sine.app',
    selector: 'app-home',
    template: template
})
export class HomeComponent extends sine.Component {
    constructor() {
        super();
        this.alertHtml = alertHtml;
        this.alertcmpHtml = alertcmpHtml;
        this.entity = {
            level: 'success',
            content: ''
        };
        this.alerts = [];
        this.levels = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
        this.alert('primary');
        this.alert('secondary');
    }

    alert(level, content) {
        this.alerts.toProxy().push({
            level: level,
            css: 'alert-' + level,
            label: content || sine.format('A simple {0} alert—check it out!', level)
        });
    }

    createAlert(entity){
        this.alert(entity.level, entity.content);
    }
}