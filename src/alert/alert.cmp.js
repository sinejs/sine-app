import template from './alert.html';
import './alert.css';

@sine.decorator.component({
    namespace: 'sine.app',
    selector: 'app-alert',
    template: template
})
export class TodoComponent extends sine.Component {
    constructor() {
        super();
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