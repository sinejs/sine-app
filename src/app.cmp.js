import template from './app.html';
import { routes } from './routes';

@sine.decorator.component({
    namespace: 'sine.app',
    selector: 'app',
    template: template,
    inject: {
        $router: '$router'
    }
})
class AppComponent extends sine.Component {
    constructor() {
        super();

        this.$router.config(routes, {
            base: location.host + location.path
        });
    }
}