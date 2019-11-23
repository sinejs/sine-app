import template from './home.html';

@sine.decorator.component({
    namespace: 'sine.app',
    selector: 'app-home',
    template: template
})
export class HomeComponent extends sine.Component {
    constructor() {
        super();
    }
}