import template from './app.html';
import { routes } from './routes';
import './app.css';

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

        this.brand = {
            label: 'Sine',
            url: '#'
        };
    
        this.navItems = [
            {
                label: 'Home',
                active: false,
                disable: false,
                path: 'home'
            },
            {
                label: 'Document',
                active: false,
                disable: false,
                path: 'docu'
            },
            {
                label: 'Component',
                active: false,
                disable: false,
                path: 'component'
            }
        ];

        this.navOptions = {
            color: 'dark'
        }

        this.$router.config(routes, {
            base: location.host + location.path
        });
    }
}