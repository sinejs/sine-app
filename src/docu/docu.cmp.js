import template from './docu.html';

@sine.decorator.component({
    namespace: 'sine.app',
    selector: 'app-docu',
    template: template
})
export class DocuComponent extends sine.Component {
    constructor() {
        super();

        this.items = [
            {
                label: 'item1'
            },
            {
                label: 'item2'
            },
            {
                label: 'item3'
            },
            {
                label: 'item4'
            },
            {
                label: 'item5'
            }
        ];

        this.options = {
            flexColumn: true
        };
    }
}